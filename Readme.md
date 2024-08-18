// "main": "App.js", To be added in package.json only when building dev app not production build
// Production build command : npx parcel build index.html
// Dev build command : npx parcel index.html
// parcel cache and dist are two folders that are generated when we build (prod/dev)
// so like node modules, parcel cache and dist get generated when be run the build command so not push in git

-> React element => Object => ReactDom makes it an HTML element and pushes it to browser
The root element from app.js is pushed to browser when the element is rendered and thus replaces what was present in index.html root to the new content of root of app.js

->JSX: Java Script syntax , makes it easier to create react elements, it seems like HTML inside JS, But it is not that, JSX is HTML like syntax
// const jsxHeader= <h1>This is an jsx</h1>
-> We can create react elements using both react and jsx
with react syntax: const header= React.createElement("h1", {id: "header1"} ,"This is react")
with jsx: const jsxHeader= <h1 id=header1>This is an jsx</h1>

IF we need to write JSX syntax in multiple lines we warp it in first () brackets

->JSX => Babel compiles it to react.createElement => react element JS obj => HTML element on browser (Render)

-> React component: Every Thing is a component in react.
   any JS function that returns a JSX is a functional component

   const component = ()=> {                     OR      const component =() => <h1>Return a jsx</h1>
    return <h1>returning a JSX</h1>                     Here we removed the braces and return (does same thing) 
   }

  Components need to be written in angular brackets: <component />
  Component Composition is Putting one component inside another:  

  const HeadingComponent = () => (
  <div id="Container">
    <Title />       //Component composition (But eveyrthing should be under one main container like div here) Title is another functional component
    <h1>{100+200}</h1> //we can inject any JS Code inside the JSX using curly braces and it would come out as an html element
    {console/log("Print this)}
    <h1 className="heading">Returning JSX using functional Component</h1>
  </div>
  );

  -> useEffect(()=>,[]): contains a call back func and a dependency array
      if the dependency array argument is missing then use effect is called after any component render (be it related to that useEffect hook or not)
      if empty dependency array then the hook is called during initial render and just that once
      if the array [variable] is not empty then useEffect is called every time "variable" is updated 

  -> 2 types of routing:
   1: server side routing: When we route the pages using anchor tags, hence while navigating to another page it fetches the data off that page and then reloads the whole page. e.g: Clicking on about us button would refresh whole page and take us to about us page

   2: Client side routing: using link tags we only re-render / replace the required component and not refresh the whole page making it a single page application, i.e while navigating, whole page is not refreshed.

   -> Class based component lifecycle: constructor() -> render() -> componentDidMount() This is the order in which methods are called
      constructor is used to initialize the variables and make an instance of the class based component
      render() is used to render the ui elements
      componentDidMount(): is used for api calls just like useEffect() is used in function based components

      TO understand lifecycle better watch episode 8 from 1:10:00 