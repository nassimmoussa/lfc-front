import axios from 'utils/axios';

export const loginUserService = async ({ password, email }) => {
  const { data } = await axios.post('/auth/login', { password, email });
  return data;
};

export const signUpUserService = async ({ password, email, name }) => {
  const { data } = await axios.post('/professores/sign_up', {
    password,
    email,
    name,
  });
  return data;
};

export const forgotPasswordService = async ({ email }) => {
  const { data } = await axios.post('/auth/forgot_pass', {
    email,
  });
  return data;
};
