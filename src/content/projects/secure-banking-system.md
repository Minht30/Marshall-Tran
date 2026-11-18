---
title: Secure Banking System
tagline: Encrypted multi-client ATM banking system
year: 2026
order: 2
group: coursework
context: TMU COE 817, Jan - Apr 2026
stack: [Java, RSA, AES-HMAC, PBKDF2, TCP sockets, Multi-threading]
cover: ../../../Images/secure-bank/architecture-diagram.png
coverAlt: Client and server architecture diagram for the secure banking system
contain: true
links:
  - { label: Source code, href: 'https://github.com/Minht30/Bank-System' }
role: 'Designed and built the client, server and security layer, in a team of 2'
highlights:
  - 'A Java client and server that serves three ATM clients at once, with deposit, withdraw and balance operations.'
  - 'RSA registration, PBKDF2 password hashing, and mutual nonce-challenge authentication to open a secure session.'
  - 'Every transaction protected with AES-HMAC, replay protection through sequence numbers, and an encrypted audit log.'
  - 'A multi-threaded TCP socket layer with structured error recovery.'
gallery:
  - { src: '../../../Images/secure-bank/architecture-diagram.png', alt: 'Client and server architecture diagram for the secure banking system', caption: 'End-to-end client and server architecture.' }
  - { src: '../../../Images/secure-bank/atm-client-interface.png', alt: 'The ATM client interface with account actions', caption: 'The ATM client used for account actions.' }
  - { src: '../../../Images/secure-bank/mutual-authentication-flow.png', alt: 'Sequence diagram of the mutual nonce-challenge authentication', caption: 'Mutual nonce-challenge authentication.' }
  - { src: '../../../Images/secure-bank/account-registration-flow.png', alt: 'Sequence diagram of account registration with RSA', caption: 'Account registration with RSA.' }
  - { src: '../../../Images/secure-bank/client-server-message-flow.png', alt: 'Diagram of the client and server message exchange', caption: 'Protected client and server message exchange.' }
  - { src: '../../../Images/secure-bank/server-transaction-processing.png', alt: 'Server log showing transaction handling and validation', caption: 'Server-side transaction handling.' }
---

A multi-client banking system in Java: RSA registration, PBKDF2 password hashing, mutual nonce-challenge authentication and AES-HMAC protected transactions over TCP, serving three concurrent ATM clients.
