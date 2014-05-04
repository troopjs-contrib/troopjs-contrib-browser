/**
 * @license MIT http://troopjs.mit-license.org/
 */
define([
	"module",
	"troopjs-utils/merge"
], function LoomConfigModule(module, merge) {
	"use strict";

	/**
	 * @class contrib-browser.fillcache.config
	 * @extends requirejs.config
	 * @inheritdoc
	 * @localdoc This module is to provide configurations for {@link contrib-browser.fillcache.service} from it's AMD module config.
	 *
	 * 	requirejs.config(
	 * 	{
	 * 		config: { "troopjs-contrib-browser/fillcache/config" : { "script-tag-selector" : "script[type='application/json']", ...  } }
	 * 	})
	 * @protected
	 * @static
	 */
	return merge.call({
		/**
		 * @cfg {String} script-tag-selector CSS selector for script tags that contains troop data to fill the cache with.
		 */
		"script-tag-selector" : "script[type='application/json'][data-query]"
	}, module.config());
});
