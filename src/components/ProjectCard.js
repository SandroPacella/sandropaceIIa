import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCard({ project }) {
  return (
    <Link 
      href={`/${project.id}`}
      className="block border border-foreground/10 rounded-lg overflow-hidden hover:border-purple-500 transition-colors"
    >
      <div className="relative aspect-square">
        {project.isPlaceholder ? (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-foreground/5 flex items-center justify-center">
            <span className="text-4xl">✨</span>
          </div>
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl mb-2 font-mono">{project.title}</h3>
        <p className="text-foreground/80 line-clamp-3">{project.description}</p>
      </div>
    </Link>
  );
} 