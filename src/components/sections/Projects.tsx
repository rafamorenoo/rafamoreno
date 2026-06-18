import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { theme } from "../../styles/theme";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: ${theme.spacing.lg} 0;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: calc(${theme.spacing.xl} * 1.5);
  color: ${theme.colors.textLight};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -${theme.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${theme.colors.accent};
    border-radius: 2px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: calc(${theme.spacing.xl} * 2);
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
  gap: ${theme.spacing.lg};
  width: 100%;
  margin-top: ${theme.spacing.lg};

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.xl};
    margin-top: ${theme.spacing.xl};
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 12px;
  overflow: hidden;
  color: ${theme.colors.textLight};
  transition: all ${theme.transitions.default};
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(246, 177, 122, 0.15);
  }
`;

const ProjectHeader = styled.div<{ color: string }>`
  width: 100%;
  height: 90px;
  background: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(
      to top,
      ${theme.colors.glass.card},
      transparent
    );
  }
`;

const ProjectContent = styled.div`
  padding: ${theme.spacing.md};
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.lg};
  }
`;

const ProjectTitle = styled.h3`
  font-size: clamp(1.1rem, 3vw, 1.35rem);
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.light};
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: ${theme.colors.textLight};
  margin-bottom: ${theme.spacing.lg};
  font-size: clamp(0.85rem, 2vw, 0.95rem);
  line-height: 1.6;
  flex: 1;
  opacity: 0.88;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
  margin-bottom: ${theme.spacing.md};
`;

const TechTag = styled.span`
  background: ${theme.colors.glass.card};
  color: ${theme.colors.accent};
  padding: 3px 9px;
  border-radius: 20px;
  font-size: clamp(0.7rem, 2vw, 0.8rem);
  font-weight: 500;
  transition: all ${theme.transitions.default};

  &:hover {
    background: ${theme.colors.gradient.accent};
    color: ${theme.colors.textDark};
    transform: translateY(-1px);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: auto;
  padding-top: ${theme.spacing.md};
  border-top: 1px solid rgba(255, 255, 255, 0.05);

  a {
    color: ${theme.colors.accent};
    font-size: clamp(1rem, 2vw, 1.2rem);
    transition: all ${theme.transitions.default};
    padding: ${theme.spacing.xs};
    border-radius: 4px;

    &:hover {
      color: ${theme.colors.light};
      background: ${theme.colors.glass.card};
      transform: translateY(-2px);
    }
  }
`;

const projects = [
  {
    id: 1,
    title: "SkillSwap — TFG DAM",
    description:
      "Plataforma full stack de intercambio de habilidades con matching por IA (Groq LLaMA 3.3). Chat en tiempo real con WebSockets, autenticación JWT y app móvil nativa con Flutter.",
    emoji: "🔄",
    color: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
    techStack: [
      "Java 21",
      "Spring Boot 3",
      "React 18",
      "Flutter",
      "PostgreSQL",
      "WebSockets",
      "JWT",
      "Docker",
    ],
    githubUrl: "https://github.com/rafamorenoo/tfg",
    liveUrl: null,
  },
  {
    id: 2,
    title: "LinkTrack — URL Shortener",
    description:
      "Acortador de URLs con analíticas en tiempo real. Arquitectura cloud en AWS con ECS Fargate, Redis para caché de redirects y SQS para registrar clicks de forma asíncrona.",
    emoji: "🔗",
    color: "linear-gradient(135deg, #0f2027 0%, #203a43 100%)",
    techStack: [
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "AWS ECS",
      "SQS",
      "Terraform",
      "Docker",
      "GitHub Actions",
    ],
    githubUrl: "https://github.com/rafamorenoo/linktrack",
    liveUrl: null,
  },
  {
    id: 3,
    title: "Pokédex App",
    description:
      "Aplicación web para buscar Pokémon por nombre o ID. API propia con Spring Boot que consume PokeAPI, con frontend moderno que incluye modo claro/oscuro.",
    emoji: "⚡",
    color: "linear-gradient(135deg, #1a1a00 0%, #3d3000 100%)",
    techStack: [
      "Java 23",
      "Spring Boot 3",
      "HTML5",
      "CSS3",
      "JavaScript",
      "PokeAPI",
    ],
    githubUrl: "https://github.com/rafamorenoo/Pokedex-App",
    liveUrl: null,
  },
  {
    id: 5,
    title: "Pipeline DeFi — Sumer Protocol",
    description:
      "Metodología propia para auditar smart contracts con IA. Biblioteca de 19 patrones de vulnerabilidad aplicada en Sumer Protocol: 1 Critical (ECDSA replay attack), 2 High, 2 Medium.",
    emoji: "🔐",
    color: "linear-gradient(135deg, #1a0a00 0%, #3d1f00 100%)",
    techStack: [
      "Solidity",
      "Foundry",
      "Claude Sonnet/Opus",
      "DeFi Security",
      "ECDSA",
      "Invariant Testing",
    ],
    githubUrl: null,
    liveUrl: null,
  },
  {
    id: 6,
    title: "Pipeline Recon Bug Bounty",
    description:
      "Pipeline automatizado para monitorización continua de subdominios y endpoints. Detecta nuevos vectores de ataque en programas de bug bounty con notificaciones en tiempo real.",
    emoji: "🕵️",
    color: "linear-gradient(135deg, #0a1628 0%, #1a2a4a 100%)",
    techStack: [
      "Bash",
      "Python",
      "Subfinder",
      "Httpx",
      "Katana",
      "LinkFinder",
      "Cron",
    ],
    githubUrl: null,
    liveUrl: null,
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <ProjectsSection id="projects" role="region" aria-label="Featured Projects">
      <div className="container">
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          role="heading"
          aria-level={2}
        >
          Projects
        </SectionTitle>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ProjectGrid role="list">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                variants={itemVariants}
                role="listitem"
                aria-labelledby={`project-title-${project.id}`}
              >
                <ProjectHeader
                  color={project.color}
                  role="img"
                  aria-label={project.title}
                >
                  <span style={{ position: "relative", zIndex: 1 }}>
                    {project.emoji}
                  </span>
                </ProjectHeader>
                <ProjectContent>
                  <ProjectTitle id={`project-title-${project.id}`}>
                    {project.title}
                  </ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <TechStack
                    role="list"
                    aria-label={`Technologies used in ${project.title}`}
                  >
                    {project.techStack.map((tech) => (
                      <TechTag key={tech} role="listitem">
                        {tech}
                      </TechTag>
                    ))}
                  </TechStack>
                  <ProjectLinks>
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <FaGithub aria-hidden="true" />
                        <span className="sr-only">GitHub repository</span>
                      </a>
                    ) : null}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.title} live site`}
                      >
                        <FaExternalLinkAlt aria-hidden="true" />
                        <span className="sr-only">Live site</span>
                      </a>
                    )}
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectGrid>
        </motion.div>
      </div>
    </ProjectsSection>
  );
};

export default Projects;
