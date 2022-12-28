import { Box, Divider, Link, Center, Image, Text, useBreakpointValue } from '@chakra-ui/react'
import { MusicResponsive } from '../Components/MusicResponsive.js'
import { Footer } from '../Components/Footer.js'
import { images, links, names } from '../Data/dataThree.js'
import { Carousel } from '../Components/Carousel.js'

export default function Home() {
const showSecondDivider = useBreakpointValue({ base: true, md: false })

  return (
    <>
        <Box height="100vh" width="100vw" backgroundColor="#a8a487" position="absolute" zIndex="-1" >

        {/* Header */}
        <Box height="25px" backgroundColor="#a8a487" />
        <Box width="100%" position="relative" backgroundColor="#a8a487" >
          <Center>
            <MusicResponsive mySRC={"../Bears/fritzLogo.png"} bearMiddle={showSecondDivider}/>
          </Center>
          <Center pt="4">
            <Divider orientation="horizontal" width="70%"  borderColor="black" borderBottomWidth={3}  marginBottom="4"/>
          </Center> 
        </Box>

        {/* MUSIC */}
        <Box 
          backgroundColor="#a8a487"
          position="relative" 
          width='100%' 
          backgroundPosition={"center"}
          pt="10"
        >
          <Center pb="10">
            <Image src="../Writing/Music2.png" alt="Album Cover" h="45" />
          </Center>
          <Carousel images={images} links={links} names={names} />
        </Box>

        {/* Footer */}
        {showSecondDivider && (
        <Center backgroundColor="#a8a487">
          <Divider orientation="horizontal" width="70%"  borderColor="black" borderBottomWidth={3} marginTop="4" marginBottom="4" />
        </Center>
        )}  
        <Footer />
        </Box>
    </>
  )
}
