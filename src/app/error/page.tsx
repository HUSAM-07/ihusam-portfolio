import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-3 sm:p-4 bg-gray-700 flex items-center space-x-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
            <div className="flex-grow text-center text-xs sm:text-sm font-mono">404</div>
          </div>
          <div className="p-6 sm:p-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-4">404</h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-4">No Navbars here</h2>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-400">
              The page you are looking for doesn&apos;t exist or has been moved.
              Continue your search for any details from the homepage.
            </p>
            <Link 
              href="/"
              className="inline-block bg-white text-gray-900 font-semibold py-2 px-4 rounded hover:bg-gray-200 transition duration-300 text-sm sm:text-base"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
