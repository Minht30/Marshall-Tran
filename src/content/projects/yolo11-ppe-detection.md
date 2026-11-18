---
title: YOLO11 PPE detection
tagline: Detects missing safety gear in video
year: 2025
order: 5
group: coursework
context: TMU CPS 843, Sep - Dec 2025
stack: [Python, OpenCV, Ultralytics YOLO11]
cover: ../../../Images/ppe-detection/large-dataset-training-batch-illustrations.png
coverAlt: Training batch images with PPE bounding boxes
contain: true
links:
  - { label: Source code (team), href: 'https://github.com/Louis-Chevalier/CPS843-PPE-Detection' }
role: 'Trained and compared the models, in a team'
highlights:
  - 'A Python pipeline using Ultralytics YOLO11 to flag missing safety equipment in video.'
  - 'Trained with 15 epochs, batch size 16 and 640 px images on a GPU, with validation runs.'
  - 'Compared small and large datasets with normalized confusion matrices and precision-recall curves to choose a model.'
gallery:
  - { src: '../../../Images/ppe-detection/large-dataset-training-batch-illustrations.png', alt: 'Training batch images with PPE bounding boxes', caption: 'Training batches from the larger dataset.' }
  - { src: '../../../Images/ppe-detection/large-dataset-normalized-confusion-matrix.png', alt: 'Normalized confusion matrix for the large dataset', caption: 'Normalized confusion matrix, large dataset.' }
  - { src: '../../../Images/ppe-detection/large-dataset-precision-recall-curves.png', alt: 'Precision-recall curves for YOLO11n, s and m on the large dataset', caption: 'Precision-recall curves for YOLO11n, s and m.' }
  - { src: '../../../Images/ppe-detection/small-dataset-precision-recall-curves.png', alt: 'Precision-recall curves for the small dataset runs', caption: 'Precision-recall curves, small dataset.' }
  - { src: '../../../Images/ppe-detection/small-dataset-30-epochs-results.png', alt: 'Training result charts for the small dataset over 30 epochs', caption: 'Small dataset results over 30 epochs.' }
---

A computer vision pipeline that detects missing safety equipment in video, with models compared across datasets using confusion matrices and precision-recall curves.
