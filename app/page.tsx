import Header from '@/components/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">Welcome back, Marcus</h1>
          <div className="flex gap-3">
            <Link 
              href="/insights" 
              className="inline-flex items-center px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition-colors"
            >
              <span>Set up insights</span>
              <svg className="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
              </svg>
            </Link>
            <button className="inline-flex items-center px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-200 transition-colors">
              <span>Create new</span>
              <svg className="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Revenue Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium">Revenue</h2>
            <Link href="/purchases" className="text-blue-400 hover:text-blue-300 flex items-center">
              Go to purchases
              <svg className="ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-zinc-100/5 p-6 rounded-lg">
              <p className="text-sm text-zinc-400 mb-2">Today</p>
              <p className="text-3xl font-bold">$147</p>
            </div>
            <div className="bg-zinc-100/5 p-6 rounded-lg">
              <p className="text-sm text-zinc-400 mb-2">Past 7 days</p>
              <div className="flex items-end gap-2">
                <p className="text-3xl font-bold">$892</p>
                <p className="text-sm font-medium text-green-500 pb-1">↑ 12.4%</p>
              </div>
            </div>
            <div className="bg-zinc-100/5 p-6 rounded-lg">
              <p className="text-sm text-zinc-400 mb-2">Past 30 days</p>
              <div className="flex items-end gap-2">
                <p className="text-3xl font-bold">$3,251</p>
                <p className="text-sm font-medium text-green-500 pb-1">↑ 8.7%</p>
              </div>
            </div>
            <div className="bg-zinc-100/5 p-6 rounded-lg">
              <p className="text-sm text-zinc-400 mb-2">Total</p>
              <p className="text-3xl font-bold">$12,647</p>
            </div>
          </div>
        </div>

        {/* Subscribers Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium">Subscribers</h2>
            <Link href="/subscribers" className="text-blue-400 hover:text-blue-300 flex items-center">
              Go to subscribers
              <svg className="ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-zinc-100/5 p-6 rounded-lg">
              <p className="text-sm text-zinc-400 mb-2">Today</p>
              <p className="text-3xl font-bold">24</p>
            </div>
            <div className="bg-zinc-100/5 p-6 rounded-lg">
              <p className="text-sm text-zinc-400 mb-2">Past 7 days</p>
              <div className="flex items-end gap-2">
                <p className="text-3xl font-bold">186</p>
                <p className="text-sm font-medium text-green-500 pb-1">↑ 16.1%</p>
              </div>
            </div>
            <div className="bg-zinc-100/5 p-6 rounded-lg">
              <p className="text-sm text-zinc-400 mb-2">Past 30 days</p>
              <div className="flex items-end gap-2">
                <p className="text-3xl font-bold">742</p>
                <p className="text-sm font-medium text-green-500 pb-1">↑ 8.6%</p>
              </div>
            </div>
            <div className="bg-zinc-100/5 p-6 rounded-lg">
              <p className="text-sm text-zinc-400 mb-2">Total</p>
              <p className="text-3xl font-bold">12,578</p>
            </div>
          </div>
        </div>

        {/* Email Performance Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium">Email performance</h2>
            <Link href="/broadcasts" className="text-blue-400 hover:text-blue-300 flex items-center">
              Go to broadcasts
              <svg className="ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          
          <p className="text-zinc-400 mb-4">All time email performance</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-zinc-100/5 p-6 rounded-lg">
              <p className="text-sm text-zinc-400 mb-2">Average open rate</p>
              <p className="text-3xl font-bold">32.16%</p>
            </div>
            <div className="bg-zinc-100/5 p-6 rounded-lg">
              <p className="text-sm text-zinc-400 mb-2">Average click rate</p>
              <p className="text-3xl font-bold">1.81%</p>
            </div>
            <div className="bg-zinc-100/5 p-6 rounded-lg">
              <p className="text-sm text-zinc-400 mb-2">Total emails sent</p>
              <p className="text-3xl font-bold">608k</p>
            </div>
          </div>
          
          <div className="bg-zinc-100/5 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-6">Recent broadcast performance</h3>
            
            {/* Chart representation */}
            <div className="relative h-64">
              {/* Bar Chart Background Grid */}
              <div className="absolute inset-0 grid grid-cols-5 grid-rows-5">
                {[...Array(25)].map((_, i) => (
                  <div key={i} className="border-t border-l border-zinc-800"></div>
                ))}
              </div>
              
              {/* Fake Chart Data */}
              <div className="relative h-full flex items-end">
                {/* Email 1 */}
                <div className="w-1/5 h-full flex flex-col justify-end items-center px-2">
                  <div className="w-10 bg-blue-200/20 rounded-t h-[70%]"></div>
                  <div className="mt-2 text-xs text-zinc-500">Email 1</div>
                </div>
                
                {/* Email 2 */}
                <div className="w-1/5 h-full flex flex-col justify-end items-center px-2">
                  <div className="w-10 bg-blue-200/20 rounded-t h-[55%]"></div>
                  <div className="mt-2 text-xs text-zinc-500">Email 2</div>
                </div>
                
                {/* Email 3 */}
                <div className="w-1/5 h-full flex flex-col justify-end items-center px-2">
                  <div className="w-10 bg-blue-200/20 rounded-t h-[65%]"></div>
                  <div className="mt-2 text-xs text-zinc-500">Email 3</div>
                </div>
                
                {/* Email 4 */}
                <div className="w-1/5 h-full flex flex-col justify-end items-center px-2">
                  <div className="w-10 bg-blue-200/20 rounded-t h-[60%]"></div>
                  <div className="mt-2 text-xs text-zinc-500">Email 4</div>
                </div>
                
                {/* Email 5 */}
                <div className="w-1/5 h-full flex flex-col justify-end items-center px-2">
                  <div className="w-10 bg-blue-200/20 rounded-t h-[50%]"></div>
                  <div className="mt-2 text-xs text-zinc-500">Email 5</div>
                </div>
                
                {/* Open Rate Line (Green) */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path 
                      d="M0,40 C10,35 15,30 25,40 C35,50 45,50 50,35 C55,20 65,25 75,30 C85,35 95,15 100,5" 
                      fill="none" 
                      stroke="#22c55e" 
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                
                {/* Click Rate Line (Orange) */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path 
                      d="M0,70 C10,75 20,80 30,70 C40,60 50,65 60,65 C70,65 80,70 100,60" 
                      fill="none" 
                      stroke="#f97316" 
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Chart Legend */}
            <div className="flex items-center justify-center gap-6 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-200/20 rounded"></div>
                <span className="text-xs text-zinc-400">Recipients</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs text-zinc-400">Open rate</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-xs text-zinc-400">Click rate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Resources and Inspiration Section */}
        <div className="mt-12 pt-8 border-t border-zinc-800">
          <h2 className="text-xl font-medium mb-6">From MruudMail</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Growth Tips */}
            <div className="bg-zinc-100/5 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Grow your audience faster</h3>
              
              <div className="flex items-start mb-4">
                <div className="p-2 bg-green-500/20 rounded mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Creator Network</h4>
                  <p className="text-xs text-zinc-400">Creators who join the Creator Network see on average 9% faster audience growth!</p>
                </div>
              </div>
              
              <div className="h-20 flex items-end justify-around mb-4">
                <div className="w-8 bg-green-500/40 rounded-t h-10"></div>
                <div className="w-8 bg-green-500/60 rounded-t h-14"></div>
                <div className="w-8 bg-green-500/80 rounded-t h-20"></div>
              </div>
              
              <button className="w-full py-2 bg-green-500/20 text-green-400 rounded text-sm hover:bg-green-500/30 transition-colors">
                Set up Recommendations
              </button>
            </div>
            
            {/* Latest Video */}
            <div className="bg-zinc-100/5 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Latest video</h3>
              
              <div className="aspect-video bg-zinc-800 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img src="https://picsum.photos/id/237/400/225" alt="Video thumbnail" className="w-full" />
              </div>
              
              <h4 className="font-medium text-sm">What&apos;s new in MruudMail | App Store, Polls, and Recommendations updates</h4>
            </div>
            
            {/* Daily Inspiration */}
            <div className="bg-zinc-100/5 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Daily inspiration</h3>
              
              <div className="aspect-video bg-zinc-800 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img src="https://picsum.photos/id/235/400/225" alt="Inspiration thumbnail" className="w-full" />
              </div>
              
              <h4 className="font-medium text-sm">How this creator turned their passion into a business on their own terms</h4>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Forms and Landing Pages */}
          <div className="bg-zinc-100/5 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Top forms and landing pages <span className="text-zinc-400 text-sm font-normal">Last 7 days</span></h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-600 mr-3"></div>
                  <span>Portfolio Signup</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-zinc-400">162</span>
                  <span className="text-green-500 text-sm">48.3%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-400 mr-3"></div>
                  <span>Newsletter Signup</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-zinc-400">97</span>
                  <span className="text-green-500 text-sm">29.1%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-300 mr-3"></div>
                  <span>Course Landing Page</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-zinc-400">53</span>
                  <span className="text-green-500 text-sm">15.8%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-200 mr-3"></div>
                  <span>Ebook Download</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-zinc-400">23</span>
                  <span className="text-green-500 text-sm">6.8%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Subscribers */}
          <div className="bg-zinc-100/5 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Most recent subscribers</h3>
            <div className="space-y-4">
              {[
                { avatar: "M", email: "marcus@example.com", type: "Newsletter" },
                { avatar: "J", email: "john@example.com", type: "Portfolio Access" },
                { avatar: "E", email: "emily@example.com", type: "Newsletter" },
                { avatar: "S", email: "sarah@example.com", type: "Course Signup" },
                { avatar: "D", email: "daniel@example.com", type: "Newsletter" },
              ].map((subscriber, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-white">
                    {subscriber.avatar}
                  </div>
                  <div>
                    <p className="text-sm">{subscriber.email}</p>
                    <p className="text-xs text-zinc-400">{subscriber.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
