import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LoveCat from '../assets/LoveCat.svg';
import { AnimatePresence, motion } from 'framer-motion';

const DiarySaveCompletePage = () => {
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <SaveCompleteContainer>
          <Emoji src={LoveCat} alt="저장완료" />
          <Message>오늘의 일기가 이미지로 저장됐어요!</Message>
          <ConfirmButton onClick={() => navigate('/')}>확인</ConfirmButton>
        </SaveCompleteContainer>
      </motion.div>
    </AnimatePresence>
  );
};

const SaveCompleteContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #d9f7be;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Emoji = styled.img`
  width: 300px;
  height: 300px;
  margin-bottom: 0px;
`;

const Message = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  color: #4d4d4d;
  margin-bottom: 200px;
`;

const ConfirmButton = styled.button`
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

export default DiarySaveCompletePage;
