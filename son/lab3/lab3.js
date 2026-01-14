"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tinhDiemTrungBinh = (diem1, diem2, diem3) => {
    return (diem1 + diem2 + diem3) / 3;
};
const laSoChan = (n) => {
    return n % 2 === 0;
};
const taoThongTinNguoiDung = (ten, tuoi = 18, diaChi) => {
    return `Tên: ${ten}, Tuổi: ${tuoi}, Địa chỉ: ${diaChi ?? "Chưa cập nhật"}`;
};
const xuLyDanhSachSanPham = (sanPhamMoi, ...danhSachCu) => {
    return [...danhSachCu, sanPhamMoi];
};
console.log("Điểm TB:", tinhDiemTrungBinh(9, 8, 7));
console.log("4 là số chẵn?", laSoChan(4));
console.log(taoThongTinNguoiDung("Minh", 22, "HN"));
console.log(taoThongTinNguoiDung("Lan"));
console.log(xuLyDanhSachSanPham({ ten: "Laptop", gia: 15000000 }, { ten: "Chuột", gia: 200000 }, { ten: "Bàn phím", gia: 500000 }));
//# sourceMappingURL=lab3.js.map