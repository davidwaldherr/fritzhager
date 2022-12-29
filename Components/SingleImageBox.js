import { Box, Center, Image, Link } from "@chakra-ui/react"

export const SingleImageBox = ({ image, link }) => {
return (
<Box maxW="200px" minW="200px" H="25">
    <Box w="200px"></Box>
    <Center>
        <Link href={link}>
            <Image src={image} display="flex" className="first-image" pb="1" />
        </Link>
    </Center>
</Box>
)
}

export default SingleImageBox