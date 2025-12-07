import { AppBar, Avatar, Box, Button, Container, Drawer, IconButton, List, ListItem, Paper, Toolbar, Typography } from '@mui/material'

import assets from '../assets'
import { Menu } from '@mui/icons-material'
import { useState } from 'react';

const DrawerList = (
  <Box sx={{
    width: 250, li: {
      py: 0.5,
      a: {
        padding: '6px 12px',
        justifyContent: 'flex-start',
        width: '100%',
        borderRadius: '8px'
      },
      button: {
        padding: '6px 12px',
        justifyContent: 'flex-start',
        width: '100%',
        borderRadius: '8px'


      }
    }
  }} role="presentation" >

    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
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
    <List>
      <ListItem disablePadding>
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
      </ListItem>
      <ListItem disablePadding>
        <Button key="About" href='#about' sx={{ color: "white", }}>
          About
        </Button>
      </ListItem>
      <ListItem disablePadding>
        <Button key="Experience" href='#experience' sx={{ color: "white", }}>
          Experience
        </Button>
      </ListItem>
      <ListItem disablePadding>

        <Button key="Resume" sx={{ color: "white", }} href={assets.resume} target="_blank" download>
          Resume
        </Button>
      </ListItem>

      <ListItem disablePadding>

        <Button key="Project" href='#projects' sx={{ color: "white", }}>
          Project
        </Button>
      </ListItem>
      <ListItem disablePadding>

        <Button key="Contact" href='#contact' sx={{ color: "white", }}>
          Contact
        </Button>
      </ListItem>


    </List>
  </Box>
);

const Header = () => {

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="relative"
      elevation={0}
      sx={{
        bgcolor: "transparent",
        pt: 2,
        zIndex: 99,
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
          <Toolbar sx={{ justifyContent: "space-between", minHeight: "60px !important", padding: '0 !important' }}>
            <Box sx={{ display: { xs: 'none', md: "flex" }, gap: 1 }}>
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

            <Box sx={{ display: { xs: 'none', md: "flex" }, gap: 1 }}>
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

            <Box sx={{
              display: { xs: 'flex', md: "none" },
            }}>
              <IconButton onClick={toggleDrawer(true)}>
                <Menu color='primary' />
              </IconButton>
            </Box>
          </Toolbar>
        </Paper>
      </Container>

      <Drawer open={open} anchor='right' onClose={toggleDrawer(false)} slotProps={{
        paper: {
          sx: {
            background: '#2C2C2C',
            padding: 2
          }
        }
      }}>
        {DrawerList}
      </Drawer>
    </AppBar>
  )
}

export default Header
