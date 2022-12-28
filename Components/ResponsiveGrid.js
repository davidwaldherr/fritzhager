import { Grid, useBreakpointValue } from "@chakra-ui/react"
import TwoImagesBox from "./TwoImagesBox"
import { data } from "../Data/data.js"

export const ResponsiveGrid = () => {
  const columns = useBreakpointValue({ base: 2, md: 4 }, 4)
  return (
    <Grid templateColumns={`repeat(${columns}, 1fr)`} templateRows="1fr" gap={4}>
      {data.map((item, index) => (
        <TwoImagesBox key={index} firstImage={item.firstImage} secondImage={item.secondImage} link={item.link} />
      ))}
    </Grid>
  )
}

export default ResponsiveGrid