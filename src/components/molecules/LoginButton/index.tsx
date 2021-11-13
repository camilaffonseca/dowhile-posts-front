import { VscGithubInverted } from 'react-icons/vsc'

import { Button } from './style'

const LoginButton = ({ ...props }) => (
  <Button href='#' {...props}>
    <VscGithubInverted size='24' />
    Entrar com Github
  </Button>
)

export default LoginButton
