const React = require('react');
const el = React.createElement(React.Fragment, null, "Hello");
try {
  console.log(JSON.stringify({ description: el }));
} catch (e) {
  console.error("Error:", e);
}
