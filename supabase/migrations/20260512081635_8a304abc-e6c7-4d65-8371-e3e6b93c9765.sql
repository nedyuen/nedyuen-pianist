
CREATE TABLE public.concert_events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_date DATE NOT NULL,
  event_name TEXT NOT NULL,
  venue TEXT NOT NULL,
  performance_piece TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.concert_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Concert events are publicly viewable"
  ON public.concert_events
  FOR SELECT
  USING (true);
