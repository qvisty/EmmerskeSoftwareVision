import HeroSection from '@/components/home/HeroSection';
import QuickStats from '@/components/home/QuickStats';
import TimelineOverview from '@/components/home/TimelineOverview';
import HighlightsSection from '@/components/home/HighlightsSection';
import MindmapDisclaimer from '@/components/home/MindmapDisclaimer';

export default function HomePage() {
  return (
    <>
      <MindmapDisclaimer />
      <HeroSection />
      <QuickStats />
      <TimelineOverview />
      <HighlightsSection />
    </>
  );
}
