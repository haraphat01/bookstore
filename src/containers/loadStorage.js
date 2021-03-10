export const saveState = state => {
  try {
    const thedata = JSON.stringify(state);
    return localStorage.setItem('state', thedata);
  } catch (error) {
    return error;
  }
};

export const loadState = () => {
  try {
    const data = localStorage.getItem('state');
    if (data === null) {
      return undefined;
    }
    return JSON.parse(data);
  } catch (error) {
    return error;
  }
};
