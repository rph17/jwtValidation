import { Router, request, response } from 'express';
import { JWTInterface } from './interface';
import { jwtDecode } from "jwt-decode";
import { numeroPrimo } from '@src/utils/functions';
import { jwtValidator } from './controler';
const router = Router();

router.post('/', async (request, response) => {
    const validador: any = jwtValidator(request.body);
    response.statusCode = validador.statusCode;
    response.json(validador.retorno);
});

export default router;