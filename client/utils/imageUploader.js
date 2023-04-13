// import dotenv from 'dotenv';
// dotenv.config();

const imageUploader = (image) => {
  const data = new FormData();
  data.append('file', image);
  data.append('upload_preset', import.meta.env.VITE_UPLOAD_PRESET);
  data.append('cloud_name', import.meta.env.VITE_CLOUD_NAME);
  fetch(
    `https://api.cloudinary.com/v1_1/${
      import.meta.env.VITE_CLOUD_NAME
    }/image/upload`,
    {
      method: 'post',
      body: data,
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data.url);
      return data.url;
    })
    .catch((err) => console.log(err));
};

export default imageUploader;
