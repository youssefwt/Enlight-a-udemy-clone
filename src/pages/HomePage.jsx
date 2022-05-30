import React from "react";
import Advantages from "../components/home/Advantages";
import Banner from "../components/home/Banner";
import BusinessBanner from "../components/home/BusinessBanner";
import Categories from "../components/home/Categories";
import CompanyList from "../components/home/CompanyList";
import EducationBanner from "../components/home/EducationBanner";
import Featured from "../components/home/Featured";
import Recomended from "../components/home/Recomended";
import InstructorBanner from "../components/home/InstructorBanner";
import Row2View from "../components/home/Row2View";
import TopCategories from "../components/home/TopCategories";

const HomePage = () => {
  return (
    <>
      <Categories />
      <Banner />
      <Recomended />
      <Advantages />
      <Row2View />
      <TopCategories />
      <Featured />
      <InstructorBanner />
      <CompanyList />
      <BusinessBanner />
      <EducationBanner />
    </>
  );
};

export default HomePage;
