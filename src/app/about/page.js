export const metadata = {
  title: 'About | Sandro Pacella',
  description: 'Learn more about Sandro Pacella and his work',
};

export default function AboutPage() {
  const content = `I'm a technology professional who bridges the gap between business needs and technical solutions. What started as "being the tech person" at an education company evolved into a role where I handle everything from React development to systems automation. While I may not fit the traditional software engineer mold, my experience as an IT generalist has given me a unique perspective on building practical, efficient solutions.

What sets me apart is my ability to wear multiple hats effectively. On any given day, you might find me deep in React code, optimizing server configurations, or collaborating with stakeholders to translate business requirements into technical solutions. This versatility, combined with my commitment to best practices and clean code, allows me to tackle diverse challenges across the technical spectrum.

I'm always interested in connecting with professionals in the field and exploring new opportunities to solve interesting technical challenges.

PS

When I'm not coding, I'm usually surfing the web or DJing.`;

  const paragraphs = content.split('\n\n');

  return (
    <main className="min-h-screen p-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-mono mb-6">
        About <span className="text-purple-500">Me</span>
      </h1>
      <div className="space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-lg text-foreground/80">
            {paragraph}
          </p>
        ))}
      </div>
    </main>
  );
}
