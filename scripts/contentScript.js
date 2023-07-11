const article =
  document.querySelector("article") || document.querySelector("section");

// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  const text = article.textContent;

  /*   // With Regular expression
  const wordMatchRegExp = /[^\s]+/g;
  const words = text.matchAll(wordMatchRegExp); */

  const words = text.split(" ");

  // matchAll returns an iterator, convert to array to get word count
  // const wordCount = [...words].length;
  const wordCount = words.length;

  const readingTime = Math.round(wordCount / 200);

  const badge = document.createElement("p");

  // Use the same styling as the publish information in an article's header
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read @ReadingTime`;

  // Support for API reference docs
  const heading =
    article.querySelector("h1") || article.querySelector("header");
  // Support for article docs with date
  const date = article.querySelector("time")?.parentNode;
  (date ?? heading).insertAdjacentElement("afterend", badge);
}
