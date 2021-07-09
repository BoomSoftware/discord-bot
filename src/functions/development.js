"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Development = void 0;
var config = require("../models/config.js");
var Development = /** @class */ (function () {
    function Development(client) {
        this.client = client;
    }
    Development.prototype.createDevelopmentChannels = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var urls_1;
            var _this = this;
            return __generator(this, function (_a) {
                console.log("WEBHOOK COMMAND");
                if (config.developmentChannels) {
                    urls_1 = [];
                    config.developmentChannels.forEach(function (channel) { return __awaiter(_this, void 0, void 0, function () {
                        var newChannel, _a, _b;
                        var _c;
                        return __generator(this, function (_d) {
                            switch (_d.label) {
                                case 0:
                                    this.client.guilds.cache;
                                    return [4 /*yield*/, ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.channels.create(channel, {
                                            type: "text"
                                        }))];
                                case 1:
                                    newChannel = _d.sent();
                                    _b = (_a = urls_1).push;
                                    return [4 /*yield*/, this.createWebook(newChannel)];
                                case 2:
                                    _b.apply(_a, [_d.sent()]);
                                    console.log("New development channel has been created");
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    urls_1.forEach(function (url) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, message.channel.send("Webhook url: " + url)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                }
                return [2 /*return*/];
            });
        });
    };
    Development.prototype.createWebook = function (channel) {
        return __awaiter(this, void 0, void 0, function () {
            var url, webhook;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "";
                        if (!channel) return [3 /*break*/, 2];
                        return [4 /*yield*/, channel.createWebhook("Hook Master")];
                    case 1:
                        webhook = _a.sent();
                        url = webhook.url;
                        _a.label = 2;
                    case 2:
                        console.log("A new webhook has been created with url: ", url);
                        return [2 /*return*/, url];
                }
            });
        });
    };
    return Development;
}());
exports.Development = Development;
