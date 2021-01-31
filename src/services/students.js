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

export const postStudent = async (studentData) => {
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

export const putStudent = async (studentData) => {
  try {
    const { data } = await axios.put(`/students/${studentData.id}`, {
      cpf: studentData.cpf,
      name: studentData.name,
    });
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

export const deleteStudentService = async (studentId) => {
  try {
    const { data } = await axios.delete(`/students/${studentId}`);
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
