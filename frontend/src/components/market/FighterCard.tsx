// ============================================================
// BOXMEOUT — FighterCard Component
// Displays fighter information with odds and pool size
// ============================================================

interface FighterCardProps {
  name: string;
  odds: number;
  poolXlm: number;
  isSelected?: boolean;
}

/**
 * FighterCard displays a fighter's name, odds, and pool size.
 * Used in pairs on the market detail page.
 */
export function FighterCard({ name, odds, poolXlm, isSelected }: FighterCardProps): JSX.Element {
  return (
    <div
      className={`rounded-lg p-4 text-center transition-colors ${
        isSelected ? 'bg-amber-500/20 border-2 border-amber-500' : 'bg-gray-800 border-2 border-gray-700'
      }`}
    >
      <h3 className="text-lg font-bold text-white mb-2 truncate">{name}</h3>
      <div className="space-y-1">
        <div className="text-sm text-gray-400">
          <span className="text-amber-400 font-semibold">{(odds / 100).toFixed(1)}%</span> odds
        </div>
        <div className="text-xs text-gray-500">
          {poolXlm.toLocaleString(undefined, { maximumFractionDigits: 2 })} XLM pooled
        </div>
      </div>
    </div>
  );
}
