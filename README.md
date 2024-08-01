# react-native-datawedege

rn datawedege

## Installation

```sh
npm install react-native-datawedge

```
or

```sh
yarn add react-native-datawedge
```

## Usage

```js
import { createProfile, useScanner } from 'react-native-datawedge';

Improved Description:
Creates a basic profile on datawedge based on incoming broadcast intent data.

Overwrites existing profiles:
  If a profile with the same name already exists, its configuration is replaced with the new data.
Automatically switches associated app:
  If the app is currently linked to a different profile, it will be automatically reassigned to the newly created profile.


createdProfile('ProfileName', 'com.example.SCANNER', false);

Usage

const { scanner, setConfig } = useScanner();


This step is optional as the default configuration will usually suffice.

useEffect(() => {
  setConfig({
    id: "SCANNER_ID",
    canReset: true,
    timeoutToReset: 500
})
}, [])

const DEFAULT_CONFIG: ScannerConfig = {
  canReset: true,
  canScan: true,
  timeOutToReset: 500,
};

If no id is provided, a unique identifier will be generated using React's useId hook.


Using scanner result

useEffect(() => {
  console.log(scanner)
}, [scanner])

```

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
