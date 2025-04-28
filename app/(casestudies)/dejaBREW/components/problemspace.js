import Image from "next/image";

export default function ProblemSpace() {
  return (
    <div className="w-full">
      <div className="mb-8">
        <div className=" p-6 rounded-lg border-l-4 border-medium mb-6">
          <h2 className="text-section text-lg font-medium mb-2">Research Question</h2>
          <h3 className="text-xl mb-4 font-bold">
            How can we provide <span className="font-medium">up-to-date</span> and <span className="font-medium">personalized information</span> to help users find the perfect café?
          </h3>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="border border-medium-light p-6 rounded-lg">
          <h4 className="font-bold mb-2">Youth&apos;s Choice</h4>
          <p><span className="font-medium">Specialty blended espresso beverages</span> are the most popular among Canadians under 35.</p>
        </div>
        <div className="border border-medium-light p-6 rounded-lg">
          <h4 className="font-bold mb-2">Review vs. Discovery</h4>
          <p>A split in patron behavior shows reliance on online reviews for some, while others prefer personal discovery.</p>
        </div>
        <div className="border border-medium-light p-6 rounded-lg">
          <h4 className="font-bold mb-2">Shift to Social Media</h4>
          <p>Younger customers increasingly use social media like <span className="font-medium">Instagram</span> and <span className="font-medium">TikTok</span> for discovering new cafés.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-medium-light p-6 rounded-lg">
          <h4 className="font-bold mb-2">Hub Spots</h4>
          <p>High importance of <span className="font-medium">Wi-Fi</span> availability and <span className="font-medium">seating comfort</span>, with patrons often verifying these before visiting.</p>
        </div>
        <div className="border border-medium-light p-6 rounded-lg">
          <h4 className="font-bold mb-2">Third Places</h4>
          <p>Cafés offer a conducive environment for creative thinking and productivity, thanks to <span className="font-medium">ambient noise</span> and <span className="font-medium">optimal lighting</span>.</p>
        </div>
      </div>
    </div>
  );
}