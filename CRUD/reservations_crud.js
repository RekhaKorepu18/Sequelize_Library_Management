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
exports.deleteReservation = exports.updateReservation = exports.getReservation = exports.allReservations = exports.createNewReservation = exports.createReservation = void 0;
var insertionData_1 = require("../Crud_operations/insertionData");
//import { sequelize } from '../database';
var reservations_1 = require("../models/reservations");
function createReservation() {
    return __awaiter(this, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, reservations_1.Reservation.bulkCreate(insertionData_1.reservations)];
                case 1:
                    _a.sent();
                    console.log(' inserted values into reservations table');
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.error('Error while inserting reservatios:', err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.createReservation = createReservation;
function createNewReservation(book_id, member_id, reservation_date) {
    return __awaiter(this, void 0, void 0, function () {
        var reservation, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, reservations_1.Reservation.create({ book_id: book_id, member_id: member_id, reservation_date: reservation_date })];
                case 1:
                    reservation = _a.sent();
                    console.log('new reservation added to database');
                    console.table(reservation.toJSON());
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error('Error while inserting new reservation');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.createNewReservation = createNewReservation;
function allReservations() {
    return __awaiter(this, void 0, void 0, function () {
        var reservations_2, allreserves, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, reservations_1.Reservation.findAll()];
                case 1:
                    reservations_2 = _a.sent();
                    console.log('All reservations retrieved successfully');
                    allreserves = reservations_2.map(function (r) { return r.toJSON(); });
                    console.table(allreserves);
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error('Error while retrieving reservations data');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.allReservations = allReservations;
function getReservation(reservation_id) {
    return __awaiter(this, void 0, void 0, function () {
        var reserve, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, reservations_1.Reservation.findByPk(reservation_id)];
                case 1:
                    reserve = _a.sent();
                    if (reserve)
                        console.table(reserve.toJSON());
                    else
                        console.log('reservation not found');
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
exports.getReservation = getReservation;
function updateReservation(reservation_id, update_details) {
    return __awaiter(this, void 0, void 0, function () {
        var reservation, updatereserve, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, reservations_1.Reservation.findByPk(reservation_id)];
                case 1:
                    reservation = _a.sent();
                    if (!reservation) return [3 /*break*/, 3];
                    return [4 /*yield*/, reservation.update(update_details)];
                case 2:
                    updatereserve = _a.sent();
                    console.table(updatereserve.toJSON());
                    return [3 /*break*/, 4];
                case 3:
                    console.log('Reservation not found');
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_4 = _a.sent();
                    console.error('Unable to retrieve the Reservations data');
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.updateReservation = updateReservation;
function deleteReservation(reserve_id) {
    return __awaiter(this, void 0, void 0, function () {
        var reservation, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, reservations_1.Reservation.findByPk(reserve_id)];
                case 1:
                    reservation = _a.sent();
                    if (!reservation) return [3 /*break*/, 3];
                    return [4 /*yield*/, reservation.destroy()];
                case 2:
                    _a.sent();
                    console.table(reservation);
                    console.log('reservation deleted from table');
                    return [3 /*break*/, 4];
                case 3:
                    console.log('reservation not found');
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_5 = _a.sent();
                    console.error('Error while deleting the reservation data');
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.deleteReservation = deleteReservation;
