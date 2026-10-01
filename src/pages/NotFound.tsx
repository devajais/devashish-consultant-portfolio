import Seo from '@/components/Seo';
import { Container } from '@/components/Section';
import { Aurora } from '@/components/three/HeroScene';
import MagneticButton from '@/components/reactbits/MagneticButton';

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" path="/404" />
      <section className="relative flex min-h-[80svh] items-center overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-50">
          <Aurora />
        </div>
        <Container className="relative text-center">
          <p className="font-display text-[clamp(5rem,20vw,14rem)] font-semibold leading-none text-gradient">
            404
          </p>
          <h1 className="mt-4 font-display text-2xl sm:text-3xl">This page took a different path.</h1>
          <p className="mx-auto mt-4 max-w-md text-ink-dim">
            The page you’re looking for doesn’t exist or has moved. Let’s get you back on track.
          </p>
          <div className="mt-8 flex justify-center">
            <MagneticButton to="/" variant="primary">
              Back home
            </MagneticButton>
          </div>
        </Container>
      </section>
    </>
  );
}
