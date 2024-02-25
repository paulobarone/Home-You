import styled from "styled-components";

interface MenuProps {
  $menu: boolean
}

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.white};
  width: 100vw;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 30px 24px;

  @media screen and (min-width: 1024px) { 
    max-width: 900px;
    padding: 0px;
  }

  @media screen and (min-width: 1280px) { 
    max-width: 1100px;
  }
`

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const Logo = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  background-color: ${props => props.theme.colors.dark};
`

export const Name = styled.h1`
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 600;
`

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Menu = styled.img`
  width: 24px;
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`

export const Nav = styled.nav<MenuProps>`
  display: ${(props) => props.$menu ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  gap: 48px;
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 12px;
  background-color: ${props => props.theme.colors.white};
  padding: 32px 16px;
  border: 1px solid ${props => props.theme.colors.darkGray};
  width: 85vw;
  max-width: 600px;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    border: none;
    position: static;
    width: 100%;
    max-width: auto;
    transform: none;
    padding: 0px;
  }
`

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`

export const Link = styled.a`
  color: ${props => props.theme.colors.dark};
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`

export const Icon = styled.img`
  width: 24px;
  cursor: pointer;
`