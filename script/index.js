/* TRENDING PRODUCTS  */

const trendingProducts = async () => {
    try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        const shuffled = [...data].sort(() => 0.5 - Math.random());

        const topProducts = shuffled.slice(0, 3);

        displayTrendingProducts(topProducts);

    } catch (error) {
        console.error("Trending products error:", error);
    }
};

/* DISPLAY TRENDING */

const displayTrendingProducts = (products) => {
    const trendingContainer = document.getElementById("trending-container");
    trendingContainer.innerHTML = "";

    products.forEach((product) => {
        const card = document.createElement("div");

        card.innerHTML = `
            <div class="card w-full bg-base-100 shadow-md">
                <figure class="p-4">
                    <img src="${product.image}" 
                         class="h-[180px] object-contain mx-auto" 
                         alt="${product.title}" />
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
                            View
                        </button>

                        <button class="btn btn-primary btn-sm">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;

        trendingContainer.appendChild(card);
    });
};

trendingProducts();
