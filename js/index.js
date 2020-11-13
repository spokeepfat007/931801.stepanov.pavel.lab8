function create() {
    document.getElementById('wracked').insertAdjacentHTML('beforeend', `<div>
        <input type="text">
        <input type="text">
        <button type="button" onclick="up(this)">&#8593</button>
        <button type="button" onclick="down(this)">&#8595</button>
        <button type="button"
                onclick="this.parentNode.remove();">&times
        </button>
    </div>`)
}

function up(e) {
    const el = e.parentNode;
    const cl = el.parentNode;
    const childs = cl.children;
    for (let int = 0; int < childs.length; int++) {
        if (childs[int] === el && int !== 0) {
            cl.insertBefore(el, childs[int - 1]);
            break;
        }
    }
}

function down(e) {
    const el = e.parentNode;
    const cl = el.parentNode;
    const childs = cl.children;
    for (let int = 0; int < childs.length; int++) {
        if (childs[int] === el && int !== (childs.length - 1)) {
            cl.insertBefore(childs[int + 1], el);
            break;
        }
    }
}

function save() {
    const pi = document.getElementById("output");
    const parent = document.querySelectorAll("#wracked> div> input");
    pi.style.display = "block";
    let p = "{";
    for (let i = 0; i < parent.length; i = i + 2) {
        const a = parent[i].value;
        const b = parent[i + 1].value;
        p += '"' + a + '":"' + b + '"';
        if (i !== parent.length - 2) {
            p += ',';
        }
    }
    p += "}";
    pi.innerHTML = p;
}
