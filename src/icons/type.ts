import React from "react";

export interface IconProps
  extends React.DetailedHTMLProps<
    React.SVGAttributes<SVGSVGElement>,
    SVGSVGElement
  > {
  className?: string;
}
