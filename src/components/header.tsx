import { AppBar, Avatar, Box, Button, Container, Paper, Toolbar, Typography } from '@mui/material'

import assets from '../assets'

const Header = () => {
  return (
    <AppBar
      position="relative"
      elevation={0}
      sx={{
        bgcolor: "transparent",
        pt: 2,
        zIndex: 99
      }}
    >
      <Container maxWidth="xl">
        <Paper
          elevation={3}
          sx={{
            borderRadius: "50px",
            bgcolor: "#2C2C2C",
            px: 2,
            py: 1,
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between", minHeight: "60px !important" }}>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "primary.main",
                  color: "white",
                  "&:hover": { bgcolor: "primary.dark" },
                }}
              >
                Home
              </Button>
              <Button key="About" href='#about' sx={{ color: "white", "&:hover": { bgcolor: "rgba(255,255,255,0.1)" } }}>
                About
              </Button>
              <Button key="Experience" href='#experience' sx={{ color: "white", "&:hover": { bgcolor: "rgba(255,255,255,0.1)" } }}>
                Experience
              </Button>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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

            <Box sx={{ display: "flex", gap: 1 }}>
              <Button key="Resume" sx={{ color: "white", "&:hover": { bgcolor: "rgba(255,255,255,0.1)" } }} href={assets.resume} target="_blank" download>
                Resume
              </Button>
              <Button key="Project" href='#projects' sx={{ color: "white", "&:hover": { bgcolor: "rgba(255,255,255,0.1)" } }}>
                Project
              </Button>
              <Button key="Contact" href='#contact' sx={{ color: "white", "&:hover": { bgcolor: "rgba(255,255,255,0.1)" } }}>
                Contact
              </Button>

            </Box>
          </Toolbar>
        </Paper>
      </Container>
    </AppBar>
  )
}

export default Header
