(function () {
    //Enter your slugs here
    var urlSlug = [ 
        "create",
        "completed",
        "myrequests" ];
    //Enter the default URL here.
    //ex.: url(r'^$', OpenRequestList.as_view())
    var homeSlug = "openrequests"

    var slugName = window.location.pathname.split('/')[1];
    var elementActive;
    urlSlug.some(function (slugList) {
        if (slugName == slugList) {
            elementActive = slugList;
            return true; }});
    elementActive = typeof elementActive !== "undefined" ? elementActive: homeSlug;
    var navElement = document.getElementById(elementActive);
    navElement.classList.add("active");
})();

