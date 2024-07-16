// import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Keyboard, TextInput, StyleSheet, View } from 'react-native';

interface ScannerProps {
  scannerId?: string;
  children?: React.ReactNode;
  enableScanner?: boolean;
  errorMessage?: string;
  message?: string;
  resetFocus?: boolean;
  showErrorAnimation?: boolean;
  startAnimation?: boolean;
  fixed?: boolean;

  onChangeScanner: (text: string) => void;
  onFinishAnimation?: () => void;
  onFocusResetCallback?: () => void;
}

const MESSAGE =
  'Você pode usar o leitor de códigos de barras para ir diretamente até o item da via cega.';

export const Scanner: React.FC<ScannerProps> = ({
  children,
  errorMessage,
  enableScanner = true,
  onChangeScanner,
  onFinishAnimation,
  showErrorAnimation,
  startAnimation = true,
  resetFocus,
  message = MESSAGE,
  fixed = false,
  scannerId,
  ...rest
}) => {
  const [search, setSearch] = useState<string>();
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  const ref = useRef<TextInput>();
  // const navigation = useNavigation();

  // const { barcode, setScannerConfig } = useScanner();

  // useEffect(() => {
  //   setScannerConfig({ canScan: enableScanner, id: scannerId });
  // }, [enableScanner, scannerId]);

  // useEffect(() => {
  //   if (barcode) {
  //     onChangeScanner(barcode);
  //   }
  // }, [barcode]);

  useEffect(() => {
    Keyboard.addListener('keyboardDidHide', () => {
      ref.current?.focus();
    });
  }, [ref.current]);

  useEffect(() => {
    if (!enableScanner) {
      return ref.current?.clear();
    }
    if (search && !Keyboard.isVisible()) {
      onChangeScanner(search.trim());
      console.log({ search });
      setSearch(undefined);

      setTimeout(() => {
        ref.current?.focus();
      }, 100);
    }
  }, [search, ref.current, enableScanner]);

  useEffect(() => {
    if (ref.current && !intervalId) {
      const id = setInterval(() => {
        if (!Keyboard.isVisible()) {
          ref.current?.focus();
          console.log('olar');
        }
      }, 1000);
      setIntervalId(id);
    }
  }, [ref.current, intervalId]);

  useEffect(() => {
    if (enableScanner && !search) {
      ref.current?.clear();
    }
  }, [ref.current, enableScanner, search]);

  // useEffect(
  //   () =>
  //     navigation.addListener('beforeRemove', () => {
  //       clearInterval(intervalId);
  //     }),
  //   [navigation, intervalId]
  // );

  const onChangeText = (data: string) => {
    if (enableScanner) return setSearch(data);

    ref.current?.clear();
  };

  return (
    <View {...rest}>
      <View style={styles.textInputContainer}>
        <TextInput
          autoFocus
          showSoftInputOnFocus={false}
          ref={ref}
          keyboardType="numeric"
          placeholder="Buscar"
          style={styles.textInput}
          value={search}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    position: 'absolute',
    zIndex: -10000,
    top: 0,
    bottom: 0,
    left: 0,
    width: 0,
  },
  textInput: {
    height: 1,
    width: 0,
  },
});
