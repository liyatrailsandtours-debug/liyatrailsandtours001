-- Liya Trails & Tours: replace the old GA4 Measurement ID with the new Google tag.
-- Run once in the Liya Supabase SQL Editor.

insert into public.site_content (content_key, content_type, content_value, published, updated_at)
values (
  'settings:analytics',
  'json',
  jsonb_build_object('measurement_id','G-94917Q5N5W'),
  true,
  now()
)
on conflict (content_key) do update
set content_type = excluded.content_type,
    content_value = excluded.content_value,
    published = true,
    updated_at = now();
