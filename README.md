# My Notes (will be formatted)

WHAT DO I LEARN (Ignite React.js II (with Vite))

Components
States
Hooks
Scoped CSS (css-modules)

Phosphor Icons (npm install phosphor-react)
Date FNS (npm i date-fns) - Work with dates

RENDERING PATTERNS

SSR - Back-End => Front-End
Server Side Render (Defaul pattern, server process request and return HTML, CSS, JS already compiled)
SPA - Back-End => FrameWork(React, etc) => Front-Side
Single Page Application (Growing concept. Backend return basicly request data as JSON\*)

Compilers - Babel (Convert code to browser friendly compatible format)
Bundle - Webpack (Organize multiple module file dependencies to static files) (Other options Vite, Snowpack)

caniuse.com => Browser compatibility

- JavaScrip Object Notation

Projetc
BASIC STEP

1 - install Note last LTS
2 - npm create vite@latest
y / project-name / react / react (TS will be added latter)
3 - cd project-name
4 - npm i (install dependencies)
5 - npm run dev

WORKING WITH COMPONENTS

React Component: "Any function that return HTML content"

Defaul Export - the function/component can be imported with any name:
Post.jsx: ... export default Post(){}
App.jsx: ... import PostComponent from './Post'
can lead to use wrong component name in application

vs

Named Export - must import the component with same name and curly brackets
Post.jsx: ... export Post(){}
App.jsx: ... import { Post } from './Post'

create a component folder inside root/src and, on demand, create folders for those components
project_root/src/components/
Header/ Header.jsx Header.module.css or styles.css
LogIn/ LogIn.jsx ...
Main/ Main.jsx ...
Footer/ Footer.jsx ... (so on and so forth)

PROPERTIES
Passing to values/"variables" to components as props
Post.jsx: ... export default Post(props){}
App.jsx: ... <Post author='AnyName' content'any text' />
each component can have his own values

HTML
Attention to semantic

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

- images (import igniteLogo from "../assets/ignite-logo.svg";)
