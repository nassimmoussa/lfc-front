import axios from 'utils/axios';

export const indexLEs = async () => {
  try {
    const { data } = await axios.get('/logic_expressions/');
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
