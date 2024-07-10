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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMember = exports.updateMember = exports.getMember = exports.allMembers = exports.addNewMember = exports.createMembers = void 0;
var insertionData_1 = require("../Crud_operations/insertionData");
//import { sequelize } from '../database';
var members_1 = require("../models/members");
function createMembers() {
    return __awaiter(this, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, members_1.Member.bulkCreate(insertionData_1.members)];
                case 1:
                    _a.sent();
                    console.log(' inserted values into members table');
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.error('Error while inserting members:', err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.createMembers = createMembers;
function addNewMember(name, address, phone_number, email) {
    return __awaiter(this, void 0, void 0, function () {
        var member, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, members_1.Member.create({ name: name, address: address, phone_number: phone_number, email: email })];
                case 1:
                    member = _a.sent();
                    console.log('new member added');
                    console.table(member.toJSON());
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error('Error while inserting new member');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.addNewMember = addNewMember;
function allMembers() {
    return __awaiter(this, void 0, void 0, function () {
        var members_2, allMembers_1, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, members_1.Member.findAll()];
                case 1:
                    members_2 = _a.sent();
                    console.log('All Members retrieved successfully');
                    allMembers_1 = members_2.map(function (a) { return a.toJSON(); });
                    console.table(allMembers_1);
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error('Error while retrieving members data');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.allMembers = allMembers;
function getMember(id) {
    return __awaiter(this, void 0, void 0, function () {
        var member, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, members_1.Member.findByPk(id)];
                case 1:
                    member = _a.sent();
                    if (member)
                        console.table(member.toJSON());
                    else
                        console.log('Member not found');
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error('Error while retrieving data');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getMember = getMember;
function updateMember(id, update_details) {
    return __awaiter(this, void 0, void 0, function () {
        var member, updatemember, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, members_1.Member.findByPk(id)];
                case 1:
                    member = _a.sent();
                    if (!member) return [3 /*break*/, 3];
                    return [4 /*yield*/, member.update(update_details)];
                case 2:
                    updatemember = _a.sent();
                    console.table(updatemember.toJSON());
                    return [3 /*break*/, 4];
                case 3:
                    console.log('Member not found');
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_4 = _a.sent();
                    console.error('Unable to retrieve the members data');
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.updateMember = updateMember;
function deleteMember(id) {
    return __awaiter(this, void 0, void 0, function () {
        var member, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, members_1.Member.findByPk(id)];
                case 1:
                    member = _a.sent();
                    if (!member) return [3 /*break*/, 3];
                    return [4 /*yield*/, member.destroy()];
                case 2:
                    _a.sent();
                    console.log('member deleted from table');
                    return [3 /*break*/, 4];
                case 3:
                    console.log('member not found');
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_5 = _a.sent();
                    console.error('Error while deleting the member data');
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.deleteMember = deleteMember;
