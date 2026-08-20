document.addEventListener("DOMContentLoaded", function () {

    const searchTabs = document.querySelectorAll(".search-tabs button");

    searchTabs.forEach(function (tab) {

        tab.addEventListener("click", function () {

            searchTabs.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");

        });

    });

});