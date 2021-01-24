import { ServerError } from './HandlerErrors';
export const Fetching = async (url, config) => {
  const { method, headers, body } = config;
  try {
    const res = await fetch(url, {
      method: method ? method : "GET",
      headers: headers ? headers : { "Content-Type": "application/json" },
      body: body ? JSON.stringify(body): undefined
    });
    const data = await res.json();
    return data
  } catch (error) {
    if (error instanceof ServerError){
        return new ServerError();
    }
  }
};