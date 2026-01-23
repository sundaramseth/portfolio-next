import ProjectCard from './ProjectCard';


const projects = [
{
title: 'CoderXYZ',
description: 'Community platform for developers.',
tags: ['React', 'Node', 'MongoDB'],
image: '/images/coderxyz.png',
demo: '#',
repo: '#'
},
// add yours
];


export default function Projects() {
return (
<section id="projects" className="container py-12">
<h3 className="text-xl font-semibold">Projects</h3>
<div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2">
{projects.map(p => (
<ProjectCard key={p.title} {...p} />
))}
</div>
</section>
);
}