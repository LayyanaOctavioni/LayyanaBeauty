// Button ke id
document
  .querySelector(".home .mask-container button")
  .addEventListener("click", function () {
    location.href = "#products";
  });

//   Search to page
document
  .querySelector("#search-box-btn")
  .addEventListener("click", function () {
    var namePage = document.querySelector("#search-box");
    location.href = "#" + namePage.value;
    namePage.value = "";
  });
// HAMBURGER MENU BUTTON
var menu = document.querySelector("header nav");
document
  .querySelector("#hamburger-menu")
  .addEventListener("click", function (e) {
    menu.classList.toggle("active");
    e.preventDefault(); // Menghentikan aksi default tombol yang di klik
  });

//   SHOPING CART BUTTON
var sc = document.querySelector(".shopping-cart");
var result = document.querySelector(".result");
document
  .querySelector("#shopping-cart-button")
  .addEventListener("click", function (e) {
    sc.classList.toggle("active");
    result.classList.toggle("active");
    e.preventDefault();
  });

//   SEARCH BUTTON
var search = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
document
  .querySelector("#search-button")
  .addEventListener("click", function (e) {
    search.classList.toggle("active");
    searchBox.focus();
    e.preventDefault();
  });

// remove active with click the outside button
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const scb = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove("active");
  }
  if (!sb.contains(e.target) && !search.contains(e.target)) {
    search.classList.remove("active");
  }

  if (
    !scb.contains(e.target) &&
    !sc.contains(e.target) &&
    !result.contains(e.target)
  ) {
    sc.classList.remove("active");
    result.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal1 = document.querySelector("#item-detail-modal-satu");
const itemDetailModal2 = document.querySelector("#item-detail-modal-dua");
const itemDetailModal3 = document.querySelector("#item-detail-modal-tiga");
const itemDetailModal4 = document.querySelector("#item-detail-modal-empat");

const itemDetailButton1 = document.querySelector(".item-detail-button-satu");
const itemDetailButton2 = document.querySelector(".item-detail-button-dua");
const itemDetailButton3 = document.querySelector(".item-detail-button-tiga");
const itemDetailButton4 = document.querySelector(".item-detail-button-empat");

itemDetailButton1.addEventListener("click", function (e) {
  itemDetailModal1.style.display = "flex";
  e.preventDefault();
});

itemDetailButton2.addEventListener("click", function (e) {
  itemDetailModal2.style.display = "flex";
  e.preventDefault();
});

itemDetailButton3.addEventListener("click", function (e) {
  itemDetailModal3.style.display = "flex";
  e.preventDefault();
});

itemDetailButton4.addEventListener("click", function (e) {
  itemDetailModal4.style.display = "flex";
  e.preventDefault();
});

// klik tombol close modal
document.querySelector(".modal-satu .close-icon").onclick = (e) => {
  itemDetailModal1.style.display = "none";
  e.preventDefault();
};

document.querySelector(".modal-dua .close-icon").onclick = (e) => {
  itemDetailModal2.style.display = "none";
  e.preventDefault();
};

document.querySelector(".modal-tiga .close-icon").onclick = (e) => {
  itemDetailModal3.style.display = "none";
  e.preventDefault();
};

document.querySelector(".modal-empat .close-icon").onclick = (e) => {
  itemDetailModal4.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal1) {
    itemDetailModal1.style.display = "none";
  } else if (e.target === itemDetailModal2) {
    itemDetailModal2.style.display = "none";
  } else if (e.target === itemDetailModal3) {
    itemDetailModal3.style.display = "none";
  } else if (e.target === itemDetailModal4) {
    itemDetailModal4.style.display = "none";
  }
};

// ITEM add start

// Checkout from product menu to SHOPPING CART
document
  .getElementById("addToCart1")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var confir = confirm("Masukan item ke keranjang ?"); // Membuat pop up confirm untuk memastikan item tersebut mau dimasukan ke shopping cart atau tidak
    if (confir === true) {
      alert("Item sudah ditambahkan ke keranjang"); // Pop up untuk memberitahu kalau item sudah di masukan ke shopping cart

      addPayment(300); // mengirim jumlah payment
      updateTotalPayment();

      // membuat elemen cart item
      var cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
        <img src="asset/product-1.jpg" alt="Parfume" />
        <div class="item-detail">
          <h3>Parfume</h3>
          <div class="item-price">IDR 300K</div>
        </div>
        <input type="checkbox" />
      `;

      var shoppingCart = document.querySelector(".shopping-cart"); // Dapatkan referensi ke elemen shopping cart
      var firstCartItem = shoppingCart.firstChild; // Dapatkan elemen pertama dalam shopping cart
      shoppingCart.insertBefore(cartItem, firstCartItem); // menambahkan cart item di atas elemen pertama dalam shopping cart
      localStorage.setItem("shoppingCart", shoppingCart.innerHTML); // menyimpan HTML shopping cart ke dalam Local Storage
    }
  });

document
  .getElementById("addToCart2")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var confir = confirm("Masukan item ke keranjang ?");
    if (confir === true) {
      alert("Item sudah ditambahkan ke keranjang");

      addPayment(200);
      updateTotalPayment();

      var cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
            <img src="asset/product-2.jpg" alt="Lipstick" />
            <div class="item-detail">
              <h3>Lipstick</h3>
              <div class="item-price">IDR 200K</div>
            </div>
            <input type="checkbox" />
          `;

      var shoppingCart = document.querySelector(".shopping-cart");
      var firstCartItem = shoppingCart.firstChild;
      shoppingCart.insertBefore(cartItem, firstCartItem);
      localStorage.setItem("shoppingCart", shoppingCart.innerHTML);
    }
  });
document
  .getElementById("addToCart3")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var confir = confirm("Masukan item ke keranjang ?");
    if (confir === true) {
      alert("Item sudah ditambahkan ke keranjang");

      addPayment(150);
      updateTotalPayment();

      var cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
      <img src="asset/product-3.jpg" alt="Eyeliner" />
      <div class="item-detail">
        <h3>Eyeliner</h3>
        <div class="item-price">IDR 150K</div>
      </div>
      <input type="checkbox" />
    `;

      var shoppingCart = document.querySelector(".shopping-cart");
      var firstCartItem = shoppingCart.firstChild;
      shoppingCart.insertBefore(cartItem, firstCartItem);
      localStorage.setItem("shoppingCart", shoppingCart.innerHTML);
    }
  });

document
  .getElementById("addToCart4")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var confir = confirm("Masukan item ke keranjang ?");
    if (confir === true) {
      alert("Item sudah ditambahkan ke keranjang");

      addPayment(280);
      updateTotalPayment();

      var cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
      <img src="asset/product-4.jpg" alt="Blush On" />
      <div class="item-detail">
        <h3>Blush On</h3>
        <div class="item-price">IDR 280K</div>
      </div>
      <input type="checkbox" />
    `;

      var shoppingCart = document.querySelector(".shopping-cart");
      var firstCartItem = shoppingCart.firstChild;
      shoppingCart.insertBefore(cartItem, firstCartItem);
      localStorage.setItem("shoppingCart", shoppingCart.innerHTML);
    }
  });

//   CheckOut from detail menu
document
  .getElementById("addToCartbtn1")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var confir = confirm("Masukan item ke keranjang ?");
    if (confir === true) {
      alert("Item sudah ditambahkan ke keranjang");

      addPayment(300);
      updateTotalPayment();

      var cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
      <img src="asset/product-1.jpg" alt="Product 1" />
      <div class="item-detail">
        <h3>Product 1</h3>
        <div class="item-price">IDR 300K</div>
      </div>
      <input type="checkbox" />
    `;

      var shoppingCart = document.querySelector(".shopping-cart");
      var firstCartItem = shoppingCart.firstChild;
      shoppingCart.insertBefore(cartItem, firstCartItem);
      localStorage.setItem("shoppingCart", shoppingCart.innerHTML);
    }
  });

document
  .getElementById("addToCartbtn2")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var confir = confirm("Masukan item ke keranjang ?");
    if (confir === true) {
      alert("Item sudah ditambahkan ke keranjang");

      addPayment(200);
      updateTotalPayment();

      var cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
      <img src="asset/product-2.jpg" alt="Lipstick" />
      <div class="item-detail">
        <h3>Lipstick</h3>
        <div class="item-price">IDR 200K</div>
      </div>
      <input type="checkbox" />
    `;

      var shoppingCart = document.querySelector(".shopping-cart");
      var firstCartItem = shoppingCart.firstChild;
      shoppingCart.insertBefore(cartItem, firstCartItem);
      localStorage.setItem("shoppingCart", shoppingCart.innerHTML);
    }
  });

document
  .getElementById("addToCartbtn3")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var confir = confirm("Masukan item ke keranjang ?");
    if (confir === true) {
      alert("Item sudah ditambahkan ke keranjang");

      addPayment(150);
      updateTotalPayment();

      var cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
      <img src="asset/product-3.jpg" alt="Eyeliner" />
      <div class="item-detail">
        <h3>Eyeliner</h3>
        <div class="item-price">IDR 150K</div>
      </div>
      <input type="checkbox" />
    `;

      var shoppingCart = document.querySelector(".shopping-cart");
      var firstCartItem = shoppingCart.firstChild;
      shoppingCart.insertBefore(cartItem, firstCartItem);
      localStorage.setItem("shoppingCart", shoppingCart.innerHTML);
    }
  });

document
  .getElementById("addToCartbtn4")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var confir = confirm("Masukan item ke keranjang ?");
    if (confir === true) {
      alert("Item sudah ditambahkan ke keranjang");

      addPayment(280);
      updateTotalPayment();

      var cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
      <img src="asset/product-4.jpg" alt="Blush On" />
      <div class="item-detail">
        <h3>Blush On</h3>
        <div class="item-price">IDR 280K</div>
      </div>
      <input type="checkbox" />
    `;

      var shoppingCart = document.querySelector(".shopping-cart");
      var firstCartItem = shoppingCart.firstChild;
      shoppingCart.insertBefore(cartItem, firstCartItem);
      localStorage.setItem("shoppingCart", shoppingCart.innerHTML);
    }
  });

// ITEM add end

// PAYMENT start

var totalPayment = 0;

function addPayment(amount) {
  totalPayment += amount;
  localStorage.setItem("totalPayment", totalPayment);
}

function getTotalPayment() {
  return totalPayment;
}

function updateTotalPayment() {
  var total = getTotalPayment();
  document.querySelector(".result-pay").textContent = "IDR " + total + "K";
}

function subtractPayment(amount) {
  totalPayment -= amount;
  localStorage.setItem("totalPayment", totalPayment);
}
// ------
function cekShoppingcart() {
  return localStorage.getItem("shoppingCart");
}
// Penyimpanan USER, PAYMENT dan ITEM yang sudah di add

window.onload = function () {
  var savedCart = localStorage.getItem("shoppingCart");
  if (savedCart) {
    document.querySelector(".shopping-cart").innerHTML = savedCart;
  }

  var storedTotalPayment = localStorage.getItem("totalPayment");
  if (storedTotalPayment) {
    totalPayment = parseInt(storedTotalPayment);
    updateTotalPayment();
  }
  console.log(getNama()); // Menampilkan lewat console apakah ada login user atau tidak
};

// -------

// Fungsi untuk menghapus item yang dicentang dan mengupdate total pembayaran
function removeCheckedItems() {
  var checkedCheckboxes = document.querySelectorAll(
    // Dapatkan semua elemen checkbox yang dicentang
    '.shopping-cart input[type="checkbox"]:checked'
  );
  var totalDeducted = 0; // Variabel untuk menyimpan total yang dikurangkan
  checkedCheckboxes.forEach(function (checkbox) {
    // Loop melalui setiap elemen checkbox yang dicentang
    var cartItem = checkbox.closest(".cart-item"); // Dapatkan div induk dari checkbox (cart-item)
    var itemPrice = cartItem.querySelector(".item-price").textContent; // Ambil harga dari item yang dihapus
    var price = parseInt(itemPrice.replace(/\D/g, "")); // Ubah harga menjadi angka
    totalDeducted += price; // Kurangi total pembayaran dengan harga item yang dihapus
    var cartItem = checkbox.closest(".cart-item"); // Dapatkan div induk dari checkbox (cart-item)
    cartItem.remove(); // Hapus div cart-item dari DOM
  });
  subtractPayment(totalDeducted);
  localStorage.setItem(
    // Simpan perubahan ke Local Storage setelah menghapus item
    "shoppingCart",
    document.querySelector(".shopping-cart").innerHTML
  );
}

function deductedTotal() {
  var checkedCheckboxes = document.querySelectorAll(
    '.shopping-cart input[type="checkbox"]:checked'
  );
  var totalDeducted = 0;
  checkedCheckboxes.forEach(function (checkbox) {
    var cartItem = checkbox.closest(".cart-item");
    var itemPrice = cartItem.querySelector(".item-price").textContent;
    var price = parseInt(itemPrice.replace(/\D/g, ""));
    totalDeducted += price;
  });
  updateTotalPayment();
  localStorage.setItem(
    "shoppingCart",
    document.querySelector(".shopping-cart").innerHTML
  );
  return totalDeducted;
}

// User part

// Fungsi untuk menyimpan nama ke dalam local storage
function saveNama(nama) {
  if (!getNama()) {
    localStorage.setItem("nama", nama);
    return true; // Berhasil disimpan
  } else {
    return false; // Gagal disimpan
  }
}

function getNama() {
  // Fungsi untuk mendapatkan nama dari local storage
  return localStorage.getItem("nama");
}

function removeNama() {
  // Fungsi untuk menghapus nama dari local storage
  localStorage.removeItem("nama");
}
// ------

// VALIDASI INPUT untuk EMAIL dan No Handphone
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function validateNoHandphone(noHandphone) {
  const noHandphoneRegex = /^\d{10,14}$/; // Format nomor handphone: antara 10-12 digit angka
  return noHandphoneRegex.test(noHandphone);
}
// ----

// Menjalankan tombol "Delete"
document
  .querySelector(".result-btn-del")
  .addEventListener("click", function (e) {
    if (cekShoppingcart() === "") {
      alert("Keranjang masih kosong");
    } else if (deductedTotal() === 0) {
      alert("Pilih dulu item yang mau di Delete");
    } else {
      var confir = confirm("Delete item dari keranjang ?");
      if (confir === true) {
        removeCheckedItems();
        if (totalPayment == 0) {
          document.querySelector(".result-pay").textContent = "IDR 0K";
        } else {
          updateTotalPayment();
        }
      }
    }
  });

// Menjalankan tombol "Checkout"
document
  .querySelector(".result-btn-co")
  .addEventListener("click", function (e) {
    var user = getNama();
    if (cekShoppingcart() === "") {
      alert("Keranjang masih kosong");
    } else if (user === null) {
      var confir = confirm("Login terlebih dahulu");
      if (confir === true) {
        location.href = "#form";
      }
    } else if (deductedTotal() === 0) {
      alert("Pilih dulu item yang mau di CheckOut");
    } else if (user !== null && deductedTotal() !== 0) {
      var confir = confirm("CheckOut item ?");
      if (confir === true) {
        var pay = deductedTotal();
        removeCheckedItems();
        alert(
          "Nama : " +
            user +
            "\nTotal Pembayaran : IDR " +
            pay +
            "K\nPesanan akan segera diproses"
        );
        if (totalPayment == 0) {
          document.querySelector(".result-pay").textContent = "IDR 0K";
        } else {
          updateTotalPayment();
        }
      }
    }
  });

// Menambahkan event listener untuk tombol "SUBMIT"
document
  .querySelector("#form button:nth-of-type(1)")
  .addEventListener("click", function (event) {
    event.preventDefault();

    var nama = document.querySelector("#form input[type='text']").value.trim();
    var email = document.querySelector("#form input[type='email']").value;
    var noHp = document.querySelector("#form input[type='tel']").value;
    var user = getNama();
    // Menyimpan nama ke dalam local storage
    if (user !== null) {
      alert("Logout terlebih dahulu");
      return;
    } else if (nama === "" && email === "" && noHp === "") {
      alert("Isi form login terlebih dahulu");
    } else if (nama === "") {
      alert("Nama tidak boleh kosong.");
    } else if (email === "") {
      alert("Tolong isi Email");
    } else if (!validateEmail(email)) {
      alert("Email tidak valid");
    } else if (noHp === "") {
      alert("Tolong isi no.Handphone");
    } else if (!validateNoHandphone(noHp)) {
      alert("Masukan no.Handphone yang benar");
    } else {
      if (saveNama(nama)) {
        alert("Selamat datang " + nama);
      } else {
        alert("Logout terlebih dahulu.");
      }
      // Mengosongkan value di input
      var nama = (document.querySelector("#form input[type='text']").value =
        "");
      var noHp = (document.querySelector("#form input[type='tel']").value = "");
      var email = (document.querySelector("#form input[type='email']").value =
        "");
    }

    console.log(getNama());
  });

// Menambahkan event listener untuk tombol "LOGOUT"
document
  .querySelector("#form button:nth-of-type(2)")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Menghentikan aksi default dari form

    var nama = getNama(); // Mendapatkan nama dari local storage
    if (nama) {
      // Jika ada nama yang tersimpan
      var confir = confirm("Yakin mau logout ?");
      if (confir === true) {
        removeNama(); // Menghapus nama dari local storage
        alert("Logout berhasil."); // Memberikan notifikasi bahwa logout berhasil
      }
    } else {
      alert("Belum login"); // Memberikan notifikasi bahwa tidak ada nama yang tersimpan
    }

    console.log(getNama());
  });

// EXTRAS
var buttonTwt = document.querySelectorAll(".socials a");
buttonTwt[1].addEventListener("click", function (e) {
  alert("Hehehe maaf gk punya twitter 😁");
  e.preventDefault();
});
