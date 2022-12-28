import { Box, Flex, useBreakpointValue, Image, Center, Text, Link } from "@chakra-ui/react";

export const Releases = () => {
const displayBaseCase = useBreakpointValue({ base: true, md: false })

  return (
    <>
        {displayBaseCase && (
            <Box width="100%" position="relative" backgroundColor="#a8a487" pb="8">
                <Center>
                    <Box maxW="300px" width="95%" position="relative" backgroundColor="#a8a487" pb="5">
                        <Link href="https://ffm.to/carolinefh" target="_blank"><Image src="../Caroline.png" alt="Caroline" className="first-image"/></Link>
                    </Box>
                </Center>
                <Box width="100%" position="relative" backgroundColor="#a8a487" display="flex" justifyContent="center">
                <Box className="first-image" maxW="250px" width="45%" position="relative" backgroundColor="white" border="3px solid black" padding="5px" textAlign="center" display="flex" alignItems="center" justifyContent="center">
                    <Link href="https://smithmusic.ffm.to/662582270426_frtizhager" target="_blank"><Text fontWeight="bold" fontSize="20" color="black" >LISTEN TO THE NEW ALBUM</Text></Link>
                </Box>
                <Box width="30px" />
                <Box className="first-image" maxW="250px" width="45%" position="relative" backgroundColor="white" border="3px solid black" padding="5px" textAlign="center" display="flex" alignItems="center" justifyContent="center">
                    <Link href="https://www.youtube.com/watch?v=-kRX-SNJdSU" target="_blank"><Text fontWeight="bold" fontSize="20" color="black">WATCH THE LATEST VIDEO</Text></Link>
                </Box>
                </Box>
            </Box>
        )}
        {!displayBaseCase && (
            <Box width="100%" position="relative" backgroundColor="#a8a487" pb="8">
            <Box width="100%" position="relative" backgroundColor="#a8a487" display="flex" justifyContent="center">
            <Box top="80px" className="first-image" maxW="200px" maxH="100px" width="45%" position="relative" backgroundColor="white" border="3px solid black" padding="5px" textAlign="center" display="flex" alignItems="center" justifyContent="center">
                <Link href="https://smithmusic.ffm.to/662582270426_frtizhager" target="_blank"><Text fontWeight="bold" fontSize="20" color="black" >LISTEN TO THE NEW ALBUM</Text></Link>
            </Box>
            <Center>
                <Box maxW="450px" width="80%" position="relative" backgroundColor="#a8a487" pb="5">
                    <Link href="https://ffm.to/carolinefh" target="_blank"><Image src="../Caroline.png" alt="Caroline" className="first-image"/></Link>
                </Box>
            </Center>
            <Box top="80px" className="first-image" maxW="200px" maxH="100px" width="45%" position="relative" backgroundColor="white" border="3px solid black" padding="5px" textAlign="center" display="flex" alignItems="center" justifyContent="center">
                <Link href="https://www.youtube.com/watch?v=-kRX-SNJdSU" target="_blank"><Text fontWeight="bold" fontSize="20" color="black">WATCH THE LATEST VIDEO</Text></Link>
            </Box>
            </Box>
        </Box>
        )    
        }
    </>
  );
};

export default Releases;