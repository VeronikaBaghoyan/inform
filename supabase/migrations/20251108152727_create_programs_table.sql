/*
  # Create educational programs table

  1. New Tables
    - `programs` - Store educational programs by level and course
      - `id` (uuid, primary key)
      - `program_type` (text) - 'bachelor_full', 'bachelor_distance', 'master'
      - `course` (integer) - course number (1-5)
      - `course_name` (text) - localized course name
      - `subjects` (jsonb) - array of subject names (localized)
      - `order` (integer) - for sorting
      - `created_at` (timestamp)
  
  2. Security
    - Enable RLS for public read access
    - Only authenticated users can modify

  3. Note
    - Program data is public
    - Subjects stored as JSONB for multilingual support
*/

CREATE TABLE IF NOT EXISTS programs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  program_type text NOT NULL,
  course integer NOT NULL,
  course_name text NOT NULL,
  subjects jsonb NOT NULL DEFAULT '[]'::jsonb,
  "order" integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE programs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Programs are public"
  ON programs
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert programs"
  ON programs
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update programs"
  ON programs
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete programs"
  ON programs
  FOR DELETE
  TO authenticated
  USING (true);
