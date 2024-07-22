(function(doc) {
    let docEl = doc.documentElement;

    doc.addEventListener('DOMContentLoaded',recalc)

    function recalc() {
        let width = docEl.clientWidth 
        docEl.style.fontSize = 20 * (width / 320 ) + 'px'

    }
})(document)