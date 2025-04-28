import Image from "next/image";

export default function PrimarySummary() {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      <div className="flex flex-col items-center text-center border border-medium-light rounded-lg p-6 bg-white">
        <Image 
          src={'/amico assets/Interview-rafiki.png'}
          width={300}
          height={300}
          alt={'Illustration showing interview process'}
          className="mb-4"
        />
        <h3 className="text-xl font-bold">We conducted 10 Interviews</h3>
      </div>
      
      <div className="flex flex-col items-center text-center border border-medium-light rounded-lg p-6 bg-white">
        <Image 
          src={'/amico assets/Customer Survey-rafiki.png'}
          width={300}
          height={300}
          alt={'Illustration showing survey process'}
          className="mb-4"
        />
        <h3 className="text-xl font-bold">and received 66 Survey Results</h3>
      </div>
    </div>
  );
}