const heading = React.createElement("div", {
	id: "heading"
}, React.createElement("div", {
	id: "child"
}, [React.createElement("h1", {
	id: "grandchild"
}, "Welcome to world from react!"), React.createElement("div", {
	id: "child2"
}, "Welcome to world from react!")]));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);