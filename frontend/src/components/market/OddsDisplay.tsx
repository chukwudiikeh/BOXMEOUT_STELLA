// ============================================================
// BOXMEOUT — OddsDisplay Component
// Shows live odds for all three outcomes
// ============================================================

interface OddsDisplayProps {
  odds_a: number;
  odds_b: number;
  odds_draw: number;
  fighter_a: string;
  fighter_b: string;
}

/**
 * OddsDisplay shows the current implied probabilities for all three outcomes.
 */
export function OddsDisplay({
  odds_a,
  odds_b,
  odds_draw,
  fighter_a,
  fighter_b,
}: OddsDisplayProps): JSX.Element {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="bg-gray-800 rounded-lg p-3 text-center">
        <p className="text-xs text-gray-400 mb-1">{fighter_a}</p>
        <p className="text-2xl font-bold text-amber-400">{(odds_a / 100).toFixed(1)}%</p>
      </div>
      <div className="bg-gray-800 rounded-lg p-3 text-center">
        <p className="text-xs text-gray-400 mb-1">Draw</p>
        <p className="text-2xl font-bold text-amber-400">{(odds_draw / 100).toFixed(1)}%</p>
      </div>
      <div className="bg-gray-800 rounded-lg p-3 text-center">
        <p className="text-xs text-gray-400 mb-1">{fighter_b}</p>
        <p className="text-2xl font-bold text-amber-400">{(odds_b / 100).toFixed(1)}%</p>
      </div>
    </div>
  );
}
