// ============================================================
// BOXMEOUT — Market Detail Page (/markets/[market_id])
// ============================================================

import { Metadata } from 'next';
import { ErrorBoundary } from '../../../components/ui/ErrorBoundary';
import MarketDetailContent from './MarketDetailContent';

export async function generateMetadata({ params }: { params: { market_id: string } }): Promise<Metadata> {
  return {
    title: `Fight #${params.market_id} — Boxing Prediction`,
    openGraph: {
      title: `Fight #${params.market_id} | BoxMeOut`,
      description: 'Predict the outcome of this boxing match on BoxMeOut.',
      images: [{ url: '/og-image.png' }],
    },
  };
}

interface MarketDetailPageProps {
  params: { market_id: string };
}

export default function MarketDetailPage({ params }: MarketDetailPageProps): JSX.Element {
  return (
    <ErrorBoundary>
      <MarketDetailContent market_id={params.market_id} />
    </ErrorBoundary>
  );
}
