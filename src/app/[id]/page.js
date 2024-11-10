import { getProjectById } from '@/lib/projects';
import Image from 'next/image';

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return null; // You might want to add proper 404 handling later
  }

  // Don't render image for placeholder projects
  if (project.isPlaceholder) {
    return (
      <main className="min-h-screen p-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-mono mb-6">{project.title}</h1>
        <div className="space-y-4">
          {project.description.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-lg text-foreground/80">
              {paragraph}
            </p>
          ))}
        </div>
      </main>
    );
  }

  const paragraphs = project.description.split('\n\n');

  return (
    <main className="min-h-screen p-4 max-w-4xl mx-auto">
      <div className="relative aspect-video mb-8">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover rounded-lg"
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
      </div>

      <h1 className="text-4xl font-mono mb-6">{project.title}</h1>
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