import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container, Flex } from '@chakra-ui/react'
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

      <NavBar position="relative" path={router.asPath} />

      <Container maxW="xxl" pt={14} centerContent>
        <Flex direction={['column', 'row', 'row']}>
        <LazyVoker />
          {children}
        </Flex>
      </Container>
    </Box>
  )
}

export default Main
