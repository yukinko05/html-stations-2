function displayList() {
  const ul = document.querySelector("#fruits ul");

  if (!ul) {
    const ul = document.createElement("ul");
    const fruits = document.getElementById("fruits");
    fruits.appendChild(ul);

    const p = document.querySelectorAll("p");
    p.forEach((p) => {
      const li = document.createElement("li");
      li.innerHTML = p.innerHTML;
      ul.appendChild(li);
      p.remove();
    });
  }
}
