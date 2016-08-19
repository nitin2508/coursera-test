$(function() { // Same as document.addEventListener("DOMContentLoaded"...

    // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
    $("#navbarToggle").blur(function(event) {
        var screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $("#collapsable-nav").collapse('hide');
        }
    });

    // In Firefox and Safari, the click event doesn't retain the focus
    // on the clicked button. Therefore, the blur event will not fire on
    // user clicking somewhere else in the page and the blur event handler
    // which is set up above will not be called.
    // Refer to issue #28 in the repo.
    // Solution: force focus on the element that the click event fired on
    $("#navbarToggle").click(function(event) {
        $(event.target).focus();
    });
});

(function(global) {
    var dc = {};
    var homeHtml = "snippits/home.html";
    var insertHtml = function(selector, html) {
        var targetElement = document.querySelector(selector);
        targetElement.innerHTML = html;
    };

    var showLoading = function(selector) {
        var html = "text-center<h1> hello</h1>";
        insertHtml(selector, html);
    };

    document.addEventListener("DOMContentLoaded", function() {
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(homeHtml,
            function(response) {
                insertHtml("#main-content", response);
            }, false
        );
    });


}(window));

(function(global) {
    var dc = {};
    var homeHtml = "snippits/home.html";
    var allCategoryUrl = "http://davids-restaurant.herokuapp.com/categories.json";
    var categotiesHtml = "snippits/categories-snippet.html";
    var categoryTitleHtml = "snippits/categories-title.html";

    var insertHtml = function(selector, html) {
        var targetElement = document.querySelector(selector);
        targetElement.innerHTML = html;
    };

    var showLoading = function(selector) {
        var html = "<div class='text-center'>";
        insertHtml(selector, html);
    };

    var insertProperty = function(string, propName, propValue) {
        var propToReplace = "{{" + propName + "}}";
        string = string.replace(new RegExp(propToReplace, "g"), propValue);
        return string;

    };

    document.addEventListener("DOMContentLoaded", function() {
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(homeHtml,
            function(response) {
                insertHtml("#main-content", response);
            }, false
        );
        dc.loadMenuCategories = function() {
            showLoading("#main-content");
            $ajaxUtils.sendGetRequest(allCategoryUrl, buildAndShowCategoriesHTML);
        };

        function buildAndShowCategoriesHTML(categories) {
            $ajaxUtils.sendGetRequest(
                categoryTitleHtml,
                function(categoriesTitleHtml) {
                    $ajaxUtils.sendGetRequest(
                        categotiesHtml,
                        function(categoryHtml) {
                            var categoriesViewHtml =
                                buildCategoriesViewHtml(categories, categoriesTitleHtml, categoryHtml);
                            insertHtml("#main-content", categoriesViewHtml);
                        },
                        false);
                },
                false);
        }

        function buildCategoriesViewHtml(categories, categoriesTitleHtml, categoryHtml) {
            var finalHtml = categoriesTitleHtml;
            finalHtml += "<section class='row'>";
            for (var i = 0; i < categories.length; i++) {
                var html = categoryHtml;
                var name = "" + categories[i].name;
                var short_name = categories[i].short_name;
                html = insertProperty(html, "name", name);
                html = insertProperty(html, "short_name", short_name);
                finalHtml += html;
            }

            finalHtml += "</section>";
            return finalHtml;
        }
    });

    window.$dc=dc;

}(window));
