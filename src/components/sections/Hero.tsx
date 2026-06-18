import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { keyframes } from "@emotion/react";
import { lazy, Suspense } from "react";
const FaGithub = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaGithub })),
);
const FaLinkedin = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaLinkedin })),
);
const FaEnvelope = lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaEnvelope })),
);

const HeroSection = styled.section`
  min-height: calc(100vh - 4.5rem);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  color: ${theme.colors.textLight};
  padding: ${theme.spacing.lg} 0;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media (min-width: ${theme.breakpoints.sm}) {
      width: 90%;
    }
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1000px;
  width: 100%;
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: ${theme.spacing.lg};
  border: none;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl};
  }
`;

const fadeUpKeyframes = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Title = styled.h1`
  animation: ${fadeUpKeyframes} 0.5s ease-out forwards;
  font-size: clamp(2rem, 5vw, 4rem);
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.light};
  line-height: 1.1;
  letter-spacing: -0.02em;
`;

const Subtitle = styled.h2`
  animation: ${fadeUpKeyframes} 0.5s ease-out 0.2s forwards;
  opacity: 0;
  font-size: clamp(1.1rem, 2.5vw, 1.6rem);
  margin-bottom: ${theme.spacing.md};
  font-weight: 500;
  color: ${theme.colors.accent};
`;

const BadgeRow = styled.div`
  animation: ${fadeUpKeyframes} 0.5s ease-out 0.3s forwards;
  opacity: 0;
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.lg};
`;

const Badge = styled.span`
  background: ${theme.colors.glass.card};
  color: ${theme.colors.accent};
  border: 1px solid ${theme.colors.accent}44;
  padding: 4px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
`;

const Description = styled.p`
  animation: ${fadeUpKeyframes} 0.5s ease-out 0.4s forwards;
  opacity: 0;
  font-size: clamp(1rem, 1.2vw, 1.15rem);
  max-width: 650px;
  margin-bottom: ${theme.spacing.xl};
  line-height: 1.7;
  color: ${theme.colors.textLight};
  opacity: 0.85;
`;

const SocialLinks = styled.div`
  animation: ${fadeUpKeyframes} 0.5s ease-out 0.6s forwards;
  opacity: 0;
  display: flex;
  gap: ${theme.spacing.md};

  a {
    color: ${theme.colors.textLight};
    font-size: 1.5rem;
    transition: all ${theme.transitions.default};
    padding: ${theme.spacing.xs};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.glass.background};

    &:hover {
      color: ${theme.colors.light};
      transform: translateY(-3px);
      background: ${theme.colors.glass.card};
      box-shadow: 0 4px 12px rgba(246, 177, 122, 0.2);
    }
  }

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.lg};

    a {
      font-size: 1.75rem;
    }
  }
`;

export const Hero = () => {
  return (
    <HeroSection id="hero" role="region" aria-label="Introduction">
      <div className="container">
        <HeroContent>
          <div>
            <Title role="heading" aria-level={2}>
              Hola, soy Rafa Moreno
            </Title>
            <Subtitle role="heading" aria-level={3}>
              Desarrollador Full Stack · Backend · Cloud · Ciberseguridad
            </Subtitle>
            <BadgeRow>
              <Badge>Java · Spring Boot</Badge>
              <Badge>React · Flutter</Badge>
              <Badge>AWS · Docker</Badge>
              <Badge>Bug Bounty</Badge>
              <Badge>Inglés C1</Badge>
            </BadgeRow>
            <Description role="paragraph">
              Desarrollador multiplataforma recién graduado, apasionado por
              construir productos completos de principio a fin. Combino backend
              sólido con Java y Spring Boot, frontend con React, cloud con AWS y
              experiencia activa en ciberseguridad — con vulnerabilidades
              reportadas a Vodafone, la NASA y la Comisión Europea.
            </Description>
            <SocialLinks role="list" aria-label="Social media links">
              <a
                href="https://github.com/rafamorenoo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile"
                role="listitem"
              >
                <Suspense
                  fallback={
                    <div style={{ width: "1.5rem", height: "1.5rem" }} />
                  }
                >
                  <FaGithub aria-hidden="true" />
                </Suspense>
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/rafa-moreno-5b44b4307"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
                role="listitem"
              >
                <Suspense
                  fallback={
                    <div style={{ width: "1.5rem", height: "1.5rem" }} />
                  }
                >
                  <FaLinkedin aria-hidden="true" />
                </Suspense>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:rafamorenoo2004@gmail.com"
                aria-label="Send me an email"
                role="listitem"
              >
                <Suspense
                  fallback={
                    <div style={{ width: "1.5rem", height: "1.5rem" }} />
                  }
                >
                  <FaEnvelope aria-hidden="true" />
                </Suspense>
                <span className="sr-only">Email</span>
              </a>
            </SocialLinks>
          </div>
        </HeroContent>
      </div>
    </HeroSection>
  );
};
