import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container, Flex } from '@chakra-ui/react'
import ModelLoader from '../model-loader'

const LazyNevermore = dynamic(() => import('../model-sf'), {
  ssr: false,
  loading: () => <ModelLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <title>the ITnatioanal - 2021</title>
      </Head>

      <NavBar position="relative" path={router.asPath} />

      <Container maxW="xxl" pt={14} centerContent>
        <Flex direction={['column', 'row', 'row']}>
          <LazyNevermore />
          {children}
        </Flex>
      </Container>
    </Box>
  )
}

export default Main
