/* eslint-disable @typescript-eslint/no-unused-vars */

import htmlLogo from "/assets/images/Logos/html5-without-wordmark-color.svg";
import cssLogo from "/assets/images/Logos/css-3-seeklogo.com.svg";
import JsLogo from "/assets/images/Logos/javascript-seeklogo.com.svg";
import ReactLogo from '/assets/images/Logos/reactjs-icon.svg'
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
import { Box, styled } from '@mui/material';

const TechStacks = () => {
  return (
    <StyledtechStacks>
      <Marquee autoFill>
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



    </StyledtechStacks>
  )
}

export default TechStacks

const StyledtechStacks = styled(Box)`
padding: 40px 0;

  img{
    width: 70px;
    height: auto;
    margin: 0 20px;
    object-fit: contain;
  }
`
