const data = [
{ role: 'Frontend Developer', company: 'Eccentric', range: '2022 - 2023', bullets: ['Worked on UI for Google projects', 'Built dashboards'] },
// add more
];


export default function Experience() {
return (
<section id="experience" className="container py-12">
<h3 className="text-xl font-semibold">Experience</h3>
<div className="mt-6 space-y-6">
{data.map((d) => (
<div key={d.role} className="p-4 border rounded-lg">
<div className="flex justify-between">
<div>
<h4 className="font-semibold">{d.role} — {d.company}</h4>
<div className="text-sm text-gray-500 dark:text-gray-400">{d.range}</div>
</div>
</div>
<ul className="mt-2 list-disc ml-5 text-sm">
{d.bullets.map(b => <li key={b}>{b}</li>)}
</ul>
</div>
))}
</div>
</section>
);
}