import Contact from '@/components/sections/Contact';

export const metadata = {
  title: 'Contact | Sandro Pacella',
  description: 'Get in touch with Sandro Pacella',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen p-4 max-w-4xl mx-auto">
      <Contact />
    </main>
  );
} 