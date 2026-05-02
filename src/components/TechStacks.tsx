import htmlLogo from "/assets/images/Logos/html5-without-wordmark-color.svg";
import cssLogo from "/assets/images/Logos/css-3-seeklogo.com.svg";
import JsLogo from "/assets/images/Logos/javascript-seeklogo.com.svg";
import ReactLogo from "/assets/images/Logos/reactjs-icon.svg";
import NextLogo from "/assets/images/Logos/next-js-seeklogo.com.svg";
import ExpressLogo from "/assets/images/Logos/express-seeklogo.com.svg";
import NodeLogo from "/assets/images/Logos/nodejs-seeklogo.com.svg";
import mongoLogo from "/assets/images/Logos/mongodb-seeklogo.com.svg";
import bootstrapLogo from "/assets/images/Logos/bootstrap-5-seeklogo.com.svg";
import npmLogo from "/assets/images/Logos/npm-seeklogo.com-2.svg";
import githubLogo from "/assets/images/Logos/github-seeklogo.com.svg";
import tailwindLogo from "/assets/images/Logos/tailwind-css-wordmark-seeklogo.com.svg";
import tslogo from "/assets/images/Logos/typescript.svg";
import Marquee from "react-fast-marquee";
import { Box, styled } from "@mui/material";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechStacks = () => {
  const techRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".tech-shell",
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".tech-shell",
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, { scope: techRef });

  return (
    <StyledtechStacks ref={techRef}>
      <Box className="tech-shell">
      <Marquee autoFill pauseOnHover speed={44}>
        <img src={htmlLogo} alt="" />
        <img src={cssLogo} alt="" />
        <img src={JsLogo} alt="" />
        <img src={ReactLogo} alt="" />
        <img src={NextLogo} alt="" />
        <img src={ExpressLogo} alt="" />
        <img src={NodeLogo} alt="" />
        <img src={mongoLogo} alt="" />
        <img src={bootstrapLogo} alt="" />
        <img src={npmLogo} alt="" />
        <img src={githubLogo} alt="" />
        <img src={tailwindLogo} alt="" />
        <img src={tslogo} alt="" />
      </Marquee>
      </Box>
    </StyledtechStacks>
  );
};

export default TechStacks;

const StyledtechStacks = styled(Box)`
  padding: 42px 0;
  background-color: #ffffff;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 120px;
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  }

  &::after {
    right: 0;
    background: linear-gradient(270deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  }

  .tech-shell {
    opacity: 0;
  }

  @media (max-width: 599px) {
    padding: 20px 0;

    &::before,
    &::after {
      width: 48px;
    }
  }

  img {
    width: 70px;
    height: auto;
    margin: 0 20px;
    object-fit: contain;
    filter: saturate(0.85);
    transition: transform 0.3s ease, filter 0.3s ease;

    &:hover {
      filter: saturate(1.15);
      transform: translateY(-6px) scale(1.04);
    }

    @media(max-width:599px){
      width:50px;
    }
  }
`;
