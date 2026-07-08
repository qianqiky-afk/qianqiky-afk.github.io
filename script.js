const translations = {
  zh: {
    brandName: "外星猫",
    navShop: "商品",
    navStory: "故事",
    navCare: "服务",
    cart: "购物车",
    eyebrow: "来自温柔星球的猫咪好物",
    heroTitle: "把一点宇宙的可爱，带回你的日常。",
    heroText: "外星猫为爱猫人准备柔软、安心、带一点奇妙想象力的生活小物。",
    shopNow: "开始逛逛",
    meetBrand: "认识外星猫",
    promiseOne: "柔软材质",
    promiseOneSub: "亲肤、适合每日使用",
    promiseTwo: "双语下单",
    promiseTwoSub: "中文与英文自由切换",
    promiseThree: "礼物包装",
    promiseThreeSub: "适合送给爱猫朋友",
    shopEyebrow: "精选上新",
    shopTitle: "外星猫小铺",
    storyEyebrow: "品牌故事",
    storyTitle: "一只降落在窗台边的小猫。",
    storyText:
      "我们相信可爱的东西不必吵闹。外星猫把柔软触感、低饱和色彩和小小宇宙感放进日用品里，让家变得更轻松一点。",
    careEyebrow: "服务",
    careTitle: "安心购买",
    careOne: "48 小时发货",
    careOneText: "库存商品会尽快打包发出，并附上可爱的感谢卡。",
    careTwo: "7 天无忧",
    careTwoText: "未使用商品支持退换，让第一次购买更轻松。",
    careThree: "双语客服",
    careThreeText: "中文或英文咨询都可以，适合面向国内外顾客。",
    cartTitle: "购物车",
    cartEmpty: "购物车还是空的。",
    subtotal: "小计",
    checkout: "去结算",
    footer: "温馨可爱的双语电商网站原型。",
    add: "加入",
    qty: "数量",
  },
  en: {
    brandName: "Alien Cat",
    navShop: "Shop",
    navStory: "Story",
    navCare: "Care",
    cart: "Cart",
    eyebrow: "Cat goods from a gentle little planet",
    heroTitle: "Bring a little cosmic cuteness home.",
    heroText:
      "Alien Cat makes soft, safe, imagination-filled everyday goods for cat lovers.",
    shopNow: "Shop now",
    meetBrand: "Meet Alien Cat",
    promiseOne: "Soft materials",
    promiseOneSub: "Gentle textures for daily use",
    promiseTwo: "Bilingual shopping",
    promiseTwoSub: "Switch freely between Chinese and English",
    promiseThree: "Gift wrapping",
    promiseThreeSub: "Made for cat-loving friends",
    shopEyebrow: "New arrivals",
    shopTitle: "Alien Cat Shop",
    storyEyebrow: "Brand story",
    storyTitle: "A tiny cat landed by the window.",
    storyText:
      "We believe cute things can be calm. Alien Cat blends soft textures, gentle colors, and a small cosmic feeling into home goods that make daily life lighter.",
    careEyebrow: "Service",
    careTitle: "Shop with ease",
    careOne: "Ships in 48 hours",
    careOneText: "In-stock items are packed quickly with a sweet thank-you card.",
    careTwo: "7-day returns",
    careTwoText: "Unused items can be returned or exchanged, so first orders feel easy.",
    careThree: "Bilingual support",
    careThreeText: "Ask in Chinese or English, ready for local and global customers.",
    cartTitle: "Cart",
    cartEmpty: "Your cart is still empty.",
    subtotal: "Subtotal",
    checkout: "Checkout",
    footer: "A warm, cute bilingual ecommerce website prototype.",
    add: "Add",
    qty: "Qty",
  },
};

const products = [
  {
    id: "nebula-bed",
    price: 168,
    symbol: "symbol-bed",
    image: "c1c6fd4735ff67fcd6b119a39050a6e0.jpg",
    bg: "linear-gradient(135deg, #fbe5ed, #fff2d1)",
    zh: {
      name: "星云猫窝",
      desc: "像小飞船一样包裹身体，适合午睡和晒太阳。",
    },
    en: {
      name: "Nebula Cat Bed",
      desc: "A cozy pod-like bed for naps, sunbeams, and quiet afternoons.",
    },
  },
  {
    id: "moon-bowl",
    price: 89,
    symbol: "symbol-bowl",
    image: "2acf9968b04054ea045c0182b79a2968.jpg",
    bg: "linear-gradient(135deg, #dff3ec, #edf3ff)",
    zh: {
      name: "月光食碗",
      desc: "稳固浅口设计，适合干粮、湿粮和小零食。",
    },
    en: {
      name: "Moonlight Bowl",
      desc: "A stable shallow bowl for dry food, wet food, and tiny treats.",
    },
  },
  {
    id: "stardust-bag",
    price: 126,
    symbol: "symbol-bag",
    image: "080bb9c0da472d1f5e5d81885f4c5511.jpg",
    bg: "linear-gradient(135deg, #fff0d0, #f7e5d7)",
    zh: {
      name: "星尘帆布袋",
      desc: "日常通勤和购物都好用，轻巧但很能装。",
    },
    en: {
      name: "Stardust Tote",
      desc: "A light, roomy tote for errands, books, and daily adventures.",
    },
  },
  {
    id: "orbit-toy",
    price: 59,
    symbol: "symbol-toy",
    image: "9abd4f13dfc215763b8f20ece0cf58d4.jpg",
    bg: "linear-gradient(135deg, #e6effd, #f9d8e2)",
    zh: {
      name: "轨道逗猫棒",
      desc: "轻盈有弹性，适合互动游戏和消耗精力。",
    },
    en: {
      name: "Orbit Teaser Wand",
      desc: "Light and springy for interactive play and happy zooming.",
    },
  },
];

let currentLanguage = "zh";
const cart = new Map();

const productGrid = document.querySelector("[data-products]");
const cartPanel = document.querySelector("[data-cart-panel]");
const cartItems = document.querySelector("[data-cart-items]");
const cartEmpty = document.querySelector("[data-cart-empty]");
const cartCount = document.querySelector("[data-cart-count]");
const cartTotal = document.querySelector("[data-cart-total]");
const langLabel = document.querySelector("[data-lang-label]");

function formatPrice(value) {
  return currentLanguage === "zh" ? `¥${value}` : `¥${value} CNY`;
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    node.textContent = translations[currentLanguage][key];
  });
  langLabel.textContent = currentLanguage === "zh" ? "EN" : "中";
  renderProducts();
  renderCart();
}

function renderProducts() {
  productGrid.innerHTML = products
    .map((product) => {
      const localized = product[currentLanguage];
      return `
        <article class="product-card">
          <div class="product-visual" style="--product-bg: ${product.bg}">
            <img class="product-image" src="${product.image}" alt="${localized.name}" />
          </div>
          <div class="product-info">
            <h3>${localized.name}</h3>
            <p>${localized.desc}</p>
          </div>
          <div class="product-bottom">
            <span class="price">${formatPrice(product.price)}</span>
            <button class="add-button" type="button" data-add="${product.id}">
              ${translations[currentLanguage].add}
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderCart() {
  const entries = Array.from(cart.entries());
  const totalCount = entries.reduce((sum, [, quantity]) => sum + quantity, 0);
  const totalPrice = entries.reduce((sum, [id, quantity]) => {
    const product = products.find((item) => item.id === id);
    return sum + product.price * quantity;
  }, 0);

  cartCount.textContent = totalCount;
  cartTotal.textContent = formatPrice(totalPrice);
  cartEmpty.classList.toggle("is-visible", entries.length === 0);

  cartItems.innerHTML = entries
    .map(([id, quantity]) => {
      const product = products.find((item) => item.id === id);
      return `
        <div class="cart-row">
          <div>
            <h3>${product[currentLanguage].name}</h3>
            <p>${formatPrice(product.price)}</p>
          </div>
          <div class="quantity-controls" aria-label="${translations[currentLanguage].qty}">
            <button class="quantity-button" type="button" data-decrease="${id}">-</button>
            <strong>${quantity}</strong>
            <button class="quantity-button" type="button" data-add="${id}">+</button>
          </div>
        </div>
      `;
    })
    .join("");
}

function addToCart(id) {
  cart.set(id, (cart.get(id) || 0) + 1);
  renderCart();
  openCart();
}

function decreaseCart(id) {
  const quantity = cart.get(id) || 0;
  if (quantity <= 1) {
    cart.delete(id);
  } else {
    cart.set(id, quantity - 1);
  }
  renderCart();
}

function openCart() {
  cartPanel.classList.add("is-open");
  cartPanel.setAttribute("aria-hidden", "false");
  document.body.classList.add("cart-open");
}

function closeCart() {
  cartPanel.classList.remove("is-open");
  cartPanel.setAttribute("aria-hidden", "true");
  document.body.classList.remove("cart-open");
}

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  const decreaseButton = event.target.closest("[data-decrease]");

  if (addButton) {
    addToCart(addButton.getAttribute("data-add"));
  }

  if (decreaseButton) {
    decreaseCart(decreaseButton.getAttribute("data-decrease"));
  }
});

document.querySelector(".language-toggle").addEventListener("click", () => {
  currentLanguage = currentLanguage === "zh" ? "en" : "zh";
  applyTranslations();
});

document.querySelector("[data-cart-open]").addEventListener("click", openCart);
document.querySelectorAll("[data-cart-close]").forEach((node) => {
  node.addEventListener("click", closeCart);
});

applyTranslations();
