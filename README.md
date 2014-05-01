##Active-Navigation-Button-Javascript-Module

######Version 2.0
*Now with url slug position setting

A tool for frameworks which re-use header files containing navigation links/buttons. This will allow navigation buttons to keep active status(highlighted). 

####The Issue:
Templating engines that are server side refresh on each tab clicked in navigation. Because of this, class="active" can not be applied to the current \<li> active element in the navigationale bar. 

####The Fix:
This module will take the slug of the url, find the \<li> element that matches it, and apply class="active" to it.

####The Result:
The last naviational button that was last clicked by the user, known as the active button, will stay on to show it's active state.


######Directions: 

Add a ID to the \<li> element with the slug name:

                 // www.example/completed
                 // <li id="completed" <li><a href="/">Completed</a></li>
                 
Edit the module and add the slug name to urlSlug array/list in the module:

                // var urlSlug = [
                //     "completed",
                //     "openrequests",
                //     "anotherslug" ];
                
Place default home page slug, known as url(r'^$'), in 'homeSlug' variable:

                // example: openrequests is the default home page
                // var homeSlug = "openrequests"
#####################################
###Place the module to load last, after the \<li> elements have populated the DOM. The footer.html is recommended.
######windowd.onload event listener could be used to allow file to be placed in header, 
######however this event could interfere with other JS code that uses the same event. 

*Compatiable with Twitter Bootstrap
