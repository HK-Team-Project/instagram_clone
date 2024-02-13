import styled from "styled-components";
import { Link } from "react-router-dom";
import NavBox from "./NavBox";

export default function Home() {
  const NavList = [
    { name: "home", iconSrc: "./assets/home.png", path: "/" },
    { name: "search", iconSrc: "./assets/search.png", path: "/" },
    { name: "explore", iconSrc: "./assets/search.png", path: "/" },
    { name: "reels", iconSrc: "./assets/reels.png", path: "/" },
    { name: "messages", iconSrc: "./assets/messages.ong", path: "/" },
    { name: "notifications", iconSrc: "./assets/notifications.png", path: "/" },
    { name: "notifications", iconSrc: "./assets/create.png", path: "/" },
    { name: "profile", iconSrc: "", path: "/profile" },
  ];

  return (
    <HomeLayout>
      <NavLayout>
        <ImageBox>
          <Link to="/">
            <Image src="./assets/instagram logo.png" alt=""></Image>
          </Link>
        </ImageBox>
        <div>
          {NavList.map(({ name, iconSrc, path }, index) => {
            return (
              <NavBox
                key={index}
                name={name}
                iconSrc={iconSrc}
                path={path}
              ></NavBox>
            );
          })}
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

const NavLayout = styled.nav`
  border: 1px solid blue;

  padding: 10px 15px 10px 15px;
  display: grid;
  grid-template-rows: 92px 1fr 112px;
  border-right: 1px gray solid;

  @media screen and (max-width: 1275px) {
    padding: 8px 12px 8px 12px;
  }
`;

const MainLayout = styled.main`
  border: 1px solid blue;

  background-color: #faf7f7;
  display: flex;
  flex-direction: row;
`;

const ContentLayout = styled.div`
  border: 1px solid blue;

  margin-left: auto;
  margin-right: 30px;
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

const ImageBox = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  display: block;
  width: 60%;
`;
