import React from 'react';
import { Box, Button, Image, Text, Center } from '@chakra-ui/react';

const Item = ({ name, imageUrl, link }) => {
  
  function handleClick() {
    window.open(link, '_blank');
  }

  return (
    <>
      <Center pb="2">
        <Image border="2px" src={imageUrl} alt={name} objectFit="cover" h="200" w="200" />
      </Center>
      <Center pt="1" pb="3">
        <Text fontSize="18" color="black" fontWeight="bold">
          {name}
        </Text>
      </Center>
      <Center>
        <Button onClick={handleClick} border="2px" borderColor="black" borderRadius="0" variant="solid" size="sm" fontWeight="bold" fontSize="15" color="black" _hover={{ bg: "lightblue" }}>
          Listen Now
        </Button>
      </Center>
    </>
  );
};

export default Item;
