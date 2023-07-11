const article =
  document.querySelector("article") || document.querySelector("section");

// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  const text = article.textContent;

  /*   
  With Regular expression
    const wordMatchRegExp = /[^\s]+/g;
    const words = text.matchAll(wordMatchRegExp); */

  const words = text.split(" ");

  /* 
    Other way :
      matchAll returns an iterator, convert to array to get word count
      const wordCount = [...words].length;
  */

  const wordCount = words.length;
  const readingTime = Math.round(wordCount / 200);

  const badge = document.createElement("p");

  // Use the same styling as the publish information in an article's header

  badge.classList.add("color-secondary-text", "type--caption");
  if (readingTime === 0) {
    badge.textContent = `⏱️ less than 1 min read @ReadingTime`;
  } else {
    badge.textContent = `⏱️ ${readingTime} min read @ReadingTime`;
  }
  badge.style.backgroundColor = "yellow";
  badge.style.color = "green";
  badge.style.padding = "10px";
  badge.style.borderRadius = "10px";

  // Support for API reference docs
  const heading =
    article.querySelector("h1") || article.querySelector("header");

  // Support for article docs with date
  const date = article.querySelector("time")?.parentNode;
  (date ?? heading).insertAdjacentElement("afterend", badge);

  // Insert the message as the first child of the <body> element
  const additionalDiv =
    document.createElement("div") || document.createElement("p");
  if (readingTime === 0) {
    additionalDiv.textContent = `⏱️ less than 1 min read @ReadingTime`;
  } else {
    additionalDiv.textContent = `⏱️ ${readingTime} min read @ReadingTime`;
  }
  additionalDiv.style.textAlign = "center";
  additionalDiv.style.textDecorationLine = "underline";
  document.body.insertBefore(additionalDiv, document.body.firstChild);
}
