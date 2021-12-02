import { useFetch } from "../hooks/useFetch";
export default function GetData(env, id, category) {
  const dataSrc = env === "local" ? `http://localhost:3001/user/${id}` : `http://localhost:3000/user/${id}`;
  const extension = env === "local" ? `.json` : `/`;

  const path = (category) => {
    switch (category) {
      case "user":
        return `${dataSrc + extension}`;

      case "activity":
        return `${dataSrc + `/activity` + extension}`;

      case "average":
        return `${dataSrc + "/average-sessions" + extension} `;

      case "performance":
        return `${dataSrc + "/performance" + extension}`;

      default:
        return null;
    }
  };

  return useFetch(path(category));
}
