# Hotel Booking System — Learning / Adaptation Project

This repository is a working copy/adaptation of the open-source **Next.js Hotel Booking** project originally published by Othmane Nissoukin. It has been used as a full-stack web-development study project rather than as original research work.

## Stack

The application demonstrates a modern booking workflow built with technologies including Next.js, Supabase, Auth.js, form validation, mapping, and payment-related integration.

## Functionality

The upstream project includes room search and availability, authentication, reservations, user profiles, filtering/sorting, and booking/checkout workflows.

## Why It Is in This Profile

I retain this repository as evidence of practical full-stack software experience alongside my primary AI and research projects. It is not presented as an original implementation of the complete hotel-booking system.

## Upstream Attribution

Original project and documentation:

https://github.com/OthmaneNissoukin/nextjs-hotel-booking

Please refer to the upstream repository for the original authorship, license, screenshots, and full setup documentation.


## Installation

Use a supported Node.js release and install the locked dependencies:

```bash
npm ci
cp env.local.sample .env.local
npm run dev
```

Populate `.env.local` with your own Supabase, authentication, mapping, and payment configuration. Never reuse credentials shown in screenshots or upstream examples. The development server is provided by Next.js.

## Working with the Repository

Application routes and components are under `app/`; authentication is configured in `auth.js`; reusable database and service code follows the upstream project structure. Use `npm run lint` and `npm run build` before publishing changes. Functional behavior and setup conventions remain those of the attributed upstream application unless a local commit clearly documents a modification.

## Goal

This copy is maintained to study how a complete Next.js booking application connects authentication, persistence, search, and checkout-oriented UI flows. It is not evidence of sole authorship of those features.
