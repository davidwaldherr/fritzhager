import { Stack, useBreakpointValue, Box, Input, Text, Button } from "@chakra-ui/react"

export const Footer = (color) => {
  const width = useBreakpointValue({ base: "0%", md: "50%" })
  return (
      <Box
        padding="15px"
        backgroundColor={color}
        position="relative"
      >
        <Stack spacing="4" direction={{ base: 'column', md: 'row' }} align="center" justifyContent="center">
          <Stack spacing="4" direction={{ base: 'row', md: 'row' }} maxW={{ lg: '360px' }}>
            <Input variant="flushed" borderBottomWidth="3px" borderBottomColor="black" placeholder="Email Address" type="email" required />
            
            <form action="https://iamfritzhager.us21.list-manage.com/subscribe/post?u=fa20112546e7ab40f40f0bcb6&amp;id=81e7398c39&amp;f_id=0033cce1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <Button variant="ghost" borderColor="black" borderWidth="3px" type="submit" flexShrink={0}>
              Join
            </Button>
            </form>
          </Stack>
          <Box position="relative" width={width}></Box>
          <Box
            padding="15px"
            backgroundColor={color}
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
