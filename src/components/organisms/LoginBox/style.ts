import styled from '@xstyled/styled-components'
import BannerGirl from 'images/banner-girl.png'

import Box from 'components/atoms/Box'
import Text from 'components/atoms/Text'

const BoxComponent = styled(Box)`
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.neutral.n250};
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  padding: 80px 20px;
  gap: 32px;

  @media (min-width: 768px) {
    padding: 0 20px calc(22vh - 90px);
    display: flex;
    background: url(${BannerGirl}) no-repeat center top;
    height: 100vh;
  }
`

const TextComponent = styled(Text)`
  display: none;
  font-size: 32px;
  line-height: 36px;

  @media (min-width: 768px) {
    display: unset;
  }
`

export { BoxComponent as Box, TextComponent as Text }
