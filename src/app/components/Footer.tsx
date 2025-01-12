export function Footer(){
    return <div className="mt-4">

<footer className="bg-gray-800 text-white">
  <div className="max-w-7xl mx-auto px-4 py-6 text-center">
    <h2 className="text-lg font-semibold">Habit Tracker</h2>
    <p className="text-sm mt-2">Track your habits and build a better tomorrow.</p>

    {/* Navigation Links */}
    

    {/* Social Media Icons */}
    <div className="mt-4 flex justify-center gap-6">
      <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-blue-500 transition">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 5.02 3.68 9.16 8.44 9.87v-6.98H7.9v-2.89h2.54V9.6c0-2.5 1.49-3.89 3.77-3.89 1.1 0 2.25.2 2.25.2v2.48H15.6c-1.38 0-1.8.85-1.8 1.72v2.07h3.06l-.49 2.89h-2.57v6.98C18.32 21.16 22 17.02 22 12Z" />
        </svg>
      </a>
      <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-blue-500 transition">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.17 4.17 0 0 0 1.82-2.29 8.36 8.36 0 0 1-2.64 1 4.16 4.16 0 0 0-7.08 3.79 11.78 11.78 0 0 1-8.55-4.33 4.14 4.14 0 0 0 1.29 5.55c-.65-.02-1.26-.2-1.8-.5v.05a4.16 4.16 0 0 0 3.34 4.08c-.56.15-1.15.17-1.73.06a4.17 4.17 0 0 0 3.89 2.88A8.36 8.36 0 0 1 2 18.36a11.78 11.78 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.69 0-.18-.01-.35-.02-.52A8.33 8.33 0 0 0 22.46 6Z" />
        </svg>
      </a>
      <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-blue-500 transition">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7ZM20 7v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10c1.65 0 3 1.35 3 3ZM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4Zm0 6.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm4.5-7.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" />
        </svg>
      </a>
    </div>

    {/* Divider */}
    <div className="border-t border-gray-600 mt-6"></div>

    {/* Copyright */}
    <div className="mt-4 text-sm text-gray-400">
      <p>© {new Date().getFullYear()} Habit Tracker. All rights reserved.</p>
    </div>
  </div>
</footer>


    </div>
}