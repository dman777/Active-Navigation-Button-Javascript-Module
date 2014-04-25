(function () {
    //##############Settings###############
    //Add your Slugs Here. 
    //Example: http://10.1.2.33:8000/threads/slugName1/?search=-latest_post_date
    var urlSlug = [
        "slugName1",
        "slugName2",
        "slugName3",
        "slugName4"
 ];
    //Default Home Tab
    HOME = "slugName1";
    //Set what position you want the slug to be extracted from
    //Position count is backwards from right(end) to left(start). 
    SLUG_POSITION = 2
    //##############End Of Settings###############

    var slugName = window.location.pathname.split('/');
    var slugName = slugName[slugName.length - SLUG_POSITION];
    var elementActive;
    urlSlug.some(function (slugList) {
        if (slugName == slugList) {
            console.log("yes");
            elementActive = slugList;
            return true; }});
    elementActive = typeof elementActive !== "undefined" ? elementActive: HOME;
    var navElement = document.getElementById(elementActive);
    navElement.classList.add("active");
})();

