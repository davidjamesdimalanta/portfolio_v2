import Image from 'next/image'
import BeforeAfterComparison from './components/BeforeAfterComparison'
import Link from 'next/link'


export default function InnovationHubCaseStudy() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold">Innovation Hub Website Redesign</h1>
        <h2 className="text-3xl mb-6">A UX case study on improving clarity, impact, and user experience for the University of Toronto&apos;s Innovation Hub.</h2>
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
        <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border-l-2 border-medium-light p-6">
            <h3 className="font-semibold mb-3">Timeline</h3>
            <p>April 2024 - June 2024</p>
          </div>
          <div className="border-l-2 border-medium-light p-6">
            <h3 className="font-semibold mb-3">My Role</h3>
            <p>UX Designer, Frontend Developer Lead</p>
          </div>
          <div className="border-l-2 border-medium-light p-6">
            <h3 className="font-semibold mb-3">Tools Used</h3>
            <p>Figma, Wordpress, HTML, CSS, JavaScript</p>
          </div>
        </div>
      </section>

      {/* Research & Discovery */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Research & Discovery</h2>
        
        <h3 className="text-2xl font-semibold mb-4">Stakeholder Analysis</h3>
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
        
        <h3 className="text-2xl font-semibold mb-4">Problem Space</h3>
        <div className="border border-medium-light p-6 rounded-lg mb-8">
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Lack of Clarity:</strong> Stakeholders couldn&apos;t understand what Innovation Hub was, despite reading the landing page</li>
            <li><strong>Poor Space Utilization:</strong> Excessive white space that didn&apos;t effectively communicate information</li>
            <li><strong>Unclear Impact:</strong> Difficulty understanding the Hub&apos;s achievements and value to the university community</li>
          </ul>
        </div>
      </section>

      {/* Design Process */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Design Process</h2>
        
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">User Research Methods</h3>
          <p className="mb-4">User interviews, A/B testing, and usability testing</p>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-4">Design Iterations</h3>
          <p className="mb-4">After creating multiple iterations of the landing page, we conducted usability evaluations with users to see which variations were most effective at communicating the Innovation Hub&apos;s purpose and impact.</p>
          <Image 
            src="/ihub assets/iterations_snapshot.png" 
            alt="Design Iterations" 
            width={1200} 
            height={500} 
            className="rounded-md border border-medium-light"
          />
        </div>
      </section>

      {/* Solutions */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Solutions Implemented</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative border border-medium-light p-6 rounded-lg overflow-hidden min-h-[350px]">
            <h3 className="text-xl font-semibold mb-3">Clear Language</h3>
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
            <h3 className="text-xl font-semibold mb-3">Performance Metrics</h3>
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
            <h3 className="text-xl font-semibold mb-3">Improved CTAs</h3>
            <p className="mb-4">Created clear pathways to important content with strategically placed, action-oriented call-to-action buttons.</p>
            {/* You could add a CTA example image here */}
          </div>
          
          <div className="border border-medium-light p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Enhanced Visual Design</h3>
            <p className="mb-4">Improved spacing, formatting, and incorporated relevant graphics to create a more engaging user experience.</p>
            {/* You could add a visual design example here */}
          </div>
        </div>
      </section>
      
      {/* Results & Impact */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
        <p className="mb-8">Increased SUS score +10, and users reported that the redesigned site was more user-friendly and effective.</p>

        {/* Before/After Comparison with Resizable Component */}
        <BeforeAfterComparison />
      </section>
      
      {/* Reflections */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Reflections</h2>
        <p className="mb-4">This project was a great opportunity to work with stakeholders to improve the Innovation Hub&apos;s website. It was also a great opportunity to learn about the importance of clear language and visual design in user experience.</p>
        <button className=" border border-medium-light font-semibold px-4 py-2 rounded-md">See the full website here</button>
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
            Previous: Portfolio Website
          </Link>
          
          <Link 
            href="/ux-internship" 
            className="group flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors duration-300"
          >
            Next: UX Research Internship
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
