# Como utilizar o projeto

Quando baixar o projeto na pasta raiz com o nodeJS instalado, execute o seguinte comando:

```javascript
npm i
```

Este comando irá instalar as depedencias necessarias para execução do projeto

Após isto para rodar o projeto basta executar:

```javascript
npm run dev
```

Depois disso é so gerar o jwt no site jwt.io e adicionar o exemplo abaixo ao postman para utilizar a api.

Para realizar as chamandas basta colar em seu postman o seguir curl:

```cURL
curl --location 'http://localhost:3333/jwt' \
--header 'Content-Type: application/json' \
--data '{
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJSb2xlIjoiQWRtaW4iLCJTZWVkIjoiNDMiLCJOYW1lIjoiVG9uaW5obyBBcmF1am8gVG9uaW5obyBBcmF1am8gVG9uaW5obyBBcmF1am8gVG9uaW5obyBBcmF1am8gVG9uaW5obyBBcmF1am8gVG9uaW5obyBBcmF1am8gVG9uaW5obyBBcmF1am8gVG9uaW5obyBBcmF1am8gVG9uaW5obyBBcmF1am9Ub25pbmdshvIEFyYXVqbyBUb25pbmhvIEFyYXVqbyBUb25pbmhvIEFyYXVqb1RvbmluaG8gQXJhdWpvIFRvbmluaG8gQXJhdWpvIFRvbmluaG8gQXJhdWpvVG9uaW5obyBBcmF1am8gVG9uaW5obyBBcmF1am8gVG9ubiJ9.7w4nkkNZpJwn3bhO5Mjk4RLPqfPEvkz8nttC9_yrW5c"
}'
```
