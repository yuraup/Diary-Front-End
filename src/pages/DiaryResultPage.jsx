import { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ImageModal from '../components/ResultModal';
import exResultImg from '../assets/ex_result.png';
import html2canvas from 'html2canvas';
import { AnimatePresence, motion } from 'framer-motion';

const DiaryResultPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const screenshotRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { title, transformedContent, transformedImgUrl } = location.state || {};

  const handleSaveDiary = async () => {
    if (screenshotRef.current) {
      const canvas = await html2canvas(screenshotRef.current);
      const image = canvas.toDataURL('image/png');

      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const dd = String(today.getDate()).padStart(2, '0');
      const formattedDate = `${yyyy}-${mm}-${dd}`;

      const link = document.createElement('a');
      link.href = image;
      link.download = `${formattedDate}의 일기.png`;
      link.click();

      navigate('/save-complete');
    }
  };
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <ResultContainer ref={screenshotRef}>
          <h1>{title || '제목 없음'}</h1>
          <ContentSection>
            <TextSection>
              <p>{transformedContent || '일기 내용이 없습니다. '}</p>
            </TextSection>
            <ImageSection>
              <GeneratedImage
                src={transformedImgUrl}
                alt="생성된 이미지"
                onClick={() => setIsModalOpen(true)}
              />
            </ImageSection>
          </ContentSection>
          <ImageModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            imgSrc={transformedImgUrl || exResultImg}
          />
          <ButtonSection>
            <ActionButton onClick={handleSaveDiary}>일기 저장하기</ActionButton>
            <ActionButton onClick={() => navigate('/diary-list')}>
              모두의 일기장 보기
            </ActionButton>
          </ButtonSection>
        </ResultContainer>
      </motion.div>
    </AnimatePresence>
  );
};

const ResultContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #d9f7be;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;

  h1 {
    margin-bottom: 100px;
    font-size: 1.8rem;
    color: #4d4d4d;
  }
`;

const ContentSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;
  max-width: 1200px;
  margin-bottom: 100px;
  gap: 50px;
`;

const TextSection = styled.div`
  flex: 1;
  text-align: justify;
  text-justify: inter-word;

  p {
    font-size: 1rem;
    color: #6d6d6d;
    line-height: 1.6;
    white-space: pre-wrap;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GeneratedImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  cursor: zoom-in;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
  }
`;

const ButtonSection = styled.div`
  display: flex;
  gap: 150px;
`;

const ActionButton = styled.button`
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

export default DiaryResultPage;
