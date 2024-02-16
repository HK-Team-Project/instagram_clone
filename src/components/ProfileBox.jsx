import styled from "styled-components";
import { Link } from "react-router-dom";

export default function ProfileBox({userId, name, width}){
    return (
        <MainDiv width={width}>
            <ProfileImgBox>
                <Link className="imgLink"><img src="./assets/1x1.png" alt="" /></Link>
            </ProfileImgBox>
            <ContainterDiv>
                <div>
                    <Link className="idLink"><span>{userId}</span></Link>
                    <span>{name}</span>
                </div>
            </ContainterDiv>
            <ContainterDiv>
                <a className="follow" href="/">팔로우</a>
            </ContainterDiv>
        </MainDiv>
    )
}


const MainDiv = styled.div`
    width: ${(props) => props.width};
    height: 44px;
    margin-top: 8px;
    margin-bottom: 8px;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: 56px 1fr 48px;
`;

const ProfileImgBox = styled.div`
    width: 44px;
    height: 44px;

    .imgLink > img{
        width: 100%;
        height: 100%;
        border: 1px solid #888888;
        border-radius: 100px;
    }
`;

const ContainterDiv = styled.div`
    display: flex;
    align-items: center;
    div{
        .idLink{
            text-decoration: none;
            span{
                color:black;
                display: block;
                margin: 0px;
                font-size:14px;
                font-weight:bolder;
                }
        }
        span{
            color: #888888;
            font-size:12px;
        }
    }
    .follow{
        width: 100%;
        color: #55aaff;
        font-size: 12px;
        font-weight: bolder;
        text-align: end;
        text-decoration: none;

        &:hover{
            color:black;
        }
    }
`;