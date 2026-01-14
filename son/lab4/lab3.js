"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Ví dụ sử dụng
const student1 = {
    id: 1,
    name: "Nguyễn Văn A",
    score: 8.5,
};
// Ví dụ sử dụng
const user1 = {
    id: 1,
    email: "user@gmail.com",
};
const user2 = {
    id: 2,
    email: "user2@gmail.com",
    phone: "0123456789",
};
// Hàm cộng
const add = (a, b) => {
    return a + b;
};
// Hàm nhân
const multiply = (a, b) => {
    return a * b;
};
// Test
console.log(add(2, 3)); // 5
console.log(multiply(2, 3)); // 6
// Viết function logStatus
function logStatus(status) {
    switch (status) {
        case "loading":
            console.log("Đang tải...");
            break;
        case "success":
            console.log("Thành công");
            break;
        case "error":
            console.log("Có lỗi xảy ra");
            break;
        default:
            console.log("Idle");
    }
}
// Test
logStatus("loading");
logStatus("success");
logStatus("error");
//# sourceMappingURL=lab3.js.map