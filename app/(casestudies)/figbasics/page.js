import Link from "next/link";
import Image from "next/image";
import ModuleStructure from "./components/ModuleStructure";
import Video from "./components/video";

export default function Figbasics() {

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-4xl font-bold">Figma Training Modules Capstone Project</h1>
            <h2 className="text-2xl mb-6">Making Figma more accessible for beginners</h2>
            <div className="flex justify-center">
                <Image src="/figbasics/figbasics.png" alt="Figma Training Modules Capstone Project" width={1000} height={1000} />
            </div>
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
                <p>January 2025 - April 2025</p>
              </div>
              <div className="border-l-2 border-medium-light p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  {/* User Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 mr-2 inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                  My Role
                </h3>
                <p>Team Lead, Designer</p>
              </div>
              <div className="border-l-2 border-medium-light p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  {/* Wrench/Screwdriver Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 mr-2 inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                  </svg>
                  Tools
                </h3>
                <p>Figma</p>
              </div>
            </div>
          </section>
     
          {/* Objective */}
          <section className="mb-16">
              <div className="flex flex-col md:flex-row gap-8 mb-8 justify-center items-center">
                <div className="md:w-1/2">
                <h2 className="text-section text-2xl font-medium mb-2">Objective</h2>
                <h3 className="text-3xl font-semibold mb-4">Democratizing Figma</h3>
                  <p className="mb-4">
                    We wanted to create a comprehensive set of training modules that make Figma more accessible to beginners or those outside of the design field. <br /> <br />
                    We also wanted to teach tech literacy skills that aren&apos;t exclusive to Figma.
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-center items-center">
                  <Image src="/figbasics/figlogo.png" alt="Figma Logo" width={400} height={400} />
                </div>
              </div>
          </section>

          {/* Foundation Section */}
          <section className="mb-16">
            <h2 className="text-section text-2xl font-medium mb-2">Foundation</h2>
            <h3 className="text-3xl font-semibold mb-4">Literature Review</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Findings from Moor Insights & Strategy */}
              <div className="bg-light/30 p-6 rounded-lg">
                <h4 className="text-xl font-medium mb-3">Current EdTech Landscape (Moor Insights, 2016)</h4>
                <p className="mb-4">
                  Our investigation started by examining tech use in K-12 education. A key study revealed that while 50% of students used Google Docs weekly, indicating adoption of cloud productivity tools, their usage was primarily limited to word processing and basic online activities.
                </p>
                <p className="mb-4">
                  Significant gaps exist. Students rarely use spreadsheet software like Google Sheets, lack expected Excel skills for higher education, and creative competencies like digital drawing, video editing, or 3D modeling are largely absent.
                </p>
              </div>
              
              {/* Opportunity for Figma */}
              <div className="bg-light/30 p-6 rounded-lg">
                <h4 className="text-xl font-medium mb-3">The Figma Opportunity</h4>
                 <p className="mb-4">
                   General-purpose tools like Google Docs are insufficient for more creative and design-focused tasks such as mind mapping or visual design, lacking the necessary features and flexibility.
                 </p>
                 <p className="mb-4">
                   This gap presents a clear opportunity to introduce specialized tools. Figma, known for its <span className="font-semibold">design diversity and creative freedom</span>, can empower beginners to create high-quality visual aids (graphics, icons, presentations) more effectively.
                 </p>
              </div>
            </div>
            
            {/* Concluding thought */}
            <div className="mt-8 p-6 border-l-4 border-medium-light">
              <p className="italic">
                &quot;Through Figma, we can bridge the gap in creative digital skills and empower students with the design diversity and creative freedom needed for future success in various fields.&quot;
              </p>
            </div>
          </section>

          {/* Curriculum Section */}
          <section className="mb-16">
            <h2 className="text-section text-2xl font-medium mb-2">Curriculum Design</h2>
            <h3 className="text-3xl font-semibold mb-4">Proposed Learning Modules</h3>
            
            {/* Figma Embed */}
            <div className="w-full flex flex-col items-center mb-8">
              <div className="w-full h-[500px] overflow-hidden">
                <iframe 
                  style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} 
                  width="100%" 
                  height="450" 
                  src="https://embed.figma.com/board/qaZI5MhCwfSWp6a1epNNCI/Module-IA-Proposal?node-id=0-1&embed-host=share" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <h4 className="text-sm text-medium mt-3 text-center">Figjam Board: Module Information Architecture</h4>
            </div>

            <div className="mb-8">
              <div className="p-5 bg-light/40 rounded-lg border-l-4 border-primary mb-4">
                <p className="mb-4 font-medium text-lg">
                  <span className="text-primary font-bold">Progressive Curriculum:</span> We designed a curriculum that is structured to progressively build skills from basic to advanced, ensuring learners can confidently navigate Figma while developing transferable design thinking abilities.
                </p>
              </div>
              <div className="p-5 bg-light/40 rounded-lg border-l-4 border-primary mb-4">
                <p className="mb-4 font-medium text-lg">
                  <span className="text-primary font-bold">Theory + Practice:</span> Each module combines theoretical concepts with hands-on practice, allowing students to immediately apply what they&apos;ve learned through guided exercises and creative projects.
                </p>
              </div>
            </div>
            
            
            {/* Module Highlights */}
            <h4 className="text-3xl font-semibold mb-4">Final Core Lessons</h4>
            <p className="mb-6">While the initial proposal was broad, we focused our final deliverables on four foundational lessons to ensure a strong base for beginners:</p>
            
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              {/* Left side: Explanation */}
              <div className="md:w-1/2">
                <p className="mb-4">
                  Our curriculum development process identified these four core modules as essential building blocks that provide students with a comprehensive foundation in Figma.
                </p>
                <p className="mb-4">
                  Each lesson builds upon the previous one, creating a logical progression from basic interface navigation to more advanced vector manipulation techniques.
                </p>
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/30 mt-6">
                  <p className="italic">
                    &quot;By focusing on these four fundamental areas, we ensure students develop the essential skills needed before moving to more complex design concepts.&quot;
                  </p>
                </div>
              </div>
              
              {/* Right side: 2x2 grid of lessons */}
              <div className="md:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  {/* Lesson 1: Basics */}
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/30">
                    <h5 className="text-lg font-semibold mb-2 text-primary">Lesson: Basics</h5>
                    <p className="text-sm">Navigating the Figma interface, understanding core tools (frames, shapes, text), and basic file management.</p>
                  </div>
                  
                  {/* Lesson 2: Typography */}
                  <div className="bg-light/30 p-4 rounded-lg border border-medium-light">
                    <h5 className="text-lg font-semibold mb-2">Lesson: Typography</h5>
                    <p className="text-sm">Working with text styles, font properties, alignment, and creating readable type hierarchies.</p>
                  </div>
                  
                  {/* Lesson 3: Colour */}
                  <div className="bg-light/30 p-4 rounded-lg border border-medium-light">
                    <h5 className="text-lg font-semibold mb-2">Lesson: Colour</h5>
                    <p className="text-sm">Applying colours, understanding colour theory basics, creating palettes, and using gradients.</p>
                  </div>
                  
                  {/* Lesson 4: Vectors */}
                  <div className="bg-light/30 p-4 rounded-lg border border-medium-light">
                    <h5 className="text-lg font-semibold mb-2">Lesson: Vectors</h5>
                    <p className="text-sm">Using the pen tool, editing vector paths, understanding boolean operations, and creating simple icons.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Module Structure Section */}
          <section className="mb-16">
            <h2 className="text-section text-2xl font-medium mb-2">Module Structure</h2>
            <h3 className="text-3xl font-semibold mb-4">In-Canvas Learning Experience</h3>
            
            <div className="mb-8">
              <p className="mb-6">
                Unlike traditional video tutorials or static walkthrough pages, our modules are designed to be experienced directly within Figma&apos;s canvas. This in-canvas approach creates a more immersive, hands-on learning environment where students can immediately practice what they&apos;re learning without switching contexts.
              </p>
              
              <div className="p-5 bg-light/40 rounded-lg border-l-4 border-primary mb-6">
                <p className="font-medium text-lg">
                  <span className="text-primary font-bold">Each module consists of three integrated sections:</span> Learning, Exercise, and Sandbox.
                </p>
              </div>
            </div>
            
            <ModuleStructure />
        
            
            <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
              <h4 className="text-xl font-semibold mb-3">Benefits of In-Canvas Learning</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-medium">Contextual Understanding:</span> Learning directly in the tool creates stronger mental connections between concepts and application.</li>
                <li><span className="font-medium">Immediate Practice:</span> No context-switching between tutorial videos and the application.</li>
                <li><span className="font-medium">Progressive Confidence:</span> The structured-to-open approach builds confidence as learners move from guided exercises to creative freedom.</li>
                <li><span className="font-medium">Self-Paced Exploration:</span> Being located in the canvas allows learners to explore the tool at their own pace.</li>
              </ul>
            </div>
          </section>
            {/* Show/Hide Functionality Section */}
            <div className="mb-12">
              <h4 className="text-3xl font-semibold mb-4">Interactive Show/Hide Functionality</h4>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Left side: Explanation */}
                <div className="md:w-1/2">
                  <p className="mb-4">
                    Each module has a show or hide feature. The show/hide functionality of our modules allows learners to:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 mb-6">
                    <li><span className="font-medium">Reveal information at their own pace</span>, reducing cognitive overload and allowing for better information processing</li>
                    <li><span className="font-medium">Focus on one concept at a time</span>, revealing explanations only when they&apos;re ready to move forward</li>
                    <li><span className="font-medium">Review specific sections</span> without scrolling through the entire module</li>
                    <li><span className="font-medium">Create a sense of accomplishment</span> as they progressively reveal or hide sections and complete each section</li>
                  </ul>
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/30">
                    <p className="italic">
                      &quot;The show/hide interactions foster a more active learning approach where students engage with the content at their own rhythm, supporting our goal of creating a truly self-paced learning environment.&quot;
                    </p>
                  </div>
                </div>
                
                {/* Right side: Video demonstration */}
                <div className="md:w-1/2 relative">
                  <Video />
                  <p className="text-sm text-medium mt-3 text-center">Demonstration of the show/hide functionality in exercise modules</p>
                </div>
              </div>
            </div>

          {/* Project Outcomes Section */}
          <section className="mb-16">
            <h2 className="text-section text-2xl font-medium mb-2">Project Outcomes</h2>
            <h3 className="text-3xl font-semibold mb-4">Comprehensive Learning Resource</h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Left side: Content details */}
              <div>
                <div className="p-5 bg-light/40 rounded-lg border-l-4 border-primary mb-6">
                  <p className="font-medium text-lg">
                    <span className="text-primary font-bold">Extensive Content Library:</span> We developed over 30 lesson/exercise pairs across the 4 core modules, creating a comprehensive learning path for Figma beginners.
                  </p>
                </div>
                
                <p className="mb-4">
                  Each core lesson (Basics, Typography, Colour, and Vectors) contains multiple sub-lessons that break down complex concepts into manageable learning units. This granular approach ensures learners can:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li><span className="font-medium">Master one skill at a time</span> before moving to more advanced concepts</li>
                  <li><span className="font-medium">Track their progress</span> through clearly defined learning objectives</li>
                  <li><span className="font-medium">Build confidence</span> through incremental skill development</li>
                  <li><span className="font-medium">Apply knowledge immediately</span> through paired exercises</li>
                </ul>
              </div>
              
              {/* Right side: Stats and future plans */}
              <div className="bg-light/30 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4">By the Numbers</h4>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <span className="text-4xl font-bold text-primary block">30+</span>
                    <span className="text-medium">Lesson-Exercise Pairs</span>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <span className="text-4xl font-bold text-primary block">4</span>
                    <span className="text-medium">Core Modules</span>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <span className="text-4xl font-bold text-primary block">100%</span>
                    <span className="text-medium">In-Canvas Learning</span>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <span className="text-4xl font-bold text-primary block">∞</span>
                    <span className="text-medium">Creative Possibilities</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Future Plans */}
            <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 mb-8">
              <h4 className="text-xl font-semibold mb-3">Future Plans</h4>
              <p className="mb-4">
                We&apos;re currently in the final stages of polishing these learning modules. Once ready, they&apos;ll be publicly accessible through the Figma Community space. This will allow:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-medium">Free access</span> for anyone looking to learn Figma</li>
                <li><span className="font-medium">Community feedback</span> to help us improve and expand the content</li>
                <li><span className="font-medium">Potential collaborations</span> with educators and designers</li>
                <li><span className="font-medium">Ongoing updates</span> as Figma evolves with new features</li>
              </ul>
            </div>
            
            <div className="flex justify-center">
              <Link 
                href="https://www.figma.com/community" 
                target="_blank"
                className="group flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                </svg>
                Visit Figma Community
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
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </Link>
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
                Back to Portfolio
              </Link>
              
              <Link 
                href="/dejaBREW" 
                className="group flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors duration-300"
              >
                Next Project: dejaBREW
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