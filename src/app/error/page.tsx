import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 bg-gray-700 flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="flex-grow text-center text-sm font-mono">404</div>
          </div>
          <div className="p-8">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <h2 className="text-3xl font-semibold mb-4">No Navbars here</h2>
            <p className="mb-6 text-gray-400">
              The page you are looking for doesn't exist or has been moved.
              Continue your search for the any details from the homepage.
            </p>
            <Link 
              href="/"
              className="inline-block bg-white text-gray-900 font-semibold py-2 px-4 rounded hover:bg-gray-200 transition duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
