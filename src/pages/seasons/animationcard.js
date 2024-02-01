import { Button, Flex, Img, Text, Box } from "@chakra-ui/react";

import { isValidMotionProp } from "framer-motion";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import React from "react";

export default function Card1() {
  const x = useMotionValue(0);

  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);

  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,

    [-0.5, 0.5],

    ["5.5deg", "-5.5deg"]
  );

  const rotateY = useTransform(
    mouseXSpring,

    [-0.5, 0.5],

    ["-5.5deg", "5.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;

    const height = rect.height;

    const mouseX = e.clientX - rect.left;

    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;

    const yPct = mouseY / height - 0.5;

    x.set(xPct);

    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
      <Flex
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        as={motion.div}
        style={{
          // @ts-ignore
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        justify={"center"}
        align={"center"}
        bgRepeat={"no-repeat"}
        bgImage={"/Animation top/Group 133.png"}
        w="1029px"
        h="600px"
        position={"relative"}
      >
        <Flex
          as={motion.div}
          style={{
            transform: "translateZ(205px)",

            transformStyle: "preserve-3d",
          }}
          top="40px"
          left={"138px"}
          position={"absolute"}
        >
          <Img src="/Animation top/Group 61 1.png" />

          <Flex
            as={motion.div}
            style={{
              transform: "translateZ(205px)",

              transformStyle: "preserve-3d",
            }}
            top="10px"
            left={"-3px"}
            position={"absolute"}
            w="100%"
            h="auto"
          >
            <Img src="/Animation top/Group 135.png" />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
