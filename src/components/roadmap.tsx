import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import ansem2 from "../assets/ansem-2.png";
import liger1 from "../assets/liger-1.jpeg";
import liger2 from "../assets/liger-2.jpeg";
import liger3 from "../assets/liger-3.jpeg";
import liger4 from "../assets/liger-4.jpeg";
import liger5 from "../assets/liger-5.jpeg";
import liger6 from "../assets/liger-6.jpeg";
import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
export const Roadmap = () => {
  const LISTCARDS = [
    {
      url: liger1,
      
    },
    {
      url: liger2,
    
    },
    {
      url: liger3,

    },
    {
      url: liger4,

    },
    {
      url: liger5,

    },
    {
      url: liger6,

    },
  ];
  return (
    <Box id="roadmap" color="white"  mt={10} w="100%">
       <Text fontSize='3xl' fontWeight='800' textAlign='center' mb={5}>ROADMAP</Text>
      <Flex justifyContent="space-between" flexDir='column' alignItems="center">
      <Text fontSize="2xl" w={{lg:"50%"}} color="white" fontWeight="bold" textAlign='center' mb={5}>
      I'm just a liger so I don't have a roadmap or maybe you can ask Ansem that
      </Text>
      <Box boxSize="sm">
        <Image src={ansem2} alt="Dan Abramov" />
      </Box>
    </Flex>
    <Grid templateColumns={{base:'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)'}} gap={6}>
        {LISTCARDS.slice(0, 3).map((list, index) => {
          return (
            <Box as={ motion.div}
              key={`${list.url}-${index}`}
              initial={{
                opacity: 0,
                x: `${
                  index === 0
                    ? -20
                    : index === 1
                    ? -40
                    : index === 2
                    ? -70
                    : -80
                }vw`,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration:
                    index === 0 ? 1.5 : index === 1 ? 2 : index === 2 ? 2 : 2.5,
                  ease: 'easeOut',
                },
              }}
              viewport={{ once: true }}
            >
              <Image src={list.url} alt={list.url}/>
            </Box>
          );
        })}
      </Grid>
      <Grid templateColumns={{base: 'repeat(1, 1fr)',md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)'}} gap={6} mt={10}>
        {LISTCARDS.slice(3, 6).map((list, index) => {
          return (
            <Box as={ motion.div}
              key={`${list.url}-${index}`}
              initial={{
                opacity: 0,
                x: `${
                  index === 0
                    ? -20
                    : index === 1
                    ? -40
                    : index === 2
                    ? -70
                    : -80
                }vw`,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration:
                    index === 0 ? 1.5 : index === 1 ? 2 : index === 2 ? 2 : 2.5,
                  ease: 'easeOut',
                },
              }}
              viewport={{ once: true }}
            >
              <Image src={list.url} alt={list.url}/>
            </Box>
          );
        })}
      </Grid>
    </Box>
   
  );
};

export default Roadmap;


// A bullet hole
// 1 BIL
// Supply
// A bullet hole
// 100%
// in LP
// A bullet hole
// Fair
// Launch
// A bullet hole
// 0%
// Fee
// A bullet hole
// MINT
// Revoked
// A bullet hole
// FREEZE
// Revoked