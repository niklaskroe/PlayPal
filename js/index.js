document.addEventListener("DOMContentLoaded", function() {
    const mainContent = document.getElementById("mainContent");

    mainContent.setAttribute("hx-get", "/pages/entry.html");
    mainContent.setAttribute("hx-trigger", "load");

    htmx.process(mainContent);
});