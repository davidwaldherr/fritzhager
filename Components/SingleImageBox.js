import { Box, Center, Image, Link } from "@chakra-ui/react"

export const SingleImageBox = ({ image, link }) => {
return (
<Box maxW="225px" minW="200px" H="25">
    <Box w="225px"></Box>
    <Center>
        <Link href={link} target="_blank"><Image src={image} display="flex" className="first-image" pb="1" /></Link>
    </Center>
</Box>
)
}

export default SingleImageBox