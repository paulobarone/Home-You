import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 24px;
  width: 100%;
  background-color: ${props => props.theme.colors.lightGray};

  @media screen and (min-width: 768px) {
    padding: 30px 0px;
  }
`

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  grid-row-gap: 32px;
  grid-column-gap: 16px;
  width: 100%;
  max-width: 400px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 16px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 900px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1100px;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  max-width: 150px;
`

export const LinkTitle = styled.h3`
  margin-bottom: 2px;
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.colors.dark};
`

export const Link = styled.a`
  font-size: 12px;
  font-weight: 400;
  color: ${props => props.theme.colors.dark};
  cursor: pointer;
  position: relative;
  transition: color .7s ease;

  &::after {
    content: ' ';
    width: 0%;
    height: 2px;
    background-color: ${props => props.theme.colors.dark};
    position: absolute;
    bottom: -2px;
    left: 0;
    transition: width .7s ease-in-out;
    border-radius: 10px;
  }

  &:hover {
    color: ${props => props.theme.colors.dark};
  }

  &:hover::after {
    width: 100%;
  }
`