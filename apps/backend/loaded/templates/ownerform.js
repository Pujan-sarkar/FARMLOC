"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = OwnerEmail;
var _jsxRuntime = require("react/jsx-runtime");
var React = require('react');
var _require = require('@react-email/components'),
  Html = _require.Html,
  Head = _require.Head,
  Preview = _require.Preview,
  Body = _require.Body,
  Container = _require.Container,
  Section = _require.Section,
  Heading = _require.Heading,
  Text = _require.Text;
function OwnerEmail(_ref) {
  var name = _ref.name,
    email = _ref.email,
    message = _ref.message;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Html, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Head, {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(Preview, {
      children: ["New contact form message from ", name]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Body, {
      style: {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f6f9fc',
        margin: 0,
        padding: 0
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(Container, {
        style: {
          backgroundColor: '#ffffff',
          margin: '20px auto',
          padding: '20px',
          borderRadius: '5px'
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(Section, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Heading, {
            style: {
              color: '#2d3748'
            },
            children: "New Contact Message Received"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Text, {
            style: {
              fontSize: '16px',
              color: '#4a5568'
            },
            children: "You have received a new message through the Farmloc contact form."
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(Section, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Heading, {
            style: {
              fontSize: '18px',
              color: '#2b6cb0'
            },
            children: "Sender Details:"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(Text, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
              children: "Name:"
            }), " ", name]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(Text, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
              children: "Email:"
            }), " ", email]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(Section, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Heading, {
            style: {
              fontSize: '18px',
              color: '#2b6cb0'
            },
            children: "Message:"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Text, {
            style: {
              whiteSpace: 'pre-line'
            },
            children: message
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Section, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Text, {
            style: {
              fontSize: '14px',
              color: '#718096'
            },
            children: "This message was sent from the Farmloc website contact form."
          })
        })]
      })
    })]
  });
}