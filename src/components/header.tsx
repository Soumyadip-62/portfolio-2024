import { AppBar, Avatar, Box, Button, Container, Drawer, IconButton, List, ListItem, Paper, Toolbar, Typography } from '@mui/material'

import assets from '../assets'
import { Menu } from '@mui/icons-material'
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

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
  const headerRef = useRef<HTMLDivElement | null>(null);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  useGSAP(() => {
    gsap.fromTo(
      ".site-nav",
      { opacity: 0, y: -24, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" }
    );

    gsap.fromTo(
      ".nav-item",
      { opacity: 0, y: -8 },
      { opacity: 1, y: 0, duration: 0.45, stagger: 0.06, delay: 0.25, ease: "power2.out" }
    );
  }, { scope: headerRef });

  return (
    <AppBar
      position="relative"
      ref={headerRef}
      elevation={0}
      sx={{
        bgcolor: "transparent",
        pt: 2,
        zIndex: 99,
      }}
    >
      <Container maxWidth="lg">
        <Paper
          className="site-nav"
          elevation={3}
          sx={{
            borderRadius: "50px",
            bgcolor: "rgba(44, 44, 44, 0.92)",
            backdropFilter: "blur(18px)",
            px: 2,
            py: 1,
            boxShadow: "0 18px 50px rgba(0,0,0,0.2)",
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between", minHeight: "60px ", padding: '0 !important' }}>
            <Box sx={{ display: { xs: 'none', md: "flex" }, gap: 1 }}>
              <Button
                className="nav-item"
                variant="contained"
                sx={{
                  bgcolor: "primary.main",
                  color: "white",
                  "&:hover": { bgcolor: "primary.dark" },
                }}
              >
                Home
              </Button>
              <Button className="nav-item" key="About" href='#about' sx={{ color: "white", "&:hover": { bgcolor: "rgba(255,255,255,0.1)" } }}>
                About
              </Button>
              <Button className="nav-item" key="Experience" href='#experience' sx={{ color: "white", "&:hover": { bgcolor: "rgba(255,255,255,0.1)" } }}>
                Experience
              </Button>
            </Box>

            <Box className="nav-item" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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
              <Button className="nav-item" key="Resume" sx={{ color: "white", "&:hover": { bgcolor: "rgba(255,255,255,0.1)" } }} href={assets.resume} target="_blank" download>
                Resume
              </Button>
              <Button className="nav-item" key="Project" href='#projects' sx={{ color: "white", "&:hover": { bgcolor: "rgba(255,255,255,0.1)" } }}>
                Project
              </Button>
              <Button className="nav-item" key="Contact" href='#contact' sx={{ color: "white", "&:hover": { bgcolor: "rgba(255,255,255,0.1)" } }}>
                Contact
              </Button>

            </Box>

            <Box sx={{
              display: { xs: 'flex', md: "none" },
            }}>
              <IconButton className="nav-item" onClick={toggleDrawer(true)}>
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
