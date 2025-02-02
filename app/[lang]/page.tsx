import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import Webapp from "./components/Webapp/Webapp";
import Banner from "./components/Banner/Banner";
import UxUiSection from "./components/UxUiSection/UxUiSection";
import CreativeContent from "./components/CreativeContent/CreativeContent";
import AiServices from "./components/AiServices/AiServices";

export default async function IndexPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);

  return (
    <div>
    <div>
      <Banner dictionary={dictionary["banner"]} />
      <Webapp dictionary={dictionary["webapp"]} />
      <UxUiSection dictionary={dictionary.uxUiSection} />
      <CreativeContent dictionary={dictionary.creativeContent} />
      <AiServices dictionary={dictionary.aiServices}  />
    </div>
    </div>
  );
}
