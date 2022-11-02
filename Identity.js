require([
    "esri/IdentityManager"
], function (
    IdentityManager
) {
    if (window.self === window.top) {
        window.savedCred = {};
        IdentityManager.on("credential-create", (credential) => {
            window.savedCred = credential;
        })
    } else {
        var savedCred = window.top.savedCred;
        if (savedCred && savedCred.credential) {
            IdentityManager.registerToken(savedCred.credential);
        }
    }
});