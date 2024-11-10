import { project as prepory } from '../content/projects/prepory';
import { project as liveReactGraph } from '../content/projects/live-react-graph-1';
import { project as moreComing } from '../content/projects/more-coming';

const projects = [prepory, liveReactGraph, moreComing];

export function getAllProjects() {
  return projects.sort((a, b) => a.order - b.order);
}

export function getProjectById(id) {
  return projects.find(project => project.id === id);
} 