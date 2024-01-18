const skapi = new Skapi("ap220wfRHl9Cw2QqeFEc", "f8e16604-69e4-451c-9d90-4410f801c006");

function disableForm(form, disabled) {
    form.querySelectorAll('input').forEach(input => {
        if (input.type !== 'radio' && input.type !== 'checkbox')
            input.disabled = disabled
    });

    form.querySelectorAll('a').forEach(a => {
        return disabled ? a.setAttribute('disabled', '') : a.removeAttribute('disabled');
    });
}

let checkProfile = (params = {}) => skapi.getProfile().then(profile => {
    if (params.kickRoute) {
        if (!profile && params.kickUser === 'unsigned') {
            window.location.href = params.kickRoute;
            throw 'unsigned';
        }
        else if (profile && params.kickUser === 'signed') {
            window.location.href = params.kickRoute;
            throw 'signed';
        }
    }
    return profile;
});