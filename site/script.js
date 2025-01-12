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
