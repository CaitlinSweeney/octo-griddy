import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';

const WEATHER_API_HOST = 'weatherapi-com.p.rapidapi.com';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {

  if (!environment.production && req.url.includes('weatherapi')) {
    const clone = req.clone({
      setHeaders: {
          'x-rapidapi-key': environment?.rapidApiKey,
          'x-rapidapi-host': WEATHER_API_HOST,
        },
    })
    return next(clone);
  }
  if (!environment.production && req.url.includes('newsapi')) {
    const clone = req.clone({
      setHeaders: {
          'X-Api-Key': environment.newsApiKey,
        },
    })
    return next(clone);
  }
  if (!!environment.production && req.url.includes('unsplash')) {
    console.log('using proxy')
    const clone = req.clone({
      setHeaders: {
          'Authorization': `Client-ID ${environment.unsplashAccessKey}`,
          'Accept-Version': '1',
        },
    })
    return next(clone);
  }
  return next(req)
};
