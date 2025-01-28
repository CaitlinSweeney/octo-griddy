import { HttpInterceptorFn } from '@angular/common/http';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.includes('weatherapi')) {
    const clone = req.clone({
      setHeaders: {
          'x-rapidapi-key': 'su1dRRdjn7mshuY1HPSoAmeKR4pop1jwE41jsnSFFIGf22kRnM',
          'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
        },
    })
    return next(clone);
  }
  if (req.url.includes('newsapi')) {
    const clone = req.clone({
      setHeaders: {
          'X-Api-Key': 'e2260d2b82e6404e811598c2b97b9b53',
        },
    })
    return next(clone);
  }
  if (req.url.includes('unsplash')) {
    // secret: CddKGjM8OpZqW65Pkbc4o_YjEI_tAoKJ5s68y
    const clone = req.clone({
      setHeaders: {
          'Authorization': 'MrB-yKTNFT9njQH5igF2pWEi-qUDNoxSj5lJlEb7gxg',
          'Accept-Version': '1',
        },
    })
    return next(clone);
  }
  return next(req)
};
