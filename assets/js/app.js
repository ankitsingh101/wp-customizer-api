"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sidetabs = function (_React$Component) {
  _inherits(Sidetabs, _React$Component);

  function Sidetabs() {
    _classCallCheck(this, Sidetabs);

    return _possibleConstructorReturn(this, (Sidetabs.__proto__ || Object.getPrototypeOf(Sidetabs)).apply(this, arguments));
  }

  _createClass(Sidetabs, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "a",
        { href: "#", className: "list-group-item text-center" },
        React.createElement(
          "div",
          null,
          React.createElement("h4", { className: "fa fa-" + this.props.class, "aria-hidden": "true" }),
          React.createElement("br", null),
          this.props.title
        )
      );
    }
  }]);

  return Sidetabs;
}(React.Component);

var modals = React.createElement(
  "div",
  { className: "list-group" },
  React.createElement(Sidetabs, { title: "Globel", "class": "globe" }),
  React.createElement(Sidetabs, { title: "Sections", "class": "archive" }),
  React.createElement(Sidetabs, { title: "Settings", "class": "cogs" }),
  React.createElement(
    "a",
    { href: "#", id: "panel-list", className: "list-group-item text-center", style: { display: 'none' } },
    React.createElement(
      "div",
      null,
      React.createElement("h4", { className: "fa fa-columns" }),
      React.createElement("br", null),
      "Panel"
    )
  ),
  React.createElement(Sidetabs, { title: "Control", "class": "columns" })
);
ReactDOM.render(modals, document.getElementsByClassName('bhoechie-tab-menu')[0]);