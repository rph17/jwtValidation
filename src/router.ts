import { Router } from 'express';
import JWTRouter from '@src/jwt/router';
class Routes {
    static define(router: Router): Router {
        router.use('/jwt', JWTRouter);

        return router;
    }
}

export default Routes.define(Router());