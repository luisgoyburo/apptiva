import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import Webapp from "./components/Webapp/Webapp";
import Banner from "./components/Banner/Banner";
import UxUiSection from "./components/UxUiSection/UxUiSection";
import CreativeContent from "./components/CreativeContent/CreativeContent";
import AiServices from "./components/AiServices/AiServices";
import Head from "next/head";

export default async function IndexPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);

  return (
    <>
      <Head>
        <title>Apptiva Solutions</title>
        <meta name="description" content="Empowering businesses with AI, technology, and creative solutions." />
        <meta name="keywords" content="AI, Web Development, UX/UI, Creative Content, Apptiva Solutions" />
        <meta property="og:title" content="Apptiva Solutions" />
        <meta property="og:description" content="Empowering businesses with AI, technology, and creative solutions." />
        <meta property="og:image" content="/images/social-preview.png" />
        <meta property="og:url" content="https://www.apptiva.site" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div>
        <Banner dictionary={dictionary["banner"]} />
        <Webapp dictionary={dictionary["webapp"]} />
        <UxUiSection dictionary={dictionary.uxUiSection} />
        <CreativeContent dictionary={dictionary.creativeContent} />
        <AiServices dictionary={dictionary.aiServices}  />
      </div>
    </>

  );
}
