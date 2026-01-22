# InduCore B2B Platform

A unified Industrial PIM, CMS, and Product Showroom built with Next.js 14 and Node.js.

## Features
- **PIM Core**: Manages Products, SKUs, and Tech Specs.
- **Frontend**: Next.js App Router, SEO Optimized (JSON-LD), Multilingual.
- **3D Visualization**: Built-in glTF viewer.
- **B2B Exports**: One-click generation of CSVs for Europages/DirectIndustry.

## Setup Instructions

### 1. Database
Ensure PostgreSQL is running. Create a database named `inducore`.
```bash
createdb inducore
```
Update `.env` if your credentials differ from `postgres:postgres`.

### 2. Install Dependencies
```bash
npm install
```

### 3. Initialize Database
Run the migration and seed script:
```bash
npm run db:init
```
This will create tables and insert sample products (Hydraulic Pumps).

### 4. Run the Application
You need two terminals:

**Terminal 1 (Backend API):**
```bash
npm run server
```
Runs on `http://localhost:3001`.

**Terminal 2 (Frontend):**
```bash
npm run dev
```
Runs on `http://localhost:3000`.

## Usage

1. **Visit Frontend**: Go to `http://localhost:3000/en/products`.
2. **View Product**: Click on "X-2000 Pro" to see the 3D model (viewer), tech specs, and download documents.
3. **Admin/Export**: Go to `http://localhost:3000/admin`. Click "Export to Europages". A CSV file matching Europages' requirements will download.

## Project Structure
- `/server`: Express API for PIM logic and file handling.
- `/src/app`: Next.js frontend pages.
- `/db`: SQL schema.
