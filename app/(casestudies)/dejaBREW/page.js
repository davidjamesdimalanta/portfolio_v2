'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
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

import Image from 'next/image';

import { useEffect } from 'react';


export default function DejaBrew() {
    useEffect(() => {
        AOS.init({
          once: true,
        });
      }, []);

    return(
        <main className='w-screen h-max flex flex-col pt-10 md:pt-0 items-center'>
          <div className='w-screen lg:w-screen h-[80svh] lg:h-[85vh] flex flex-col lg:flex-row items-center'>
              <div className='lg:w-2/5 flex flex-col justify-center items-center text-center gap-4'>
                  <h1 className='font-normal text-5xl md:text-6xl rounded-3xl px-6 py-2'>
                    DejaBrew
                  </h1>
                  <div data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="3000">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth="1.5" 
                        stroke="currentColor" 
                        className="w-6 h-6 animate-bounce">
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3">
                        </path>
                    </svg>
                  </div>
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
          <div id="problem-space" className='w-screen min-h-[120svh] h-max flex flex-col justify-center items-start md:items-center py-4 lg:py-0'>
            <h1 className='font-medium pl-4 md:pl-0 w-[80svw] h-max py-4 text-5xl md:text-4xl lg:text-5xl'>
              Problem Space
            </h1>
            <ProblemSpace />
          </div>
          <section id='empathize' className='w-screen md:w-[80%]'>
            <h1 className='font-medium w-full md:pl-0 h-max px-4 text-5xl md:text-4xl lg:text-5xl pb-4 md:pb-0'>
                Empathizing With Our Users
            </h1>
            <h2 className='text-3xl md:text-4xl w-auto p-4'>
                Primary Research
              </h2>
            <div className='min-h-[20svh] md:min-h-[30svh] flex flex-col md:flex-row justify-center items-center py-4 lg:py-0 gap-2'>
              <div className='w-auto flex flex-col items-center text-lg font-medium rounded-md shadow-sm border-[1px] bg-white border-gray-200'
                   data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out">
                <Image 
                  src={'/amico assets/Interview-rafiki.png'}
                  width={350}
                  height={350}
                  alt={'amico assets'}
                />
                <span>We conducted 10 Interviews</span>
              </div>
              <div className='w-auto flex flex-col items-center text-lg font-medium rounded-md shadow-sm border-[1px] bg-white border-gray-200 '
                   data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="200">
                <Image 
                  src={'/amico assets/Customer Survey-rafiki.png'}
                  width={350}
                  height={350}
                  alt={'amico assets'}
                />
                <span>and received 66 Survey Results</span>
              </div>
            </div>
            <div className='w-full min-h-[120svh] md:min-h-[130svh] h-max flex flex-col justify-center items-center p-4 gap-4'>
              <span className='text-xl'>
                Based on <span className='font-medium'>10 interviews</span>, we created  <span className='font-medium'>an affinity diagram</span> in order to understand our users' needs.
              </span>
              <Image 
                src={'/dejaBrew artefacts/dejabrew affinity diagram.jpg'}
                width={1000}
                height={400}
                alt={'Affinity Diagram'}
                className="hover:scale-105 transition ease-in-out"
                data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="200"
                />
              <div className='w-full h-max min-h-[60svh] flex flex-col justify-center items-center p-4 gap-4'>
                <h2 className='text-3xl md:text-4xl w-full'>
                  Key Findings
                </h2>
                <KeyFindings />
              </div>
            </div>
          </section>
            <div className='w-[80vw] min-h-screen md:min-h-[120svh] flex flex-col items-center pt-6 lg:pt-12'>
              <Persona />
            </div>
            <div className='w-[80vw] min-h-screen flex flex-col items-center pt-6 lg:pt-12 gap-4'>
              <h2 className='text-3xl md:text-4xl w-full'>
                Scenario Mapping
              </h2>
              <span className='w-full text-xl'>
                Starting with an <span className='font-medium'>as-is scenario</span> based on the empathy map, we charted Lily's current process for locating her ideal café, capturing her associated actions, thoughts, and emotions.</span>
              <h3 className='text-2xl md:text-3xl w-full'>
                As-Is Scenario
              </h3>
              <Image 
                src={'/dejaBrew artefacts/asIs.jpg'}
                width={1000}
                height={400}
                alt={'as-is scenario'}
                className="hover:scale-105 transition ease-in-out"
                data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="200"
              />
              <span className='w-full text-xl pt-4'>
                Then, using a <span className='font-medium'>to-be scenario</span>, we envisioned an improved scenario for Lily, outlining how our designed solution could transform her café-finding experience.</span>
              <h3 className='text-2xl md:text-3xl w-full'>
                To-Be Scenario
              </h3>
              <Image 
                src={'/dejaBrew artefacts/toBe.jpg'}
                width={1000}
                height={400}
                alt={'to-bw scenario'}
                className="hover:scale-105 transition ease-in-out"
                data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="200"
              />
            </div>
            <div className='w-[80vw] max-h flex flex-col items-center pt-6 lg:pt-12 gap-4'>
              <h2 className='text-3xl md:text-4xl w-full'>
                Determining Lily's Needs
              </h2>
              <span className='w-full text-xl'>
                Based on our user research, persona, and empathy maps, and the as-is scenario, we described <span className='font-medium'>Lily's needs</span> as the following:
              </span>
              <ul className='w-[90%] text-xl md:text-3xl [&>*]:mb-2 [&>*]:p-4 [&>*]:rounded-md [&>*]:shadow-sm [&>*]:border-[1px] [&>*]:bg-white [&>*]:border-gray-200]'>
                <li className='hover:scale-105 transition ease-in-out' data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="200">Lily needs <span className='font-medium'>a way to find good quality food and coffee</span> so that she can enjoy her visits to cafés.</li>
                <li className='hover:scale-105 transition ease-in-out' data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="300">Lily requires access to <span className='font-medium'>updated information</span> about cafe <span className='font-medium'>hours</span>, <span className='font-medium'>menu changes</span>, and <span className='font-medium'>seating availability</span> to optimize her cafe visits.</li>
                <li className='hover:scale-105 transition ease-in-out' data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="400">Lily needs a way to find <span className='font-medium'>reliable reviews</span> so that she can make <span className='font-medium'>informed decisions</span> before visiting cafés.</li>
                <li className='hover:scale-105 transition ease-in-out' data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="500">Lily needs <span className='font-medium'>assurance that cafés provide necessary amenities</span> like <span className='font-medium'>Wi-Fi</span> and <span className='font-medium'>power outlets</span> for effective study sessions.</li>
                <li className='hover:scale-105 transition ease-in-out' data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="600">Lily needs a <span className='font-medium'>quick and easy way to understand</span> a cafe's <span className='font-medium'>ambiance</span>, <span className='font-medium'>menu variety</span>, and <span className='font-medium'>customer service quality</span> to anticipate the kind of experience she'll have.</li>
              </ul>
            </div>
          <section id='ideation'>
            <div className='w-[80vw] min-h-screen h-max flex flex-col justify-start items-start md:items-center pt-6 lg:pt-12] gap-4'>
              <h1 className='font-medium w-[80svw] h-max py-4 text-5xl md:text-4xl lg:text-5xl'>
                Ideation
              </h1>
              <h2 className='text-3xl md:text-4xl w-full'>
                Ideating with pens, paper, and stickies
              </h2>
              <span className='w-full text-xl'>
                Our group met in person to complete the <span className='font-medium'>ideation</span> phase, taking turns explaining our ideas to one another, grouping by common themes.
              </span>
              <Image 
                src={'/dejaBrew artefacts/ideas.jpg'}
                width={1000}
                height={400}
                alt={'ideation board'}
              />
              <h2 className='text-3xl md:text-4xl w-full'>
                Prioritization Grid
              </h2>
              <span className='w-full text-xl'>
                We then placed our ideas on a <span className='font-medium'>prioritization grid</span>, based on <span className='font-medium'>feasibility</span> and <span className='font-medium'>impact</span>.
              </span>
              <Image 
                src={'/dejaBrew artefacts/Priogrid.jpg'}
                width={800}
                height={300}
                alt={'ideation board'}
              />
              <span className='w-full text-xl'>
                Based on highest <span className='font-medium'>feasibility</span> and <span className='font-medium'>impact</span>, we came up with the following solutions:
              </span>
              <Ideation />
            </div>
          </section>
          <section id='prototyping'>
            <div className='w-[80vw] min-h-screen h-max flex flex-col justify-start items-start md:items-center pt-6 lg:pt-12] gap-4'>
              <h1 className='font-medium w-[80svw] h-max py-4 text-5xl md:text-4xl lg:text-5xl'>
                Prototyping
              </h1>
              <h2 className='text-3xl md:text-4xl w-full'>
                Figma Wireframes
              </h2>
              <span className='w-full text-lg md:text-xl md:text-start'>
                Based on the ideation phase, we created a <span className='font-medium'>prototype wireframes</span> that consists of <span className='font-medium'>3 task flows</span>: Curating recommendations according to Lily's preferences; 
                Finding all necessary information about a café in one place; And reviewing/discussing local cafés.
              </span>
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
                Usability Evaluations
              </h2>
              <span className='w-full text-lg md:text-xl md:text-start'>
                We conducted formative observational <span className='font-medium'>usability evaluations</span> on the medium fidelity prototype with <span className='font-medium'>university students aged 21-30</span>, using both <span className='font-medium'>in-person</span> and <span className='font-medium'>video chat</span> methods. Here's what we found:
              </span>
              <Evaluations />
            </div>
          </section>
          <section id='next-steps'>
            <div className='w-[80vw] min-h-screen h-max flex flex-col justify-start items-start md:items-center pt-6 lg:pt-12] gap-4'>
              <h1 className='font-medium w-full md:pl-0 h-max px-4 text-5xl md:text-4xl lg:text-5xl pb-4 md:pb-0'>
                Next Steps
              </h1>
              <span className='w-full text-lg md:text-xl md:text-start'>
                For our next steps, we wanted to provide verticality on our horizontal prototypes. Going beyond our current task flows, we want to explore the full potential of the app with all its features and different components. Future iterations would include:
              </span>
              <NextSteps />
            </div>
          </section>
          <section id='conclusion'>
          <div className='w-[80vw] min-h-[50vh] h-max flex flex-col justify-start items-start md:items-center pt-6 lg:pt-12] gap-4'>
            <h2 className='text-3xl md:text-4xl w-full'>
                Conclusion
            </h2>
            <span className='w-full text-lg md:text-xl md:text-start'>
              Through the DejaBREW project, I've learned the importance of <span className='font-medium'>user-centered design</span> and effective teamwork. <br /><br />
              I've gained skills in <span className='font-medium'>user research</span>, and turning those findings into actionable design improvements. 
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
