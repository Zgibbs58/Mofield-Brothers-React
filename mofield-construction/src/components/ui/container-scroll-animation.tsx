"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const rotateDimensions = () => {
    return isMobile ? [0, 0] : [0, 0];
  };

  const scaleDimensions = () => {
  return isMobile ? [1, 0.9] : [1, 0.9];
};

const scaleRate = () => {
    return isMobile ? [0.5, 1] : [0.5, 1];
    };

const rotate = useTransform(scrollYProgress, [0.4, 1], rotateDimensions());
  const scale = useTransform(scrollYProgress, scaleRate(), scaleDimensions());
  const translate = useTransform(scrollYProgress, [0.4, 1], [0, -100]);

  return (
    <div
      className="flex items-center justify-center relative"
      ref={containerRef}
    >
      <div
        className="w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};


export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateY: rotate,
        scale,
        boxShadow: "1px 8px 30px 0px rgba(0, 0, 0, 0.4)",
      }}
      className="rounded-md"
    >
      <div className="">
        {children}
      </div>
    </motion.div>
  );
};
