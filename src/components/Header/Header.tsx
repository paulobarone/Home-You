import { HeaderContent, LeftSide, Logo, Name, RightSide, Menu, Nav, Links, Link, Icons, Icon, HeaderContainer } from "./Header.style";
import menuIcon from "../../assets/menu.svg";
import userIcon from "../../assets/user.svg";
import favoriteIcon from "../../assets/favorite.svg";
import searchIcon from "../../assets/search.svg";
import logoIcon from "../../assets/logo.svg";
import { useEffect, useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    if(menuOpen) {
      window.scrollTo(0, 0);
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [menuOpen])

  return (
    <HeaderContainer>
      <HeaderContent>
        <LeftSide>
          <Logo src={logoIcon} alt="Logo Home You" />
          <Name>HomeYou</Name>
        </LeftSide>
        <RightSide>
          <Menu src={menuIcon} alt="Ícone de Menu" onClick={handleMenu} />
          <Nav $menu={menuOpen}>
            <Links>
              <Link onClick={() => setMenuOpen(false)}>Início</Link>
              <Link onClick={() => setMenuOpen(false)}>Galeria</Link>
              <Link onClick={() => setMenuOpen(false)}>Contato</Link>
            </Links>
            <Icons>
              <Icon onClick={() => setMenuOpen(false)} src={userIcon} alt="Ícone de usuário" />
              <Icon onClick={() => setMenuOpen(false)} src={favoriteIcon} alt="Ícone de favorito" />
              <Icon onClick={() => setMenuOpen(false)} src={searchIcon} alt="Ícone de busca" />
            </Icons>
          </Nav>
        </RightSide>
      </HeaderContent>
    </HeaderContainer>
  )
}