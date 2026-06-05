import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string, language: "pt" | "en" = "pt") {
  let currentDate = new Date().getTime();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date).getTime();
  let timeDifference = Math.abs(currentDate - targetDate);
  let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const locale = language === "pt" ? "pt-BR" : "en-US";

  let fullDate = new Date(date).toLocaleDateString(locale, {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

  if (daysAgo < 1) {
    return language === "pt" ? "Hoje" : "Today";
  } else if (daysAgo < 7) {
    return language === "pt"
      ? `${fullDate} (há ${daysAgo} dia${daysAgo === 1 ? "" : "s"})`
      : `${fullDate} (${daysAgo}d ago)`;
  } else if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7);
    return language === "pt"
      ? `${fullDate} (há ${weeksAgo} semana${weeksAgo === 1 ? "" : "s"})`
      : `${fullDate} (${weeksAgo}w ago)`;
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30);
    return language === "pt"
      ? `${fullDate} (há ${monthsAgo} mês${monthsAgo === 1 ? "" : "es"})`
      : `${fullDate} (${monthsAgo}mo ago)`;
  } else {
    const yearsAgo = Math.floor(daysAgo / 365);
    return language === "pt"
      ? `${fullDate} (há ${yearsAgo} ano${yearsAgo === 1 ? "" : "s"})`
      : `${fullDate} (${yearsAgo}y ago)`;
  }
}
