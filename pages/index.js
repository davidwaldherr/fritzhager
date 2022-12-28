import { Box, Divider, Center, useBreakpointValue } from '@chakra-ui/react'
import { ResponsiveGrid } from '../Components/ResponsiveGrid.js'
import { TwoResponsiveGrid } from '../Components/TwoResponsiveGrid.js'
import { Footer } from '../Components/Footer.js'
import { Releases } from '../Components/Releases.js'

export default function Home() {
const showSecondDivider = useBreakpointValue({ base: true, md: false })

  return (
    <>
        {/* Header */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding="15px"
          backgroundColor="#a8a487"
          position="relative"
        >
          <img src="../Writing/Fritz.png" alt="Logo" />
        </Box>

        {/* Space */}
        <Box height="50px" backgroundColor="#a8a487" />

        {/* Releases */}
        <Releases />

        {/* Main */}
        <Box width="100%" position="relative" backgroundColor="#a8a487">
          <Center>
            <ResponsiveGrid />
          </Center>
          <Center>
            <Divider orientation="horizontal" width="70%"  borderColor="black" borderBottomWidth={3} marginTop="4" marginBottom="4"/>
          </Center>
          <Center>
            <TwoResponsiveGrid />
          </Center>
          {showSecondDivider && (
        <Center>
          <Divider orientation="horizontal" width="70%"  borderColor="black" borderBottomWidth={3} marginTop="4" marginBottom="4"/>
        </Center>
      )}         
        </Box>

        {/* Footer */}
        <Footer />
        
    </>
  )
}
