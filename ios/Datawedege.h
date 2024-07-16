
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNDatawedegeSpec.h"

@interface Datawedege : NSObject <NativeDatawedegeSpec>
#else
#import <React/RCTBridgeModule.h>

@interface Datawedege : NSObject <RCTBridgeModule>
#endif

@end
