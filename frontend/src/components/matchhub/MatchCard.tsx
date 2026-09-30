import type { MatchCard as MatchCardType } from '../../types';

function badge(matchType: string) {
  if (/test/i.test(matchType)) return { text: 'FC', bg: 'bg-[#e90b37]' };
  if (/t20/i.test(matchType)) return { text: 'T20', bg: 'bg-[#0579bc]' };
  return { text: 'ODI', bg: 'bg-[#0579bc]' };
}

export function MatchCard({ match }: { match: MatchCardType }) {
  const live = match.status === 'live';
  const b = badge(match.matchType);
  return (
    <div className="w-[250px] h-[162px] shadow rounded-md overflow-hidden shrink-0">
      <a
        href="#"
        title={`${match.teams.map((t) => t.name).join(' vs ')}, ${match.matchType}`}
        className="bg-white flex flex-col p-3 gap-1 h-[134px]"
      >
        <div className="flex justify-between items-center h-[18px]">
          <span className="text-[10px] text-[#737373] w-4/5 text-ellipsis whitespace-nowrap overflow-hidden">
            {match.matchType} &bull; {match.competition}
          </span>
          <div
            className={`text-[10px] text-white block min-w-[28px] max-h-[18px] px-1.5 text-center rounded-3xl ${b.bg}`}
          >
            {b.text}
          </div>
        </div>

        <div className="flex flex-col gap-3 my-2">
          {match.teams.map((team) => (
            <div key={team.name} className="flex items-center gap-4 justify-between h-5">
              <div className="flex items-center gap-2 min-w-0">
                <div style={{ width: 24, height: 18 }} className="rounded-sm overflow-hidden shrink-0">
                  <img src={team.flag} alt={team.name} width={24} height={18} className="w-full h-auto" />
                </div>
                <span className="truncate max-w-full">{team.name}</span>
              </div>
              <span className="font-semibold w-1/2 truncate">{team.score}</span>
            </div>
          ))}
        </div>

        <span className={`${live ? 'text-[#e90b37]' : 'text-cb-green'} text-[12px] truncate h-4`}>
          {match.statusText}
        </span>
      </a>

      <div className="bg-neutral-300 rounded-b-md overflow-hidden flex justify-end gap-2 p-2 py-1 px-2 uppercase text-[10px] h-[28px]">
        {match.links.map((link) => (
          <a key={link.label} href={link.href} title={link.label} className="cursor-pointer hover:underline">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
