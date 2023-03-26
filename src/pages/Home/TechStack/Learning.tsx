import TSLogo from "@/assets/logo_svg/typescript.svg";
import Tailwind from "@/assets/logo_svg/tailwind.svg";
type Props = {};

const Learning = (props: Props) => {
  return (
    <ul className="gap-4sm:grid-cols-2 inline-grid grid-cols-2 sm:gap-6">
      <img src={TSLogo} alt="TypeScript" />
      <img src={Tailwind} alt="Tailwind" />
    </ul>
  );
};

export default Learning;
