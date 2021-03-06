/**
 * @license MIT http://troopjs.mit-license.org/
 */
define([
	"troopjs-core/mixin/base",
	"troopjs-core/pubsub/hub"
], function PubSubLogger(Base, hub) {
	"use strict";

	/**
	 * This module provides a logger that simply publish logging events on hub.
	 * @class core.logger.pubsub
	 * @extends core.mixin.base
	 * @singleton
	 */

	var ARRAY_PUSH = Array.prototype.push;
	var PUBLISH = hub.publish;

	/**
	 * @method create
	 * @static
	 * @hide
	 */

	/**
	 * @method extend
	 * @static
	 * @hide
	 */

	/**
	 * @method constructor
	 * @hide
	 */
	return Base.create({
		"displayName" : "troopjs-contrib-browser/logger/pubsub",

		/**
		 * @inheritdoc core.logger.console#log
		 * @localdoc Publishes the log message on the {@link core.pubsub.hub hub}
		 * @fires core.logger.service#event-hub/logger/log
		 */
		"log": function log() {
			var args = [ "logger/log" ];
			ARRAY_PUSH.apply(args, arguments);
			PUBLISH.apply(hub, args);
		},

		/**
		 * @inheritdoc core.logger.console#warn
		 * @localdoc Publishes the log message on the {@link core.pubsub.hub hub}
		 * @fires core.logger.service#event-hub/logger/warn
		 */
		"warn" : function warn() {
			var args = [ "logger/warn" ];
			ARRAY_PUSH.apply(args, arguments);
			PUBLISH.apply(hub, args);
		},

		/**
		 * @inheritdoc core.logger.console#debug
		 * @localdoc Publishes the log message on the {@link core.pubsub.hub hub}
		 * @fires core.logger.service#event-hub/logger/debug
		 */
		"debug" : function debug() {
			var args = [ "logger/debug" ];
			ARRAY_PUSH.apply(args, arguments);
			PUBLISH.apply(hub, args);
		},

		/**
		 * @inheritdoc core.logger.console#info
		 * @localdoc Publishes the log message on the {@link core.pubsub.hub hub}
		 * @fires core.logger.service#event-hub/logger/info
		 */
		"info" : function info() {
			var args = [ "logger/info" ];
			ARRAY_PUSH.apply(args, arguments);
			PUBLISH.apply(hub, args);
		},

		/**
		 * @inheritdoc core.logger.console#error
		 * @localdoc Publishes the log message on the {@link core.pubsub.hub hub}
		 * @fires core.logger.service#event-hub/logger/error
		 */
		"error" : function info() {
			var args = [ "logger/error" ];
			ARRAY_PUSH.apply(args, arguments);
			PUBLISH.apply(hub, args);
		}
	});
});
