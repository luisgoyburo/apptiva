import { i18n, type Locale } from "../../i18n-config";
import { getDictionary } from "../../get-dictionary"; // Import the dictionary function
import Header from "./components/Header/Header";
import Banner from "./components/Banner/banner";
import './globals.css'; // Import the global styles file

export const metadata = {
  title: "i18n within app router - Vercel Examples",
  description: "How to do i18n in Next.js 15 within app router",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { children, params: paramsPromise } = props;

  // Resolve params and fetch the dictionary
  const params = await paramsPromise;
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <body>
        {/* Pass dictionary to Header */}
        <Header dictionary={dictionary["nav"]} />
        <Banner dictionary={dictionary["banner"]} />
        {children}
      </body>
    </html>
  );
}
