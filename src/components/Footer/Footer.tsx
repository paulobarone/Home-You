import { FooterContainer, FooterContent, LinksContainer, LinkTitle, Link } from "./Footer.style"

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <LinksContainer>
          <LinkTitle>Produtos</LinkTitle>
          <Link>Mobília</Link>
          <Link>Segurança</Link>
          <Link>Design Interior</Link>
        </LinksContainer>
        <LinksContainer>
          <LinkTitle>Mais Informações</LinkTitle>
          <Link>Contato</Link>
          <Link>Sobre nós</Link>
          <Link>Termos e Condições</Link>
        </LinksContainer>
        <LinksContainer>
          <LinkTitle>Redes Sociais</LinkTitle>
          <Link>Pinterest</Link>
          <Link>Facebook</Link>
          <Link>Instagram</Link>
        </LinksContainer>
      </FooterContent>
    </FooterContainer>
  )
}