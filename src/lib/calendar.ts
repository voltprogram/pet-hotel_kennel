export interface CalendarCell {
  date: string;            // "YYYY-MM-DD"
  isOtherMonth: boolean;   // 表示月以外なら true
}

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

/**
 * year: 西暦
 * month: 0=1月〜11=12月
 * weekStart: 0=日曜始まり / 1=月曜始まり（あなたは月曜→日曜なので 1）
 */
export function getCalendarCells(
  year: number,
  month: number,
  weekStart = 0,
): CalendarCell[] {
  const cells: CalendarCell[] = [];

  // 当月の1日と日数
  const first = new Date(year, month, 1);
  const lastDate = new Date(year, month + 1, 0).getDate();

  // 1日の曜日 (0=日〜6=土)
  const firstDow = first.getDay();

  // weekStart を考慮した「月初の前に必要な空き数」
  // 月曜始まりなら、日曜(0)は最後扱いになるので +7 して調整
  const offset = (firstDow - weekStart + 7) % 7;

  // 35で足りるなら5行、足りない月だけ42で6行
  const total = offset + lastDate > 35 ? 42 : 35;

  // カレンダー開始日（weekStart の曜日まで戻す）
  const start = new Date(year, month, 1 - offset);

  for (let i = 0; i < total; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);

    const y = d.getFullYear();
    const m = d.getMonth();
    const day = d.getDate();

    const date = `${y}-${pad2(m + 1)}-${pad2(day)}`;

    cells.push({
      date,
      isOtherMonth: m !== month,
    });
  }

  return cells;
}
