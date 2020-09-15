function builder() {
  var product = JSON.parse(JSON.stringify(Product));

  function setId(id) {
    product.id = id;

    return this;
  }

  function setName(name) {
    product.name = name;

    return this;
  }

  function setCategories(categories) {
    product.categories = categories;

    return this;
  }

  function setPrice(price) {
    product.price = price;

    return this;
  }

  function setInStock(inStock) {
    product.inStock = inStock;

    return this;
  }

  function build() {
    return product;
  }

  return {
    setId,
    setName,
    setCategories,
    setPrice,
    setInStock,
    build,
  };
}

var Product = {
  id: 0,
  name: "",
  categories: [],
  price: 0,
  inStock: false,
};

function director() {
  console.log(builder);
  var product = builder()
    .setId(1)
    .setName("Huddy")
    .setCategories(["clothes", "jackets"])
    .setPrice(12.99)
    .setInStock(true)
    .build();

  console.log(`constructed product is: ${JSON.stringify(product)}`);
}

director();
