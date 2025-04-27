import Link from 'next/link'
import CarouselGallery from '@/components/CarouselGallery'


export default function SENaiCaseStudy() {
  // Image gallery data
  const galleryImages = [
    {
      src: "/sen assets/senLanding.png",
      alt: "SENai Landing Page",
      width: 1200,
      height: 300,
      caption: "SENai - Shaping the Future of Emotional Intelligence"
    },
    {
      src: "/sen assets/senLens.png",
      alt: "SENai Contact Lenses",
      width: 1200,
      height: 300,
      caption: "SENai Contact Lenses - Discreet Emotional Monitoring"
    },
    {
      src: "/sen assets/senGlasses.png", 
      alt: "SENai Smart Glasses",
      width: 1200,
      height: 300,
      caption: "SENai Smart Glasses - Wearable Affective Computing"
    },
    {
      src: "/sen assets/senMockup.png", 
      alt: "Wearable UX Dashboard",
      width: 1200,
      height: 300,
      caption: "Personal Emotional Analytics Dashboard"
    },
    {
      src: "/sen assets/senPreview1.png", 
      alt: "Wearable UX Dashboard",
      width: 1200,
      height: 300,
      caption: "Sen Demo in a job interview"
    },
    {
      src: "/sen assets/senPreview2.png", 
      alt: "Wearable UX Dashboard",
      width: 1200,
      height: 300,
      caption: "Sen Demo in a party setting"
    },
  ];

  const mobileImages = [
    {
      src: "/sen assets/mobile screens/mobileLanding.png",
      alt: "SENai Landing Page",
      width: 1200,
      height: 300,
      caption: "Product Landing Page"
    },
    {
      src: "/sen assets/mobile screens/mobileInfluencer.png",
      alt: "SENai Contact Lenses",
      width: 1200,
      height: 300,
      caption: "Sen AI Influencer - SENfluencer"
    },
    {
      src: "/sen assets/mobile screens/mobileGlasses.png", 
      alt: "SENai Smart Glasses",
      width: 1200,
      height: 300,
      caption: "SENai Smart Glasses - Wearable Affective Computing"
    },
    {
      src: "/sen assets/mobile screens/dashboard.png", 
      alt: "Wearable UX Dashboard",
      width: 1200,
      height: 300,
      caption: "Mobile App Dashboard"
    },
    {
      src: "/sen assets/mobile screens/profile.png", 
      alt: "Wearable UX Dashboard",
      width: 1200,
      height: 300,
      caption: "Mobile App Profile Page"
    },
    {
      src: "/sen assets/mobile screens/analytics.png", 
      alt: "Wearable UX Dashboard",
      width: 1200,
      height: 300,
      caption: "Mobile App Analytics Page"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold">SENai: A Critical Speculative Design</h1>
        <h2 className="text-3xl mb-6">Exploring the ethical implications of wearable affective computing</h2>
        <CarouselGallery 
          images={galleryImages}
          className="w-full hidden md:block"
        />
        <CarouselGallery 
          images={mobileImages}
          className="w-full md:hidden"
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
            <p>March 2025 - April 2025</p>
          </div>
          <div className="border-l-2 border-medium-light p-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              {/* User Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 mr-2 inline-block">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              My Role
            </h3>
            <p>Website Designer & Developer</p>
          </div>
          <div className="border-l-2 border-medium-light p-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              {/* Wrench/Screwdriver Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 mr-2 inline-block">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
              </svg>
              Tools
            </h3>
            <p>Figma, React, Next.js, Tailwind CSS, AWS</p>
          </div>
        </div>
      </section>
 
      <section className="mb-16">
        <h2 className="text-section text-xl font-medium mb-6">Purpose</h2>
        
        <div className="prose max-w-none mb-8">
          <p className="mb-4 text-justify">
            Human relationships and interactions are one of the most important aspects of our lives, playing a significant role in our emotional well-being and overall happiness. In this speculative design project, We created SENai - a fictional company that highlights the ethical implications of using wearable AI technology for emotional monitoring.
          </p>
          <p className="mb-4 text-justify">
            SENai offers &quot;wearable affective computing&quot; through smart glasses and contact lenses that claim to help users achieve &quot;perfect&quot; social interactions according to algorithmic recommendations. The project explores how such technologies might inadvertently reinforce social biases, prioritize efficiency over emotional complexity, and raise serious concerns about privacy and surveillance.
          </p>
          <p className="text-justify">
            By situating this within broader critiques of IoT and data practices, We reveal how technologies risk reinforcing structural inequalities and diminishing human autonomy in an AI-dominated society.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-section text-xl font-medium mb-6">Our Product</h2>
        
        <div className="prose max-w-none mb-8">
          <p className="mb-4 text-justify">
            To execute our vision through speculative design, We created a fictional company website showcasing SENai - a company that promotes wearable affective computing devices paired with a mobile app. The site showcases their products, real-time usage statistics, and purported success metrics.
          </p>
          
          <h3 className="text-lg font-medium mt-8 mb-4 text-medium">Hardware</h3>
          <p className="mb-4 text-justify">
            Users first purchase hardware - either monthly disposable contact lenses or smart glasses that directly track the user&apos;s eye movements, pupil dilation, and facial micro-expressions through embedded optometric sensors.
          </p>
          
          <h3 className="text-lg font-medium mt-8 mb-4 text-medium">Software</h3>
          <p className="mb-4 text-justify">
            Users pair the hardware devices with the SENai app, which allows them to keep track of their social interactions and receive personalized recommendations for &quot;improvement.&quot;
          </p>
          
          <h3 className="text-lg font-medium mt-8 mb-4 text-medium">Application</h3>
          <p className="mb-4 text-justify">
            Users activate SENai by wearing the lenses or glasses, then access the app which collects micro-data from eye movements, pupil dilation, and facial expressions of surrounding individuals. Feedback is delivered through subtle visual overlays that display customized guides for &quot;smoother, more normal&quot; interactions.
          </p>
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-section text-xl font-medium mb-6">Visit the Project</h2>
        
        <div className="prose max-w-none mb-8">
          <p className="mb-4 text-justify">
            Experience the SENai speculative design project firsthand by visiting the website.
          </p>
          
          <div className="mt-8 flex">
            <a 
              href="https://senai-ten.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center mb-4 sm:mb-0 px-6 py-3 bg-none border border-medium-light hover:bg-dark text-dark hover:text-white hover:border-dark rounded-md transition-colors duration-300"
              >
              Visit the SENai Website
            </a>
          </div>
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
