// 1. Tạo enum rate
enum Rate {
  low = "Thấp",
  medium = "Trung bình",
  hight = "Cao"
}

// 2. Tạo type Product
type Product = {
  name: string;
  price: number;
  sale: boolean;
  rate: Rate;
  description?: string;
};

// 3. Tạo mảng listProducts (ít nhất 5 phần tử)
let listProducts: Product[] = [
  {
    name: "Sản phẩm A",
    price: 10,
    sale: true,
    rate: Rate.hight,
  },
  {
    name: "Sản phẩm B",
    price: 4,
    sale: false,
    rate: Rate.low,
  },
  {
    name: "Sản phẩm C",
    price: 6,
    sale: true,
    rate: Rate.medium,
  },
  {
    name: "Sản phẩm D",
    price: 3,
    sale: true,
    rate: Rate.medium,
  },
  {
    name: "Sản phẩm E",
    price: 8,
    sale: false,
    rate: Rate.hight,
  },
];

// 4. Hàm thêm key description (sử dụng map)
function addDescription(products: Product[]): Product[] {
  return products.map((product) => ({
    ...product,
    description: product.price > 5 ? "Tốt" : "Bình thường",
  }));
}

listProducts = addDescription(listProducts);

// 5. Hàm hiển thị danh sách sản phẩm (forEach)
function showProducts(products: Product[]): void {
  products.forEach((product) => {
    console.log(
      `Tên: ${product.name}, Giá: ${product.price}, Sale: ${product.sale}, Đánh giá: ${product.rate}`
    );
  });
}

showProducts(listProducts);

// 6. Hàm tính tổng giá bán (reduce)
function totalPrice(products: Product[]): number {
  return products.reduce((total, product) => total + product.price, 0);
}

console.log("Tổng giá bán:", totalPrice(listProducts));

// 7. Hàm lọc sản phẩm đang Sale và đánh giá từ Trung bình trở lên (filter)
function filterSaleProducts(products: Product[]): Product[] {
  return products.filter(
    (product) =>
      product.sale === true &&
      (product.rate === Rate.medium || product.rate === Rate.hight)
  );
}

const saleProducts = filterSaleProducts(listProducts);
console.log("Sản phẩm đang sale & đánh giá >= Trung bình:");
console.log(saleProducts);
