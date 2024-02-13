import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <HomeLayout>
      <NavLayout>
        <div>
          {/* <Link to="/">
            <img src="./icons/heart.png" alt=""></img>
          </Link> */}
        </div>
      </NavLayout>
      <MainLayout>
        <ContentLayout />
        <AsideLayout />
      </MainLayout>
    </HomeLayout>
  );
}

// css part

const NavLayout = styled.nav`
  border: 1px solid blue;

  padding: 10px 15px 10px 15px;
  display: grid;
  grid-template-rows: 92px 1fr 112px;
  border-right: 1px gray solid;

  @media screen and (max-width: 1270px) {
    padding: 8px 12px 8px 12px;
  }
`;

const MainLayout = styled.main`
  border: 1px solid blue;

  display: flex;
  flex-direction: row;
`;

const ContentLayout = styled.div`
  border: 1px solid blue;
  margin-left: auto;
  width: 630px;
  @media screen and (max-width: 1100px) {
    margin-right: auto;
  }
`;

const AsideLayout = styled.aside`
  border: 1px solid blue;

  margin-right: auto;
  width: 370px;
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

const HomeLayout = styled.div`
  border: 1px solid blue;

  height: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  display: grid;
  grid-template-columns: 240px 1fr;

  @media screen and (max-width: 1270px) {
    grid-template-columns: 60px 1fr;
  }
`;
