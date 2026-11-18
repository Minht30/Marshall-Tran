---
title: TASKANA testing
tagline: Testing a production Spring Boot API five ways
year: 2026
order: 3
group: coursework
context: TMU COE 891, Jan - Apr 2026
stack: [Java, JUnit, Maven, Docker, Spring Boot]
cover: ../../../Images/taskana-testing/testing-evaluation-pipeline.png
coverAlt: Testing and evaluation pipeline diagram for the TASKANA project
contain: true
links:
  - { label: Source code, href: 'https://github.com/Minht30/Taskana_Test' }
role: 'Wrote test suites and ran the LLM test generation study, in a team of 4'
highlights:
  - '40+ test methods covering 230 test cases, using control-flow graph, input space partitioning, logic-based and mutation testing.'
  - 'A Maven build and Docker-based CI across H2, PostgreSQL and Oracle-compatible schemas.'
  - 'Used Ollama to generate test cases with a local LLM, then compared them with hand-written JUnit suites.'
  - 'Reviewed teammates'' pull requests and kept the test documentation up to date.'
gallery:
  - { src: '../../../Images/taskana-testing/testing-evaluation-pipeline.png', alt: 'Testing and evaluation pipeline diagram for the TASKANA project', caption: 'The pipeline used to test and compare manual and LLM-generated suites.' }
  - { src: '../../../Images/taskana-testing/llm-test-generation-workflow.png', alt: 'LLM test generation workflow with traceability and repair steps', caption: 'LLM-assisted test generation, with traceability and repair steps.' }
  - { src: '../../../Images/taskana-testing/method-comparison-matrix.png', alt: 'Matrix comparing test quality across generation approaches', caption: 'Comparing test quality across approaches.' }
  - { src: '../../../Images/taskana-testing/coverage-summary-table.png', alt: 'Coverage summary table used for mutation benchmarking', caption: 'Coverage summary used for mutation benchmarking.' }
---

Five testing methods applied to an open-source Spring Boot REST API: 40+ test methods covering 230 test cases, LLM-assisted test generation compared with hand-written suites, and Docker-based CI across databases.
