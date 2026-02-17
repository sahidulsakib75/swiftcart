
const productsContainer = document.getElementById("products-container");

/* LOAD ALL PRODUCTS */

const loadProducts = async () => {
    try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        displayProducts(data);
    } catch (error) {
        console.error("Load products error:", error);
    }
};

/*  FILTER CATEGORY  */

const filterCategory = async (category) => {
    let url = "";

    if (category === "all") {
        url = "https://fakestoreapi.com/products";
    } else {
        url = `https://fakestoreapi.com/products/category/${category}`;
    }

    try {
        const res = await fetch(url);
        const data = await res.json();
        displayProducts(data);
    } catch (error) {
        console.error("Filter error:", error);
    }
};

/*  DISPLAY PRODUCTS  */

const displayProducts = (products) => {
    productsContainer.innerHTML = "";

    products.forEach((product) => {
        const card = document.createElement("div");

        card.innerHTML = `
            <div class="card w-full bg-base-100 shadow-md hover:shadow-xl transition">
                <figure class="p-4">
                    <img 
                        src="${product.image}" 
                        alt="${product.title}" 
                        class="h-[180px] object-contain mx-auto"
                    />
                </figure>

                <div class="card-body text-center">
                    <div class="badge badge-primary mx-auto mb-2">
                        ${product.category}
                    </div>

                    <h2 class="card-title text-sm line-clamp-2">
                        ${product.title}
                    </h2>

                    <p class="text-xl font-bold text-blue-600">
                        $${product.price}
                    </p>

                    <p class="text-sm text-gray-500">
                        ⭐ ${product.rating.rate} (${product.rating.count})
                    </p>

                    <div class="card-actions justify-center mt-3">
                        <button class="btn btn-outline btn-sm">
                            Details
                        </button>

                        <button class="btn btn-primary btn-sm">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;

        productsContainer.appendChild(card);
    });
};

loadProducts();
