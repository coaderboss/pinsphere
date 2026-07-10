import Navbar from '@/components/Navbar';
import MasonryGrid from '@/components/MasonryGrid';
import CreatePinModal from '@/components/CreatePinModal';
import FloatingCreateButton from '@/components/FloatingCreateButton'; // Import missing tha

export default function Home() {
  return (
    // dark:bg-gray-900 add kiya gaya hai
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navbar />
      <main className="pt-4 pb-10">
        <MasonryGrid />
      </main>
      <CreatePinModal />
      <FloatingCreateButton />
    </div>
  );
}