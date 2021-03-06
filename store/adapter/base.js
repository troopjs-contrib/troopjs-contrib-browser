/*
 * TroopJS contrib-browser/store/adapter/base module
 * @license MIT http://troopjs.mit-license.org/ © Mikael Karon mailto:mikael@karon.se
 */
define([ "troopjs-core/component/gadget" ], function BaseAdapterModule(Gadget) {
	"use strict";
	var STORAGE = "storage";

	/**
	 * Component that lands the {@link data.store.component} on browser.
	 * @class browser.store.adapter.base
	 */
	return Gadget.extend({
		"displayName" : "contrib-browser/store/adapter/base",

		"afterPut" : function (store, key, value) {
			this[STORAGE].setItem(key, JSON.stringify(value));
		},

		"beforeGet" : function get(store, key) {
			return store.put(key, JSON.parse(this[STORAGE].getItem(key)));
		},

		"clear" : function clear() {
			return this[STORAGE].clear();
		}
	});
});