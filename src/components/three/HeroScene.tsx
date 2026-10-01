import { Suspense, lazy } from 'react';
import { ClientOnly } from 'vite-react-ssg';

const Scene3DCanvas = lazy(() => import('./Scene3DCanvas'));

/** Layered aurora atmosphere, always rendered, also the SSR/no-WebGL fallback. */
export function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute left-1/2 top-[38%] h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-[120px]"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, color-mix(in oklab, var(--color-accent) 55%, transparent), transparent 60%)',
          animation: 'aurora-drift 18s ease-in-out infinite',
        }}
      />
      <div
        className="absolute left-[62%] top-[30%] h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-[120px]"
        style={{
          background:
            'radial-gradient(circle at 60% 40%, color-mix(in oklab, var(--color-accent-2) 60%, transparent), transparent 60%)',
          animation: 'aurora-drift 22s ease-in-out infinite reverse',
        }}
      />
    </div>
  );
}

/** The interactive 3D hero, with aurora underneath and a graceful fallback. */
export default function HeroScene() {
  return (
    <div className="absolute inset-0">
      <Aurora />
      <ClientOnly>
        {() => (
          <Suspense fallback={null}>
            <Scene3DCanvas />
          </Suspense>
        )}
      </ClientOnly>
    </div>
  );
}
