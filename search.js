const menus = [
  { 
    name: "Home", 
    url: "index.html",
    keywords: ["home", "main", "start"]
  },
  { 
    name: "Video", 
    url: "video.html",
    keywords: ["video", "v", "watch"]
  },
  { 
    name: "Map", 
    url: "map.html",
    keywords: ["map", "location", "place"]
  },
  { 
    name: "Royal Palace", 
    url: "royal-palace.html",
    keywords: ["royal", "palace", "king"]
  },
  { 
    name: "Khmer Traditional Clothing", 
    url: "khmer-traditional-clothing.html",
    keywords: ["clothes", "clothing", "traditional", "dress", "costume"]
  },
  { 
    name: "Khmer Folk Games", 
    url: "khmer-folk-games.html",
    keywords: ["games", "game", "folk", "play"]
  },
  { 
    name: "Famous Dishes", 
    url: "famous-dishes-in-cambodia.html",
    keywords: ["food", "dish", "eat", "cuisine"]
  },
  { 
    name: "User Management System", 
    url: "User-managemen-system.html",
    keywords: ["user", "admin", "account", "management"]
  }
];

function liveSearch() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultBox = document.getElementById("searchResult");
  resultBox.innerHTML = "";

  if (input === "") return;

  const matches = menus.filter(menu =>
    menu.name.toLowerCase().includes(input) ||
    menu.keywords.some(k => k.includes(input))
  );

  matches.forEach(menu => {
    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-action";
    li.textContent = menu.name;
    li.onclick = () => window.location.href = menu.url;
    resultBox.appendChild(li);
  });
}

function goSearch() {
  const input = document.getElementById("searchInput").value.toLowerCase();

  const match = menus.find(menu =>
    menu.name.toLowerCase().includes(input) ||
    menu.keywords.some(k => k.includes(input))
  );

  if (match) {
    window.location.href = match.url;
  } else {
    alert("❌ No matching page found");
  }
}
