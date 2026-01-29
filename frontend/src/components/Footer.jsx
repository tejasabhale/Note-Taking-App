import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-auto border-t bg-gray-800">
  <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

    {/* Left */}
    <p className="text-sm text-gray-500">
      © {new Date().getFullYear()} NoteSphere. All rights reserved.
    </p>

    {/* Center Links */}
    <div className="flex gap-6 text-sm text-gray-600">
      <a
        href="#"
        className="relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5
                   after:h-[2px] after:w-full after:bg-orange-500
                   after:scale-x-0 after:rounded-full after:origin-center after:opacity-0
                   after:transition-all after:duration-300 after:ease-out
                   hover:after:scale-x-100 hover:after:opacity-100"
      >
        Privacy
      </a>

      <a
        href="#"
        className="relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5
                   after:h-[2px] after:w-full after:bg-orange-500
                   after:scale-x-0 after:rounded-full after:origin-center after:opacity-0
                   after:transition-all after:duration-300 after:ease-out
                   hover:after:scale-x-100 hover:after:opacity-100"
      >
        Terms
      </a>

      <a
        href="#"
        className="relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5
                   after:h-[2px] after:w-full after:bg-orange-500
                   after:scale-x-0 after:rounded-full after:origin-center after:opacity-0
                   after:transition-all after:duration-300 after:ease-out
                   hover:after:scale-x-100 hover:after:opacity-100"
      >
        Support
      </a>
    </div>

    {/* Right */}
    <p className="text-sm text-gray-400">
      Built with ❤️ by Tejas
    </p>

  </div>
</footer>

  )
}

export default Footer