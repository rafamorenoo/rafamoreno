import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { theme } from "../../styles/theme";
import { useState } from "react";
import {
  FaShieldAlt,
  FaExternalLinkAlt,
  FaTimes,
  FaSearch,
} from "react-icons/fa";

const AchievementsSection = styled.section`
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

const StatsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.lg};
  margin-bottom: calc(${theme.spacing.xl} * 1.5);
  flex-wrap: wrap;
`;

const StatCard = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  text-align: center;
  min-width: 120px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
`;

const StatNumber = styled.div<{ color?: string }>`
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  font-weight: 700;
  color: ${(props) => props.color || theme.colors.accent};
  font-family: ${theme.fonts.heading};
`;

const StatLabel = styled.div`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.55);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 2px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
  gap: ${theme.spacing.lg};

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.xl};
  }
`;

const Card = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.06);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow:
      0 8px 30px rgba(246, 177, 122, 0.15),
      inset 0 0 0 1px rgba(246, 177, 122, 0.25);
  }
`;

const CardImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: rgba(0, 0, 0, 0.4);
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(42, 45, 62, 0.9) 0%,
      transparent 60%
    );
    pointer-events: none;
  }
`;

/* Imagen y placeholder comparten el mismo espacio absoluto */
const CardImageInner = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;

  ${Card}:hover & {
    transform: scale(1.04);
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
`;

const SeverityBadge = styled.span<{ severity: string }>`
  position: absolute;
  top: ${theme.spacing.md};
  right: ${theme.spacing.md};
  z-index: 3;
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: ${({ severity }) => {
    const colors: Record<string, string> = {
      critical: "rgba(220, 38, 38, 0.85)",
      high: "rgba(234, 88, 12, 0.85)",
      medium: "rgba(161, 98, 7, 0.85)",
      low: "rgba(21, 128, 61, 0.85)",
      info: "rgba(29, 78, 216, 0.85)",
    };
    return colors[severity.toLowerCase()] || "rgba(100,100,100,0.7)";
  }};
  backdrop-filter: blur(4px);
  border: 1px solid
    ${({ severity }) => {
      const colors: Record<string, string> = {
        critical: "rgba(239, 68, 68, 0.5)",
        high: "rgba(249, 115, 22, 0.5)",
        medium: "rgba(234, 179, 8, 0.4)",
        low: "rgba(34, 197, 94, 0.4)",
        info: "rgba(59, 130, 246, 0.4)",
      };
      return colors[severity.toLowerCase()] || "rgba(255,255,255,0.1)";
    }};
`;

const CardBody = styled.div`
  padding: ${theme.spacing.md};
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.lg};
  }
`;

const CardTitle = styled.h3`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  font-weight: 600;
  color: ${theme.colors.accent};
  margin: 0;
`;

const CardMeta = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  align-items: center;
  flex-wrap: wrap;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
`;

const MetaDot = styled.span`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  display: inline-block;
`;

const CardDesc = styled.p`
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.6;
  margin: 0;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
  margin-top: auto;
  padding-top: ${theme.spacing.sm};
`;

const Tag = styled.span`
  background: ${theme.colors.glass.card};
  color: ${theme.colors.accent};
  padding: 2px 8px;
  border-radius: 20px;
  font-size: 0.72rem;
  font-weight: 500;
`;

const ViewMore = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.78rem;
  color: ${theme.colors.accent};
  margin-top: ${theme.spacing.sm};
  opacity: 0.8;

  ${Card}:hover & {
    opacity: 1;
  }
`;

// ── Modal ──────────────────────────────────────────────────────────────────
const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(6px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.lg};
`;

const Modal = styled(motion.div)`
  background: ${theme.colors.primary};
  border-radius: 16px;
  width: 100%;
  max-width: 750px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const ModalImage = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ModalBody = styled.div`
  padding: ${theme.spacing.lg};

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl};
  }
`;

const ModalTitle = styled.h2`
  font-size: clamp(1.3rem, 3vw, 1.7rem);
  color: ${theme.colors.accent};
  margin: 0 0 ${theme.spacing.md};
`;

const ModalMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.55);
`;

const ModalDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: ${theme.spacing.lg};
`;

const ModalSection = styled.div`
  margin-bottom: ${theme.spacing.lg};
`;

const ModalSectionTitle = styled.h4`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.4);
  margin: 0 0 ${theme.spacing.sm};
`;

const ModalImpact = styled.p`
  font-size: 0.9rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: ${theme.spacing.md};
  right: ${theme.spacing.md};
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: background 0.2s;

  &:hover {
    background: rgba(246, 177, 122, 0.3);
  }
`;

const ReportLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${theme.colors.accent};
  text-decoration: none;
  font-size: 0.88rem;
  padding: 8px 14px;
  border-radius: 8px;
  background: ${theme.colors.glass.card};
  transition: all 0.2s;

  &:hover {
    background: rgba(246, 177, 122, 0.15);
    transform: translateY(-1px);
  }
`;

// ── Data ───────────────────────────────────────────────────────────────────

export interface Achievement {
  id: number;
  title: string;
  program: string;
  platform: string;
  severity: "Critical" | "High" | "Medium" | "Low" | "Info";
  year: string;
  description: string;
  impact: string;
  tags: string[];
  screenshot?: string;
  reportUrl?: string;
  emoji?: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Anti-Liquidation Cooldown Bypass — DeFi Protocol",
    program: "Programa privado",
    platform: "Bugrap",
    severity: "Critical",
    year: "2026",
    description:
      "Vulnerabilidad crítica en el mecanismo anti-liquidación de un protocolo DeFi en Arbitrum. Una llamada con valor cero reseteaba el cooldown de liquidación sin transferir activos, permitiendo bloquear indefinidamente la liquidación de posiciones subcapitalizadas.",
    impact:
      "Un atacante podía mantener una posición subcapitalizada fuera del alcance de los liquidadores de forma indefinida a un coste trivial (~$1.44/día). Reporte aprobado pero pendiente de resolución.",
    tags: [
      "Solidity",
      "DeFi",
      "Smart Contract",
      "Arbitrum",
      "Liquidation",
      "Bugrap",
    ],
    screenshot: `${import.meta.env.BASE_URL}screenshots/sumer.PNG`,
    emoji: "🔐",
  },
  {
    id: 2,
    title: "Unauthenticated Access to Internal Automation Panel",
    program: "Vodafone DE",
    platform: "HackerOne",
    severity: "Medium",
    year: "2026",
    description:
      "Panel de automatización interna expuesto públicamente sin ningún tipo de autenticación. Descubierto mediante recon en subdominios de *.vodafone.com. Reportado a través de HackerOne y confirmado como resuelto por el equipo de Vodafone DE.",
    impact:
      "Acceso completo a funciones administrativas críticas sin credenciales: gestión de procesos internos, operaciones destructivas sobre base de datos y potencial exposición de datos de clientes.",
    tags: ["Missing Auth", "CWE-306", "Recon", "Subdomain", "HackerOne"],
    screenshot: `${import.meta.env.BASE_URL}screenshots/vodafone-resolved.png`,
    emoji: "🤖",
  },
  {
    id: 3,
    title: "Host Header Injection with Open Redirect",
    program: "NASA",
    platform: "Bugcrowd",
    severity: "Info",
    year: "2025",
    description:
      "Subdominio de *.nasa.gov construía URLs de redirección usando el valor del header Host sin validación, permitiendo redirigir usuarios a dominios externos arbitrarios.",
    impact:
      "Phishing usando URLs aparentemente legítimas bajo el dominio nasa.gov. Cerrado como Informational por Bugcrowd al no poder demostrarse impacto adicional encadenado.",
    tags: ["Open Redirect", "Header Injection", "NASA", "Bugcrowd"],
    screenshot: `${import.meta.env.BASE_URL}screenshots/nasa.PNG`,
    emoji: "🚀",
  },
  {
    id: 4,
    title: "Invitaciones a programas privados de Bug Bounty",
    program: "Programas privados",
    platform: "Bugcrowd",
    severity: "Info",
    year: "2023",
    description:
      "Invitado a 2 programas privados de Bug Bounty en Bugcrowd pertenecientes a empresas del sector automovilístico y financiero. Las invitaciones privadas se conceden a researchers con historial demostrado de calidad en sus reportes.",
    impact:
      "Acceso exclusivo a programas con menor competencia y mayor superficie de ataque, reservados para un grupo reducido de investigadores seleccionados por la plataforma.",
    tags: ["Bug Bounty", "Bugcrowd", "Privado", "Invitación"],
    screenshot: `${import.meta.env.BASE_URL}screenshots/invitaciones.PNG`,
    emoji: "🎯",
  },
];

// ── Stats ──────────────────────────────────────────────────────────────────

const severityColors: Record<string, string> = {
  critical: "#ef4444",
  high: "#f97316",
  medium: "#eab308",
  low: "#22c55e",
  info: "#3b82f6",
};

// ── Subcomponent: imagen con fallback a placeholder ────────────────────────

const CardThumbnail = ({
  screenshot,
  title,
  emoji,
}: {
  screenshot?: string;
  title: string;
  emoji?: string;
}) => {
  const [imgError, setImgError] = useState(false);

  if (screenshot && !imgError) {
    return (
      <CardImageInner>
        <CardImage
          src={screenshot}
          alt={`Screenshot: ${title}`}
          onError={() => setImgError(true)}
        />
      </CardImageInner>
    );
  }

  return (
    <CardImageInner>
      <ImagePlaceholder>
        <span style={{ fontSize: "3rem" }}>{emoji || "🛡️"}</span>
      </ImagePlaceholder>
    </CardImageInner>
  );
};

// ── Component ──────────────────────────────────────────────────────────────

const Achievements = () => {
  const [selected, setSelected] = useState<Achievement | null>(null);

  const counts = achievements.reduce(
    (acc, a) => {
      const key = a.severity.toLowerCase();
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  const stats = [
    { label: "Total", value: achievements.length, color: theme.colors.accent },
    {
      label: "Critical",
      value: counts.critical || 0,
      color: severityColors.critical,
    },
    { label: "High", value: counts.high || 0, color: severityColors.high },
    {
      label: "Medium",
      value: counts.medium || 0,
      color: severityColors.medium,
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <AchievementsSection
        id="achievements"
        role="region"
        aria-label="Security Achievements"
      >
        <div className="container">
          <SectionTitle
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Security Research
          </SectionTitle>

          {/* <StatsRow>
            {stats.map((s) => (
              <StatCard
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <StatNumber color={s.color}>{s.value}</StatNumber>
                <StatLabel>{s.label}</StatLabel>
              </StatCard>
            ))}
          </StatsRow> */}

          <Grid>
            {achievements.map((a, i) => (
              <Card
                key={a.id}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                onClick={() => setSelected(a)}
                whileHover={{ y: -5 }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelected(a)}
                aria-label={`Ver detalles: ${a.title}`}
              >
                <CardImageWrapper>
                  <CardThumbnail
                    screenshot={a.screenshot}
                    title={a.title}
                    emoji={a.emoji}
                  />
                  <SeverityBadge severity={a.severity}>
                    {a.severity}
                  </SeverityBadge>
                </CardImageWrapper>

                <CardBody>
                  <CardTitle>{a.title}</CardTitle>
                  <CardMeta>
                    <span>{a.program}</span>
                    <MetaDot />
                    <span>{a.platform}</span>
                    <MetaDot />
                    <span>{a.year}</span>
                  </CardMeta>
                  <CardDesc>{a.description}</CardDesc>
                  <TagRow>
                    {a.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </TagRow>
                  <ViewMore>
                    <FaSearch size={10} />
                    Ver detalles
                  </ViewMore>
                </CardBody>
              </Card>
            ))}
          </Grid>
        </div>
      </AchievementsSection>

      <AnimatePresence>
        {selected && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <Modal
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={selected.title}
            >
              <ModalImage>
                {selected.screenshot ? (
                  <img
                    src={selected.screenshot}
                    alt={`Screenshot: ${selected.title}`}
                  />
                ) : (
                  <ImagePlaceholder style={{ aspectRatio: "16/9" }}>
                    <span style={{ fontSize: "4rem" }}>
                      {selected.emoji || "🛡️"}
                    </span>
                  </ImagePlaceholder>
                )}
                <CloseBtn onClick={() => setSelected(null)} aria-label="Cerrar">
                  <FaTimes size={14} />
                </CloseBtn>
                <SeverityBadge
                  severity={selected.severity}
                  style={{ top: 16, right: 16 }}
                >
                  {selected.severity}
                </SeverityBadge>
              </ModalImage>

              <ModalBody>
                <ModalTitle>{selected.title}</ModalTitle>
                <ModalMeta>
                  <span>🎯 {selected.program}</span>
                  <span>📋 {selected.platform}</span>
                  <span>📅 {selected.year}</span>
                </ModalMeta>

                <ModalSection>
                  <ModalSectionTitle>Descripción</ModalSectionTitle>
                  <ModalDescription>{selected.description}</ModalDescription>
                </ModalSection>

                <ModalSection>
                  <ModalSectionTitle>Impacto</ModalSectionTitle>
                  <ModalImpact>{selected.impact}</ModalImpact>
                </ModalSection>

                <TagRow style={{ marginBottom: theme.spacing.lg }}>
                  {selected.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </TagRow>

                {selected.reportUrl && (
                  <ReportLink
                    href={selected.reportUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt size={12} />
                    Ver reporte
                  </ReportLink>
                )}
              </ModalBody>
            </Modal>
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default Achievements;
