import Contact from '@/components/sections/Contact';
import ProjectCard from '@/components/ProjectCard';
import { getAllProjects } from '@/lib/projects';

export default function Home() {
  const projects = getAllProjects();

  return (
    <main className="min-h-screen p-4 max-w-4xl mx-auto">
      {/* H1 Section */}
      <h1 className="text-4xl font-mono mb-6">
        Hi, this is <span className="text-purple-500">my website</span>
      </h1>

      {/* Bio Section */}
      <section className="mb-12">
        <p className="text-lg text-foreground/80">
          IT generalist with a passion for automation. Currently crafting solutions as the sole developer for a leading college admissions counseling company.
        </p>
      </section>

      {/* Showcase Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-mono mb-6">Showcase</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <Contact />
    </main>
  );
}
