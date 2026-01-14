const tinhDiemTrungBinh = (
  diem1: number,
  diem2: number,
  diem3: number
): number => {
  return (diem1 + diem2 + diem3) / 3;
};

type KiemTraSoChan = (n: number) => boolean;

const laSoChan: KiemTraSoChan = (n) => {
  return n % 2 === 0;
};

const taoThongTinNguoiDung = (
  ten: string,
  tuoi: number = 18,
  diaChi?: string
): string => {
  return `Tên: ${ten}, Tuổi: ${tuoi}, Địa chỉ: ${diaChi ?? "Chưa cập nhật"}`;
};

type SanPham = {
  ten: string;
  gia: number;
};

const xuLyDanhSachSanPham = (
  sanPhamMoi: SanPham,
  ...danhSachCu: SanPham[]
): SanPham[] => {
  return [...danhSachCu, sanPhamMoi];
};

console.log("Điểm TB:", tinhDiemTrungBinh(9, 8, 7));
console.log("4 là số chẵn?", laSoChan(4));
console.log(taoThongTinNguoiDung("Minh", 22, "HN"));
console.log(taoThongTinNguoiDung("Lan"));
console.log(
  xuLyDanhSachSanPham(
    { ten: "Laptop", gia: 15000000 },
    { ten: "Chuột", gia: 200000 },
    { ten: "Bàn phím", gia: 500000 }
  )
);