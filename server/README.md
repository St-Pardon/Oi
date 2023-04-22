# Oi! - Server-Side

## Contents
- [Prequists](#prequists)
- [Setup](#setup)
- [Navigation](#navigation)

## Prequists
To be able to styart up the project, the following tools/application should be present on your computer.

- Node (v18.13.0+ LTS)
- Command Line Interface (CLI -eg cmd, bash terminal)
- IDE/Editor 

## Setup
- Step 1 - Navigate to the server directory
```sh
cd oi/server
```

- Step 2 - Install all dependencies
```sh
npm install
```

- Step 3 - Set up your environmental variable
```sh
$ touch .env
$
$ echo 'MONGODB_URI=link-to-your-mongodb' >> .env
$ echo 'JWT_SECRET=jwt-encryption-key' >> .env
$ echo 'PORT=port-num' >> .env
$
$ cat .env
MONGODB_URI=
JWT_SECRET=
PORT=
$
```

- Step 4 - Start up server
```sh
npm run dev
...
```

### Navigation
- [Go to Home](../README.md)
- [Go to Server](../client/README.md)