import { createClient } from "@supabase/supabase-js";
import { Database } from "./types/supabase.ts"

console.log(import.meta.env) // TODO: THIS IS THE PROBLEM -- NOTHING IS BEING IMPORTED FROM HERE

const supabase = createClient<Database>(import.meta.env.VITE_DATABASE_URL, import.meta.env.VITE_DATABASE_KEY)

export default supabase