import { useState } from 'react';

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    try {
      const localVal = JSON.parse(localStorage.getItem(key));
      if (localVal === null) {
        localStorage.setItem(key, JSON.stringify(defaultValue));
        return defaultValue;
      } else {
        return localVal;
      }
    } catch (error) {
      console.error('Error reading localStorage key “' + key + '”: ', error);
      return defaultValue;
    }
  });

  const setLocalStorage = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, setLocalStorage];
}
