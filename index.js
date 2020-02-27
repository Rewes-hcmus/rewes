function signIn() {
    let url = window.location.origin + window.location.pathname.replace(window.location.pathname, "/private-users/sign-in.html");
    window.location.assign(url);
}