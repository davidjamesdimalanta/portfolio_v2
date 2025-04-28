import Image from "next/image";

export default function NextSteps() {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      <div className="border border-medium-light p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Review Fact Checker</h3>
        <div className="flex flex-col items-center mb-4">
          <Image 
            src={'/bro assets/factchecker.png'}
            width={200}
            height={200}
            alt={'Fact checker illustration'}
            className="mb-4"
          />
        </div>
        <p className="text-lg">
          Implementing <span className="font-medium">user trust ratings</span> and <span className="font-medium">upvotes</span> on reviews would provide users <span className="font-medium">accurate and user-driven data</span> when making their decisions.
        </p>
      </div>
      
      <div className="border border-medium-light p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Live Occupancy Data</h3>
        <div className="flex flex-col items-center mb-4">
          <Image 
            src={'/bro assets/liveoccupancy.png'}
            width={200}
            height={200}
            alt={'Live occupancy data illustration'}
            className="mb-4"
          />
        </div>
        <p className="text-lg">
          Implementing <span className="font-medium">live occupancy data</span> would help users scope out the busiest times during a cafe&apos;s operation and to inform them on <span className="font-medium">real-time seating availability</span>.
        </p>
      </div>
      
      <div className="border border-medium-light p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Gamification</h3>
        <div className="flex flex-col items-center mb-4">
          <Image 
            src={'/bro assets/gamification.png'}
            width={200}
            height={200}
            alt={'Gamification features illustration'}
            className="mb-4"
          />
        </div>
        <p className="text-lg">
          Gamifying certain aspects of dejaBREW e.g: through <span className="font-medium">badges</span> or <span className="font-medium">point systems</span>, would allow for more <span className="font-medium">user retention</span> and better community building.
        </p>
      </div>
      
      <div className="border border-medium-light p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Café Owner Features</h3>
        <div className="flex flex-col items-center mb-4">
          <Image 
            src={'/bro assets/userowner.png'}
            width={200}
            height={200}
            alt={'Cafe owner features illustration'}
            className="mb-4"
          />
        </div>
        <p className="text-lg">
          Integrating features <span className="font-medium">tailored for café owners</span>, such as <span className="font-medium">customer feedback management</span> and <span className="font-medium">menu customization</span> options, would enhance their engagement with the app, and promote its use to another group of users.
        </p>
      </div>
    </div>
  );
}
