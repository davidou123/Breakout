/**
 * Copyright (c) 2011-2012 Jeff Hoefs <soundanalogous@gmail.com>
 * Released under the MIT license. See LICENSE file for details.
 */

JSUTILS.namespace('BO.ioBoardEvent');

BO.IOBoardEvent = (function() {

	var IOBoardEvent;

	// dependencies
	var Event = JSUTILS.Event;

	/**
	 * @exports IOBoardEvent as BO.IOBoardEvent
	 * @constructor
	 * @augments JSUTILS.Event
	 * @param {String} type The event type
	 */
	IOBoardEvent = function(type) {

		this.name = "IOBoardEvent";
		
		// call the super class
		// 2nd parameter is passed to EventDispatcher constructor
		Event.call(this, type);
	};

	// events
	/** @constant */
	IOBoardEvent.ANALOG_DATA = "analogData";
	/** @constant */
	IOBoardEvent.DIGITAL_DATA = "digitalData";
	/** @constant */
	IOBoardEvent.FIRMWARE_VERSION = "firmwareVersion";
	/** @constant */
	IOBoardEvent.FIRMWARE_NAME = "firmwareName";
	/** @constant */
	IOBoardEvent.STRING_MESSAGE = "stringMessage";
	/** @constant */
	IOBoardEvent.SYSEX_MESSAGE = "sysexMessage";
	/** @constant */
	IOBoardEvent.PIN_STATE_RESPONSE = "pinStateResponse";
	/** @constant */
	IOBoardEvent.READY = "ioBoardReady";
	/** @constant */
	IOBoardEvent.CONNECTED = "ioBoardConnected";	


	IOBoardEvent.prototype = JSUTILS.inherit(Event.prototype);
	IOBoardEvent.prototype.constructor = IOBoardEvent;

	return IOBoardEvent;

}());