document.getElementById("add-product").addEventListener("click", addProduct);
document
  .getElementById("product-name")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addProduct();
    }
  });
document
  .getElementById("reset-product-list")
  .addEventListener("click", resetProductList);

function addProduct() {
  const productName = document.getElementById("product-name").value;
  if (productName.trim() !== "") {
    // Tạo một thẻ li mới
    const li = document.createElement("li");
    li.textContent = productName;

    // Tạo một button xóa
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Xóa";
    deleteButton.addEventListener("click", function () {
      li.classList.add("fade-out", "hidden");
      setTimeout(function () {
        li.remove();
      }, 500); // Thời gian chờ khớp với thời gian chuyển tiếp trong CSS
    });

    // Thêm button xóa vào thẻ li
    li.appendChild(deleteButton);

    // Thêm thẻ li vào ul#product-list
    document.getElementById("product-list").appendChild(li);

    // Xóa giá trị trong input sau khi thêm sản phẩm
    // document.getElementById("product-name").value = "";
  } else {
    alert("Vui lòng nhập tên sản phẩm!");
  }
}

function resetProductList() {
  // Xóa toàn bộ nội dung của ul#product-list
  document.getElementById("product-list").innerHTML = "";
  // Xóa giá trị trong input sau khi bấm nút reset
  document.getElementById("product-name").value = "";
}
