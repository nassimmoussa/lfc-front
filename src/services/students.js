import axios from 'utils/axios';

export const getStudents = async () => {
  try {
    const { data } = await axios.get('/students/');
    return data;
  } catch (e) {
    if (e.response) {
      throw e.response.data;
    }
    const error = {
      message: 'Some thing went wrong, please try again later',
    };
    throw error;
  }
};

export const postStudents = async (studentData) => {
  try {
    const { data } = await axios.post('/students/', studentData);
    return data;
  } catch (e) {
    if (e.response) {
      throw e.response.data;
    }
    const error = {
      message: 'Some thing went wrong, please try again later',
    };
    throw error;
  }
};
