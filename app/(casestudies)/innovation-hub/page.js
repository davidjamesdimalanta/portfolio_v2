import Image from 'next/image'
import BeforeAfterComparison from './components/BeforeAfterComparison'
import Link from 'next/link'
import ProblemSpace from './components/ProblemSpace'

export default function InnovationHubCaseStudy() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 md:py-12">
      {/* Hero Section */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold">Innovation Hub Website Redesign</h1>
        <h2 className="text-2xl mb-6">Improving clarity, impact, and user experience for the University of Toronto&apos;s Innovation Hub.</h2>
        <Image 
          src="/ihub assets/Landing_Snapshot_new.png" 
          alt="Innovation Hub Redesigned Landing Page" 
          width={1200} 
          height={300} 
          className="rounded-md border border-medium-light"
        />
      </div>

      {/* Project Overview */}
      <section className="mb-16">
        <h2 className="text-section text-xl font-medium mb-2">Project Overview</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border-l-2 border-medium-light p-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              {/* Clock Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mr-2 inline-block">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Timeline
            </h3>
            <p>April 2024 - June 2024</p>
          </div>
          <div className="border-l-2 border-medium-light p-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              {/* User Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 mr-2 inline-block">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              Role
            </h3>
            <p>UX Designer, Frontend Developer Lead</p>
          </div>
          <div className="border-l-2 border-medium-light p-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              {/* Wrench/Screwdriver Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 mr-2 inline-block">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
              </svg>
              Tools
            </h3>
            <p>Figma, Wordpress, HTML, CSS, JavaScript</p>
          </div>
        </div>
      </section>

      {/* Research & Discovery */}
      <section className="mb-4">
        <h2 className="text-section text-xl font-medium mb-2">Research & Discovery</h2>
        <h3 className="text-4xl font-bold mb-4">Talking to Stakeholders</h3>
        <p className="text-xl mb-4">In order to identify who this website serves and what pain points they may have, we conducted interviews with the Innovation Hub&apos;s stakeholders. Here&apos;s what we found:</p>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="border border-medium-light p-6 rounded-lg">
            <h4 className="font-bold mb-2">Students</h4>
            <p>Primary users who need to understand how to engage with the Innovation Hub and what benefits it provides to their university experience.</p>
          </div>
          <div className="border border-medium-light p-6 rounded-lg">
            <h4 className="font-bold mb-2">Campus Project Partners</h4>
            <p>Faculty and staff looking to collaborate on initiatives who need clear information about capabilities and process.</p>
          </div>
          <div className="border border-medium-light p-6 rounded-lg">
            <h4 className="font-bold mb-2">External Users</h4>
            <p>Visitors from outside U of T who need to quickly understand the Innovation Hub&apos;s purpose and impact.</p>
          </div>
        </div>
        <ProblemSpace />
      </section>
      

      {/* Design Process */}
      <section className="mb-16">
        <h2 className="text-section text-xl font-medium mb-2">Design Process</h2>
        
        <div>
          <h3 className="text-4xl font-bold mb-2">The Different Iterations</h3>
          <p className="mb-4">After creating multiple iterations of the landing page, we conducted usability evaluations with users to see which variations were most effective at communicating the Innovation Hub&apos;s purpose and impact.</p>
          <figure className="mb-4">
            <Image 
              src="/ihub assets/iterations_snapshot.png" 
              alt="Design Iterations" 
              width={1200} 
              height={500} 
              className="rounded-xl border border-medium-light"
            />
            <figcaption className="text-center text-medium mt-2 italic">Multiple landing page design iterations tested with stakeholders</figcaption>
          </figure>
        </div>
      </section>

      {/* Solutions */}
      <section className="mb-16">
        <h2 className="text-section text-xl font-medium mb-2">Solutions Implemented</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative border border-medium-light p-6 rounded-lg overflow-hidden min-h-[350px]">
            <h3 className="text-4xl font-bold mb-2">Clear Language</h3>
            <p className="mb-4">Simplified and refined content to ensure visitors immediately understand the Innovation Hub&apos;s purpose and offerings.</p>
            <Image 
              src="/ihub assets/clear_language.png" 
              alt="Innovation Hub website before redesign"
              width={400}
              height={500}
              className="absolute rounded-md w-full"
            />
          </div>
          
          <div className="relative border border-medium-light p-6 rounded-lg overflow-hidden min-h-[350px]">
            <h3 className="text-4xl font-bold mb-2">Performance Metrics</h3>
            <p className="mb-4">Added concrete metrics (58 projects completed, 1700+ student stories heard, 120+ staff stories) to demonstrate measurable impact.</p>
            <Image 
              src="/ihub assets/What We Do.png" 
              alt="Performance metrics example"
              width={500}
              height={500}
              className="rounded-md w-full"
            />
          </div>
          
          <div className="border border-medium-light p-6 rounded-lg">
            <h3 className="text-4xl font-bold mb-2">Improved CTA's clarity</h3>
            <p className="mb-4">Created clear pathways to important content with strategically placed, action-oriented call-to-action buttons.</p>
          </div>
          
          <div className="border border-medium-light p-6 rounded-lg">
            <h3 className="text-4xl font-bold mb-2">Updated Visuals</h3>
            <p className="mb-4">Improved spacing, formatting, and incorporated relevant graphics to create a more engaging user experience.</p>
          </div>
        </div>
      </section>
      
      {/* Results & Impact */}
      <section className="mb-16">
        <h2 className="text-section text-xl font-medium mb-2">Results & Impact</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="border border-medium-light p-6 rounded-lg">
            <h3 className="text-4xl font-bold mb-2">Usability Improvements</h3>
            <p className="mb-8">Increased <a href="https://www.nngroup.com/articles/measuring-perceived-usability/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">System Usability Scale (SUS)</a> score +10, from 65 to 75.</p>
        </div>
        <div className="border border-medium-light p-6 rounded-lg">
            <h3 className="text-4xl font-bold mb-2">User Feedback</h3>
            <p className="mb-8">Stakeholders reported that the redesigned site was more clear on its purpose and more effective at guiding them to take action.</p>
        </div>
        </div>
        {/* Before/After Comparison with Resizable Component */}
        <BeforeAfterComparison 
        />
      </section>
      
      {/* Reflections */}
      <section className="mb-16">
        <h2 className="text-section text-xl font-medium mb-2">Reflections</h2>
        <p className="mb-4">This project was a great opportunity to work with stakeholders to improve the Innovation Hub&apos;s website. It was also a great opportunity to learn about the importance of clear language and visual design in user experience.</p>
        <a 
          href="https://www.utoronto.ca/innovation-hub" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button 
          className="group flex items-center mb-4 sm:mb-0 px-6 py-3 bg-none border border-medium-light hover:bg-dark text-dark hover:text-white hover:border-dark rounded-md transition-colors duration-300"
        >
          See the full website here
        </button>
        </a>
      </section>

      {/* Case Study Navigation */}
      <section className="mt-16 pt-8 border-t border-medium-light">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <Link 
            href={"/"} 
            className="group flex items-center mb-4 sm:mb-0 px-6 py-3 bg-none border border-medium-light hover:bg-dark text-dark hover:text-white hover:border-dark rounded-md transition-colors duration-300"
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
            Back to Home
          </Link>
          
          <Link 
            href="/wearable-ux" 
            className="group flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors duration-300"
          >
            Next: Wearable UX Case Study
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
