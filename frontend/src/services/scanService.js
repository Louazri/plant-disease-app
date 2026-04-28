import { scanImage } from "../api/axios";

export const detectPlantDisease = async (file) => {
  try{
    const response = await scanImage(file);
    return response?.data;
  } catch (error) {
    throw error;
  }
};

