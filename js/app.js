(() => {
  "use strict";

  /* =========================================================
     Data
  ========================================================= */

  const SAUCES = [
    { id: "buffalo-lp",   name: "Buffalo Lemon Pepper", tag: "Tangy Heat",   heat: 3, color: "linear-gradient(160deg,#e0631c,#b8332a)" },
    { id: "honey-lp",     name: "Honey Lemon Pepper",   tag: "Citrus Sweet", heat: 1, color: "linear-gradient(160deg,#f3bb52,#d9601a)" },
    { id: "hot-honey",    name: "Hot Honey",            tag: "Sweet Heat",   heat: 3, color: "linear-gradient(160deg,#e0631c,#8f2418)" },
    { id: "honey-oldbay", name: "Honey Old Bay",        tag: "Bay Sweet",    heat: 1, color: "linear-gradient(160deg,#f0a93c,#d9601a)" },
    { id: "pineapple-sc", name: "Pineapple Sweet Chili",tag: "Fruity Mild",  heat: 2, color: "linear-gradient(160deg,#f2935f,#e0631c)" },
    { id: "maple-jerk",   name: "Maple Jerk",           tag: "Smoky Spice",  heat: 3, color: "linear-gradient(160deg,#7a3a1d,#3a2f29)" },
    { id: "garlic-buff",  name: "Garlic Buffalo",       tag: "Garlic Heat",  heat: 3, color: "linear-gradient(160deg,#e0631c,#a63a1f)" },
    { id: "garlic-parm",  name: "Garlic Parm",          tag: "Rich & Mild",  heat: 1, color: "linear-gradient(160deg,#f5ead8,#cdb98a)" },
    { id: "rub-oldbay",   name: "Old Bay Dry Rub",      tag: "Dry Rub",      heat: 1, color: "linear-gradient(160deg,#e08a3d,#c96a20)", rub: true },
    { id: "rub-lp",       name: "Lemon Pepper Dry Rub", tag: "Dry Rub",      heat: 1, color: "linear-gradient(160deg,#d8c877,#a89249)", rub: true },
    { id: "rub-ranch",    name: "Ranch Dry Rub",        tag: "Dry Rub",      heat: 1, color: "linear-gradient(160deg,#e9e2c9,#bdb48f)", rub: true },
  ];

  const NONE_SAUCE = { id: "none", name: "No Sauce / Plain" };

  const SIDES = [
    { id: "mac-cheese",     name: "Mac & Cheese",                     price: 4.99, image: "images/crops/mac-cheese.jpg" },
    { id: "mash-plain",     name: "Garlic Mash (Plain)",              price: 4.99, image: "images/crops/garlic-mash.jpg" },
    { id: "mash-gravy",     name: "Garlic Mash w/ Turkey Gravy",      price: 4.99, image: "images/crops/garlic-mash-gravy.jpg" },
    { id: "string-beans",   name: "String Beans w/ Turkey Neck",      price: 5.49, image: "images/crops/string-beans.jpg" },
    { id: "cabbage",        name: "Cabbage w/ Beef Sausage",          price: 5.49, image: "images/crops/cabbage.jpg" },
    { id: "candied-yams",   name: "Candied Yams",                     price: 4.99, image: "images/crops/candied-yams.jpg" },
    { id: "rice-plain",     name: "Yellow Rice (Plain)",              price: 3.99, placeholder: "Yellow Rice" },
    { id: "rice-gravy",     name: "Yellow Rice w/ Turkey Gravy",      price: 3.99, placeholder: "Yellow Rice w/ Gravy" },
    { id: "collards",       name: "Collard Greens w/ Turkey Neck",    price: 5.49, image: "images/crops/collard-greens.jpg" },
    { id: "seafood-salad",  name: "Seafood Salad",                    price: 6.99, placeholder: "Seafood Salad" },
  ];

  const MENU = [
    // Entrees — all include 2 sides + 1 sauce/rub choice
    { id: "lamb-chops", category: "entrees", name: "Maple Jerk Lamb Chops (4pc)", price: 24.99, desc: "Four grilled lamb chops glazed in maple jerk.", image: null, placeholder: "Maple Jerk Lamb Chops", entree: true, soldOut: true },
    { id: "maple-salmon", category: "entrees", name: "Maple Jerk Salmon", price: 19.99, desc: "Grilled salmon glazed in sweet-smoky maple jerk, over yellow rice.", image: "images/IMG_0891.jpeg", entree: true },
    { id: "blackened-salmon", category: "entrees", name: "Blackened Salmon", price: 18.99, desc: "Cajun-blackened salmon, seared hard.", image: null, placeholder: "Blackened Salmon", entree: true },
    { id: "turkey-wings", category: "entrees", name: "Smothered Turkey Wings", price: 16.99, desc: "Fall-off-the-bone turkey wings smothered in brown gravy.", image: "images/IMG_0892.jpeg", entree: true },
    { id: "fried-chicken", category: "entrees", name: "Fried Chicken (8pc)", price: 17.99, desc: "Eight pieces, hand-breaded and fried to order.", image: "images/IMG_0895.jpeg", entree: true },
    { id: "salmon-tenders", category: "entrees", name: "Salmon Tenders (4)", price: 17.99, desc: "Four crispy salmon tenders, tossed in your sauce.", image: "images/IMG_0894.jpeg", entree: true },
    { id: "shrimp-chicken", category: "entrees", name: "Shrimp & Fried Chicken", price: 19.99, desc: "Fried shrimp paired with fried chicken.", image: null, placeholder: "Shrimp & Fried Chicken", entree: true },
    { id: "fried-catfish", category: "entrees", name: "Fried Catfish (2)", price: 16.99, desc: "Two golden cornmeal-crusted catfish fillets.", image: "images/IMG_0890.jpeg", entree: true },
    { id: "fried-whiting", category: "entrees", name: "Fried Whiting (3)", price: 15.99, desc: "Three crispy whiting fillets, Baltimore's classic.", image: "images/IMG_0896.jpeg", entree: true },
    { id: "jumbo-shrimp", category: "entrees", name: "Jumbo Fried Shrimp (6)", price: 18.99, desc: "Six jumbo shrimp, fried crisp and tossed in sauce.", image: "images/IMG_0898.jpeg", entree: true },

    // Sides (a la carte)
    ...SIDES.map(s => ({ id: `side-${s.id}`, category: "sides", name: s.name, price: s.price, desc: "", image: s.image || null, placeholder: s.placeholder })),

    // Desserts
    { id: "strawberry-crunch", category: "desserts", name: "Strawberry Crunch Cake", price: 6.99, desc: "", image: null, placeholder: "Strawberry Crunch Cake" },
    { id: "honey-bun-cake", category: "desserts", name: "Honey Bun Cake", price: 6.99, desc: "Warm glazed bundt cake, cinnamon-brown-sugar swirl.", image: "images/IMG_0904.jpeg" },
    { id: "banana-pudding", category: "desserts", name: "Banana Pudding", price: 5.99, desc: "", image: null, placeholder: "Banana Pudding" },

    // Beverages
    { id: "blue-rasp-lemonade", category: "beverages", name: "Blue Raspberry Lemonade", price: 3.49, desc: "", image: null, placeholder: "Blue Raspberry Lemonade" },
    { id: "strawberry-lemonade", category: "beverages", name: "Strawberry Lemonade", price: 3.49, desc: "", image: null, placeholder: "Strawberry Lemonade" },
    { id: "southern-peach-tea", category: "beverages", name: "Southern Peach Tea", price: 3.49, desc: "", image: null, placeholder: "Southern Peach Tea" },
    { id: "white-peach-lemonade", category: "beverages", name: "White Peach Lemonade", price: 3.49, desc: "", image: null, placeholder: "White Peach Lemonade" },
    { id: "half-and-half", category: "beverages", name: "Half & Half", price: 3.49, desc: "Half lemonade, half sweet tea.", image: null, placeholder: "Half & Half" },
  ];

  const money = n => `$${n.toFixed(2)}`;

  /* =========================================================
     Cart state
  ========================================================= */

  let cart = [];
  try {
    cart = JSON.parse(localStorage.getItem("plattaking-cart") || "[]");
  } catch { cart = []; }

  function saveCart() {
    localStorage.setItem("plattaking-cart", JSON.stringify(cart));
    renderCartBadge();
  }

  function cartTotalQty() {
    return cart.reduce((sum, i) => sum + i.qty, 0);
  }
  function cartSubtotal() {
    return cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  }

  /* =========================================================
     Render: Sauce wall
  ========================================================= */

  function renderSauceWall() {
    const wall = document.getElementById("sauce-wall");
    wall.innerHTML = SAUCES.map(s => `
      <div class="sauce-drop ${s.rub ? "sauce-drop--rub" : ""}" style="background:${s.color}" role="listitem">
        <p class="sauce-drop__name">${s.name}</p>
        <p class="sauce-drop__tag">${s.tag}</p>
        <div class="sauce-drop__heat" aria-label="Heat level ${s.heat} of 3">
          ${[1,2,3].map(n => `<span class="${n <= s.heat ? "is-lit" : ""}"></span>`).join("")}
        </div>
      </div>
    `).join("");
  }

  /* =========================================================
     Render: Menu grids
  ========================================================= */

  function mediaMarkup(item) {
    const badge = item.soldOut ? '<div class="soldout-badge">Sold Out<br>Today</div>' : "";
    if (item.image) {
      return `<div class="item-card__media"><img src="${item.image}" alt="${item.name}" loading="lazy" width="96" height="96">${badge}</div>`;
    }
    const label = item.placeholder || item.name;
    return `<div class="item-card__media"><div class="item-card__placeholder">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2v8a2 2 0 0 1-2 2 2 2 0 0 1-2-2V2m2 20v-8M17 2v20M17 2c-2 0-3 2-3 5s1 4 3 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      [PLACEHOLDER: ${label}]
    </div>${badge}</div>`;
  }

  function renderGrid(category, targetId) {
    const el = document.getElementById(targetId);
    const items = MENU.filter(m => m.category === category);
    el.innerHTML = items.map(item => `
      <article class="item-card ${item.soldOut ? "is-soldout" : ""}" data-id="${item.id}">
        ${mediaMarkup(item)}
        <div class="item-card__body">
          <div class="item-card__top">
            <h3 class="item-card__name">${item.name}</h3>
            <span class="item-card__price">${money(item.price)}</span>
          </div>
          ${item.entree ? `<p class="item-card__meta">Choice of 2 sides + sauce</p>` : ""}
          ${item.desc ? `<p class="item-card__desc">${item.desc}</p>` : ""}
          <div class="item-card__actions">
            <button class="add-btn" data-add="${item.id}" ${item.soldOut ? "disabled aria-disabled=\"true\"" : ""}>
              ${item.soldOut ? "Sold Out" : (item.entree ? "Customize" : "Add")}
            </button>
          </div>
        </div>
      </article>
    `).join("");

    el.querySelectorAll("[data-add]").forEach(btn => {
      btn.addEventListener("click", () => {
        const item = MENU.find(m => m.id === btn.dataset.add);
        if (item.soldOut) return;
        if (item.entree) {
          openItemSheet(item);
        } else {
          addToCart({ menuId: item.id, name: item.name, price: item.price, qty: 1, sides: [], sauce: null });
          showToast(`${item.name} added`);
        }
      });
    });
  }

  function renderAllGrids() {
    renderGrid("entrees", "grid-entrees");
    renderGrid("sides", "grid-sides");
    renderGrid("desserts", "grid-desserts");
    renderGrid("beverages", "grid-beverages");
  }

  /* =========================================================
     Item customization sheet (entrees: 2 sides + 1 sauce)
  ========================================================= */

  const itemOverlay = document.getElementById("item-overlay");
  const itemSheet = document.getElementById("item-sheet");
  const itemSheetBody = document.getElementById("item-sheet-body");

  let pendingItem = null;
  let pendingSides = [];
  let pendingSauce = null;
  let pendingQty = 1;

  function openItemSheet(item) {
    pendingItem = item;
    pendingSides = [];
    pendingSauce = null;
    pendingQty = 1;
    renderItemSheet();
    showSheet(itemOverlay, itemSheet);
    itemSheet.querySelector("#item-sheet-close-focus")?.focus();
  }

  function renderItemSheet() {
    const allSauces = [NONE_SAUCE, ...SAUCES];
    itemSheetBody.innerHTML = `
      <h2 id="item-sheet-title">${pendingItem.name}</h2>
      <p>${money(pendingItem.price)} · ${pendingItem.desc || ""}</p>

      <div class="picker-group">
        <h3>Choose 2 sides</h3>
        <p class="picker-hint">${pendingSides.length}/2 selected</p>
        ${SIDES.map(s => `
          <label class="picker-option">
            <input type="checkbox" name="side" value="${s.id}" ${pendingSides.includes(s.id) ? "checked" : ""}
              ${pendingSides.length >= 2 && !pendingSides.includes(s.id) ? "disabled" : ""}>
            <span>${s.name}</span>
          </label>
        `).join("")}
      </div>

      <div class="picker-group">
        <h3>Choose your flavor</h3>
        <p class="picker-hint">1 sauce or dry rub included</p>
        ${allSauces.map(s => `
          <label class="picker-option">
            <input type="radio" name="sauce" value="${s.id}" ${pendingSauce === s.id ? "checked" : ""}>
            <span>${s.name}</span>
          </label>
        `).join("")}
      </div>

      <div class="qty-stepper">
        <button type="button" id="qty-minus" aria-label="Decrease quantity">&minus;</button>
        <output id="qty-output">${pendingQty}</output>
        <button type="button" id="qty-plus" aria-label="Increase quantity">+</button>
      </div>

      <div class="sheet-cta">
        <button class="btn btn--primary btn--lg btn--block" id="item-add-to-cart" disabled>
          Add to Cart
        </button>
      </div>
    `;

    itemSheetBody.querySelectorAll('input[name="side"]').forEach(cb => {
      cb.addEventListener("change", () => {
        if (cb.checked) {
          if (pendingSides.length < 2) pendingSides.push(cb.value);
        } else {
          pendingSides = pendingSides.filter(v => v !== cb.value);
        }
        renderItemSheet();
      });
    });
    itemSheetBody.querySelectorAll('input[name="sauce"]').forEach(rb => {
      rb.addEventListener("change", () => {
        pendingSauce = rb.value;
        updateAddButtonState();
      });
    });

    document.getElementById("qty-minus").addEventListener("click", () => {
      pendingQty = Math.max(1, pendingQty - 1);
      document.getElementById("qty-output").textContent = pendingQty;
    });
    document.getElementById("qty-plus").addEventListener("click", () => {
      pendingQty = Math.min(20, pendingQty + 1);
      document.getElementById("qty-output").textContent = pendingQty;
    });

    updateAddButtonState();

    document.getElementById("item-add-to-cart").addEventListener("click", () => {
      const sideNames = pendingSides.map(id => SIDES.find(s => s.id === id).name);
      const sauceObj = allSauces.find(s => s.id === pendingSauce);
      addToCart({
        menuId: pendingItem.id,
        name: pendingItem.name,
        price: pendingItem.price,
        qty: pendingQty,
        sides: sideNames,
        sauce: sauceObj.name,
      });
      showToast(`${pendingItem.name} added`);
      closeSheet(itemOverlay, itemSheet);
    });
  }

  function updateAddButtonState() {
    const btn = document.getElementById("item-add-to-cart");
    if (!btn) return;
    btn.disabled = !(pendingSides.length === 2 && pendingSauce);
  }

  document.getElementById("item-sheet-close").addEventListener("click", () => closeSheet(itemOverlay, itemSheet));
  itemOverlay.addEventListener("click", () => closeSheet(itemOverlay, itemSheet));

  /* =========================================================
     Cart operations
  ========================================================= */

  function sameSelection(a, b) {
    const sidesA = (a.sides || []).slice().sort().join("|");
    const sidesB = (b.sides || []).slice().sort().join("|");
    return sidesA === sidesB && (a.sauce || null) === (b.sauce || null);
  }

  function addToCart(entry) {
    const existing = cart.find(i => i.menuId === entry.menuId && sameSelection(i, entry));
    if (existing) {
      existing.qty += entry.qty;
    } else {
      entry.cartId = `c${Date.now()}${Math.random().toString(36).slice(2, 6)}`;
      cart.push(entry);
    }
    saveCart();
    renderCart();
  }

  function removeFromCart(cartId) {
    cart = cart.filter(i => i.cartId !== cartId);
    saveCart();
    renderCart();
  }

  function changeQty(cartId, delta) {
    const item = cart.find(i => i.cartId === cartId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
      removeFromCart(cartId);
      return;
    }
    saveCart();
    renderCart();
  }

  function renderCartBadge() {
    const qty = cartTotalQty();
    const badge = document.getElementById("cart-badge");
    badge.textContent = qty;
    badge.hidden = qty === 0;

    const bar = document.getElementById("bottom-cart-bar");
    bar.hidden = qty === 0;
    document.getElementById("bottom-cart-count").textContent = `${qty} item${qty === 1 ? "" : "s"}`;
    document.getElementById("bottom-cart-total").textContent = money(cartSubtotal());
    document.getElementById("cart-live").textContent = `Cart: ${qty} item${qty === 1 ? "" : "s"}, ${money(cartSubtotal())}`;
  }

  const DELIVERY_FEE = 4.99;
  let fulfillmentMode = "pickup";

  function renderCart() {
    const wrap = document.getElementById("cart-items");
    if (cart.length === 0) {
      wrap.innerHTML = `<p class="cart-empty">Your order is empty. Add something delicious.</p>`;
    } else {
      wrap.innerHTML = cart.map(item => `
        <div class="cart-item">
          <div>
            <p class="cart-item__name">${item.name}</p>
            ${item.sides && item.sides.length ? `<p class="cart-item__sub">Sides: ${item.sides.join(", ")}</p>` : ""}
            ${item.sauce ? `<p class="cart-item__sub">Flavor: ${item.sauce}</p>` : ""}
            <div class="cart-item__qty-row">
              <button type="button" data-qty-minus="${item.cartId}" aria-label="Decrease quantity of ${item.name}">&minus;</button>
              <span>${item.qty}</span>
              <button type="button" data-qty-plus="${item.cartId}" aria-label="Increase quantity of ${item.name}">+</button>
              <button type="button" data-remove="${item.cartId}" aria-label="Remove ${item.name}" style="margin-left:8px;color:var(--hot);background:none;border:none;font-size:.78rem;cursor:pointer;">Remove</button>
            </div>
          </div>
          <div class="cart-item__right">
            <p class="cart-item__price">${money(item.price * item.qty)}</p>
          </div>
        </div>
      `).join("");

      wrap.querySelectorAll("[data-qty-minus]").forEach(b => b.addEventListener("click", () => changeQty(b.dataset.qtyMinus, -1)));
      wrap.querySelectorAll("[data-qty-plus]").forEach(b => b.addEventListener("click", () => changeQty(b.dataset.qtyPlus, 1)));
      wrap.querySelectorAll("[data-remove]").forEach(b => b.addEventListener("click", () => removeFromCart(b.dataset.remove)));
    }

    const subtotal = cartSubtotal();
    const deliveryFee = fulfillmentMode === "delivery" ? DELIVERY_FEE : 0;
    const total = subtotal + deliveryFee;

    document.getElementById("cart-summary").innerHTML = `
      <div class="cart-summary__row"><span>Subtotal</span><span>${money(subtotal)}</span></div>
      ${fulfillmentMode === "delivery" ? `<div class="cart-summary__row"><span>Delivery fee</span><span>${money(DELIVERY_FEE)}</span></div>` : ""}
      <div class="cart-summary__row total"><span>Total</span><span>${money(total)}</span></div>
    `;

    const checkoutBtn = document.getElementById("checkout-btn");
    const addressFilled = fulfillmentMode === "pickup" || document.getElementById("delivery-address").value.trim().length > 3;
    if (cart.length === 0) {
      checkoutBtn.disabled = true;
      checkoutBtn.textContent = "Add items to order";
    } else if (!addressFilled) {
      checkoutBtn.disabled = true;
      checkoutBtn.textContent = "Enter delivery address";
    } else {
      checkoutBtn.disabled = false;
      checkoutBtn.textContent = "Demo Checkout";
    }
  }

  /* =========================================================
     Pickup / delivery toggle
  ========================================================= */

  const pickupBtn = document.getElementById("mode-pickup");
  const deliveryBtn = document.getElementById("mode-delivery");
  const pickupInfo = document.getElementById("pickup-info");
  const deliveryInfo = document.getElementById("delivery-info");
  const deliveryAddress = document.getElementById("delivery-address");

  pickupBtn.addEventListener("click", () => setFulfillmentMode("pickup"));
  deliveryBtn.addEventListener("click", () => setFulfillmentMode("delivery"));
  deliveryAddress.addEventListener("input", renderCart);

  function setFulfillmentMode(mode) {
    fulfillmentMode = mode;
    pickupBtn.classList.toggle("is-active", mode === "pickup");
    pickupBtn.setAttribute("aria-pressed", mode === "pickup");
    deliveryBtn.classList.toggle("is-active", mode === "delivery");
    deliveryBtn.setAttribute("aria-pressed", mode === "delivery");
    pickupInfo.hidden = mode !== "pickup";
    deliveryInfo.hidden = mode !== "delivery";
    renderCart();
  }

  /* =========================================================
     Checkout (demo)
  ========================================================= */

  document.getElementById("checkout-btn").addEventListener("click", () => {
    const orderNo = `PK-${Math.floor(1000 + Math.random() * 9000)}`;
    document.getElementById("cart-items").outerHTML = `
      <div class="checkout-success" id="cart-items">
        <div class="checkout-success__icon">&#10003;</div>
        <h2>Order received (demo)</h2>
        <p>Order <strong>${orderNo}</strong> — ${fulfillmentMode === "pickup" ? "pickup at 5514 Belair Road" : "delivery on the way"}.</p>
        <p style="font-size:.8rem;opacity:.75;">This is a portfolio demonstration. No real order was placed and no payment was processed.</p>
        <button class="btn btn--ghost btn--block" id="start-new-order" style="margin-top:14px;">Start a New Order</button>
      </div>
    `;
    document.getElementById("checkout-btn").hidden = true;
    document.querySelector(".fulfillment-toggle").hidden = true;
    document.getElementById("pickup-info").hidden = true;
    document.getElementById("delivery-info").hidden = true;
    document.getElementById("cart-summary").hidden = true;
    document.querySelector(".demo-note").hidden = true;

    document.getElementById("start-new-order").addEventListener("click", () => {
      cart = [];
      saveCart();
      document.getElementById("checkout-btn").hidden = false;
      document.querySelector(".fulfillment-toggle").hidden = false;
      document.getElementById("cart-summary").hidden = false;
      document.querySelector(".demo-note").hidden = false;
      setFulfillmentMode("pickup");
      renderCart();
      closeSheet(cartOverlay, cartSheet);
    });
  });

  /* =========================================================
     Sheets: generic show/close + cart sheet wiring
  ========================================================= */

  const cartOverlay = document.getElementById("cart-overlay");
  const cartSheet = document.getElementById("cart-sheet");
  const cartToggle = document.getElementById("cart-toggle");
  const bottomCartBtn = document.getElementById("bottom-cart-btn");

  let lastFocused = null;
  let activeSheet = null;
  const inertTargets = [document.getElementById("main"), document.querySelector(".site-header"), document.querySelector(".site-footer"), document.getElementById("bottom-cart-bar")];

  function focusableEls(sheet) {
    return Array.from(sheet.querySelectorAll('button:not([disabled]), input:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'))
      .filter(el => el.offsetParent !== null);
  }

  function showSheet(overlay, sheet) {
    lastFocused = document.activeElement;
    activeSheet = sheet;
    overlay.hidden = false;
    sheet.hidden = false;
    document.body.style.overflow = "hidden";
    inertTargets.forEach(el => el && el.setAttribute("inert", ""));
    const focusable = sheet.querySelector("button, input, a");
    focusable?.focus();
    document.addEventListener("keydown", sheetKeyHandler);
    if (sheet === cartSheet) {
      cartToggle.setAttribute("aria-expanded", "true");
    }
  }
  function closeSheet(overlay, sheet) {
    overlay.hidden = true;
    sheet.hidden = true;
    document.body.style.overflow = "";
    inertTargets.forEach(el => el && el.removeAttribute("inert"));
    document.removeEventListener("keydown", sheetKeyHandler);
    activeSheet = null;
    lastFocused?.focus();
    if (sheet === cartSheet) {
      cartToggle.setAttribute("aria-expanded", "false");
    }
  }
  function sheetKeyHandler(e) {
    if (e.key === "Escape") {
      if (!itemSheet.hidden) closeSheet(itemOverlay, itemSheet);
      if (!cartSheet.hidden) closeSheet(cartOverlay, cartSheet);
      return;
    }
    if (e.key === "Tab" && activeSheet) {
      const els = focusableEls(activeSheet);
      if (els.length === 0) return;
      const first = els[0];
      const last = els[els.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  cartToggle.addEventListener("click", () => {
    renderCart();
    showSheet(cartOverlay, cartSheet);
  });
  bottomCartBtn.addEventListener("click", () => {
    renderCart();
    showSheet(cartOverlay, cartSheet);
  });
  document.getElementById("cart-sheet-close").addEventListener("click", () => closeSheet(cartOverlay, cartSheet));
  cartOverlay.addEventListener("click", () => closeSheet(cartOverlay, cartSheet));

  /* =========================================================
     Toast
  ========================================================= */

  let toastTimer = null;
  function showToast(msg) {
    const toast = document.getElementById("toast");
    toast.textContent = msg;
    toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast.hidden = true; }, 2200);
  }

  /* =========================================================
     Hours / open status
  ========================================================= */

  const HOURS = {
    0: [14 * 60, 20.5 * 60], // Sun 2:00pm-8:30pm
    4: [14 * 60, 21.5 * 60], // Thu
    5: [14 * 60, 21.5 * 60], // Fri
    6: [14 * 60, 21.5 * 60], // Sat
  };
  const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  function fmtTime(minutes) {
    let h = Math.floor(minutes / 60);
    const m = minutes % 60;
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    return `${h}${m ? ":" + String(m).padStart(2, "0") : ""} ${ampm}`;
  }

  function updateOpenStatus() {
    const now = new Date();
    const localNow = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));
    const day = localNow.getDay();
    const minutes = localNow.getHours() * 60 + localNow.getMinutes();
    const chip = document.getElementById("open-chip");

    const todayHours = HOURS[day];
    if (todayHours && minutes >= todayHours[0] && minutes < todayHours[1]) {
      chip.textContent = `Open now · until ${fmtTime(todayHours[1])}`;
    } else {
      // find next open day
      for (let i = 1; i <= 7; i++) {
        const d = (day + i) % 7;
        if (HOURS[d]) {
          const label = i === 1 ? "tomorrow" : DAY_NAMES[d];
          chip.textContent = `Closed now · opens ${label} at ${fmtTime(HOURS[d][0])}`;
          break;
        }
      }
    }

    document.querySelectorAll("#hours-table tr").forEach(tr => {
      tr.classList.toggle("is-today", Number(tr.dataset.day) === day);
    });
  }

  /* =========================================================
     Init
  ========================================================= */

  renderSauceWall();
  renderAllGrids();
  renderCartBadge();
  renderCart();
  updateOpenStatus();
  setInterval(updateOpenStatus, 60000);

})();
