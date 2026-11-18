import { test, expect } from '@playwright/test';

test('theme toggle switches and is remembered', async ({ page }) => {
  await page.goto('/');
  const html = page.locator('html');
  const before = await html.getAttribute('data-theme');
  await page.locator('#theme-toggle').click();
  const after = await html.getAttribute('data-theme');
  expect(after).not.toBe(before);
  await page.goto('/story');
  await expect(html).toHaveAttribute('data-theme', after!);
});

test('document reader opens, closes and returns focus', async ({ page }) => {
  await page.goto('/story#ch-6');
  const opener = page.locator('#ch-6 .doc__open');
  await opener.click();
  await expect(page.locator('#doc-reader')).toBeVisible();
  await expect(page.locator('#doc-reader-img')).toHaveAttribute('src', /\.webp/);
  await page.keyboard.press('Escape');
  await expect(page.locator('#doc-reader')).toBeHidden();
  await expect(opener).toBeFocused();
});

test('a PDF preview opens inside the page and closes', async ({ page }) => {
  await page.goto('/credentials#references');
  const opener = page.locator('#references .sheet__paper').first();
  await opener.click();
  await expect(page.locator('#doc-reader')).toBeVisible();
  await expect(page.locator('#doc-reader-pdf')).toHaveAttribute('src', /\.pdf/);
  await page.keyboard.press('Escape');
  await expect(page.locator('#doc-reader')).toBeHidden();
  await expect(opener).toBeFocused();
});

test('the floating social bar links to every channel', async ({ page }) => {
  await page.goto('/');
  for (const host of ['linkedin.com', 'github.com', 'discord', 'mailto:']) {
    await expect(page.locator(`.social a[href*="${host}"]`).first()).toBeAttached();
  }
});

test('cat tracker tabs and diagram respond to the keyboard', async ({ page }) => {
  await page.goto('/work/outdoor-cat-tracker');
  const tabs = page.locator('[role="tab"]');
  await tabs.first().focus();
  await page.keyboard.press('ArrowDown');
  await expect(tabs.nth(1)).toHaveAttribute('aria-selected', 'true');
  await expect(tabs.nth(1)).toBeFocused();
  await page.locator('[data-step="1"]').click();
  await expect(page.locator('[data-count]')).toHaveText('1 / 5');
  await expect(page.locator('[data-note-out]')).toContainText('Tracker on the collar');
});

test('findyourself product window swaps screen and theme', async ({ page }) => {
  await page.goto('/work/findyourself');
  await page.locator('[data-mode="night"]').click();
  await page.locator('[data-screen="focus"]').click();
  await expect(page.locator('[data-shots] img.is-on')).toHaveAttribute('data-k', 'focus-night');
});

test('growgreen explorer swaps the page shown', async ({ page }) => {
  await page.goto('/work/growgreen');
  await page.locator('button.node[data-view="1"]').click();
  await expect(page.locator('[data-url]')).toContainText('Plans and Initiatives');
});

test('mobile menu opens and closes', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'phone only');
  await page.goto('/');
  const btn = page.locator('#menu-toggle');
  await btn.click();
  await expect(btn).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('#nav-links a', { hasText: 'Story' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(btn).toHaveAttribute('aria-expanded', 'false');
});

test('projects page filters to work in progress', async ({ page }) => {
  await page.goto('/projects');
  await page.locator('[data-f="in-progress"]').click();
  await expect(page.locator('[data-pgrid] .pc:not([hidden])')).toHaveCount(1);
  await expect(page.locator('[data-pgrid] .pc:not([hidden]) h3')).toContainText('FindYourself');
  await page.locator('[data-f="all"]').click();
  await expect(page.locator('[data-pgrid] .pc:not([hidden])')).toHaveCount(15);
});

test('an image opens full size in the viewer', async ({ page }) => {
  await page.goto('/projects/secure-banking-system');
  const opener = page.locator('.gal .zoom').first();
  await opener.click();
  await expect(page.locator('#doc-reader')).toBeVisible();
  await expect(page.locator('#doc-reader-img')).toHaveAttribute('src', /\.webp/);
  await page.keyboard.press('Escape');
  await expect(opener).toBeFocused();
});

test('projects page shows only projects with public source code', async ({ page }) => {
  await page.goto('/projects');
  await page.locator('[data-f="code"]').click();
  const shown = page.locator('[data-pgrid] .pc:not([hidden])');
  await expect(shown.first()).toBeVisible();
  for (const card of await shown.all()) {
    await expect(card.locator('a[href*="github.com"]').first()).toBeAttached();
  }
});

test('theme switch reports its state', async ({ page }) => {
  await page.goto('/');
  const sw = page.locator('#theme-toggle');
  const before = await sw.getAttribute('aria-checked');
  await sw.click();
  await expect(sw).not.toHaveAttribute('aria-checked', before!);
});
