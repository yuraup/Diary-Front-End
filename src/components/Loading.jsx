import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import cryingCat from '../assets/CryingCat.svg';
import happyCat from '../assets/LoveCat.svg';

const Loading = () => {
  const [isHappy, setIsHappy] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsHappy((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Background>
      <StyledText>당신의 하루를 긍정적으로 바꾸는 중입니다</StyledText>
      <LoadingContainer>
        {isHappy ? (
          <HappyCat src={happyCat} alt="행복한 고양이 이미지" />
        ) : (
          <CryingCat src={cryingCat} alt="우는 고양이 이미지" />
        )}
      </LoadingContainer>
    </Background>
  );
};

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(44, 44, 44, 0.9);
  display: flex;
  flex-direction: column;
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

const StyledText = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  font-weight: 600;
  line-height: 33px;
  color: #fff;
  text-align: center;
`;

const scaleAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
`;

const ImageBase = styled.img`
  animation: ${scaleAnimation} 2s ease-in-out infinite;
`;

const HappyCat = styled(ImageBase)`
  width: 160px;
  height: 160px;
`;

const CryingCat = styled(ImageBase)`
  width: 110px;
  height: 110px;
`;

export default Loading;
