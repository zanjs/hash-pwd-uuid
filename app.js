var Hashids = require('hashids');

var UUID = require("uuidjs");


var hashids = new Hashids();



var id = hashids.encode(1, 2, 3); // o2fXhV
var numbers = hashids.decode(id); // [1, 2, 3]

var arbitraryVarName  = UUID;
UUID = UUID.overwrittenUUID;

var uuid = arbitraryVarName.generate()

console.log(uuid);
// var uuidHash = new Hashids(uuid);
var uuidHash = hashids.encodeHex(uuid.toString());

console.log(uuidHash);


var hashids = new Hashids('anla.io');

var id = hashids.encodeHex('507f1f77bcf86cd799439011'); // y42LW46J9luq3Xq9XMly
var hex = hashids.decodeHex(id); // 507f1f77bcf86cd799439011