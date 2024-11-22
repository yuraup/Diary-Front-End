import styled from 'styled-components';
import sad from '../assets/CryingCat.svg';
import happy from '../assets/LoveCat.svg';
import backCircle from '../assets/BackCircle.svg';
import arrow from '../assets/Arrow.svg';
import dottedLine from '../assets/DottedLine.svg';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <MainContainer>
      <BackgroundCircle src={backCircle} alt="배경이미지" />
      <DecoSection>
        <TextContainer>
          <h1>하루의 미소</h1>
          <h2>Positive Diary</h2>
          <p>
            긍정의 문장으로만 이루어진 일기장을 받아보세요!
            <br />
            부정적인 모든 감정을 AI가 캐치해 당신의 하루를 아름답게 기억할 수
            있게 만들어 줄 거예요!
          </p>
        </TextContainer>
        <EmojiContainer>
          <Arrow src={arrow} alt="화살표" />
          <DottedLine src={dottedLine} alt="점선" />
          <Emoji src={sad} alt="슬픈 이모지" size="210px" mt="47px" />
          <Emoji src={happy} alt="행복한 이모지" size="300px" />
        </EmojiContainer>
      </DecoSection>
      <ButtonSection>
        <Button
          onClick={() => {
            navigate('/diary-list');
          }}
        >
          모두의 일기장
        </Button>
        <Button
          onClick={() => {
            navigate('/write');
          }}
        >
          일기 작성
        </Button>
      </ButtonSection>
    </MainContainer>
  );
};

const Emoji = styled.img`
  width: ${(props) => props.size || '100px'};
  height: ${(props) => props.size || '100px'};
  margin-top: ${(props) => props.mt || '0px'};
`;

const MainContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -2;
`;

const BackgroundCircle = styled.img`
  position: absolute;

  top: 0;
  right: 0;
  width: 80%;
  height: 70%;
  z-index: -3;
`;

const DecoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 8rem;
`;

const ButtonSection = styled.div`
  display: flex;

  width: 100%;
  gap: 1rem;
  padding: 1rem 8rem;
`;

const TextContainer = styled.div`
  width: 380px;
  h1 {
    font-size: 3rem;
    color: #5cb85c;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.8rem;
    color: #4d4d4d;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #6d6d6d;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: #5cb85c;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4cae4c;
  }
`;

const EmojiContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 14rem;
  margin-top: 10%;
`;

const Arrow = styled.img`
  position: absolute;
  width: 3rem;
  height: auto;
  top: 10%;
  right: 34%;
  z-index: -2;
`;

const DottedLine = styled.img`
  position: absolute;
  top: 12%;
  right: 19%;
  width: 30rem;
  z-index: -3;
`;

export default MainPage;
