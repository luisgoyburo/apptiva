import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import Webapp from "./components/Webapp/Webapp";
import Banner from "./components/Banner/Banner";
import UxUiSection from "./components/UxUiSection/UxUiSection";

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
    </div>
    </div>
  );
}
