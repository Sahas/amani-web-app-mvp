import axios from "axios";

export const sendUrl = async (url) => {
  const { data } = await axios.post("/api/submit-url", { url });
  console.log(data);
};
