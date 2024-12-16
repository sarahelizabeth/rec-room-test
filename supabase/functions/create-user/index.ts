import "https://esm.sh/v135/@supabase/functions-js@2.4.3/src/edge-runtime.d.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.7"

const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

type User = {
  id: string
  email: string
  first_name: string | null
  avatar_url: string | null
  username: string | null
}

Deno.serve(async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const { id, email_addresses, avatar_url, username } = (await req.json()).data;
    const email = email_addresses[0].email_address;

    const { data, error } = await supabase
        .from('users')
        .upsert({ id, email, avatar_url, username } as User);

    if (error) {
      return new Response(JSON.stringify(error), { status: 400 });
    }

    return new Response(
      JSON.stringify(data),
      { headers: { "Content-Type": "application/json" }, status: 201 },
    )
  } catch (error: unknown) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }), 
      { status: 400 }
    );
  }
})

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/create-user' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
