export const headers = {
  'Content-Type': 'application/json',
  'x-rapidapi-key': 'su1dRRdjn7mshuY1HPSoAmeKR4pop1jwE41jsnSFFIGf22kRnM',
  'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
};
export const weatherAPI = 'https://weatherapi-com.p.rapidapi.com/current.json';

export const getRequest = async (query?: string, url?: string) => {
  const options = {
    method: 'GET',
    headers,
  };
  const _url =
    url || `https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`;
  try {
    const resp = await fetch(_url, options);
    const res = await resp.json();
    console.log({ res });
    return res;
  } catch (error) {
    console.error({ error });
    return error;
  }
};
