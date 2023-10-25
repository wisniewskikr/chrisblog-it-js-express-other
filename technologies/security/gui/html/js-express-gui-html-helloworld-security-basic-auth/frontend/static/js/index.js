function logout() {
    alert('Here2')
    var p = window.location.protocol + '//'
    window.location = window.location.href.replace(p, p + 'logout:password@')
}