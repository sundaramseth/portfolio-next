
import SceneClient from "./components/SceneClient";

export const metadata = {
  title: 'Your Name | Frontend Developer',
  description:
    'Frontend Developer skilled in React, Next.js, Tailwind CSS, and modern UI development.',
};

export default function HomePage() {
  return (
    <>
      <main className="relative h-screen w-screen overflow-hidden">
      {/* 3D Background */}
      <SceneClient />

      {/* Hero Text Overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">Hi, I’m Sundaram</h1>
          <p className="mt-4 text-xl opacity-80">
            Frontend Developer • React • Next.js • WebGL
          </p>
        </div>
      </div>
    </main>
    </>
  );
}
