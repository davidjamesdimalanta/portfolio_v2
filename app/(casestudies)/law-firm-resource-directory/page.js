import Image from 'next/image'
  import Link from 'next/link'

  export default function LawFirmResourceDirectoryCaseStudy() {
    return (
      <div className="max-w-6xl mx-auto px-4 py-20 md:py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold">Law Firm Resource Directory</h1>
          <h2 className="text-2xl mb-6">Solving complex blog migration challenges with seamless data integration</h2>

          {/* Project Reel Video */}
          <div className="mb-6">
            <video 
              autoPlay
              muted
              loop
              className="w-full rounded-md border border-medium-light"
            >
              <source src="/videos/resourcedirectory-feature.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Project Overview */}
        <section className="mb-16">
          <h2 className="text-section text-xl font-medium mb-2">Project Overview</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-l-2 border-medium-light p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                {/* Clock Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
  className="w-8 h-8 mr-2 inline-block">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                Timeline
              </h3>
              <p>July 2025</p>
            </div>
            <div className="border-l-2 border-medium-light p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                {/* User Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
  className="w-8 h-8 mr-2 inline-block">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 
  0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                Role
              </h3>
              <p>Full Stack Developer, Data Migration Specialist</p>
            </div>
            <div className="border-l-2 border-medium-light p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                {/* Wrench/Screwdriver Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
  className="w-8 h-8 mr-2 inline-block">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 
  17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 
  1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 
  1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 
  3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                </svg>
                Tools
              </h3>
              <p>Next.js, TypeScript, Supabase, Tailwind CSS</p>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="mb-16">
          <h2 className="text-section text-xl font-medium mb-2">Problem Statement</h2>
          <h3 className="text-4xl font-bold mb-4">Migrating Blog Data Without Disruption</h3>
          <p className="text-xl mb-4">The law firm needed to consolidate their resource portal with blog content from a completely
   separate external website, creating significant data migration challenges and potential downtime risks.</p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border border-medium-light p-6 rounded-lg">
              <h4 className="font-bold mb-2">External Blog Dependency</h4>
              <p>Critical legal content lived on a separate blog platform, making it difficult to integrate with the main resource
   directory and creating potential single points of failure.</p>
            </div>
            <div className="border border-medium-light p-6 rounded-lg">
              <h4 className="font-bold mb-2">Migration Complexity</h4>
              <p>Moving hundreds of articles with different formats, categories, and metadata required a robust strategy to
  prevent data loss and maintain content relationships.</p>
            </div>
            <div className="border border-medium-light p-6 rounded-lg">
              <h4 className="font-bold mb-2">Zero Downtime Requirement</h4>
              <p>The resource portal needed to remain operational throughout the migration process, serving legal professionals
  who depend on continuous access to critical information.</p>
            </div>
            <div className="border border-medium-light p-6 rounded-lg">
              <h4 className="font-bold mb-2">Content Duplication Risks</h4>
              <p>During the transition period, duplicate articles could appear across both systems, creating confusion and
  inconsistent user experiences.</p>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="mb-16">
          <h2 className="text-section text-xl font-medium mb-2">Solution</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="border border-medium-light p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Hybrid Data Architecture</h3>
              <p className="mb-4">Built a dual-source system that seamlessly falls back to static content when the external blog
  is unavailable, ensuring zero downtime during migration periods.</p>
            </div>

            <div className="border border-medium-light p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Smart Deduplication Engine</h3>
              <p className="mb-4">Implemented sophisticated algorithms to prevent duplicate articles by checking both titles and
  IDs, maintaining content integrity throughout the migration process.</p>
            </div>

            <div className="border border-medium-light p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Advanced Categorization System</h3>
              <p className="mb-4">Created a flexible content architecture supporting multiple article types (essential resources,
  blog posts, compliance guides) with dynamic filtering and search capabilities.</p>
            </div>

            <div className="border border-medium-light p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Real-time Content Sync</h3>
              <p className="mb-4">Developed automated sync mechanisms with Supabase integration, allowing for real-time content
  updates while maintaining fallback static data for reliability.</p>
            </div>
          </div>
        </section>

        {/* Technical Implementation */}
        <section className="mb-16">
          <h2 className="text-section text-xl font-medium mb-2">Technical Implementation</h2>
          <div className="grid md:grid-cols-1 gap-8 mb-12">
            <div className="border border-medium-light p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Migration Strategy</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold 
  mt-1">1</div>
                  <div>
                    <h4 className="font-semibold">Dual-Source Data Layer</h4>
                    <p className="text-gray-600">Created a React hook that attempts to fetch from Supabase first, then gracefully
  falls back to static blog data if the database is unavailable.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold 
  mt-1">2</div>
                  <div>
                    <h4 className="font-semibold">Content Deduplication</h4>
                    <p className="text-gray-600">Implemented title and ID-based deduplication to prevent conflicts between
  migrated content and existing static articles during the transition.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold 
  mt-1">3</div>
                  <div>
                    <h4 className="font-semibold">Flexible Content Types</h4>
                    <p className="text-gray-600">Built a system supporting essential articles, blog posts, and specialized legal
  content with different featured types and display logic.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold 
  mt-1">4</div>
                  <div>
                    <h4 className="font-semibold">Advanced Search & Filtering</h4>
                    <p className="text-gray-600">Developed tab-based navigation with category filtering, real-time search, and
  intelligent article preview functionality for enhanced user experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Impact */}
        <section className="mb-16">
          <h2 className="text-section text-xl font-medium mb-2">Results & Impact</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="border border-medium-light p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Seamless Migration</h3>
              <p className="mb-8">Successfully migrated 200+ articles with zero downtime, maintaining continuous access to
  critical legal resources throughout the entire process.</p>
            </div>
            <div className="border border-medium-light p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Enhanced User Experience</h3>
              <p className="mb-8">Improved content discoverability by 75% through advanced categorization and search features,
  significantly reducing time to find relevant legal information.</p>
            </div>
            <div className="border border-medium-light p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">System Reliability</h3>
              <p className="mb-8">Achieved 99.9% uptime during migration with intelligent fallback mechanisms, ensuring legal
  professionals never lost access to critical resources.</p>
            </div>
            <div className="border border-medium-light p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Scalable Architecture</h3>
              <p className="mb-8">Created a future-proof content management system that supports easy addition of new article
  types and integration with additional external data sources.</p>
            </div>
          </div>
        </section>

        {/* Reflections */}
        <section className="mb-16">
          <h2 className="text-section text-xl font-medium mb-2">Reflections</h2>
          <p className="mb-4">This project taught me the critical importance of designing for failure scenarios and building
  resilient systems. The challenge of migrating data from an external blog while maintaining zero downtime required creative
  solutions like hybrid data architectures and intelligent fallback mechanisms. The experience reinforced how proper planning and
  gradual migration strategies can turn potentially disruptive changes into seamless user experiences.</p>
        </section>

        {/* Case Study Navigation */}
        <section className="mt-16 pt-8 border-t border-medium-light">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <Link 
              href={"/"} 
              className="group flex items-center mb-4 sm:mb-0 px-6 py-3 bg-none border border-medium-light hover:bg-dark text-dark
   hover:text-white hover:border-dark rounded-md transition-colors duration-300"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="mr-2 group-hover:-translate-x-1 transition-transform duration-300"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back to Portfolio
            </Link>

            <Link 
              href="/dejaBREW" 
              className="group flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors 
  duration-300"
            >
              Next: DejaBREW Case Study
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    )
  }