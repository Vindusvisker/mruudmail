import EmailForm from '@/components/EmailForm';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Email Capture System</h1>
        <p className="text-xl mb-8">
          A centralized email collection service for all your projects.
        </p>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Example Form</h2>
          <EmailForm 
            projectId="demo-project" 
            buttonText="Join the waitlist"
            successMessage="You've been added to our waitlist!"
          />
        </div>
      </div>
    </main>
  );
}
