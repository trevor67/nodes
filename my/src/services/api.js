import axios from 'axios';

const API_URL = 'https://api.kakaires-ict-solutions.com';

export const fetchStudents = async () => {
  const response = await axios.get(`${API_URL}/students`);
  return response.data;
};

export const fetchCourses = async () => {
  const response = await axios.get(`${API_URL}/courses`);
  return response.data;
};