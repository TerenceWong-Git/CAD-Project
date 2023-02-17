import { apiWrapper } from "./apiUtils";

const baseURL = `${process.env.REACT_APP_BACKEND_URL}/comment`;

interface CommentMap {
  id: number;
  chinName: string;
}

export const getCommentMapAPI = async () => {
  const data = await apiWrapper<CommentMap[]>(`${baseURL}/map`);
  return data;
};

export const submitCommentAPI = async (form: {
  mapId: string;
  title: string;
  content: string;
  isThumb: string;
  files: File[];
}) => {
  const formData = new FormData();
  formData.append("mapId", form.mapId);
  formData.append("title", form.title);
  formData.append("content", form.content);
  formData.append("isThumb", form.isThumb);
  for (const img of form.files) {
    formData.append("files", img);
  }
  await apiWrapper(
    `${baseURL}/create`,
    { method: "POST", body: formData },
    true
  );
};
