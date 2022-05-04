<h1> Procura-se </h1>

## Sobre o Projeto
</br>

Esse é um projeto com o requisitos minimos do projeto de programação mobile do 6º Período - Parte 2.

</br>

## Construído com

* [NodeJS](https://nodejs.org/en/) - Ambiente de execução Javascript.
* [React Native](https://reactnative.dev/) - O framework para desenvolvimento Mobile.
* [Expo](https://expo.io/) - Facilitador de visualização / construção.
* [Redux](https://redux.js.org/) - Gerenciador de Estados do Aplicativo.
* [JSON-Server](https://www.npmjs.com/package/json-server) - Banco de Dados simulado.

</br>

## Rodando o Projeto

- É Necessário : 
    - Ter o Expo Instalado no PC
    - Ter o Expo Go Instalado no Celular

```bash
# Clone este repositório
$ git clone https://github.com/KansasMyers/prog-mobile.git

# Acesse a pasta do Projeto
$ cd prog-mobile

# Baixe as dependências
$ yarn install
ou
$ npm install

# Execute o comando para iniciar o banco de dados
# Lembre-se de substituir os parâmetros 'PORTA_AQUI' e 'SEU_IP_LOCAL_AQUI'
# Ex: json-server database.json -p 3000 -H 191.0.0.100
$ yarn json-server database.json -p PORTA_AQUI -H SEU_IP_LOCAL_AQUI
ou 
$ npm json-server database.json -p PORTA_AQUI -H SEU_IP_LOCAL_AQUI

# Adicionar o url da sua api json-server no arquivo de manifesto app.json na raiz do projeto para ele adicionar as variáveis de ambiente.
# Substituir a propriedade expo.extra.apiUrl no arquivo app.json. Ex:
"extra": {
    "apiUrl": "http://191.0.0.100:3000/"
}
# Obs: Lembre-se da barra no final
$ vim app.json

# Execute o comando para dar start no projeto
$ yarn start
ou
$ npm start

# O Expo é iniciado no pc mediante o browser e após esse processo acessar o celular e executar o expo e fazer a leitura do QRCode que é mostrado no bowser pelo Expo.
```

---