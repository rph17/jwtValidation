import { jwtDecode } from "jwt-decode";
import { JWTInterface } from "./interface";
import { numeroPrimo } from "@src/utils/functions";

export const jwtValidator = (dados:any) => {
    
    const valJWT = dados.jwt;
    let statusCode = 422;
    let retorno: {} = {};
    
    try {
        const decoded: JWTInterface = jwtDecode(valJWT);
        
        const hasKey = (obj: {}, key: string) => Object.keys(obj).includes(key);
        if ((!hasKey(decoded, 'Name') && !hasKey(decoded, 'Role') && !hasKey(decoded, 'Seed')) ||
            Object.keys(decoded).length != 3) {
            retorno = {error: true, msg: "Claims inválido para operação!"};
        } else {
            console.log(decoded.Role);
            if (decoded.Role !== "Admin" && decoded.Role !== "Member" && decoded.Role !== "External") {
                retorno = {error: true, msg: "Role inválido para operação!"};
            } else if (/\d+/.test(decoded.Name) || decoded.Name.length > 256) {
                retorno = {error: true, msg: "Name inválido para operação!"};
            } else if (!numeroPrimo(decoded.Seed)) {
                retorno = {error: true, msg: "Número inválido para operação!"};
            } else {
                statusCode = 200;
                retorno = decoded;
            }
        }
        console.log("JWT", Object.keys(decoded).length)
    } catch (error) {
        retorno = {error: true, msg: "JWT inválido para operação!"};
    }

     return {retorno, statusCode}
}