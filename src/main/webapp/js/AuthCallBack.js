var oauthParams = {};
// parse the query string
// from http://oauthssodemo.appspot.com/step/2
var params = {}, queryString = location.hash.substring(1),
regex = /([^&=]+)=([^&]*)/g, m;
while (m = regex.exec(queryString)) {
oauthParams[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
}
alert('done processing token');
window.opener.setOauthParams(oauthParams);