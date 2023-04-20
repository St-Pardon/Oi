# Oi! Client-Side
## Contents
- [Prequists](#prequists)
- [Setup](#setup)
- [Navigation](#navigation)

## Prequists
To be able to styart up the project, the following tools/application should be present on your computer.

- Web Broswer
- Command Line Interface (CLI -eg cmd, bash terminal)
- IDE/Editor 

## Setup
- Step 1 - Navigate to the server directory
```sh
cd oi/client
```

- Step 2 - Install all dependencies
```sh
npm install
```

- Step 3 - Set up your environmental variable
```sh
$ touch .env
$
$ echo 'VITE_CLOUD_NAME=cloudinary-cloud-name' >> .env
$ echo 'VITE_UPLOAD_PRESET=cloudinary-upload-preset-code' >> .env
$
$ cat .env
MONGODB_URI=
JWT_SECRET=
PORT=
$
```

- Step 4 - Opne the [api.service.jsx](./src/services/api/api.service.jsx) and change the `BaseURI` to that of your backend
```js
const BaseURI = 'https://127.0.0.1:[PORT]/api/v1';
```

- Step 5 - Start up server
```sh
npm run dev
...
```

### Navigation
- [Go to Home](../README.md)
- [Go to Server](../server/README.md)