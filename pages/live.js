import { Box, Divider, Center, Image, Text, useBreakpointValue, Button } from '@chakra-ui/react'
import { MusicResponsive } from '../Components/MusicResponsive.js'
import BandsInTownWidget from '../Components/BandsInTownWidget.js'

export default function Home() {
  const showSecondDivider = useBreakpointValue({ base: true, md: false })

  function handleClick() {
    window.open("https://bnds.us/ifj7mw", '_blank');
  }

  const backgroundColor = "#white"

  return (
    <>
      <Box height="100vh" width="100vw" backgroundColor={backgroundColor} position="absolute" zIndex="-1" >

        {/* Header */}
        <Box height="25px" backgroundColor={backgroundColor} />
        <Box width="100%" position="relative" backgroundColor={backgroundColor} >
          <Center>
            <MusicResponsive mySRC={"../Bears/3.png"} bearMiddle={showSecondDivider}/>
          </Center>
          <Center pt="4">
            <Divider orientation="horizontal" width="70%"  borderColor="black" borderBottomWidth={3}  marginBottom="4"/>
          </Center> 
        </Box>

        {/* MUSIC */}
        <Box 
          backgroundColor={backgroundColor}
          position="relative" 
          width='100%' 
          backgroundPosition={"center"}
          pt="10"
        >
          <Center pb="10">
            <Image src="../Writing/Live2.png" alt="Album Cover" h="45" />
          </Center>
          
        </Box>

        {/* BandsInTown Widget */}
        <Center>
          <Box width="60vw" backgroundColor={backgroundColor}>
            <BandsInTownWidget artistName="fritz hager" />
          </Box>
        </Center>
        

        {/* Footer */}
        {showSecondDivider && (
          <Center backgroundColor={backgroundColor}>
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
