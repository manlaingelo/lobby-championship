import { Container, Box, useColorModeValue } from '@chakra-ui/react'
import Layout from './layouts/article'

const UninvitedGuest = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={5}
        py={2}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        fontSize={[16, 24, 72]}
        fontWeight={700}
      >
        You are not invited!
      </Box>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        fontSize={[16, 18, 20]}
        fontWeight={600}
      >
        Уучлаарай та авсан урилгаар дамжин зочилно уу.
      </Box>
    </Container>
  </Layout>
)

export default UninvitedGuest
