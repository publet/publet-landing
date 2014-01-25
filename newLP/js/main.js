var PUBLET = PUBLET || {};

if (PUBLET.config === undefined) {
  PUBLET.config = {
    'sixpack_base_url': 'http://192.241.144.164:81'
  };
}

(function () {
  var sixpack_client_id = $.cookie('sixpack_client_id');
  if (sixpack_client_id === undefined) {
    sixpack_client_id = sixpack.generate_client_id();
    $.cookie('sixpack_client_id', sixpack_client_id, { expires: 3650 });
  }
  PUBLET.sixpack_session = new sixpack.Session(sixpack_client_id, PUBLET.config.sixpack_base_url);
})();

window.onload = function () {
	http://getpublet.tumblr.com/js


var xmlhttp;
var response = null;
var variables = "";
var page;
var useAmp = false;
function createRequest(url) {
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else // code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    page = url;
}

function addParam(name,value) {
    if(useAmp == true)
        variables += "&";
    variables += escape(name) + "=" + escape(value)
    useAmp = true;
}

function sendRequest(instructions,type) {
    //the instructions param takes the form of an eval statement
    if(type == null) {
        page += "?" + variables
        xmlhttp.open("GET", page, true);
            xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                response=xmlhttp.responseText;
                eval(instructions)
            }
        }
        xmlhttp.send();

    }
    else {
        xmlhttp.open("POST", page, true);
        //Send the proper header information along with the request
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.setRequestHeader("Content-length", variables.length);
        xmlhttp.setRequestHeader("Connection", "close");
            xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                response=xmlhttp.responseText;
                eval(instructions)
            }
        }
        xmlhttp.send(variables);
    }


}


}
