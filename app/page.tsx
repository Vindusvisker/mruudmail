import WaitlistForm from '@/components/WaitlistForm';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">MruudMail Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link 
            href="/marketing" 
            className="block p-6 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors"
          >
            <h2 className="text-xl font-bold mb-2">Marketing Emails</h2>
            <p className="text-zinc-400">Compose and send marketing emails to your subscribers</p>
          </Link>
          
          {/* Add more dashboard cards here as needed */}
        </div>
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-12">
            <WaitlistForm 
              projectId="indie-portfolio" 
              showHeader={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
