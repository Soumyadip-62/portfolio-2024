import { AppBar, Avatar, Box, Button, Container, Paper, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
     <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            pt: 2,
          }}
        >
          <Container maxWidth="lg">
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
                  {["About", "Service"].map((item) => (
                    <Button key={item} sx={{ color: "white", "&:hover": { bgcolor: "rgba(255,255,255,0.1)" } }}>
                      {item}
                    </Button>
                  ))}
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Avatar
                    sx={{
                      bgcolor: "primary.main",
                      width: 32,
                      height: 32,
                      fontSize: "0.875rem",
                    }}
                  >
                    JC
                  </Avatar>
                  <Typography variant="h6" sx={{ color: "white", fontWeight: 600 }}>
                    JCREA
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", gap: 1 }}>
                  {["Resume", "Project", "Contact"].map((item) => (
                    <Button key={item} sx={{ color: "white", "&:hover": { bgcolor: "rgba(255,255,255,0.1)" } }}>
                      {item}
                    </Button>
                  ))}
                </Box>
              </Toolbar>
            </Paper>
          </Container>
        </AppBar>
  )
}

export default Header
