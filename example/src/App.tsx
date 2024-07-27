import * as React from 'react';

import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { createProfile, useScanner } from 'react-native-datawedege';
import { ModalScanner, Scanner } from './components';

createProfile('Zebra Scanner', 'br.com.example.zebra.SCANNER');

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();
  const [showModal1, setShowModal1] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  const [showModal3, setShowModal3] = React.useState(false);

  const [_scanner, setBarcode] = React.useState<string>();
  const [_scanner2, setBarcode2] = React.useState<string>();

  const { scanner, setConfig } = useScanner();

  const onRequestClose = () => {
    setShowModal1(false);
    setShowModal2(false);
    setShowModal3(false);
  };

  React.useEffect(() => {
    const canScan = !(showModal1 || showModal1 || showModal1);
    console.log({ canScan });
    // setConfig({ canScan, canReset: false });
    setConfig({});
  }, [showModal1, showModal1, showModal1]);

  React.useEffect(() => {
    console.log({ _scanner });
  }, [_scanner]);

  // React.useEffect(() => {
  //   if (ref.current) {
  //     console.log(ref.current.state);
  //   }
  // }, [ref.current]);

  return (
    <View style={styles.container}>
      <Text>Result: {scanner}</Text>
      <Text>_Result: {_scanner}</Text>

      <View
        style={{
          paddingTop: 20,
          gap: 20,
        }}
      >
        {/* <Scanner onChangeScanner={setBarcode} /> */}

        <TextInput
          // multiline
          // autoFocus
          selectTextOnFocus
          // showSoftInputOnFocus={false}
          style={{
            borderWidth: 1,
            width: 300,
            height: 100,
          }}
          placeholder="aaaaaaaaa"
          value={_scanner2}
          onChangeText={setBarcode2}
        />
        <Button title="Modal 1" onPress={() => setShowModal1(true)} />

        {/*<Button title="Modal 2" onPress={() => setShowModal2(true)} />

        <Button title="Modal 3" onPress={() => setShowModal3(true)} /> */}
      </View>

      <ModalScanner
        visible={showModal1}
        onRequestClose={onRequestClose}
        title="Modal 1"
      />

      <ModalScanner
        visible={showModal2}
        onRequestClose={onRequestClose}
        title="Modal 2"
      />

      <ModalScanner
        visible={showModal3}
        onRequestClose={onRequestClose}
        title="Modal 3"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
