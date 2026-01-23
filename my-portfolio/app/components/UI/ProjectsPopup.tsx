'use client';

type Props = {
  onClose: () => void;
};

export default function ProjectsPopup({ onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur">
      <div className="relative w-[90%] max-w-2xl rounded-xl bg-[#0b0b0f] p-6 text-white shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-xl opacity-70 hover:opacity-100"
        >
          ✕
        </button>

        <h2 className="mb-4 text-2xl font-bold">Projects</h2>

        <ul className="space-y-4">
          <li className="rounded-lg bg-white/5 p-4 hover:bg-white/10">
            <h3 className="text-lg font-semibold">CoderXYZ</h3>
            <p className="text-sm opacity-70">
              Developer community platform built with MERN stack.
            </p>
          </li>

          <li className="rounded-lg bg-white/5 p-4 hover:bg-white/10">
            <h3 className="text-lg font-semibold">3D Portfolio</h3>
            <p className="text-sm opacity-70">
              WebGL-powered portfolio using React Three Fiber.
            </p>
          </li>

          <li className="rounded-lg bg-white/5 p-4 hover:bg-white/10">
            <h3 className="text-lg font-semibold">Electron App</h3>
            <p className="text-sm opacity-70">
              Desktop app with React, Electron & Supabase.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
