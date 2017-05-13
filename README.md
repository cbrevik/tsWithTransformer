# React Native (0.45+) & Typescript & Transformer

Using [react-native-typescript-transformer](https://github.com/ds300/react-native-typescript-transformer) with the newly landed custom source extensions in RN 0.45.0-rc.0.

## Work in progress

Bugs:

- Major: importing `bugsnag-react-native` results in white screen in app
- Minor: imported `bugsnag-react-native` gives `[ts] Cannot find module 'bugsnag-react-native'.` intellisense error in VSCode. Compilation works fine though.