
CREATE TABLE public.repertoire_pieces (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  composer TEXT NOT NULL,
  piece TEXT NOT NULL,
  category TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
ALTER TABLE public.repertoire_pieces ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Repertoire pieces are publicly viewable"
ON public.repertoire_pieces FOR SELECT TO public USING (true);
