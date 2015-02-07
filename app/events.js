import EventEmitter from 'eventemitter';

var Events = function() {};
Events.propotype = Object.create(EventEmitter);

export default Events;
