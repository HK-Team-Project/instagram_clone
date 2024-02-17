import styled from "styled-components";

export default function Story() {
  return (
    <StotyWrapper>
      <img src="assets/1x1.png" alt="" />
      <span>user id</span>
    </StotyWrapper>
  );
}

const StotyWrapper = styled.div`
  margin: 0 10px 0 10px;
  height: 100px;
  width: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 60px;
    border-radius: 100%;
    padding: 2px;
    border: 1px red solid;
    margin-bottom: 5px;
  }
  span {
    font-size: 15px;
    font-weight: 500;
  }
`;
