import Image from "next/image";

export default function Affinity() {
  return (
    <div className="w-full mb-8">
      <Image 
        src={'/dejaBrew artefacts/dejabrew affinity diagram.jpg'}
        width={1000}
        height={400}
        alt={'Affinity Diagram showing grouped user research insights'}
        className="rounded-lg border border-medium-light hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}