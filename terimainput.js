function terimainput() {
    var a = document.forms['Data']['Nama'].value;
    var b = document.forms['Data']['Email'].value;
    var c = document.forms['Data']['Nomor Telepon'].value;
    var d = document.forms['Data']['Kata Sandi'].value;

    var tabel = document.getElementById("tabelinput");
    var row = tabel.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = a;
    cell2.innerHTML = b;
    cell3.innerHTML = c;
    cell4.innerHTML = d;
}
