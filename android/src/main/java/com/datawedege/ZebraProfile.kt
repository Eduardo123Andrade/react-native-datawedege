package com.datawedege

import android.os.Bundle

class ZebraProfile(val profileName: String, val config: Bundle) {
  constructor() : this("", Bundle()) {
  }
}
