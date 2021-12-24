# Do basico ao avancado de como construir uma api
A ideia desse repositorio é ajudar pessoas de nivel basico a medio, que nao tenham muito conhecimento de backend a construirem sua primeira api.  

Topicos principais: 
1. Instalando o ambiente na sua maquinas 
2. Construção de uma api(do nivel mais basico ao avancado)
3. Instalacao e nocao basica de bancos de dados(postgres)
4. Docker
5. Como subir a sua aplicacao em um ambiente de cloud(AWS, azuer ou google cloud)

## Linguagem de programacao
A linguagem escolhida é javascript. 
Motivacoes para a escolha:
- É uma linguagem amplamente utilizada no mercado
- Torna mais simples o entendimento do codigo de quem já tem experiencia com front-end 

## Instalando o ambiente na sua maquinas
Como o javascript irá ser executado diretamente em nosso computador e nao por intermedio do navegador, precisamos de algum programa que vai executar nosso codigo, vamos usar um dos mais comuns hoje no mercado que é o [nodejs](https://github.com/nodejs/node)

### Nodejs
Em vez de instalar o node diretamente, vamos dar preferencia por usar um ferramente que vai fazer esse trabalho por nós. 
[NVM](https://github.com/nvm-sh/nvm) é um gerenciador de versoes  de node, é muito comum quando se trabalha com js executar codigos que usam versoes diferentes do nodejs, dai o nvm pode ser uma grande mao na roda.

#### Nvm
Seguindo o tutorial da pagina do github do nvm

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

#### Instalando a versao mais recente do nodejs

```
nvm install node
```

### usando a versao instalada do node

```
nvm use node
```

### Testando uma execucao de um codigo basico de js

```
 node instalacao-do-ambiente/nvm_teste.js 
```

resposta esperada

```
Sua instalação do nvm e nodejs funcionaram
```

## Capitulos
A partir desse momento vamos cobrir os topicos 2 a 5 do tutorial. No capitulo 1 vamos fazer uma implemetacao rudimentar da nossa api e no capitulos subsequentes vamos evoluindo ela usando novas tecnologias.

[1.](capitulo1/CAP1.MD) Implementacao inicial