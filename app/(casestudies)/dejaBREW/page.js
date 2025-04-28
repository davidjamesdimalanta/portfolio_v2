import Summary from './components/summary';
import ProblemSpace from './components/problemspace';
import Persona from './components/persona';
import KeyFindings from './components/keyfindings';
import Ideation from './components/ideation';
import Prototypes from './components/prototypes';
import Evaluations from './components/eval';
import NextSteps from './components/nextsteps';
import PrimarySummary from './components/artefacts/primaryresearch.js';
import Affinity from './components/artefacts/affinity';
import ScenarioMapping from './components/artefacts/scenariomapping';
import LilysNeeds from './components/artefacts/needs';
import Link from 'next/link';
import Image from 'next/image';

export default function DejaBrew() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 md:py-12">

      {/* Project Overview */}
      <section id="overview" className="mb-16">
        <Summary />
      </section>

      {/* Problem Space */}
      <section id="problem-space" className="mb-16">
        <h2 className="text-section text-xl font-medium mb-2">Problem Space</h2>
        <h3 className="text-4xl font-bold mb-4">What&apos;s Going On With Cafés?</h3>
        <ProblemSpace />
      </section>

      {/* Empathizing */}
      <section id="empathize" className="mb-16">
        <h2 className="text-section text-xl font-medium mb-2">Empathizing With Our Users</h2>
        <h3 className="text-4xl font-bold mb-4">Walking A Mile In Their Shoes</h3>
        
        <PrimarySummary />
        
        <div className="mb-8">
          <h3 className="text-3xl font-bold mb-4">
            Based on <span className="font-medium">10 interviews</span>, we created <span className="font-medium">an affinity diagram</span> in order to understand our user&apos;s needs.
          </h3>
          <Affinity />
        </div>
        
        <div className="mb-8">
          <h3 className="text-3xl font-bold mb-4">Here&apos;s What We Found:</h3>
          <KeyFindings />
        </div>
        
        <div className="mb-8">
          <Persona />
        </div>
        
        <div className="mb-8">
          <ScenarioMapping />
        </div>
        
        <div className="mb-8">
          <h3 className="text-3xl font-bold mb-4">
            Based on our user research, persona, and empathy maps, and the as-is scenario, we described <span className="font-medium">Lily&apos;s needs</span> as the following:
          </h3>
          <LilysNeeds />
        </div>
      </section>

      {/* Ideation */}
      <section id="ideation" className="mb-16">
        <h2 className="text-section text-xl font-medium mb-2">Ideation</h2>
        <h3 className="text-4xl font-bold mb-4">Pens, Papers, and Stickies!</h3>
        
        <div className="mb-8">
          <p className="text-3xl mb-4">
            Our group met in person to complete the <span className="font-medium">ideation</span> phase, taking turns explaining our ideas to one another, grouping by common themes.
          </p>
          <Image 
            src={'/dejaBrew artefacts/ideas.jpg'}
            width={1000}
            height={400}
            alt={'ideation board'}
            className="rounded-md border border-medium-light"
          />
        </div>
        
        <div className="mb-8">
          <h3 className="text-3xl font-bold mb-4">
            We then placed our ideas on a <span className="font-medium">prioritization grid</span>, based on <span className="font-medium">feasibility</span> and <span className="font-medium">impact</span>.
          </h3>
          <Image 
            src={'/dejaBrew artefacts/Priogrid.jpg'}
            width={800}
            height={300}
            alt={'ideation board'}
            className="rounded-md border border-medium-light"
          />
        </div>
        
        <div className="mb-8">
          <p className="text-3xl mb-4">
            Based on highest <span className="font-medium">feasibility</span> and <span className="font-medium">impact</span>, we came up with the following solutions:
          </p>
          <Ideation />
        </div>
      </section>

      {/* Prototyping */}
      <section id="prototyping" className="mb-16">
        <h2 className="text-section text-xl font-medium mb-2">Prototyping</h2>
        <h3 className="text-4xl font-bold mb-4">What&apos;s This Suppose To Look Like Again?</h3>
        
        <div className="mb-8">
          <p className="text-3xl mb-4">
            Based on the ideation phase, we created a <span className="font-medium">prototype wireframes</span> that consists of <span className="font-medium">3 task flows</span>: Curating recommendations according to Lily&apos;s preferences; 
            Finding all necessary information about a café in one place; And reviewing/discussing local cafés.
          </p>
          <Prototypes />
        </div>
        
        <div className="mb-8 flex flex-col justify-center items-center gap-2">
          <p className="text-xl text-center">
            View the figma prototype here
          </p>
          <a href="https://www.figma.com/proto/P3poQA9v7CbsnPmd0iaxGv/D%C3%A9jaBrew-MidFi?type=design&node-id=1-2&t=XjFEv3OY9KjYTj4O-1&scaling=scale-down&page-id=0%3A1&mode=design">
            <button className="px-3 py-2 text-[#f6f4ec] bg-[#B2AC88] hover:bg-[#855439] transition ease-in-out duration-300 rounded-xl text-lg">
              Figma Prototype
            </button>
          </a>
        </div>
        
        <div className="mb-8">
          <h3 className="text-3xl font-bold mb-4">
            We conducted formative observational <span className="font-medium">usability evaluations</span> on the medium fidelity prototype with <span className="font-medium">university students aged 21-30</span>, using both <span className="font-medium">in-person</span> and <span className="font-medium">video chat</span> methods. Here&apos;s what we found:
          </h3>
          <Evaluations />
        </div>
      </section>

      {/* Next Steps */}
      <section id="next-steps" className="mb-16">
        <h2 className="text-section text-xl font-medium mb-2">Next Steps</h2>
        <h3 className="text-4xl font-bold mb-4">What&apos;s Next for the DejaCREW?</h3>
        
        <div className="mb-8">
          <p className="text-3xl mb-4">
            Moving forward, we&apos;d like to provide verticality on our horizontal prototypes. Going beyond our current task flows, we want to explore the full potential of the app with all its features and different components. Future iterations would include:
          </p>
          <NextSteps />
        </div>
      </section>

      {/* Conclusion */}
      <section id="conclusion" className="mb-16">
        <h2 className="text-section text-xl font-medium mb-2">Conclusion</h2>
        <h3 className="text-4xl font-bold mb-4">Class Dismissed!</h3>
        
        <div className="mb-8">
          <p className="text-lg md:text-xl">
            Through the DejaBREW project, I&apos;ve learned the importance of <span className="font-medium">user-centered design</span> and effective teamwork.
            <br /><br />
            I&apos;ve gained skills in <span className="font-medium">user research</span>, and turning those findings into actionable design improvements. 
            This experience gave me insights into <span className="font-medium">design-thinking</span>, providing me each step of the design-process, 
            and skills to handle complex projects where <span className="font-medium">understanding and addressing user needs are crucial for success</span>.
            <br /><br />
            I am now more adept at <span className="font-medium">adapting to changing requirements</span> and collaborating effectively within a team to <span className="font-medium">deliver solutions that truly resonate with the target audience</span>.
            <br /><br />
            Thank you for taking the time to read this case study.
          </p>
        </div>
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
            href="/innovation-hub" 
            className="group flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors duration-300"
          >
            Next: Innovation Hub Website Redesign
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
  );
}