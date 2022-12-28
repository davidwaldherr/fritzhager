import { Stack, useBreakpointValue, Box, Input, Text, Button } from "@chakra-ui/react"

export const Footer = () => {
  const width = useBreakpointValue({ base: "0%", md: "50%" })
  return (
      <Box
        padding="15px"
        backgroundColor="#a8a487"
        position="relative"
      >
        <Stack spacing="4" direction={{ base: 'column', md: 'row' }} align="center" justifyContent="center">
          <Stack spacing="4" direction={{ base: 'row', md: 'row' }} maxW={{ lg: '360px' }}>
            <Input variant="flushed" borderBottomWidth="3px" borderBottomColor="black" placeholder="Email Address" type="email" required />
            <Button variant="ghost" borderColor="black" borderWidth="3px" type="submit" flexShrink={0}>
              Join
            </Button>
          </Stack>
          <Box position="relative" width={width}></Box>
          <Box
            padding="15px"
            backgroundColor="#a8a487"
            position="relative"
            align="right"
          >
            <Text fontSize="sm" color="subtle">
                &copy; {new Date().getFullYear()} 19 Recordings, Inc. All rights reserved.
            </Text>
          </Box>
        </Stack>
      </Box>
  )
}

export default Footer
