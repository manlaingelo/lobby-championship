// import { Container, Box, Image, useColorModeValue } from '@chakra-ui/react'
// import { useRouter } from 'next/router'
// import { useEffect, useState } from 'react'
// import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
// import Section from '../components/section'

const Home = () => {
  // const router = useRouter()
  // const [name, setName] = useState()
  // useEffect(() => {
  //   if (router.asPath !== router.route) {
  //     setName(router.query.name)
  //   }
  // }, [router])
  return (
    <Layout>
      Би та нарт (zolbood) гомдлоо.
      <br/>
      Гэнэтийн нөхцөл байдалтай холбоотойгоор
      <br/>
      12-11 эсвэл 12-10ны орой хаалтын үйл ажиллагааг
      <br/>
      явуулах болсон тул хонох сэтгэлээ бэлдэнэ үү.
      {/* <Container>
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
            src="/images/letter.png"
            alt="Profile image"
          />
          <Paragraph>
            Эрхэм хүндэт <strong style={{
              textDecoration: "underline",
              textDecorationStyle: "dotted",
            }}>{name}</strong> таныг 4А улирлын хаалтын үйл
            ажиллагаанд хүрэлцэн ирэхийг урьж байна.
            <br />
            Хэзээ: 16 долоо хоногийн сүүлчийн өдөр буюу 12 сарын 17-нд. <br />
            Хаана: Удахгүй тодорхой болно. <br />
            Урьсан: Майкланжело .<br />
          </Paragraph>
        </Section>
      </Container> */}
    </Layout>
  )
}

export default Home
