# Petgur

Petgur is a simple yet intuitive website that allows you to browse our little friends. In addition, you can download their images to use as a background or to bring a smile to your face.

## Goals

This app aims to accomplish the following goals:

- [x] Display a list of images and their associated data in a compelling and interactive way from the following endpoint (https://eulerity-hackathon.appspot.com/pets).
  - [x] Use the `fetch` API for getting this data.
- [x] Allow the user to select several images and download them.
- [x] Ability to "Select All" and "Clear Selection".
- [x] Ability to sort the pets by their name alphabetically in ascending and descending order.
- [x] Have a search bar to filter displayed images by their title or description.
- [x] Use [`styled-components`](https://styled-components.com/) for the UI.
- [x] Use [`react-router-dom`](https://reactrouter.com/web/guides/quick-start) for navigation.
  - [x] Have an additional "About Me" page or any other pages that may be relevant.
- [x] Create a custom hook for loading & managing data.
- [x] Manage global and local state effectively (ie: by using context, redux, hooks, etc.).
- [x] Document code where necessary.

## Design

This website was built using:

[![vite][vite]][vite-url]
[![React][React]][React-url]
[![TypeScript][TypeScript]][TypeScript-url]
[![React Router][React Router]][React Router-url]
[![styled-components][styled-components]][styled-components-url]

- [`file-saver`](https://github.com/eligrey/FileSaver.js): Makes saving files to your device easier.
- [`jszip`](https://github.com/Stuk/jszip): Makes creating zip files easy.

## Installation

1. Clone the repository.
   ```sh
   git clone https://github.com/cyanChill/petgur.git
   ```
2. Install the dependencies.
   ```sh
   pnpm i
   ```
3. Run the app in development or production mode.

   ```sh
   # Development Mode:
   pnpm dev

   # Production Mode:
   pnpm build && pnpm preview
   ```

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[React]: https://img.shields.io/badge/React-222222?style=for-the-badge&logo=React&logoColor=61DAFB
[React-url]: https://reactnative.dev/
[React Router]: https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=React+Router&logoColor=FFFFFF
[React Router-url]: https://reactrouter.com/web/guides/quick-start
[styled-components]: https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=FFFFFF
[styled-components-url]: https://styled-components.com/
[TypeScript]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=FFFFFF
[TypeScript-url]: https://www.typescriptlang.org/
[Vite]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=FFFFFF
[Vite-url]: https://vite.dev/
