const Handle = require('./Handle');
const Tweet = require('./Tweet');

Handle.hasMany(Tweet);
Tweet.belongsTo(Handle);