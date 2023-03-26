import ReactLogo from "@/assets/logo_svg/react.svg";
import ReduxLogo from "@/assets/logo_svg/redux.svg";
import SCLogo from "@/assets/logo_svg/styled-components.svg";
import GraphQL from "@/assets/logo_svg/graphQL.svg";
import Sass from "@/assets/logo_svg/sass.svg";
import Firebase from "@/assets/logo_svg/firebase-icon.svg";

type Props = {};

const Acquired = (props: Props) => {
  return (
    <ul className="inline-grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
      <img src={ReactLogo} alt="React" />
      <img src={ReduxLogo} alt="Redux" />
      <img src={SCLogo} alt="Styled-components" />
      <img src={GraphQL} alt="GraphQL" />
      <img src={Sass} alt="Sass" />
      <img src={Firebase} alt="Firebase" />
    </ul>
  );
};

export default Acquired;
