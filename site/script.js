// Optional: Add a loading indicator for HTMX requests
document.body.addEventListener("htmx:configRequest", (event) => {
  const loadingIndicator = document.createElement("div");
  loadingIndicator.id = "loading-indicator";
  loadingIndicator.textContent = "Loading...";
  document.body.appendChild(loadingIndicator);
});

document.body.addEventListener("htmx:afterRequest", () => {
  const loadingIndicator = document.getElementById("loading-indicator");
  if (loadingIndicator) {
    loadingIndicator.remove();
  }
});

// Optional: Handle errors gracefully
document.body.addEventListener("htmx:responseError", (event) => {
  console.error("Error with HTMX request:", event.detail);
  alert("Something went wrong. Please try again.");
});

// Optional: Additional interactivity (e.g., log button clicks)
document.getElementById("load-data-btn")?.addEventListener("click", () => {
  console.log("Load Data button clicked.");
});

// Additional logic for the contact form
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    console.log("Contact form submitted:", new FormData(contactForm));
  });
}

// Handle API data loading
const loadDataBtn = document.getElementById("load-data-btn");
const dataList = document.getElementById("data-list-2");
loadDataBtn.addEventListener("click", async () => {
  try {
    // Fetch data from a placeholder API
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();

    // Display the first 5 items in the API response
    dataList.innerHTML = data
      .slice(0, 5)
      .map((item) => `<li>${item.title}</li>`)
      .join("");
  } catch (error) {
    console.error("Error fetching data:", error);
    alert("Failed to load data. Please try again.");
  }
});
