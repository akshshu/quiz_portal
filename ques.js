var que = ["1. Which of the following is possible in a token passing bus network ?",
    "2: In networking terminology UTP means",
    "3: Simple network management protocol (SNMP) is implemented with a daughter board i",
    "4: The amount of uncertainty in a system of symbol is called",
    "5: Working of the WAN generally involves",
    "6: The amount of uncertainty in a system of symbol is called",
    "7:Modem is used in data trasmission. When was it involved and in which country ?",
    "8: Which of the following is possible in a token passing bus network ?",
    "9: In networking terminology UTP means",
    "10: Simple network management protocol (SNMP) is implemented with a daughter board in"];
var option = [["in-service expansion", "unlimited number of stations", "both (a) and (b)", "unlimited distance"],
["Unshielded Twisted pair", "Ubiquitious Teflon port", "Uniformly Terminating port", "Unshielded T-connector port"],
["the nodes", "the server", "the hubs", "a separate pc that manages the network"],
["Bandwidth", "Entropy", "Loss", "Quantom"],
["Telephone Lines", "Microwaves", "Satellites", "All of Those"],
["Bandwidth", "Entropy", "Loss", "Quantom"],
["1963,USA", "1965,Germany", "1950,USA", "1950 Japan"],
["in-service expansion", "unlimited number of stations", "both (a) and (b)", "unlimited distance"],
["Unshielded Twisted pair", "Ubiquitious Teflon port", "Uniformly Terminating port", "Unshielded T-connector port"],
["the nodes", "the server", "the hubs", "a separate pc that manages the network"]];
var ans = ["in-service expansion", "Unshielded Twisted pair", "the hubs", "Entropy", "All of Those", "Entropy", "1950,USA", "in-service expansion", "Unshielded Twisted pair", "the hubs"];
var tag = "<div class=\"col-md-12\"><h3>";
var opt_tag = '<input type="radio" name=';
var y = document.getElementById("main");
var i, j;
var count = 0;
var row_h = y.innerHTML;
for (i = 0; i < 10; i++) {
    row_h += "<div class=\"row\"></div>";
}
y.innerHTML = row_h;
var x = document.getElementsByClassName("row");
function sc(val) {
    var s = "";
    var l = "\""
    var j;
    for (j = 0; j < 4; j++) {
        s += opt_tag + '"question' + i + '" value="' + option[val][j] + '"><label>' + option[val][j] + '</label></br>';
    }
    return s;
}
for (i = 0; i < x.length; i++) {
    if (i == x.length - 1) {
        x[i].innerHTML = tag + que[i] + "</h3>" + sc(i) + '<div class="btn" id="button">Submit</div>';

    }
    else {

        x[i].innerHTML = tag + que[i] + "</h3>" + sc(i);
    }

}
document.getElementById('button').addEventListener('click', evaluate);
function evaluate() {
    for (i = 0; i < x.length; i++) {
        user_opt = (document.querySelector('input[name=question' + i + ']:checked') || {});
        if (user_opt.value == ans[i]) {
            count += 1;
        }
    }
    console.log(count);
    alert(count + " correct");
}
