"use client";
import React, { useEffect, useState } from "react";
// Next
import Image from "next/image";
import Link from "next/link";
// Framer motion
import { motion } from "framer-motion";
// @Mui
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Stack,
  Tab,
  Tabs,
  Tooltip,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
// Iconify
import { Icon } from "@iconify/react";
// assets
import informaWebsitePoster from "@/assets/projects-overview/informa-website.png";
import informaPortalPoster from "@/assets/projects-overview/informa-portal.png";
import coachSamaPoster from "@/assets/projects-overview/coach-sama.png";
import jackmanPoster from "@/assets/projects-overview/jackman.png";
import instaglowingPoster from "@/assets/projects-overview/instaglowing.png";
import siylPoster from "@/assets/projects-overview/siyl.png";
import cairoRunnersPoster from "@/assets/projects-overview/cairo-runners.png";
import cureDentalPoster from "@/assets/projects-overview/cure-dental.png";
import hecPoster from "@/assets/projects-overview/hec.png";
// __Tech icons
import djangoIcon from "@/assets/tech-icons/django.png";
import nextJsIcon from "@/assets/tech-icons/next-js.png";
import postgresqlIcon from "@/assets/tech-icons/postgresql.png";
import pythonIcon from "@/assets/tech-icons/python.png";
import javascriptIcon from "@/assets/tech-icons/js.png";
import nodeJsIcon from "@/assets/tech-icons/nodejs.png";
import awsIcon from "@/assets/tech-icons/aws.png";
import aiIcon from "@/assets/tech-icons/ai.png";
import herokuIcon from "@/assets/tech-icons/heroku.png";
import reactIcon from "@/assets/tech-icons/react.png";
import expoIcon from "@/assets/tech-icons/expo.png";
import firebaseIcon from "@/assets/tech-icons/firebase.png";
import ionicIcon from "@/assets/tech-icons/ionic.svg";

// ------------------------------------------------------------------------------------------------------------------

const ProjectCard = ({
  title,
  projectLink,
  category,
  description,
  projectCover,
  techStackIcons,
  href,
}) => {
  return (
    <Card>
      {/* Project cover */}
      <Box sx={{ position: "relative", width: "100%", height: "35vh" }}>
        <Image layout="fill" objectFit="cover" src={projectCover} alt={title} />
      </Box>
      {/* End project cover */}
      <CardContent>
        <Grid2 container rowSpacing={1}>
          <Grid2 xs={12}>
            <Typography variant="subtitle2" color="primary">
              {category}
            </Typography>
          </Grid2>
          <Grid2 xs={12}>
            <Typography
              component={Link}
              href={projectLink}
              target="__blank"
              variant="h3"
              color="grey.200"
            >
              {title}
            </Typography>
          </Grid2>
          <Grid2>
            <Typography variant="body2" color="grey.400">
              {description}
            </Typography>
          </Grid2>
          <Grid2 xs={12}>
            <Divider sx={{ my: 3 }} variant="middle" />
          </Grid2>
          <Grid2 xs={12}>
            <Typography variant="subtitle2">DEVELOPED WITH :</Typography>
          </Grid2>
          <Grid2 xs={12}>
            <Stack alignItems="center" direction="row" marginTop={1}>
              <Icon
                icon="mdi:heart"
                color="#B01E28"
                style={{ width: 45, height: 45 }}
              />
              <Icon
                sx={{ mx: 4 }}
                icon="ic:baseline-plus"
                style={{ width: 25, height: 25, mx: 2 }}
              />
              <Grid container spacing={4}>
                {techStackIcons?.map((icon) => (
                  <Grid item xs={2}>
                    <Box
                      sx={{
                        position: "relative",
                        height: {
                          xs: "10vh",
                          md: "5vh",
                        },
                        width: {
                          xs: "10vw",
                          md: "5vw",
                        },
                      }}
                    >
                      <Tooltip title={icon.title}>
                        <Image
                          objectFit="contain"
                          layout="fill"
                          src={icon.src}
                        />
                      </Tooltip>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Grid2>
        </Grid2>
      </CardContent>
    </Card>
  );
};

// ------------------------------------------------------------------------------------------------------------------

function ProjectsOverview() {
  const projects = [
    {
      title: "Informa Website",
      projectLink: "https://informa-180.com",
      description: `A bespoke digital platform for Informa, meticulously custom-coded using Next.js and enhanced with Framer Motion. This website stands as a testament to cutting-edge development, seamlessly blending functionality with fluid, motion-driven interactivity. It's a showcase of technical proficiency and creative design, tailored to meet Informa's unique digital needs`,
      category: "WEBSITE",
      projectCover: informaWebsitePoster,
      techStackIcons: [
        {
          title: "Django",
          src: djangoIcon,
          width: "5vw",
          height: "5vh",
        },
        {
          title: "Next Js",
          src: nextJsIcon,
          width: "5vw",
          height: "5vh",
        },
        {
          title: "Postgresql",
          src: postgresqlIcon,
          width: "5vw",
          height: "5vh",
        },
      ],
    },
    {
      title: "Informa Fitness Portal",
      projectLink: "https://informa-portal.vercel.app",
      description: `The Informa Fitness Portal is a groundbreaking fitness and nutrition platform, engineered with a custom algorithm to offer personalized health programs. Developed using a robust stack including React.js, Django, Django REST framework, and Framer Motion, it combines a mobile-friendly interface with a suite of features. Backed by PostgreSQL and AWS for reliability and scalability, this portal redefines user-centric health and fitness solutions.`,
      category: "WEB PORTAL",
      projectCover: informaPortalPoster,
      techStackIcons: [
        {
          title: "Django",
          src: djangoIcon,
          width: "5vw",
          height: "5vh",
        },
        {
          title: "Next Js",
          src: nextJsIcon,
          width: "5vw",
          height: "5vh",
        },
        {
          title: "Postgresql",
          src: postgresqlIcon,
          width: "5vw",
          height: "5vh",
        },
        {
          title: "Amazon web services",
          src: awsIcon,
          width: "5vw",
          height: "5vh",
        },
        {
          title: "AI",
          src: aiIcon,
          width: "5vw",
          height: "5vh",
        },
      ],
    },
    {
      title: "Coach Sama Website",
      projectLink: "https://coachsama.net",
      description: `The Coach Sama Website exemplifies modern, minimalistic design, captivating users with its sleek and eye-catching interface. Integrating a Fawry payment gateway, this site is expertly crafted using Next.js, Django, and Django REST framework. It harmoniously blends Lottie animations into its design, enhancing user engagement. Powered by PostgreSQL, the website offers a seamless, animated, and user-friendly experience for visitors`,
      category: "WEBSITE",
      projectCover: coachSamaPoster,
      techStackIcons: [
        {
          title: "Django",
          src: pythonIcon,
          width: "5vw",
          height: "5vh",
        },
        {
          title: "Next Js",
          src: nextJsIcon,
          width: "5vw",
          height: "5vh",
        },
        {
          title: "Postgresql",
          src: postgresqlIcon,
          width: "5vw",
          height: "5vh",
        },
        {
          title: "Heroku",
          src: herokuIcon,
          width: "5vw",
          height: "5vh",
        },
      ],
    },
    {
      title: "Jackman App",
      projectLink:
        "https://play.google.com/store/apps/details?id=com.bot.jackman",
      description: `The Jackman App is a dynamic solution connecting car dealers with owners, streamlining the process of booking various services. Designed as a cross-platform application with React Native, it ensures seamless usability across devices. Accompanied by a comprehensive dashboard built with React and Django, the app offers an intuitive, efficient interface for both dealers and car owners, revolutionizing the automotive service experience.`,
      category: "Mobile App",
      projectCover: jackmanPoster,
      techStackIcons: [
        {
          title: "Node Js",
          src: nodeJsIcon,
          width: "5vw",
          height: "5vh",
        },
        {
          title: "React Js",
          src: reactIcon,
          width: "5vw",
          height: "5vh",
        },
        {
          title: "Expo",
          src: expoIcon,
          width: "5vw",
          height: "5vh",
        },
        {
          title: "Firebase",
          src: firebaseIcon,
          width: "5vw",
          height: "5vh",
        },
      ],
    },
    {
      title: "Instaglowing",
      projectLink: "https://instaglowing.com",
      description: `Instaglowing is a cutting-edge platform designed with Next.js and Django REST framework, catering to the growing needs of social media presence. It offers a unique service where users can enhance their online visibility by purchasing followers for their social media accounts. This platform combines ease-of-use with reliable functionality, making it an attractive solution for users seeking to boost their digital influence.`,
      category: "WEBSITE",
      projectCover: instaglowingPoster,
      techStackIcons: [
        {
          title: "Next Js",
          src: nextJsIcon,
          width: "5vw",
          height: "5vh",
        },
        {
          title: "Django",
          src: djangoIcon,
          width: "5vw",
          height: "5vh",
        },
        {
          title: "Postgresql",
          src: postgresqlIcon,
          width: "5vw",
          height: "5vh",
        },
      ],
    },
    {
      title: "Stay In Your Lane",
      projectLink: "https://siylcoaching.com",
      description: `Stay In Your Lane is an innovatively designed website, conceptualized around the theme of dual sports lanes, reflected even in its unique split-screen design. Developed using Next.js and Django REST framework, it offers a dynamic user experience with real-time email push notifications. This site stands out for its creative layout, merging thematic design with advanced web technology to engage sports enthusiasts in a novel way.`,
      category: "WEBSITE",
      projectCover: siylPoster,
      techStackIcons: [
        {
          title: "Next Js",
          src: nextJsIcon,
          width: "5vw",
          height: "5vh",
        },
        {
          title: "Django",
          src: djangoIcon,
          width: "5vw",
          height: "5vh",
        },
        {
          title: "Postgresql",
          src: postgresqlIcon,
          width: "5vw",
          height: "5vh",
        },
      ],
    },
    {
      title: "Cairo Runners",
      projectLink: "https://cairorunners.com",
      description: `The Cairo Runners website is a dedicated digital hub for Egypt's renowned running team. This site captures the spirit of the Cairo Runners community, offering an engaging online space for members and enthusiasts alike. It's designed to reflect the energy and passion of the team, serving as a central point for event updates, team information, and community interaction, all while celebrating the vibrant running culture in Egypt.`,
      category: "WEBSITE",
      projectCover: cairoRunnersPoster,
      techStackIcons: [
        {
          title: "Next Js",
          src: nextJsIcon,
          width: "5vw",
          height: "5vh",
        },
        {
          title: "Django",
          src: djangoIcon,
          width: "5vw",
          height: "5vh",
        },
        {
          title: "Amazon Web Services",
          src: awsIcon,
          width: "5vw",
          height: "5vh",
        },
      ],
    },
    {
      title: "Cure Dental",
      projectLink:
        "https://play.google.com/store/apps/details?id=com.disirius.CureDental",
      description: `Cure Dental is a sleek, user-friendly mobile app designed for a leading dental clinic in Egypt. Built with Ionic and FastAPI Python, it offers patients a convenient way to access dental services and information. The app integrates Firebase for efficient push notifications, enhancing patient engagement and communication. This digital solution streamlines the dental care experience, making appointments and information access seamless and straightforward for users.`,
      category: "MOBILE APP",
      projectCover: cureDentalPoster,
      techStackIcons: [
        {
          title: "Python",
          src: pythonIcon,
          width: "5vw",
          height: "5vh",
        },
        {
          title: "Ionic",
          src: ionicIcon,
          width: "5vw",
          height: "5vh",
        },
        {
          title: "Firebase",
          src: firebaseIcon,
          width: "5vw",
          height: "5vh",
        },
      ],
    },
    {
      title: "H.E.C",
      projectLink: "https://www.hollandegyptiancompany.com/",
      description: `H.E.C, an eCommerce website for the renowned Holland Egyptian Company, offers a specialized online shopping experience for pet food in Egypt. This platform is meticulously designed to cater to the needs of pet owners, providing a vast selection of quality pet food products. It combines user-friendly navigation with a secure and efficient shopping process, reflecting the company's commitment to both pet care and customer convenience. H.E.C stands as a digital cornerstone for pet nutrition and care in the region`,
      category: "E-commerce",
      projectCover: hecPoster,
      techStackIcons: [
        {
          title: "Django",
          src: djangoIcon,
          width: "5vw",
          height: "5vh",
        },
        {
          title: "Next Js",
          src: nextJsIcon,
          width: "5vw",
          height: "5vh",
        },
        {
          title: "Firebase",
          src: firebaseIcon,
          width: "5vw",
          height: "5vh",
        },
        {
          title: "Postgresql",
          src: postgresqlIcon,
          width: "5vw",
          height: "5vh",
        },
      ],
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="xl">
        <Grid2 container rowSpacing={3} alignItems="center">
          {/* Projects Filter */}
          <Grid2 xs={12}></Grid2>
          {/* End Projects Filter */}
          {/* Text content */}
          <Grid2 xs={12}>
            <Box
              sx={{ display: "flex", justifyContent: "center", width: "100%" }}
            >
              <Typography color="primary" variant="overline">
                Recent Projects
              </Typography>
            </Box>
          </Grid2>
          <Grid2 xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Typography align="center" variant="h1">
                Crafted with <br />
                <span
                  style={{
                    background: "linear-gradient(to right, #7675FD, #40FFEF)",
                    WebkitBackgroundClip: "text",
                    MozBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Love & Precision
                </span>
              </Typography>
            </Box>
          </Grid2>
          {/* End text content */}
          <Grid item xs={12}>
            <Grid container spacing={4} mt={4}>
              {projects.map((project, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <ProjectCard
                    title={project.title}
                    projectLink={project.projectLink}
                    description={project.description}
                    category={project.category}
                    projectCover={project.projectCover}
                    techStackIcons={project.techStackIcons}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid2>
      </Container>
    </Box>
  );
}

export default ProjectsOverview;
