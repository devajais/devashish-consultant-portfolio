import React from 'react';
import { BlogPost } from '../types';

const blogPostsData: BlogPost[] = [
  {
    title: "Your First Tech Hire: Lessons from a Startup CTO",
    description: "Hiring your first engineer is one of the most critical decisions you'll make as a founder. It's not just about finding someone who can code—it's about finding someone who shares your vision and can grow with your company. Look for adaptability, ownership mindset, and cultural fit. During interviews, focus on problem-solving abilities rather than just technical knowledge. Give them a real problem your startup faces and see how they approach it. Once hired, set them up for success with clear goals, regular feedback, and the autonomy to make decisions. Remember, your first hire sets the tone for your entire engineering culture."
  },
  {
    title: "The Lean Startup's Guide to Building an AI-Powered MVP",
    description: "AI doesn't have to break the bank. Start with pre-trained models and APIs from providers like OpenAI, Anthropic, or Hugging Face. Focus on solving one specific problem really well rather than building a complex AI system. Use no-code or low-code tools for rapid prototyping. Validate your AI's value proposition with real users before investing in custom models. Consider fine-tuning existing models on your specific use case—it's cheaper and faster than training from scratch. Monitor costs closely and optimize your prompts to reduce API calls. The key is to prove your AI adds real value before scaling up your infrastructure."
  },
  {
    title: "From Idea to Impact: How a Clear 'Why' Defines Your Product",
    description: "Every successful product starts with a compelling 'why.' Before writing any code, ask yourself: Why does this product need to exist? Who desperately needs this solution? What problem keeps them up at night? Your 'why' becomes your north star—it guides every technical decision, feature prioritization, and resource allocation. When your team understands the 'why,' they make better decisions independently. When investors hear a clear 'why,' they see the vision. When users feel your 'why,' they become advocates. Document your 'why' and revisit it regularly. Let it inform your technical architecture, your go-to-market strategy, and your company culture. A strong 'why' is the difference between a feature and a movement."
  },
  {
    title: "Scaling to 1000 Concurrent Calls: An Architectural Deep Dive",
    description: "Building a voice AI system that handles 1000+ concurrent calls requires careful architectural planning. We used a microservices approach with Docker containers orchestrated on GCP. The key components: (1) Load balancer to distribute incoming calls, (2) Stateless call handlers that can scale horizontally, (3) Message queue (Redis) for async processing, (4) Separate services for STT (Deepgram), LLM (OpenAI), and TTS (11labs). Critical optimizations: WebSocket connections for real-time audio streaming, connection pooling for API calls, caching frequent responses, and circuit breakers for graceful degradation. We used Kubernetes for auto-scaling based on CPU and memory metrics. Monitoring with Prometheus and Grafana helped us identify bottlenecks. The result: sub-200ms latency even at peak load, with 99.9% uptime."
  },
];

const cardHoverEffect = "group relative p-px rounded-lg bg-base-card hover:bg-base-bg transition-all duration-300";
const cardInnerClass = "relative bg-base-card rounded-lg p-6 h-full";
const animatedBorder = "absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-brand-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-borderGlow";


const BlogPage: React.FC = () => {
  return (
    <section id="blog" className="space-y-16 pt-20">
        <section className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-text-primary">Insights & Articles</h1>
            <p className="max-w-3xl mx-auto text-lg text-text-secondary">
                Thoughts on technology, leadership, and building successful startups.
            </p>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
            {blogPostsData.map((post, index) => (
                <div key={index} style={{ animationDelay: `${index * 100}ms` }} className={`animate-fadeInUp ${cardHoverEffect}`} data-cursor-hover>
                    <div className={cardInnerClass}>
                      <h3 className="text-2xl font-bold text-text-primary mb-2 group-hover:text-brand-primary transition-colors">{post.title}</h3>
                      <p className="text-text-secondary">{post.description}</p>
                      <span className="text-brand-primary font-semibold mt-4 inline-block">Read More &rarr;</span>
                    </div>
                    <div className={animatedBorder}></div>
                </div>
            ))}
        </section>
    </section>
  );
};

export default BlogPage;