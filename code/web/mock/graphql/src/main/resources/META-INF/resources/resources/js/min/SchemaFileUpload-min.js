function $id(e){return document.getElementById(e)}function output(e){var n=$id("messages");n.innerHTML=e+n.innerHTML}function parseFile(e){output("<p><strong>"+e.name+"</strong> ("+e.size+"bytes)</p>")}function fileSelectHandler(e){var n=$id("messages");n.innerHTML="";for(var i=e.target.files||e.dataTransfer.files,t=0,r;r=i[t];t++)parseFile(r)}function init(){var e=$id("files");e.addEventListener("change",fileSelectHandler,!1)}window.File&&window.FileList&&window.FileReader&&init();