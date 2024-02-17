import styled from "styled-components";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

export default function Explore() {
  return (
    <HomeLayout>
      <SideBar />
      <MainLayout>
        <div
          style={{
            width: "1000px",
            border: "1px solid red",
            margin: "0 auto 0 auto",
          }}
        >
          <p style={{ fontSize: "400px" }}>scroll test</p>
          <p style={{ fontSize: "400px" }}>scroll test</p>
          <p style={{ fontSize: "400px" }}>scroll test</p>
        </div>
      </MainLayout>
    </HomeLayout>
  );
}

const HomeLayout = styled.div`
  display: flex;
  min-height: 100%;
  padding-top: 5px;
  padding-bottom: 5px;

  /* background-color: #faf7f7; */
`;

const MainLayout = styled.main`
  border: 1px solid blue;

  min-height: inherit;
  width: 100%;
  margin-left: 280px;

  display: flex;
  flex-direction: row;
  @media screen and (max-width: 1275px) {
    margin-left: 60px;
  }
`;
