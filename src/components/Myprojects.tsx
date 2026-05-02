"use client"
import { Box, Container, Typography, Button, Card, IconButton, Chip } from "@mui/material"
import { useRef, useState } from "react"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import LaunchIcon from "@mui/icons-material/Launch"
import GitHubIcon from "@mui/icons-material/GitHub"
import assets from "../assets"
import PreviewModal from "./PreviewModal"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: 1,
    title: "Next JS Weather App",
    description:
      "A comprehensive dashboard for managing online store operations with real-time analytics, inventory management, and customer insights. Built with modern React architecture and featuring responsive design, this platform helps businesses streamline their operations and make data-driven decisions.",
    image: assets.weather_app_video,
    technologies: ["Next JS", "TypeScript", "Tailwind CSS",],
    liveLink: "https://weather-app-amber-three-48.vercel.app/",
    githubLink: "https://github.com/Soumyadip-62/weather-app",
    category: "Web Application",
    year: "2023",
  },
  {
    id: 2,
    title: "Realtime Chat App",
    description:
      "Secure and user-friendly mobile banking application with biometric authentication, transaction history, and budget tracking features. The app prioritizes security while maintaining an intuitive user experience, making financial management accessible to everyone.",
    image: assets.chat_app_video,
    technologies: ["Next JS", "TypeScript", "Material UI", "Firebase", "Redux", "Stripe", "Expo"],
    liveLink: "https://chat-app-2024-pink.vercel.app/",
    githubLink: "https://github.com/Soumyadip-62/chat-app-2024",
    category: "Web Application",
    year: "2024",
  },
  {
    id: 3,
    title: "Achintya",
    description:
      "A demo preview for the Achintya project, highlighting the core product experience, interface flow, and polished web interactions.",
    image: assets.achintya_demo_video,
    technologies: ["React", "TypeScript", "Material UI"],
    category: "Web Application",
    year: "2026",
  },
  // {
  //   id: 3,
  //   title: "Task Management Platform",
  //   description:
  //     "Collaborative project management tool with team collaboration features, deadline tracking, and progress visualization. This platform enhances team productivity through intuitive task organization and real-time collaboration capabilities.",
  //   image: "/placeholder.svg?height=400&width=700",
  //   technologies: ["Vue.js", "Express", "MongoDB", "Socket.io", "Docker"],
  //   liveLink: "https://example.com",
  //   githubLink: "https://github.com/example",
  //   category: "Web Application",
  //   year: "2023",
  // },
  // {
  //   id: 4,
  //   title: "AI-Powered Analytics",
  //   description:
  //     "Machine learning platform that provides predictive analytics and data visualization for business intelligence. The system processes large datasets to deliver actionable insights through beautiful, interactive dashboards.",
  //   image: "/placeholder.svg?height=400&width=700",
  //   technologies: ["Python", "TensorFlow", "React", "D3.js", "AWS"],
  //   liveLink: "https://example.com",
  //   githubLink: "https://github.com/example",
  //   category: "AI/ML",
  //   year: "2023",
  // },
]

export default function ProjectsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [openPreviewModal, setopenPreviewModal] = useState(false)
  const sectionRef = useRef<HTMLDivElement | null>(null)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const currentProject = projects[currentSlide]

  useGSAP(() => {
    gsap.fromTo(
      ".projects-heading > *",
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-heading",
          start: "top 84%",
          toggleActions: "play none none reverse",
        },
      }
    )

    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 56, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.95,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".project-card",
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      }
    )
  }, { scope: sectionRef })

  useGSAP(() => {
    gsap.fromTo(
      ".project-media",
      { opacity: 0, x: -32, scale: 1.03 },
      { opacity: 1, x: 0, scale: 1, duration: 0.65, ease: "power3.out" }
    )

    gsap.fromTo(
      ".project-copy > *",
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.055, ease: "power2.out" }
    )
  }, { scope: sectionRef, dependencies: [currentSlide] })

  return (
    <Box
      ref={sectionRef}
      sx={{
        bgcolor: "#1A1A1A",
        py: { md: 8, xs: 5 },

        position: "relative",
        overflow: "hidden",
      }}
      id="projects"
    >
      {/* Background Gradient */}
      <Box
        className="project-ambient"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 20% 10%, rgba(255, 107, 53, 0.16), transparent 30%), linear-gradient(135deg, #1A1A1A 0%, #2C2C2C 100%)",
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <Box className="projects-heading" sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 3,
              color: "white",
              fontWeight: 700,
              "& .highlight": {
                color: "#FF6B35",
              },
            }}
          >
            Featured <span className="highlight">Projects</span>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              maxWidth: 600,
              mx: "auto",
              lineHeight: 1.6,
              fontSize: "1.1rem",
            }}
          >
            Explore my latest work showcasing innovative solutions and cutting-edge technologies
          </Typography>
        </Box>

        {/* Main Project Card */}
        <Box sx={{ position: "relative", mb: 6 }}>
          <Card
            className="project-card"
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "24px",
              overflow: "hidden",
              transition: "all 0.6s ease",
              maxWidth: 1200,
              mx: "auto",
              boxShadow: "0 28px 90px rgba(0, 0, 0, 0.32)",
              "&:hover": {
                transform: "translateY(-8px)",
                borderColor: "rgba(255, 107, 53, 0.35)",
                boxShadow: "0 38px 110px rgba(0, 0, 0, 0.45)",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                minHeight: { lg: 500 },
              }}
            >
              {/* Project Image */}
              <Box
                className="project-media"
                sx={{
                  flex: { lg: 1.2 },
                  position: "relative",
                  minHeight: { xs: 300, lg: 500 },
                  cursor: "pointer",
                }}
                onClick={() => setopenPreviewModal(true)}
              >


                {/* <Box
                  sx={{
                   
                    // backgroundImage: `url(${currentProject.image})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    transition: "all 0.6s ease",
                    backgroundRepeat: 'no-repeat',
                    cursor: "pointer",
                  }}
                  className="absolute"

                > */}
                <video className="project-video" key={currentProject.id} autoPlay loop muted playsInline width={'100%'} height={'100%'}>
                  <source src={currentProject.image} type="video/mp4" />
                </video>
                {/* </Box> */}

                {/* Overlay Gradient */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(45deg, rgba(255, 107, 53, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%)",
                  }}
                />

                {/* Category & Year Badge */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 24,
                    left: 24,
                    display: "flex",
                    gap: 1,
                  }}
                >
                  <Chip
                    label={currentProject.category}
                    sx={{
                      bgcolor: "#FF6B35",
                      color: "white",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                    }}
                  />
                  <Chip
                    label={currentProject.year}
                    sx={{
                      bgcolor: "rgba(255, 255, 255, 0.2)",
                      color: "white",
                      fontWeight: 500,
                      backdropFilter: "blur(10px)",
                    }}
                  />
                </Box>
              </Box>

              {/* Project Content */}
              <Box
                className="project-copy"
                sx={{
                  flex: 1,
                  p: { xs: 2, lg: 6, sm: 4 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: "white",
                    fontWeight: 700,
                    mb: 3,
                    fontSize: { xs: "2rem", lg: "2.5rem" },
                  }}
                >
                  {currentProject.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    lineHeight: 1.7,
                    mb: 4,
                    fontSize: "1.1rem",
                  }}
                >
                  {currentProject.description}
                </Typography>

                {/* Technologies */}
                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "#FF6B35",
                      fontWeight: 600,
                      mb: 2,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                    }}
                  >
                    Technologies Used
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1.5,
                    }}
                  >
                    {currentProject.technologies.map((tech, index) => (
                      <Chip
                        key={index}
                        label={tech}
                        sx={{
                          bgcolor: "rgba(255, 255, 255, 0.1)",
                          color: "white",
                          fontWeight: 500,
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                          "&:hover": {
                            bgcolor: "rgba(255, 107, 53, 0.2)",
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Box>

                {/* Action Buttons */}
                {(currentProject.liveLink || currentProject.githubLink) && (
                  <Box
                    sx={{
                      display: "flex",
                      gap: 3,
                      flexDirection: { xs: "column", sm: "row" },
                    }}
                  >
                    {currentProject.liveLink && (
                      <Button
                        variant="contained"
                        startIcon={<LaunchIcon />}
                        href={currentProject.liveLink}
                        target="_blank"
                        sx={{
                          bgcolor: "#FF6B35",
                          color: "white",
                          borderRadius: "12px",
                          px: 3,
                          py: 1.5,
                          fontSize: "1rem",
                          fontWeight: 600,
                          "&:hover": {
                            bgcolor: "#E55A2B",
                            transform: "translateY(-2px)",
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        View Live Project
                      </Button>
                    )}
                    {currentProject.githubLink && (
                      <Button
                        variant="outlined"
                        startIcon={<GitHubIcon />}
                        href={currentProject.githubLink}
                        target="_blank"
                        sx={{
                          borderColor: "rgba(255, 255, 255, 0.3)",
                          color: "white",
                          borderRadius: "12px",
                          px: 3,
                          py: 1.5,
                          fontSize: "1rem",
                          fontWeight: 500,
                          "&:hover": {
                            borderColor: "#FF6B35",
                            bgcolor: "rgba(255, 107, 53, 0.1)",
                            transform: "translateY(-2px)",
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        View Code
                      </Button>
                    )}
                  </Box>
                )}
              </Box>
            </Box>
          </Card>

          {/* Navigation Arrows */}
          <IconButton
            onClick={prevSlide}
            sx={{
              position: "absolute",
              left: { xs: 10, lg: -30 },
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              color: "white",
              width: 56,
              height: 56,
              "&:hover": {
                bgcolor: "#FF6B35",
                transform: "translateY(-50%) scale(1.1)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>

          <IconButton
            onClick={nextSlide}
            sx={{
              position: "absolute",
              right: { xs: 10, lg: -30 },
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              color: "white",
              width: 56,
              height: 56,
              "&:hover": {
                bgcolor: "#FF6B35",
                transform: "translateY(-50%) scale(1.1)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>

        {/* Project Navigation Dots */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            mb: 4,
          }}
        >
          {projects.map((_, index) => (
            <Box
              key={index}
              onClick={() => goToSlide(index)}
              sx={{
                width: currentSlide === index ? 40 : 12,
                height: 12,
                borderRadius: "6px",
                bgcolor: currentSlide === index ? "#FF6B35" : "rgba(255, 255, 255, 0.3)",
                cursor: "pointer",
                transition: "all 0.4s ease",
                "&:hover": {
                  bgcolor: currentSlide === index ? "#FF6B35" : "rgba(255, 255, 255, 0.5)",
                  transform: "scale(1.1)",
                },
              }}
            />
          ))}
        </Box>

        {/* Project Counter */}
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255, 255, 255, 0.6)",
              fontSize: "1rem",
              fontWeight: 500,
            }}
          >
            {String(currentSlide + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </Typography>
        </Box>
      </Container>
      <PreviewModal openPreviewModal={openPreviewModal} setopenPreviewModal={setopenPreviewModal} previewImage={currentProject.image} />
    </Box>
  )
}
