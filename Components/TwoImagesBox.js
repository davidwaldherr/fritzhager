import { Box, Center, Image, Link } from "@chakra-ui/react"

export const TwoImagesBox = ({ firstImage, secondImage, link }) => {
  return (
    <Link href={link}>
    <Box maxW="240px" minW="90px" maxH="320px" minH="proportional" pb="2">
      <Image 
        src={firstImage} 
        display="flex" 
        objectFit="cover" 
        top="0" 
        right="0" 
        bottom="0" 
        left="0" 
        pb="3"
        className="first-image"
      />
      <Center>
        <Image src={secondImage} display="flex" />
      </Center>
    </Box>
    </Link>
  )
}

export default TwoImagesBox
