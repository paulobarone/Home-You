import styled, { css } from "styled-components";

interface ButtonProps {
  $type: string;
}

export const ButtonStyled = styled.button<ButtonProps>`
  font-size: 14px;
  font-weight: 500;
  border: none;
  cursor: pointer;

  ${props => props.$type === 'primary' && css`
    color: ${props.theme.colors.white};
    background-color: ${props.theme.colors.dark};
    padding: 8px 20px;

    @media screen and (min-width: 768px) {
      padding: 12px 32px;
    }
  `}

  ${props => props.$type === 'secondary' && css`
    background-color: transparent;
    color: ${props.theme.colors.dark};
    text-decoration: underline;
  `}

  ${props => props.$type === 'tertiary' && css`
    color: ${props.theme.colors.dark};
    border: 1px solid ${props.theme.colors.dark};
    padding: 8px 20px;

    @media screen and (min-width: 768px) {
      padding: 12px 32px;
    }
  `}

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`