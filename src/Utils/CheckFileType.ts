export const checkFileType = (file: Blob) => {
  let type = file?.type.split("/")[1];
  let allowedTypes = ["png", "jpg", "jpeg"];
  if (allowedTypes.includes(type)) return true;
  else return false;
};
