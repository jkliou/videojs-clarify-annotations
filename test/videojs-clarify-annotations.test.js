/*! videojs-clarify-annotations - v0.0.0 - 2015-3-10
 * Copyright (c) 2015 - 2016 Clarify, Inc.
 * Licensed under the MIT license. */
(function(window, videojs, qunit, $) {
  'use strict';

  var realIsHtmlSupported,
      player,

      // local QUnit aliases
      // http://api.qunitjs.com/

      // module(name, {[setup][ ,teardown]})
      module = qunit.module,
      // test(name, callback)
      test = qunit.test,
      // ok(value, [message])
      ok = qunit.ok,
      // equal(actual, expected, [message])
      equal = qunit.equal,
      // strictEqual(actual, expected, [message])
      strictEqual = qunit.strictEqual,
      // deepEqual(actual, expected, [message])
      deepEqual = qunit.deepEqual,
      // notEqual(actual, expected, [message])
      notEqual = qunit.notEqual,
      // throws(block, [expected], [message])
      throws = qunit.throws;

  module('videojs-clarify-annotations', {
    setup: function() {
      // force HTML support so the tests run in a reasonable
      // environment under phantomjs
      realIsHtmlSupported = videojs.Html5.isSupported;
      videojs.Html5.isSupported = function() {
        return true;
      };

      // create a video element
      var video = document.createElement('video');
      document.querySelector('#qunit-fixture').appendChild(video);

      // create a video.js player
      player = videojs(video);

      // initialize the plugin with the default options
      player.clarifyAnnotations();
    },
    teardown: function() {
      videojs.Html5.isSupported = realIsHtmlSupported;
    }
  });

  test('registers itself', function() {
    ok(player.clarifyAnnotations, 'registered the plugin');
  });
})(window, window.videojs, window.QUnit, window.jQuery);
