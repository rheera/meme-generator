export const memeAPI = {
  getAll: async function () {
    const baseURL = "https://api.imgflip.com/get_memes";
    const res = await fetch(baseURL);
    const data = await res.json();

    return data.data.memes;
  },
};
