# Definição

É um protocolo de comunicação web

## Possui "verbos"

-- Esses verbos ajudam a identificar que tipo de ação queremos realizar numa determinada URL
-- Uma URL pode ter mais de um verbo e executar uma ação para cada um
-- EXEMPLO: GET/users pode executar uma outra ação como POST/users

## Verbos principais

- GET -> utilizados para solicitar dados
- POST -> utilizado para cadastrar dados
- PUT/PATCH -> utilizado para atualizar algum dado
- DELETE -> utilizado para deletar algum dado

## Um verbo junto com uma URL forma uma requisição

# Status das requisições HTTP

- Os status ajudam a definir como a requisição foi processada
- Ao fazer uma requisição, o cliente sempre terá uma resposta
- Os status são código numéricos e cada um possui uma representação
- Os status 100 são apenas respostas informativas ao cliente
- Os da família 200, são quando uma requisição foi processada com sucesso

-- 200 = Requisição processada com sucesso, normalmente em uma resposta a um GET
-- 2001 = Registro criado com sucesso, normalmente em resposta a um POST
