import styled from "styled-components";
import { Link } from "react-router-dom";
import NavBox from "./NavBox";

export default function SideBar(){
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
    )
}


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

const ImageBox = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  display: block;
  width: 60%;
`;

