import { imageMeta, ImageMetaResult } from "@lib/SanityImage/query";

const heroBlockQuery = (locale: string = "") => `
_type == "hero" => {

    'photo':image{${imageMeta}},
    title,
    text,
    btnText,
    btnLink,
    filterIntensity,
    filterColor,
    size,
   _type,
   _key
}
`;

export interface HeroBlogResult {
  _type: "hero";
  photo?: ImageMetaResult;
  title?: string;
  text?: string;
  btnText?: string;
  btnLink?: string;
  filterIntensity?:
    | "0"
    | "10"
    | "20"
    | "30"
    | "40"
    | "50"
    | "60"
    | "70"
    | "80"
    | "90";
  filterColor?: "white" | "black";
  size?: "full" | "1/2" | "2/3" | "1/3";
}

export default heroBlockQuery;
