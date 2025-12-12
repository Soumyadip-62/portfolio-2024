"use client"
import { Box, Container, Typography } from "@mui/material"

const workExperience = [
  {
    company: "Webskitters Technology Solutions, Kolkata",
    period: "July 2023 - Present",
    position: "Frontend Developer",
    description:
      "Develop responsive web applications using React and Next.js to enhance user experience. Collaborate with UX/UI designers to implement design best practices and ensure seamless integration.",
    isActive: true,
  },
  {
    company: "Think Again Lab, Kolkata",
    period: "February 2022 - July 2023",
    position: "Frontend Developer",
    description:
      "Collaborated with stakeholders during development processes to confirm creative proposals and design best practices.Managed full-cycle design tasks, handling all phases from conception to completion while maintaining guidelines throughout.",
    isActive: false,
  },

]

export default function WorkExperienceSection() {
  return (
    <Box
      sx={{
        bgcolor: "#F2F4F7",
        py: { md: 8, xs: 5 },
      }}
      id="experience"
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mb: { sm: 8, xs: 4 },
            color: "#2C2C2C",
            fontWeight: 700,
            "& .highlight": {
              color: "#FF6B35",
            },
          }}
        >
          My <span className="highlight">Work Experience</span>
        </Typography>

        {/* Timeline Container */}
        <Box sx={{ maxWidth: 1000, mx: "auto", position: "relative", display: { xs: 'none', md: 'block' } }}>
          {/* Central Timeline Line */}
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 2,
              background:
                "repeating-linear-gradient(to bottom, #E0E0E0 0, #E0E0E0 6px, transparent 6px, transparent 12px)",
              transform: "translateX(-50%)",
              zIndex: 1,
            }}
          />

          {/* Timeline Items */}
          {workExperience.map((experience, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                mb: index === workExperience.length - 1 ? 0 : 8,
                display: "flex",
                alignItems: "center",
                minHeight: 120,
              }}
            >
              {/* Left Side - Company Info */}
              <Box
                sx={{
                  flex: 1,
                  pr: 4,
                  textAlign: "right",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "#2C2C2C",
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  {experience.company}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666",
                    fontWeight: 400,
                  }}
                >
                  {experience.period}
                </Typography>
              </Box>

              {/* Center - Timeline Dot */}
              <Box
                sx={{
                  position: "relative",
                  zIndex: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    bgcolor: experience.isActive ? "#FF6B35" : "#2C2C2C",
                    border: "4px solid white",
                    boxShadow: "0 0 0 2px #E0E0E0",
                  }}
                />
              </Box>

              {/* Right Side - Position Info */}
              <Box
                sx={{
                  flex: 1,
                  pl: 4,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "#2C2C2C",
                    fontWeight: 600,
                    mb: 2,
                  }}
                >
                  {experience.position}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#666",
                    lineHeight: 1.6,
                    maxWidth: 400,
                  }}
                >
                  {experience.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Mobile Timeline - Stack Layout */}
        <Box sx={{ display: { xs: "block", md: "none" }, maxWidth: 600, mx: "auto" }}>
          {workExperience.map((experience, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                mb: index === workExperience.length - 1 ? 0 : 6,
                pl: 4,
              }}
            >
              {/* Mobile Timeline Line */}
              <Box
                sx={{
                  position: "absolute",
                  left: 8,
                  top: 0,
                  bottom: index === workExperience.length - 1 ? "50%" : 0,
                  width: 2,
                  background:
                    "repeating-linear-gradient(to bottom, #E0E0E0 0, #E0E0E0 6px, transparent 6px, transparent 12px)",
                }}
              />

              {/* Mobile Timeline Dot */}
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  top: 8,
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  bgcolor: experience.isActive ? "#FF6B35" : "#2C2C2C",
                  border: "4px solid white",
                  boxShadow: "0 0 0 2px #E0E0E0",
                }}
              />

              {/* Mobile Content */}
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#2C2C2C",
                    fontWeight: 600,
                    mb: 0.5,
                  }}
                >
                  {experience.company}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666",
                    mb: 1,
                  }}
                >
                  {experience.period}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#2C2C2C",
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  {experience.position}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666",
                    lineHeight: 1.6,
                  }}
                >
                  {experience.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
