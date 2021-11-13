import LoginButton from 'components/molecules/LoginButton'
import LoginBox from 'components/organisms/LoginBox'
import MessageList from 'components/organisms/MessageList'

import { Main, MobileRendering, DesktopRendering } from './style'

const App = () => (
  <Main as='main'>
    <MessageList />
    <MobileRendering>
      <LoginButton />
    </MobileRendering>
    <DesktopRendering>
      <LoginBox />
    </DesktopRendering>
  </Main>
)

export default App
