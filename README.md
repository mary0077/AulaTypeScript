# Configuração do TypeScript

1. Inicializar um projeto Node.js
2. Instalar o TypeScript
  2.1. Instalação Global: `npm install -g typescript`
  2.2. Instalação Local (Dentro do Projeto): `npm install typescript`
3. Utilizar o TypeScript instalado para transpilar o nosso código (converter nosso código TS para JS).
   3.1. `npx tsc index.ts` ou `npx tsc index.ts --watch` -> Para atualizações automáticas 
      `npx tsc --init` e depois `npx tsc`-> Assim consigo compilar todos arquivos ts