import api from './apiConfig.js'

export const getEvents = async () => {
  try {
    const response = await api.get("/attend");
    return response.data;
  } catch (error) {
    console.error(`Failed to get pledges - error: ${error}`);
    throw error;
  }
};

export const getEvent = async () => {
    try {
      const response = await api.get("/attend");
      return response.data;
    } catch (error) {
      console.error(`Failed to get event- error: ${error}`);
      throw error;
    }
  };

export const createEvent = async (attend) => {
    try {
      const response = await api.post("/attend", attend);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const updateEvent = async (id, update) => {
    try {
      const response = await api.put(`/attend/${id}`, update);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const deleteEvent = async (id) => {
    try {
      const response = await api.delete(`/attend/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };