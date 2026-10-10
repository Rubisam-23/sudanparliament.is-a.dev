import { supabase } from '@/lib/supabaseClient';

export default function LoginPage() {
  return (
    <main>
      <h1>Sign In</h1>
      <form>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
      </form>
    </main>
  );
}
