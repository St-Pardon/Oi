// import dotenv from 'dotenv';
// dotenv.config();

const imageUploader = (image) => {
  console.log(
    import.meta.env.VITE_UPLOAD_PRESET,
    import.meta.env.VITE_CLOUD_NAME
  );
  const data = new FormData();
  data.append('file', image);
  data.append('upload_preset', import.meta.env.VITE_UPLOAD_PRESET);
  data.append('cloud_name', import.meta.env.VITE_CLOUD_NAME);
  const link = fetch(
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
      return data.url;
    })
    .catch((err) => console.log(err));

  return link;
};

export default imageUploader;
