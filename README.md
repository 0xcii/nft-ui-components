<h1 align="center"><a href="https://ccdao.club"> CCDAO.club</a></h1>

<p align="center">全案运营策划，帮助零经验企业无缝转型进入Web3 🤖</p>

---

# React Component Library
Library with all shared IOTABOTS components - published on npmjs.com: [@iotabots/components](https://www.npmjs.com/package/@iotabots/components). This library contains several components to quickly and efficiently build new applications within the IOTABOTS design. 

> **_Warning:_**
This library is under active development - please do not use it in production.

## 👆 Usage
To use the `@ccdao/components` UI library in your React App, follow these steps:

### 📦 Install

```bash
# Yarn
yarn add @ccdao/components

# Npm
npm i @ccdao/components
```

```
yarn version 0.1.0 -m "Bump version to: %s [skip ci]"
yarn publish
```
### 🎨 Theme Provider
Add this to your root app file. The theme will default to dark mode. You can select `light` and `dark` theme via the `theme` property.

```tsx
// src/App.tsx
import { ThemeProvider } from '@ccdao/components';

...
<ThemeProvider theme='dark'>
  ...
</ThemeProvider>
...
```


```tsx
// src/pages/Home.tsx
import { Button } from '@ccdao/components';

...
<Button onClick={console.log("Hello 🤖")}>
  Say Hello!
</Button>
...
```
 
## ℹ️ Info

### Material UI
We extend the React UI library **[MUI](https://mui.com/)** for theming and base UI components. You can import almost all components from the MUI official docs just from `iotabots/components`, see before-after-example here

```tsx
// Don't
import { Button } from '@mui/material'

// Do
import { Button } from '@iotabots/components'
```
