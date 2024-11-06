const searchInput = document.getElementById("searchInput");
const suggestionsList = document.getElementById("suggestionsList");

// Function to show suggestions
function showSuggestions() {
  const query = searchInput.value.toLowerCase();
  suggestionsList.innerHTML = "";

  if (query === "" || filteredSuggestions.length === 0) {
    suggestionsList.classList.add("d-none");
    return;
  }

  filteredSuggestions.forEach((suggestion) => {
    const li = document.createElement("li");
    li.textContent = suggestion;
    li.addEventListener("click", () => {
      searchInput.value = suggestion;
      suggestionsList.classList.add("d-none");
    });
    suggestionsList.appendChild(li);
  });

  suggestionsList.classList.remove("d-none");
}

// Event listeners
searchInput.addEventListener("input", showSuggestions);

// Hide suggestions when clicking outside the search box
document.addEventListener("click", (e) => {
  if (!searchInput.contains(e.target) && !suggestionsList.contains(e.target)) {
    suggestionsList.classList.add("d-none");
  }
});
