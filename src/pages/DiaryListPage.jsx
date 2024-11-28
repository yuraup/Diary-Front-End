import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import backHalfCircle from '../assets/BackHalfCircle.svg';
import DetailModal from '../components/DetailModal';
import { getDiaryList, getDetailDiary } from '../api/Diary';

const DiaryListPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [diaryList, setDiaryList] = useState([]);
  const [selectedDiary, setSelectedDiary] = useState(null);

  const openModal = async (diaryId) => {
    try {
      const detail = await getDetailDiary(diaryId);
      setSelectedDiary(detail);
      setIsModalOpen(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchList = async () => {
      const list = await getDiaryList();
      if (list) {
        setDiaryList(list);
      }
    };
    fetchList();
  }, []);

  return (
    <DiaryListWrapper>
      {isModalOpen && (
        <DetailModal setIsModalOpen={setIsModalOpen} diary={selectedDiary} />
      )}
      <LeftBtn
        $leftmove="15%"
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
          {diaryList.map((diary) => (
            <ListBox
              key={diary.diaryId}
              onClick={() => openModal(diary.diaryId)}
            >
              <p>{diary.title}</p>
              <ListImg alt="일기 이미지" src={diary.imgURL} />
            </ListBox>
          ))}
        </ListContainer>
      </ListWrapper>
      <RightBtn
        $right="15%"
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
  left: ${(props) => props.$leftmove || '0'};
  right: ${(props) => props.$right || '0'};
`;

const RightBtn = styled.p`
  position: absolute;
  margin-bottom: 2%;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  right: ${(props) => props.$right || '0'};
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
