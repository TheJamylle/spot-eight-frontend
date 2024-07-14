
##  **SpotEight  _- SpotMusic do Grupo 8_**

### Introdução

O projeto SpotEight é uma aplicação de streaming de músicas com gerenciamento de playlists e features relacionadas.

### Tecnologias Utilizadas

-   Linguagem de Programação: TypeScript
-   Biblioteca de Interface do Usuário: React
-   Gerenciamento de Estado: Effector
-   Formatação de Código: ESLint e Prettier
-   Gerenciamento de Variáveis de Ambiente: .env
-   Realização de Requisições HTTP: Axios

### Requisitos de Sistema

-   Node.js 16 ou superior
-   npm ou yarn

### Instalação

1.  **Clonar o Repositório:**
    
    Bash
    
    ```
    git clone https://github.com/TheJamylle/spot-eight-frontend
    
    ```
    
    
2.  **Instalar Dependências:**
    
    Bash
    
    ```
    cd spot-eight-frontend
    npm install || yarn install
    
    ```
    
    
3.  **Executar o Projeto:**
    
    Bash
    
    ```
    npm start || yarn start
    
    ```
    
    

### Branches e Git Flow

Este projeto utiliza o Git Flow para gerenciar o fluxo de trabalho de desenvolvimento. As branches principais são:

-   **master:** Branch principal do projeto, contendo a versão mais estável e pronta para produção.
-   **staging:** Branch utilizada para validação das alterações antes de serem mescladas na branch master.
-   **develop:** Branch de desenvolvimento principal, onde as novas funcionalidades são implementadas.

### Branches de Tarefa

Para organizar as tarefas de desenvolvimento, utilizamos branches de tarefa com o seguinte padrão de nomeação:

-   `feat/<nome-da-funcionalidade>`: Utilizada para implementar novas funcionalidades.
-   `fix/<nome-do-bug>`: Utilizada para corrigir bugs.
-   `hotfix/<nome-do-problema>`: Utilizada para corrigir problemas urgentes que afetam a produção.
-   `chore/<nome-da-tarefa>`: Utilizada para tarefas de manutenção do código, como refatoração, documentação, etc.

### Fluxo de Trabalho

O fluxo de trabalho geral segue estas etapas:

1.  **Criar uma branch de tarefa:** Crie uma branch de tarefa com o nome apropriado para sua tarefa.
2.  **Implementar a tarefa:** Implemente sua tarefa na branch de tarefa.
3.  **Testar a tarefa:** Teste sua tarefa completamente para garantir que funcione corretamente.
4.  **Criar um pull request:** Crie um pull request para mesclar sua branch de tarefa na branch develop.
5.  **Revisar o pull request:** Revise o pull request para garantir que o código esteja limpo, bem documentado e atenda aos padrões do projeto.
6.  **Mesclar o pull request:** Se o pull request for aprovado, mescle-o na branch develop.
7.  **Criar um pull request para staging:** Crie um pull request para mesclar a branch develop na branch staging.
8.  **Testar em staging:** Teste o código na branch staging para garantir que funcione corretamente no ambiente de staging.
9.  **Mesclar o pull request para staging:** Se o pull request for aprovado, mescle-o na branch staging.
10.  **Criar um pull request para master:** Crie um pull request para mesclar a branch staging na branch master.
11.  **Revisar e mesclar o pull request para master:** Revise o pull request para master e, se aprovado, mescle-o na branch master.
12.  **Implantar em produção:** Implemente a branch master em produção.
