// ==UserScript==
// @name         MEGA.nz Ultimately Import
// @name:zh-TW   MEGA.nz Ultimately Import /
// @name:zh-CN   MEGA.nz Ultimately Import 
// @namespace    methusela
// @version      1.0
// @description  Bypass import limit on Mega Web client & remove warning about the space usage
// @match        chrome-extension://bigefpfhnfcobdlfbedofhhaibnlghod/*
// @match        http://mega.co.nz/*
// @match        http://mega.io/*
// @match        http://mega.is/*
// @match        http://mega.nz/*
// @match        https://mega.co.nz/*
// @match        https://mega.io/*
// @match        https://mega.is/*
// @match        https://mega.nz/*
// @icon         https://mega.nz/favicon.ico?v=3
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var initWatcher = setInterval(function () {
        if (window.MegaUtils) {
            clearInterval(initWatcher);
            hookImport();
            hookFull();
            console.info('Debugging!');
        }
    }, 500);
})();

var hookImport = function () {
    MegaUtils.prototype.checkGoingOverStorageQuota = function(opSize) {
        var promise = new MegaPromise();
        loadingDialog.pshow();

        M.getStorageQuota()
            .always(function() {
            loadingDialog.phide();
        })
            .fail(promise.reject.bind(promise))
            .done(function(data) {

            promise.resolve();
        });
        return promise;
    };
}

var hookFull = function () {
    FileManager.prototype.showOverStorageQuota = null;
}
