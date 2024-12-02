import axios from 'axios';

// Axios 인스턴스
const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

// 리스트 가져오기
export const getDiaryList = async () => {
  console.log('API BASE URL:', import.meta.env.VITE_BASE_URL);
  try {
    const res = await api.get('/diary');
    return res.data.data;
  } catch (err) {
    console.error('다이어리 목록 가져오기 실패:', err.message);
    throw err;
  }
};

// 리스트 세부 정보 가져오기
export const getDetailDiary = async (diaryId) => {
  try {
    const res = await api.get(`/diary/${diaryId}`);
    return res.data.data;
  } catch (err) {
    console.error(
      `다이어리 세부 정보 가져오기 실패 (ID: ${diaryId}):`,
      err.message
    );
    throw err;
  }
};

//작성한 일기 변환하기
export const transformDiary = async (content) => {
  try {
    const response = await api.get('/diary/ai', {
      params: {
        content: content,
      },
    });
    return response.data;
  } catch (error) {
    console.error('테스트 요청 실패:', error.message);
  }
};

//일기 생성하기
export const createDiary = async (title, content, imgUrl) => {
  try {
    const res = await api.post('/diary', {
      title: title,
      content: content,
      imgUrl: imgUrl,
    });

    if (res.status === 201) {
      console.log('다이어리 생성 성공');
    } else {
      console.log('다이어리 생성 실패: 에러', res.status);
    }
  } catch (err) {
    console.error('다이어리 생성 요청 실패:', err.message);
    throw err;
  }
};
