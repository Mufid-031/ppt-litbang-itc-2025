"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/registry/magicui/AnimatedBeam";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { Box } from "@radix-ui/themes";
import { BorderBeam } from "../registry/magicui/BorderBeam";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(({ className, children }, ref) => {
  return (
    <div ref={ref} className={cn("z-10 flex size-24 items-center justify-center rounded-full bg-[#2a2a2a] p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]", className)}>
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

const SvgVariants: Variants = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "100%",
    transition: {
      duration: 1,
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
};

const SpanVariants: Variants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
};

export function ProkerSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.5 });
  const ctrls = useAnimation();

  useIsomorphicLayoutEffect(() => {
    if (isInView) {
      ctrls.start("visible");
    } else {
      ctrls.start("hidden");
    }
  }, [ctrls, isInView]);

  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden" ref={containerRef}>
      <div className="flex size-full max-w-3xl flex-col items-stretch justify-between gap-20">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref} className="relative">
            <motion.svg variants={SvgVariants} animate={ctrls} className="absolute -bottom-10 -left-20 -rotate-45" width="100" height="60" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
              <path d="M80 30 Q 40 10, 10 30" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 30 L 20 20 M10 30 L 20 40" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
            <motion.span variants={SpanVariants} animate={ctrls} className="absolute -bottom-20 -left-20">
              Website
            </motion.span>
            <Icons.website />
          </Circle>
          <Circle ref={div5Ref} className="relative">
            <motion.svg variants={SvgVariants} animate={ctrls} className="absolute -bottom-16 -right-14" width="100" height="60" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 20 Q 50 55, 90 20" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M90 20 L 80 10 M90 20 L 80 30" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
            <motion.span variants={SpanVariants} animate={ctrls} className="absolute -bottom-10 -right-36 w-20">
              Fasilitator Study Club
            </motion.span>
            <Icons.studyClub />
          </Circle>
        </div>
        <div className="flex flex-row justify-center">
          <Box className="bg-[#2a2a2a] z-10 py-5 px-7 rounded-md relative" ref={div4Ref}>
            <Icons.litbang />
            <BorderBeam />
            <div className="absolute bottom-0 left-0 w-full h-8 bg-black/30"></div>
          </Box>
        </div>
        <div className="flex flex-row justify-between">
          <Circle ref={div3Ref} className="relative">
            <motion.svg variants={SvgVariants} animate={ctrls} className="absolute -left-20 bottom-20 rotate-180" width="100" height="60" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 20 Q 50 55, 90 20" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M90 20 L 80 10 M90 20 L 80 30" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
            <motion.span variants={SpanVariants} animate={ctrls} className="absolute -left-40">
              Perlombaan
            </motion.span>
            <Icons.perlombaan />
          </Circle>
          <Circle ref={div7Ref} className="relative">
            <motion.svg variants={SvgVariants} animate={ctrls} className="absolute -right-28 rotate-12" width="100" height="60" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 30 Q 50 10, 80 30" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M80 30 L 70 20 M80 30 L 70 40" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
            <motion.span variants={SpanVariants} animate={ctrls} className="absolute -right-44">
              Penelitian
            </motion.span>
            <Icons.penelitian />
          </Circle>
        </div>
      </div>

      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div4Ref} curvature={-85} endYOffset={-10} />
      <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div4Ref} curvature={85} endYOffset={10} />
      <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div4Ref} curvature={-85} endYOffset={-10} reverse />
      <AnimatedBeam containerRef={containerRef} fromRef={div7Ref} toRef={div4Ref} curvature={85} endYOffset={10} reverse />
    </div>
  );
}

const Icons = {
  litbang: () => <span className="text-4xl font-bold">LITBANG</span>,
  website: () => (
    <motion.span
      animate={{
        rotateZ: 360,
        transition: {
          duration: 5,
          repeat: Infinity,
        },
      }}
      className="text-6xl"
    >
      🌐
    </motion.span>
  ),
  perlombaan: () => (
    <motion.span
      animate={{
        y: [0, -15, -15, 0],
        x: [0, 5, -5, 0],
        transition: {
          duration: 5,
          repeat: Infinity,
        },
      }}
      className="text-6xl"
    >
      🎮
    </motion.span>
  ),
  studyClub: () => (
    <motion.span
      animate={{
        y: [0, -5, 0],
        scale: [1, 1.1, 1],
        transition: {
          duration: 5,
          repeat: Infinity,
        },
      }}
      className="text-6xl"
    >
      💻
    </motion.span>
  ),
  penelitian: () => (
    <motion.span
      animate={{
        rotateZ: 360,
        transition: {
          type: "spring",
          damping: 10,
          stiffness: 100,
          duration: 3,
          repeat: Infinity,
        },
      }}
      className="text-6xl"
    >
      🧪
    </motion.span>
  ),
};
