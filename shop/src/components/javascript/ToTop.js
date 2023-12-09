window.onscroll = function () {
    Check_scroll();
};

function Check_scroll() {
    const Button = document.getElementById("TopButton");

    if (
        document.body.scrollTop > 1000 ||
        document.documentElement.scrollTop > 1000
    ) {
        Button.style.display = "block";
    } else {
        Button.style.display = "none";
    }
}

function GoTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

export { Check_scroll, GoTop }