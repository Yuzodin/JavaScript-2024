function back() {
    var value = document.calc.txt.value;
    document.calc.txt.value = value.substr(0, value.length - 1);
}
