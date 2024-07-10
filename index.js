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
var database_1 = require("./database");
var reservations_1 = require("./models/reservations");
var reservations_crud_1 = require("./CRUD/reservations_crud");
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, 4, 5]);
                return [4 /*yield*/, database_1.sequelize.authenticate()];
            case 1:
                _a.sent();
                console.log('connection  established');
                return [4 /*yield*/, database_1.sequelize.sync({ force: false })];
            case 2:
                _a.sent();
                console.log("All models synchronized");
                //Authors
                /*  Author.sync({ force: true })
                     .then(() => {
                        console.log('Authors table created');
                       return createBooks();
                     })
                     .then(() => {
                      return createNewBook('The insider', 1, 'thrilling', '87654321', 1999);
                     })
                      .then(() => {
                       return allBooks();
                      })
                       .then(() => {
                         return getSpecifiedBook(7);
                     })
                       .then(() => {
                           return updateBookDetails(9,{title: 'It ends with us', publication_year: '2018'});
                       })
                       .then(()=> {
                            return deleteBook(9);
                       })
                    .catch((err) => {
                      console.log('Error occurred:', err);
                   });
               // Books
               Book.sync({ force: true})
               .then(() => {
                  console.log('Books table created');
                 return createAuthors();
               })
               .then(() => {
                return createNewAuthor('Rekha', 2002, 'Indian' );
               })
                .then(() => {
                 return allAuthors();
                })
                 .then(() => {
                   return getSpecifiedAuthor(6);
               })
                 .then(() => {
                     return updateAuthorDetails(6,{name: 'Rekha Korepu', birth_year: '2003'});
                 })
                 .then(()=> {
                      return deleteAuthor(6);
                 })
              .catch((err) => {
                console.log('Error occurred:', err);
             });
             */
                // Members
                //     Member.sync({ force: true})
                //     .then(() => {
                //        console.log('Members table created');
                //       return createMembers();
                //     })
                //     .then(() => {
                //      return addNewMember('Anjani','Basar','982134567','Anjani@gmail.com');
                //     })
                //      .then(() => {
                //       return allMembers();
                //      })
                //       .then(() => {
                //         return getMember(3);
                //     })
                //       .then(() => {
                //           return updateMember(4,{name: 'Anjani Barlapati', address: 'Nigeria'});
                //       })
                //       .then(()=> {
                //            return deleteMember(4);
                //       })
                //    .catch((err) => {
                //      console.log('Error occurred:', err);
                //   });
                //Loans
                //   Loan.sync({ force: true})
                //   .then(() => {
                //      console.log('Loans table created');
                //     return createLoans();
                //   })
                //   .then(() => {
                //    return createNewLoan(3,2, new Date("2024-07-01"),new Date("2024-07-04"));
                //   })
                //    .then(() => {
                //     return allLoans();
                //    })
                //     .then(() => {11
                //       return getLoan(3);
                //   })
                //     .then(() => {
                //         return updateLoanDetails(4,{member_id : 3});
                //     })
                //     .then(()=> {
                //          return deleteLoan(7);
                //     })
                //  .catch((err) => {
                //    console.log('Error occurred:', err);
                // });
                // Reservations
                reservations_1.Reservation.sync({ force: true })
                    .then(function () {
                    console.log('reservations table created');
                    return (0, reservations_crud_1.createReservation)();
                })
                    .then(function () {
                    return (0, reservations_crud_1.createNewReservation)(3, 2, new Date("2024-07-06"));
                })
                    .then(function () {
                    return (0, reservations_crud_1.allReservations)();
                })
                    .then(function () {
                    return (0, reservations_crud_1.getReservation)(3);
                })
                    .then(function () {
                    return (0, reservations_crud_1.updateReservation)(4, { member_id: 2 });
                })
                    .then(function () {
                    return (0, reservations_crud_1.deleteReservation)(7);
                })
                    .catch(function (err) {
                    console.log('Error occurred:', err);
                });
                return [3 /*break*/, 5];
            case 3:
                error_1 = _a.sent();
                console.log('Unable to connect to database:', error_1);
                return [3 /*break*/, 5];
            case 4: return [7 /*endfinally*/];
            case 5: return [2 /*return*/];
        }
    });
}); })();
