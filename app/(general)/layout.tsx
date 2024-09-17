import { Navbar } from '@/components';

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="p-2">
        { children }
      </main>
    </>
  );
}