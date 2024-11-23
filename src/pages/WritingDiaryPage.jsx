import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import emojiImage from '../assets/CryingCat.svg';

const WritingDiaryPage = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState('나의 오늘 하루는...');

  const handleFocus = () => {
    if (content === '나의 오늘 하루는...') {
      setContent('나의 오늘 하루는...');
    }
  };

  const handleChange = (e) => {
    setContent(e.target.value); // 사용자의 입력 값을 업데이트
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Diary Content:', content);
    // API 호출 로직 추가 예정
    navigate('/loading-complete');
  };
 

  return (
    <FullPageContainer>
      <Header>
        <h1>오늘의 하루를 감정적으로 정리해 보세요</h1>
      </Header>
      <Emoji src={emojiImage} alt="감정 이모지" />
      <TextArea
        value={content}
        onChange={handleChange}
        onFocus={handleFocus}
      />
      <SubmitButton onClick={handleSubmit}>작성 완료</SubmitButton>
    </FullPageContainer>
  );
};

// 스타일 컴포넌트 정의
const FullPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #d9f7be; /* 배경색 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative; /* Header와 Emoji 위치를 조정하기 위해 사용 */
`;

const Header = styled.div`
  position: absolute;
  top: 100px;
  left: 100px; /* 상단 왼쪽 정렬 */
  text-align: left;

  h1 {
    font-size: 1.8rem;
    color: #4d4d4d;
    margin: 0;
  }
`;

const Emoji = styled.img`
  position: absolute;
  top: 100px; /* 상단 여백 */
  right: 100px; /* 오른쪽 여백 */
  width: 150px;
  height: 150px;
`;

const TextArea = styled.textarea`
  width: 80%;
  height: 40%;
  padding: 15px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #d9f7be;
  outline: none;
  resize: none;

`;

const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 15px 30px;
  font-size: 1.2rem;
  color: #fff;
  background-color: #5cb85c;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4cae4c;
  }
`;

export default WritingDiaryPage;
