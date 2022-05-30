import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs, Container, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import CourseCard from "./CourseCard";
import {
  BannerContainer,
  CourseInfo,
  CourseTitle,
  CourseDescription,
  BestSeller,
  CourseRating,
} from "./Banner.styled";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const Banner = () => {
  return (
    <>
      <div style={{ backgroundColor: "#1C1D1F" }}>
        <Container>
          <BannerContainer>
            <CourseInfo>
              <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
                <Link style={{ textDecoration: "none" }} to={"/"}>
                  Development
                </Link>
                <Link to={"/"}>Programming Languages</Link>
                <Link to={"/"}>Node.js / Express</Link>
                <Typography color={"text.primary"}></Typography>
              </Breadcrumbs>

              <CourseTitle>
                NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)
              </CourseTitle>

              <CourseDescription>
                Master Node JS & Deno.js, build REST APIs with Node.js, GraphQL
                APIs, add Authentication, use MongoDB, SQL & much more!
              </CourseDescription>

              <CourseRating>
                {/* check if best seller */}
                <BestSeller>Bestseller</BestSeller>
                <span> 4.3 </span>
                <Rating
                  size="small"
                  name="half-rating-read"
                  defaultValue={4.3}
                  precision={0.5}
                  readOnly
                />
                <span> (33,125 rating) </span>
                <span> 116,000 student </span>
              </CourseRating>
            </CourseInfo>
            <CourseCard />
          </BannerContainer>
        </Container>
      </div>
    </>
  );
};
