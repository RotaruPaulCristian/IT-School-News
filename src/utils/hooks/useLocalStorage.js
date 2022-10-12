import { useState } from "react";

export function useLocalStorage(key, value) {
  function isJsonString(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }
  const localStorageItem = localStorage.getItem(key);
  let initialState;
  if (localStorageItem) {
    initialState = isJsonString(localStorageItem)
      ? JSON.parse(localStorageItem)
      : localStorageItem;
  } else {
    initialState = value;
  }

  const [state, setState] = useState(initialState);
  function setStateAndLocalStorage(value) {
    setState(value);
    localStorage.setItem(key, JSON.stringify(value));
  }
  return [state, setStateAndLocalStorage];
}
