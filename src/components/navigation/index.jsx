"use client";
import React from "react";
import { BtnList } from "@/app/data";
import NavButton from "../navigation/NavButton";
import useScreenSize from "../hooks/useScreenSize";
import ResponsiveComponent from "../ResponsiveComponent";
// import { animate, stagger } from "motion";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Navigation = () => {
  const angleIncrement = 360 / BtnList.length;
  const size = useScreenSize();
  console.log("size is : ", size);

  const isLargeScreen = size > 1024;
  const isMediumScreen = size > 768;

  return (
    <div className="fixed w-full h-screen flex items-center justify-center">
      <ResponsiveComponent>
        {({ size }) => {
          return size && size >= 480 ? (
            <motion.div 
              variants={variants}
              initial="hidden"
              animate="show"
            className="w-max flex items-center justify-center relative animate-spin-slow hover:pause group">
              {BtnList.map((btn, index) => {
                const angleRad = (angleIncrement * index * Math.PI) / 180;
                const radius = isLargeScreen
                  ? `calc(25vw - 6rem)`
                  : isMediumScreen
                  ? `calc(35vw - 4rem)`
                  : `calc(45vw - 2rem)`;
                // const radius = `calc(25vw - 6rem)`;

                const x = `calc(${radius} * ${Math.cos(angleRad)})`;
                const y = `calc(${radius} * ${Math.sin(angleRad)})`;

                // console.log(index, angleRad, radius, x, y);
                return <NavButton key={btn.label} x={x} y={y} {...btn} />;
              })}
            </motion.div>
          ) : (
            <>
              <motion.div 
              variants={variants}
              initial="hidden"
              animate="show" className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-start xs:items-center justify-center relative group">
                {BtnList.slice(0, BtnList.length / 2).map((btn) => {
                  return <NavButton key={btn.label} x={0} y={0} {...btn} />;
                })}
              </motion.div>

              <motion.div 
              variants={variants}
              initial="hidden"
              animate="show" className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-end xs:items-center justify-center relative group">
                {BtnList.slice(BtnList.length / 2, BtnList.length).map(
                  (btn) => {
                    return (
                      <NavButton
                        key={btn.label}
                        x={0}
                        y={0}
                        {...btn}
                        labelDirections="left"
                      />
                    );
                  }
                )}
              </motion.div >
            </>
          );
        }}
      </ResponsiveComponent>
    </div>
  );
};

export default Navigation;
