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

export const updateProfessorService = async ({ professorData }) => {
  try {
    const { data } = await axios.put('/professores/profile', professorData);
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
