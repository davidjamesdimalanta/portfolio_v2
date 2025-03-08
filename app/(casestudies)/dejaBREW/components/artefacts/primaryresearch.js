import Image from "next/image";

export default function PrimarySummary(){
    return(
        <div className='min-h-[20svh] md:min-h-[30svh] flex flex-col md:flex-row justify-center items-center py-4 lg:py-0 gap-2'>
              <div className='w-auto flex flex-col items-center text-lg font-medium rounded-md shadow-sm border-[1px] bg-white border-gray-200'>
                <Image 
                  src={'/amico assets/Interview-rafiki.png'}
                  width={350}
                  height={350}
                  alt={'amico assets'}
                />
                <span>We conducted 10 Interviews</span>
              </div>
              <div className='w-auto flex flex-col items-center text-lg font-medium rounded-md shadow-sm border-[1px] bg-white border-gray-200'>
                <Image 
                  src={'/amico assets/Customer Survey-rafiki.png'}
                  width={350}
                  height={350}
                  alt={'amico assets'}
                />
                <span>and received 66 Survey Results</span>
              </div>
        </div>
    )
}