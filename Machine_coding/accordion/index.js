const section = [
  { tittle: "section1", content: "content for section 1 " },
  { tittle: "section2", content: "content for section 2" },
  { tittle: "section3", content: "content for section 3" },
  { tittle: "section4", content: "content for section 4" },
  { tittle: "section5", content: "content for section 5" },
];

document.addEventListener("DOMContentLoaded", function () {
  const accordionContainer = document.querySelector("#accordion");

  section.forEach((section) => {
    const sectionItem = document.createElement("div");
    sectionItem.classList.add("accordion-item");

    //creating the title
    const sectionHeader = document.createElement("div");
    sectionHeader.classList.add("accordion-header");
    sectionHeader.textContent = section.tittle;

    //creating content
    const sectionContent = document.createElement("div");
    sectionContent.classList.add("accordion-content");
    sectionContent.innerHTML = `<p>${section.content}</p>`;

    sectionItem.appendChild(sectionHeader);
    sectionItem.appendChild(sectionContent);

    accordionContainer.appendChild(sectionItem);
  });

  //click event added to the header
  accordionContainer.addEventListener("click", (event) => {
    console.log("event" , event.target)
    const header = event.target.closest(".accordion-header");
    console.log("clicked", header);
    if (!header) return;

    const sectionItem = header.parentNode;
    console.log("par" ,sectionItem)
    const content = sectionItem.querySelector(".accordion-content");
    const isActive = sectionItem.classList.contains("active");

    document.querySelectorAll(".accordion-item").forEach((item) => {
      item.classList.remove("active");
      item.querySelector(".accordion-content").style.display = "none";
      if (!isActive) {
        sectionItem.classList.add("active");
        content.style.display = 'block'
      }
    });
  });
});
