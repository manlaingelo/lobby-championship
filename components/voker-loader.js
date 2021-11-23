import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const VokerSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const VokerContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voker"
    m="auto"
    mr={[20, 60, 120]}
    w={[80, 100, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <VokerContainer>
      <VokerSpinner />
    </VokerContainer>
  )
}

export default Loader
