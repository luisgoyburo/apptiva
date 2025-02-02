import { i18n, type Locale } from "../../i18n-config";
import { getDictionary } from "../../get-dictionary"; // Import the dictionary function
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Inter, Roboto } from 'next/font/google';
import { Covered_By_Your_Grace } from 'next/font/google';
import './globals.css'; // Import the global styles file

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Include all weights
  variable: '--font-inter',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'], // Include all weights
  variable: '--font-roboto',
});

const coveredByYourGrace = Covered_By_Your_Grace({
  subsets: ['latin'], // Specify subsets
  weight: '400', // Specify the available weight
  variable: '--font-covered-by-your-grace', // Add a CSS variable for Tailwind
});

export const metadata = {
  title: "Apptiva Solutions",
  description: "Our mission is to empower businesses with the tools they need to thrive, blending creativity, technology, and AI to deliver results that truly matter. ",
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
    <html lang={params.lang} className={`${inter.variable} ${roboto.variable} ${coveredByYourGrace.variable}`}>
      <body>
        {/* Pass dictionary to Header */}
        <Header dictionary={dictionary["nav"]} />
        {children}
        <Footer dictionary={dictionary.footer} />
      </body>
    </html>
  );
}
