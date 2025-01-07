// HOMEWORK Part 1
// Change the page with JavaScript
// Change the text of all paragraphs and headers with javascript
// Note:The html must not be changed
//Changing headers

// let firstHeader = document.getElementById("myTitle");
// firstHeader.innerText = "Changed header";

document.querySelectorAll("h1").forEach((header) => {
  header.innerText = "Changed h1";
});
document.querySelectorAll("h3").forEach((header) => {
  header.innerTextt = "Changed h3";
});
document.querySelectorAll("p").forEach((paragraph) => {
  paragraph.innerText = "Paragraph changed";
});
