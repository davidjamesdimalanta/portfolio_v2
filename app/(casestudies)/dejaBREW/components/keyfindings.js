import Image from "next/image";

export default function KeyFindings() {
    return (
        <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border border-medium-light p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Ambience is Key</h3>
                <div className="flex flex-col items-center mb-4">
                    <Image 
                        src={'/bro assets/Coffee shop-bro.png'}
                        width={150}
                        height={150}
                        alt={'Coffee shop ambience illustration'}
                        className="mb-4"
                    />
                </div>
                <p className="text-lg">
                    Natural light, cleanliness, and aesthetics are crucial for a relaxing and productive café environment.
                </p>
            </div>
            
            <div className="border border-medium-light p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Mixed Views on Reviews</h3>
                <div className="flex flex-col items-center mb-4">
                    <Image 
                        src={'/bro assets/Online games addiction-bro.png'}
                        width={150}
                        height={150}
                        alt={'Online reviews illustration'}
                        className="mb-4"
                    />
                </div>
                <p className="text-lg">
                    While some patrons rely on online reviews for café selection, others prefer personal discovery due to negative experiences with these platforms.
                </p>
            </div>
            
            <div className="border border-medium-light p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Holistic Consumer Preferences</h3>
                <div className="flex flex-col items-center mb-4">
                    <Image 
                        src={'/bro assets/coffee bean-bro.png'}
                        width={150}
                        height={150}
                        alt={'Coffee bean illustration representing preferences'}
                        className="mb-4"
                    />
                </div>
                <p className="text-lg">
                    Café designers should balance tangible offerings (food, drink) with intangible aspects (ambiance, convenience).
                </p>
            </div>
            
            <div className="border border-medium-light p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Wi-Fi Expectations</h3>
                <div className="flex flex-col items-center mb-4">
                    <Image 
                        src={'/bro assets/No connection-bro.png'}
                        width={150}
                        height={150}
                        alt={'No internet connection illustration'}
                        className="mb-4"
                    />
                </div>
                <p className="text-lg">
                    Essential for activities needing connectivity; poor Wi-Fi negatively impacts a café experience.
                </p>
            </div>
        </div>
    );
}
