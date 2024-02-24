import { useEffect, useState } from "react";
import menuIcon from "../../assets/menu.svg";
import userIcon from "../../assets/user.svg";
import favoriteIcon from "../../assets/favorite.svg";
import searchIcon from "../../assets/search.svg";
import logoIcon from "../../assets/logo.svg";
import { Header, LeftSide, Logo, Menu, Name, Nav, RightSide, Links, Link, Icons, Icon, HeaderContent } from "./Home.style";

export default function Home() {
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
    <Header>
      <HeaderContent>
        <LeftSide>
          <Logo src={logoIcon} alt="Logo Home You" />
          <Name>HomeYou</Name>
        </LeftSide>
        <RightSide>
          <Menu src={menuIcon} alt="Ícone de Menu" onClick={handleMenu} />
          <Nav $menu={menuOpen}>
            <Links>
              <Link>Início</Link>
              <Link>Galeria</Link>
              <Link>Contato</Link>
            </Links>
            <Icons>
              <Icon src={userIcon} alt="Ícone de usuário" />
              <Icon src={favoriteIcon} alt="Ícone de favorito" />
              <Icon src={searchIcon} alt="Ícone de busca" />
            </Icons>
          </Nav>
        </RightSide>
      </HeaderContent>
    </Header>
  )
}