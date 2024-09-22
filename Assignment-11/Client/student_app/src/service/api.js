import axios from "axios";

const URL_API = "http://localhost:3002/users";

export const addStudent = async (student) => {
  // it is better to declare the error handle
  // post two argument leta hy
  // data = student ka object hy

  try {
    return await axios.post(`${URL_API}`, student); // axios.post(http://localhost:3002/user)
  } catch (error) {
    console.error(error.messege);
  }
};

export const getStudents = async () => {
  try {
    return await axios.get(`${URL_API}`); // axios.post(http://localhost:3002/user)
  } catch (error) {
    console.error(error.message);
  }
};

export const getStudent = async (data) => {
  try {
    return await axios.get(`${URL_API}/${data}`);
  } catch (error) {
    console.error(error.message);
  }
};

// for edit the student data

export const editStudent = async (studendata, id) => {
  try {
    return await axios.put(`${URL_API}/${id}`, studendata);
  } catch (error) {
    console.error(error.message);
  }
};

// api for delete student

export const deleteStudent = async (id) => {
  try {
    return await axios.delete(`${URL_API}/${id}`);
  } catch (error) {
    console.error(error.message);
  }
};
