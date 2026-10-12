export default function RegisterPage() {
  return (
    <main>
      <h1>Register</h1>
      <form>
        <input type="text" name="name" placeholder="Full name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Create Account</button>
      </form>
    </main>
  );
}
