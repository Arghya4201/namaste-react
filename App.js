//Three arguments: Element type, attributes , child
const heading = React.createElement("h1", { id: "heading" }, "Hello world from react");

const parent = React.createElement("div",
    { id: "parent" },
    React.createElement("div",
        { id: "child" },
        [React.createElement("h1", { id: "header" }, "H1 tag"), React.createElement("h2", {id: "header2"} ,"H2")]));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);