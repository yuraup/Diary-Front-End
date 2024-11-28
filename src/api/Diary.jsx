import axios from 'axios';

const BASE_URL = 'http://54.180.247.59:8080';

//리스트 가져오기
export const getDiaryList = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/diary`);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};

//리스트 세부 정보 가져오기
export const getDetailDiary = async (dairyId) => {
  try {
    const res = await axios.get(`${BASE_URL}/diary/${dairyId}`);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};
