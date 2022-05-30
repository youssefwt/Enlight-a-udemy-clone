import React from "react";
import { Banner } from "../components/course/Banner";
import AboutCourse from "../components/course/AboutCourse";
import CourseContent from "../components/course/CourseContent";
// import { useLocation } from "react-router-dom";

export const CoursePage = () => {
  // const location = useLocation();
  // const path = location.pathname;
  return (
    <>
      <Banner />
      <AboutCourse />
      <CourseContent />
    </>
  );
};
