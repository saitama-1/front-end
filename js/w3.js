// 1. arcordion
function myAccFunc() {
  var x = document.getElementById("demoAcc");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className += " w3-green";
  } else {
    x.className = x.className.replace(" w3-show", "");
    x.previousElementSibling.className =
      x.previousElementSibling.className.replace(" w3-green", "");
  }
}

//2. click dropdown
function myDropFunc(button) {
  var parentClasses = button.parentElement.classList;
  var dropdownContent;
  var containsDroprightClick = false;
  var containsDropdownClick = false;

  // Kiểm tra xem có class chứa chuỗi "dropright-click" hoặc "dropdown-click"
  for (var i = 0; i < parentClasses.length; i++) {
    if (parentClasses[i].indexOf("dropright-click") !== -1) {
      containsDroprightClick = true;
      break;
    }
    if (parentClasses[i].indexOf("dropdown-click") !== -1) {
      containsDropdownClick = true;
      break;
    }
  }

  // Xác định dropdown content tương ứng
  if (containsDroprightClick) {
    dropdownContent = button.parentElement.querySelector(
      ".q-dropright-content"
    );
  } else if (containsDropdownClick) {
    dropdownContent = button.parentElement.querySelector(
      ".w3-dropdown-content"
    );
  }

  // Nếu dropdown content đang mở, đóng nó và tất cả dropdown content con
  if (dropdownContent.classList.contains("w3-show")) {
    closeDropdownAndChildren(dropdownContent);
  } else {
    // Đóng tất cả dropdown content cùng cấp trước khi mở dropdown hiện tại
    closeSiblingDropdowns(button);
    // Mở dropdown hiện tại
    dropdownContent.classList.add("w3-show");
    button.classList.add("w3-green");
  }
}

// Hàm đóng dropdown và tất cả dropdown con
function closeDropdownAndChildren(dropdownContent) {
  dropdownContent.classList.remove("w3-show");
  if (dropdownContent.previousElementSibling) {
    dropdownContent.previousElementSibling.classList.remove("w3-green");
  }

  // Đóng tất cả dropdown con
  var childDropdowns = dropdownContent.querySelectorAll(
    ".q-dropright-content, .w3-dropdown-content"
  );
  childDropdowns.forEach(function (child) {
    closeDropdownAndChildren(child);
  });
}

// Hàm đóng tất cả dropdown cùng cấp
function closeSiblingDropdowns(button) {
  var parentDropdown = button.parentElement;
  var siblingButtons = parentDropdown.parentElement.querySelectorAll(
    ".q-dropright-click, .w3-dropdown-click"
  );

  siblingButtons.forEach(function (siblingButton) {
    if (siblingButton !== button.parentElement) {
      var siblingDropdownContent;
      if (siblingButton.classList.contains("q-dropright-click")) {
        siblingDropdownContent = siblingButton.querySelector(
          ".q-dropright-content"
        );
      } else if (siblingButton.classList.contains("w3-dropdown-click")) {
        siblingDropdownContent = siblingButton.querySelector(
          ".w3-dropdown-content"
        );
      }

      if (
        siblingDropdownContent &&
        siblingDropdownContent.classList.contains("w3-show")
      ) {
        closeDropdownAndChildren(siblingDropdownContent);
      }
    }
  });
}

// Đóng toàn bộ dropdown khi click ra ngoài
document.addEventListener("click", function (event) {
  var target = event.target;
  var isClickInside = false;

  // Kiểm tra xem click có nằm trong phạm vi của dropdown và các đối tượng con cháu hay không
  var dropdowns = document.querySelectorAll(
    ".q-dropright-click, .w3-dropdown-click"
  );
  dropdowns.forEach(function (dropdown) {
    if (dropdown.contains(target)) {
      isClickInside = true;
    }
  });

  // Nếu click ra ngoài, đóng toàn bộ dropdown
  if (!isClickInside) {
    var allDropdowns = document.querySelectorAll(
      ".q-dropright-content, .w3-dropdown-content"
    );
    allDropdowns.forEach(function (dropdown) {
      closeDropdownAndChildren(dropdown);
    });
  }
});

//3. slide show
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " w3-white";
}

//4.
