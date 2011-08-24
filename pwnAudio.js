

  
function AudioController(audioDivId) {
	// Controls audio elements.
	/*--------------------------Properties----------------------------------------
	 * Property Name       | Type                  | Description
	 * ---------------------------------------------------------------------------
	 * +count              : Integer   {RO}        | Number of sounds for the controller
	 * +sounds             : AudioSound[]          | An array of AudioSound objects
	 * +channels           : Integer   {RO}        | Number of channels that can be used
	 * - audioBox  
	 ----------------------------------------------------------------------------*/
	 
	var count = 0;
	var sounds = "";
	var channels = 0;
	
	// Getters and Setters
	
	this.__defineGetter__("audioBox", function() {
 		return audioBox;
	});
	
    this.__defineSetter__("audioBox", function(id) {
		audioBox = document.getElementById(id);
	});
	 
	// Constructor
	
	this.audioBox = audioDivId;
	
	 

	/*--------------------------Methods-------------------------------------------
	 * Method Name				| Parameters 		| Return Type	| Description
	 * ---------------------------------------------------------------------------
	 * +stopAll					()					: errorCode		| 
	 * +setMasterVolume			(volumeLevel)		: errorCode		| Sets the volume for all AudioSound objects
	 * +setSFXVolume			(volumeLevel)		: errorCode		| Sets the volume for all AudioSound objects that have type "SFX"
	 * +setMusicVolume			(volumeLevel)		: errorCode		| Sets the volume for all AudioSound objects that have type "Music"
	 * +createChannel			(numOfChannels) 	: errorCode		| Creates as many channels as specified in the parameter
	 * +deleteChannel			(numOfChannels) 	: errorCode		| Deletes as many channels as specified in the parameter
	 * +deleteSpecificChannel	(channelNum) 		: errorCode		| Deletes the channel number specified in the parameter
  	 ------------------------------------------------------------------------------
  	 * */
  	  	
  	this.stopAll = function() {
  		// TODO: Stopping code
  	}
  	
  	this.setMasterVolume = function(volumeLevel) {
  		// TODO: Master Volume Setting Code
  	}
  	
  	this.setSFXVolume = function(volumeLevel) {
  		// TODO: SFX volume setting code
  	}
  	
  	this.setMusicVolume = function(volumeLevel) {
  		// TODO: Music volume setting code
  	}
  	
  	this.createChannel = function(numOfChannels) {
  		// TODO: Channel creation code
  		var i = 0;
  		
  		while (i<numOfChannels) {
  			this.count++;
  			// Append an <audio> tag IDed AudioChannel# to existing audioBox code.
  			this.audioBox.innerHTML = this.audioBox.innerHTML + '<audio src="" type="audio/ogg" id="AudioChannel' + count + '"/>';
  		
  			i++;
  		}
  		
  	}
  	
  	this.deleteChannel = function(numOfChannels) {
  		// TODO: Channel deletion code
  	}
  	
  	this.deleteSpecificChannel = function(channelNum) {
  		// TODO: Delete specific channel code
  	}
}

function AudioElement(filePath) {
	// The audio element. 

	/*--------------------------Properties----------------------------------------
	 * Property Name		| Type					| Description
	 * ---------------------------------------------------------------------------
	 * +count				: Integer	{RO}		| Number of sounds for the controller
	 * +sounds				: AudioSound[]			| An array of AudioSound objects
	 * +channels			: Integer	{RO}		| Number of channels that can be used
	 * - audioBox  
	 ----------------------------------------------------------------------------*/
	
	var filePath = "";
	var volume = "";
	var channel = "";
	var playing = false;
	var looping = false;
	var loaded = false;
	
	
	
}

function AudioSound(filePathParam, typeParam, channelTypeParam) {
	// Controls and interacts with audio elements.
		
	/*---------------------------------------Properties------------------------------------------------
	* +title				: String				| Title of the audioSound for reference, optional
	* +filePath				: String 		{RO}	| Path of the audio element, minus the L+R
	* +type					: String 		{RO}	| If it's a "SFX" element or "Music" element
	* +channelType			: Integer 		{RO}	| 1 = Mono, 2 = Stereo, 3 = 5.1 Surround
	* +leftChannel			: audioElement 	{RO}	| Reference to the left channel audioElement
	* +rightChannel			: audioElement 	{RO}	| Reference to the right channel audioElement
	* +volume				: Float					| Gets and sets the volume of the sound
	* +pan					: Float					| Gets and sets the panning level, -1 being completely left, 1 being completely right.
	* +distanceY			: Float					| Gets and sets the distance on the Y axis from the sound
	* +distanceZ			: Float					| Gets and sets the distance on the Z axis from the sound
	* +distanceX			: Float					| Gets and sets the distance on the X axis from the sound
	* -muted				: Boolean				| Keeps track if the sound is muted or not
	* -playing				: Boolean				| Keeps track if the sound is playing or not
	* -looping				: Boolean				| Keeps track if the sound is looping or not
	* -loaded				: Boolean				| Keeps track if the sound is loaded or not
	--------------------------------------------------------------------------------------------------*/
	
	var title  = "";
	var filePath = "";
	var type = 0;
	var channelType = "";
	var leftChannel = "";
	var rightChannel = "";
	var volume = "";
	var pan = "";
	var distanceY = "";
	var distanceZ = "";
	var distanceX = "";
	var muted = false;
	var playing = false;
	var looping = false;
	var loaded = false;
	
	// Getters and Setters
	
	this.__defineGetter__("title", function() {
		return title;
	});
	
	this.__defineSetter__("title", function(titleParam) {
		title = titleParam;
	});
	
	this.__defineGetter__("filePath", function() {
		return filePath;
	});
	
	this.__defineSetter__("filePath", function(filePathParam) {
		filePath = filePathParam;
	});
	
	this.__defineGetter__("type", function() {
		return type;
	});
	
	this.__defineSetter__("type", function(typeParam) {
		type = typeParam;
	});
	
	this.__defineGetter__("channelType", function() {
		return channelType;
	});
	
	this.__defineSetter__("channelType", function(channelTypeParam) {
		channelType = channelTypeParam;
	});
	
	this.__defineGetter__("leftChannel", function() {
		return leftChannel;
	});
	
	this.__defineSetter__("leftChannel", function(leftChannelParam) {
		// Return error
	});
	
	this.__defineGetter__("rightChannel", function() {
		return rightChannel;
	});
	
	this.__defineSetter__("rightChannel", function(rightChannelParam) {
		// Return error
	});
	
	this.__defineGetter__("volume", function() {
		return volume;
	});
	
	this.__defineSetter__("volume", function(volumeParam) {
		volume = volumeParam;
	});
	
	this.__defineGetter__("pan", function() {
		return pan;
	});
	
	this.__defineSetter__("pan", function(panParam) {
		pan = panParam;
	});
	
	this.__defineGetter__("distanceY", function() {
		return distanceY;
	});
	
	this.__defineSetter__("distanceY", function(distanceYParam) {
		distanceY = distanceYParam;
	});
	
	this.__defineGetter__("distanceZ", function() {
		return distanceZ;
	});
	
	this.__defineSetter__("distanceZ", function(distanceZParam) {
		distanceZ = distanceZParam;
	});
	
	this.__defineGetter__("distanceX", function() {
		return distanceX;
	});
	
	this.__defineSetter__("distanceX", function(distanceXParam) {
		distanceX = distanceXParam;
	});
	
	this.__defineGetter__("muted", function() {
		return muted;
	});
	
	this.__defineSetter__("muted", function(mutedParam) {
		muted = mutedParam;
	});
	
	this.__defineGetter__("playing", function() {
		return playing;
	});
	
	this.__defineSetter__("playing", function(playingParam) {
		playing = playingParam;
	});
	
	this.__defineGetter__("looping", function() {
		return looping;
	});
	
	this.__defineSetter__("looping", function(loopingParam) {
		looping = loopingParam;
	});
	
	this.__defineGetter__("loaded", function() {
		return loaded;
	});
	
	this.__defineSetter__("loaded", function(loadedParam) {
		loaded = loadedParam;
	});
		
	// Constructor Logic
	
	this.filePath = filePathParam;
	this.type = typeParam;
	this.channelType = channelTypeParam;
	leftChannel = filePathParam + "L.ogg";
	rightChannel = filePathParam + "R.ogg";
	
	
	
	/*---------------------------------------Methods------------------------------------------------
	 * +play()				: errorCode				| Play the sound
	 * +stop()				: errorCode				| Stop the sound
	 * +mute()				: errorCode				| Mute the sound
	 * +unmute()			: errorCode				| Unmute the sound
	 * +loop()				: errorCode				| Loop the sound
	 * +stopLooping()		: errorCode				| Stop looping
	 * +isPlaying()			: Boolean				| Checks if the sound is playing
	 * +isLooping()			: Boolean				| Checks if the sound is looping
	 * +panLeft(panValue)	: errorCode				| Pans to the left by %
	 * +panRight(panValue)	: errorCode				| Pans to the right by %
	 * +setDistance(x,y,z)	: errorCode				| sets the distance on all three dimensions
	 ----------------------------------------------------------------------------------------------*/ 
}


