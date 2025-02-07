export default function SubPagesLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-20 px-60">
        <button>Home</button>
        {children}
    </main>
  );
}
