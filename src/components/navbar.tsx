import { Box, Button, Flex, Link, Spacer } from "@chakra-ui/react";
import liger from "../assets/liger.png";
import { Image } from "@chakra-ui/react";
import { ListItem, UnorderedList } from "@chakra-ui/react";
export const Navbar = () => {
  return (
    <Flex
      minWidth="max-content"
      justifyContent="center"
      alignItems="center"
      gap="2"
    >
      <Box display={{ base: "none", lg:'block' }} p="2">
        <Image src={liger} alt="kebo-logo" w="8.7rem" />
      </Box>
      <Spacer display={{ base: "none", lg:'block' }} />

      <UnorderedList
        display="flex"
        listStyleType="none"
        gap="5"
        color="white"
        textTransform="uppercase"
        fontSize="24px"
      >
        <Link href="#about">
          <ListItem>About</ListItem>
        </Link>
        <Link href="#roadmap">
          <ListItem>Roadmap</ListItem>
        </Link>
        <ListItem></ListItem>
      </UnorderedList>
      <Spacer />
      <Link
        href="https://jup.ag/swap/SOL-3gAgA5gJ5jAZyMFDb8m1W8Lvs3bzxYjd5xsjrGVr1UoB"
        isExternal
      >
        <Button
          bg="#643616"
          _hover={{
            background: "#331F0F",
          }}
          color="white"
        >
          BUY NOW
        </Button>
      </Link>
    </Flex>
  );
};

export default Navbar;
