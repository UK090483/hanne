import * as React from "react";

import { AnimationProps, motion } from "framer-motion";

import clsx from "clsx";

import { HeroBlockProps } from "./HeroBlock";
import SanityImage from "@lib/SanityImage";
import Typo from "@components/Typography/Typography";
import Button from "@components/Button/Button";
import { Flower } from "@components/Layout/Logo";

const list: AnimationProps["variants"] = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const item: AnimationProps["variants"] = {
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.6, type: "spring", stiffness: 100 },
  },
  hidden: { opacity: 0, x: -100, y: 100 },
};

const Hero: React.FunctionComponent<HeroBlockProps> = (props) => {
  const {
    photo,
    text,
    title,
    btnText,
    btnLink,
    size,
    filterColor = "white",
    filterIntensity = "0",
  } = props;

  return (
    <div
      className={clsx(
        "relative w-full ",
        {
          "h-screen": size === "full" || !size,
        },
        { "h-[50vh]": size === "1/2" },
        { "h-[33vh]": size === "1/3" },
        { "h-[66vh]": size === "2/3" }
      )}
    >
      <SanityImage image={photo} layout="fill" objectFit="cover" />

      {filterIntensity !== "0" && (
        <div
          className={clsx(
            "absolute inset-0  ",
            { "bg-white": filterColor === "white" },
            { "bg-black": filterColor === "black" },
            { "bg-opacity-10": filterIntensity === "10" },
            { "bg-opacity-20": filterIntensity === "20" },
            { "bg-opacity-30": filterIntensity === "30" },
            { "bg-opacity-40": filterIntensity === "40" },
            { "bg-opacity-50": filterIntensity === "50" },
            { "bg-opacity-60": filterIntensity === "60" },
            { "bg-opacity-70": filterIntensity === "70" },
            { "bg-opacity-80": filterIntensity === "80" },
            { "bg-opacity-90": filterIntensity === "90" }
          )}
        />
      )}

      <motion.div
        initial="hidden"
        animate="visible"
        variants={list}
        className={clsx(
          "absolute top-10 pl-5 left-0 w-full  md:top-32  text-white bg-opacity-30  ",
          "lg:top-auto lg:bottom-[20%] md:left-[10vw] lg:p-2 lg:bg-transparent w-fit  flex flex-col justify-center items-center"
        )}
      >
        {size === "full" && (
          <>
            <motion.div className="mt-0 " variants={item}>
              <Flower className="w-[280px] fill-current" />
            </motion.div>
            <motion.div className="mt-0" variants={item}>
              <Typo space={false} variant="h1" as="p">
                Hanne Rønn
              </Typo>
            </motion.div>
            <motion.div className="mt-0" variants={item}>
              <Typo variant="body-l"> Psykoterapeut MPF</Typo>
            </motion.div>
          </>
        )}
        {/* {title && (
          <motion.div className="mt-0" variants={item}>
            <Typo variant={"h1"}> {title}</Typo>
          </motion.div>
        )}
        {text && (
          <motion.p variants={item} className="pb-8 pr-20 text-lg opacity-50">
            <Typo> {text}</Typo>
          </motion.p>
        )} */}
      </motion.div>
    </div>
  );
};

export default Hero;

const HeroLogo = () => {
  return (
    <>
      <motion.div className="mt-0" variants={item}>
        <Typo variant={"h1"}> Hanne Rønn</Typo>
      </motion.div>
    </>
  );
};
