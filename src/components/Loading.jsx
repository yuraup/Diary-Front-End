import { useEffect, useState } from 'react';
import styled from 'styled-components';
import happyCat from '../assets/LoveCat.svg';
const Loading = () => {
  const [isRotated, setIsRotated] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRotated(!isRotated);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [isRotated]);

  return (
    <Backgroud>
      <LoadingContainer>
        <StyledText>당신의 하루를 긍정적으로 바꾸는 중입니다</StyledText>
        <StyledText>· · ·</StyledText>
        <StyledHappyCat
          src={happyCat}
          alt="고양이이미지"
          isrotated={isRotated ? 1 : 0}
        />
      </LoadingContainer>
    </Backgroud>
  );
};

const Backgroud = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(70, 70, 70, 0.7);
  padding: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 120;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const StyledHappyCat = styled.img`
  transform: ${(props) => (props.isrotated ? 'rotate(0)' : 'rotate(30deg)')};
  transition: transform 500ms ease;
  width: 160px;
  height: auto;
  margin-bottom: 3%;
`;

const StyledText = styled.div`
  font-size: 30px;
  font-weight: 400;
  line-height: 33px;
  color: white;
  :nth-child(2) {
    margin-top: 26px;
    margin-bottom: 200px;
  }
`;

export default Loading;
