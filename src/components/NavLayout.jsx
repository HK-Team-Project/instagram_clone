import HomeIcon from "./HomeIcon"
import NavBox from "./NavBox"

import './NavLayout.css'

const NavList = (props) => {
    return <div>
        {props.children};
    </div>
}

const NavOption = (props) => {
    return <div>
        {props.children};
    </div>
}


export default function NavLayout(props){
    return <nav>
        <HomeIcon></HomeIcon>
        <NavList>
            <NavBox></NavBox>
            <NavBox></NavBox>
            <NavBox></NavBox>
            <NavBox></NavBox>
            <NavBox></NavBox>
            <NavBox></NavBox>
            <NavBox></NavBox>
            <NavBox></NavBox>
        </NavList>
        <NavOption>
            <NavBox></NavBox>
            <NavBox></NavBox>
        </NavOption>
    </nav>
}