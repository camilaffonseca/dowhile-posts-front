import styled from '@xstyled/styled-components'

import Link from 'components/atoms/Link'

const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-decoration: none;
  text-transform: uppercase;
  height: 56px;
  max-width: 100%;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.neutral.n100};
  font-size: 14px;
  font-weight: bold;

  &:hover {
    filter: brightness(0.9);
    transition-duration: 200ms;
  }

  @media (min-width: 768px) {
    width: 258px;
  }
`

export { Button }
