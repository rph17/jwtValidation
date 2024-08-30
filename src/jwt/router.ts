import { Router, request, response } from 'express';
import { JWTInterface } from './interface';
import { jwtDecode } from "jwt-decode";
import { numeroPrimo } from '@src/utils/functions';
import { jwtValidator } from './controler';
const router = Router();

router.post('/', async (request, response) => {
    const validador: any = jwtValidator(request.body);
    response.statusCode = validador.statusCode;
    const retorno = validador.retorno;
    //Valida se não houve nenhum erro com a validação
    if (retorno.error == undefined) {
        response.json(true);
    } else {
        response.json(false);
    }
});

export default router;