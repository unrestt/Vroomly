# Vroomly Backend (Supabase Setup)

This directory contains the database definition for the Vroomly project.

## How to use

1. Go to your **Supabase Dashboard** (https://supabase.com).
2. Choose your project or create a new one.
3. Open the **SQL Editor** from the left navigation panel.
4. Click **New Query** to create a blank editor tab.
5. Copy the SQL content from the [schema.sql](file:///c:/Users/Admin/Desktop/Vroomly/backend/schema.sql) file.
6. Paste it into the query editor and click **Run**.
7. The required tables will be created and seeded with sample category, make, model, listing, and image data!

## Database Schema Overview

The database contains 6 tables:
- `categories`: Contains listing types (e.g. Osobowe, Motocykle, Dostawcze).
- `makes`: Contains car/motorcycle manufacturers (e.g. Audi, BMW, Toyota) linked to categories.
- `models`: Specific vehicle models (e.g. A4, Corolla) linked to makes.
- `users`: Registered accounts.
- `listings`: Detailed information about the listing itself.
- `images`: Image URLs associated with the listing.
