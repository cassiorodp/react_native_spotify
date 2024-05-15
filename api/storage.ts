import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveDataToLocal = async (key: string, data: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving data to local storage:', error);
  }
};

export const getDataFromLocal = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error('Error getting data from local storage:', error);
    return null;
  }
};
