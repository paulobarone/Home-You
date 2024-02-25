import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ShowcaseContainer = styled.section`
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

export const ShowcaseContent = styled.div`
  width: 100%;
  max-width: 400px;

  @media screen and (min-width: 1024px) {
    max-width: 900px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1100px;
  }
`

export const ShowcaseTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const ShowcaseTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: ${props => props.theme.colors.dark};
`

export const ShowcaseDescription = styled.p`
  color: ${props => props.theme.colors.darkGray};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`

export const ShowcaseButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`

export const ShowcaseImg = styled.img`
  display: none;
  height: 100%;
  max-width: 660px;

  @media screen and (min-width: 1024px) {
    display: block;
  }
`

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 24px;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 30px 0px;
  }
`

export const AboutContent = styled.div`
  width: 100%;
  max-width: 400px;

  @media screen and (min-width: 1024px) {
    max-width: 900px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1100px;
  }
`

export const AboutTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`

export const AboutBox = styled.div`
  padding: 16px;
  background-color: ${props => props.theme.colors.dark};
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const AboutTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${props => props.theme.colors.white};
`

export const AboutDescription = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.colors.white};
`

export const GalleryContainer = styled.section`
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

export const GalleryContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  max-width: 400px;

  @media screen and (min-width: 1024px) {
    max-width: 900px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1100px;
  }
`

export const GalleryTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`

export const GalleryTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: ${props => props.theme.colors.dark};
`

export const GalleryDescription = styled.p`
  text-align: center;
  color: ${props => props.theme.colors.darkGray};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`

export const GalleryImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`

export const GalleryImage = styled.img`
  width: 312px;
  height: 350px;
`

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 24px;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 30px 0px;
  }
`

export const ContactContent = styled.div`
  width: 100%;
  max-width: 400px;

  @media screen and (min-width: 1024px) {
    max-width: 900px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1100px;
  }
`

export const ContactTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`

export const ContactTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: ${props => props.theme.colors.dark};
`

export const ContactDescription = styled.p`
  text-align: center;
  color: ${props => props.theme.colors.darkGray};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`