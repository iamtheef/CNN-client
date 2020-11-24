import { client } from "../Utils/axios";

export const uploadImg = async (image: any) => {
  let file = new FormData();
  file.append("image", image, image.name);

  return new Promise((resolve, reject) => {
    client
      .post("/upload/", file)
      .then((res) => {
        resolve(res.data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
