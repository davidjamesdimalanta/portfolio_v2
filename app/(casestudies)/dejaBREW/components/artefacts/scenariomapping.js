import Image from "next/image";

export default function ScenarioMapping() {
  return (
    <div className="w-full mb-12">
      <div className="mb-8">
        <h3 className="text-3xl font-bold mb-6">
          Starting with an <span className="font-medium">as-is scenario</span> based on the empathy map, we charted Lily&apos;s current process for locating her ideal café, capturing her associated actions, thoughts, and emotions.
        </h3>
        <Image 
          src={'/dejaBrew artefacts/asIs.jpg'}
          width={1000}
          height={400}
          alt={'As-is scenario showing current user journey'}
          className="rounded-lg border border-medium-light hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div>
        <h3 className="text-3xl font-bold mb-6">
          Then, using a <span className="font-medium">to-be scenario</span>, we envisioned an improved scenario for Lily, outlining how our designed solution could transform her café-finding experience.
        </h3>
        <Image 
          src={'/dejaBrew artefacts/toBe.jpg'}
          width={1000}
          height={400}
          alt={'To-be scenario showing improved user journey with our solution'}
          className="rounded-lg border border-medium-light hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
} 