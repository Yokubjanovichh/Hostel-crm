import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ymuhdqbbpzimetgzwenk.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltdWhkcWJicHppbWV0Z3p3ZW5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3ODYxMDUsImV4cCI6MjAyNTM2MjEwNX0.GayQsE8YrVdk7kPJgRZ3tXVH7Vh724xlUPUE3d6-tSc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
