import { Box } from "@chakra-ui/react";

const BackgroundShapes = () => {
  return (
    <>
      <Box position="absolute" top="10%" left="10%" width="100px" height="100px" bg="blue.300" borderRadius="50%" opacity="0.5" />
      <Box position="absolute" top="50%" left="70%" width="150px" height="150px" bg="green.300" borderRadius="50%" opacity="0.5" />
      <Box position="absolute" top="80%" left="30%" width="200px" height="200px" bg="red.300" borderRadius="50%" opacity="0.5" />
      <Box position="absolute" top="40%" left="40%" width="120px" height="120px" bg="transparent" border="2px solid black" borderRadius="50%" />
    </>
  );
};

export default BackgroundShapes;
