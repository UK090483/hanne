import React from "react";
import dynamic from "next/dynamic";
import Section from "@components/Section/Section";
import Link from "@components/Link";
import Logos from "./Logos";
import { useAppContext } from "@components/AppContext";
import Contact from "./Contact";
import Social from "./SocialIcons";
import Grid, { GridItem } from "@components/generic/Grid";
const Marque = dynamic(() => import("./Marque"));

const Footer: React.FC = () => {
  const { data } = useAppContext();
  const imprintPage = data?.footer?.imprintPage;
  const privatePolicyPage = data?.footer?.privacyPolicyPage;
  const year = React.useMemo(() => new Date().getFullYear(), []);

  return (
    <footer data-testid="footer" className="flex flex-col items-center ">
      <Section width="full" className=" px-5 " bg="black">
        <Grid className="grid-cols-1 lg:grid-cols-2 gap-12 my-16 ">
          <GridItem>
            <Logos />
          </GridItem>
          <GridItem>
            <Contact />
            <Social />
          </GridItem>
        </Grid>

        <div className="flex flex-col md:flex-row  gap-6 items-center justify-center mt-16 mb-12 text-white">
          <span>© Hanne Rønn {year} </span>
          {/* {imprintPage?.href && imprintPage?.label && (
            <Link href={imprintPage?.href}>{imprintPage?.label}</Link>
          )}
          {privatePolicyPage?.href && privatePolicyPage?.label && (
            <Link href={privatePolicyPage?.href}>
              {privatePolicyPage?.label}
            </Link>
          )} */}
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
