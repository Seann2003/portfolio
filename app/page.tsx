import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { ProjectsSection } from '@/components/projects-section';

export default function Home() {
  return (
    <main className="min-h-screen pt-14">
      <Header />
      <HeroSection />
      <ProjectsSection />
      
      {/* Footer */}
      <footer className="border-t border-sand-300 py-10 px-6 sm:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-ink-50">
            © {new Date().getFullYear()} Sean Hoe. All rights reserved.
          </p>
          <p className="text-xs text-ink-50/70">
            Building on the future of finance
          </p>
        </div>
      </footer>
    </main>
  );
}
