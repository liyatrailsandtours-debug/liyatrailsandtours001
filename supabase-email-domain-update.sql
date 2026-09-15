-- Liya Trails & Tours final contact/domain update
-- Run this in the Liya Supabase project after deploying the matching website ZIP.

UPDATE public.site_content
SET content_value = replace(content_value::text, 'info.liyatrailsandtours@zohomail.com', 'info@liyatrailsandtours.com')::jsonb,
    updated_at = now()
WHERE content_value::text LIKE '%info.liyatrailsandtours@zohomail.com%';

UPDATE public.site_content
SET content_value = replace(content_value::text, 'https://liyatrailandtours.vercel.app', 'https://liyatrailsandtours.com')::jsonb,
    updated_at = now()
WHERE content_value::text LIKE '%https://liyatrailandtours.vercel.app%';

UPDATE public.page_content
SET content_html = replace(content_html, 'info.liyatrailsandtours@zohomail.com', 'info@liyatrailsandtours.com'),
    updated_at = now()
WHERE content_html LIKE '%info.liyatrailsandtours@zohomail.com%';

UPDATE public.page_content
SET content_html = replace(content_html, 'https://liyatrailandtours.vercel.app', 'https://liyatrailsandtours.com'),
    updated_at = now()
WHERE content_html LIKE '%https://liyatrailandtours.vercel.app%';

-- Keep reusable official contact addresses available to the CMS.
INSERT INTO public.site_content (content_key, content_type, content_value, published, updated_at)
VALUES
('settings:contact_emails', 'json', '{"info":"info@liyatrailsandtours.com","bookings":"bookings@liyatrailsandtours.com","partners":"partners@liyatrailsandtours.com","sales":"sales@liyatrailsandtours.com"}'::jsonb, true, now())
ON CONFLICT (content_key) DO UPDATE SET
content_type = EXCLUDED.content_type,
content_value = EXCLUDED.content_value,
published = EXCLUDED.published,
updated_at = EXCLUDED.updated_at;

INSERT INTO public.site_content (content_key, content_type, content_value, published, updated_at)
VALUES
('settings:site_url', 'url', '"https://liyatrailsandtours.com"'::jsonb, true, now())
ON CONFLICT (content_key) DO UPDATE SET
content_type = EXCLUDED.content_type,
content_value = EXCLUDED.content_value,
published = EXCLUDED.published,
updated_at = EXCLUDED.updated_at;
