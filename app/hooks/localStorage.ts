export const syncLocalStorage = (key, data) => {
  try {
    console.log("settign key to ls");
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error(e);
  }
};
export const getLocalStorage = (key) => {
  try {
    // if (typeof window === "undefined") return [];
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error(e);
    return [];
  }
};
