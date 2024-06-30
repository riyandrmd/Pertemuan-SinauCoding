document.addEventListener("DOMContentLoaded", function() {
    var sidebar = document.getElementById("sidebar");
    var sidebarCollapse = document.getElementById("sidebarCollapse");
    
    sidebarCollapse.addEventListener("click", function() {
        sidebar.classList.toggle("active");
        document.getElementById("content").classList.toggle("active");
    });
});
