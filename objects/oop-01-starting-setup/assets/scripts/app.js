const productList = {
  products: [
    {
      title: "A Pillow",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/71h8Q1lPl7L._AC_UL330_SR330,330_.jpg",
      price: 19.99,
      description: "A soft pillow",
    },
    {
      title: "A Rug",
      imageUrl:
        "https://img.zcdn.com.au/lf/50/hash/38080/19150627/4/Silver-Harlo-Shag-Rug.jpg",
      price: 69.99,
      description: "A shag rug",
    },
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
      <div>
        <img src="${prod.imageUrl}" alt="${prod.title}" />
        <div class="product-item__content">
          <h2>${prod.title}</h2>
          <h3>\$${prod.price}</h3>
          <p>${prod.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
