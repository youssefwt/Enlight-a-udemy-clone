import React from "react";
import { Container } from "@mui/material";
import { ContentContainer } from "./CourseContent.styled";
import ContentAccordion from "./ContentAccordion";

const CourseContent = () => {
  return (
    <Container>
      <ContentContainer>
        <h2>Course content</h2>
        <p>{`36 sections • 542 lectures • 40h 31m total length`}</p>
        <ContentAccordion />
      </ContentContainer>
    </Container>
  );
};

export default CourseContent;
