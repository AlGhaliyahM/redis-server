"use strict";
var RESPType;
(function (RESPType) {
    RESPType["SimpleString"] = "+";
    RESPType["Error"] = "-";
    RESPType["Integer"] = ":";
    RESPType["BulkString"] = "$";
    RESPType["Array"] = "*";
})(RESPType || (RESPType = {}));
