import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-zinc-800 py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link href="/" className="font-bold text-xl text-white hover:text-gray-200 transition-colors">
            ✨ MruudMail
          </Link>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <Link 
            href="/" 
            className="text-zinc-300 hover:text-white transition-colors"
          >
            Dashboard
          </Link>
          <Link 
            href="/components" 
            className="text-zinc-300 hover:text-white transition-colors"
          >
            Components
          </Link>
          <Link 
            href="/templates" 
            className="text-zinc-300 hover:text-white transition-colors"
          >
            Templates
          </Link>
          <Link 
            href="/docs" 
            className="text-zinc-300 hover:text-white transition-colors"
          >
            Docs
          </Link>
          <Link 
            href="/marketing" 
            className="text-zinc-300 hover:text-white transition-colors"
          >
            Marketing
          </Link>
          {/* Add more nav links as needed */}
        </nav>
        
        <div className="flex items-center space-x-4">
          {/* This could be a settings button, profile icon, etc. */}
          <Link 
            href="/settings"
            className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.532 1.532 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
} 