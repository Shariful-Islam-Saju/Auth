import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-2">Page Not Found</p>
      <Link
        href="/"
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
