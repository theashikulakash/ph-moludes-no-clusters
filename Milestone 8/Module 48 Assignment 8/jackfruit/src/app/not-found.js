import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center text-center  justify-center bg-gray-50 p-4">
      <div className="w-full max-w-xl text-center space-y-12 flex flex-col gap-4">
        
        {/* Visual 404 Header */}
        
        <h3 className="text-3xl font-bold text-gray-800">
            404
          </h3>
        

        {/* Text Content */}
        <div className="space-y-4">
          <h3 className="text-6xl font-bold text-gray-800">
            Looks like you're adrift.
          </h3>
          <p className="text-gray-500 max-w-md mx-auto">
            The page you're looking for has seemingly melted away in the summer sun. 
            Let's get you back to the cool shade.
          </p>
        </div>

        {/* Action Button */}
        <div className="flex justify-center">
          <Link 
            href="/" 
            className="group flex items-center gap-3 p-4 bg-[var(--accent)]/80 text-white font-bold rounded-full"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Return to Homepage
          </Link>
        </div>

        <p className="text-xs text-gray-400 pt-10 uppercase tracking-widest">
          PeakSummer Error: 404_NOT_FOUND ...
        </p>
      </div>
    </div>
  );
}