// ✺ SIMPLE SECTION SWITCH ✺

// NAV SELECTORS
let releasesSelector = document.getElementById("releases");
let linksSelector = document.getElementById("links");

// CONTENT SELECTORS
let contentHomeSelector = document.getElementById("content_home");
let contentReleasesSelector = document.getElementById("content_releases");
let contentLinksSelector = document.getElementById("content_links");

// SECTION SWITCH
releasesSelector.addEventListener("click", function() {
  // console.log("releases clicked!");
  contentHomeSelector.style.display = "none";
  contentLinksSelector.style.display = "none";
  contentReleasesSelector.style.display = "grid";
});
linksSelector.addEventListener("click", function() {
  // console.log("links clicked!");
  contentHomeSelector.style.display = "none";
  contentReleasesSelector.style.display = "none";
  contentLinksSelector.style.display = "block";
});

// ✺ JSON DATA PULL ✺
