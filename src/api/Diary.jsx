import axios from 'axios';

// 환경변수 설정
// const BASE_URL = import.meta.env.VITE_BASE_URL;

// Axios 인스턴스 생성
const api = axios.create({
  withCredentials: true,
  baseURL: '/api',
  // baseURL: BASE_URL,
  // headers: {
  //   'Content-Type': 'application/json',
  // },
});

// 리스트 가져오기
export const getDiaryList = async () => {
  try {
    const res = await api.get('/diary');
    console.log('응답 데이터:', res.data);
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
    console.log('세부 응답 데이터:', res.data);
    return res.data.data;
  } catch (err) {
    console.error(
      `다이어리 세부 정보 가져오기 실패 (ID: ${diaryId}):`,
      err.message
    );
    throw err;
  }
};

export const transformDiary = async (content) => {
  try {
    console.log('content전달받음: ', content);
    const response = await api.get('/diary/ai', {
      params: {
        content: content,
      },
    });

    console.log('res api:', response.data);
    return response.data;
  } catch (error) {
    console.error('테스트 요청 실패:', error.message);
  }
};

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
