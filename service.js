/*
    This service.js code will be loaded on almost every page of your website.
    Each page will have access to the skapi object.
*/

/*
    Below, is the initializing code for Skapi.
    Make sure you replace the first, and the second argument: "ap220wfRHl9Cw2QqeFEc", "f8e16604-69e4-451c-9d90-4410f801c006" to your own service ID and owner ID.
    You can retrieve the service ID and the owner ID from www.skapi.com.
    For more information, checkout the Getting Started: https://docs.skapi.com/introduction/getting-started.html
*/
const skapi = new Skapi("ap220wfRHl9Cw2QqeFEc", "f8e16604-69e4-451c-9d90-4410f801c006");

/*
    The following function disableForm() is for disabling the form while the user is submitting.
    It can be useful if you want to prevent the user from submitting the form multiple times.
    You will see this function being used in the form submission thoughout the project.
*/
function disableForm(form, disabled) {
    form.querySelectorAll('input').forEach(input => {
        input.disabled = disabled;
    });
    form.querySelectorAll('textarea').forEach(textarea => {
        textarea.disabled = disabled;
    });
    form.querySelectorAll('a').forEach(a => {
        return disabled ? a.setAttribute('disabled', '') : a.removeAttribute('disabled');
    });
}