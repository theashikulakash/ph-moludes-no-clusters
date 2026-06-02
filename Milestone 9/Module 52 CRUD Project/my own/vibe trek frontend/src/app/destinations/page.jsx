import DestinationCard from "@/components/DestinationCard";
import demoJsonData from "@/app/data/demoJsonData.json";

export const dynamic = "force-dynamic";

const DestinationPage = async () => {
    let destinations;

    try {
        const res = await fetch(`${process.env.VIBE_TREK_SERVER_URL}/destination`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error(`Destination fetch failed: ${res.status} ${res.statusText}`);
        }

        destinations = await res.json();
    } catch (error) {
        console.warn("Destination API unavailable during render, falling back to demo data:", error);
        destinations = demoJsonData;
    }

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl text-center font-boldv text-cyan-500 mt-8 mb-3">All destinations</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {destinations.map((destination) => (
                    <DestinationCard key={destination._id} destination={destination} />
                ))}
            </div>
        </div>
    );
};

export default DestinationPage;