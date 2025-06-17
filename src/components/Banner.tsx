import { Box } from "@mui/material";
import Header from "./header";
import {
    Button,
    Typography,
    Container,
    Rating,
    Paper,
    Chip,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import assets from "../assets";
import  { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Banner = () => {
    const rightContainer = useRef<HTMLDivElement | null>(null);

    useGSAP(
        () => {
            gsap.to(".background_effect", {
                width: "700px",
                height: "700px",
            });
            gsap.fromTo('.exp_badge', {
                scale: 0
            }, { scale: 1 ,duration:0.5, delay:0.3})
        },
        { scope: rightContainer }
    );


    return (
        <Box sx={{ bgcolor: "background.default" }}>
            <Header />
            <Container maxWidth="lg" sx={{ mt: 6 }}>
                <Box sx={{ display: "flex", alignItems: "center", minHeight: "75vh" }}>
                    {/* Left Content */}
                    <Box sx={{ flex: 1, pr: 4 }}>
                        {/* Hello Chip */}
                        <Chip
                            label="Hello!"
                            sx={{
                                bgcolor: "white",
                                border: "2px solid #E0E0E0",
                                borderRadius: "20px",
                                mb: 3,
                                fontSize: "1rem",
                                px: 2,
                                py: 1,
                                height: "auto",
                                "&::after": {
                                    content: '""',
                                    position: "absolute",
                                    bottom: "-8px",
                                    left: "20px",
                                    width: 0,
                                    height: 0,
                                    borderLeft: "8px solid transparent",
                                    borderRight: "8px solid transparent",
                                    borderTop: "8px solid white",
                                },
                                position: "relative",
                            }}
                        />

                        {/* Main Heading */}
                        <Typography
                            variant="h1"
                            sx={{
                                mb: 4,
                                color: "#2C2C2C",
                                "& .highlight": {
                                    color: "primary.main",
                                },
                            }}
                        >
                            I'm <span className="highlight">Soumyadip</span>,<br />
                            Product Designer
                        </Typography>

                        {/* Action Buttons */}
                        <Box sx={{ display: "flex", gap: 2, mb: 6 }}>
                            <Button
                                variant="contained"
                                endIcon={<ArrowOutwardIcon />}
                                sx={{
                                    bgcolor: "primary.main",
                                    color: "white",
                                    "&:hover": { bgcolor: "primary.dark" },
                                }}
                            >
                                Portfolio
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{
                                    borderColor: "#2C2C2C",
                                    color: "#2C2C2C",
                                    "&:hover": {
                                        borderColor: "primary.main",
                                        color: "primary.main",
                                    },
                                }}
                            >
                                Hire me
                            </Button>
                        </Box>

                        {/* Testimonial */}
                        <Box sx={{ maxWidth: 400 }}>
                            <Typography
                                variant="h4"
                                sx={{
                                    color: "#2C2C2C",
                                    fontSize: "2rem",
                                    mb: 2,
                                    fontWeight: 300,
                                }}
                            >
                                "
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: "#666",
                                    lineHeight: 1.6,
                                    mb: 1,
                                }}
                            >
                                Jenny's Exceptional product design ensure our website's success.
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: "primary.main",
                                    fontWeight: 600,
                                }}
                            >
                                Highly Recommended
                            </Typography>
                        </Box>
                    </Box>

                    {/* Right Content - Photo and Stats */}
                    <Box
                        ref={rightContainer}
                        sx={{
                            flex: 1,
                            position: "relative",
                            textAlign: "center",
                            // '.show': {
                            //     width: "700px",
                            //     height: '600px',

                            // }
                        }}
                    >
                        <Box
                            component="img"
                            className="background_effect"
                            src={assets.banner_bg_effect}
                            width={0}
                            height={0}
                            sx={{
                                objectFit: "contain",
                                position: "absolute",
                                bottom: "0",
                                left: "50%",
                                transform: "translateX(-50%)",
                                transition: "all 1s ease-in-out",
                            }}
                        />
                        {/* Orange Circle Background */}
                        <Box
                            sx={{
                                width: 400,
                                height: 400,
                                borderRadius: "50%",
                                bgcolor: "primary.main",
                                position: "relative",
                                mx: "auto",
                                display: "flex",
                                alignItems: "flex-start", // Changed from "flex-end" to "flex-start"
                                justifyContent: "center",
                                overflow: "visible",
                            }}
                        >
                            <Box
                                component="img"
                                src={assets.my_image}
                                alt="Jenny - Product Designer"
                                sx={{
                                    height: "105%",
                                    width: "auto",
                                    objectFit: "cover",
                                    objectPosition: "center bottom", // Changed from "center bottom" to "center top"
                                    transform: "translateY(-20%)", // Optional: adds extra pop-out effect from top
                                }}
                            />
                        </Box>

                        {/* Experience Badge */}
                        <Paper
                            elevation={3}
                            className="exp_badge"
                            sx={{
                                position: "absolute",
                                bottom: 0,
                                left: "50%",
                                transform: "translateX(-50%)",
                                p: 1.5,
                                borderRadius: "20px",
                                textAlign: "center",
                                bgcolor: "white",
                                width: "58%",
                            }}
                        >
                            <Rating value={5} readOnly size="small" sx={{ mb: 1 }} />
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 700,
                                    color: "#2C2C2C",
                                    mb: 0.5,
                                    fontFamily: "Lufga Semibold",
                                }}
                            >
                                10 Years
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: "#666",
                                    fontWeight: 500,
                                }}
                            >
                                Experience
                            </Typography>
                        </Paper>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Banner;
