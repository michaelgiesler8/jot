const APP_NAME = "jot";

export function saveState(key, value) {
  try {
    const keyName = `${APP_NAME}_${key}`;
    let data = JSON.stringify(value);
    window.localStorage.setItem(keyName, data);
  } catch (error) {
    console.error('[SAVING_STATE]', error);
  }
}

export function loadState(key, instanceType) {
  try {
    const keyName = `${APP_NAME}_${key}`;
    const data = JSON.parse(window.localStorage.getItem(keyName) || "[]");
    if (Array.isArray(data) && instanceType) {
      return data.map(i => new instanceType(i));
    }
    return data;
  } catch (error) {
    console.error('[LOADING_STATE]', error);
    return [];
  }
}