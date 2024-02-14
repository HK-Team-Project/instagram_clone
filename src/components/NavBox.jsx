import { Link } from "react-router-dom";
import styled from "styled-components";

function capitalizeFirstLetter(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function NavBox({ name, iconSrc, path }) {
  return (
    <Container>
      <StyledLink to={path}>
        <Img src={iconSrc} alt="" />
        <Text>{capitalizeFirstLetter(name)}</Text>
      </StyledLink>
    </Container>
  );
}

const Container = styled.div`
  display: inline-block;
  margin: 12px 0 12px 0;
`;

const StyledLink = styled(Link)`
  display:flex;
  flex-direction: row;
  text-decoration: none;
`;

const Img = styled.img`
  width: 12%;
  margin-left:12px;
  margin-right:12 px;
  @media screen and (max-width: 1275px){
    width: 80%;
  }
`;

const Text = styled.span`
  margin-left: 10px;
  text-align:center;
  font-size:20px;
  color:black;
  @media screen and (max-width: 1275px){
    display: none;
  }
`