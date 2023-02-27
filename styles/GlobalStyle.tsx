import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

@media(max-width:480px){
  html,
  body{
    font-size: 13px;
  }
}

#__next {
    display: contents;
}


a {
  color: inherit;
  text-decoration: none;
}

div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}

input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: transparent;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

ol,
ul {
  list-style: none;
}

button {
  cursor: pointer;
  font-family: inherit;
  background: none;
  border: none;
}

.inner {
  width: 480px;
  margin: 0 uato;
}


`;

export default GlobalStyle;
