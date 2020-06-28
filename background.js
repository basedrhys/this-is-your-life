// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({birthDateSet: true}, function() {
    console.log("The birthdate is set.");
  });
  chrome.storage.sync.set({birthYear: 1990, birthMonth: 11, birthDay: 20}, function() {
    console.log("The birthValues is set.");
  });
});
