# BlogBook

Este guia contém os pré-requisitos e as etapas para a instalação e execução do projeto **Blog-Book**.

## Atenção!
Este projeto foi desenvolvido para fins de avaliação para a disciplina de Projeto de Interfaces para Web
ministrada pelo professor Geraldo Ranthum na Universidade Tecnológica Federal do Paraná - Campi Ponta Grossa


## Sobre o sistema
O sistema desenvolvido consiste em uma aplicação front-end que utiliza os conceitos relacionados à experiência do usuário para estruturar um blog de notícias.


## Pré-requisitos

Certifique-se de que sua máquina atende aos seguintes requisitos antes de iniciar a instalação:

- **Node.js** (versão 16.0.0 ou superior)
- **npm** (versão 7.0.0 ou superior) ou **yarn** como alternativa para gerenciamento de pacotes

### Verificar Node.js e npm

Você pode verificar se o Node.js e o npm estão instalados executando os seguintes comandos no terminal:

```bash
    node -v
    npm -v
```
## Etapas de Instalação
A seguir estão todas as etapas de instalação em um único processo.

1. Clonar o Repositório
Primeiramente, clone o repositório do projeto utilizando o Git. Execute o comando:

```bash
    git clone <url-do-repositorio>
```
Depois de clonado, entre no diretório do projeto:

```bash
    cd blog-book
```

2. Instalar as Dependências
No diretório do projeto, instale todas as dependências necessárias para rodar o projeto com o seguinte comando:

```bash
    npm install
```
Esse comando vai instalar todas as dependências listadas no arquivo package.json.

3. Executar o Servidor de Desenvolvimento
Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento com o seguinte comando:

```bash
    npm run dev
```
O projeto será executado localmente, e você poderá acessá-lo de acordo com o caminho exibido no terminal após a execução do comando.

4. Gerar a Build de Produção
Se precisar gerar uma build otimizada para produção, execute o comando abaixo:

```bash
npm run build
```
Esse comando vai compilar o projeto e gerar os arquivos otimizados no diretório dist/.

5. Pré-visualizar a Build de Produção
Para testar a build de produção gerada localmente, execute o seguinte comando:

```bash
npm run preview
```
O servidor de pré-visualização será iniciado, e você poderá acessar a versão de produção no navegador.