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
var express = require('express');
var reserveRouter = express.Router();
var reservations_1 = require("../models/reservations");
var insertionData_1 = require("./insertionData");
// Get all authors
reserveRouter.get('/allReserves', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var reserves, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, reservations_1.Reservation.findAll()];
            case 1:
                reserves = _a.sent();
                if (reserves.length === 0)
                    return [2 /*return*/, res.status(404).json({ message: "No reserves Found" })];
                res.json({ Reserves: reserves });
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.status(500).json({ message: err_1.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Get one author
reserveRouter.get('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var reserve, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, reservations_1.Reservation.findByPk(req.params.id)];
            case 1:
                reserve = _a.sent();
                if (reserve === null) {
                    return [2 /*return*/, res.status(404).json({ message: "reserve Not Found" })];
                }
                res.json(reserve);
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                res.status(500).json({ message: err_2.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// creating all authors at once.
reserveRouter.post('/allReserves', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                if (!insertionData_1.reservations) return [3 /*break*/, 2];
                return [4 /*yield*/, reservations_1.Reservation.bulkCreate(insertionData_1.reservations)];
            case 1:
                _a.sent();
                console.log(' inserted loans data');
                res.json(insertionData_1.reservations);
                _a.label = 2;
            case 2: return [3 /*break*/, 4];
            case 3:
                err_3 = _a.sent();
                res.status(400).json({ message: err_3.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// Create a new author
reserveRouter.post('/newReserve', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var reserve, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, reservations_1.Reservation.create(req.body)];
            case 1:
                reserve = _a.sent();
                res.json(reserve);
                return [3 /*break*/, 3];
            case 2:
                err_4 = _a.sent();
                res.status(400).json({ message: err_4.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Update an author
reserveRouter.put('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var updated, updatedreserve, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                return [4 /*yield*/, reservations_1.Reservation.update(req.body, { where: { id: req.params.id } })];
            case 1:
                updated = (_a.sent())[0];
                if (!updated) return [3 /*break*/, 3];
                return [4 /*yield*/, reservations_1.Reservation.findByPk(req.params.id)];
            case 2:
                updatedreserve = _a.sent();
                res.json(updatedreserve);
                return [3 /*break*/, 4];
            case 3:
                res.status(404).json({ message: "reserve Not Found" });
                _a.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                err_5 = _a.sent();
                res.status(400).json({ message: err_5.message });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
// Delete an author
reserveRouter.delete('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var deleted, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, reservations_1.Reservation.destroy({ where: { id: req.params.id } })];
            case 1:
                deleted = _a.sent();
                if (deleted) {
                    res.json({ message: "reservation Deleted" });
                }
                else {
                    res.status(404).json({ message: "reserve Not Found" });
                }
                return [3 /*break*/, 3];
            case 2:
                err_6 = _a.sent();
                res.status(500).json({ message: err_6.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.default = reserveRouter;
