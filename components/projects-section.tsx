'use client';

import { useState, useMemo } from 'react';
import { projects, allTags, allTypes, ProjectTag, ProjectType } from '@/data/projects';
import { ExternalLinkIcon, SearchIcon, ChevronDownIcon } from '@/components/icons';

export function ProjectsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<ProjectTag[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<ProjectType[]>([]);
  const [isTagDropdownOpen, setIsTagDropdownOpen] = useState(false);
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTags = selectedTags.length === 0 || selectedTags.every((tag) => project.tags.includes(tag));
      const matchesTypes = selectedTypes.length === 0 || selectedTypes.every((type) => project.types.includes(type));
      return matchesSearch && matchesTags && matchesTypes;
    });
  }, [searchQuery, selectedTags, selectedTypes]);

  const toggleTag = (tag: ProjectTag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const toggleType = (type: ProjectType) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTags([]);
    setSelectedTypes([]);
  };

  const hasActiveFilters = searchQuery || selectedTags.length > 0 || selectedTypes.length > 0;

  const formatLabel = (str: string) => {
    return str
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');
  };

  return (
    <section className="py-20 sm:py-28 px-6 sm:px-12 lg:px-16 bg-sand-50" id="projects">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <h2 className="text-headline sm:text-3xl font-bold text-ink-400 mb-4 tracking-tight">
            Projects
          </h2>
          <p className="text-body text-ink-50 max-w-xl leading-relaxed">
            A selection of work across DeFi, fintech, and software development.
          </p>
        </div>

        <div className="mb-10 space-y-4">
          <div className="relative max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="w-4 h-4 text-ink-50" />
            </div>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white border border-sand-300 text-ink-400 placeholder-ink-50 focus:outline-none focus:border-sand-400 focus:ring-1 focus:ring-sand-400 transition-all"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <button
                onClick={() => {
                  setIsTagDropdownOpen(!isTagDropdownOpen);
                  setIsTypeDropdownOpen(false);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all ${
                  selectedTags.length > 0
                    ? 'bg-sand-100 border-sand-400 text-ink-400'
                    : 'bg-white border-sand-300 text-ink-200 hover:border-sand-400'
                }`}
              >
                <span>Tags</span>
                {selectedTags.length > 0 && (
                  <span className="px-1.5 py-0.5 text-xs bg-ink-300 text-white rounded-full">
                    {selectedTags.length}
                  </span>
                )}
                <ChevronDownIcon className={`w-4 h-4 transition-transform ${isTagDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isTagDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-sand-300 rounded-lg shadow-lg z-20">
                  <div className="p-2 space-y-1 max-h-60 overflow-y-auto">
                    {allTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center justify-between ${
                          selectedTags.includes(tag)
                            ? 'bg-sand-100 text-ink-400'
                            : 'text-ink-200 hover:bg-sand-50'
                        }`}
                      >
                        <span>{formatLabel(tag)}</span>
                        {selectedTags.includes(tag) && (
                          <span className="w-1.5 h-1.5 rounded-full bg-ink-300" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => {
                  setIsTypeDropdownOpen(!isTypeDropdownOpen);
                  setIsTagDropdownOpen(false);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all ${
                  selectedTypes.length > 0
                    ? 'bg-sand-100 border-sand-400 text-ink-400'
                    : 'bg-white border-sand-300 text-ink-200 hover:border-sand-400'
                }`}
              >
                <span>Types</span>
                {selectedTypes.length > 0 && (
                  <span className="px-1.5 py-0.5 text-xs bg-ink-300 text-white rounded-full">
                    {selectedTypes.length}
                  </span>
                )}
                <ChevronDownIcon className={`w-4 h-4 transition-transform ${isTypeDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isTypeDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-sand-300 rounded-lg shadow-lg z-20">
                  <div className="p-2 space-y-1 max-h-60 overflow-y-auto">
                    {allTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => toggleType(type)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center justify-between ${
                          selectedTypes.includes(type)
                            ? 'bg-sand-100 text-ink-400'
                            : 'text-ink-200 hover:bg-sand-50'
                        }`}
                      >
                        <span>{formatLabel(type)}</span>
                        {selectedTypes.includes(type) && (
                          <span className="w-1.5 h-1.5 rounded-full bg-ink-300" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="px-4 py-2.5 text-sm text-ink-50 hover:text-ink-200 transition-colors"
              >
                Clear filters
              </button>
            )}
          </div>

          {(selectedTags.length > 0 || selectedTypes.length > 0) && (
            <div className="flex flex-wrap gap-2">
              {selectedTags.map((tag) => (
                <span
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-sm text-ink-300 bg-sand-100 border border-sand-300 rounded-md cursor-pointer hover:bg-sand-200 transition-colors"
                >
                  {formatLabel(tag)}
                  <span className="text-ink-50">×</span>
                </span>
              ))}
              {selectedTypes.map((type) => (
                <span
                  key={type}
                  onClick={() => toggleType(type)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-sm text-ink-300 bg-sand-100 border border-sand-300 rounded-md cursor-pointer hover:bg-sand-200 transition-colors"
                >
                  {formatLabel(type)}
                  <span className="text-ink-50">×</span>
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="mb-8 text-sm text-ink-50">
          Showing {filteredProjects.length} of {projects.length} projects
        </div>

        <div className="border border-sand-300 rounded-xl overflow-hidden bg-white">
          <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-sand-300 text-xs font-medium text-ink-200 uppercase tracking-wider bg-sand-50">
            <div className="col-span-5 sm:col-span-3">Project</div>
            <div className="col-span-6 sm:col-span-5">Description</div>
            <div className="hidden sm:block col-span-2">Tags</div>
            <div className="hidden sm:block col-span-1">Types</div>
            <div className="col-span-1 text-right"></div>
          </div>

          <div className="divide-y divide-sand-200">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <a
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid grid-cols-12 gap-4 px-6 py-5 hover:bg-sand-50 transition-all duration-200 group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="col-span-5 sm:col-span-3">
                    <div className="flex items-start gap-3">
                      {project.featured && (
                        <span className="w-1.5 h-1.5 rounded-full bg-coral-500 mt-2 flex-shrink-0" />
                      )}
                      <div className={project.featured ? '' : 'pl-4 sm:pl-0'}>
                        <h3 className="font-semibold text-ink-400 group-hover:text-coral-600 transition-colors">
                          {project.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-5">
                    <p className="text-sm text-ink-200 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-2 sm:hidden">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs bg-sand-200 text-ink-300 rounded border border-sand-300"
                        >
                          {formatLabel(tag)}
                        </span>
                      ))}
                      {project.tags.length > 2 && (
                        <span className="px-2 py-0.5 text-xs text-ink-50">
                          +{project.tags.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="hidden sm:block col-span-2">
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs bg-sand-200 text-ink-300 rounded border border-sand-300"
                        >
                          {formatLabel(tag)}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="hidden sm:block col-span-1">
                    <div className="flex flex-wrap gap-1">
                      {project.types.map((type) => (
                        <span
                          key={type}
                          className="px-2 py-0.5 text-xs bg-sand-200 text-ink-300 rounded border border-sand-300"
                        >
                          {formatLabel(type)}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="col-span-1 text-right">
                    <ExternalLinkIcon className="w-4 h-4 text-ink-100 group-hover:text-coral-500 transition-colors inline-block" />
                  </div>
                </a>
              ))
            ) : (
              <div className="px-6 py-12 text-center">
                <p className="text-ink-50 mb-2">No projects match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-sm text-ink-200 hover:text-coral-600 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
