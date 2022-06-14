import PostViewPage from "./component/page/PostViewPage";
import PostWritePage from "./component/page/PostWritePage";
import MainPage from "./component/page/MainPage";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App() {
  return (
    <BrowserRouter>
      <MainTitleText>My mini blog</MainTitleText>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="post-write" element={<PostWritePage />} />
        <Route path="post/:postId" element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*

- 개발을 시작하기 전에 기획, 필요한 기능, 전체적인 디자인을 간단하게 정한다.
- 처음 프로젝트를 설계할 때는 큰그림을 먼저 그리고(top down방식) 이후에 작은 부분을 구체화 시켜나가지만 
  구현단계에 들어가면 bottom up 방식으로 작은 부분부터 구현한다.

<미니 블로그 기획>
구현 기능 정하기 => 전체 화면 디자인 => 개발 시작

1. 구현할 기능과 컴포넌트 이름
- 글 목록 보기 기능(리스트 형태)
  - PostList, PostListItem
- 글 보기 기능
  - Post
- 댓글 보기 기능
  - CommentList, CommentListItem
- 글 작성 기능
  - PostWrite
- 댓글 작성 기능
  - CommentWrite

재사용이 가능하게 최대한 잘게 쪼개서 개발

2. 폴더 구성하기

*/
