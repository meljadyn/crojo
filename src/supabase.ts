import { createClient } from "@supabase/supabase-js";
import { Database } from "./types/supabase.ts"

const supabase = createClient<Database>(import.meta.env.VITE_DATABASE_URL, import.meta.env.VITE_DATABASE_KEY)

export default supabase