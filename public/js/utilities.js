function isAdmin(role) {
    return role === 'RootAdmin' || role === 'Admin';
}

function navigateToLogin() {
    window.location.href = '/login.html';
}

function clearFormValues(formId) {
    $(':input','#' + formId) .not(':button, :submit, :reset, :hidden')
                          .val('')
                          .prop('checked', false)
                          .prop('selected', false);
}

function isRedirectToLoginPage() {
    var isRedirect = false;
    var href = window.location.href;
    var page = href.substring(href.lastIndexOf('/')+1);

    if (page.indexOf('profile') > -1) {
        isRedirect = true;
    } else if (page.indexOf('checkout') > -1) {
        isRedirect = true;
    }

    return isRedirect;
}