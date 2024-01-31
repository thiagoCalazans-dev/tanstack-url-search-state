import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qhshewzamhryatqfhbam.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoc2hld3phbWhyeWF0cWZoYmFtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNjcyNDQ5MCwiZXhwIjoyMDIyMzAwNDkwfQ.Do8b8908tj-ZXJmpB1ODH2JNdB03TwMzjwH7CGSwb9c";
export const db = createClient(supabaseUrl, supabaseKey);
