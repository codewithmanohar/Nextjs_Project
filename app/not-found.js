// app/not-found.js
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="mb-6 text-gray-500">
        Sorry, the page you're looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-background rounded border"
      >
        Go Back Home
      </Link>
    </div>
  );
}