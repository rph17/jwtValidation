# Linguagem e instalação

O projeto foi desenvolvido em nodejs, para que seja possivel executa-lo instale a linguagem em seu ambiente caso não tenha seguindo a documentação: https://nodejs.org/en/learn/getting-started/how-to-install-nodejs

Toda estrutura do projeto consiste em APIGateway AWS e Lambdas gerando logs no cloudwatch.

# Como utilizar o projeto :zap:

Abra o terminal e execute o clone do projeto:

```javascript
git clone https://github.com/rph17/jwtValidation.git
```

Entre na pasta do projeto

```javascript
cd jwtValidation/jwt-validation
```

Agora execute o seguinte comando:

```javascript
npm i
```

Este comando irá instalar as depedencias necessarias para execução do projeto

Após isto para rodar o projeto basta executar:

```javascript
serverless dev
```

Depois disso é so gerar o jwt no site jwt.io e adicionar o exemplo abaixo ao postman para utilizar a api.

Recomendamos o postman para executar a api de jwt: https://www.postman.com/downloads/

Para realizar as chamandas basta importar no postman ou a ferramente de preferência o curl:

```cURL
curl --location 'https://ss0c2s1ff9.execute-api.us-east-1.amazonaws.com/jwt' \
--header 'Content-Type: application/json' \
--data '{
    "jwt": "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJTZWVkIjoiNzg0MSIsIk5hbWUiOiJUb25pbmhvIEFyYXVqbyJ9.QY05sIjtrcJnP533kQNk8QXcaleJ1Q01jWY_ZzIZuAg"
}'
```

Após importar e fazer uma requisição ficara da seguinte forma:

Um exemplo de sucesso
![Exemplo Postman Sucesso](https://i.postimg.cc/02rbHHy2/Captura-de-tela-de-2024-08-30-12-57-20.png)

Um exemplo de erro
![Exemplo Postman Error](https://i.postimg.cc/SxsFGWZ8/Captura-de-tela-de-2024-08-30-12-52-26.png)

## O que a plataforma é capaz de fazer :checkered_flag:

:trophy: Indentificar um JWT válido 

:trophy: Validador de claims sendo eles (Name, Role e Seed)

:trophy: Validador de nome, não contendo números e tamanho maior que 256 caracteres.

:trophy: Validador de roles

:trophy: Validador de números primos na Seed


Status do Projeto: Concluido :heavy_check_mark: