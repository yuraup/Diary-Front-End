/* eslint-disable react/prop-types */
import { useState } from 'react';
import styled from 'styled-components';
const DetailModal = ({ setIsModalOpen, diary }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedImgSrc, setZoomedImgSrc] = useState('');

  const toggleZoom = (src) => {
    setZoomedImgSrc(src);
    setIsZoomed(!isZoomed);
  };

  return (
    <>
      {isZoomed && (
        <ZoomedImageWrapper onClick={() => setIsZoomed(false)}>
          <ZoomedImage src={zoomedImgSrc} alt="확대된 이미지" />
        </ZoomedImageWrapper>
      )}
      <ModalBackground onClick={() => setIsModalOpen(false)}>
        <ModalWrapper onClick={(e) => e.stopPropagation()}>
          <TextBox>
            <h1>{diary?.title || '제목없음'}</h1>
            <p>{diary?.content || '내용없음'}</p>
          </TextBox>
          <DiaryImg
            src={diary?.imgUrl}
            alt="일기 이미지"
            onClick={(e) => toggleZoom(e.target.src)}
          />
        </ModalWrapper>
      </ModalBackground>
    </>
  );
};

export default DetailModal;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalWrapper = styled.div`
  width: 600px;
  height: 400px;
  border-radius: 20px;
  background: #fff;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const TextBox = styled.div`
  width: 218px;
  height: 323px;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.72px;
    margin-bottom: 32px;
  }
  p {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.64px;
  }
`;

const DiaryImg = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 20px;
  background: #d9d9d9;
  cursor: zoom-in;
`;

const ZoomedImageWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1100;
`;

const ZoomedImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  border-radius: 10px;
  cursor: zoom-out;
`;
