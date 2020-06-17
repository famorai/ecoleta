<h1 align="center"><img src="./docs/logo.png" alt="Ecoleta" /></h1>
<p align="center">Project developed in Next Level Week #01</p>
<p align="center">
  <a href="https://nodejs.org/en/">
    <img src="https://img.shields.io/static/v1?label=Node&message=JS&color=blue?style=plastic&logo=Node.js" alt="NodeJS" />
  </a>
  <a href="https://reactjs.org/">
    <img src="https://img.shields.io/static/v1?label=React&message=JS&color=blue?style=plastic&logo=React" alt="ReactJS" />
  </a>
  <a href="https://reactnative.dev/">
    <img src="https://img.shields.io/static/v1?label=React&message=Native&color=blue?style=plastic&logo=React" alt="React-Native" />
  </a>
</p>
<p align="center"><img src="./docs/capa.png" /></p>

# Summary

- [About](#about)
- [Technologies](#technologies-used)
- [How to Use](#how-use)
- [How to Contribute](#how-contribute)

<a id="about"></a>

## :bookmark: About

<strong>Ecoleta</strong> is a Web and Mobile application to help people find collection points for recycling in their city or region.

<a id="technologies-used"></a>

## :rocket: Technologies Used

The project was developed using the following technologies

- [TypeScript](https://www.typescriptlang.org/)
- [Knex](http://knexjs.org/)
- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)

## :art: Figma
Design: <a href="https://www.figma.com/file/GOKVazlAEsQwNjQguJ1hhc/Ecoleta?node-id=0%3A1" target="__blank">Project Link</a>

## :heavy_check_mark: Results:

- Soon

<a id="how-use"></a>

## :fire: How to Use


### :exclamation: Installation - Back-End (Server/API)
You must to clone the project in your computer. For install the dependencies and run the **Server** (develope mode) you must execute:
```bash
cd server
yarn install ou npm install
yarn dev ou npm dev
```

### :exclamation: Installation - Front-End (Web Application)
To start the **Frontend** of React use the commands:
```bash
cd web
yarn install ou npm install
yarn start ou npm start
```
Once the process is over, the page `localhost:3000` will automatically open in your browser, containing the project developed.

### :exclamation: Mobile

To view the mobile application with React Native, first you need to put the IP of your server (or computer) in the file `src / services / api.js`, and then execute the commands:
```bash
# You do NOT need to run the bottom line if you already have Expo (CLI) installed
yarn global add install expo-cli
cd mobile
yarn install
yarn start
```

Once the process is over, the page `localhost:19002` will automatically open in your browser. Connect your emulator, or test the application via `LAN`: download the * Expo * application from the Play Store or App Store and then scan the QR code.

### :exclamation: Insomnia 
To test the Ecoleta API, download and install [Insomnia](https://insomnia.rest/download/) and then click on Workspace → `Import/Export` → `Import Data` → `From File` → and select the file `Insomnia_export.json` from this repository.

<a id="how-contribute"></a>

## :recycle: How to contribute
- First, leave a ⭐ if you liked it!
- Make a Fork from this repository;
- Create a branch with your feature: `git checkout -b my-feature`
- Commit the changes: `git commit -m 'feat: My new feature'`
- Push your branch: `git push origin my-feature`

## :memo: License

This project use MIT license, see the file [LICENSE](.github/LICENSE.md) for more details

---

<h4 align="center">
    Made with 💜 by <a href="https://www.linkedin.com/in/f%C3%A1bio-morais-b34a2729/" target="_blank">Fábio Morais</a>
</h4>

