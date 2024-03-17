import axios from "axios";

const endpoint = "https://qtify-backend-labs.crio.do";
// https://qtify-backend-labs.crio.do/albums/top
// https://qtify-backend-labs.crio.do/albums/new
// https://qtify-backend-labs.crio.do/album/:slug
// https://qtify-backend-labs.crio.do/songs
// https://qtify-backend-labs.crio.do/faq
// https://qtify-backend-labs.crio.do/genres

const fetchbycategory = async (source) => {
  try {
    const response = await axios.get(endpoint + source);
    return response.data;
  } catch (error) {
    console.log("somehting error occured");
  }
};

export default fetchbycategory;
