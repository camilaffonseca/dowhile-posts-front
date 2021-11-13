import { FaRegUserCircle } from 'react-icons/fa'

import logo from 'images/logo.svg'

import Box from 'components/atoms/Box'
import Text from 'components/atoms/Text'

import {
  Container,
  Header,
  List,
  Logo,
  Message,
  UserImage,
  UserImageBorder,
  MessageText,
  Name,
} from './style'

type MessageType = {
  id: string
  text: string
  created_at: Date
  user_id: string
  user: {
    id: string
    github_id: number
    name: string
    login: string
    avatar_url: string
  }
}

type MessageListType = {
  // eslint-disable-next-line react/require-default-props
  messagesData?: MessageType[]
}

const MessageList = ({ messagesData }: MessageListType) => (
  <Container>
    <Header>
      <Logo src={logo} alt='Logo DoWhile 2021' />
    </Header>
    {!messagesData?.length ? (
      <Box
        flexDirection='column'
        gap='4px'
        w='100%'
        alignItems='center'
        h='100vh'
        justifyContent='center'
        p='20px'
      >
        <Text textAlign='center' fontSize='22px'>
          Oiii! Acho que você é o primeiro por aqui :)
        </Text>
        <Text textAlign='center' fontSize='22px'>
          Chega pra cá, vamos conversar! ^^
        </Text>
      </Box>
    ) : (
      <List>
        {messagesData?.map(message => (
          <Message key={message.id}>
            <MessageText>{message.text}</MessageText>
            <Box mt='16px' gap='12px' alignItems='center'>
              <UserImageBorder>
                {message.user.avatar_url ? (
                  <UserImage
                    src={message.user.avatar_url}
                    alt={`Avatar do usuário ${message.user.name}`}
                  />
                ) : (
                  <FaRegUserCircle size='24px' color='#000' />
                )}
              </UserImageBorder>
              <Name fontSize='16px'>{message.user.name}</Name>
            </Box>
          </Message>
        ))}
      </List>
    )}
  </Container>
)

export default MessageList
