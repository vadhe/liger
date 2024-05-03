import { Box, Flex, Text } from "@chakra-ui/react";
import ansem from "../assets/ansem.png";

import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { useState } from "react";

export const About = () => {
  const [isTyping, setIsTyping] = useState(false);
  // const LISTCARDS = [
  //   {
  //     title: 'Basic Class',
  //     description:
  //       'A class for students who are new to English or who have a very low level of proficiency in English. ',
  //     img: BasicClass,
  //     bg: 'bg-pink-100',
  //   },
  //   {
  //     title: 'Speaking Class     ',
  //     description:
  //       'A class that focuses on helping students build their fluency, accuracy, and confidence in English.',
  //     img: SpeakingClass,
  //     bg: 'bg-green-100',
  //   },
  //   {
  //     title: 'Writing Class    ',
  //     description:
  //       'A class that focuses on encouraging you to increase your creativity and gain new vocabulary in English.',
  //     img: WritingClass,
  //     bg: 'bg-sky-100',
  //   },
  // ];
  const textDesktop = `
  Ligers are the hybrid offspring of a male 
  lion and a female tiger. 
  They are the largest cats 
  in the world, significantly bigger than 
  either parent species. 
  Ligers typically grow to be 10 to 12 feet 
  long and can weigh up to 900 pounds.
   This immense size is due to
  the hybrid vigor that comes from 
  mixing the genes of lions and tigers. 
  Lions and tigers do not normally interbreed in the wild, but in captivity 
  they can be mated to produce ligers
  Ansem like the liger
  `;
  const textMobile = `
  Ligers are the hybrid offspring of a male lion and a female tiger. They are the largest cats in the world, significantly bigger than either parent species. Ligers typically grow to be 10 to 12 feet long and can weigh up to 900 pounds. This immense size is due to the hybrid vigor that comes from mixing the genes of lions and tigers. Lions and tigers do not normally interbreed in the wild, but in captivity they can be mated to produce ligers
      Ansem like the liger
  `;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, staggerChildren: 0.04 } },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <Box id="about" color="white" h="100vh" w="100%">
      <Text
        as={motion.h2}
        initial={{ opacity: 0, x: "-70vw" }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 1, ease: "easeOut" },
        }}
        viewport={{ once: true }}
        fontSize="3xl"
        fontWeight="800"
        textAlign="center"
        mb={5}
      >
        WHO IS LIGER ?
      </Text>
      <Flex flexDir={{base: 'column', lg:'row'}} justifyContent="space-between" alignItems="center">
        <Box
          as={InView}
          onChange={(inView: boolean) => {
            if (inView === true) {
              setIsTyping(true);
            }
          }}
          w={{ lg: "50%" }}
          fontSize="lg"
          fontWeight="bold"
          root={null}
          rootMargin="0px"
          threshold={0.8}
        >
          <Box
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={isTyping ? "visible" : "hidden"}
            className="lg:relative lg:text-left"
          >
            {window.innerWidth >= 1440 &&
              textDesktop.split("").map((char, index) => (
                <motion.span key={index} variants={charVariants}>
                  {char === " " && window.innerWidth >= 1440 ? "\u00A0" : char}
                </motion.span>
              ))}
            {window.innerWidth < 1440 &&
              textMobile.split("").map((char, index) => (
                <motion.span key={index} variants={charVariants}>
                  {char === " " && window.innerWidth >= 1440 ? "\u00A0" : char}
                </motion.span>
              ))}
          </Box>
        </Box>
        <Box
          boxSize="sm"
          as={motion.h1}
          initial={{ opacity: 0, x: "-70vw" }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: "easeOut" },
          }}
          viewport={{ once: true }}
          mt={5}
        >
          <Image src={ansem} alt="Dan Abramov" />
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
