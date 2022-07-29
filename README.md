# My Notes (will be formatted)

<br/>
WHAT DO I LEARN (Ignite React.js II (with Vite))<br/>
<br/>
### Components<br/>
=> useSate (immutability -  object cannot be changed, only recreated)<br/><br/>
### Closures<br/>
=> "Inside an scope or function each time you change a state (useState) the element will create a new context. To avoid this you cant asign the state to a variable or execute a function inside set element state function (setNewState((state)=>{return state + 1}))" - something like that.<br/>

States
Hooks
Scoped CSS (css-modules)
<br/>
Phosphor Icons (npm install phosphor-react)<br/>
Date FNS (npm i date-fns) - Work with dates<br/>
UUID (npm i react-uuid) - to generate unique keys <br/>
<br/>
RENDERING PATTERNS
<br/>
SSR - Back-End => Front-End<br/>
 => Server Side Render (Defaul pattern, server process request and return HTML, CSS, JS already compiled)<br/>
SPA - Back-End => FrameWork(React, etc) => Front-Side<br/>
 => Single Page Application (Growing concept. Backend return basicly request data as JSON\*)<br/>
<br/>
Compilers - Babel (Convert code to browser friendly compatible format)<br/>
Bundle - Webpack (Organize multiple module file dependencies to static files) (Other options Vite, Snowpack)<br/>

caniuse.com => Browser compatibility

- JavaScrip Object Notation

Projetc<br/>
BASIC STEP<br/>

<ol>
<li>install Note last LTS</li>
<li>npm create vite@latest</li>
<li>project-name / react / react (TS will be added latter)</li>
<li>cd project-name</li>
<li>npm i (install dependencies)</li>
<li>npm run dev</li>
</ol>

WORKING WITH COMPONENTS<br/>

React Component: "Any function that return HTML content"<br/>

Defaul Export - the function/component can be imported with any name:<br/>
Post.jsx: <br/>
`export default Post(){}`<br/>
=> App.jsx:<br/>
`import PostComponent from './Post'`<br/>
=> can lead to use wrong component name in application<br/>

vs<br/>

Named Export - must import the component with same name and curly brackets<br/>
=> Post.jsx:
`export Post(){}`<br/>
=> App.jsx:
`import { Post } from './Post'`<br/>

create a component folder inside root/src and, on demand, create folders for those components<br/>
project_root/src/components/<br/>
Header/ Header.jsx Header.module.css or styles.css

<ul>
<li>LogIn/ LogIn.jsx ...</li>
<li>Main/ Main.jsx ...</li>
<li>Footer/ Footer.jsx ... (so on and so forth)</li>
</ul>

PROPERTIES<br/>
Passing to values/"variables" to components as props<br/>
=> Post.jsx:
`export default Post(props){}`<br/>
=> App.jsx:
`<Post author='AnyName' content'any text' />`
<br/>
each component can have his own values<br/>

HTML<br/>
Attention to semantic<br/>

Scoped CSS (css-modules)
import Fonts on index.html (tip- move preconnect to top of index.html <head>, below charset)

- REMEMBER: some HTML elements won´t inherit body or parents style
- REMEMBER2: use relative units (rem, vh, etc) when possible (accessibility)

:root{} on global.css (import "./global.css"; on App.jsx)

    Header.jsx
    	import styles from './Header.module.css'
    	<div className={styles.header}>CSS</div>

    Header.module.css (will generate an 'pseudo-class' to avoid conflict)
    	.header { background: #333; }
    	On browser console: <div class="_header_6lda4_1">CSS</div>

ASSETS (src/assetc)

- images<br/>
  `import igniteLogo from "../assets/ignite-logo.svg";`
