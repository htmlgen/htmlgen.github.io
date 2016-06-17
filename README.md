# What is it?
This tool is similar in nature to <a href="https://html5boilerplate.com/">html5boilerplate.com</a>, <a href="http://www.initializr.com/">initializr.com</a>, <a href="http://htmlshell.com/">htmlshell.com</a> or <a href="http://sanusart.github.io/html-now/">sanusart.github.io/html-now/</a>. It is a free configurable boilerplate you can use to quickly generate the starting code necessary for any <a href="https://en.wikipedia.org/wiki/HTML5">HTML5</a> project.

Over time I plan to add more features and make it a more fleshed out and complete visual HTML designer but for right now it just focuses on the `<HEAD>` element and generates code for all of the possible things you might want to include there.

<h3 align="center">Video Overview</h3>
<p align="center">
<a href="https://www.youtube.com/watch?v=3XLIFoHowho" target="_blank"><img src="http://img.youtube.com/vi/xvbjsCh7ObQ/0.jpg" alt="HTMLGen Video Tutorial"></a>
</p>

# How do I use it?
Visit <a href="http://htmlgen.github.io/" target="_blank">htmlgen.github.io</a>. On the left side of the screen you should see a menu with these options...

`<HEAD>`<br>
`<BODY>`<br>
`<HEADER>`<br>
`<MAIN>`<br>
`<FOOTER>`<br>
`Get HTML`<br>

These represent the different sections of your page which you can configure individually. Once you're finished customizing each section you can press the `Get HTML` button to generate all the HTML code for you which you can easily copy and paste into your favorite <a href="https://en.wikipedia.org/wiki/List_of_HTML_editors">HTML editor</a> (such as <a href="http://brackets.io/">Brackets</a> or <a href="https://notepad-plus-plus.org/">Notepad++</a>).

## `<HEAD>`

This page allows you to configure everything that appears in the <a href="https://www.w3.org/TR/html5/document-metadata.html#the-head-element">`<HEAD>`</a> element of your HTML document.

<b>`<html lang="en">`</b><br>
The <a href="https://www.w3.org/TR/html5/dom.html#attr-lang">lang</a> attribute of the `<html>` element tells browsers what language the page is written in. `en` (English) is pre-filled in by default but if you click on the "Look Up" link you can specify any language of your choosing and it will automatically fill in the correct `lang` code for you including both language and region.

Quote from the <a href="https://www.w3.org/International/questions/qa-html-language-declarations">W3C</a>...<br>
<em>
"Always use a language attribute on the `<html>` element. This is inherited by all other elements, and so will set a default language for the text in the document head element. You should use the `<html>` element rather than the `<body>` element since the `<body>` element doesn't cover the text inside the document's `<head>` element."
</em>

For example if you press "Look Up" and type `english` as your language and `canada` as your region it will fill in `en-CA` as your `lang` attribute. It features a built in look-up table of 8,094 languages and 251 regions so you don't have to go consulting a <a href="http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry">huge list like this</a> every time.

<b>Content-Security-Policy</b><br>
Checking the `Content-Security-Policy` checkbox allows you to customize a `Content-Security-Policy` `<META>` tag which will be included with your HTML. <a href="https://en.wikipedia.org/wiki/Content_Security_Policy">Content-Security-Policy</a> (CSP) aims to prevent cross-site scripting (XSS), clickjacking and other code injection attacks resulting from execution of malicious content in the trusted web page context. Basically it allows you to precisely control and configure where dynamic resources are allowed to load from in your page.

An example `Content-Security-Policy` might look like this...

`<meta http-equiv="Content-Security-Policy" content="default-src 'self'">`<br>

This only allows dynamic resources from the <b>same origin</b> to be loaded. For more details and examples of how `Content-Security-Policy` can be used you can check out <a href="http://content-security-policy.com/">content-security-policy.com</a> or <a href="https://en.wikipedia.org/wiki/Content_Security_Policy">Wikipedia</a> or <a href="https://www.youtube.com/watch?v=pocsv39pNXA">YouTube</a>.

<b>Do not cache</b><br>
Checking the `Do not cache` checkbox will add the following lines of codes to your HTML to instruct the browser to not cache the page.

`<meta http-equiv="expires" content="0">`<br>
`<meta http-equiv="pragma" content="no-cache">`<br>
`<meta http-equiv="cache-control" content="no-cache">`<br>

<b>HTML5 Shiv</b><br>
<a href="https://github.com/afarkas/html5shiv">HTML5 Shiv</a> is an ongoing GitHub project which attempts to make HTML5 sectioning elements display correctly in Internet Explorer 6-9, Safari 4.x (and iPhone 3.x), and Firefox 3.x. Checking this checkbox will include the following lines of code in your HTML...

`<!-- html5shiv.js: Enables HTML5 sectioning elements in legacy IE (`<a href="https://github.com/afarkas/html5shiv">https://github.com/afarkas/html5shiv</a>`) -->`<br>
`<!-- respond.js: Enables min/max-width CSS3 media queries in legacy IE (`<a href="https://github.com/scottjehl/Respond">https://github.com/scottjehl/Respond</a>`) -->`<br>
`<!--[if lt IE 9]>`<br>
`<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>`<br>
`<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>`<br>
`<![endif]-->`<br>

<b>`<title> ... </title>`</b><br>
This textbox allows you to type in the <a href="https://www.w3.org/TR/html5/document-metadata.html#the-title-element">title</a> of your document. If you care about SEO you should keep it under 70 characters (<a href="https://moz.com/learn/seo/title-tag">preferably in the 50-60 character range</a>).

<b>`<meta name="description" content="` ...  `">`</b><br>
This textbox allows you to type in your <a href="https://en.wikipedia.org/wiki/Meta_element#The_description_attribute">meta description</a>. If you care about SEO your description should ideally be <a href="https://moz.com/learn/seo/meta-description">150-160 characters</a> long.

<b>`<meta name="keywords" content="` ...  `">`</b><br>
As of 2009 Google <a href="https://googlewebmastercentral.blogspot.com/2009/09/google-does-not-use-keywords-meta-tag.html">has stated</a> that they no longer use `<meta name="keywords">` in their search ranking algorithm so this tool does not include them. They are generally considered irrelevant for modern SEO.

<b>`<meta name="robots" content="` ...  `">`</b><br>
The <a href="https://developers.google.com/webmasters/control-crawl-index/docs/robots_meta_tag?csw=1">meta robots tag</a> controls how search engines crawl and index your page. It supports the following options...

<b>`noindex`</b>: Do not show this page in search results and do not show a "Cached" link in search results.<br>
<b>`nofollow`</b>: Do not follow the links on this page<br>
<b>`noodp`</b>: Do not use metadata from the <a href="http://www.dmoz.org/">Open Directory project</a> for titles or snippets shown for this page<br>
<b>`notranslate`</b>: Do not offer translation of this page in search results<br>
<b>`noarchive`</b>: Do not show a "Cached" link in search results<br>
<b>`nosnippet`</b>: Do not show a snippet in the search results for this page<br>
<b>`noimageindex`</b>: Do not index images on this page<br>
<b>`unavailable_after`</b>: [RFC-850 date/time] Do not show this page in search results after the specified date/time. The date/time must be specified in the RFC 850 format (example: 25-Aug-2007 15:00:00 EST)<br>

<b>`<meta name="viewport" content="` ...  `">`</b><br>
The <a href="https://developers.google.com/web/fundamentals/design-and-ui/responsive/fundamentals/set-the-viewport?hl=en">meta viewport tag</a> controls how the page is displayed on mobile devices. The <a href="http://blog.javierusobiaga.com/stop-using-the-viewport-tag-until-you-know-ho">consensus</a> among most modern web developers for the best user experience on mobile is to use the following as your meta viewport...

`<meta name="viewport" content="width=device-width, initial-scale=1">`<br>

<b>`<base href="` ... `" target="_self">`</b><br>
The <a href="https://www.w3.org/TR/html5/document-metadata.html#the-base-element">`<base>`</a> element specifies the document base URL for the purposes of resolving relative URLs and the name of the default browsing context for the purposes of following hyperlinks. The `target` attribute may be set to:

<b>`_self`</b> or (blank): current window<br>
<b>`_blank`</b>: new window<br>
<b>`_parent`</b>: parent window<br>
<b>`_top`</b>: topmost window<br>
<b>`custom window name`</b>: specificed window<br>

<b>`<link rel="canonical" href="` ... `">`</b><br>
The <a href="https://support.google.com/webmasters/answer/139066?hl=en#2">rel="canonical" link element</a> is a strong hint to search engines about which preferred version of the page to index among duplicate versions on the web.

<b>`<link rel="icon" href="` ... `" sizes="16x16" type="image/x-icon">`</b><br>
The <a href="https://www.w3.org/TR/html5/links.html#rel-icon">rel="icon" link element</a> specifies a <a href="https://en.wikipedia.org/wiki/Favicon">favicon</a> representing the page or site and should be used by the user agent when representing the page in the user interface.

For historical reasons the icon keyword may be preceded by the keyword "shortcut". If the "shortcut" keyword is present, it must come immediately before the icon keyword and the two keywords must be separated by only a single space.

<b>`<link rel="alternate" type="application/atom+xml" href="` ... `">`</b><br>
This box allows you to specify the URL of your site's <a href="https://en.wikipedia.org/wiki/RSS">RSS</a> or <a href="https://en.wikipedia.org/wiki/Atom_(standard)">Atom feed</a>. The first <a href="https://www.w3.org/TR/html5/links.html#rel-alternate">link element</a> in the document with the `alternate` keyword used with the `type` attribute set to the value `application/rss+xml` or `application/atom+xml` is treated as the default syndication feed for the purposes of feed autodiscovery.

<b>`<link rel="stylesheet" type="text/css" href="` ... `">`</b><br>
This box allows you to specify an external <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets">CSS stylesheet</a> you would like to include with your page.

Specifying `type="text/css"` is <a href="https://www.w3.org/TR/html51/semantics.html#the-style-element">technically unnecassary</a> in HTML5 as it is the default but it is a personal preference of mine. You are always free to delete it later if you don't want it.

<b>`Normalize`</b><br>
Checking this checkbox will include the very popular <a href="http://necolas.github.io/normalize.css/">Normalize.css</a> which is a collection of CSS properties that is intended to make browsers render all elements more consistently and in line with modern standards. For the purposes of quick testing and debugging it is placed in a `<STYLE>` element but for production purposes it is recommended to move it to an external stylesheet and use the `<link rel="stylesheet" href="...">` syntax.

<b>`<script type="text/javascript" src="` ... `" async></script>`</b><br>
This box allows you to specify an external <a href="https://en.wikipedia.org/wiki/JavaScript">javascript</a> file you would like to include with your page.

<a href="https://www.w3.org/TR/html51/semantics.html#the-script-element">New in HTML5</a> is the ability to specify an <b>`async`</b> or <b>`defer`</b> attribute with your script that indicates when the script should be executed. These only have effect when used with the <b>`src`</b> attribute.

<b>`async`</b>: the script will be executed as soon as it is available, but without blocking further parsing of the page<br>
<b>`defer`</b>: the script will be executed when the page has finished parsing<br>
<b>`default`</b>: the script is fetched and executed immediately, before the user agent continues parsing the page<br>

The <b>`defer`</b> attribute may be specified even if the <b>`async`</b> attribute is specified to cause legacy web browsers that only support <b>`defer`</b> (and not <b>`async`</b>) to fall back to the <b>`defer`</b> behaviour instead of the blocking behaviour that is the default.

Specifying `type="text/javascript"` is <a href="https://www.w3.org/TR/html51/semantics.html#the-script-element">technically unnecassary</a> in HTML5 as it is the default but it is a personal preference of mine. You are always free to delete it later if you don't want it.

<b>`<meta http-equiv="refresh" content="` ... `; URL=` ... `">`</b><br>
The <a href="https://www.w3.org/TR/html51/semantics.html#attr-meta-http-equiv-refresh">`http-equiv="refresh" meta element`</a> acts as a timed redirect. If you just fill in <b>`content`</b> the page will automatically reload itself after that number of seconds has elapsed. If you fill in both <b>`content`</b> and <b>`URL`</b> the page will redirect do that desired page after X number of seconds. For example...

`<meta http-equiv="refresh" content="300">`<br>
will automatically reload the page from the server every 5 minutes<br>

`<meta http-equiv="refresh" content="20; URL=page4.html">`<br>
will automatically redirect to page4.html after 20 seconds has passed<br>

<b>`<meta name="application-name" content="` ... `">`</b><br>
The <a href="https://www.w3.org/TR/html5/document-metadata.html#meta-application-name">meta application name</a> allows you to optionally specify a short free-form string giving the name of the Web application that the page represents. If the page is not a Web application the `application-name` metadata name must not be used. User agents may use the application name in UI in preference to the page's title, since the title might include status messages and the like relevant to the status of the page at a particular moment in time instead of just being the name of the application.

<b>`<meta name="author" content="` ... `">`</b><br>
The <a href="https://www.w3.org/TR/html5/document-metadata.html#meta-author">meta author name</a> allows you to optionally specify a free-form string giving the name of one of the page's authors.

<b>`<link rel="author" href="` ... `">`</b><br>
The <a href="https://www.w3.org/TR/html5/links.html#link-type-author">rel="author" link</a> allows you to optionally specify a URL of the page author, typically a Google+ profile URL. You can find out more information in <a href="https://www.youtube.com/watch?v=FgFb6Y-UJUI">this YouTube video</a> or <a href="https://yoast.com/push-rel-author-head/">this article on Yoast</a>.

<b>`<meta name="google-site-verification" content="` ... `">`</b><br>
If you use <a href="https://www.google.com/webmasters/tools/home">Google Webmaster Tools</a> you can use this tag on the top-level page of your site to verify ownership for Search Console. Th `content` attribute must match exactly what is provided to you from Google (including upper and lower case).

<b>`jQuery`</b><br>
Checking this checkbox will add jQuery to your page. <a href="https://en.wikipedia.org/wiki/JQuery">jQuery</a> is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML. jQuery is the most popular JavaScript library in use today, with installation on 65% of the top 10 million highest-trafficked sites on the Web. It will add the following lines of code to your HTML...

`<!-- jQuery v1.12 (for legacy IE) https://jquery.com/ -->`<br>
`<!--[if lt IE 9]>`<br>
`<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js" defer></script>`<br>
`<![endif]-->`<br>
`<!-- jQuery v2.2.0 (for modern browsers) https://jquery.com/ -->`<br>
`<!--[if gte IE 9]><!-->`<br>
`<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js" defer></script>`<br>
`<!--<![endif]-->`<br>

<b>`jQuery UI`</b><br>
Checking this checkbox will add jQuery UI to your page. <a href="https://en.wikipedia.org/wiki/JQuery_UI">jQuery UI</a> is a collection of GUI widgets, animated visual effects and themes implemented with jQuery, CSS and HTML. It will add the following lines of code to your HTML...

`<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css">`<br>
`<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js" defer></script>`<br>

<b>`jQuery Mobile`</b><br>
Checking this checkbox will add jQuery Mobile to your page. <a href="https://en.wikipedia.org/wiki/JQuery_Mobile">jQuery Mobile</a> is a touch-optimized web framework currently being developed by the jQuery project team. It will add the following lines of code to your HTML...

`<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.css">`<br>
`<script src="https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.js" defer></script>`<br>

<b>`AngularJS`</b><br>
Checking this checkbox will add AngularJS to your page. <a href="https://en.wikipedia.org/wiki/AngularJS">AngularJS</a> is an open-source web application framework maintained by Google to address many of the challenges encountered in developing single-page applications. It aims to simplify both the development and the testing of such applications by providing a framework for client-side model–view–controller (MVC) and model–view–viewmodel (MVVM) architectures, along with components commonly used in rich Internet applications. It will add the following lines of code to your HTML...

`<!-- AngularJS v1.5.0 https://angularjs.org/ -->`<br>
`<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min.js"></script>`<br>

<b>`Angular Material`</b><br>
Checking this checkbox will add Angular Material to your page. <a href="https://material.angularjs.org/">Angular Material</a> is the reference implementation of Google's Material Design Specification. It provides a set of reusable, well-tested, and accessible UI components based on Material Design. It will add the following lines of code to your HTML...

`<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-animate.min.js"></script>`<br>
`<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-aria.min.js"></script>`<br>
`<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-messages.min.js"></script>`<br>
`<script src="http://ajax.googleapis.com/ajax/libs/angular_material/1.0.5/angular-material.min.js"></script>`<br>
`<script>angular.module('BlankApp', ['ngMaterial']);</script>`<br>

<b>`MooTools`</b><br>
Checking this checkbox will add MooTools to your page. <a href="https://en.wikipedia.org/wiki/MooTools">MooTools</a> (My Object-Oriented Tools) is a lightweight, object-oriented JavaScript framework.  It is used on more than 4% of all websites and is one of the most popular JavaScript libraries. It will add the following lines of code to your HTML...

`<!-- MooTools v1.6.0 http://mootools.net/ -->`<br>
`<script src="https://ajax.googleapis.com/ajax/libs/mootools/1.6.0/mootools.min.js"></script>`<br>

<b>`Add Twitter Tags`</b><br>
Checking this checkbox allows you to optionally add a <a href="https://dev.twitter.com/cards/types/summary">Twitter Summary Card</a> to the `<HEAD>` of your page. Twitter Summary Cards give the reader a preview of the content before clicking through to your website. It will add the following lines of code to your HTML...

`<!-- Twitter Metadata https://dev.twitter.com/cards/types/summary -->`<br>
`<meta name="twitter:card" content="summary">`<br>
`<meta name="twitter:site" content="@SiteName">`<br>
`<meta name="twitter:creator" content="@AuthorName">`<br>
`<meta name="twitter:title" content="Put page title here">`<br>
`<meta name="twitter:description" content="Put page description here">`<br>
`<meta name="twitter:image" content="Put URL of preview image here">`<br>

<b>`Add Facebook Tags`</b><br>
Checking this checkbox allows you to optionally add <a href="https://developers.facebook.com/docs/sharing/webmasters">Facebook Open Graph</a> metadata to the `<HEAD>` of your page. Open Graph data allows you to specify a title, description and preview image to display when your content gets shared on Facebook. It will add the following lines of code to your HTML...

`<!-- Facebook Metadata https://developers.facebook.com/docs/sharing/webmasters -->`<br>
`<meta property="og:locale" content="en_US">`<br>
`<meta property="og:type" content="article">` `<!-- can also be set to website -->`<br>
`<meta property="og:url" content="Put page URL here">`<br>
`<meta property="og:title" content="Put title here">`<br>
`<meta property="og:description" content="Put description here">`<br>
`<meta property="og:site_name" content="Put site name here">`<br>
`<meta property="og:image" content="Put URL of preview image here">`<br>
`<meta property="fb:app_id" content="Put Facebook app id here">`<br>
`<meta property="fb:profile_id" content="Put the Facebook ID of a user that can be followed here">`<br>
`<meta property="og:updated_time" content="2016-02-16T06:53:13+00:00">`<br>
`<meta property="article:modified_time" content="2016-02-16T06:53:13+00:00">`<br>
`<meta property="article:published_time" content="2016-02-16T06:53:13+00:00">`<br>
`<meta property="article:author" content="Facebook URL of author">`<br>
`<meta property="article:publisher" content="Facebook URL of publisher">`<br>
`<meta property="article:section" content="The section of your website to which the article belongs">`<br>
`<meta property="article:tag" content="keywords relevant to the article">`<br>

<b>`Add Google Fonts`</b><br>
Checking this checkbox allows you to add one or more <a href="https://www.google.com/fonts">Google Web Fonts</a> to your page. Multiple fonts can be separated with a comma. For example typing "Open Sans, Roboto" will include the following lines of code in your HTML...

`<!-- Google Web Fonts https://www.google.com/fonts -->`<br>
`<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto" type="text/css">`<br>

<b>`Add Adobe Fonts`</b><br>
Checking this checkbox allows you to add one or more <a href="https://edgewebfonts.adobe.com/">Adobe Edge Web Fonts</a> to your page. Multiple fonts can be separated with a comma. For example typing "Source Sans Pro, Source Code Pro" will include the following lines of code in your HTML...

`<!-- Adobe Edge Web Fonts https://edgewebfonts.adobe.com/ -->`<br>
`<script src="http://use.edgefonts.net/source-sans-pro;source-code-pro.js"></script>`<br>

<b>`Add FontAwesome Icons`</b><br>
Checking this checkbox allows you to add <a href="https://fortawesome.github.io/Font-Awesome/">FontAwesome</a> web icons to your page. It will add the following lines of code to your HTML...

`<!-- Font Awesome Web Icons v4.5.0 https://fortawesome.github.io/Font-Awesome/ -->`<br>
`<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" type="text/css">`<br>

To add an icon to your page you would use HTML like this...

`<i class="fa fa-camera-retro fa-lg"></i>`<br>

<b>`Add Entypo+ Icons`</b><br>
Checking this checkbox allows you to add <a href="http://www.entypo.com/">Entypo+</a> web icons to your page. It will add the following lines of code to your HTML...

`<!-- Entypo+ Web Icons v3.0 http://www.entypo.com/ -->`<br>
`<style>`<br>
`@font-face{font-family:entypo;src:url(base64 string) format('woff');font-weight:normal;font-style:normal;}`<br>
`i{font-family:entypo !important;...}`<br>
`.icon-ICON_NAME:before {content:"...";}`<br>
`</style>`<br>

To add an icon to your page you would use HTML like this...

`<i class="icon-aircraft"></i>`<br>

For offline testing and debugging purposes the font WOFF is encoded as base64 and the CSS is written in-line but for a live site you would probably want to move them external files.

<b>`Add HTML KickStart`</b><br>
Checking this checkbox allows you to add <a href="http://www.99lime.com/elements/">HTML KickStart</a> to your page. It will add the following lines of code to your HTML (<a href="https://jquery.com/">jQuery</a> will also be included)...

`<!-- HTML Kickstart v0.94 http://www.99lime.com/elements/ -->`<br>
`<script src="https://cdn.jsdelivr.net/99lime/0.94/js/kickstart.js" defer></script>`<br>
`<link rel="stylesheet" href="https://cdn.jsdelivr.net/99lime/0.94/css/kickstart.css" type="text/css">`<br>

<b>`Add Bootstrap`</b><br>
Checking this checkbox allows you to add <a href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)">Bootstrap</a> to your page. It will add the following lines of code to your HTML (<a href="https://jquery.com/">jQuery</a> and <a href="https://github.com/afarkas/html5shiv">HTML5 Shiv</a> will also be included)...

`<!-- Bootstrap v3.3.6 http://getbootstrap.com/ -->`<br>
`<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" type="text/css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">`<br>
`<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" type="text/css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">`<br>
`<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous" defer></script>`<br>

# The story behind HTMLGen
I've always been frustrated by the lack of good visual HTML designers/code generators. Even now in the year 2016 doing a Google search for something like "<a href="https://www.google.com/search?q=html+generator">html generator</a>" or "<a href="https://www.google.com/search?q=visual+html+designer">visual html designer</a>" provides little to no relevant results. You get results like table generators or button generators or link generators or meta tag generators or WYSIWYG textboxes or sites like <a href="http://codepen.io/">codepen.io</a> that would still have you <em>hand-write</em> all your HTML, CSS, and Javascript. That doesn't save me time! The act of hand-coding is what takes so damn long. Give me a tool that actually saves me time and <b>WRITES MY CODE FOR ME</b> while simultaneously supporting all the latest web technologies! I want <em>fast</em>. I want <em>easy</em>. I want <em>simple</em>.

In the same way <a href="https://en.wikipedia.org/wiki/Visual_Basic">Visual Basic</a> revolutionized computer programming for the masses and <a href="http://www.videoscribe.co/">Video Scribe</a> revolutionized presentation making for the masses there needs to be a similar tool made that can <em>revolutionize web design for the masses</em>. A product that allows you to go from idea to reality in minutes. That's what this tool attempts to do.

You might say "Just use Wordpress dummy!" Yes. I know about Wordpress. <a href="https://wordpress.com/">Wordpress</a> is great and allows you to get your content onto the internet fast and is a great <em>publishing</em> platform but is a not so great <em>design</em> platform. Photoshop is great at design but sucks at publishing. What I'm looking for is a tool that allows me to visually create my site and lay things out on the page just the way I want then just spits out HTML and CSS. That's it!

I don't know about you but I'm no Vincent van Gogh here. I can't be expected to turn a blank canvas into a beautiful work of art in like 10 seconds. Most people are not skilled artists. Even if you have Photoshop doesn't mean you're skilled at using it. When it comes to web design modern web design tools should have thousands and thousands of pre-made templates to choose from so that normal people can design websites without having to draw it from scratch themselves every time.

<a href="http://www.artisteer.com/">Artisteer</a> is a step in the right direction but I don't like the $50 price tag. I think there should be a free and open-source alternative similar to what <a href="https://www.gimp.org/">GIMP</a> is to <a href="http://www.adobe.com/products/photoshop.html">Photoshop</a>. Plus I need much finer control over the HTML and CSS. <a href="http://macaw.co/">Macaw</a> has potential but I don't like the fact that you can't see your code and the design side-by-side at the same time and it runs <b>slow as molasses</b> on old computers. For pete's sake we're just making plain text .HTML and .CSS files here we shouldn't need a super computer!

Wikipedia has a nice <a href="https://en.wikipedia.org/wiki/List_of_HTML_editors">ongoing list of HTML editors here</a> but the fact of the matter is I don't want to spend all day coding. Give me pre-made layouts. Give me pre-made backgrounds. Give me pre-made design elements. Give me pre-made fonts. Give me fancy pre-made controls like tabs and listviews. Allow me to customize every aspect of the page. Don't just have me hand-code everything. For pete's sake that's like living in 1994!

I want a tool that will create an entire HTML document for me top to bottom <em>VISUALLY</em>. And it should support everything HTML supports. And it should support the latest versions of HTML 5 and CSS 3. And it should be able to add modern web technologies like <a href="https://www.google.com/fonts">Google Fonts</a> and <a href="https://jquery.com/">jQuery</a> and allow you to easily add fancy effects and animations. I want a tool that's kind of like hand coding but <b><em>empowered</em></b> hand coding or <em><b>accelerated</b></em> hand coding. Something that gets the job done <em>FAST!</em>

I really dislike web design programs that treat the end user like an idiot. I'm not an idiot. I could hand-code all my sites from scratch if I wanted to but I just don't want to because it takes too long. Time is our most limited asset here. I believe anything that can be automated should be automated. The user should only be responsible for typing whatever unique content appears on their page not hundreds of opening and closing HTML tags. That's just wasted time.

Think about the evolution of computer programming. If we were to take a time machine back to the 1990's the most popular programming language of the time was C++. If you wanted to write a computer program you just had to hand-code thousands and thousands of lines of C++ and there's nothing that could be done about it. <b><em>The code wouldn't write itself</em></b>. That means that only exquisitely smart computer programmers could write the programs and normal users (aka 99% of the world) could only use the programs and not change them in any way or make their own. (This is analogous to modern-day HTML.)

Then along comes Microsoft and gives the world this program called <a href="https://en.wikipedia.org/wiki/Visual_Basic">Visual Basic</a>. They're like "Yeah guys this is called a <a href="https://en.wikipedia.org/wiki/Rapid_application_development">Rapid Application Development</a> tool. You can now write any program you want in about 5 minutes. Just by pointing and clicking and dragging and dropping. It's so stupidly simple that even a 5-year-old could do it."

Wow. What a game changer. What an absolute game changer. It's no wonder Microsoft sold millions and millions of copies of Visual Basic back in the day. People like simple. People want simple. All Microsoft did was wrap a GUI around this already existing programming language called <a href="https://en.wikipedia.org/wiki/BASIC">BASIC</a> <b>which they didn't even invent</b>. And people came in droves to come buy it from them. People love having the ability to go from idea to reality in minutes. Visual Basic allowed people to do that with computer programs, why doesn't somebody do that with HTML?

I don't want a tool that just applies effects to text. Oh boy. I can make a word bold or underlined. I want a tool that can make the entire SITE LAYOUT for me and make it editable. Allowing me to change every single aspect of the design, the background color, the font, the spacing, control what elements appear where, that sort of thing.

I don't want a <em>table generator</em>, I want a <b>page generator</b>. I want to be able to edit every aspect of the page top to bottom. 

I've always dreamed of a tool that would allow me to visually build a site in just minutes instead of hand-coding all the HTML which takes hours. I've always wanted a program that has the same look and feel as Visual Basic but instead of making desktop applications it makes HTML  and it allows you to do all of your building, editing, and coding all in your browser all for free.

You would think in the year 2016 there would be hundreds of tools out there like this but there's not. Technically the <a href="https://en.wikipedia.org/wiki/JavaScript">Javascript</a> language has the ability to edit and re-position any element on the page at any time using the <a href="https://en.wikipedia.org/wiki/Document_Object_Model">DOM</a>. It's just a matter of us human beings writing the code telling the browser what to do and when to do it. That's what takes so long.

<a href="http://thimble.mozilla.org/">Thimble</a> is a nice attempt by Mozilla at previewing live HTML but it's still just a glorified text editor that runs in your browser. I don't need a text editor. I have a text editor. What I need is something to resize and position elements on the screen and easily browse through hundreds of colors, fonts, and layout choices in seconds. I need drag-and-drop form builders and color pickers and pre-made layouts not just another text editor that still requires me to waste hours and hours of time tediously writing code.

So I've decided to throw my own hat in the ring and make my own HTML generator for the time being which I'm calling HTMLGen. It's only a code name for now and I'm open to suggestions for a better name.

This tool is by no means complete. The amount of features that could be added to a web-based web design tool are just astronomical and if it's only me, one single human being doing all the coding and all the design it's going to take a while. I anticipate to be working on this tool for the next couple of years at least. But I just wanted to throw it out there anyway now in it's current form just to let people play around with it and get feedback.

At this point in the game I am most looking for financial assistance. You must understand creating a tool like this takes an incredible amount of time and I'm still a human being. Still gotta eat. Still gotta sleep. Still gotta pay for a roof over my head. Sending donations by either <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=%65%6C%65%61%64%6F%6E%34%40%67%6D%61%69%6C%2E%63%6F%6D&no_note=0&currency_code=USD">PayPal</a> or <a href="https://www.coinbase.com/eleadon">Bitcoin</a> would be greatly appreicated. Considering the amount of time I'm pouring into this project and the countless hours it could save you and your future web development needs it probably wouldn't kill you to toss me like 5 bucks. If enough people donated I could afford to work on this project full time.

One final note. Yes I am aware there are high-quality, high-grade professional web-design tools out there like <a href="http://www.adobe.com/products/muse.html">Adobe Muse</a> and <a href="http://www.adobe.com/products/dreamweaver.html">Adobe Dreamweaver</a> but both of which cost money and I'm trying to make a free alternative here that is open-source and community driven. You may consider this project analogous to <a href="http://brackets.io/">Brackets</a> in that it's free and it's only job in life is to produce HTML. The only difference is this tool attempts to visually design the page in the browser and it tries to write out as much of your HTML code for you as it possibly can whereas Brackets is just a text editor.
