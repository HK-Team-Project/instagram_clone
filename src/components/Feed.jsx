import styled from "styled-components";
import ProfileBox from "./ProfileBox";

export default function Feed() {
  var like_list = ["assets/1x1.png", "assets/1x1.png"];

  return (
    <Wrapper>
      <ProfileBox userId="user" name="" width="470px"></ProfileBox>
      <div>
        <img src="assets/4x3.png" alt="" style={{ width: "100%" }} />
      </div>
      <PostShare>
        <div>
          <img src="assets/notifications.png" alt="" />
        </div>
        <div>
          <img src="assets/comments.png" alt="" />
        </div>
        <div>
          <img src="assets/messages.png" alt="" />
        </div>
        <div>
          <img src="assets/save.png" alt="" />
        </div>
      </PostShare>
      <Like>
        <div>
          {like_list.map((like, index) => {
            return <img key={index} src={like} className="like_profile"></img>;
          })}
        </div>
        <span>좋아요 개</span>
      </Like>
      <Content>
        <span
          style={{ fontSize: "14px", fontWeight: "bolder", marginRight: "5px" }}
        >
          user id
        </span>
        <span style={{ width: "100%" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sit
          placeat a consequatur inventore dicta alias, fuga, eius minus facere
          nostrum esse. In repudiandae ut vel non, quas consectetur! Culpa?
        </span>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  padding-bottom: 16px;
  border-bottom: #888888 1px solid;
  margin: 10px auto 10px auto;
  width: 470px;
`;

const PostShare = styled.div`
  display: flex;
  flex-direction: row;
  & > div {
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    /* justify-content: center; */

    img {
      height: 24px;
      width: 24px;
    }
  }
  div:nth-child(4) {
    margin-left: auto;
    justify-content: right;
  }
`;

const Like = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 5px;
  div {
    margin-right: 10px;
    cursor: pointer;

    img {
      height: 14px;
      width: 14px;
      margin-right: -8px;
      border: #ffffff 2px solid;
      border-radius: 100px;
    }
  }

  span {
    font-size: 14px;
    font-weight: bold;
  }
`;

const Content = styled.div``;
