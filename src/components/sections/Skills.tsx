import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { theme } from "../../styles/theme";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaAws,
  FaJava,
  FaDatabase,
  FaPython,
} from "react-icons/fa";
import {
  SiTypescript,
  SiSpringboot,
  SiPostgresql,
  SiFlutter,
  SiNextdotjs,
  SiTerraform,
  SiLinux,
  SiJavascript,
} from "react-icons/si";

const SkillsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  color: ${theme.colors.textLight};
  padding: ${theme.spacing.lg} ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} ${theme.spacing.lg};
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.light};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -${theme.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${theme.colors.light};
    border-radius: 2px;
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${theme.spacing.lg};
  width: 100%;
  max-width: 1200px;
  margin-top: ${theme.spacing.xl};

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.xl};
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const SkillCategory = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: ${theme.spacing.lg};
  transition: all ${theme.transitions.default};
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(246, 177, 122, 0.15);
  }
`;

const CategoryTitle = styled.h3`
  font-size: clamp(1.1rem, 3vw, 1.3rem);
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.light};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-weight: 600;
  position: relative;
  padding-bottom: ${theme.spacing.md};

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: ${theme.colors.accent};
    border-radius: 2px;
  }

  svg {
    font-size: 1.5rem;
    color: ${theme.colors.accent};
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
  flex: 1;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-size: clamp(0.85rem, 2vw, 0.95rem);
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: 10px;
  transition: all ${theme.transitions.default};
  background: ${theme.colors.glass.card};

  svg {
    font-size: 1.1rem;
    color: ${theme.colors.accent};
    transition: all ${theme.transitions.default};
    flex-shrink: 0;
  }

  &:hover {
    background: ${theme.colors.gradient.glass};
    transform: translateX(4px);

    svg {
      color: ${theme.colors.light};
    }
  }
`;

const skillCategories = [
  {
    title: "Backend",
    icon: <FaJava />,
    skills: [
      { name: "Java 21", icon: <FaJava /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Python", icon: <FaPython /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "REST APIs", icon: <FaDatabase /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
  {
    title: "Frontend & Mobile",
    icon: <FaReact />,
    skills: [
      { name: "React 18", icon: <FaReact /> },
      { name: "Next.js 15", icon: <SiNextdotjs /> },
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML / CSS", icon: <FaDatabase /> },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <FaAws />,
    skills: [
      { name: "AWS (EC2, S3, ECS)", icon: <FaAws /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Terraform", icon: <SiTerraform /> },
      { name: "GitHub Actions", icon: <FaGitAlt /> },
      { name: "CI/CD", icon: <FaGitAlt /> },
      { name: "Linux", icon: <SiLinux /> },
    ],
  },
  {
    title: "Ciberseguridad",
    icon: <FaDatabase />,
    skills: [
      { name: "Bug Bounty", icon: <FaDatabase /> },
      { name: "OWASP Top 10", icon: <FaDatabase /> },
      { name: "XSS · IDOR · SSRF", icon: <FaDatabase /> },
      { name: "Burp Suite Pro", icon: <FaDatabase /> },
      { name: "Recon & Enumeration", icon: <FaDatabase /> },
      { name: "Smart Contracts Audit", icon: <FaDatabase /> },
    ],
  },
];

const Skills = () => {
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
    <SkillsSection id="skills" role="region" aria-label="Skills and Expertise">
      <SectionTitle
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        role="heading"
        aria-level={2}
      >
        Skills & Stack
      </SectionTitle>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ width: "100%", maxWidth: "1200px" }}
      >
        <SkillsContainer role="list">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              variants={itemVariants}
              role="listitem"
              aria-labelledby={`category-title-${index}`}
            >
              <CategoryTitle id={`category-title-${index}`}>
                <span aria-hidden="true">{category.icon}</span>
                {category.title}
              </CategoryTitle>
              <SkillsList role="list" aria-label={`${category.title} skills`}>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skillIndex}
                    variants={itemVariants}
                    role="listitem"
                  >
                    <span aria-hidden="true">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsContainer>
      </motion.div>
    </SkillsSection>
  );
};

export default Skills;
