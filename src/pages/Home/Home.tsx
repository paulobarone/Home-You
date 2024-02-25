import Header from "../../components/Header/Header";
import { AboutBox, AboutContainer, AboutContent, AboutDescription, AboutImg, AboutTextGroup, AboutTitle, ContactContainer, ContactContent, ContactDescription, ContactTextGroup, ContactTitle, GalleryContainer, GalleryContent, GalleryDescription, GalleryImage, GalleryImages, GalleryTextGroup, GalleryTitle, MainContainer, ShowcaseButtonContainer, ShowcaseContainer, ShowcaseContent, ShowcaseDescription, ShowcaseImg, ShowcaseTextGroup, ShowcaseTitle } from "./Home.style";
import showcaseImg from "../../assets/home-img.png";
import aboutImg from "../../assets/design-img.png"
import Button from "../../components/Button/Button";
import galleryImgOne from "../../assets/gallery-1.png";
import galleryImgTwo from "../../assets/gallery-2.png";
import galleryImgThree from "../../assets/gallery-3.png";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <MainContainer>
        <ShowcaseContainer>
          <ShowcaseContent>
            <ShowcaseTextGroup>
              <ShowcaseTitle>Ajudar você a encontrar o melhor conforto, é nossa prioridade.</ShowcaseTitle>
              <ShowcaseDescription>Encontre uma variedade de propriedades que combinam com você. Esqueça todas as dificuldades em encontrar uma residência</ShowcaseDescription>
              <ShowcaseButtonContainer>
                <Button type="primary">Entre em contato</Button>
                <Button type="secondary">Mais sobre nós</Button>
              </ShowcaseButtonContainer>
            </ShowcaseTextGroup>
            <ShowcaseImg src={showcaseImg} alt="Casa moderna" />
          </ShowcaseContent>
        </ShowcaseContainer>
        <AboutContainer>
          <AboutContent>
            <AboutImg src={aboutImg} alt="Design moderno e minimalista" />
            <AboutTextGroup>
              <AboutBox>
                <AboutTitle>Design minimalista</AboutTitle>
                <AboutDescription>Móveis apenas essenciais e com design moderno, além de revestimentos bonitos e em cores neutras para manter a casa sempre com um estilo clean e suave.</AboutDescription>
              </AboutBox>
              <Button type="secondary">Quero saber mais sobre os designs</Button>
            </AboutTextGroup>
          </AboutContent>
        </AboutContainer>
        <GalleryContainer>
          <GalleryContent>
            <GalleryTextGroup>
              <GalleryTitle>Galeria</GalleryTitle>
              <GalleryDescription>Se você está entediado com a aparência da decoração de interiores da casa comuns, trabalhamos com designs diferentes e inovadores.</GalleryDescription>
            </GalleryTextGroup>
            <GalleryImages>
              <GalleryImage src={galleryImgOne} alt="Casa moderna" />
              <GalleryImage src={galleryImgTwo} alt="Casa moderna" />
              <GalleryImage src={galleryImgThree} alt="Casa moderna" />
            </GalleryImages>
          </GalleryContent>
        </GalleryContainer>
        <ContactContainer>
          <ContactContent>
            <ContactTextGroup>
              <ContactTitle>Orçamento</ContactTitle>
              <ContactDescription>Interessado em entrar em contato com um de nossos profissionais?</ContactDescription>
              <Button type="tertiary">Entre em contato</Button>
            </ContactTextGroup>
          </ContactContent>
        </ContactContainer>
      </MainContainer>
      <Footer />
    </>
  )
}