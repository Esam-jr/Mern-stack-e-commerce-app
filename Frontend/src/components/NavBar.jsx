import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { CiSquarePlus } from "react-icons/ci";
import { FaSun } from "react-icons/fa6";
import { IoMoonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW="1140px" px="4">
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          fontSize={{ base: 22, sm: 28 }}
          bgGradient="linear(to-l, cyan.400, blue.500)"
          bgClip="text"
          fontWeight="extrabold"
          textTransform="upperCase"
        >
          <Link to={"/"}> ጀጎል Store 🛒</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link to="/create">
            <CiSquarePlus fontSize={50} />
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? (
              <IoMoonOutline fontSize={20} />
            ) : (
              <FaSun fontSize={20} />
            )}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
}

export default NavBar;
