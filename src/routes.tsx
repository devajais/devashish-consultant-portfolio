import type { RouteRecord } from 'vite-react-ssg';
import Layout from '@/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import CaseStudies from '@/pages/CaseStudies';
import Contact from '@/pages/Contact';
import BlogIndex from '@/pages/BlogIndex';
import BlogPost from '@/pages/BlogPost';
import NotFound from '@/pages/NotFound';
import { blogArticles } from '@/content/blog-articles';

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'case-studies', element: <CaseStudies /> },
      { path: 'contact', element: <Contact /> },
      { path: 'blog', element: <BlogIndex /> },
      {
        path: 'blog/:slug',
        element: <BlogPost />,
        getStaticPaths: () => blogArticles.map((a) => `/blog/${a.slug}`),
      },
      { path: '*', element: <NotFound /> },
    ],
  },
];
