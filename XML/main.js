function getXML() {
    let id = document.getElementById(`id`).value;
    let name = document.getElementById(`name`).value;
    let type = document.getElementById(`type`).value;
    let check = document.getElementById("defaultCheck1").checked;
    let ret = ``;

    {
        ret += `<xml>\n`;
        if (id != ``)
            ret += `\t<id>${id}</id>\n`;
        if (name != ``) {
            if (name == `Car`) {
                ret += `\t<motor>Subaru</motor>\n`;
            }
            ret += `\t<name>${name}</name>\n`;
        }
        if (check) {
            ret += `\t<check>Checked</check>\n`;
        }
        ret += `\t<type>${type}</type>\n`;
        ret += `</xml>`;
    }
    return ret;
}

function escape_html(string) {
    if (typeof string !== 'string') {
        return string;
    }
    return string.replace(/[&'`"<>\t\n]/g, function (match) {
        return {
            '&': '&amp;',
            "'": '&#x27;',
            '`': '&#x60;',
            '"': '&quot;',
            '<': '&lt;',
            '>': '&gt;',
            '\t': '&nbsp&nbsp&nbsp&nbsp',
            '\n': `<br>`
        }[match]
    });
}

function submit() {
    let xml = getXML();
    document.getElementById("result").innerHTML = escape_html(xml);
}