function myFunction() {
    document.getElementById('ppp').innerHTML = Date()
    window.location = "https://www.bing.com/search?pglt=171&q=" + (document.getElementById("searchTxt").value);
}
function admin() {
    document.querySelector('form').action = '/admin.html';
}