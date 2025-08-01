import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "fiverr"); // your unsigned preset

  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dxgmsrpdu/image/upload",
      data
    );
    return res.data.secure_url;  // or res.data.url
  } catch (err) {
    console.error("Cloudinary upload error:", err.response?.data || err.message);
    throw err;  // rethrow to handle it upstream
  }
};

export default upload;
