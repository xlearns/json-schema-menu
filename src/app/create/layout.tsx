export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="text-[red]">nav</nav>
      {children}
    </>
  );
}
