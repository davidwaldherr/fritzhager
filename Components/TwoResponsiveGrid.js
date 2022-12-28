import { Grid, useBreakpointValue } from "@chakra-ui/react"
import SingleImageBox from "./SingleImageBox.js"
import { dataTwo } from "../Data/dataTwo.js"

export const TwoResponsiveGrid = () => {
const columns = useBreakpointValue({ base: 1, md: 4 }, 4)
const rows = useBreakpointValue({ base: 4, md: 1 }, 1)
return (
<Grid templateColumns={`repeat(${columns}, 1fr)`} templateRows={`repeat(${rows}, 1fr)`} gap={4}>
{dataTwo.map((item, index) => (
<SingleImageBox key={index} image={item.imageOne} link={item.link}/>
))}
</Grid>
)
}

export default TwoResponsiveGrid