"use client";

import { usePathname, useRouter } from "next/navigation";
import { i18n, type Locale } from "../../../i18n-config";

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  // Extract current locale from pathname
  const currentLocale = pathname?.split("/")[1] as Locale;

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const handleLocaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = event.target.value as Locale;
    const newPath = redirectedPathname(selectedLocale);
    router.push(newPath);
  };

  return (
    <div>
      <label htmlFor="locale-select" className="sr-only">
        Select Language
      </label>
      <select
        id="locale-select"
        onChange={handleLocaleChange}
        value={currentLocale} // Sync with current locale
        className="border rounded px-1 py-1"
      >
        {i18n.locales.map((locale) => (
          <option key={locale} value={locale}>
            {locale}
          </option>
        ))}
      </select>
    </div>
  );
}
