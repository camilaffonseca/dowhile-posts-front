import LoginButton from 'components/molecules/LoginButton'

import { Box, Text } from './style'

const LoginBox = () => (
  <Box>
    <Text as='strong'>Envie e compartilhe sua mensagem</Text>
    <LoginButton />
  </Box>
)

export default LoginBox
