document.addEventListener("DOMContentLoaded", function() {
    const mainContent = document.getElementById("mainContent");

    if (!mainContent) {
        console.error("mainContent element not found");
        return;
    }

    mainContent.setAttribute("hx-get", "/pages/entry.html");
    mainContent.setAttribute("hx-trigger", "load");
    mainContent.setAttribute("hx-target", "#mainContent"); // Ensure the target is set

    htmx.process(mainContent);

    test();
});

function test() {
    console.log("DOM fully loaded and parsed");
}