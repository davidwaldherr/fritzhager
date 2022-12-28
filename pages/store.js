import { Box, Divider, Button, Link, Center, Image, Text, useBreakpointValue } from '@chakra-ui/react'
import { MusicResponsive } from '../Components/MusicResponsive.js'

export default function Home() {
const showSecondDivider = useBreakpointValue({ base: true, md: false })

  return (
    <>
        <Box height="100vh" width="100vw" backgroundColor="#a8a487" position="absolute" zIndex="-1" >

        {/* Header */}
        <Box height="25px" backgroundColor="#a8a487" />
        <Box width="100%" position="relative" backgroundColor="#a8a487" >
          <Center>
            <MusicResponsive mySRC={"../Bears/4.png"} bearMiddle={showSecondDivider}/>
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
            <Image src="../Writing/Store2.png" alt="Album Cover" h="45" />
          </Center>
          <Text fontSize="xl" textAlign="center" color="black" fontWeight="bold" pb="10">TEMPORARILY UNAVAILABLE</Text>
            
        </Box>

        {/* Footer */}
        {showSecondDivider && (
        <Center backgroundColor="#a8a487">
          <Divider orientation="horizontal" width="70%"  borderColor="black" borderBottomWidth={3} marginTop="4" marginBottom="4" />
        </Center>
        )}  
        <Center>
        <Center position="absolute" bottom={3}>
            <Text fontSize="sm" color="subtle">
                &copy; {new Date().getFullYear()} 19 Recordings, Inc. All rights reserved.
            </Text>
        </Center>
        </Center>

        </Box>
    </>
  )
}
