import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
// import Footer from '../footer'
import VokerLoader from '../voker-loader'

const LazyVoker = dynamic(() => import('../voker'), {
  ssr: false,
  loading: () => <VokerLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <title>IT18 forever!!!</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoker />

        {children}

        {/* <Footer /> */}
      </Container>
    </Box>
  )
}

export default Main
