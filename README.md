# Foto Ivan Studio 77

Welcome to the Foto Ivan Studio 77 GitLab project! This project is dedicated to promoting the photo studio and showcasing its work.

## About Foto Ivan Studio 77

Foto Ivan Studio 77 is a premier photo studio specializing in capturing memorable moments for its clients. With a team of experienced photographers and state-of-the-art equipment, the studio provides high-quality photography services for various occasions, including weddings, portraits, events, and more.

## Features

- **Services**: Explore the services offered and the packages available for different types of events.
- **Contact**: Reach out for inquiries, bookings, or collaborations.

## Prerequisites

- Docker
- Node.js and NPM

## Necessary environment variables:

To send an email, the app utilizes EmailJS. Here are the values you get from EmailJS so you can send an email.

| Name             | Value |
| ---------------- | ----- |
| VITE_TEMPLATE_ID |       |
| VITE_SERVICE_ID  |       |
| VITE_USER_ID     |       |

## Local development

To start the application in the project root type this commands

```bash
cd fis77-ui
npm install
npm run dev
```

## Local deployment + docker

```bash
cd fis77-ui
npm install
npm run build
docker build -t fis77-ui .
```
