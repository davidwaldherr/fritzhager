import { Box, Divider, Center, useBreakpointValue, Image } from '@chakra-ui/react'
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
          pb="20px"
          pt="10px"
          backgroundColor="#a8a487"
          position="relative"
        >
          <Image h="125px" src="../Writing/Fritz.png" alt="Logo" />
        </Box>

        {/* Space */}
        {/* <Box height="px" backgroundColor="#a8a487" /> */}

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
