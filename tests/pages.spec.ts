import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pages = [
  '/',
  '/story',
  '/credentials',
  '/projects',
  '/projects/secure-banking-system',
  '/projects/learnwithme',
  '/work/outdoor-cat-tracker',
  '/work/growgreen',
  '/work/findyourself',
  '/work/the-clean-divorce',
];

for (const path of pages) {
  test.describe(path, () => {
    test('loads with no console errors and no broken images', async ({ page }) => {
      const errors: string[] = [];
      page.on('console', (m) => {
        if (m.type() === 'error') errors.push(m.text());
      });
      page.on('pageerror', (e) => errors.push(e.message));
      await page.goto(path);
      await expect(page.locator('h1')).toBeVisible();
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 600) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 40));
        }
      });
      const broken = await page.evaluate(() =>
        [...document.images]
          .filter((i) => i.complete && i.naturalWidth === 0 && i.src && !i.closest('.peek, dialog'))
          .map((i) => i.src),
      );
      expect(broken).toEqual([]);
      expect(errors).toEqual([]);
    });

    test('never scrolls sideways', async ({ page }) => {
      await page.goto(path);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow).toBeLessThanOrEqual(0);
    });

    for (const theme of ['dark', 'light'] as const) {
      test(`passes axe WCAG 2.1 AA in the ${theme} theme`, async ({ page }) => {
        await page.emulateMedia({ reducedMotion: 'reduce' });
        await page.addInitScript((t) => localStorage.setItem('theme', t), theme);
        await page.goto(path);
        const results = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
          .exclude('.peek')
          .analyze();
        const summary = results.violations.map(
          (v) => `${v.id}: ${v.nodes.length} (${v.nodes[0]?.target.join(' ')})`,
        );
        expect(summary).toEqual([]);
      });
    }
  });
}

test('every internal link resolves', async ({ page, request }) => {
  const seen = new Set<string>();
  for (const path of pages) {
    await page.goto(path);
    const hrefs = await page.$$eval('a[href^="/"]', (as) =>
      as.map((a) => (a as HTMLAnchorElement).getAttribute('href')!.split('#')[0] || '/'),
    );
    hrefs.forEach((h) => seen.add(h));
  }
  for (const href of seen) {
    const res = await request.get(href);
    expect(res.status(), href).toBe(200);
  }
});
