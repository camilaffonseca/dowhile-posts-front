import styled from '@xstyled/styled-components'

import Box from 'components/atoms/Box'

const Main = styled(Box)`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 0 20px;
    grid-template-columns: 1fr 453px;
    column-gap: 4vw;
    position: relative;
    height: 100vh;
  }
`

const MobileRendering = styled.divBox`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.neutral.n200};

  @media (min-width: 768px) {
    display: none;
    width: fit-content;
  }
`

const DesktopRendering = styled.divBox`
  display: none;

  @media (min-width: 768px) {
    display: unset;
  }
`

export { Main, MobileRendering, DesktopRendering }
