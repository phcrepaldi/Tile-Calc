function calc() {
    let lado1 = parseFloat(document.getElementById("lado1").value);
    let lado2 = parseFloat(document.getElementById("lado2").value);
    let pl1 = parseFloat(document.getElementById("pl1").value)/100;
    let pl2 = parseFloat(document.getElementById("pl2").value)/100;

    let a = area(lado1, lado2);
    let a2 = area(pl1, pl2);
    let p = perimetro(lado1, lado2);
    let qua = pavimento(a, a2);
    document.getElementById("area").value = a;
    document.getElementById("per").value = p;
    document.getElementById("qua").value = qua;

}
function area(l1, l2) {
    let ar = l1 * l2;
    return ar;
}
function perimetro(t1, t2) {
    let pr = (2 * t1) + (2 * t2);
    return pr;
}
function pavimento(areat, areaq) {
    let q = areat / areaq;
    q = Math.ceil(q);
    return q;
}
