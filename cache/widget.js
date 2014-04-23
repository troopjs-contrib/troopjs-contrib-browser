/*
 * TroopJS contrib-browser/cache/widget
 * @license MIT http://troopjs.mit-license.org/ © Mikael Karon mailto:mikael@karon.se
 */
define([
	"troopjs-dom/component/widget",
	"poly/json"
], function CacheWidgetModule(Widget) {
	"use strict";

	/**
	 * A widget that can prime the cache from innerText
	 * @class browser.cache.widget
	 * @extends dom.component.widget
	 */

	var UNDEFINED;
	var CACHE = "cache";

	/**
	 * @method constructor
	 * @inheritdoc dom.component.widget
	 * @param {jQuery|HTMLElement} $element The element that this widget should be attached to
	 * @param {String} displayName A friendly name for this widget
	 * @param {data.cache.component} cache Cache instance
	 * @throws {Error} If no $element is provided
	 * @throws {Error} If $element is not of supported type
	 * @throws {Error} If cache is not provided
	 */
	return Widget.extend(function CacheWidget($element, displayName, cache) {
		if (cache === UNDEFINED) {
			throw new Error("No cache provided");
		}

		/**
		 * Current cache
		 * @private
		 * @readonly
		 * @property {data.cache.component} cache
		 */
		this[CACHE] = cache;
	}, {
		"displayName" : "contrib-browser/cache/widget",

		"sig/initialize" : function onInitialize() {
			this[CACHE].put(JSON.parse(this.$element.text()));
		}
	});
});
