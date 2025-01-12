// Add interactivity to your website
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const loadDataBtn = document.getElementById("load-data-btn");
  const dataList = document.getElementById("data-list");

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Basic form validation
    if (name && email && message) {
      console.log("Form Submitted:", {name, email, message});
      alert("Thank you for your message!");
      form.reset(); // Clear the form
    } else {
      alert("Please fill out all fields.");
    }
  });

  // Handle API data loading
  loadDataBtn.addEventListener("click", async () => {
    try {
      // Fetch data from a placeholder API
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
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
});
