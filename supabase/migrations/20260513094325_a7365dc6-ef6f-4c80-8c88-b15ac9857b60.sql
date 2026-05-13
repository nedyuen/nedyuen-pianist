CREATE TABLE public.press_quotes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  source TEXT NOT NULL,
  text TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.press_quotes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Press quotes are publicly viewable"
ON public.press_quotes
FOR SELECT
USING (true);