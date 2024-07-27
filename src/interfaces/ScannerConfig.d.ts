// Callback to receiver scanner data
declare type OnCallBackScanner = (data: string) => void;

declare interface ScannerConfig {
  /**
   * Scanner id
   */
  id?: string;
  /**
   * Allow receive scanner data. Default true
   */
  canScan?: boolean;
  /**
   * Allow to clear receiver data. Default true
   */
  canReset?: boolean;
  /**
   * Time to clear data. Default 500ms
   */
  timeOutToReset?: number;

  /**
   * Callback to execute after receiver data
   */
  onCallbackScanner?: OnCallBackScanner;
}
