import { createClient } from "@supabase/supabase-js";

export const URL = import.meta.env.VITE_APP_SUPABASE_URL;
export const KEY = import.meta.env.VITE_APP_SUPABASE_KEY;

export const supabase = createClient(URL, KEY);