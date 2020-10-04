import axios from 'utils/axios';

export const loginUserService = async ({ password, email }) => {
  const { data } = await axios.post('/auth/login', { password, email });
  return data;
};
