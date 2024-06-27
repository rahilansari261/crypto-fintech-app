import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zyucadwjqccgzcqdkeyz.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5dWNhZHdqcWNjZ3pjcWRrZXl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk0MDI5MjMsImV4cCI6MjAzNDk3ODkyM30.tX93VdO0IPIoJrM0SpprRB5r6WQQvlm6mjLT98Ww1vw";

const supabase = new SupabaseClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

export default supabase;
