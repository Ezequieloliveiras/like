import axios from "axios";

const tokenS = "d889e2bc39e57106a229e1a31fe14355d7a8887c518e9bec0cef3ed657537a76";

export default async function fetchData() {
  try {
    const response = await axios.get("https://api.sympla.com.br/events", {
      headers: {
        "s_token": tokenS,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return null;
  }
}

// Para utilizar esta função, você pode chamá-la de onde precisar, por exemplo:
fetchData().then(data => console.log(data));
