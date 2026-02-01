'use client';

export function Header() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-sand-50/80 backdrop-blur-md border-b border-sand-300">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="flex items-center justify-between h-14">
          <a 
            href="/" 
            className="text-sm font-medium text-ink-400 hover:text-ink-300 transition-colors"
          >
            Sean Hoe
          </a>
          
          <nav className="flex items-center gap-6">
            <button
              onClick={scrollToProjects}
              className="text-sm text-ink-100 hover:text-ink-300 transition-colors duration-200"
            >
              Projects
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
