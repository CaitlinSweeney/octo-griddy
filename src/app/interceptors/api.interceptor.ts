import { HttpInterceptorFn } from '@angular/common/http';

const WEATHER_API_KEY = 'su1dRRdjn7mshuY1HPSoAmeKR4pop1jwE41jsnSFFIGf22kRnM';
const WEATHER_API_HOST = 'weatherapi-com.p.rapidapi.com';
const NEWS_API_KEY = 'su1dRRdjn7mshuY1HPSoAmeKR4pop1jwE41jsnSFFIGf22kRnM';
const UNSPLASH_ACCESS_KEY = 'MrB-yKTNFT9njQH5igF2pWEi-qUDNoxSj5lJlEb7gxg';
const UNSPLASH_API_SECRET = 'CddKGjM8OpZqW65Pkbc4o_YjEI_tAoKJ5s68y';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.includes('weatherapi')) {
    const clone = req.clone({
      setHeaders: {
          'x-rapidapi-key': WEATHER_API_KEY,
          'x-rapidapi-host': WEATHER_API_HOST,
        },
    })
    return next(clone);
  }
  if (req.url.includes('newsapi')) {
    const clone = req.clone({
      setHeaders: {
          'X-Api-Key': NEWS_API_KEY,
        },
    })
    return next(clone);
  }
  if (req.url.includes('unsplash')) {
    const clone = req.clone({
      setHeaders: {
          'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`,
          'Accept-Version': '1',
        },
    })
    return next(clone);
  }
  return next(req)
};
