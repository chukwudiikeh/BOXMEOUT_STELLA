// ============================================================
// BOXMEOUT — BetList Component
// Displays recent bets on a market
// ============================================================

import type { Bet } from '../../types';
import { stellarExplorerUrl } from '../../services/wallet';

interface BetListProps {
  bets: Bet[];
  fighterA: string;
  fighterB: string;
  isLoading?: boolean;
}

function truncate(addr: string) {
  return `${addr.slice(0, 6)}…${addr.slice(-4)}`;
}

const SIDE_LABEL: Record<string, string> = {
  fighter_a: 'Fighter A',
  fighter_b: 'Fighter B',
  draw: 'Draw',
};

/**
 * BetList displays recent bets placed on a market in a table format.
 */
export function BetList({ bets, fighterA, fighterB, isLoading }: BetListProps): JSX.Element {
  const sideLabel = (side: string) =>
    side === 'fighter_a' ? fighterA : side === 'fighter_b' ? fighterB : 'Draw';

  if (isLoading) {
    return (
      <div className="space-y-3">
        <h2 className="text-white font-semibold">Recent Bets</h2>
        <div className="text-gray-500 text-sm">Loading…</div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h2 className="text-white font-semibold">Recent Bets</h2>
      {bets.length === 0 ? (
        <p className="text-gray-500 text-sm">No bets yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-300">
            <thead>
              <tr className="text-xs text-gray-500 border-b border-gray-800">
                <th className="pb-2 pr-4">Bettor</th>
                <th className="pb-2 pr-4">Side</th>
                <th className="pb-2 pr-4">Amount</th>
                <th className="pb-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {bets.map((bet) => (
                <tr key={bet.tx_hash} className="border-b border-gray-800/50">
                  <td className="py-2 pr-4 font-mono text-xs">
                    <a
                      href={stellarExplorerUrl('tx', bet.tx_hash)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:underline"
                    >
                      {truncate(bet.tx_hash)}
                    </a>
                  </td>
                  <td className="py-2 pr-4 whitespace-nowrap">{sideLabel(bet.side)}</td>
                  <td className="py-2 pr-4 whitespace-nowrap">{bet.amount_xlm} XLM</td>
                  <td className="py-2 text-gray-500 whitespace-nowrap text-xs">
                    {new Date(bet.placed_at).toLocaleTimeString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
