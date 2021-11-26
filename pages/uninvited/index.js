import { Container, Box, useColorModeValue } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'

const Uninvited = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        fontSize={[16, 24, 32]}
        fontWeight={600}
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
        Уучлаарай, та урилгаар дамжин зочилно уу.
      </Box>
    </Container>
  </Layout>
)

export default Uninvited
