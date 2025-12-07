"use client"
import { Box, Container, Typography, Button, IconButton, Avatar, Divider } from "@mui/material"
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import { MailRounded, Phone } from "@mui/icons-material"
import assets from "../assets"

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Project", href: "#projects" },
]

const contactInfo = [
  { label: "+91 7001120224", type: "phone" },
  { label: "panditsoumya35@gmail.com", type: "email" },
  // { label: "https://www.linkedin.com/in/soumyadip-pandit-8a2b881a3", type: "linkedin" },
]

const socialLinks = [
  // { icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/soumyadip-pandit-8a2b881a3/", label: "LinkedIn" },
  { icon: WhatsAppIcon, href: "https://wa.me/917001120224", label: "WhatsApp" },
  { icon: MailRounded, href: "https://mailto:panditsoumya35@gmail.com", label: "Email" },
  { icon: Phone, href: "tel:+917001120224", label: "Phone" },


  // { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
  // { icon: TwitterIcon, href: "https://twitter.com", label: "Twitter" },
]

export default function FooterSection() {
  return (
    <Box
      id="contact"
      sx={{
        bgcolor: "#2C2C2C",
        color: "white",
        pt: 6,
        pb: 3,
      }}

    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, md: 0 },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 600,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Lets Connect there
          </Typography>
          <Button
            href="https://www.linkedin.com/in/soumyadip-pandit-8a2b881a3/"
            target="_blank"
            variant="contained"
            endIcon={<ArrowOutwardIcon />}
            sx={{
              bgcolor: "#FF6B35",
              color: "white",
              borderRadius: "25px",
              px: 3,
              py: 1.5,
              fontSize: "1rem",
              fontWeight: 500,
              "&:hover": {
                bgcolor: "#E55A2B",
              },
            }}
          >
            Hire me
          </Button>
        </Box>

        <Divider sx={{ bgcolor: "rgba(255, 255, 255, 0.2)", mb: 4 }} />

        {/* Main Content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, lg: 6 },
            mb: 4,
          }}
        >
          {/* Left Section - Brand & Social */}
          <Box sx={{ flex: 1 }}>
            {/* Logo */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: 2 }}>
              <Avatar
                sx={{
                  bgcolor: "primary.main",
                  width: 32,
                  height: 32,
                  fontSize: "0.875rem",
                }}
                src={assets.faviconLogo}
              >

              </Avatar>
              <Typography variant="h6" textTransform={'uppercase'} sx={{ color: "white", fontWeight: 700, fontFamily: 'Cormorant Garamond' }}>
                Soumyadip
              </Typography>
            </Box>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                lineHeight: 1.6,
                mb: 3,
                maxWidth: 350,
              }}
            >
              Currently open to new opportunities — feel free to connect via Email, WhatsApp, or LinkedIn.
            </Typography>

            {/* Social Media Icons */}
            <Box sx={{ display: "flex", gap: 1 }}>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <IconButton
                    key={index}
                    href={social.href}
                    target="_blank"
                    sx={{
                      bgcolor: "rgba(255, 255, 255, 0.1)",
                      color: "white",
                      width: 40,
                      height: 40,
                      "&:hover": {
                        bgcolor: "#FF6B35",
                      },
                    }}
                  >
                    <IconComponent fontSize="small" />
                  </IconButton>
                )
              })}
            </Box>
          </Box>

          {/* Center Section - Navigation & Contact */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 3, sm: 4 },
            }}
          >
            {/* Navigation */}
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h6"
                sx={{
                  color: "#FF6B35",
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                Navigation
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {navigationLinks.map((link, index) => (
                  <Typography
                    key={index}
                    component="a"
                    href={link.href}
                    sx={{
                      color: "rgba(255, 255, 255, 0.8)",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                      "&:hover": {
                        color: "#FF6B35",
                      },
                      transition: "color 0.3s ease",
                    }}
                  >
                    {link.label}
                  </Typography>
                ))}
              </Box>
            </Box>

            {/* Contact */}
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h6"
                sx={{
                  color: "#FF6B35",
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                Contact
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {contactInfo.map((contact, index) => (
                  <Typography
                    key={index}
                    sx={{
                      color: "rgba(255, 255, 255, 0.8)",
                      fontSize: "0.95rem",
                    }}
                  >
                    {contact.label}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Right Section - Newsletter */}
          {/* <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              sx={{
                color: "#FF6B35",
                fontWeight: 600,
                mb: 2,
              }}
            >
              Get the latest information
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                maxWidth: 300,
              }}
            >
              <TextField
                placeholder="Email Address"
                variant="outlined"
                size="small"
                sx={{
                  flex: 1,
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "8px",
                    "& fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.3)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.5)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#FF6B35",
                    },
                  },
                  "& .MuiOutlinedInput-input": {
                    color: "white",
                    "&::placeholder": {
                      color: "rgba(255, 255, 255, 0.6)",
                    },
                  },
                }}
              />
              <IconButton
                sx={{
                  bgcolor: "#FF6B35",
                  color: "white",
                  borderRadius: "8px",
                  width: 40,
                  height: 40,
                  "&:hover": {
                    bgcolor: "#E55A2B",
                  },
                }}
              >
                <SendIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box> */}
        </Box>

        {/* <Divider sx={{ bgcolor: "rgba(255, 255, 255, 0.2)", mb: 3 }} /> */}

        {/* Footer Bottom */}
        {/* <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 2, md: 0 },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255, 255, 255, 0.6)",
            }}
          >
            Copyright© 2023 Jayesh. All Rights Reserved.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Typography
              component="a"
              href="#terms"
              sx={{
                color: "rgba(255, 255, 255, 0.6)",
                textDecoration: "none",
                fontSize: "0.875rem",
                "&:hover": {
                  color: "#FF6B35",
                },
              }}
            >
              User Terms & Conditions
            </Typography>
            <Typography sx={{ color: "rgba(255, 255, 255, 0.6)" }}>|</Typography>
            <Typography
              component="a"
              href="#privacy"
              sx={{
                color: "rgba(255, 255, 255, 0.6)",
                textDecoration: "none",
                fontSize: "0.875rem",
                "&:hover": {
                  color: "#FF6B35",
                },
              }}
            >
              Privacy Policy
            </Typography>
          </Box>
        </Box> */}
      </Container>
    </Box>
  )
}
