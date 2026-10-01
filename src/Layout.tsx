import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';
import ScrollProgress from '@/components/ScrollProgress';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

export default function Layout() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <ScrollToTop />
      <ScrollProgress />
      <Cursor />
      <Header />
      <main className="relative z-10 flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
