import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import emojiImage from '../assets/CryingCat.svg';
import Loading from '../components/Loading';

const WritingDiaryPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // API 호출 (로딩 페이지 예시로 임시 딜레이 추가)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // 실제 API 호출 로직
      // const response = await fetch('YOUR_API_ENDPOINT', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ title, content }),
      // });
      // const result = await response.json();

      console.log('Diary Title:', title);
      console.log('Diary Content:', content);

      // 로딩 완료 후 다음 페이지로 이동
      navigate('/loading-complete');
    } catch (error) {
      console.error('API 호출 실패:', error);
    } finally {
      setLoading(false); // 로딩 종료
    }
  };

  return (
    <>
      {loading && <Loading />}{' '}
      {/* 로딩 상태가 true일 때만 Loading 컴포넌트 렌더링 */}
      <FullPageContainer>
        <Emoji src={emojiImage} alt="감정 이모지" />
        <Header>오늘의 하루를 감정적으로 정리해 보세요</Header>
        <WritingBox>
          <Title
            value={title}
            onChange={handleTitleChange}
            placeholder="제목"
            type="text"
          />
          <TextArea
            value={content}
            onChange={handleChange}
            placeholder="나의 오늘 하루는..."
          />
        </WritingBox>
        <SubmitButton onClick={handleSubmit}>작성 완료</SubmitButton>
      </FullPageContainer>
    </>
  );
};
const FullPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #d9f7be; /* 배경색 */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Emoji = styled.img`
  width: 80px;
  height: 80px;
`;

const Header = styled.div`
  color: #434343;
  text-align: center;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 1.04px;
  margin: 1% 0 3% 0;
  /* margin-bottom: 40px; */
`;

const WritingBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2%;
`;
const Title = styled.input`
  width: 60%;
  height: 50px;
  padding: 15px;
  margin-bottom: 1%;

  font-size: 20px;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: #fff;
`;

const TextArea = styled.textarea`
  width: 60%;
  height: 280px;
  padding: 15px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #fff;
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
