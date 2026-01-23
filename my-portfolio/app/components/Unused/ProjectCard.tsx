interface Props { title: string; description: string; tags: string[]; image?: string; demo?: string; repo?: string; }
export default function ProjectCard({ title, description, tags, image, demo, repo }: Props) {
return (
<article className="border rounded-lg overflow-hidden">
{image && <img src={image} alt={title} className="w-full h-44 object-cover" />}
<div className="p-4">
<h4 className="font-semibold">{title}</h4>
<p className="mt-2 text-sm">{description}</p>
<div className="mt-3 flex flex-wrap gap-2">
{tags.map(t => <span key={t} className="text-xs px-2 py-1 border rounded">{t}</span>)}
</div>
<div className="mt-4 flex gap-2">
{demo && <a href={demo} className="px-3 py-1 rounded bg-indigo-600 text-white text-sm">Live</a>}
{repo && <a href={repo} className="px-3 py-1 rounded border text-sm">Code</a>}
</div>
</div>
</article>
);
}