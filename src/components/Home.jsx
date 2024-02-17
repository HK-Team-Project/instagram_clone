import styled from "styled-components";
// import { Link } from "react-router-dom";
import ProfileBox from "./ProfileBox";
import SideBar from "./SideBar";
import Footer from "./Footer";
import Feed from "./Feed";

export default function Home() {
  return (
    <HomeLayout>
      <SideBar />
      <MainLayout>
        <ContentLayout>
          <StotyContainer>
            <div style={{ width: "60px", border: "1px solid red" }}>story</div>
            <div style={{ width: "60px", border: "1px solid red" }}>story</div>
            <div style={{ width: "60px", border: "1px solid red" }}>story</div>
            <div style={{ width: "60px", border: "1px solid red" }}>story</div>
            <div style={{ width: "60px", border: "1px solid red" }}>story</div>
          </StotyContainer>
          <FeedContainer>
            <Feed />
            <Feed />
            <Feed />
            {/* TODO: make Feed component and allocate to clickLister */}
            {/* <article
              style={{
                height: "700px",
                border: "1px solid green",
                margin: "0 80px 0 80px",
              }}
            >
              feed test
            </article>
            <article
              style={{
                height: "700px",
                border: "1px solid green",
                margin: "0 80px 0 80px",
              }}
            >
              feed test
            </article>
            <article
              style={{
                height: "700px",
                border: "1px solid green",
                margin: "0 80px 0 80px",
              }}
            >
              feed test
            </article>
            <article
              style={{
                height: "700px",
                border: "1px solid green",
                margin: "0 80px 0 80px",
              }}
            >
              feed test
            </article> */}
          </FeedContainer>
        </ContentLayout>
        <AsideLayout>
          <div>
            <ProfileBox userId="user_id" name="강병희" width="284px" />
            <div className="recommend">
              <span>회원님을 위한 추천</span>
              <span>모두 보기</span>
            </div>
            <ProfileBox
              userId="user_id"
              name="회원님을 위한 추천"
              width="284px"
            />
            <ProfileBox
              userId="user_id"
              name="회원님을 위한 추천"
              width="284px"
            />
            <ProfileBox
              userId="user_id"
              name="회원님을 위한 추천"
              width="284px"
            />
            <ProfileBox
              userId="user_id"
              name="회원님을 위한 추천"
              width="284px"
            />
            <Footer />
          </div>
        </AsideLayout>
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

const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;

  width: 630px;
  border: 1px solid blue;
  margin-left: auto;
  margin-right: 30px;
`;

const AsideLayout = styled.aside`
  margin-right: auto;
  width: 370px;

  & > div {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    .recommend {
      display: flex;
      flex-direction: row;
      width: 284px;
      margin: 15px auto 5px auto;
      span:nth-child(1) {
        margin-right: auto;
        font-size: 14px;
        color: gray;
      }
      span:nth-child(2) {
        margin-left: auto;
        font-size: 12px;
        font-weight: bolder;
      }
    }
  }
`;

const MainLayout = styled.main`
  min-height: inherit;
  width: 100%;
  margin-left: 280px;

  display: flex;
  flex-direction: row;
  @media screen and (max-width: 1275px) {
    margin-left: 60px;
  }
  @media screen and (max-width: 1100px) {
    ${ContentLayout} {
      margin-right: auto;
    }
    ${AsideLayout} {
      display: none;
    }
  }
`;

const StotyContainer = styled.div`
  border: 1px solid blue;
  padding-top: 3px;
  padding-bottom: 3px;
  width: 100%;
  height: 100px;

  display: flex;
  flex-direction: row;
`;

const FeedContainer = styled.div`
  border: 1px solid blue;

  display: flex;
  flex-direction: column;
`;
