
// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

navigation.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Sample products
// Replace example Amazon links with your own affiliate links.

const products = [
  {
    name: "Daily Skincare Essentials",
    category: "beauty",
    description: "A curated skincare starter pick.",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600",
    link: "https://www.amazon.com/"
  },
  {
    name: "Makeup Beauty Favorites",
    category: "beauty",
    description: "Explore everyday makeup inspiration.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600",
    link: "https://www.amazon.com/"
  },
  {
    name: "Haircare Essentials",
    category: "beauty",
    description: "Discover haircare accessories.",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=600",
    link: "https://www.amazon.com/"
  },
  {
    name: "Resistance Bands",
    category: "fitness",
    description: "A useful accessory for home workouts.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600",
    link: "https://www.amazon.com/"
  },
  {
    name: "Yoga & Stretching Essentials",
    category: "fitness",
    description: "Explore your home wellness setup.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600",
    link: "https://www.amazon.com/"
  },
  {
    name: "Fitness Accessories",
    category: "fitness",
    description: "Find useful workout accessories.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600",
    link: "https://www.amazon.com/"
  }
];

const productGrid = document.getElementById("productGrid");

function displayProducts(category = "all") {
  const filtered = products.filter(product =>
    category === "all" || product.category === category
  );

  productGrid.innerHTML = filtered.map(product => `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name}" loading="lazy">
      <div class="product-info">
        <span class="product-tag">${product.category.toUpperCase()}</span>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <a class="btn"
           href="${product.link}"
           target="_blank"
           rel="nofollow sponsored noopener">
           View on Amazon
        </a>
      </div>
    </article>
  `).join("");
}

// Product category filters
document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item =>
      item.classList.remove("active")
    );

    button.classList.add("active");
    displayProducts(button.dataset.filter);
  });
});

// Initial page setup
displayProducts();

document.getElementById("year").textContent =
  new Date().getFullYear();
