document.addEventListener("DOMContentLoaded", function() {
    const mainContent = document.getElementById("mainContent");

    if (!mainContent) {
        console.error("mainContent element not found");
        return;
    }

    htmx.ajax("GET", "/pages/entry.html", {
        target: "#mainContent",
        swap: "innerHTML"
    });

    test();
});

function test() {
    console.log("test");
}