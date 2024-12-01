import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import CryingCat from '../assets/CryingCat.svg';
import FearCat from '../assets/FearCat.svg';
import JoyCat from '../assets/JoyCat.svg';
import SmilingCat from '../assets/SmilingCat.svg';
import { transformDiary } from '../api/Diary';

const WritingDiaryPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  // Emoji 애니메이션
  const [currentEmoji, setCurrentEmoji] = useState(0);
  const [fade, setFade] = useState(false);
  const emojiImages = [CryingCat, FearCat, JoyCat, SmilingCat];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentEmoji((prevIndex) => (prevIndex + 1) % emojiImages.length);
        setFade(false);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, [emojiImages.length]);

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
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log('보내는 Diary Title:', title);
      console.log('보내는 Diary Content:', content);

      const res = await transformDiary(content);
      const transformedContent = res.data.content;
      const transformedImgUrl = res.data.imgUrl;

      console.log('변환된 내용:', transformedContent);
      console.log('이미지 URL:', transformedImgUrl);
      navigate('/loading-complete', {
        state: { title, transformedContent, transformedImgUrl },
      });
    } catch (error) {
      console.error('API 호출 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <FullPageContainer>
        <EmojiContainer fade={fade}>
          <Emoji src={emojiImages[currentEmoji]} alt="감정 이모지" />
        </EmojiContainer>
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
  background-color: #d9f7be;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EmojiContainer = styled.div`
  width: 80px;
  height: 80px;
  transition: opacity 1s ease-in-out;
  opacity: ${(props) => (props.fade ? 0 : 1)};
`;

const Emoji = styled.img`
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  color: #434343;
  text-align: center;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 1.04px;
  margin: 1% 0 3% 0;
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
