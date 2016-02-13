var cm_textarea;
var mdown = false;
var lang_mdown = false;
var csp_mdown = false;
var twitter_mdown = false;
var og_mdown = false;
var lang_query = "";
var lang_code = "en";
var region_query = "";
var region_code = "";
var csp_string = "default-src 'self'; child-src 'self' *.youtube.com; font-src 'self' fonts.googleapis.com themes.googleusercontent.com fonts.gstatic.com; script-src 'self' *.googlesyndication.com *.google-analytics.com *.googleapis.com *.google.com *.ytimg.com; style-src 'self' 'unsafe-inline'";
var google_fonts_string = "";
var adobe_fonts_string = "";

var lbools = new Array(12);
var bools = new Array(12);
var custom_urls = new Array(12);
for (var i=0;i<bools.length;i++) { lbools[i] = false; bools[i] = new Array(35); for (var j=0;j<bools[i].length;j++) { bools[i][j] = false; } }
for (var i=0;i<custom_urls.length;i++) { custom_urls[i] = new Array(35); for (var j=0;j<custom_urls[i].length;j++) { custom_urls[i][j] = ""; } }

bools[1][2] = true; // child-src > self
bools[1][10] = true; // child-src > *.youtube.com
custom_urls[1][10] = "*.youtube.com"; // child-src > *.youtube.com
 
bools[3][2] = true; // default-src > self
 
bools[10][2] = true; // script-src > self
bools[10][10] = true; // script-src > *.googlesyndication.com
custom_urls[10][10] = "*.googlesyndication.com"; // script-src > *.googlesyndication.com
bools[10][11] = true; // script-src > *.google-analytics.com
custom_urls[10][11] = "*.google-analytics.com"; // script-src > *.google-analytics.com
bools[10][12] = true; // script-src > *.googleapis.com
custom_urls[10][12] = "*.googleapis.com"; // script-src > *.googleapis.com
bools[10][13] = true; // script-src > *.google.com
custom_urls[10][13] = "*.google.com"; // script-src > *.google.com
bools[10][14] = true; // script-src > *.ytimg.com
custom_urls[10][14] = "*.ytimg.com"; // script-src > *.ytimg.com
bools[10][15] = true; // script-src > use.edgefonts.net
custom_urls[10][15] = "use.edgefonts.net"; // script-src > use.edgefonts.net
 
bools[4][2] = true; // font-src > self
bools[4][10] = true; // font-src > *.googleapis.com
custom_urls[4][10] = "fonts.googleapis.com"; // font-src > fonts.googleapis.com
bools[4][11] = true; // font-src > themes.googleusercontent.com
custom_urls[4][11] = "themes.googleusercontent.com"; // font-src > themes.googleusercontent.com
bools[4][12] = true; // font-src > fonts.gstatic.com
custom_urls[4][12] = "fonts.gstatic.com"; // font-src > fonts.gstatic.com
 
bools[11][2] = true; // style-src > self
bools[11][3] = true; // style-src > 'unsafe-inline'

lbools[1] = true; // child-src
lbools[3] = true; // default-src
lbools[4] = true; // font-src
lbools[10] = true; // script-src
lbools[11] = true; // style-src

var csp_directives = [
"base-uri",
"child-src",
"connect-src",
"default-src",
"font-src",
"form-action",
/* "frame-ancestors", */ /* not valid in meta */
"img-src",
"media-src",
"object-src",
"plugin-types",
/* "report-uri", */ /* not valid in meta */
/* "sandbox", */ /* not valid in meta */
"script-src",
"style-src"
];

var list2_values = [
 "*",
 "'none'",
 "'self'",
 "'unsafe-inline'",
 "'unsafe-eval'",
 "https:",
 "data:",
 "mediastream:",
 "blob:",
 "file:"
];

var list2_types = [
 "application/asx",
/* "application/futuresplash", */
 "application/pdf",
/* "application/vnd.fdf", */
/* "application/xaml+xml", */
/* "application/x-drm", */
/* "application/x-drm-v2", */
 "application/x-google-chrome-pdf",
 "application/x-mplayer2",
/* "application/x-ms-xbap", */
/* "application/x-nacl", */
/* "application/x-pnacl", */
/* "application/x-ppapi-widevine-cdm", */
 "application/x-java-applet",
 "application/x-shockwave-flash",
 "application/x-silverlight",
 "application/x-silverlight-2",
/* "application/x-vnd.google.oneclickctrl.9", */
/* "application/x-vnd.google.update3webcontrol.3", */
/* "audio/x-ms-wax", */
 "audio/x-ms-wma",
/* "video/x-ms-asf", */
/* "video/x-ms-asf-plugin", */
/* "video/x-ms-wm", */
 "video/x-ms-wmv",
/* "video/x-ms-wvx" */
];

if (window.addEventListener) {
 window.addEventListener('load',window_onload);
}
else {
 window.attachEvent('onload',window_onload);
}

function window_onload() {
 document.getElementById('frmHtmlLang_title').style.cursor = "move";
 document.getElementById('frmHtmlLang').style.left = (((document.documentElement.clientWidth - parseInt(document.getElementById('frmHtmlLang').style.width)) / 2) - 20) + 'px';
 document.getElementById('frmHtmlLang').style.top = (((document.documentElement.clientHeight - parseInt(document.getElementById('frmHtmlLang').style.height)) / 2) - 20) + 'px';
 
 document.getElementById('frmCSP_title').style.cursor = "move";
 document.getElementById('frmCSP').style.left = (((document.documentElement.clientWidth - parseInt(document.getElementById('frmCSP').style.width)) / 2) - 20) + 'px';
 document.getElementById('frmCSP').style.top = (((document.documentElement.clientHeight - parseInt(document.getElementById('frmCSP').style.height)) / 2) - 20) + 'px';

 document.getElementById('frmTwitter_title').style.cursor = "move";
 document.getElementById('frmTwitter').style.left = (((document.documentElement.clientWidth - parseInt(document.getElementById('frmTwitter').style.width)) / 2) + 60) + 'px';
 document.getElementById('frmTwitter').style.top = (((document.documentElement.clientHeight - parseInt(document.getElementById('frmTwitter').style.height)) / 2) - 20) + 'px';

 document.getElementById('frmOg_title').style.cursor = "move";
 document.getElementById('frmOg').style.left = (((document.documentElement.clientWidth - parseInt(document.getElementById('frmOg').style.width)) / 2) + 60) + 'px';
 document.getElementById('frmOg').style.top = (((document.documentElement.clientHeight - parseInt(document.getElementById('frmOg').style.height)) / 2) - 20) + 'px';

 document.getElementById('txtTwitterTitle').value = document.getElementById('txtTitle').value;
 document.getElementById('txtOgTitle').value = document.getElementById('txtTitle').value;

 var d = new Date();
 document.getElementById('txtArticlePublishedTime').value = d.getFullYear() + "-" + ("0" + (d.getMonth()+1)).slice(-2) + "-" + ("0" + (d.getDate())).slice(-2) + "T" + ("0" + (d.getHours())).slice(-2) + ":" + ("0" + (d.getMinutes())).slice(-2) + ":" + ("0" + (d.getSeconds())).slice(-2) + "+00:00";
 document.getElementById('txtArticleModifiedTime').value = d.getFullYear() + "-" + ("0" + (d.getMonth()+1)).slice(-2) + "-" + ("0" + (d.getDate())).slice(-2) + "T" + ("0" + (d.getHours())).slice(-2) + ":" + ("0" + (d.getMinutes())).slice(-2) + ":" + ("0" + (d.getSeconds())).slice(-2) + "+00:00";

 if (window.addEventListener) {document.getElementById('tab_head').addEventListener('click',tab_click);}else{document.getElementById('tab_head').attachEvent('onclick',tab_click);}
 if (window.addEventListener) {document.getElementById('tab_body').addEventListener('click',tab_click);}else{document.getElementById('tab_body').attachEvent('onclick',tab_click);}
 if (window.addEventListener) {document.getElementById('tab_header').addEventListener('click',tab_click);}else{document.getElementById('tab_header').attachEvent('onclick',tab_click);}
 if (window.addEventListener) {document.getElementById('tab_main').addEventListener('click',tab_click);}else{document.getElementById('tab_main').attachEvent('onclick',tab_click);}
 if (window.addEventListener) {document.getElementById('tab_footer').addEventListener('click',tab_click);}else{document.getElementById('tab_footer').attachEvent('onclick',tab_click);}
 if (window.addEventListener) {document.getElementById('tab_gen').addEventListener('click',tab_click);}else{document.getElementById('tab_gen').attachEvent('onclick',tab_click);}

 if (window.addEventListener) {document.getElementById('frmHtmlLang_title').addEventListener('mousedown',lang_caption_mousedown);}else{document.getElementById('frmHtmlLang_title').attachEvent('onmousedown',lang_caption_mousedown);}
 if (window.addEventListener) {document.getElementById('frmHtmlLang_title').addEventListener('mouseup',lang_caption_mouseup);}else{document.getElementById('frmHtmlLang_title').attachEvent('onmouseup',lang_caption_mouseup);}
 if (window.addEventListener) {document.getElementById('frmHtmlLang_title').addEventListener('mousemove',lang_caption_mousemove);}else{document.getElementById('frmHtmlLang_title').attachEvent('onmousemove',lang_caption_mousemove);}

 if (window.addEventListener) {document.getElementById('frmCSP_title').addEventListener('mousedown',csp_caption_mousedown);}else{document.getElementById('frmCSP_title').attachEvent('onmousedown',csp_caption_mousedown);}
 if (window.addEventListener) {document.getElementById('frmCSP_title').addEventListener('mouseup',csp_caption_mouseup);}else{document.getElementById('frmCSP_title').attachEvent('onmouseup',csp_caption_mouseup);}
 if (window.addEventListener) {document.getElementById('frmCSP_title').addEventListener('mousemove',csp_caption_mousemove);}else{document.getElementById('frmCSP_title').attachEvent('onmousemove',csp_caption_mousemove);}

 if (window.addEventListener) {document.getElementById('frmTwitter_title').addEventListener('mousedown',twitter_caption_mousedown);}else{document.getElementById('frmTwitter_title').attachEvent('onmousedown',twitter_caption_mousedown);}
 if (window.addEventListener) {document.getElementById('frmTwitter_title').addEventListener('mouseup',twitter_caption_mouseup);}else{document.getElementById('frmTwitter_title').attachEvent('onmouseup',twitter_caption_mouseup);}
 if (window.addEventListener) {document.getElementById('frmTwitter_title').addEventListener('mousemove',twitter_caption_mousemove);}else{document.getElementById('frmTwitter_title').attachEvent('onmousemove',twitter_caption_mousemove);}

 if (window.addEventListener) {document.getElementById('frmOg_title').addEventListener('mousedown',og_caption_mousedown);}else{document.getElementById('frmOg_title').attachEvent('onmousedown',og_caption_mousedown);}
 if (window.addEventListener) {document.getElementById('frmOg_title').addEventListener('mouseup',og_caption_mouseup);}else{document.getElementById('frmOg_title').attachEvent('onmouseup',og_caption_mouseup);}
 if (window.addEventListener) {document.getElementById('frmOg_title').addEventListener('mousemove',og_caption_mousemove);}else{document.getElementById('frmOg_title').attachEvent('onmousemove',og_caption_mousemove);}

 if (window.addEventListener) {document.getElementById('lstLangs').addEventListener('dblclick',frmHtmlLang_btnOK_click);}else{document.getElementById('lstLangs').attachEvent('ondblclick',frmHtmlLang_btnOK_click);}
 if (window.addEventListener) {document.getElementById('frmHtmlLang_btnOK').addEventListener('click',frmHtmlLang_btnOK_click);}else{document.getElementById('frmHtmlLang_btnOK').attachEvent('onclick',frmHtmlLang_btnOK_click);}
 if (window.addEventListener) {document.getElementById('frmHtmlLang_btnCancel').addEventListener('click',frmHtmlLang_btnCancel_click);}else{document.getElementById('frmHtmlLang_btnCancel').attachEvent('onclick',frmHtmlLang_btnCancel_click);}

 if (window.addEventListener) {document.getElementById('frmCSP_btnOK').addEventListener('click',frmCSP_btnOK_click);}else{document.getElementById('frmCSP_btnOK').attachEvent('onclick',frmCSP_btnOK_click);}
 if (window.addEventListener) {document.getElementById('frmTwitter_btnOK').addEventListener('click',frmTwitter_btnOK_click);}else{document.getElementById('frmTwitter_btnOK').attachEvent('onclick',frmTwitter_btnOK_click);}
 if (window.addEventListener) {document.getElementById('frmOg_btnOK').addEventListener('click',frmOg_btnOK_click);}else{document.getElementById('frmOg_btnOK').attachEvent('onclick',frmOg_btnOK_click);}

 if (window.addEventListener) {document.getElementById('chkNoIndex').addEventListener('click',build_robots_string);}else{document.getElementById('chkNoIndex').attachEvent('onclick',build_robots_string);}
 if (window.addEventListener) {document.getElementById('chkNoFollow').addEventListener('click',build_robots_string);}else{document.getElementById('chkNoFollow').attachEvent('onclick',build_robots_string);}
 if (window.addEventListener) {document.getElementById('chkNoODP').addEventListener('click',build_robots_string);}else{document.getElementById('chkNoODP').attachEvent('onclick',build_robots_string);}
 if (window.addEventListener) {document.getElementById('chkNoydir').addEventListener('click',build_robots_string);}else{document.getElementById('chkNoydir').attachEvent('onclick',build_robots_string);}
 if (window.addEventListener) {document.getElementById('chkNoArchive').addEventListener('click',build_robots_string);}else{document.getElementById('chkNoArchive').attachEvent('onclick',build_robots_string);}
 if (window.addEventListener) {document.getElementById('chkNoSnippet').addEventListener('click',build_robots_string);}else{document.getElementById('chkNoSnippet').attachEvent('onclick',build_robots_string);}
 if (window.addEventListener) {document.getElementById('chkNoImageIndex').addEventListener('click',build_robots_string);}else{document.getElementById('chkNoImageIndex').attachEvent('onclick',build_robots_string);}

 if (window.addEventListener) {document.getElementById('chkWidth').addEventListener('click',build_viewport_string);}else{document.getElementById('chkWidth').attachEvent('onclick',build_viewport_string);}
 if (window.addEventListener) {document.getElementById('chkHeight').addEventListener('click',build_viewport_string);}else{document.getElementById('chkHeight').attachEvent('onclick',build_viewport_string);}
 if (window.addEventListener) {document.getElementById('chkInitialScale').addEventListener('click',build_viewport_string);}else{document.getElementById('chkInitialScale').attachEvent('onclick',build_viewport_string);}
 if (window.addEventListener) {document.getElementById('chkMinimumScale').addEventListener('click',build_viewport_string);}else{document.getElementById('chkMinimumScale').attachEvent('onclick',build_viewport_string);}
 if (window.addEventListener) {document.getElementById('chkMaximumScale').addEventListener('click',build_viewport_string);}else{document.getElementById('chkMaximumScale').attachEvent('onclick',build_viewport_string);}
 if (window.addEventListener) {document.getElementById('chkUserScalable').addEventListener('click',build_viewport_string);}else{document.getElementById('chkUserScalable').attachEvent('onclick',build_viewport_string);}

 if (window.addEventListener) {document.getElementById('lblJS3').addEventListener('click',lblJS3_Click);}else{document.getElementById('lblJS3').attachEvent('onclick',lblJS3_Click);}
 if (window.addEventListener) {document.getElementById('lblTwitterSummary').addEventListener('click',lblTwitterSummary_Click);}else{document.getElementById('lblTwitterSummary').attachEvent('onclick',lblTwitterSummary_Click);}
 if (window.addEventListener) {document.getElementById('lblOgType').addEventListener('click',lblOgType_Click);}else{document.getElementById('lblOgType').attachEvent('onclick',lblOgType_Click);}

 if (window.addEventListener) {document.getElementById('chkCrossSite').addEventListener('click',chkCrossSite_click);}else{document.getElementById('chkCrossSite').attachEvent('onclick',chkCrossSite_click);}
 if (window.addEventListener) {document.getElementById('chkTwitterCard').addEventListener('click',chkTwitterCard_click);}else{document.getElementById('chkTwitterCard').attachEvent('onclick',chkTwitterCard_click);}
 if (window.addEventListener) {document.getElementById('chkOpenGraph').addEventListener('click',chkOpenGraph_click);}else{document.getElementById('chkOpenGraph').attachEvent('onclick',chkOpenGraph_click);}
 if (window.addEventListener) {document.getElementById('chkGoogleFonts').addEventListener('click',chkGoogleFonts_click);}else{document.getElementById('chkGoogleFonts').attachEvent('onclick',chkGoogleFonts_click);}
 if (window.addEventListener) {document.getElementById('chkAdobeFonts').addEventListener('click',chkAdobeFonts_click);}else{document.getElementById('chkAdobeFonts').attachEvent('onclick',chkAdobeFonts_click);}
 if (window.addEventListener) {document.getElementById('chkjqueryUI').addEventListener('click',chkjqueryUI_click);}else{document.getElementById('chkjqueryUI').attachEvent('onclick',chkjqueryUI_click);}
 if (window.addEventListener) {document.getElementById('chkjqueryMobile').addEventListener('click',chkjqueryMobile_click);}else{document.getElementById('chkjqueryMobile').attachEvent('onclick',chkjqueryMobile_click);}
 if (window.addEventListener) {document.getElementById('chkAngularMaterial').addEventListener('click',chkAngularMaterial_click);}else{document.getElementById('chkAngularMaterial').attachEvent('onclick',chkAngularMaterial_click);}
 if (window.addEventListener) {document.getElementById('chkHTMLKickStart').addEventListener('click',chkHTMLKickStart_click);}else{document.getElementById('chkHTMLKickStart').attachEvent('onclick',chkHTMLKickStart_click);}
 if (window.addEventListener) {document.getElementById('chkBootstrap').addEventListener('click',chkBootstrap_click);}else{document.getElementById('chkBootstrap').attachEvent('onclick',chkBootstrap_click);}

 if (window.addEventListener) {document.getElementById('frmCSP_List1').addEventListener('change',frmCSP_List1_click);}else{document.getElementById('frmCSP_List1').attachEvent('onchange',frmCSP_List1_click);}
 if (window.addEventListener) {document.getElementById('frmCSP_List1').addEventListener('click',frmCSP_List1_click);}else{document.getElementById('frmCSP_List1').attachEvent('onclick',frmCSP_List1_click);}
 if (window.addEventListener) {document.getElementById('frmCSP_List1').addEventListener('dblclick',frmCSP_List1_dblclick);}else{document.getElementById('frmCSP_List1').attachEvent('ondblclick',frmCSP_List1_dblclick);}
 if (window.addEventListener) {document.getElementById('frmCSP_List1').addEventListener('keyup',frmCSP_List1_dblclick);}else{document.getElementById('frmCSP_List1').attachEvent('onkeyup',frmCSP_List1_dblclick);}

 if (window.addEventListener) {document.getElementById('frmCSP_List2').addEventListener('dblclick',frmCSP_List2_dblclick);}else{document.getElementById('frmCSP_List2').attachEvent('ondblclick',frmCSP_List2_dblclick);}
 if (window.addEventListener) {document.getElementById('frmCSP_List2').addEventListener('keyup',frmCSP_List2_dblclick);}else{document.getElementById('frmCSP_List2').attachEvent('onkeyup',frmCSP_List2_dblclick);}

 if (window.addEventListener) {document.getElementById('txtTitle').addEventListener('blur',txtTitle_onblur);}else{document.getElementById('txtTitle').attachEvent('onblur',txtTitle_onblur);}
 if (window.addEventListener) {document.getElementById('txtMetaDescription').addEventListener('blur',txtMetaDescription_onblur);}else{document.getElementById('txtMetaDescription').attachEvent('onblur',txtMetaDescription_onblur);}
 if (window.addEventListener) {document.getElementById('txtCano').addEventListener('blur',txtCano_onblur);}else{document.getElementById('txtCano').attachEvent('onblur',txtCano_onblur);}
 if (window.addEventListener) {document.getElementById('txtFavIcon').addEventListener('blur',txtFavIcon_onblur);}else{document.getElementById('txtFavIcon').attachEvent('onblur',txtFavIcon_onblur);}
 if (window.addEventListener) {document.getElementById('txtTwitterImage').addEventListener('blur',txtTwitterImage_onblur);}else{document.getElementById('txtTwitterImage').attachEvent('onblur',txtTwitterImage_onblur);}

/*
 document.getElementById('bbar').style.cursor = "-moz-grab";
 document.getElementById('bbar').style.cursor = "-webkit-grab";
 document.getElementById('bbar').style.cursor = "grab";

 if (window.addEventListener) {document.getElementById('bbar').addEventListener('mousedown',bbar_mousedown);}else{document.getElementById('bbar').attachEvent('onmousedown',bbar_mousedown);}
 if (window.addEventListener) {document.getElementById('bbar').addEventListener('mouseup',bbar_mouseup);}else{document.getElementById('bbar').attachEvent('onmouseup',bbar_mouseup);}
 if (window.addEventListener) {document.getElementById('bbar').addEventListener('mousemove',bbar_mousemove);}else{document.getElementById('bbar').attachEvent('onmousemove',bbar_mousemove);}
*/

 if (window.addEventListener) {window.addEventListener('mousemove',window_mousemove);}else{window.attachEvent('onmousemove',window_mousemove);}
 if (window.addEventListener) {window.addEventListener('mouseup',window_mouseup);}else{window.attachEvent('onmouseup',window_mouseup);}
 //if (window.addEventListener) {window.addEventListener('keypress',window_keypress);}else{window.attachEvent('onkeypress',window_keypress);}
 
 if (window.addEventListener) {document.getElementById('lblLookuplang').addEventListener('click',lblLookuplang_Click);}else{document.getElementById('lblLookuplang').attachEvent('onclick',lblLookuplang_Click);}

 //document.getElementById('tmp').innerHTML = parseInt(document.getElementById('bbar').style.height)/2;

 for (var i=0;i<document.forms.length;i++) {
  for (var j=0;j<document.forms[i].elements.length;j++) {
   if ((document.forms[i].elements[j].type == "text") || (document.forms[i].elements[j].type == "textarea")) {
    if (window.addEventListener) {document.forms[i].elements[j].addEventListener('focus',textbox_gotfocus);}else{document.forms[i].elements[j].attachEvent('onfocus',textbox_gotfocus);}
   }
  }
 }

 // add CSP directives
 for (var i=0;i<csp_directives.length;i++) {
  document.getElementById('frmCSP_List1').appendChild(new Option(csp_directives[i], csp_directives[i]));
  if (i == 3) {
   //document.getElementById('frmCSP_List1').options[i].selected = "selected";
  }
 }

 // add Allowed Values
 for (var i=0;i<list2_values.length;i++) { document.getElementById('frmCSP_List2').appendChild(new Option(list2_values[i], list2_values[i])); }
 for (var i=1;i<=10;i++) { document.getElementById('frmCSP_List2').appendChild(new Option("Custom URI " + i, "Custom URI " + i)); }

 // add chkimg event handlers
 for (var i=0;i<document.images.length;i++) {
  if (document.images[i].className == "chkimg") {
   if (window.addEventListener) {document.images[i].addEventListener('mousedown',chkimg_mousedown);}else{document.images[i].attachEvent('onmousedown',chkimg_mousedown);}
   if (window.addEventListener) {document.images[i].addEventListener('mouseup',chkimg_mouseup);}else{document.images[i].attachEvent('onmouseup',chkimg_mouseup);}
  }
 }

 // make codemirror textbox
 cm_textarea = CodeMirror.fromTextArea(document.getElementById('txtResults'), {mode:"htmlmixed",lineWrapping:false,lineNumbers:true});
 cm_textarea.on("dblclick", function() { cm_textarea.execCommand("selectAll"); });

}

function txtTitle_onblur(e) {
 document.getElementById('txtTwitterTitle').value = document.getElementById('txtTitle').value;
 document.getElementById('txtOgTitle').value = document.getElementById('txtTitle').value;
}

function txtMetaDescription_onblur(e) {
 document.getElementById('txtTwitterDesc').value = document.getElementById('txtMetaDescription').value;
 document.getElementById('txtOgDesc').value = document.getElementById('txtMetaDescription').value;
}

function txtCano_onblur(e) {
 document.getElementById('txtOgURL').value = document.getElementById('txtCano').value;
}

function txtTwitterImage_onblur(e) {
 document.getElementById('txtOgImage').value = document.getElementById('txtTwitterImage').value;
}

function txtFavIcon_onblur(e) {
 if (document.getElementById('txtFavIcon').value.length >= 4) {
  if (document.getElementById('txtFavIcon').value.substr(-4) == ".svg") { document.getElementById('txtFavIcon3').value = "image/svg+xml"; }
  else if (document.getElementById('txtFavIcon').value.substr(-4) == ".png") { document.getElementById('txtFavIcon3').value = "image/png"; }
  else if (document.getElementById('txtFavIcon').value.substr(-4) == ".jpg") { document.getElementById('txtFavIcon3').value = "image/jpeg"; }
  else if (document.getElementById('txtFavIcon').value.substr(-4) == ".gif") { document.getElementById('txtFavIcon3').value = "image/gif"; }
  else if (document.getElementById('txtFavIcon').value.substr(-4) == ".tif") { document.getElementById('txtFavIcon3').value = "image/tiff"; }
  else if (document.getElementById('txtFavIcon').value.substr(-4) == ".bmp") { document.getElementById('txtFavIcon3').value = "image/bmp"; }
  else if (document.getElementById('txtFavIcon').value.substr(-4) == "icns") { document.getElementById('txtFavIcon3').value = "image/icns"; }
  else { document.getElementById('txtFavIcon3').value = "image/x-icon"; }
 }
}

function tab_click(e) {
 document.getElementById('tab_head').className = 'bbar_tab';
 document.getElementById('tab_body').className = 'bbar_tab';
 document.getElementById('tab_header').className = 'bbar_tab';
 document.getElementById('tab_main').className = 'bbar_tab';
 document.getElementById('tab_footer').className = 'bbar_tab';
 document.getElementById('tab_gen').className = 'bbar_tab';
 this.className = 'bbar_tab_sel';

 document.getElementById('tab_head_icon').style.color = '#C1C1C1';
 document.getElementById('tab_body_icon').style.color = '#C1C1C1';
 document.getElementById('tab_header_icon').style.color = '#C1C1C1';
 document.getElementById('tab_main_icon').style.color = '#C1C1C1';
 document.getElementById('tab_footer_icon').style.color = '#C1C1C1';
 document.getElementById('tab_gen_icon').style.color = '#C1C1C1';
 document.getElementById(this.id + "_icon").style.color = "#FBFBFB";

 document.getElementById('tab_head_form').style.display = 'none';
 document.getElementById('tab_body_form').style.display = 'none';
 document.getElementById('tab_header_form').style.display = 'none';
 document.getElementById('tab_main_form').style.display = 'none';
 document.getElementById('tab_footer_form').style.display = 'none';
 document.getElementById('tab_gen_form').style.display = 'none';
 $("#" + this.id + "_form").fadeIn();

 if (this.id == "tab_gen") { generate_html(); }
}

function textbox_gotfocus(e) { this.select(); }

function frmHtmlLang_btnOK_click(e) {
 if (document.getElementById('frmHtmlLang_title').textContent == "Language Selection") {
  if (document.getElementById('frmHtmlLang').style.display == 'block') {
   lang_code = document.getElementById('lstLangs').options[document.getElementById('lstLangs').selectedIndex].value;
   document.getElementById('frmHtmlLang').style.display = 'none';
  }  
  region_query = prompt("Enter a region:", "Any");
  if (region_query != null) {
   region_query = region_query.toLowerCase();
   region_query = region_query.trim();
   region_query = region_query.replace(/-/g, "");
   region_query = region_query.replace(/'/g, "");
   document.getElementById('frmHtmlLang_title').textContent = "Region Selection";
   document.getElementById('lblCaption').textContent = "Exact match not found. Choose the closest match below...";
   // search for exact match
   for (var i=0;i<html_regions.length;i++) {
     if (html_regions[i][0].toLowerCase() == region_query) { region_code = html_regions[i][1]; break; }
   }
   if (region_query == "us") { region_code = "-US"; }
   else if (region_query == "u.s.") { region_code = "-US"; }
   else if (region_query == "uk") { region_code = "-GB"; }
   else if (region_query == "u.k.") { region_code = "-GB"; }
   // search for partial match
   if ((region_query != "") && (region_query != "any") && (region_query != "all") && (region_code == "")) {
    while (document.getElementById('lstLangs').options.length > 0) { document.getElementById('lstLangs').remove(0); }
    document.getElementById('lstLangs').appendChild(new Option("Any", ""));
    document.getElementById('frmHtmlLang').style.display = 'block';
    if (region_query.length > 0) {
     for (var i=1;i<html_regions.length;i++) {
      if (html_regions[i][0].toLowerCase().substr(0,region_query.length) == region_query) {
       document.getElementById('lstLangs').appendChild(new Option(html_regions[i][0], html_regions[i][1]));
      }
     }
    }
    if (document.getElementById('lstLangs').length == 1) {
     for (var i=1;i<html_regions.length;i++) {
      document.getElementById('lstLangs').appendChild(new Option(html_regions[i][0], html_regions[i][1]));
     }     
    }
    document.getElementById('lstLangs').selectedIndex = 0;
    document.getElementById('lstLangs').focus();
   }
  }
 }
 else if (document.getElementById('frmHtmlLang_title').textContent == "Region Selection") {
  region_code = document.getElementById('lstLangs').options[document.getElementById('lstLangs').selectedIndex].value;
  document.getElementById('frmHtmlLang').style.display = 'none';
 }
 if (lang_code.length > 0) { document.getElementById('txtLang').value = lang_code + region_code; }
}

function frmHtmlLang_btnCancel_click(e) { document.getElementById('frmHtmlLang').style.display = 'none'; }

function lang_caption_mousedown(e) { lang_mdown = true; }
function lang_caption_mouseup(e) { lang_mdown = false; }
function lang_caption_mousemove(e) { }

function csp_caption_mousedown(e) { csp_mdown = true; }
function csp_caption_mouseup(e) { csp_mdown = false; }
function csp_caption_mousemove(e) { }

function twitter_caption_mousedown(e) { twitter_mdown = true; }
function twitter_caption_mouseup(e) { twitter_mdown = false; }
function twitter_caption_mousemove(e) { }

function og_caption_mousedown(e) { og_mdown = true; }
function og_caption_mouseup(e) { og_mdown = false; }
function og_caption_mousemove(e) { }

function btnexit_click(e) {
 //alert("The nav bar will now be hidden. You can press CTRL+Z to show it again.");
 //document.getElementById('bbar').style.display = 'none';
}

function bbar_mousedown(e) {
 mdown = true; document.getElementById('bbar').style.cursor = "-moz-grabbing"; document.getElementById('bbar').style.cursor = "-webkit-grabbing"; document.getElementById('bbar').style.cursor = "grabbing";
}

function bbar_mouseup(e) {
 mdown = false; document.getElementById('bbar').style.cursor = "-moz-grab"; document.getElementById('bbar').style.cursor = "-webkit-grab"; document.getElementById('bbar').style.cursor = "grab";
}

function bbar_mousemove(e) {
 if (mdown) { document.getElementById('bbar').style.cursor = "-moz-grabbing"; document.getElementById('bbar').style.cursor = "-webkit-grabbing"; document.getElementById('bbar').style.cursor = "grabbing"; }
 else { document.getElementById('bbar').style.cursor = "-moz-grab"; document.getElementById('bbar').style.cursor = "-webkit-grab"; document.getElementById('bbar').style.cursor = "grab"; } 
}

function window_keypress(e) {
 if ((e.ctrlKey) && (e.charCode == 26)) { // CTRL + Z
  if (document.getElementById('bbar').style.display == "block") { document.getElementById('bbar').style.display = 'none'; }
  else if (document.getElementById('bbar').style.display == "none") { document.getElementById('bbar').style.display = 'block'; }
 }
}

function window_mouseup(e) {
 mdown = false;
 lang_mdown = false;
 csp_mdown = false;
 twitter_mdown = false;
 og_mdown = false;
}

function window_mousemove(e) {
 if (mdown) {
  if (e.clientX < parseInt(document.getElementById('bbar').style.width)) { 
   document.getElementById('bbar').style.left = '0px';
  }
  else if ((e.clientX + parseInt(document.getElementById('bbar').style.width)) > document.documentElement.clientWidth) {
   document.getElementById('bbar').style.left = (document.documentElement.clientWidth - parseInt(document.getElementById('bbar').style.width)) + 'px';
  }
  else {
   document.getElementById('bbar').style.left = e.clientX - (parseInt(document.getElementById('bbar').style.width) / 2) + 'px';
  }
 }
 if (lang_mdown) {
  document.getElementById('frmHtmlLang').style.top = e.clientY - 23 + 'px';
  document.getElementById('frmHtmlLang').style.left = e.clientX - 190 + 'px';
 }
 if (csp_mdown) {
  document.getElementById('frmCSP').style.top = e.clientY - 23 + 'px';
  document.getElementById('frmCSP').style.left = e.clientX - 227 + 'px';
 }
 if (twitter_mdown) {
  document.getElementById('frmTwitter').style.top = e.clientY - 23 + 'px';
  document.getElementById('frmTwitter').style.left = e.clientX - 227 + 'px';
 }
 if (og_mdown) {
  document.getElementById('frmOg').style.top = e.clientY - 23 + 'px';
  document.getElementById('frmOg').style.left = e.clientX - 300 + 'px';
 }
}

function lblLookuplang_Click(e) {
 lang_code = "";
 region_code = "";
 lang_query = prompt("Enter a language:", "English");
 if (lang_query != null) {
  lang_query = lang_query.toLowerCase();
  lang_query = lang_query.replace(/-/g, "");
  lang_query = lang_query.replace(/'/g, ""); 
  document.getElementById('frmHtmlLang_title').textContent = "Language Selection";
  document.getElementById('lblCaption').textContent = "Exact match not found. Choose the closest match below...";
  if (lang_query == "cantonese") { lang_code = "yue"; frmHtmlLang_btnOK_click(); }
  // search for exact match
  for (var i=0;i<html_langs.length;i++) {
    if (html_langs[i][0].toLowerCase() == lang_query) {
     lang_code = html_langs[i][1];
     frmHtmlLang_btnOK_click();
     break;
    }
  }
  // search for partial match
  if (lang_code == "") {
   while (document.getElementById('lstLangs').options.length > 0) { document.getElementById('lstLangs').remove(0); }
   document.getElementById('frmHtmlLang').style.display = 'block';
   if (lang_query.length > 0) {
    for (var i=0;i<html_langs.length;i++) {
     if (html_langs[i][0].toLowerCase().substr(0,lang_query.length) == lang_query) {
      document.getElementById('lstLangs').appendChild(new Option(html_langs[i][0], html_langs[i][1]));
     }
    }
   }
   if (document.getElementById('lstLangs').length == 0) {
    document.getElementById('lstLangs').appendChild(new Option("Arabic", "ar"));
    document.getElementById('lstLangs').appendChild(new Option("Bengali", "bn"));
    document.getElementById('lstLangs').appendChild(new Option("Burmese", "my"));
    document.getElementById('lstLangs').appendChild(new Option("Chinese", "zh"));
    document.getElementById('lstLangs').appendChild(new Option("English", "en"));
    document.getElementById('lstLangs').appendChild(new Option("French", "fr"));
    document.getElementById('lstLangs').appendChild(new Option("German", "de"));
    document.getElementById('lstLangs').appendChild(new Option("Gujarati", "gu"));
    document.getElementById('lstLangs').appendChild(new Option("Hebrew", "he"));
    document.getElementById('lstLangs').appendChild(new Option("Hindi", "hi"));
    document.getElementById('lstLangs').appendChild(new Option("Italian", "it"));
    document.getElementById('lstLangs').appendChild(new Option("Japanese", "ja"));
    document.getElementById('lstLangs').appendChild(new Option("Javanese", "jv"));
    document.getElementById('lstLangs').appendChild(new Option("Kannada", "kn"));
    document.getElementById('lstLangs').appendChild(new Option("Korean", "ko"));
    document.getElementById('lstLangs').appendChild(new Option("Latin", "la"));
    document.getElementById('lstLangs').appendChild(new Option("Malayalam", "ml"));
    document.getElementById('lstLangs').appendChild(new Option("Marathi", "mr"));
    document.getElementById('lstLangs').appendChild(new Option("Oriya", "ory"));
    document.getElementById('lstLangs').appendChild(new Option("Panjabi", "pa"));
    document.getElementById('lstLangs').appendChild(new Option("Persian", "fa"));
    document.getElementById('lstLangs').appendChild(new Option("Polish", "pl"));
    document.getElementById('lstLangs').appendChild(new Option("Portuguese", "pt"));
    document.getElementById('lstLangs').appendChild(new Option("Russian", "ru"));
    document.getElementById('lstLangs').appendChild(new Option("Spanish", "es"));
    document.getElementById('lstLangs').appendChild(new Option("Tamil", "ta"));
    document.getElementById('lstLangs').appendChild(new Option("Telugu", "te"));
    document.getElementById('lstLangs').appendChild(new Option("Thai", "th"));
    document.getElementById('lstLangs').appendChild(new Option("Turkish", "tr"));
    document.getElementById('lstLangs').appendChild(new Option("Ukrainian", "uk"));
    document.getElementById('lstLangs').appendChild(new Option("Urdu", "ur"));
    document.getElementById('lstLangs').appendChild(new Option("Vietnamese", "vi"));
   }
   document.getElementById('lstLangs').selectedIndex = 0;
   document.getElementById('lstLangs').focus();
  }
 }
}

function build_robots_string(e) {
 var s = "";
 s = (document.getElementById('chkNoIndex').checked) ? "noindex" : "index";
 s = s + ((document.getElementById('chkNoFollow').checked) ? ",nofollow" : ",follow");
 s = s + ((document.getElementById('chkNoODP').checked) ? ",noodp" : "");
 s = s + ((document.getElementById('chkNoydir').checked) ? ",noydir" : "");
 s = s + ((document.getElementById('chkNoArchive').checked) ? ",noarchive" : "");
 s = s + ((document.getElementById('chkNoSnippet').checked) ? ",nosnippet" : "");
 s = s + ((document.getElementById('chkNoImageIndex').checked) ? ",noimageindex" : "");
 document.getElementById('txtMetaRobots').value = s;
}

function build_viewport_string(e) {
 var s = "";
 s = (document.getElementById('chkWidth').checked) ? ",width=device-width" : "";
 s = s + ((document.getElementById('chkHeight').checked) ? ",height=device-height" : "");
 s = s + ((document.getElementById('chkInitialScale').checked) ? ",initial-scale=1.0" : "");
 s = s + ((document.getElementById('chkMinimumScale').checked) ? ",minimum-scale=1.0" : "");
 s = s + ((document.getElementById('chkMaximumScale').checked) ? ",maximum-scale=1.0" : "");
 s = s + ((document.getElementById('chkUserScalable').checked) ? ",user-scalable=no" : "");
 if (s.length > 0) {
  if (s.substr(0,1) == ",") {
   s = s.substr(1);
  }
 }
 document.getElementById('txtMetaViewport').value = s;
}

function lblJS3_Click(e) {
 if (document.getElementById('lblJS3').textContent == "async") {
  document.getElementById('lblJS3').textContent = "defer";
 }
 else if (document.getElementById('lblJS3').textContent == "defer") {
  document.getElementById('lblJS3').innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
 }
 else if (document.getElementById('lblJS3').textContent.trim() == "") {
  document.getElementById('lblJS3').textContent = "async";
 }
}

function lblTwitterSummary_Click(e) {
 if (document.getElementById('lblTwitterSummary').textContent == "summary") {
  document.getElementById('lblTwitterSummary').textContent = "summary_large_image";
 }
 else if (document.getElementById('lblTwitterSummary').textContent == "summary_large_image") {
  document.getElementById('lblTwitterSummary').textContent = "summary";
 }
}

function lblOgType_Click(e) {
 if (document.getElementById('lblOgType').textContent == "article") {
  document.getElementById('lblOgType').textContent = "website";
 }
 else if (document.getElementById('lblOgType').textContent == "website") {
  document.getElementById('lblOgType').textContent = "article";
 }
 toggle_og_article_fields();
}

function frmCSP_btnOK_click(e) {
 csp_string = "";
 for (var i=0;i<bools.length;i++) {
  if (lbools[i] == true) {
   csp_string = csp_string + "; " + csp_directives[i] + " ";
   for (var j=0;j<bools[i].length;j++) {
    if (bools[i][j] == true) {
     if (i == 9) { // plugin-types
      if (j >= list2_types.length) {
       csp_string = csp_string + ((csp_string.substr(-1) != " ") ? " " : "") + custom_urls[i][j];
      }
      else if (j < list2_types.length) {
       csp_string = csp_string + ((csp_string.substr(-1) != " ") ? " " : "") + list2_types[j];
      }
     }
     else if (i <= 19) { // all other directives
      if (j >= list2_values.length) {
       csp_string = csp_string + ((csp_string.substr(-1) != " ") ? " " : "") + custom_urls[i][j];
      }
      else if (j < list2_values.length) {
       csp_string = csp_string + ((csp_string.substr(-1) != " ") ? " " : "") + list2_values[j];
      }
     }
    }
   }
  }
 }
 if (csp_string.substr(0,2) == "; ") { csp_string = csp_string.substr(2); }
 document.getElementById('frmCSP').style.display = 'none';
}

function frmTwitter_btnOK_click(e) { document.getElementById('frmTwitter').style.display = 'none'; }
function frmOg_btnOK_click(e) { document.getElementById('frmOg').style.display = 'none'; }

function chkTwitterCard_click(e) {
 if (document.getElementById('chkTwitterCard').checked == true) {
  document.getElementById('frmTwitter').style.display = 'block';
  document.getElementById('txtTwitterSite').focus();
 }
 else {
  document.getElementById('frmTwitter').style.display = 'none';
 }
}

function chkOpenGraph_click(e) {
 if (document.getElementById('chkOpenGraph').checked == true) {
  document.getElementById('frmOg').style.display = 'block';
  document.getElementById('txtOgSiteName').focus();
 }
 else {
  document.getElementById('frmOg').style.display = 'none';
 }
}

function chkGoogleFonts_click(e) {
 if (document.getElementById('chkGoogleFonts').checked == true) {
  var a = prompt("Enter any Google Fonts to include:\n(or leave blank to open the Google Fonts website)", ((google_fonts_string!="")?google_fonts_string:"Open Sans"));
  if (a === "") { window.open("https://www.google.com/fonts", "_blank"); }
  else if (a.length > 0) { 
   a = a.replace(/\u0020\u002C\u0020/g, ","); // ,
   a = a.replace(/\u002C\u0020/g, ","); // ,
   a = a.replace(/\u0020\u003B\u0020/g, ","); // ;
   a = a.replace(/\u003B\u0020/g, ","); // ;
   a = a.replace(/\u0020\u007C\u0020/g, ","); // |
   a = a.replace(/\u007C\u0020/g, ","); // |
   a = a.replace(/\u007C/g, ","); // |
   a = a.replace(/\u0020/g, "+");
   a = a.toLowerCase();
   a = a.replace(/\u002Ba/g,"+A");
   a = a.replace(/\u002Bb/g,"+B");
   a = a.replace(/\u002Bc/g,"+C");
   a = a.replace(/\u002Bd/g,"+D");
   a = a.replace(/\u002Be/g,"+E");
   a = a.replace(/\u002Bf/g,"+F");
   a = a.replace(/\u002Bg/g,"+G");
   a = a.replace(/\u002Bh/g,"+H");
   a = a.replace(/\u002Bi/g,"+I");
   a = a.replace(/\u002Bj/g,"+J");
   a = a.replace(/\u002Bk/g,"+K");
   a = a.replace(/\u002Bl/g,"+L");
   a = a.replace(/\u002Bm/g,"+M");
   a = a.replace(/\u002Bn/g,"+N");
   a = a.replace(/\u002Bo/g,"+O");
   a = a.replace(/\u002Bp/g,"+P");
   a = a.replace(/\u002Bq/g,"+Q");
   a = a.replace(/\u002Br/g,"+R");
   a = a.replace(/\u002Bs/g,"+S");
   a = a.replace(/\u002Bt/g,"+T");
   a = a.replace(/\u002Bu/g,"+U");
   a = a.replace(/\u002Bv/g,"+V");
   a = a.replace(/\u002Bw/g,"+W");
   a = a.replace(/\u002Bx/g,"+X");
   a = a.replace(/\u002By/g,"+Y");
   a = a.replace(/\u002Bz/g,"+Z");
   google_fonts_string = "";
   var a2 = a.split(",");
   for (var i=0;i<a2.length;i++) {
    if (a2[i].length > 0) {
     a2[i] = a2[i].substr(0,1).toUpperCase() + a2[i].substr(1);
     google_fonts_string = google_fonts_string + a2[i] + "|";
    }    
   }
   while ((google_fonts_string.length > 0) && (google_fonts_string.substr(-1) == "|")) { google_fonts_string = google_fonts_string.substr(0,google_fonts_string.length-1); }
  }
 }
}

function chkAdobeFonts_click(e) {
 if (document.getElementById('chkAdobeFonts').checked == true) {
  var a = prompt("Enter any Adobe Edge Web Fonts to include:\n(or leave blank to open the Adobe Edge Web Fonts website)", ((adobe_fonts_string!="")?adobe_fonts_string:"Source Sans Pro"));
  if (a === "") { window.open("https://edgewebfonts.adobe.com/", "_blank"); }
  else if (a.length > 0) { 
   a = a.replace(/\u0020\u002C\u0020/g, ","); // ,
   a = a.replace(/\u002C\u0020/g, ","); // ,
   a = a.replace(/\u0020\u003B\u0020/g, ","); // ;
   a = a.replace(/\u003B\u0020/g, ","); // ;
   a = a.replace(/\u0020\u007C\u0020/g, ","); // |
   a = a.replace(/\u007C\u0020/g, ","); // |
   a = a.replace(/\u007C/g, ","); // |
   a = a.replace(/\u0020/g, "-");
   a = a.toLowerCase();
   adobe_fonts_string = "";
   var a2 = a.split(",");
   for (var i=0;i<a2.length;i++) {
    if (a2[i].length > 0) {
     adobe_fonts_string = adobe_fonts_string + a2[i] + ";";
    }
   }
   while ((adobe_fonts_string.length > 0) && (adobe_fonts_string.substr(-1) == ";")) { adobe_fonts_string = adobe_fonts_string.substr(0,adobe_fonts_string.length-1); }
  }
 }
}

function chkjqueryUI_click(e) {
 document.getElementById('chkjquery').checked = document.getElementById('chkjqueryUI').checked;
 document.getElementById('chkjquery').disabled = document.getElementById('chkjqueryUI').checked;
}

function chkjqueryMobile_click(e) {
 document.getElementById('chkjquery').checked = document.getElementById('chkjqueryMobile').checked;
 document.getElementById('chkjquery').disabled = document.getElementById('chkjqueryMobile').checked;
}

function chkAngularMaterial_click(e) {
 document.getElementById('chkAngularJS').checked = document.getElementById('chkAngularMaterial').checked;
 document.getElementById('chkAngularJS').disabled = document.getElementById('chkAngularMaterial').checked;
}

function chkHTMLKickStart_click(e) {
 document.getElementById('chkjquery').checked = document.getElementById('chkHTMLKickStart').checked;
 document.getElementById('chkjquery').disabled = document.getElementById('chkHTMLKickStart').checked;
 document.getElementById('chkFontAwesome').checked = document.getElementById('chkHTMLKickStart').checked;
 document.getElementById('chkFontAwesome').disabled = document.getElementById('chkHTMLKickStart').checked;
}

function chkBootstrap_click(e) {
 document.getElementById('chkjquery').checked = document.getElementById('chkBootstrap').checked;
 document.getElementById('chkjquery').disabled = document.getElementById('chkBootstrap').checked;
 document.getElementById('chkHTML5Shiv').checked = document.getElementById('chkBootstrap').checked;
 document.getElementById('chkHTML5Shiv').disabled = document.getElementById('chkBootstrap').checked;
}

function chkCrossSite_click(e) {
 if (document.getElementById('chkCrossSite').checked == true) {
  csp_string = "default-src 'self'; child-src 'self' *.youtube.com; font-src 'self' fonts.googleapis.com themes.googleusercontent.com fonts.gstatic.com; script-src 'self' *.googlesyndication.com *.google-analytics.com *.googleapis.com *.google.com *.ytimg.com; style-src 'self' 'unsafe-inline'";
  document.getElementById('frmCSP').style.display = 'block';
  document.getElementById('frmCSP_List1').focus();
  document.getElementById('frmCSP_List1').options[3].selected = "selected";
 }
 else {
  document.getElementById('frmCSP').style.display = 'none';
 }
}

function frmCSP_List1_dblclick(e) {
 if ((e.type == "dblclick") || ((e.type == "keyup") && (e.which == 32))) {
  var selected_index = document.getElementById('frmCSP_List1').selectedIndex;
  if (selected_index == 0) { toggle_chkimg('chk_base-uri'); }
  else if (selected_index == 1) { toggle_chkimg('chk_child-src'); }
  else if (selected_index == 2) { toggle_chkimg('chk_connect-src'); }
  else if (selected_index == 3) { toggle_chkimg('chk_default-src'); }
  else if (selected_index == 4) { toggle_chkimg('chk_font-src'); }
  else if (selected_index == 5) { toggle_chkimg('chk_form-action'); }
  else if (selected_index == 6) { toggle_chkimg('chk_img-src'); }
  else if (selected_index == 7) { toggle_chkimg('chk_media-src'); }
  else if (selected_index == 8) { toggle_chkimg('chk_object-src'); }
  else if (selected_index == 9) { toggle_chkimg('chk_plugin-types'); }
  else if (selected_index == 10) { toggle_chkimg('chk_script-src'); }
  else if (selected_index == 11) { toggle_chkimg('chk_style-src'); }
 }
}

function frmCSP_List2_dblclick(e) {
 if ((e.type == "dblclick") || ((e.type == "keyup") && (e.which == 32))) {
  var list1_index = (document.getElementById('frmCSP_List1').selectedIndex != -1) ? document.getElementById('frmCSP_List1').selectedIndex : 0;
  var selected_index = document.getElementById('frmCSP_List2').selectedIndex;
  if (selected_index == 0) { toggle_chkimg('chk_wildcard'); }
  else if (selected_index == 1) { toggle_chkimg('chk_none'); }
  else if (selected_index == 2) { toggle_chkimg('chk_self'); }
  else if (selected_index == 3) { toggle_chkimg('chk_unsafe_inline'); }
  else if (selected_index == 4) { toggle_chkimg('chk_unsafe_eval'); }
  else if (selected_index == 5) { toggle_chkimg('chk_https'); }
  else if (selected_index == 6) { toggle_chkimg('chk_data'); }
  else if (selected_index == 7) { toggle_chkimg('chk_mediastream'); }
  else if (selected_index == 8) { toggle_chkimg('chk_blob'); }
  else if (selected_index == 9) { toggle_chkimg('chk_file'); }
  else if (selected_index == 10) { toggle_chkimg('chk_custom_uri_1'); }
  else if (selected_index == 11) { toggle_chkimg('chk_custom_uri_2'); }
  else if (selected_index == 12) { toggle_chkimg('chk_custom_uri_3'); }
  else if (selected_index == 13) { toggle_chkimg('chk_custom_uri_4'); }
  else if (selected_index == 14) { toggle_chkimg('chk_custom_uri_5'); }
  else if (selected_index == 15) { toggle_chkimg('chk_custom_uri_6'); }
  else if (selected_index == 16) { toggle_chkimg('chk_custom_uri_7'); }
  else if (selected_index == 17) { toggle_chkimg('chk_custom_uri_8'); }
  else if (selected_index == 18) { toggle_chkimg('chk_custom_uri_9'); }
  else if (selected_index == 19) { toggle_chkimg('chk_custom_uri_10'); }

  // custom urls
  if (selected_index >= 10) {
   if (document.getElementById('frmCSP_List1').selectedIndex == 9) {
    custom_urls[list1_index][this.selectedIndex] = prompt("Enter a custom Mime Type...", custom_urls[list1_index][this.selectedIndex]);
    if (custom_urls[list1_index][this.selectedIndex].length > 0) {
     this.options[this.selectedIndex].text = custom_urls[list1_index][this.selectedIndex];
     this.options[this.selectedIndex].value = custom_urls[list1_index][this.selectedIndex];
    }
    else {
     this.options[this.selectedIndex].text = "Custom Mime Type " + (this.selectedIndex - 9);
     this.options[this.selectedIndex].value = "Custom Mime Type " + (this.selectedIndex - 9);
    }
   }
   else {
    custom_urls[list1_index][this.selectedIndex] = prompt("Enter a custom URI source...", custom_urls[list1_index][this.selectedIndex]);
    if (custom_urls[list1_index][this.selectedIndex].length > 0) {
     this.options[this.selectedIndex].text = custom_urls[list1_index][this.selectedIndex];
     this.options[this.selectedIndex].value = custom_urls[list1_index][this.selectedIndex];
    }
    else {
     this.options[this.selectedIndex].text = "Custom URI " + (this.selectedIndex - 9);
     this.options[this.selectedIndex].value = "Custom URI " + (this.selectedIndex - 9);
    }
   }
  }

 }
}

function toggle_chkimg(id) {
 var list1_index = (document.getElementById('frmCSP_List1').selectedIndex != -1) ? document.getElementById('frmCSP_List1').selectedIndex : 0;
 var chk_state = false;
 if (document.getElementById(id).src.substr(-13) == "check_off.gif") { chk_state = true; }
 document.getElementById(id).src = (chk_state) ? "check_on.gif" : "check_off.gif";
 if (id == 'chk_wildcard') { bools[list1_index][0] = chk_state; }
 else if (id == 'chk_none') { bools[list1_index][1] = chk_state; }
 else if (id == 'chk_self') { bools[list1_index][2] = chk_state; }
 else if (id == 'chk_unsafe_inline') { bools[list1_index][3] = chk_state; }
 else if (id == 'chk_unsafe_eval') { bools[list1_index][4] = chk_state; }
 else if (id == 'chk_https') { bools[list1_index][5] = chk_state; }
 else if (id == 'chk_data') { bools[list1_index][6] = chk_state; }
 else if (id == 'chk_mediastream') { bools[list1_index][7] = chk_state; }
 else if (id == 'chk_blob') { bools[list1_index][8] = chk_state; }
 else if (id == 'chk_file') { bools[list1_index][9] = chk_state; }
 else if (id == 'chk_custom_uri_1') { bools[list1_index][10] = chk_state; }
 else if (id == 'chk_custom_uri_2') { bools[list1_index][11] = chk_state; }
 else if (id == 'chk_custom_uri_3') { bools[list1_index][12] = chk_state; }
 else if (id == 'chk_custom_uri_4') { bools[list1_index][13] = chk_state; }
 else if (id == 'chk_custom_uri_5') { bools[list1_index][14] = chk_state; }
 else if (id == 'chk_custom_uri_6') { bools[list1_index][15] = chk_state; }
 else if (id == 'chk_custom_uri_7') { bools[list1_index][16] = chk_state; }
 else if (id == 'chk_custom_uri_8') { bools[list1_index][17] = chk_state; }
 else if (id == 'chk_custom_uri_9') { bools[list1_index][18] = chk_state; }
 else if (id == 'chk_custom_uri_10') { bools[list1_index][19] = chk_state; }
 else if (id == 'chk_base-uri') { lbools[0] = chk_state; }
 else if (id == 'chk_child-src') { lbools[1] = chk_state; }
 else if (id == 'chk_connect-src') { lbools[2] = chk_state; }
 else if (id == 'chk_default-src') { lbools[3] = chk_state; }
 else if (id == 'chk_font-src') { lbools[4] = chk_state; }
 else if (id == 'chk_form-action') { lbools[5] = chk_state; }
 else if (id == 'chk_img-src') { lbools[6] = chk_state; }
 else if (id == 'chk_media-src') { lbools[7] = chk_state; }
 else if (id == 'chk_object-src') { lbools[8] = chk_state; }
 else if (id == 'chk_plugin-types') { lbools[9] = chk_state; }
 else if (id == 'chk_script-src') { lbools[10] = chk_state; }
 else if (id == 'chk_style-src') { lbools[11] = chk_state; }
}

function chkimg_mousedown(e) {
 if (this.src.substr(-13) == "check_off.gif") { this.src = "check_down.gif"; }
}

function chkimg_mouseup(e) {
 var list1_index = (document.getElementById('frmCSP_List1').selectedIndex != -1) ? document.getElementById('frmCSP_List1').selectedIndex : 0;
 var chk_state = false;
 if (this.src.substr(-12) != "check_on.gif") { chk_state = true; }
 this.src = (chk_state) ? "check_on.gif" : "check_off.gif";
 if (this.id == 'chk_wildcard') { bools[list1_index][0] = chk_state; }
 else if (this.id == 'chk_none') { bools[list1_index][1] = chk_state; }
 else if (this.id == 'chk_self') { bools[list1_index][2] = chk_state; }
 else if (this.id == 'chk_unsafe_inline') { bools[list1_index][3] = chk_state; }
 else if (this.id == 'chk_unsafe_eval') { bools[list1_index][4] = chk_state; }
 else if (this.id == 'chk_https') { bools[list1_index][5] = chk_state; }
 else if (this.id == 'chk_data') { bools[list1_index][6] = chk_state; }
 else if (this.id == 'chk_mediastream') { bools[list1_index][7] = chk_state; }
 else if (this.id == 'chk_blob') { bools[list1_index][8] = chk_state; }
 else if (this.id == 'chk_file') { bools[list1_index][9] = chk_state; }
 else if (this.id == 'chk_custom_uri_1') { bools[list1_index][10] = chk_state; }
 else if (this.id == 'chk_custom_uri_2') { bools[list1_index][11] = chk_state; }
 else if (this.id == 'chk_custom_uri_3') { bools[list1_index][12] = chk_state; }
 else if (this.id == 'chk_custom_uri_4') { bools[list1_index][13] = chk_state; }
 else if (this.id == 'chk_custom_uri_5') { bools[list1_index][14] = chk_state; }
 else if (this.id == 'chk_custom_uri_6') { bools[list1_index][15] = chk_state; }
 else if (this.id == 'chk_custom_uri_7') { bools[list1_index][16] = chk_state; }
 else if (this.id == 'chk_custom_uri_8') { bools[list1_index][17] = chk_state; }
 else if (this.id == 'chk_custom_uri_9') { bools[list1_index][18] = chk_state; }
 else if (this.id == 'chk_custom_uri_10') { bools[list1_index][19] = chk_state; }
 else if (this.id == 'chk_base-uri') { lbools[0] = chk_state; }
 else if (this.id == 'chk_child-src') { lbools[1] = chk_state; }
 else if (this.id == 'chk_connect-src') { lbools[2] = chk_state; }
 else if (this.id == 'chk_default-src') { lbools[3] = chk_state; }
 else if (this.id == 'chk_font-src') { lbools[4] = chk_state; }
 else if (this.id == 'chk_form-action') { lbools[5] = chk_state; }
 else if (this.id == 'chk_img-src') { lbools[6] = chk_state; }
 else if (this.id == 'chk_media-src') { lbools[7] = chk_state; }
 else if (this.id == 'chk_object-src') { lbools[8] = chk_state; }
 else if (this.id == 'chk_plugin-types') { lbools[9] = chk_state; }
 else if (this.id == 'chk_script-src') { lbools[10] = chk_state; }
 else if (this.id == 'chk_style-src') { lbools[11] = chk_state; }
}

function frmCSP_List1_click(e) {
 while (document.getElementById('frmCSP_List2').options.length > 0) { document.getElementById('frmCSP_List2').remove(0); }
 var option_label = "";
 if (this.selectedIndex == 9) { // plugin-types
  for (var i=0;i<list2_types.length;i++) { document.getElementById('frmCSP_List2').appendChild(new Option(list2_types[i], list2_types[i])); }
  for (var i=1;i<=10;i++) {
   option_label = (custom_urls[this.selectedIndex][i+9] != "") ? custom_urls[this.selectedIndex][i+9] : "Custom Mime Type " + i;
   document.getElementById('frmCSP_List2').appendChild(new Option(option_label, option_label));
  }
 }
 else {
  for (var i=0;i<list2_values.length;i++) { document.getElementById('frmCSP_List2').appendChild(new Option(list2_values[i], list2_values[i])); }
  for (var i=1;i<=10;i++) {
   option_label = (custom_urls[this.selectedIndex][i+9] != "") ? custom_urls[this.selectedIndex][i+9] : "Custom URI " + i;
   document.getElementById('frmCSP_List2').appendChild(new Option(option_label, option_label));
  }
 }
 document.getElementById('chk_wildcard').src = (bools[this.selectedIndex][0]) ? "check_on.gif" : "check_off.gif";
 document.getElementById('chk_none').src = (bools[this.selectedIndex][1]) ? "check_on.gif" : "check_off.gif";
 document.getElementById('chk_self').src = (bools[this.selectedIndex][2]) ? "check_on.gif" : "check_off.gif";
 document.getElementById('chk_unsafe_inline').src = (bools[this.selectedIndex][3]) ? "check_on.gif" : "check_off.gif";
 document.getElementById('chk_unsafe_eval').src = (bools[this.selectedIndex][4]) ? "check_on.gif" : "check_off.gif";
 document.getElementById('chk_https').src = (bools[this.selectedIndex][5]) ? "check_on.gif" : "check_off.gif";
 document.getElementById('chk_data').src = (bools[this.selectedIndex][6]) ? "check_on.gif" : "check_off.gif";
 document.getElementById('chk_mediastream').src = (bools[this.selectedIndex][7]) ? "check_on.gif" : "check_off.gif";
 document.getElementById('chk_blob').src = (bools[this.selectedIndex][8]) ? "check_on.gif" : "check_off.gif";
 document.getElementById('chk_file').src = (bools[this.selectedIndex][9]) ? "check_on.gif" : "check_off.gif";
 document.getElementById('chk_custom_uri_1').src = (bools[this.selectedIndex][10]) ? "check_on.gif" : "check_off.gif";
 document.getElementById('chk_custom_uri_2').src = (bools[this.selectedIndex][11]) ? "check_on.gif" : "check_off.gif";
 document.getElementById('chk_custom_uri_3').src = (bools[this.selectedIndex][12]) ? "check_on.gif" : "check_off.gif";
 document.getElementById('chk_custom_uri_4').src = (bools[this.selectedIndex][13]) ? "check_on.gif" : "check_off.gif";
 document.getElementById('chk_custom_uri_5').src = (bools[this.selectedIndex][14]) ? "check_on.gif" : "check_off.gif";
 document.getElementById('chk_custom_uri_6').src = (bools[this.selectedIndex][15]) ? "check_on.gif" : "check_off.gif";
 document.getElementById('chk_custom_uri_7').src = (bools[this.selectedIndex][16]) ? "check_on.gif" : "check_off.gif";
 document.getElementById('chk_custom_uri_8').src = (bools[this.selectedIndex][17]) ? "check_on.gif" : "check_off.gif";
 document.getElementById('chk_custom_uri_9').src = (bools[this.selectedIndex][18]) ? "check_on.gif" : "check_off.gif";
 document.getElementById('chk_custom_uri_10').src = (bools[this.selectedIndex][19]) ? "check_on.gif" : "check_off.gif";
}

function toggle_og_article_fields() {
 document.getElementById('txtArticlePublishedTime').disabled = !document.getElementById('txtArticlePublishedTime').disabled;
 document.getElementById('txtArticleModifiedTime').disabled = !document.getElementById('txtArticleModifiedTime').disabled;
 document.getElementById('txtArticleAuthor').disabled = !document.getElementById('txtArticleAuthor').disabled;
 document.getElementById('txtArticlePublisher').disabled = !document.getElementById('txtArticlePublisher').disabled;
 document.getElementById('txtArticleSection').disabled = !document.getElementById('txtArticleSection').disabled;
 document.getElementById('txtArticleTag').disabled = !document.getElementById('txtArticleTag').disabled;
}

function generate_html() {
var h;
h = "<!DOCTYPE html>" + "\n";
h = h + "<html lang=\"" + document.getElementById('txtLang').value.replace(/\u0022/g, "&quot;") + "\"" + ((document.getElementById('chkAngularJS').checked)?" ng-app=\"BlankApp\"":"") + ">" + "\n";
h = h + "<head" + ((document.getElementById('chkOpenGraph').checked)?" prefix=\"og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#\"":"") + ">" + "\n";
h = h + "<meta charset=\"utf-8\">" + "\n";
h = h + "<meta http-equiv=\"x-ua-compatible\" content=\"IE=edge\">" + "\n";
h = h + "<title>" + document.getElementById('txtTitle').value.replace(/\u0022/g, "&quot;") + "</title>" + "\n";
if (document.getElementById('chkCrossSite').checked == true) {
 h = h + "<meta http-equiv=\"content-security-policy\" content=\"" + csp_string.replace(/\u0022/g, "&quot;") + "\">" + "\n";
}
if (document.getElementById('txtBaseHref').value != "") {
 h = h + "<base href=\"" + document.getElementById('txtBaseHref').value.replace(/\u0022/g, "&quot;") + "\" target=\"" + document.getElementById('txtBaseHref2').value.replace(/\u0022/g, "&quot;") + "\">" + "\n";
}
//h = h + "<!-- <meta http-equiv=\"default-style\" content=\"\"> -->" + "\n";
if (document.getElementById('txtAutoRefresh2').value != "") {
 h = h + "<meta http-equiv=\"refresh\" content=\"" + ((document.getElementById('txtAutoRefresh').value == "") ? "0" : document.getElementById('txtAutoRefresh').value.replace(/\u0022/g, "&quot;")) + "; URL=" + document.getElementById('txtAutoRefresh2').value.replace(/\u0022/g, "&quot;") + "\">" + "\n";
}
if (document.getElementById('chkDontCache').checked == true) {
 h = h + "<meta http-equiv=\"expires\" content=\"0\">" + "\n";
 h = h + "<meta http-equiv=\"pragma\" content=\"no-cache\">" + "\n";
 h = h + "<meta http-equiv=\"cache-control\" content=\"no-cache\">" + "\n";
}
if (document.getElementById('txtAppName').value != "") {
 h = h + "<meta name=\"application-name\" content=\"" + document.getElementById('txtAppName').value.replace(/\u0022/g, "&quot;") + "\">" + "\n";
}
if (document.getElementById('txtAuthorName').value != "") {
 h = h + "<meta name=\"author\" content=\"" + document.getElementById('txtAuthorName').value.replace(/\u0022/g, "&quot;") + "\">" + "\n";
}
//if (document.getElementById('txtMetaKeywords').value != "") {
// h = h + "<meta name=\"keywords\" content=\"" + document.getElementById('txtMetaKeywords').value.replace(/\u0022/g, "&quot;") + "\">" + "\n";
//}
if (document.getElementById('txtMetaDescription').value != "") {
 h = h + "<meta name=\"description\" content=\"" + document.getElementById('txtMetaDescription').value.replace(/\u0022/g, "&quot;") + "\">" + "\n";
}
//h = h + "<meta name=\"generator\" content=\"HTMLPro.io\">" + "\n";
if (document.getElementById('txtMetaViewport').value != "") {
 h = h + "<meta name=\"viewport\" content=\"" + document.getElementById('txtMetaViewport').value.replace(/\u0022/g, "&quot;") + "\">" + "\n";
}

if (document.getElementById('chkTwitterCard').checked == true) {
 h = h + "<!-- Twitter Metadata https://dev.twitter.com/cards/types/summary -->" + "\n";
 h = h + "<meta name=\"twitter:card\" content=\"" + document.getElementById('lblTwitterSummary').textContent.replace(/\u0022/g, "&quot;") + "\">" + "\n";
 h = h + "<meta name=\"twitter:site\" content=\"@" + document.getElementById('txtTwitterSite').value.replace(/\u0022/g, "&quot;") + "\">" + "\n";
 if (document.getElementById('txtTwitterCreator').value != "") {
  h = h + "<meta name=\"twitter:creator\" content=\"@" + document.getElementById('txtTwitterCreator').value.replace(/\u0022/g, "&quot;") + "\">" + "\n";
 }
 h = h + "<meta name=\"twitter:title\" content=\"" + document.getElementById('txtTwitterTitle').value.replace(/\u0022/g, "&quot;") + "\">" + "\n";
 h = h + "<meta name=\"twitter:description\" content=\"" + document.getElementById('txtTwitterDesc').value.replace(/\u0022/g, "&quot;") + "\">" + "\n";
 if (document.getElementById('txtTwitterImage').value != "") {
  h = h + "<meta name=\"twitter:image\" content=\"" + document.getElementById('txtTwitterImage').value.replace(/\u0022/g, "&quot;") + "\">" + "\n";
 }
 //h = h + "<!-- End Twitter Summary Card -->" + "\n";
}

if (document.getElementById('chkOpenGraph').checked == true) {
 h = h + "<!-- Facebook Metadata https://developers.facebook.com/docs/sharing/webmasters -->" + "\n";
 var og_locale = document.getElementById('txtLang').value;
 og_locale = og_locale.replace(/-/g, "_");
 if (og_locale.indexOf("_") < 0) { og_locale = og_locale + "_US"; }
 h = h + "<meta property=\"og:locale\" content=\"" + og_locale.replace(/\u0022/g, "&quot;") + "\">" + "\n";
 h = h + "<meta property=\"og:type\" content=\"" + document.getElementById('lblOgType').textContent + "\">" + "\n";
 if (document.getElementById('txtOgURL').value != "") { h = h + "<meta property=\"og:url\" content=\"" + document.getElementById('txtOgURL').value.replace(/\u0022/g, "&quot;") + "\">" + "\n"; }
 if (document.getElementById('txtOgTitle').value != "") { h = h + "<meta property=\"og:title\" content=\"" + document.getElementById('txtOgTitle').value.replace(/\u0022/g, "&quot;") + "\">" + "\n"; }
 if (document.getElementById('txtOgDesc').value != "") { h = h + "<meta property=\"og:description\" content=\"" + document.getElementById('txtOgDesc').value.replace(/\u0022/g, "&quot;") + "\">" + "\n"; }
 if (document.getElementById('txtOgSiteName').value != "") { h = h + "<meta property=\"og:site_name\" content=\"" + document.getElementById('txtOgSiteName').value.replace(/\u0022/g, "&quot;") + "\">" + "\n"; }
 if (document.getElementById('txtOgImage').value != "") { h = h + "<meta property=\"og:image\" content=\"" + document.getElementById('txtOgImage').value.replace(/\u0022/g, "&quot;") + "\">" + "\n"; }
 if (document.getElementById('txtFbAppId').value != "") { h = h + "<meta property=\"fb:app_id\" content=\"" + document.getElementById('txtFbAppId').value.replace(/\u0022/g, "&quot;") + "\">" + "\n"; }
 if (document.getElementById('txtFbProfileId').value != "") { h = h + "<meta property=\"fb:profile_id\" content=\"" + document.getElementById('txtFbProfileId').value.replace(/\u0022/g, "&quot;") + "\">" + "\n"; }
 if (document.getElementById('txtArticleModifiedTime').value != "") { h = h + "<meta property=\"og:updated_time\" content=\"" + document.getElementById('txtArticleModifiedTime').value.replace(/\u0022/g, "&quot;") + "\">" + "\n"; }
 if ((document.getElementById('txtArticleModifiedTime').value != "") && (document.getElementById('lblOgType').textContent == "article")) { h = h + "<meta property=\"article:modified_time\" content=\"" + document.getElementById('txtArticleModifiedTime').value.replace(/\u0022/g, "&quot;") + "\">" + "\n"; }
 if ((document.getElementById('txtArticlePublishedTime').value != "") && (document.getElementById('lblOgType').textContent == "article")) { h = h + "<meta property=\"article:published_time\" content=\"" + document.getElementById('txtArticlePublishedTime').value.replace(/\u0022/g, "&quot;") + "\">" + "\n"; }
 if ((document.getElementById('txtArticleAuthor').value != "") && (document.getElementById('lblOgType').textContent == "article")) { h = h + "<meta property=\"article:author\" content=\"" + document.getElementById('txtArticleAuthor').value.replace(/\u0022/g, "&quot;") + "\">" + "\n"; }
 if ((document.getElementById('txtArticlePublisher').value != "") && (document.getElementById('lblOgType').textContent == "article")) { h = h + "<meta property=\"article:publisher\" content=\"" + document.getElementById('txtArticlePublisher').value.replace(/\u0022/g, "&quot;") + "\">" + "\n"; }
 if ((document.getElementById('txtArticleSection').value != "") && (document.getElementById('lblOgType').textContent == "article")) { h = h + "<meta property=\"article:section\" content=\"" + document.getElementById('txtArticleSection').value.replace(/\u0022/g, "&quot;") + "\">" + "\n"; }
 if ((document.getElementById('txtArticleTag').value != "") && (document.getElementById('lblOgType').textContent == "article")) {
  var og_tags = document.getElementById('txtArticleTag').value.split(",");
  for (var i=0;i<og_tags.length;i++) {
   h = h + "<meta property=\"article:tag\" content=\"" + og_tags[i].trim().replace(/\u0022/g, "&quot;") + "\">" + "\n";
  } 
 }
 //h = h + "<!-- End Facebook Open Graph Tags -->" + "\n";
}

 if (document.getElementById('txtMetaRobots').value != "") {
  h = h + "<meta name=\"robots\" content=\"" + document.getElementById('txtMetaRobots').value.replace(/\u0022/g, "&quot;") + "\">" + "\n";
 }
 if (document.getElementById('txtLinkRelAuthor').value != "") {
  h = h + "<link rel=\"author\" href=\"" + document.getElementById('txtLinkRelAuthor').value.replace(/\u0022/g, "&quot;") + "\">" + "\n";
 }
 if (document.getElementById('txtCano').value != "") {
  h = h + "<link rel=\"canonical\" href=\"" + document.getElementById('txtCano').value.replace(/\u0022/g, "&quot;") + "\">" + "\n";
 }
 if (document.getElementById('txtFavIcon').value != "") {
  h = h + "<link rel=\"icon\" href=\"" + document.getElementById('txtFavIcon').value.replace(/\u0022/g, "&quot;") + "\" sizes=\"" + document.getElementById('txtFavIcon2').value.replace(/\u0022/g, "&quot;") + "\" type=\"" + document.getElementById('txtFavIcon3').value.replace(/\u0022/g, "&quot;") + "\">" + "\n";
 }
 if (document.getElementById('txtGoogleSiteVerify').value != "") {
  h = h + "<meta name=\"google-site-verification\" content=\"" + document.getElementById('txtGoogleSiteVerify').value.replace(/\u0022/g, "&quot;") + "\">" + " <!-- https://www.google.com/webmasters/tools/ -->\n";
 }
 //h = h + "<!-- <link rel=\"icon\" href=\"touch-icon-192x192.png\" sizes=\"192x192\"> -->" + "\n";
 //h = h + "<!-- <link rel=\"apple-touch-icon-precomposed\" sizes=\"180x180\" href=\"apple-touch-icon-180x180-precomposed.png\"> -->" + "\n";
 //h = h + "<!-- <link rel=\"apple-touch-icon-precomposed\" sizes=\"152x152\" href=\"apple-touch-icon-152x152-precomposed.png\"> -->" + "\n";
 //h = h + "<!-- <link rel=\"apple-touch-icon-precomposed\" sizes=\"144x144\" href=\"apple-touch-icon-144x144-precomposed.png\"> -->" + "\n";
 //h = h + "<!-- <link rel=\"apple-touch-icon-precomposed\" sizes=\"120x120\" href=\"apple-touch-icon-120x120-precomposed.png\"> -->" + "\n";
 //h = h + "<!-- <link rel=\"apple-touch-icon-precomposed\" sizes=\"114x114\" href=\"apple-touch-icon-114x114-precomposed.png\"> -->" + "\n";
 //h = h + "<!-- <link rel=\"apple-touch-icon-precomposed\" sizes=\"76x76\" href=\"apple-touch-icon-76x76-precomposed.png\"> -->" + "\n";
 //h = h + "<!-- <link rel=\"apple-touch-icon-precomposed\" sizes=\"72x72\" href=\"apple-touch-icon-72x72-precomposed.png\"> -->" + "\n";
 //h = h + "<!-- <link rel=\"apple-touch-icon-precomposed\" href=\"apple-touch-icon-57x57-precomposed.png\"> -->" + "\r\n";
 if (document.getElementById('txtRSS').value != "") {
  h = h + "<link rel=\"alternate\" type=\"application/rss+xml\" title=\"" + document.getElementById('txtTitle').value.replace(/\u0022/g, "&quot;") + " RSS 2.0 Feed" + "\" href=\"" + document.getElementById('txtRSS').value.replace(/\u0022/g, "&quot;") + "\">" + "\n";
 }

 // Normalize CSS
 if (document.getElementById('chkNormalize').checked == true) {
  h = h + "<!-- normalize.css v3.0.3 http://necolas.github.io/normalize.css/ -->" + "\n";
  h = h + "<style>[hidden],template{display:none}a:active,a:hover{outline:0}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}b,strong{font-weight:bolder}b,strong{font-weight:inherit}body{margin:0}button,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer;}button,input,optgroup,select,textarea{font:inherit;margin:0}button,select{text-transform:none}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}button:-moz-focusring,input:-moz-focusring{outline:1px dotted ButtonText}button[disabled],html input[disabled]{cursor:default}button{overflow:visible}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}figure{margin:1em 40px}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}img{border:0}input[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0}input[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}input[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}input[type=\"search\"]{-webkit-appearance:textfield}input{line-height:normal}legend{border:0;padding:0}mark{background-color:#ff0;color:#000}optgroup{font-weight:bold}pre{overflow:auto}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}svg:not(:root){overflow:hidden}table,th,td{border-collapse:collapse;border-spacing:0}textarea{overflow:auto}</style>" + "\n";
 }

 if (document.getElementById('txtCSS').value != "") {
  h = h + "<link rel=\"stylesheet\" href=\"" + document.getElementById('txtCSS').value.replace(/\u0022/g, "&quot;") + "\" type=\"text/css\">" + "\n";
 }

 // Google Fonts
 if ((document.getElementById('chkGoogleFonts').checked == true) && (google_fonts_string != "")) {
  h = h + "<!-- Google Web Fonts https://www.google.com/fonts -->" + "\n";
  h = h + "<link rel=\"stylesheet\" href=\"" + ("https://fonts.googleapis.com/css?family=" + google_fonts_string).replace(/\u0022/g, "&quot;") + "\" type=\"text/css\">" + "\n";
 }

 // FontAwesome Icons
 if ((document.getElementById('chkFontAwesome').checked == true) && (document.getElementById('chkHTMLKickStart').checked == false)) {
  h = h + "<!-- Font Awesome Web Icons v4.5.0 https://fortawesome.github.io/Font-Awesome/ -->" + "\n";
  h = h + "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css\" type=\"text/css\">" + "\n";
 }

 // Entypo+ Icons
 if (document.getElementById('chkEntypo').checked == true) {
  h = h + "<!-- Entypo+ Web Icons v3.0 http://www.entypo.com/ -->" + "\n";
  h = h + "<style>" + "\n";
  h = h + "@font-face{font-family:entypo;src:url(data:application/font-woff;charset=utf-8;base64,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) format('woff');font-weight:normal;font-style:normal;}" + "\n";
  h = h + "i{font-family:entypo !important;speak:none;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}" + "\n";
  h = h + ".icon-px:before {content:\"\\e900\";}" + "\n";
  h = h + ".icon-px-with-circle:before {content:\"\\e901\";}" + "\n";
  h = h + ".icon-address:before {content:\"\\e902\";}" + "\n";
  h = h + ".icon-add-to-list:before {content:\"\\e903\";}" + "\n";
  h = h + ".icon-add-user:before {content:\"\\e904\";}" + "\n";
  h = h + ".icon-adjust:before {content:\"\\e905\";}" + "\n";
  h = h + ".icon-air:before {content:\"\\e906\";}" + "\n";
  h = h + ".icon-aircraft:before {content:\"\\e907\";}" + "\n";
  h = h + ".icon-aircraft-landing:before {content:\"\\e908\";}" + "\n";
  h = h + ".icon-aircraft-take-off:before {content:\"\\e909\";}" + "\n";
  h = h + ".icon-align-bottom:before {content:\"\\e90a\";}" + "\n";
  h = h + ".icon-align-horizontal-middle:before {content:\"\\e90b\";}" + "\n";
  h = h + ".icon-align-left:before {content:\"\\e90c\";}" + "\n";
  h = h + ".icon-align-right:before {content:\"\\e90d\";}" + "\n";
  h = h + ".icon-align-top:before {content:\"\\e90e\";}" + "\n";
  h = h + ".icon-align-vertical-middle:before {content:\"\\e90f\";}" + "\n";
  h = h + ".icon-app-store:before {content:\"\\e910\";}" + "\n";
  h = h + ".icon-archive:before {content:\"\\e911\";}" + "\n";
  h = h + ".icon-area-graph:before {content:\"\\e912\";}" + "\n";
  h = h + ".icon-arrow-bold-down:before {content:\"\\e913\";}" + "\n";
  h = h + ".icon-arrow-bold-left:before {content:\"\\e914\";}" + "\n";
  h = h + ".icon-arrow-bold-right:before {content:\"\\e915\";}" + "\n";
  h = h + ".icon-arrow-bold-up:before {content:\"\\e916\";}" + "\n";
  h = h + ".icon-arrow-down:before {content:\"\\e917\";}" + "\n";
  h = h + ".icon-arrow-left:before {content:\"\\e918\";}" + "\n";
  h = h + ".icon-arrow-long-down:before {content:\"\\e919\";}" + "\n";
  h = h + ".icon-arrow-long-left:before {content:\"\\e91a\";}" + "\n";
  h = h + ".icon-arrow-long-right:before {content:\"\\e91b\";}" + "\n";
  h = h + ".icon-arrow-long-up:before {content:\"\\e91c\";}" + "\n";
  h = h + ".icon-arrow-right:before {content:\"\\e91d\";}" + "\n";
  h = h + ".icon-arrow-up:before {content:\"\\e91e\";}" + "\n";
  h = h + ".icon-arrow-with-circle-down:before {content:\"\\e91f\";}" + "\n";
  h = h + ".icon-arrow-with-circle-left:before {content:\"\\e920\";}" + "\n";
  h = h + ".icon-arrow-with-circle-right:before {content:\"\\e921\";}" + "\n";
  h = h + ".icon-arrow-with-circle-up:before {content:\"\\e922\";}" + "\n";
  h = h + ".icon-attachment:before {content:\"\\e923\";}" + "\n";
  h = h + ".icon-awareness-ribbon:before {content:\"\\e924\";}" + "\n";
  h = h + ".icon-back:before {content:\"\\e925\";}" + "\n";
  h = h + ".icon-back-in-time:before {content:\"\\e926\";}" + "\n";
  h = h + ".icon-baidu:before {content:\"\\e927\";}" + "\n";
  h = h + ".icon-bar-graph:before {content:\"\\e928\";}" + "\n";
  h = h + ".icon-basecamp:before {content:\"\\e929\";}" + "\n";
  h = h + ".icon-battery:before {content:\"\\e92a\";}" + "\n";
  h = h + ".icon-beamed-note:before {content:\"\\e92b\";}" + "\n";
  h = h + ".icon-behance:before {content:\"\\e92c\";}" + "\n";
  h = h + ".icon-bell:before {content:\"\\e92d\";}" + "\n";
  h = h + ".icon-blackboard:before {content:\"\\e92e\";}" + "\n";
  h = h + ".icon-block:before {content:\"\\e92f\";}" + "\n";
  h = h + ".icon-book:before {content:\"\\e930\";}" + "\n";
  h = h + ".icon-bookmark:before {content:\"\\e931\";}" + "\n";
  h = h + ".icon-bookmarks:before {content:\"\\e932\";}" + "\n";
  h = h + ".icon-bowl:before {content:\"\\e933\";}" + "\n";
  h = h + ".icon-box:before {content:\"\\e934\";}" + "\n";
  h = h + ".icon-briefcase:before {content:\"\\e935\";}" + "\n";
  h = h + ".icon-browser:before {content:\"\\e936\";}" + "\n";
  h = h + ".icon-brush:before {content:\"\\e937\";}" + "\n";
  h = h + ".icon-bucket:before {content:\"\\e938\";}" + "\n";
  h = h + ".icon-bug:before {content:\"\\e939\";}" + "\n";
  h = h + ".icon-cake:before {content:\"\\e93a\";}" + "\n";
  h = h + ".icon-calculator:before {content:\"\\e93b\";}" + "\n";
  h = h + ".icon-calendar:before {content:\"\\e93c\";}" + "\n";
  h = h + ".icon-camera:before {content:\"\\e93d\";}" + "\n";
  h = h + ".icon-ccw:before {content:\"\\e93e\";}" + "\n";
  h = h + ".icon-chat:before {content:\"\\e93f\";}" + "\n";
  h = h + ".icon-check:before {content:\"\\e940\";}" + "\n";
  h = h + ".icon-chevron-down:before {content:\"\\e941\";}" + "\n";
  h = h + ".icon-chevron-left:before {content:\"\\e942\";}" + "\n";
  h = h + ".icon-chevron-right:before {content:\"\\e943\";}" + "\n";
  h = h + ".icon-chevron-small-down:before {content:\"\\e944\";}" + "\n";
  h = h + ".icon-chevron-small-left:before {content:\"\\e945\";}" + "\n";
  h = h + ".icon-chevron-small-right:before {content:\"\\e946\";}" + "\n";
  h = h + ".icon-chevron-small-up:before {content:\"\\e947\";}" + "\n";
  h = h + ".icon-chevron-thin-down:before {content:\"\\e948\";}" + "\n";
  h = h + ".icon-chevron-thin-left:before {content:\"\\e949\";}" + "\n";
  h = h + ".icon-chevron-thin-right:before {content:\"\\e94a\";}" + "\n";
  h = h + ".icon-chevron-thin-up:before {content:\"\\e94b\";}" + "\n";
  h = h + ".icon-chevron-up:before {content:\"\\e94c\";}" + "\n";
  h = h + ".icon-chevron-with-circle-down:before {content:\"\\e94d\";}" + "\n";
  h = h + ".icon-chevron-with-circle-left:before {content:\"\\e94e\";}" + "\n";
  h = h + ".icon-chevron-with-circle-right:before {content:\"\\e94f\";}" + "\n";
  h = h + ".icon-chevron-with-circle-up:before {content:\"\\e950\";}" + "\n";
  h = h + ".icon-circle:before {content:\"\\e951\";}" + "\n";
  h = h + ".icon-circle-with-cross:before {content:\"\\e952\";}" + "\n";
  h = h + ".icon-circle-with-minus:before {content:\"\\e953\";}" + "\n";
  h = h + ".icon-circle-with-plus:before {content:\"\\e954\";}" + "\n";
  h = h + ".icon-circular-graph:before {content:\"\\e955\";}" + "\n";
  h = h + ".icon-clapperboard:before {content:\"\\e956\";}" + "\n";
  h = h + ".icon-classic-computer:before {content:\"\\e957\";}" + "\n";
  h = h + ".icon-clipboard:before {content:\"\\e958\";}" + "\n";
  h = h + ".icon-clock:before {content:\"\\e959\";}" + "\n";
  h = h + ".icon-cloud:before {content:\"\\e95a\";}" + "\n";
  h = h + ".icon-code:before {content:\"\\e95b\";}" + "\n";
  h = h + ".icon-cog:before {content:\"\\e95c\";}" + "\n";
  h = h + ".icon-colours:before {content:\"\\e95d\";}" + "\n";
  h = h + ".icon-compass:before {content:\"\\e95e\";}" + "\n";
  h = h + ".icon-controller-fast-backward:before {content:\"\\e95f\";}" + "\n";
  h = h + ".icon-controller-fast-forward:before {content:\"\\e960\";}" + "\n";
  h = h + ".icon-controller-jump-to-start:before {content:\"\\e961\";}" + "\n";
  h = h + ".icon-controller-next:before {content:\"\\e962\";}" + "\n";
  h = h + ".icon-controller-paus:before {content:\"\\e963\";}" + "\n";
  h = h + ".icon-controller-play:before {content:\"\\e964\";}" + "\n";
  h = h + ".icon-controller-record:before {content:\"\\e965\";}" + "\n";
  h = h + ".icon-controller-stop:before {content:\"\\e966\";}" + "\n";
  h = h + ".icon-controller-volume:before {content:\"\\e967\";}" + "\n";
  h = h + ".icon-copy:before {content:\"\\e968\";}" + "\n";
  h = h + ".icon-creative-cloud:before {content:\"\\e969\";}" + "\n";
  h = h + ".icon-creative-commons:before {content:\"\\e96a\";}" + "\n";
  h = h + ".icon-creative-commons-attribution:before {content:\"\\e96b\";}" + "\n";
  h = h + ".icon-creative-commons-noderivs:before {content:\"\\e96c\";}" + "\n";
  h = h + ".icon-creative-commons-noncommercial-eu:before {content:\"\\e96d\";}" + "\n";
  h = h + ".icon-creative-commons-noncommercial-us:before {content:\"\\e96e\";}" + "\n";
  h = h + ".icon-creative-commons-public-domain:before {content:\"\\e96f\";}" + "\n";
  h = h + ".icon-creative-commons-remix:before {content:\"\\e970\";}" + "\n";
  h = h + ".icon-creative-commons-share:before {content:\"\\e971\";}" + "\n";
  h = h + ".icon-creative-commons-sharealike:before {content:\"\\e972\";}" + "\n";
  h = h + ".icon-credit:before {content:\"\\e973\";}" + "\n";
  h = h + ".icon-credit-card:before {content:\"\\e974\";}" + "\n";
  h = h + ".icon-crop:before {content:\"\\e975\";}" + "\n";
  h = h + ".icon-cross:before {content:\"\\e976\";}" + "\n";
  h = h + ".icon-cup:before {content:\"\\e977\";}" + "\n";
  h = h + ".icon-cw:before {content:\"\\e978\";}" + "\n";
  h = h + ".icon-cycle:before {content:\"\\e979\";}" + "\n";
  h = h + ".icon-database:before {content:\"\\e97a\";}" + "\n";
  h = h + ".icon-dial-pad:before {content:\"\\e97b\";}" + "\n";
  h = h + ".icon-direction:before {content:\"\\e97c\";}" + "\n";
  h = h + ".icon-document:before {content:\"\\e97d\";}" + "\n";
  h = h + ".icon-document-landscape:before {content:\"\\e97e\";}" + "\n";
  h = h + ".icon-documents:before {content:\"\\e97f\";}" + "\n";
  h = h + ".icon-dot-single:before {content:\"\\e980\";}" + "\n";
  h = h + ".icon-dots-three-horizontal:before {content:\"\\e981\";}" + "\n";
  h = h + ".icon-dots-three-vertical:before {content:\"\\e982\";}" + "\n";
  h = h + ".icon-dots-two-horizontal:before {content:\"\\e983\";}" + "\n";
  h = h + ".icon-dots-two-vertical:before {content:\"\\e984\";}" + "\n";
  h = h + ".icon-download:before {content:\"\\e985\";}" + "\n";
  h = h + ".icon-dribbble:before {content:\"\\e986\";}" + "\n";
  h = h + ".icon-dribbble-with-circle:before {content:\"\\e987\";}" + "\n";
  h = h + ".icon-drink:before {content:\"\\e988\";}" + "\n";
  h = h + ".icon-drive:before {content:\"\\e989\";}" + "\n";
  h = h + ".icon-drop:before {content:\"\\e98a\";}" + "\n";
  h = h + ".icon-dropbox:before {content:\"\\e98b\";}" + "\n";
  h = h + ".icon-edit:before {content:\"\\e98c\";}" + "\n";
  h = h + ".icon-email:before {content:\"\\e98d\";}" + "\n";
  h = h + ".icon-emoji-flirt:before {content:\"\\e98e\";}" + "\n";
  h = h + ".icon-emoji-happy:before {content:\"\\e98f\";}" + "\n";
  h = h + ".icon-emoji-neutral:before {content:\"\\e990\";}" + "\n";
  h = h + ".icon-emoji-sad:before {content:\"\\e991\";}" + "\n";
  h = h + ".icon-erase:before {content:\"\\e992\";}" + "\n";
  h = h + ".icon-eraser:before {content:\"\\e993\";}" + "\n";
  h = h + ".icon-evernote:before {content:\"\\e994\";}" + "\n";
  h = h + ".icon-export:before {content:\"\\e995\";}" + "\n";
  h = h + ".icon-eye:before {content:\"\\e996\";}" + "\n";
  h = h + ".icon-eye-with-line:before {content:\"\\e997\";}" + "\n";
  h = h + ".icon-facebook:before {content:\"\\e998\";}" + "\n";
  h = h + ".icon-facebook-with-circle:before {content:\"\\e999\";}" + "\n";
  h = h + ".icon-feather:before {content:\"\\e99a\";}" + "\n";
  h = h + ".icon-fingerprint:before {content:\"\\e99b\";}" + "\n";
  h = h + ".icon-flag:before {content:\"\\e99c\";}" + "\n";
  h = h + ".icon-flash:before {content:\"\\e99d\";}" + "\n";
  h = h + ".icon-flashlight:before {content:\"\\e99e\";}" + "\n";
  h = h + ".icon-flat-brush:before {content:\"\\e99f\";}" + "\n";
  h = h + ".icon-flattr:before {content:\"\\e9a0\";}" + "\n";
  h = h + ".icon-flickr:before {content:\"\\e9a1\";}" + "\n";
  h = h + ".icon-flickr-with-circle:before {content:\"\\e9a2\";}" + "\n";
  h = h + ".icon-flow-branch:before {content:\"\\e9a3\";}" + "\n";
  h = h + ".icon-flow-cascade:before {content:\"\\e9a4\";}" + "\n";
  h = h + ".icon-flower:before {content:\"\\e9a5\";}" + "\n";
  h = h + ".icon-flow-line:before {content:\"\\e9a6\";}" + "\n";
  h = h + ".icon-flow-parallel:before {content:\"\\e9a7\";}" + "\n";
  h = h + ".icon-flow-tree:before {content:\"\\e9a8\";}" + "\n";
  h = h + ".icon-folder:before {content:\"\\e9a9\";}" + "\n";
  h = h + ".icon-folder-images:before {content:\"\\e9aa\";}" + "\n";
  h = h + ".icon-folder-music:before {content:\"\\e9ab\";}" + "\n";
  h = h + ".icon-folder-video:before {content:\"\\e9ac\";}" + "\n";
  h = h + ".icon-forward:before {content:\"\\e9ad\";}" + "\n";
  h = h + ".icon-foursquare:before {content:\"\\e9ae\";}" + "\n";
  h = h + ".icon-funnel:before {content:\"\\e9af\";}" + "\n";
  h = h + ".icon-game-controller:before {content:\"\\e9b0\";}" + "\n";
  h = h + ".icon-gauge:before {content:\"\\e9b1\";}" + "\n";
  h = h + ".icon-github:before {content:\"\\e9b2\";}" + "\n";
  h = h + ".icon-github-with-circle:before {content:\"\\e9b3\";}" + "\n";
  h = h + ".icon-globe:before {content:\"\\e9b4\";}" + "\n";
  h = h + ".icon-google:before {content:\"\\e9b5\";}" + "\n";
  h = h + ".icon-google-with-circle:before {content:\"\\e9b6\";}" + "\n";
  h = h + ".icon-google-drive:before {content:\"\\e9b7\";}" + "\n";
  h = h + ".icon-google-hangouts:before {content:\"\\e9b8\";}" + "\n";
  h = h + ".icon-google-play:before {content:\"\\e9b9\";}" + "\n";
  h = h + ".icon-graduation-cap:before {content:\"\\e9ba\";}" + "\n";
  h = h + ".icon-grid:before {content:\"\\e9bb\";}" + "\n";
  h = h + ".icon-grooveshark:before {content:\"\\e9bc\";}" + "\n";
  h = h + ".icon-hair-cross:before {content:\"\\e9bd\";}" + "\n";
  h = h + ".icon-hand:before {content:\"\\e9be\";}" + "\n";
  h = h + ".icon-heart:before {content:\"\\e9bf\";}" + "\n";
  h = h + ".icon-heart-outlined:before {content:\"\\e9c0\";}" + "\n";
  h = h + ".icon-help:before {content:\"\\e9c1\";}" + "\n";
  h = h + ".icon-help-with-circle:before {content:\"\\e9c2\";}" + "\n";
  h = h + ".icon-home:before {content:\"\\e9c3\";}" + "\n";
  h = h + ".icon-hour-glass:before {content:\"\\e9c4\";}" + "\n";
  h = h + ".icon-houzz:before {content:\"\\e9c5\";}" + "\n";
  h = h + ".icon-icloud:before {content:\"\\e9c6\";}" + "\n";
  h = h + ".icon-image:before {content:\"\\e9c7\";}" + "\n";
  h = h + ".icon-image-inverted:before {content:\"\\e9c8\";}" + "\n";
  h = h + ".icon-images:before {content:\"\\e9c9\";}" + "\n";
  h = h + ".icon-inbox:before {content:\"\\e9ca\";}" + "\n";
  h = h + ".icon-infinity:before {content:\"\\e9cb\";}" + "\n";
  h = h + ".icon-info:before {content:\"\\e9cc\";}" + "\n";
  h = h + ".icon-info-with-circle:before {content:\"\\e9cd\";}" + "\n";
  h = h + ".icon-instagram:before {content:\"\\e9ce\";}" + "\n";
  h = h + ".icon-instagram-with-circle:before {content:\"\\e9cf\";}" + "\n";
  h = h + ".icon-install:before {content:\"\\e9d0\";}" + "\n";
  h = h + ".icon-key:before {content:\"\\e9d1\";}" + "\n";
  h = h + ".icon-keyboard:before {content:\"\\e9d2\";}" + "\n";
  h = h + ".icon-lab-flask:before {content:\"\\e9d3\";}" + "\n";
  h = h + ".icon-landline:before {content:\"\\e9d4\";}" + "\n";
  h = h + ".icon-language:before {content:\"\\e9d5\";}" + "\n";
  h = h + ".icon-laptop:before {content:\"\\e9d6\";}" + "\n";
  h = h + ".icon-lastfm:before {content:\"\\e9d7\";}" + "\n";
  h = h + ".icon-lastfm-with-circle:before {content:\"\\e9d8\";}" + "\n";
  h = h + ".icon-layers:before {content:\"\\e9d9\";}" + "\n";
  h = h + ".icon-leaf:before {content:\"\\e9da\";}" + "\n";
  h = h + ".icon-level-down:before {content:\"\\e9db\";}" + "\n";
  h = h + ".icon-level-up:before {content:\"\\e9dc\";}" + "\n";
  h = h + ".icon-lifebuoy:before {content:\"\\e9dd\";}" + "\n";
  h = h + ".icon-light-bulb:before {content:\"\\e9de\";}" + "\n";
  h = h + ".icon-light-down:before {content:\"\\e9df\";}" + "\n";
  h = h + ".icon-light-up:before {content:\"\\e9e0\";}" + "\n";
  h = h + ".icon-line-graph:before {content:\"\\e9e1\";}" + "\n";
  h = h + ".icon-link:before {content:\"\\e9e2\";}" + "\n";
  h = h + ".icon-linkedin:before {content:\"\\e9e3\";}" + "\n";
  h = h + ".icon-linkedin-with-circle:before {content:\"\\e9e4\";}" + "\n";
  h = h + ".icon-list:before {content:\"\\e9e5\";}" + "\n";
  h = h + ".icon-location:before {content:\"\\e9e6\";}" + "\n";
  h = h + ".icon-location-pin:before {content:\"\\e9e7\";}" + "\n";
  h = h + ".icon-lock:before {content:\"\\e9e8\";}" + "\n";
  h = h + ".icon-lock-open:before {content:\"\\e9e9\";}" + "\n";
  h = h + ".icon-login:before {content:\"\\e9ea\";}" + "\n";
  h = h + ".icon-log-out:before {content:\"\\e9eb\";}" + "\n";
  h = h + ".icon-loop:before {content:\"\\e9ec\";}" + "\n";
  h = h + ".icon-magnet:before {content:\"\\e9ed\";}" + "\n";
  h = h + ".icon-magnifying-glass:before {content:\"\\e9ee\";}" + "\n";
  h = h + ".icon-mail:before {content:\"\\e9ef\";}" + "\n";
  h = h + ".icon-mail-with-circle:before {content:\"\\e9f0\";}" + "\n";
  h = h + ".icon-man:before {content:\"\\e9f1\";}" + "\n";
  h = h + ".icon-map:before {content:\"\\e9f2\";}" + "\n";
  h = h + ".icon-mask:before {content:\"\\e9f3\";}" + "\n";
  h = h + ".icon-medal:before {content:\"\\e9f4\";}" + "\n";
  h = h + ".icon-medium:before {content:\"\\e9f5\";}" + "\n";
  h = h + ".icon-medium-with-circle:before {content:\"\\e9f6\";}" + "\n";
  h = h + ".icon-megaphone:before {content:\"\\e9f7\";}" + "\n";
  h = h + ".icon-menu:before {content:\"\\e9f8\";}" + "\n";
  h = h + ".icon-merge:before {content:\"\\e9f9\";}" + "\n";
  h = h + ".icon-message:before {content:\"\\e9fa\";}" + "\n";
  h = h + ".icon-mic:before {content:\"\\e9fb\";}" + "\n";
  h = h + ".icon-minus:before {content:\"\\e9fc\";}" + "\n";
  h = h + ".icon-mixi:before {content:\"\\e9fd\";}" + "\n";
  h = h + ".icon-mobile:before {content:\"\\e9fe\";}" + "\n";
  h = h + ".icon-modern-mic:before {content:\"\\e9ff\";}" + "\n";
  h = h + ".icon-moon:before {content:\"\\ea00\";}" + "\n";
  h = h + ".icon-mouse:before {content:\"\\ea01\";}" + "\n";
  h = h + ".icon-mouse-pointer:before {content:\"\\ea02\";}" + "\n";
  h = h + ".icon-music:before {content:\"\\ea03\";}" + "\n";
  h = h + ".icon-network:before {content:\"\\ea04\";}" + "\n";
  h = h + ".icon-new:before {content:\"\\ea05\";}" + "\n";
  h = h + ".icon-new-message:before {content:\"\\ea06\";}" + "\n";
  h = h + ".icon-news:before {content:\"\\ea07\";}" + "\n";
  h = h + ".icon-newsletter:before {content:\"\\ea08\";}" + "\n";
  h = h + ".icon-note:before {content:\"\\ea09\";}" + "\n";
  h = h + ".icon-notification:before {content:\"\\ea0a\";}" + "\n";
  h = h + ".icon-notifications-off:before {content:\"\\ea0b\";}" + "\n";
  h = h + ".icon-old-mobile:before {content:\"\\ea0c\";}" + "\n";
  h = h + ".icon-old-phone:before {content:\"\\ea0d\";}" + "\n";
  h = h + ".icon-onedrive:before {content:\"\\ea0e\";}" + "\n";
  h = h + ".icon-open-book:before {content:\"\\ea0f\";}" + "\n";
  h = h + ".icon-palette:before {content:\"\\ea10\";}" + "\n";
  h = h + ".icon-paper-plane:before {content:\"\\ea11\";}" + "\n";
  h = h + ".icon-paypal:before {content:\"\\ea12\";}" + "\n";
  h = h + ".icon-pencil:before {content:\"\\ea13\";}" + "\n";
  h = h + ".icon-phone:before {content:\"\\ea14\";}" + "\n";
  h = h + ".icon-picasa:before {content:\"\\ea15\";}" + "\n";
  h = h + ".icon-pie-chart:before {content:\"\\ea16\";}" + "\n";
  h = h + ".icon-pin:before {content:\"\\ea17\";}" + "\n";
  h = h + ".icon-pinterest:before {content:\"\\ea18\";}" + "\n";
  h = h + ".icon-pinterest-with-circle:before {content:\"\\ea19\";}" + "\n";
  h = h + ".icon-plus:before {content:\"\\ea1a\";}" + "\n";
  h = h + ".icon-popup:before {content:\"\\ea1b\";}" + "\n";
  h = h + ".icon-power-plug:before {content:\"\\ea1c\";}" + "\n";
  h = h + ".icon-price-ribbon:before {content:\"\\ea1d\";}" + "\n";
  h = h + ".icon-price-tag:before {content:\"\\ea1e\";}" + "\n";
  h = h + ".icon-print:before {content:\"\\ea1f\";}" + "\n";
  h = h + ".icon-progress-empty:before {content:\"\\ea20\";}" + "\n";
  h = h + ".icon-progress-full:before {content:\"\\ea21\";}" + "\n";
  h = h + ".icon-progress-one:before {content:\"\\ea22\";}" + "\n";
  h = h + ".icon-progress-two:before {content:\"\\ea23\";}" + "\n";
  h = h + ".icon-publish:before {content:\"\\ea24\";}" + "\n";
  h = h + ".icon-qq:before {content:\"\\ea25\";}" + "\n";
  h = h + ".icon-qq-with-circle:before {content:\"\\ea26\";}" + "\n";
  h = h + ".icon-quote:before {content:\"\\ea27\";}" + "\n";
  h = h + ".icon-radio:before {content:\"\\ea28\";}" + "\n";
  h = h + ".icon-raft:before {content:\"\\ea29\";}" + "\n";
  h = h + ".icon-raft-with-circle:before {content:\"\\ea2a\";}" + "\n";
  h = h + ".icon-rainbow:before {content:\"\\ea2b\";}" + "\n";
  h = h + ".icon-rdio:before {content:\"\\ea2c\";}" + "\n";
  h = h + ".icon-rdio-with-circle:before {content:\"\\ea2d\";}" + "\n";
  h = h + ".icon-remove-user:before {content:\"\\ea2e\";}" + "\n";
  h = h + ".icon-renren:before {content:\"\\ea2f\";}" + "\n";
  h = h + ".icon-reply:before {content:\"\\ea30\";}" + "\n";
  h = h + ".icon-reply-all:before {content:\"\\ea31\";}" + "\n";
  h = h + ".icon-resize-100:before {content:\"\\ea32\";}" + "\n";
  h = h + ".icon-resize-full-screen:before {content:\"\\ea33\";}" + "\n";
  h = h + ".icon-retweet:before {content:\"\\ea34\";}" + "\n";
  h = h + ".icon-rocket:before {content:\"\\ea35\";}" + "\n";
  h = h + ".icon-round-brush:before {content:\"\\ea36\";}" + "\n";
  h = h + ".icon-rss:before {content:\"\\ea37\";}" + "\n";
  h = h + ".icon-ruler:before {content:\"\\ea38\";}" + "\n";
  h = h + ".icon-save:before {content:\"\\ea39\";}" + "\n";
  h = h + ".icon-scissors:before {content:\"\\ea3a\";}" + "\n";
  h = h + ".icon-scribd:before {content:\"\\ea3b\";}" + "\n";
  h = h + ".icon-select-arrows:before {content:\"\\ea3c\";}" + "\n";
  h = h + ".icon-share:before {content:\"\\ea3d\";}" + "\n";
  h = h + ".icon-shareable:before {content:\"\\ea3e\";}" + "\n";
  h = h + ".icon-share-alternative:before {content:\"\\ea3f\";}" + "\n";
  h = h + ".icon-shield:before {content:\"\\ea40\";}" + "\n";
  h = h + ".icon-shop:before {content:\"\\ea41\";}" + "\n";
  h = h + ".icon-shopping-bag:before {content:\"\\ea42\";}" + "\n";
  h = h + ".icon-shopping-basket:before {content:\"\\ea43\";}" + "\n";
  h = h + ".icon-shopping-cart:before {content:\"\\ea44\";}" + "\n";
  h = h + ".icon-shuffle:before {content:\"\\ea45\";}" + "\n";
  h = h + ".icon-signal:before {content:\"\\ea46\";}" + "\n";
  h = h + ".icon-sina-weibo:before {content:\"\\ea47\";}" + "\n";
  h = h + ".icon-skype:before {content:\"\\ea48\";}" + "\n";
  h = h + ".icon-skype-with-circle:before {content:\"\\ea49\";}" + "\n";
  h = h + ".icon-slideshare:before {content:\"\\ea4a\";}" + "\n";
  h = h + ".icon-smashing:before {content:\"\\ea4b\";}" + "\n";
  h = h + ".icon-sound:before {content:\"\\ea4c\";}" + "\n";
  h = h + ".icon-soundcloud:before {content:\"\\ea4d\";}" + "\n";
  h = h + ".icon-sound-mix:before {content:\"\\ea4e\";}" + "\n";
  h = h + ".icon-sound-mute:before {content:\"\\ea4f\";}" + "\n";
  h = h + ".icon-sports-club:before {content:\"\\ea50\";}" + "\n";
  h = h + ".icon-spotify:before {content:\"\\ea51\";}" + "\n";
  h = h + ".icon-spotify-with-circle:before {content:\"\\ea52\";}" + "\n";
  h = h + ".icon-spreadsheet:before {content:\"\\ea53\";}" + "\n";
  h = h + ".icon-squared-cross:before {content:\"\\ea54\";}" + "\n";
  h = h + ".icon-squared-minus:before {content:\"\\ea55\";}" + "\n";
  h = h + ".icon-squared-plus:before {content:\"\\ea56\";}" + "\n";
  h = h + ".icon-star:before {content:\"\\ea57\";}" + "\n";
  h = h + ".icon-star-outlined:before {content:\"\\ea58\";}" + "\n";
  h = h + ".icon-stopwatch:before {content:\"\\ea59\";}" + "\n";
  h = h + ".icon-stumbleupon:before {content:\"\\ea5a\";}" + "\n";
  h = h + ".icon-stumbleupon-with-circle:before {content:\"\\ea5b\";}" + "\n";
  h = h + ".icon-suitcase:before {content:\"\\ea5c\";}" + "\n";
  h = h + ".icon-swap:before {content:\"\\ea5d\";}" + "\n";
  h = h + ".icon-swarm:before {content:\"\\ea5e\";}" + "\n";
  h = h + ".icon-sweden:before {content:\"\\ea5f\";}" + "\n";
  h = h + ".icon-switch:before {content:\"\\ea60\";}" + "\n";
  h = h + ".icon-tablet:before {content:\"\\ea61\";}" + "\n";
  h = h + ".icon-tablet-mobile-combo:before {content:\"\\ea62\";}" + "\n";
  h = h + ".icon-tag:before {content:\"\\ea63\";}" + "\n";
  h = h + ".icon-text:before {content:\"\\ea64\";}" + "\n";
  h = h + ".icon-text-document:before {content:\"\\ea65\";}" + "\n";
  h = h + ".icon-text-document-inverted:before {content:\"\\ea66\";}" + "\n";
  h = h + ".icon-thermometer:before {content:\"\\ea67\";}" + "\n";
  h = h + ".icon-thumbs-down:before {content:\"\\ea68\";}" + "\n";
  h = h + ".icon-thumbs-up:before {content:\"\\ea69\";}" + "\n";
  h = h + ".icon-thunder-cloud:before {content:\"\\ea6a\";}" + "\n";
  h = h + ".icon-ticket:before {content:\"\\ea6b\";}" + "\n";
  h = h + ".icon-time-slot:before {content:\"\\ea6c\";}" + "\n";
  h = h + ".icon-tools:before {content:\"\\ea6d\";}" + "\n";
  h = h + ".icon-traffic-cone:before {content:\"\\ea6e\";}" + "\n";
  h = h + ".icon-trash:before {content:\"\\ea6f\";}" + "\n";
  h = h + ".icon-tree:before {content:\"\\ea70\";}" + "\n";
  h = h + ".icon-triangle-down:before {content:\"\\ea71\";}" + "\n";
  h = h + ".icon-triangle-left:before {content:\"\\ea72\";}" + "\n";
  h = h + ".icon-triangle-right:before {content:\"\\ea73\";}" + "\n";
  h = h + ".icon-triangle-up:before {content:\"\\ea74\";}" + "\n";
  h = h + ".icon-tripadvisor:before {content:\"\\ea75\";}" + "\n";
  h = h + ".icon-trophy:before {content:\"\\ea76\";}" + "\n";
  h = h + ".icon-tumblr:before {content:\"\\ea77\";}" + "\n";
  h = h + ".icon-tumblr-with-circle:before {content:\"\\ea78\";}" + "\n";
  h = h + ".icon-tv:before {content:\"\\ea79\";}" + "\n";
  h = h + ".icon-twitter:before {content:\"\\ea7a\";}" + "\n";
  h = h + ".icon-twitter-with-circle:before {content:\"\\ea7b\";}" + "\n";
  h = h + ".icon-typing:before {content:\"\\ea7c\";}" + "\n";
  h = h + ".icon-uninstall:before {content:\"\\ea7d\";}" + "\n";
  h = h + ".icon-unread:before {content:\"\\ea7e\";}" + "\n";
  h = h + ".icon-untag:before {content:\"\\ea7f\";}" + "\n";
  h = h + ".icon-upload:before {content:\"\\ea80\";}" + "\n";
  h = h + ".icon-upload-to-cloud:before {content:\"\\ea81\";}" + "\n";
  h = h + ".icon-user:before {content:\"\\ea82\";}" + "\n";
  h = h + ".icon-users:before {content:\"\\ea83\";}" + "\n";
  h = h + ".icon-v-card:before {content:\"\\ea84\";}" + "\n";
  h = h + ".icon-video:before {content:\"\\ea85\";}" + "\n";
  h = h + ".icon-video-camera:before {content:\"\\ea86\";}" + "\n";
  h = h + ".icon-vimeo:before {content:\"\\ea87\";}" + "\n";
  h = h + ".icon-vimeo-with-circle:before {content:\"\\ea88\";}" + "\n";
  h = h + ".icon-vine:before {content:\"\\ea89\";}" + "\n";
  h = h + ".icon-vine-with-circle:before {content:\"\\ea8a\";}" + "\n";
  h = h + ".icon-vinyl:before {content:\"\\ea8b\";}" + "\n";
  h = h + ".icon-vk:before {content:\"\\ea8c\";}" + "\n";
  h = h + ".icon-vk-alternitive:before {content:\"\\ea8d\";}" + "\n";
  h = h + ".icon-vk-with-circle:before {content:\"\\ea8e\";}" + "\n";
  h = h + ".icon-voicemail:before {content:\"\\ea8f\";}" + "\n";
  h = h + ".icon-wallet:before {content:\"\\ea90\";}" + "\n";
  h = h + ".icon-warning:before {content:\"\\ea91\";}" + "\n";
  h = h + ".icon-water:before {content:\"\\ea92\";}" + "\n";
  h = h + ".icon-windows-store:before {content:\"\\ea93\";}" + "\n";
  h = h + ".icon-xing:before {content:\"\\ea94\";}" + "\n";
  h = h + ".icon-xing-with-circle:before {content:\"\\ea95\";}" + "\n";
  h = h + ".icon-yelp:before {content:\"\\ea96\";}" + "\n";
  h = h + ".icon-youko:before {content:\"\\ea97\";}" + "\n";
  h = h + ".icon-youko-with-circle:before {content:\"\\ea98\";}" + "\n";
  h = h + ".icon-youtube:before {content:\"\\ea99\";}" + "\n";
  h = h + ".icon-youtube-with-circle:before {content:\"\\ea9a\";}" + "\n";
  h = h + "</style>" + "\n";
 }

 h = h + "<style>" + "\n\n";
 h = h + "</style>" + "\n";

 // Adobe Fonts
 if ((document.getElementById('chkAdobeFonts').checked == true) && (adobe_fonts_string != "")) {
  h = h + "<!-- Adobe Edge Web Fonts https://edgewebfonts.adobe.com/ -->" + "\n";
  h = h + "<scr" + "ipt src=\"http://use.edgefonts.net/" + adobe_fonts_string.replace(/\u0022/g, "&quot;") + ".js\"></scr" + "ipt>" + "\n";
 }

// HTML5 Shiv
 if (document.getElementById('chkHTML5Shiv').checked == true) {
  h = h + "<!-- html5shiv.js: Enables HTML5 sectioning elements in legacy IE (https://github.com/afarkas/html5shiv) -->" + "\n";
  h = h + "<!-- respond.js: Enables min/max-width CSS3 media queries in legacy IE (https://github.com/scottjehl/Respond) -->" + "\n";
  h = h + "<!--[if lt IE 9]>" + "\n";
  h = h + "<scr" + "ipt src=\"https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js\"></scr" + "ipt>" + "\n";
  h = h + "<scr" + "ipt src=\"https://oss.maxcdn.com/respond/1.4.2/respond.min.js\"></scr" + "ipt>" + "\n";
  h = h + "<![endif]-->" + "\n";
 }

 // jQuery
 if (document.getElementById('chkjquery').checked == true) {
  h = h + "<!-- jQuery v1.12 (for legacy IE) https://jquery.com/ -->" + "\n";
  h = h + "<!--[if lt IE 9]>" + "\n";
  h = h + "<scr" + "ipt src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js\" defer></scr" + "ipt>" + "\n";
  h = h + "<![endif]-->" + "\n";
  h = h + "<!-- jQuery v2.2.0 (for modern browsers) https://jquery.com/ -->" + "\n";
  h = h + "<!--[if gte IE 9]><!-->" + "\n";
  h = h + "<scr" + "ipt src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js\" defer></scr" + "ipt>" + "\n";
  h = h + "<!--<![endif]-->" + "\n";
  // jQuery UI
  if (document.getElementById('chkjqueryUI').checked == true) {
   h = h + "<link rel=\"stylesheet\" href=\"https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css\">" + "\n";
   h = h + "<scr" + "ipt src=\"https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js\" defer></scr" + "ipt>" + "\n";
  }
  // jQuery Mobile
  if (document.getElementById('chkjqueryMobile').checked == true) {
   h = h + "<link rel=\"stylesheet\" href=\"https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.css\">" + "\n";
   h = h + "<scr" + "ipt src=\"https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.js\" defer></scr" + "ipt>" + "\n";
  }
 }

 // AngularJS
 if (document.getElementById('chkAngularJS').checked == true) {
  h = h + "<!-- AngularJS v1.5.0 https://angularjs.org/ -->" + "\n";
  h = h + "<scr" + "ipt src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min.js\"></scr" + "ipt>" + "\n";
  // Angular Material
  if (document.getElementById('chkAngularMaterial').checked == true) {
   h = h + "<scr" + "ipt src=\"http://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-animate.min.js\"></scr" + "ipt>" + "\n";
   h = h + "<scr" + "ipt src=\"http://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-aria.min.js\"></scr" + "ipt>" + "\n";
   h = h + "<scr" + "ipt src=\"http://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-messages.min.js\"></scr" + "ipt>" + "\n";
   h = h + "<scr" + "ipt src=\"http://ajax.googleapis.com/ajax/libs/angular_material/1.0.5/angular-material.min.js\"></scr" + "ipt>" + "\n";
   h = h + "<scr" + "ipt>angular.module('BlankApp', ['ngMaterial']);</scr" + "ipt>" + "\n";
  }
 }

 // MooTools
 if (document.getElementById('chkMooTools').checked == true) {
  h = h + "<!-- MooTools v1.6.0 http://mootools.net/ -->" + "\n";
  h = h + "<scr" + "ipt src=\"https://ajax.googleapis.com/ajax/libs/mootools/1.6.0/mootools.min.js\"></scr" + "ipt>" + "\n";
 }

 // HTML Kickstart
 if (document.getElementById('chkHTMLKickStart').checked == true) {
  h = h + "<!-- HTML Kickstart v0.94 http://www.99lime.com/elements/ -->" + "\n";
  h = h + "<scr" + "ipt src=\"https://cdn.jsdelivr.net/99lime/0.94/js/kickstart.js\" defer></scr" + "ipt>" + "\n";
  h = h + "<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/99lime/0.94/css/kickstart.css\" type=\"text/css\">" + "\n";
 }

 // Bootstrap
 if (document.getElementById('chkBootstrap').checked == true) {
  h = h + "<!-- Bootstrap v3.3.6 http://getbootstrap.com/ -->" + "\n";
  h = h + "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\" type=\"text/css\" integrity=\"sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7\" crossorigin=\"anonymous\">" + "\n";
  h = h + "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css\" type=\"text/css\" integrity=\"sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r\" crossorigin=\"anonymous\">" + "\n";
  h = h + "<scr" + "ipt src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js\" integrity=\"sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS\" crossorigin=\"anonymous\" defer></scr" + "ipt>" + "\n";
 }

 if (document.getElementById('txtJS').value != "") {
  h = h + "<scr" + "ipt type=\"text/javascript\" src=\"" + document.getElementById('txtJS').value.replace(/\u0022/g, "&quot;") + "\"" + (((document.getElementById('lblJS3').textContent=="async")||(document.getElementById('lblJS3').textContent=="defer")) ? " " : "") + document.getElementById('lblJS3').textContent.trim() + "></scr" + "ipt>" + "\n";
 }
 if (document.getElementById('chkCrossSite').checked == false) {
  h = h + "<scr" + "ipt>" + "\n" + "\n";
  h = h + "</scr" + "ipt>" + "\n";
 }
 h = h + "</head>" + "\n";
 h = h + "<body>" + "\n" + "\n";
 h = h + "</body>" + "\n";
 h = h + "</html>";

 document.getElementById('txtResults').value = h;
 //document.getElementById('txtResults').focus();

 cm_textarea.setValue(h);
 cm_textarea.focus();
 cm_textarea.execCommand("selectAll");

}