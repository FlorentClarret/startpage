const pages = ["news", "multimedia", "socials", "selfhosted", "schools", "misc"];
currentPage = "news";
currentLink = -1;

document.onkeydown = handleKeyDown;

function changePage(newPage) {
  pages.forEach(element => document.getElementById(element).style.display = "none");
  pages.forEach(element => document.getElementById("li_" + element).classList.remove("focus"));

  if (currentLink != -1) {
    document.getElementById(currentPage).getElementsByTagName("a")[currentLink].classList.remove("focus");
  }

  document.getElementById(newPage).style.display = "";
  document.getElementById("li_" + newPage).classList.add("focus");
  currentPage = newPage;

  if (currentLink != -1 && document.getElementById(currentPage).getElementsByTagName("a").length > currentLink) {
    document.getElementById(currentPage).getElementsByTagName("a")[currentLink].classList.add("focus");
  } else {
    currentLink = -1;
  }
}

function handleKeyDown(event) {
  event = event || window.event;

  if (event.keyCode == '13') {
    if (currentLink != -1) {
      window.open(document.getElementById(currentPage).getElementsByTagName("a")[currentLink].href, "_self");
    }
  } else if (event.keyCode == '38') {
    // Up
    const linkCount = document.getElementById(currentPage).getElementsByTagName("a").length;

    if (linkCount != 0) {
      if (currentLink != -1) {
        document.getElementById(currentPage).getElementsByTagName("a")[currentLink].classList.remove("focus");
      }

      newLink = currentLink == 0 || currentLink == -1 ? linkCount - 1 : currentLink - 1;
      document.getElementById(currentPage).getElementsByTagName("a")[newLink].classList.add("focus");
      currentLink = newLink;
    }
  } else if (event.keyCode == '40') {
    // Down
    const linkCount = document.getElementById(currentPage).getElementsByTagName("a").length;

    if (linkCount != 0) {
      if (currentLink != -1) {
        document.getElementById(currentPage).getElementsByTagName("a")[currentLink].classList.remove("focus");
      }

      newLink = (currentLink + 1) % linkCount;
      document.getElementById(currentPage).getElementsByTagName("a")[newLink].classList.add("focus");
      currentLink = newLink;
    }
  } else if (event.keyCode == '37') {
    // Left
    newIndex = (pages.indexOf(currentPage) - 1) % pages.length;
    changePage(pages[newIndex < 0 ? pages.length - 1 : newIndex]);
  } else if (event.keyCode == '39') {
    // Right
    changePage(pages[(pages.indexOf(currentPage) + 1) % pages.length]);
  }
}
