import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import backHalfCircle from '../assets/BackHalfCircle.svg';
import DetailModal from '../components/DetailModal';
import dog from '../assets/dog.png';
import cat from '../assets/cat.png';

const DiaryListPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImgSrc, setSelectedImgSrc] = useState('');

  const [diaryData] = useState([
    { id: 1, content: '일기 내용 1', imgAlt: '일기 이미지 1', src: dog },
    { id: 2, content: '일기 내용 2', imgAlt: '일기 이미지 2', src: cat },
    { id: 3, content: '일기 내용 3', imgAlt: '일기 이미지 3', src: dog },
    { id: 4, content: '일기 내용 4', imgAlt: '일기 이미지 4', src: dog },
    { id: 5, content: '일기 내용 5', imgAlt: '일기 이미지 5', src: dog },
  ]); // 다이어리 더미 데이터

  const openModal = (imgSrc) => {
    setSelectedImgSrc(imgSrc);
    setIsModalOpen(true);
  };

  return (
    <DiaryListWrapper>
      {isModalOpen && (
        <DetailModal setIsModalOpen={setIsModalOpen} imgSrc={selectedImgSrc} />
      )}
      <LeftBtn
        leftmove="15%"
        onClick={() => {
          navigate('/');
        }}
      >
        뒤로 가기
      </LeftBtn>
      <ListWrapper>
        <BackHalfCircle src={backHalfCircle} alt="반원배경이미지" />
        <h1>모두의 일기장</h1>
        <ListContainer>
          {diaryData.map((diary) => (
            <ListBox key={diary.id} onClick={() => openModal(diary.src)}>
              <p>{diary.content}</p>
              <ListImg alt={diary.imgAlt} src={diary.src} />
            </ListBox>
          ))}
        </ListContainer>
      </ListWrapper>
      <RightBtn
        right="15%"
        onClick={() => {
          navigate('/write');
        }}
      >
        나도 작성하기
      </RightBtn>
    </DiaryListWrapper>
  );
};

const DiaryListWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: end;
`;

const LeftBtn = styled.p`
  position: absolute;
  margin-bottom: 2%;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  left: ${(props) => props.leftmove || '0'};
  right: ${(props) => props.right || '0'};
`;

const RightBtn = styled.p`
  position: absolute;
  margin-bottom: 2%;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  right: ${(props) => props.right || '0'};
`;
const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #434343;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 28%;
  }
`;

const BackHalfCircle = styled.img`
  position: absolute;
  width: 82%;
  bottom: 0;
  height: 90%;
  z-index: -1;
`;

const ListContainer = styled.div`
  width: 420px;
  height: 468px;

  display: flex;
  flex-direction: column;
  margin-bottom: 10%;
  overflow-y: scroll;
  overflow-x: hidden;
  gap: 24px;

  p {
    width: 230px;
    color: #434343;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.56px;
  }
`;

const ListBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: start;
  width: 400px;
  height: 140px;
  border-radius: 20px;
  background-color: #fff;
  cursor: pointer;

  p {
    margin-top: 26px;
  }
`;

const ListImg = styled.img`
  width: 120px;
  height: 120px;
  margin: 10px 0;
  border-radius: 20px;
  background: #d9d9d9;
`;

export default DiaryListPage;
