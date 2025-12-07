"use client"
import { Box, Container, Typography, Card, CardContent, IconButton, } from "@mui/material"
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"

const services = [
  {
    title: "UI/UX Design",
    image: "/placeholder.svg?height=200&width=300",
    description: "Creating intuitive and user-friendly interfaces",
  },
  {
    title: "Web Design",
    image: "/placeholder.svg?height=200&width=300",
    description: "Modern and responsive web solutions",
  },
  {
    title: "Landing Page",
    image: "/placeholder.svg?height=200&width=300",
    description: "High-converting landing page designs",
  },
]

export default function ServicesSection() {
  

  return (
    <Box
      sx={{
        bgcolor: "#1A1A1A",
        py: 8,
        position: "relative",
        overflow: "hidden",
        
      }}
    >
      {/* Decorative Background Shapes */}
      <Box
        sx={{
          position: "absolute",
          top: -50,
          left: -100,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)",
          opacity: 0.1,
          filter: "blur(60px)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 100,
          right: -150,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)",
          opacity: 0.08,
          filter: "blur(80px)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -100,
          left: "50%",
          transform: "translateX(-50%)",
          width: 500,
          height: 300,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)",
          opacity: 0.06,
          filter: "blur(100px)",
        }}
      />

      {/* Diagonal Lines Pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            rgba(255, 255, 255, 0.02) 2px,
            rgba(255, 255, 255, 0.02) 4px
          )`,
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontWeight: 700,
              mb: 3,
              "& .highlight": {
                color: "#FF6B35",
              },
            }}
          >
            My <span className="highlight">Services</span>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              maxWidth: 500,
              lineHeight: 1.6,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate,
            bibendum sodales
          </Typography>
        </Box>

        {/* Services Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 3,
            mb: 4,
          }}
        >
          {services.map((service, index) => (
            <Card
              key={index}
              sx={{
                bgcolor: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "20px",
                overflow: "hidden",
                position: "relative",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  bgcolor: "rgba(255, 255, 255, 0.08)",
                  "& .service-arrow": {
                    bgcolor: "#FF6B35",
                    color: "white",
                  },
                },
              }}
            >
              <CardContent sx={{ p: 0 }}>
                {/* Service Title */}
                <Box sx={{ p: 3, pb: 2 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {service.title}
                  </Typography>
                </Box>

                {/* Service Preview Image */}
                <Box
                  sx={{
                    height: 200,
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    mx: 2,
                    mb: 2,
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                >
                  {/* Placeholder for actual service images */}
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: "rgba(255, 107, 53, 0.1)",
                      borderRadius: "12px",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "rgba(255, 255, 255, 0.5)",
                        textAlign: "center",
                      }}
                    >
                      {service.description}
                    </Typography>
                  </Box>
                </Box>

                {/* Arrow Button */}
                <Box sx={{ position: "absolute", bottom: 16, right: 16 }}>
                  <IconButton
                    className="service-arrow"
                    sx={{
                      bgcolor: "rgba(255, 255, 255, 0.1)",
                      color: "white",
                      width: 48,
                      height: 48,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        bgcolor: "#FF6B35",
                      },
                    }}
                  >
                    <ArrowOutwardIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Navigation Dots */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1,
          }}
        >
          {[0, 1, 2, 3].map((_dot, index) => (
            <Box
              key={index}
              sx={{
                width: index === 0 ? 24 : 8,
                height: 8,
                borderRadius: "4px",
                bgcolor: index === 0 ? "#FF6B35" : "rgba(255, 255, 255, 0.3)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  bgcolor: index === 0 ? "#FF6B35" : "rgba(255, 255, 255, 0.5)",
                },
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  )
}
