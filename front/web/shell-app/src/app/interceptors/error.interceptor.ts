import { HttpInterceptorFn } from '@angular/common/http';


export const errorInterceptor: HttpInterceptorFn = (req, next) => next(req).pipe(
// TODO mapear errores 401/403/500, mostrar toasts o redirigir.
);
