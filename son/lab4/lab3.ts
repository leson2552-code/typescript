// ===== Bài 1 =====
// Tạo type Student gồm id, name, score
type Student = {
  id: number;
  name: string;
  score: number;
};

// Ví dụ sử dụng
const student1: Student = {
  id: 1,
  name: "Nguyễn Văn A",
  score: 8.5,
};

// ===== Bài 2 =====
// Tạo interface User có id, email required, phone optional
interface User {
  id: number;
  email: string;
  phone?: string;
}

// Ví dụ sử dụng
const user1: User = {
  id: 1,
  email: "user@gmail.com",
};

const user2: User = {
  id: 2,
  email: "user2@gmail.com",
  phone: "0123456789",
};

// ===== Bài 3 =====
// Tạo type function Calculate cho phép cộng và nhân
type Calculate = (a: number, b: number) => number;

// Hàm cộng
const add: Calculate = (a, b) => {
  return a + b;
};

// Hàm nhân
const multiply: Calculate = (a, b) => {
  return a * b;
};

// Test
console.log(add(2, 3));       // 5
console.log(multiply(2, 3)); // 6

// ===== Bài 4 =====
// Tạo type ApiStatus
type ApiStatus = "idle" | "loading" | "success" | "error";

// Viết function logStatus
function logStatus(status: ApiStatus): void {
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
