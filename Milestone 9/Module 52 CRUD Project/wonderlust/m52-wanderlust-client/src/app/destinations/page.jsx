
import DestinationCard from "@/components/DestinationCard";

const DestinationPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`)
    const destinations = await res.json() 


    return (
        <div className="max-w-7xl mx-auto px-3">
            <h1 className="text-center text-3xl font-bold mt-8 mb-2 ">All destinations</h1>


            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 ">
                {
                    destinations.map(destination => <DestinationCard key={destination._id} destination={destination}/>)
                }

            </div>

        </div>
    );
};

export default DestinationPage;