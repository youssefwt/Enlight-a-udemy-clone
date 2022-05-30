import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;
`;

export const CourseInfo = styled.div`
  color: white;
  width: 60%;
`;

export const CourseTitle = styled.p`
  font-size: 2rem;
  font-weight: 700;
  margin: 0.8rem 0;
`;

export const CourseDescription = styled.p`
  font-size: 1.2rem;
  margin: 0.8rem 0;
`;

export const BestSeller = styled.span`
  font-family: "sf pro display", -apple-system, BlinkMacSystemFont, Roboto,
    "segoe ui", Helvetica, Arial, sans-serif, "apple color emoji",
    "segoe ui emoji", "segoe ui symbol";
  font-weight: 700;
  font-size: 12px;
  color: #3d3c0a;
  border: 1px solid palegoldenrod;
  background: palegoldenrod;
  padding: 0.18rem;
  margin-top: 0.2rem;
  margin-right: 0.8rem;
  text-align: center;
`;

export const CourseRating = styled.div`
  display: flex;
  align-items: center;
`;
