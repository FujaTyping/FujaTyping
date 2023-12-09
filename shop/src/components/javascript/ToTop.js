window.onscroll = function () {
    Check_scroll();
};

function Check_scroll() {
    const Button = document.getElementById("TopButton");

    if (
        document.body.scrollTop > 700 ||
        document.documentElement.scrollTop > 700
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