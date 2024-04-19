export class AuthInterceptorService implements HttpInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const modifiedRequest = req.clone({
            headers: req.headers.append('Auth', this.authService.token)
        });
        return next.handle(modifiedRequest);
    }
}
