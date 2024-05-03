import { Box, Flex, Text } from "@chakra-ui/react";
import kebo from "../assets/ligers.jpeg";
import { useEffect } from "react";

import { useAnimationControls, motion } from "framer-motion";

import { Image } from "@chakra-ui/react";
export const Header = () => {
  const controlsHeader = useAnimationControls();
 

  const animateX = {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5, ease: "easeOut" },
  };

  useEffect(() => {
    controlsHeader.start({
      ...animateX,
    });
  }, [controlsHeader]);


  return (
    <Flex flexDir={{ base: 'column', lg:'row'}} h={{base:"90vh",lg:"100vh"}} w="100%" justifyContent="space-between" alignItems="center">
      <Text
        as={motion.h1}
        animate={controlsHeader}
        initial={{ opacity: 0, x: "-100vw" }}
        fontSize={{base:"2xl", lg:"5xl"}}
        w={{lg:"50%"}}
        color="white"
        fontWeight="bold"
        mt={5}
      >
        Welcome to the world of the liger - the largest known cat in existence.
        Though they are extremely rare, ligers are a fascinating hybrid cross
        between a male lion and a female tiger
      </Text>

      <Box boxSize="sm"
      
      as={motion.h1}
      animate={controlsHeader}
      initial={{ opacity: 0, x: "100vw" }}
      >
        <Image src={kebo} alt="Dan Abramov" />
      </Box>
    </Flex>
  );
};

export default Header;
