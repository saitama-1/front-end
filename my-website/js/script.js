// Ví dụ: Thêm sự kiện cho nút "Thêm vào giỏ"
document.querySelectorAll(".product-card button").forEach((button) => {
  button.addEventListener("click", function () {
    alert("Sản phẩm đã được thêm vào giỏ!");
  });
});
