import { createClient } from "@supabase/supabase-js";
import axios from "axios";

export const URL = import.meta.env.VITE_APP_SUPABASE_URL;
export const KEY = import.meta.env.VITE_APP_SUPABASE_KEY;

export const supabase = createClient(URL, KEY);

export const SPOTIFY_URL = "https://open.spotify.com/oembed"
export const fetchOEmbed = async (url: string) => {
  const response = await axios.get(`${SPOTIFY_URL}?url=${url}`)
    .catch(console.error);

  return response;
}