"use client"
import { Box, Container, Typography, Button } from "@mui/material"
import assets from "../assets"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    number: "3.5+",
    label: "Years of Experience",
  },
  {
    number: "50+",
    label: "Project Completed",
  },
]


export default function HireMeSection() {

  const ImageRef = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {
    gsap.to('.img', {
      translateY: '20px', delay: 0.5, scrollTrigger: {
        trigger: ".img",
        start: "top 80%", // when .img top hits 80% of viewport height
        toggleActions: "play none reverse none",
      }
    });
    gsap.to('.bg_ring', {
      width: '500px',
      height: '500px',
      delay: 0.3,
      scrollTrigger: {
        trigger: ".bg_ring",
        start: "top 80%",
        toggleActions: "play none reverse none",
      }
    })

  }, { scope: ImageRef })

  return (
    <Box
      sx={{
        bgcolor: "#F2F4F7",
        py: 15,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* Left Side - Image */}
          <Box
            sx={{
              flex: { md: 1 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Orange Circle Background */}
            <Box ref={ImageRef} sx={{
              position: 'relative',

            }}>
              <img src={assets.bg_ring} alt="background_ring" className="bg_ring" style={{
                width: 0,
                height: 0,
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translate(-50%)'
              }} />
              <Box
                className='img'
                sx={{
                  width: { xs: 300, md: 400 },
                  height: { xs: 300, md: 400 },
                  borderRadius: "50px",
                  background: "linear-gradient(135deg, #FF6B35 0%, #FFD166 100%)",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                {/* Professional Photo */}

                <Box
                  component="img"
                  src={assets.my_image2}
                  alt="Professional photo - Why hire me"
                  sx={{
                    width: "93%",
                    height: "93%",
                    objectFit: "cover",
                    objectPosition: "top",
                    borderRadius: "50px",
                  }}
                />
              </Box>
            </Box>
          </Box>

          {/* Right Side - Content */}
          <Box
            sx={{
              flex: { md: 1 },
              pl: { md: 4 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {/* Heading */}
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                color: "#2C2C2C",
                fontWeight: 700,
                "& .highlight": {
                  color: "#FF6B35",
                },
              }}
            >
              Why <span className="highlight">Hire me</span>?
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                color: "#666",
                lineHeight: 1.6,
                mb: 4,
                maxWidth: { xs: "100%", md: 600 },
                mx: { xs: "auto", md: 0 },
              }}
            >
              With 3.5 years of experience in front-end development, I bring a strong command of React, JavaScript, and modern design principles to deliver efficient, user-centered solutions. I focus on creating functional and visually consistent interfaces that enhance usability and align with business goals. My commitment to collaboration, problem-solving, and continuous improvement helps drive high-quality project outcomes.
            </Typography>

            {/* Statistics */}
            <Box
              sx={{
                display: "flex",
                gap: 4,
                mb: 4,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              {stats.map((stat, index) => (
                <Box key={index}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: "#2C2C2C",
                      fontWeight: 700,
                      mb: 1,
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#666",
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Hire Me Button */}
            <Button
              href="https://www.linkedin.com/in/soumyadip-pandit-8a2b881a3/"
              target="_blank"
              variant="outlined"
              size="large"
              sx={{
                borderColor: "#2C2C2C",
                color: "#2C2C2C",
                borderRadius: "25px",
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                fontWeight: 500,
                "&:hover": {
                  borderColor: "#FF6B35",
                  color: "#FF6B35",
                  bgcolor: "rgba(255, 107, 53, 0.05)",
                },
              }}
            >
              Hire me
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
