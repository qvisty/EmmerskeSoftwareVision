import HeroSection from '@/components/home/HeroSection';
import QuickStats from '@/components/home/QuickStats';
import TimelineOverview from '@/components/home/TimelineOverview';
import HighlightsSection from '@/components/home/HighlightsSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickStats />
      <TimelineOverview />
      <HighlightsSection />
    </>
  );
}
