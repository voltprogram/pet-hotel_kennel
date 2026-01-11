export interface CalendarCell {
  date: string;            // "YYYY-MM-DD"
  isOtherMonth: boolean;   // 基準の month 以外なら true
}

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

// year: 西暦, month: 0=1月, 11=12月
export function getCalendarCells(year: number, month: number): CalendarCell[] {
  const cells: CalendarCell[] = [];

  // 基準月の1日
  const base = new Date(year, month, 1);

  // カレンダー開始日（その週の日曜日）を計算
  const start = new Date(base);
  const w = start.getDay();          // 0=日〜6=土
  start.setDate(start.getDate() - w);

  // start から 42 日分（6週分）を連続で作る
  for (let i = 0; i < 35; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);

    const y = d.getFullYear();
    const m = d.getMonth();          // 0〜11
    const day = d.getDate();

    const date = `${y}-${pad2(m + 1)}-${pad2(day)}`;

    cells.push({
      date,
      isOtherMonth: m !== month,     // 基準の month かどうかで判定
    });
  }

  return cells;
}
