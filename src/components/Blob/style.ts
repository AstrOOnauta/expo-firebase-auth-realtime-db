import styled, { css } from 'styled-components/native'

interface PositionProps {
  isDark: boolean
  position: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left'
}

export const BlobContainer = styled.View<PositionProps>`
  position: absolute;
  background-color: ${(props) =>
    props.isDark ? props.theme.colors.grey900 : props.theme.colors.grey100};
  border-radius: 250px;
  width: 500px;
  height: 500px;
  z-index: -1;

  ${(props) =>
    props.position === 'top-left' &&
    css`
      top: -340px;
      right: 35%;
    `}

  ${(props) =>
    props.position === 'top-right' &&
    css`
      top: -325px;
      left: 20%;
    `}

    ${(props) =>
    props.position === 'bottom-right' &&
    css`
      bottom: -260px;
      left: 8%;
    `}

    ${(props) =>
    props.position === 'bottom-left' &&
    css`
      bottom: -200px;
      right: 8%;
    `}
`
