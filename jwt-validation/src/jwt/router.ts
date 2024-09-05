import { Router, request, response } from 'express';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
const url = 'https://aws.amazon.com/';
import { jwtValidator } from './controler';
const router = Router();

const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const validador: any = jwtValidator(event.body);
        // response.statusCode = validador.statusCode;
        const retorno = validador.retorno;
        let validadorBoolean = false;
        //Valida se não houve nenhum erro com a validação
        if (retorno.error == undefined) {
            validadorBoolean = true
        }

        return {
            statusCode: validador.statusCode,
            body: validadorBoolean
        }
    } catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Tivemos um problema ao executar o endpoint.',
            }),
        };
    }
};

exports.handler = handler;