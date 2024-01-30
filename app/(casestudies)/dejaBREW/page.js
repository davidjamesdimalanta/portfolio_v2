import Arrow from './components/arrow';
import Banner from './components/banner';
import MobileBanner from './components/mobilebanner';
import Summary from './components/summary';
import Last from '@/app/components/last';
import ProblemSpace from './components/problemspace';
import Persona from './components/persona';
import KeyFindings from './components/keyfindings';
import Ideation from './components/ideation';
import Prototypes from './components/prototypes';
import Evaluations from './components/eval';
import NextSteps from './components/nextsteps';
import PrimarySummary from './components/artefacts/primaryresearch.js';
import Affinity from './components/artefacts/affinity';
import ScenarioMapping from './components/artefacts/scenariomapping.js';
import LilysNeeds from './components/artefacts/needs';

import Image from 'next/image';


export default function DejaBrew() {
    return(
        <main className='w-screen h-max flex flex-col pt-10 md:pt-0 items-center'>
          <div className='w-screen lg:w-screen h-[80svh] lg:h-[85vh] flex flex-col lg:flex-row items-center'>
              <div className='lg:w-2/5 flex flex-col justify-center items-center text-center gap-4'>
                  <h1 className='font-normal text-5xl md:text-6xl rounded-3xl px-6 py-2'>
                    DejaBrew
                  </h1>
                  <Arrow />
              </div>
              <div className='hidden md:flex lg:w-3/5 lg:h-[85svh] overflow-hidden'>
                <Banner />
              </div>
              <div className='md:hidden w-screen h-max pt-5 overflow-hidden'>
                <MobileBanner />
              </div>
          </div>
          <div className='w-screen h-max bg-[#855439] flex justify-center items-center'>
            <Summary />
          </div>

          {/* Problem Space */}
          <section id="problem-space" className='w-screen min-h-[120svh] h-max flex flex-col justify-center items-center py-4 lg:py-0 gap-6'>
            <div className='w-full md:w-[80svw] h-max p-6 bg-[#eed9c4] rounded-lg mb-4 flex flex-col md:flex-row justify-between'>
              <h1 className='text-[#855439] font-medium h-max py-4 text-5xl md:text-4xl lg:text-5xl'>
                Problem Space
              </h1>
              <span className='text-lg text-[#855439] md:flex md:justify-center md:items-center' >What&apos;s Going On With Cafés?</span>
            </div>
            <ProblemSpace />
          </section>

          {/* Empathizing */}
          <section id='empathize' className='w-screen md:w-[80%] gap-8 flex flex-col items-center'>
            <div className='w-full md:w-[80svw] h-max p-6 bg-[#eed9c4] rounded-lg mb-4 flex flex-col md:flex-row justify-between'>
              <h1 className='text-[#855439] font-medium h-max py-4 text-5xl md:text-4xl lg:text-5xl'>
                  Empathizing With Our Users
              </h1>
              <span className='text-lg text-[#855439] flex md:justify-center md:items-center' >
                  Walking A Mile In Their Shoes
              </span>
            </div>

            <PrimarySummary />
            <div className='w-full min-h-[120svh] md:min-h-[130svh] h-max flex flex-col justify-center items-center p-4 gap-4'>
              <h2 className='text-3xl md:text-4xl w-auto p-4'>
                Based on <span className='font-medium'>10 interviews</span>, we created  <span className='font-medium'>an affinity diagram</span> in order to understand our user&apos;s needs.
              </h2>
              <Affinity />
              <div className='w-full h-max min-h-[60svh] flex flex-col justify-center items-center p-4 gap-4'>
                <h2 className='text-3xl md:text-4xl w-full'>
                  Here&apos;s What We Found:
                </h2>
                <KeyFindings />
              </div>
            </div>
          </section>
            <div className='w-[75svw] min-h-screen md:min-h-[120svh] flex flex-col items-center'>
              <Persona />
            </div>
            <ScenarioMapping />
            <div className='w-[75svw] max-h flex flex-col items-center gap-4'>
              <h2 className='text-3xl md:text-4xl w-full'>
                Based on our user research, persona, and empathy maps, and the as-is scenario, we described <span className='font-medium'>Lily&apos;s needs</span> as the following:
              </h2>
              <LilysNeeds />
            </div>

          {/* Ideation */}
          <section id='ideation' className='w-screen flex flex-col justify-center items-center pt-6 lg:pt-12 gap-8'>
            <div className='w-full md:w-[80svw] h-max p-6 bg-[#eed9c4] rounded-lg flex flex-col md:flex-row justify-between'>
              <h1 className='text-[#855439] font-medium h-max py-4 text-5xl md:text-4xl lg:text-5xl'>
                Ideation
              </h1>
              <span className='text-lg text-[#855439] flex md:justify-center md:items-center' >Ideating With Pen, Papers, and Stickies!</span>
            </div>
            <div className='w-[80svw] min-h-screen h-max flex flex-col justify-start items-center'>
              <span className='text-3xl md:text-4xl w-auto'>
                Our group met in person to complete the <span className='font-medium'>ideation</span> phase, taking turns explaining our ideas to one another, grouping by common themes.
              </span>
              <Image 
                src={'/dejaBrew artefacts/ideas.jpg'}
                width={1000}
                height={400}
                alt={'ideation board'}
              />
              <h2 className='text-3xl md:text-4xl w-full'>
                We then placed our ideas on a <span className='font-medium'>prioritization grid</span>, based on <span className='font-medium'>feasibility</span> and <span className='font-medium'>impact</span>.
              </h2>
              <Image 
                src={'/dejaBrew artefacts/Priogrid.jpg'}
                width={800}
                height={300}
                alt={'ideation board'}
              />
              <span className='text-3xl md:text-4xl w-full'>
                Based on highest <span className='font-medium'>feasibility</span> and <span className='font-medium'>impact</span>, we came up with the following solutions:
              </span>
              <Ideation />
            </div>
          </section>

          {/* Prototyping */}
          <section id='prototyping' className='w-screen flex flex-col justify-center items-center pt-12 gap-8'>
            <div className='w-full md:w-[80svw] h-max p-6 bg-[#eed9c4] rounded-lg flex flex-col md:flex-row justify-between'>
                <h1 className='text-[#855439] font-medium h-max py-4 text-5xl md:text-4xl lg:text-5xl'>
                  Prototyping
                </h1>
                <span className='text-lg text-[#855439] flex md:justify-center md:items-center' >What&apos;s This Suppose To Look Like Again?</span>
              </div>
            <div className='w-[80vw] min-h-screen h-max flex flex-col justify-start items-start md:items-center gap-8'>
              <h2 className='text-3xl md:text-4xl w-full'>
                Based on the ideation phase, we created a <span className='font-medium'>prototype wireframes</span> that consists of <span className='font-medium'>3 task flows</span>: Curating recommendations according to Lily&apos;s preferences; 
                Finding all necessary information about a café in one place; And reviewing/discussing local cafés.              
              </h2>
              <Prototypes />
              <div className='w-full h-max flex flex-col justify-center items-center gap-2'>
                <span className='w-full text-xl text-center'>
                  View the figma prototype here
                </span>
                <a href="https://www.figma.com/proto/P3poQA9v7CbsnPmd0iaxGv/D%C3%A9jaBrew-MidFi?type=design&node-id=1-2&t=XjFEv3OY9KjYTj4O-1&scaling=scale-down&page-id=0%3A1&mode=design">
                    <button className="px-3 py-2 text-[#f6f4ec] bg-[#B2AC88] hover:bg-[#855439] transition ease-in-out duration-300 rounded-xl text-lg w-full">
                        Figma Prototype
                    </button>
                </a>
              </div>
              <h2 className='text-3xl md:text-4xl w-full'>
                We conducted formative observational <span className='font-medium'>usability evaluations</span> on the medium fidelity prototype with <span className='font-medium'>university students aged 21-30</span>, using both <span className='font-medium'>in-person</span> and <span className='font-medium'>video chat</span> methods. Here&apos;s what we found:
              </h2>
              <Evaluations />
            </div>
          
          {/* Next Steps */}
          </section>
          <section id='next-steps' className='w-screen flex flex-col justify-center items-center pt-12 gap-8'>
          <div className='w-full md:w-[80svw] h-max p-6 bg-[#eed9c4] rounded-lg flex flex-col md:flex-row justify-between'>
                  <h1 className='text-[#855439] font-medium h-max py-4 text-5xl md:text-4xl lg:text-5xl'>
                    Next Steps
                  </h1>
                  <span className='text-lg text-[#855439] flex md:justify-center md:items-center' >What&apos;s Next for the DejaCREW?</span>
              </div>
            <div className='w-[80svw] min-h-screen h-max flex flex-col justify-start items-start md:items-center gap-4'>
              <span className='text-3xl md:text-4xl w-full'>
                Moving forward, we'd like to provide verticality on our horizontal prototypes. Going beyond our current task flows, we want to explore the full potential of the app with all its features and different components. Future iterations would include:
              </span>
              <NextSteps />
            </div>
          </section>

          {/* Conclusion */}
          <section id='conclusion' className='w-screen flex flex-col justify-center items-center pt-12 gap-8'>
          <div className='w-full md:w-[80svw] h-max p-6 bg-[#eed9c4] rounded-lg flex flex-col md:flex-row justify-between'>
              <h1 className='text-[#855439] font-medium h-max py-4 text-5xl md:text-4xl lg:text-5xl'>
                Conclusion
              </h1>
              <span className='text-lg text-[#855439] flex md:justify-center md:items-center' >Class Dismissed!</span>
            </div>
          <div className='w-[80vw] min-h-[50vh] h-max flex flex-col justify-start items-start md:items-center gap-4'>
            <span className='w-full text-lg md:text-xl md:text-start'>
              Through the DejaBREW project, I&apos;ve learned the importance of <span className='font-medium'>user-centered design</span> and effective teamwork. <br /><br />
              I&apos;ve gained skills in <span className='font-medium'>user research</span>, and turning those findings into actionable design improvements. 
              This experience gave me insights into <span className='font-medium'>design-thinking</span>, providing me each step of the design-process, 
              and skills to handle complex projects where <span className='font-medium'>understanding and addressing user needs are crucial for success</span>. <br /><br />
              I am now more adept at <span className='font-medium'>adapting to changing requirements</span> and collaborating effectively within a team to <span className='font-medium'>deliver solutions that truly resonate with the target audience</span>.<br /><br />
              Thank you for taking the time to read this case study.
            </span>
            <a href='#dejabrew'>
              <span id='underline' className='text-xl'>
                Return to the top
              </span>
            </a>
          </div>
          </section>
          <Last />
        </main>
    )
}