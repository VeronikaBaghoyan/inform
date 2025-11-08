/*
  # Create News and Admin Authentication Tables

  1. New Tables
    - `news`
      - `id` (uuid, primary key)
      - `title_am` (text, Armenian title)
      - `title_en` (text, English title)
      - `title_ru` (text, Russian title)
      - `content_am` (text, Armenian content)
      - `content_en` (text, English content)
      - `content_ru` (text, Russian content)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
      - `user_id` (uuid, foreign key to auth.users)

  2. Security
    - Enable RLS on `news` table
    - Add policy for authenticated users to read all news
    - Add policy for creators to manage their own news
*/

CREATE TABLE IF NOT EXISTS news (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_am text NOT NULL,
  title_en text NOT NULL,
  title_ru text NOT NULL,
  content_am text NOT NULL,
  content_en text NOT NULL,
  content_ru text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE
);

ALTER TABLE news ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read news"
  ON news
  FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can create news"
  ON news
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own news"
  ON news
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own news"
  ON news
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE INDEX idx_news_user_id ON news(user_id);
CREATE INDEX idx_news_created_at ON news(created_at DESC);
