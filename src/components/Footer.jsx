import { styled } from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <Ul>
        <li>
          <a href="">
            <span>소개</span>
          </a>
        </li>
        <li>
          <a href="">
            <span>도움말</span>
          </a>
        </li>
        <li>
          <a href="">
            <span>홍보 센터</span>
          </a>
        </li>
        <li>
          <a href="">
            <span>API</span>
          </a>
        </li>
        <li>
          <a href="">
            <span>채용 정보</span>
            <br />
          </a>
        </li>
        <li>
          <a href="">
            <span>개인정보처리방침</span>
          </a>
        </li>
        <li>
          <a href="">
            <span>약관</span>
          </a>
        </li>
        <li>
          <a href="">
            <span>위치</span>
          </a>
        </li>
        <li>
          <a href="">
            <span>언어</span>
          </a>
        </li>
        <li>
          <a href="">
            <span>Meta Verified</span>
          </a>
        </li>
      </Ul>
      <Span>© 2024 INSTAGRAM FROM META</Span>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  width: 284px;
  margin: 20px auto 0 auto;
`;

const Ul = styled.ul`
  padding: 0;
  font-size: 12px;
  li {
    margin: 0 3px 0 3px;
    display: inline;
    padding: 0;
    a {
      text-decoration: none;
      color: gray;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const Span = styled.span`
  padding: 0;
  font-size: 12px;
  color: gray;
`;
