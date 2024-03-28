import { HttpInterceptorFn } from '@angular/common/http';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

 const token = inject(LoginService).interceptToken();
 const clone = req.clone({
  setHeaders: {
    'token': token ?? ""
  }
});

return next(clone);
};
