/*
  # Create admin tables for news and department heads

  1. New Tables
    - `news` - Store news articles
      - `id` (uuid, primary key)
      - `title` (text, required)
      - `excerpt` (text, required)
      - `content` (text, optional)
      - `image` (text, optional)
      - `date` (timestamp)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `department_heads` - Store department heads history
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `start_year` (integer)
      - `end_year` (integer)
      - `order` (integer, for ordering)
      - `created_at` (timestamp)
  
  2. Security
    - Enable RLS on both tables
    - Public read access for all data
    - Admin-only write access (authenticated users)

  3. Note
    - News and department heads data is public
    - Only admins can modify content via proper authentication
*/

CREATE TABLE IF NOT EXISTS news (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  excerpt text NOT NULL,
  content text,
  image text,
  date timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS department_heads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  start_year integer,
  end_year integer,
  "order" integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE department_heads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "News are public"
  ON news
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Department heads are public"
  ON department_heads
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert news"
  ON news
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update news"
  ON news
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete news"
  ON news
  FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert department heads"
  ON department_heads
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update department heads"
  ON department_heads
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete department heads"
  ON department_heads
  FOR DELETE
  TO authenticated
  USING (true);
