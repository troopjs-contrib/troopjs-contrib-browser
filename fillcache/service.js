/*
 * TroopJS contrib-browser/service/popcache
 * @license MIT http://troopjs.mit-license.org/ © Mikael Karon mailto:mikael@karon.se
 */
define([
	"./config",
	"./widget",
	"troopjs-core/component/service",
	"jquery"
], function CacheFillerService(config, FillCacheWidget, Service, $) {
	"use strict";

	var CACHE = "cache";
	var SCRIPT_SEL = config["script-tag-selector"];

	/**
	 * Try out all possible ways to populate {@link data.cache.component the cache} in browser environment. This service
	 * is generally useful to pre-fill data cache before any {@link data.query.service#event-hub/query} taken place to
	 * eliminate the need for network requests.
	 *
	 * The service will attempt to read data (in troop query format) from the following sources.
	 *
	 * ## json script tag in page
	 *
	 * Any json data embedded in a script tag (default to **application/json** type script tag with a `data-query` attribute):
	 *
	 * ```
	 * 	<script type="application/json" data-query="foo!123">
	 * 	[{
	 * 		"foo": "bar",
	 * 		"maxAge": 14400,
	 * 		"collapsed": false,
	 * 		"id": "foo!123"
	 * 	}]
	 * 	</script>
	 * ```
	 *
	 * ## Other sources to be implemented...
	 *
	 * @class contrib-browser.fillcache.service
	 * @extends core.component.service
	 */

	/**
	 * @member contrib-browser.serivce.popcache.config
	 * @cfg {String} script-tag-selector The CSS selector used for matching script tag that contains cache data.
	 */

	return Service.extend(function CacheFillerService(cache) {
		if (!cache) {
			throw new Error("no cache provided");
		}
		this[CACHE] = cache;
	},{
		"displayName" : "contrib-browser/fillcache/service",
		"sig/start" : function onStart() {
			var cache = this[CACHE];
			$(SCRIPT_SEL).each(function(i, el) {
				var widget = FillCacheWidget($(el), null, cache);
				widget.start(function() { widget.stop(); });
			});
		}
	});
});
