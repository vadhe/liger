import { Box, Button, Flex, Text } from "@chakra-ui/react";

import { motion } from "framer-motion";

export const Contract = () => {
  return (
    <Box id="about" color="white" w="100%">
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
        CONTRACT ADDRESS
      </Text>
      <Flex flexDir='column' gap='5' justifyContent='center' align='center'>
      <Button 
          bg="#643616"
          color='white'
          _hover={{
            background: "#331F0F",
          }}
          w="fit-content">
        3gAgA5gJ5jAZyMFDb8m1W8Lvs3bzxYjd5xsjrGVr1UoB
      </Button>

      <Button
      w="fit-content"
      colorScheme='blue'
        onClick={() => {
          navigator.clipboard.writeText(
            "3gAgA5gJ5jAZyMFDb8m1W8Lvs3bzxYjd5xsjrGVr1UoB"
          );
        }}
      >
        <span>copy</span>
      </Button>
      </Flex>
    </Box>
  );
};

export default Contract;
