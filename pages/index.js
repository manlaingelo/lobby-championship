import { Container, Box, Image, useColorModeValue } from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Home = () => (
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
        The International Dota 2 championships
      </Box>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        fontSize={[16, 18, 20]}
        fontWeight={600}
      >
        You are invited to join this great event!
      </Box>

      <Section delay={0.1} fontSize={24}>
        <Image
          display="flex"
          alignSelf="center"
          src="https://i.imgur.com/Hw0G5.png"
          alt="Profile image"
        />
        <Paragraph>
          Эрхэм хүндэт ......................... таныг 4А улирлын хаалтын үйл
          ажиллагаанд хүрэлцэн ирэхийг урьж байна.
          <br />
          Хэзээ: 12 сард, хугацаа одоогоор тодорхойгүй. <br />
          Хаана: Удахгүй тодорхой болно. <br />
          Урьсан: Майкланжело .<br />
        </Paragraph>
      </Section>
    </Container>
  </Layout>
)

export default Home
