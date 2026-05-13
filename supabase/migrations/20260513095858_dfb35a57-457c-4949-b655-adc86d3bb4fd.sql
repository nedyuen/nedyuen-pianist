CREATE TABLE public.awards (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  year TEXT NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.awards ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Awards are publicly viewable"
ON public.awards FOR SELECT
USING (true);

INSERT INTO public.awards (year, title, subtitle, sort_order) VALUES
('2026', 'Ealing Music Festival', '2nd Prize · Ealing Festival Silver Medal', 1),
('2026', 'Medway Music Festival', '1st Prize · Kathleen Rose Cup', 2),
('2026', 'Rochester and North Kent Music Festival', '1st Prize · RNKMD Gold Medal · Rose Sears Cup', 3),
('2012', 'Devon Performing Arts Festival', '1st Prize · Susan Hindle Cup', 4),
('2010', 'Concord College Musician of the Year', '1st Prize', 5),
('2009', 'Concord Talent Show', '1st Prize', 6),
('2009', 'Concord Inter-house Arts Competition', '1st Prize', 7),
('2008', 'St Cecilia International Music Competition', '1st Prize', 8),
('2007', 'Hong Kong Youth Music Competition', '4th Prize', 9),
('2007', 'Hong Kong Schools Music Festival', '1st Prize · Harry Ore Memorial Prize in Music', 10),
('2006', 'Hong Kong Schools Music Festival', '1st Prize · SMSA Gold Medal', 11),
('2005', 'Hong Kong District Music Competition', '1st Prize', 12),
('2005', 'Hong Kong Schools Music Festival', '3rd Prize', 13);