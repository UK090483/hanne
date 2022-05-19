import React from "react";

import Typo from "@components/Typography";
import Link from "@components/Link";
import SanityImage from "@lib/SanityImage";
import Button from "@components/Button/Button";
import { readMore } from "@constants/translations";
import { DefaultListItemResult } from "./defaultListQuery";

interface DefaultListItemProps extends DefaultListItemResult {
  className?: string;
  position?: "left" | "right";
  locale?: string;
}

const DefaultListItem: React.FC<DefaultListItemProps> = (props) => {
  const {
    slug,
    title,
    description,
    className,
    position = "left",
    featuredImage,
    subTitle,
    locale,
  } = props;

  return (
    <li className="list-none" data-testid="DefaultListItem">
      <Link
        className={`grid gap-8 md:grid-cols-2  bg-white mx-auto w-full  ${className}`}
        href={`${slug ? "/" + slug : "/"}`}
      >
        {featuredImage && (
          <div
            data-testid="DefaultListItemImage"
            className={`relative w-full  min-h-[300px]   ${
              position === "left" ? "" : "md:order-2"
            }`}
          >
            <SanityImage
              image={featuredImage}
              objectFit="cover"
              sizes={"500px"}
            />
          </div>
        )}
        <div className={` pt-8 md:pt-0 w-full`}>
          {subTitle && (
            <Typo bold space={false} className=" pb-3 " variant="body-l">
              {subTitle.toUpperCase()}
            </Typo>
          )}
          <Typo as={"h2"} variant="h2">
            {title}
          </Typo>
          <Typo className="w-full overflow-hidden whitespace-pre-line mb-4 ">
            {description}
          </Typo>
          <Button tabIndex={-1}>{readMore[locale || "de"]}</Button>
        </div>
      </Link>
    </li>
  );
};

export default DefaultListItem;
