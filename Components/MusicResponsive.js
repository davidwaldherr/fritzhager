import { Link, Grid, useBreakpointValue, Image, Box } from "@chakra-ui/react"
import SingleImageBox from "./SingleImageBox.js"
import { data } from "../Data/data.js"


export const MusicResponsive = ({bearMiddle, mySRC}) => {
const columns = useBreakpointValue({ base: 2, md: 4 }, 4)
const rows = useBreakpointValue({ base: 2, md: 1 }, 1)

return (
    <>
        <Link href="/">
            <Image position="absolute" top="-8px" left={bearMiddle ? "43vw" : "2vw"} src={mySRC} alt="Logo" zIndex="1000" w="75px" className='first-image' />
        </Link>

        {!bearMiddle && (
            <Grid templateColumns={`repeat(${columns}, 1fr)`} templateRows={`repeat(${rows}, 1fr)`} gap={4}>
            {data.map((item, index) => (
            <SingleImageBox key={index} image={item.secondImage} />
            ))}
            </Grid>
        )}
        {bearMiddle && (
        <Box position="relative" h="75px">

        </Box>    
        )}
    </>
)
}

export default MusicResponsive