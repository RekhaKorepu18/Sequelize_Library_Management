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
//import sequelize from './database';
var books_1 = require("./models/books");
var authors_1 = require("./models/authors");
var loans_1 = require("./models/loans");
var members_1 = require("./models/members");
var _a = require('sequelize'), Sequelize = _a.Sequelize, Op = _a.Op;
var express = require('express');
var router = express.Router();
router.get('/books/byAuthor/:authorId', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var authorId, books, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                authorId = req.params.authorId;
                console.log(authorId);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, books_1.Book.findAll({
                        where: { author_id: authorId },
                        include: authors_1.Author
                    })];
            case 2:
                books = _a.sent();
                if (!books || books.length === 0) {
                    return [2 /*return*/, res.status(404).json({ message: 'No books found for the given author ID.' })];
                }
                res.json(books);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error('Error finding books by author:', error_1);
                res.status(500).json({ message: 'Internal server error' });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// API endpoint to get overdue loans
router.get('/loans/overdue', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var overdueLoans, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, loans_1.Loan.findAll({
                        where: { due_date: {
                                $lt: new Date()
                            }
                        },
                        include: [
                            { model: books_1.Book,
                                attributes: ['title']
                            },
                            { model: members_1.Member,
                                attributes: ['name']
                            }
                        ]
                    })];
            case 1:
                overdueLoans = _a.sent();
                if (overdueLoans.length === 0) {
                    return [2 /*return*/, res.status(404).json({ message: 'No overdue loans found' })];
                }
                res.json({ overdueLoans: overdueLoans });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.error('Error:', error_2);
                res.status(500).json({ message: 'Internal server error' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//List All Books by a Specific Author Published After a Certain Year
router.get('/authors/:authorId/books', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var authorId, year, books, error_3;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                authorId = req.params.authorId;
                year = req.query.year;
                console.log(year);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, books_1.Book.findAll({
                        where: {
                            author_id: authorId,
                            publication_year: (_a = {},
                                _a[Op.gt] = year,
                                _a)
                        },
                        include: {
                            model: authors_1.Author,
                            attributes: ['name']
                        }
                    })];
            case 2:
                books = _b.sent();
                if (books.length === 0) {
                    return [2 /*return*/, res.status(404).json({ message: 'No books found' })];
                }
                res.json(books);
                return [3 /*break*/, 4];
            case 3:
                error_3 = _b.sent();
                console.error('Error finding books by author and year:', error_3);
                res.status(500).json({ message: 'Internal server error' });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// Member who borrowed more books
router.get('/api/members/mostBooks', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var mostActiveMember, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, loans_1.Loan.findAll({
                        attributes: [
                            'member_id',
                            [Sequelize.fn('COUNT', Sequelize.col('id')), 'borrow_count']
                        ],
                        group: ['member_id'],
                        order: [[Sequelize.fn('COUNT', Sequelize.col('id')), 'DESC']],
                        limit: 1,
                        include: {
                            model: members_1.Member,
                            attributes: ['id', 'name']
                        }
                    })];
            case 1:
                mostActiveMember = _a.sent();
                if (mostActiveMember.length > 0) {
                    res.json(mostActiveMember[0]);
                }
                else {
                    res.status(404).json({ error: 'No active members found' });
                }
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                console.error('Error :', error_4);
                res.status(500).json({ error: 'Internal server error' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.default = router;
