import { Link } from "react-router-dom";


import Yoda from "../../../../assets/images/logo/logo.svg";
import YodaRtl from "../../../../assets/images/logo/logo-rtl.svg";

import themeConfig from '../../../../configs/themeConfig.jsx';

export default function MenuLogo(props) {

  return (
    <Link
      to="/"
      className="hp-header-logo hp-d-flex hp-align-items-end"
      onClick={props.onClose}
    >
      {/* <img className="hp-logo" src={YodaRtl} alt="logo" /> */}
      <img className="hp-logo" src={Yoda} alt="logo" />
    

      <span className="h3 d-font-weight-800 hp-text-color-primary-1 hp-mb-6">.</span>

      <span
        className="hp-p1-body hp-font-weight-500 hp-text-color-black-40 hp-mb-16 hp-ml-4"
        style={{
          letterSpacing: -1.5
        }}
      >
        v.{themeConfig.version}
      </span>
    </Link>
  );
};