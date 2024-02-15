import styled from "styled-components";
import { Link } from "react-router-dom";
import NavBox from "./NavBox";

export default function Home() {
  const NavList = [
    { name: "home", iconSrc: "./assets/home.png", path: "/" },
    { name: "search", iconSrc: "./assets/search.png", path: "/" },
    { name: "explore", iconSrc: "./assets/explore.png", path: "/explore" },
    { name: "reels", iconSrc: "./assets/reels.png", path: "/" },
    { name: "messages", iconSrc: "./assets/messages.png", path: "/" },
    { name: "notifications", iconSrc: "./assets/notifications.png", path: "/" },
    { name: "notifications", iconSrc: "./assets/create.png", path: "/" },
    { name: "profile", iconSrc: "./assets/profile.png", path: "/profile" },
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
        <div>
          <NavBox name="threads" iconSrc="./assets/threads.png" path="/"/>
          <NavBox name="more" iconSrc="./assets/more.png" path="/"/>
        </div>
      </NavLayout>
      <MainLayout>
        <ContentLayout>
          <StotyContainer>
            <div style={{width:"60px", border: "1px solid red"}}>story</div>
            <div style={{width:"60px", border: "1px solid red"}}>story</div>
            <div style={{width:"60px", border: "1px solid red"}}>story</div>
            <div style={{width:"60px", border: "1px solid red"}}>story</div>
            <div style={{width:"60px", border: "1px solid red"}}>story</div>
          </StotyContainer>
          <FeedContainer>
            {/* TODO: make Feed component and allocate to clickLister */}
            <article style={{height:"700px", border:"1px solid green", margin: "0 80px 0 80px"}}>feed test</article>
            <article style={{height:"700px", border:"1px solid green", margin: "0 80px 0 80px"}}>feed test</article>
            <article style={{height:"700px", border:"1px solid green", margin: "0 80px 0 80px"}}>feed test</article>
            <article style={{height:"700px", border:"1px solid green", margin: "0 80px 0 80px"}}>feed test</article>
          </FeedContainer>
        </ContentLayout>
        <AsideLayout />
      </MainLayout>
    </HomeLayout>
  );
}


const HomeLayout = styled.div`
  display:flex;
  min-height: 100%;
  padding-top: 5px;
  padding-bottom: 5px;

  /* background-color: #faf7f7; */
`;

const NavLayout = styled.nav`
  display: grid;
  position: fixed;
  width: 240px;
  height: 98%;
  padding: 10px 15px 10px 15px;
  grid-template-rows: 92px 1fr 112px;
  border-right: 1px gray solid;

  @media screen and (max-width: 1275px) {
    width: 30px;
    padding: 8px 12px 8px 12px;
  }
`;

const MainLayout = styled.main`
  min-height:inherit;
  width: 100%;
  margin-left:280px;

  display: flex;
  flex-direction: row;
  @media screen and (max-width: 1275px) {
    margin-left:60px;
  }
`;

const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;

  width: 630px;
  border: 1px solid blue;
  margin-left: auto;
  margin-right: 30px;
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


const StotyContainer = styled.div`
  border: 1px solid blue;
  padding-top:3px;
  padding-bottom:3px;
  width: 100%;
  height: 100px;

  display: flex;
  flex-direction:row;
`

const FeedContainer = styled.div`
  border: 1px solid blue;

  display: flex;
  flex-direction:column;
`;