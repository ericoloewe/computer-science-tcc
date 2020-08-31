import "./style.scss";
import React from "react";

import { ReactComponent as LoaderSvg } from "./loader.svg";

export function Loader(): React.ReactElement {
  return (
    <div className="loader-component">
      <LoaderSvg />
    </div>
  );
}
