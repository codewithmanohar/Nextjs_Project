import axios from "axios";

const generateImageURL = async (dish_name) => {
  try {
    const res = await axios.get("https://api.pexels.com/v1/search", {
      headers: {
        Authorization: process.env.PEXELS_API_KEY, // <-- your API key
      },
      params: {
        query: dish_name,
        per_page: 1,
      },
    });

    const url = res.data.photos?.[0]?.src?.large || null;
    return url;
  } catch (err) {
    console.error("Error generating image:", err.response?.data || err.message);
    return null;
  }
};

export default generateImageURL;
