import Image from 'next/image';
import DescriptionDashboard from './dashboard/_component/descriptionDashboard';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <DescriptionDashboard />
    </main>
  );
}
