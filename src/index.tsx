import { NativeModules, Platform } from 'react-native';
export { useScanner } from './useScanner';

const LINKING_ERROR =
  `The package 'react-native-datawedege' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const DatawedegeModule = isTurboModuleEnabled
  ? require('./NativeDatawedege').default
  : NativeModules.Datawedege;

const Datawedege = DatawedegeModule
  ? DatawedegeModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

/**
 * Function to start a receiver
 * @param id id of scanner receiver
 * @returns
 */
export function onInit(id: string) {
  return Datawedege.onInit(id);
}

/**
 * Function to created a profile on Datawedege
 * @param profileName Name of zebra profile
 * @param intentAction Intent action
 * @param keystrokeEnabled Optional params to enable keystroke. Default is false
 * @returns
 */

export function createProfile(
  profileName: string,
  intentAction: string,
  keystrokeEnabled = false
) {
  return Datawedege.createProfile(profileName, intentAction, keystrokeEnabled);
}
