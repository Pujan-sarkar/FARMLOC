"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = UserEmail;
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
function UserEmail(_ref) {
  var name = _ref.name;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Html, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Head, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(Preview, {
      children: "Thank you for contacting Farmloc"
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
            children: "Thank you for reaching out to Farmloc!"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(Text, {
            style: {
              fontSize: '16px',
              color: '#4a5568'
            },
            children: ["Hi ", name, ","]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Text, {
            style: {
              fontSize: '16px',
              color: '#4a5568',
              marginTop: '10px'
            },
            children: "We have received your message and appreciate you taking the time to contact us."
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Text, {
            style: {
              fontSize: '16px',
              color: '#4a5568'
            },
            children: "Our team at Farmloc will review your inquiry and get back to you as soon as possible."
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Section, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Text, {
            style: {
              fontSize: '14px',
              color: '#718096'
            },
            children: "If you have any additional questions, feel free to reply to this email."
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Section, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Text, {
            style: {
              fontSize: '14px',
              color: '#a0aec0'
            },
            children: "Thank you for choosing Farmloc."
          })
        })]
      })
    })]
  });
}