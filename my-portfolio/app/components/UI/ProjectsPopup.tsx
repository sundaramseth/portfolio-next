'use client';

type Props = {
  onClose: () => void;
};

const projects = [
  {
    title: 'CoderXYZ',
    description: 'Developer community platform built with the MERN stack.',
    url: 'https://adhyatma-ce6a3.web.app/',
  },
  {
    title: 'Movie App',
    description: 'IMDb clone built with React.',
    url: 'https://movie-review-app-react.vercel.app/',
  },
  {
    title: 'Weather App',
    description: 'Real-time weather application with clean UI.',
    url: 'https://weatherapp-408b5.firebaseapp.com/', // replace if different
  },
];

export default function ProjectsPopup({ onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur">
      <div className="relative w-[90%] max-w-2xl rounded-xl bg-[#0b0b0f] p-6 text-white shadow-xl">
        <button
          onClick={onClose}
          aria-label="Close projects popup"
          className="absolute right-4 top-4 text-xl opacity-70 transition hover:opacity-100"
        >
          ✕
        </button>

        <h2 className="mb-4 text-2xl font-bold">Projects</h2>

        <ul className="space-y-4">
          {projects.map((project) => (
            <li
              key={project.title}
              className="rounded-lg bg-white/5 p-4 transition hover:bg-white/10"
            >
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-1 text-sm opacity-70">
                {project.description}
              </p>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block rounded-md bg-white/10 px-4 py-1.5 text-sm font-medium transition hover:bg-white/20"
              >
                Visit →
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
