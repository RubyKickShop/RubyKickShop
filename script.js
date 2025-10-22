async function loadLinks() {
  try {
    const response = await fetch("links.json");
    const links = await response.json();
    const container = document.getElementById("links-container");

    links.forEach(link => {
      const card = document.createElement("a");
      card.className = "link-card";
      card.href = link.url;
      card.target = "_blank";

      const img = document.createElement("img");
      img.src = link.img;
      img.alt = link.text;

      const text = document.createElement("span");
      text.className = "link-text";
      text.textContent = link.text;

      card.appendChild(img);
      card.appendChild(text);
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error al cargar los enlaces:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadLinks);