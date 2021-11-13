import styled from '@xstyled/styled-components'

import Box from 'components/atoms/Box'
import Image from 'components/atoms/Image'
import Text from 'components/atoms/Text'

const Container = styled(Box)`
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
`

const Header = styled(Box)`
  height: 88px;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.colors.neutral.n200};
  width: 100%;

  @media (min-width: 768px) {
    padding: 0;
    position: unset;
  }
`

const Logo = styled(Image)`
  width: 180px;
  height: 16px;

  @media (min-width: 768px) {
    width: 280px;
    height: 24px;
  }
`

const List = styled.ulBox`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: 80px 20px;
  max-height: calc(100% - 88px - 100px);
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 100vh;
  width: 100vw;
  margin-top: calc(10vh - 14px);

  @media (min-width: 768px) {
    min-height: unset;
    max-height: calc(100% - 88px);
    padding: 0 20px;
    width: 100%;
    gap: 40px;
  }
`

const Message = styled.liBox`
  width: 92%;
  max-width: 440px;

  @media (min-width: 768px) {
    &:nth-child(even) {
      margin-left: 80px;
    }
  }
`

const UserImage = styled(Image)`
  width: 24px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.colors.neutral.n200};

  @media (min-width: 768px) {
    width: 30px;
  }
`

const UserImageBorder = styled.div`
  padding: 2px;
  background: linear-gradient(
    100deg,
    ${({ theme }) => theme.colors.pink} 0%,
    ${({ theme }) => theme.colors.yellow} 100%
  );
  border-radius: 50%;
  line-height: 0;
`

const MessageText = styled(Text)`
  font-size: 16px;
  line-height: 20px;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 28px;
  }
`

const Name = styled(Text)`
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`

export {
  Container,
  Logo,
  Header,
  List,
  Message,
  UserImage,
  UserImageBorder,
  MessageText,
  Name,
}
