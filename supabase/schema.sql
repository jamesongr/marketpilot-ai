-- Supabase schema definitions for Amplify AI

create table public.users (
  id uuid primary key default uuid_generate_v4(),
  email text not null unique,
  full_name text,
  created_at timestamp with time zone default timezone('utc', now())
);

create table public.brands (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.users(id),
  name text not null,
  website text,
  description text,
  industry text,
  audience text,
  brand_voice text,
  keywords text,
  hashtags text,
  brand_memory text,
  created_at timestamp with time zone default timezone('utc', now())
);

create table public.social_accounts (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.users(id),
  brand_id uuid references public.brands(id),
  platform text not null,
  account_name text,
  account_handle text,
  access_token_encrypted text,
  refresh_token_encrypted text,
  connection_status text,
  auto_post_enabled boolean default false,
  approval_required boolean default true,
  last_synced_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc', now())
);

create table public.content_posts (
  id uuid primary key default uuid_generate_v4(),
  brand_id uuid references public.brands(id),
  user_id uuid references public.users(id),
  platform text,
  content_type text,
  body text,
  hashtags text,
  media_url text,
  status text,
  scheduled_for timestamp with time zone,
  published_at timestamp with time zone,
  engagement_data jsonb,
  created_at timestamp with time zone default timezone('utc', now())
);

create table public.content_campaigns (
  id uuid primary key default uuid_generate_v4(),
  brand_id uuid references public.brands(id),
  name text,
  goal text,
  start_date date,
  end_date date,
  status text,
  created_at timestamp with time zone default timezone('utc', now())
);

create table public.brand_assets (
  id uuid primary key default uuid_generate_v4(),
  brand_id uuid references public.brands(id),
  user_id uuid references public.users(id),
  file_name text,
  file_url text,
  file_type text,
  folder text,
  created_at timestamp with time zone default timezone('utc', now())
);

create table public.engagement_opportunities (
  id uuid primary key default uuid_generate_v4(),
  brand_id uuid references public.brands(id),
  platform text,
  external_post_id text,
  author_handle text,
  original_post text,
  suggested_reply text,
  relevance_score int,
  status text,
  created_at timestamp with time zone default timezone('utc', now())
);

create table public.analytics_snapshots (
  id uuid primary key default uuid_generate_v4(),
  brand_id uuid references public.brands(id),
  social_account_id uuid references public.social_accounts(id),
  platform text,
  date date,
  impressions int,
  likes int,
  comments int,
  shares int,
  clicks int,
  follower_count int,
  engagement_rate numeric
);

create table public.subscriptions (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.users(id),
  stripe_customer_id text,
  stripe_subscription_id text,
  plan text,
  status text,
  current_period_end timestamp with time zone
);
