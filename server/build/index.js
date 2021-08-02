var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __objSpread = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? {get: () => module2.default, enumerable: true} : {value: module2, enumerable: true})), module2);
};

// <stdin>
__markAsModule(exports);
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toModule(require("react"));

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require("remix"));
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = import_server.default.renderToString(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: __objSpread(__objSpread({}, Object.fromEntries(responseHeaders)), {
      "Content-Type": "text/html"
    })
  });
}

// route-module:/Users/yashghelani/Documents/Work/blotout/blotout-website-new/app/root.jsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader
});
var import_remix2 = __toModule(require("remix"));
var import_react_router_dom = __toModule(require("react-router-dom"));

// app/graphics/logo.jsx
var Logo = () => {
  return /* @__PURE__ */ React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 4369 995",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M3289 321.041H3415.23V686.459H3289V321.041Z",
    fill: "#F8FBFF"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3387.18 349.091H3317.05V658.409H3387.18V349.091ZM3289 321.041V686.459H3415.23V321.041H3289Z",
    fill: "#F8FBFF"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3779.88 321.041H3906.11V686.459H3779.88V321.041Z",
    fill: "#F8FBFF"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3878.06 349.091H3807.93V658.409H3878.06V349.091ZM3779.88 321.041V686.459H3906.11V321.041H3779.88Z",
    fill: "#F8FBFF"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3316 811.915C3314.79 809.218 3313.62 806.501 3312.49 803.767C3296.98 766.332 3289 726.209 3289 685.69H3415.2C3415.2 709.637 3419.92 733.349 3429.08 755.473C3438.25 777.597 3451.68 797.7 3468.61 814.633C3485.54 831.566 3505.65 844.998 3527.77 854.162C3549.9 863.326 3573.61 868.043 3597.55 868.043C3621.5 868.043 3645.21 863.326 3667.34 854.162C3689.46 844.998 3709.56 831.566 3726.5 814.633C3743.43 797.7 3756.86 777.597 3766.03 755.473C3775.19 733.349 3779.91 709.637 3779.91 685.69H3906.11C3906.11 726.209 3898.12 766.332 3882.62 803.767C3881.49 806.501 3880.31 809.218 3879.11 811.915C3863.76 846.143 3842.29 877.309 3815.73 903.868C3787.08 932.519 3753.07 955.247 3715.63 970.753C3678.2 986.259 3638.07 994.24 3597.55 994.24C3557.04 994.24 3516.91 986.259 3479.48 970.753C3442.04 955.247 3408.03 932.519 3379.38 903.868C3352.82 877.309 3331.35 846.143 3316 811.915Z",
    fill: "#F8FBFF"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M799.46 868.017C915.647 868.017 1009.84 773.829 1009.84 657.642C1009.84 541.455 915.647 447.266 799.46 447.266C683.273 447.266 589.085 541.455 589.085 657.642C589.085 773.829 683.273 868.017 799.46 868.017ZM799.46 994.242C985.36 994.242 1136.06 843.541 1136.06 657.642C1136.06 471.742 985.36 321.041 799.46 321.041C613.561 321.041 462.859 471.742 462.859 657.642C462.859 843.541 613.561 994.242 799.46 994.242Z",
    fill: "#F8FBFF"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1809.26 868.017C1925.45 868.017 2019.64 773.829 2019.64 657.642C2019.64 541.455 1925.45 447.266 1809.26 447.266C1693.07 447.266 1598.89 541.455 1598.89 657.642C1598.89 773.829 1693.07 868.017 1809.26 868.017ZM1809.26 994.242C1995.16 994.242 2145.86 843.541 2145.86 657.642C2145.86 471.742 1995.16 321.041 1809.26 321.041C1623.36 321.041 1472.66 471.742 1472.66 657.642C1472.66 843.541 1623.36 994.242 1809.26 994.242Z",
    fill: "#F8FBFF"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2847.11 868.017C2963.3 868.017 3057.48 773.829 3057.48 657.642C3057.48 541.455 2963.3 447.266 2847.11 447.266C2730.92 447.266 2636.73 541.455 2636.73 657.642C2636.73 773.829 2730.92 868.017 2847.11 868.017ZM2847.11 994.242C3033.01 994.242 3183.71 843.541 3183.71 657.642C3183.71 471.742 3033.01 321.041 2847.11 321.041C2661.21 321.041 2510.51 471.742 2510.51 657.642C2510.51 843.541 2661.21 994.242 2847.11 994.242Z",
    fill: "#F8FBFF"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M462.859 0.435547H589.085V982.188H462.859V0.435547Z",
    fill: "#F8FBFF"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M231.445 280.938H357.671V982.189H231.445V280.938Z",
    fill: "#F8FBFF"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M0.03125 561.438H126.257V982.188H0.03125V561.438Z",
    fill: "#F8FBFF"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M1241.25 0.435547H1367.48V982.188H1241.25V0.435547Z",
    fill: "#F8FBFF"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1339.43 28.4856H1269.3V954.138H1339.43V28.4856ZM1241.25 0.435547V982.188H1367.48V0.435547H1241.25Z",
    fill: "#F8FBFF"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2265.07 0.435547H2391.3V982.188H2265.07V0.435547Z",
    fill: "#F8FBFF"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2363.25 28.4856H2293.12V954.138H2363.25V28.4856ZM2265.07 0.435547V982.188H2391.3V0.435547H2265.07Z",
    fill: "#F8FBFF"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2117.81 301.918V175.693H2538.56V301.918H2117.81Z",
    fill: "#F8FBFF"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2145.86 203.743V273.868H2510.51V203.743H2145.86ZM2117.81 301.918H2538.56V175.693H2117.81V301.918Z",
    fill: "#F8FBFF"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M4095.34 0.435547H4221.56V982.188H4095.34V0.435547Z",
    fill: "#F8FBFF"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4193.51 28.4856H4123.39V954.138H4193.51V28.4856ZM4095.34 0.435547V982.188H4221.56V0.435547H4095.34Z",
    fill: "#F8FBFF"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3948.07 301.918V175.693H4368.82V301.918H3948.07Z",
    fill: "#F8FBFF"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3976.12 203.743V273.868H4340.77V203.743H3976.12ZM3948.07 301.918H4368.82V175.693H3948.07V301.918Z",
    fill: "#F8FBFF"
  }));
};
var logo_default = Logo;

// app/components/header.jsx
var Header = () => {
  return /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("div", {
    id: "header-content"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "logo"
  }, /* @__PURE__ */ React.createElement(logo_default, null)), /* @__PURE__ */ React.createElement("div", {
    id: "header-nav"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "header-nav-link"
  }, "Product"), /* @__PURE__ */ React.createElement("div", {
    className: "header-nav-link"
  }, "Docs"), /* @__PURE__ */ React.createElement("div", {
    className: "header-nav-link"
  }, "Resources"), /* @__PURE__ */ React.createElement("div", {
    className: "header-nav-link"
  }, "Company")), /* @__PURE__ */ React.createElement("div", {
    id: "cta"
  }, "Request a Demo")));
};

// app/components/footer.jsx
var Footer = () => {
  return /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("div", {
    id: "footer-content"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "footer-special"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "footer-special-text"
  }, "Join our community to learn how to take analytics and marketing measurement in-house"), /* @__PURE__ */ React.createElement("div", {
    id: "footer-special-cta"
  }, "Join our Slack")), /* @__PURE__ */ React.createElement("div", {
    id: "footer-nav"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "footer-nav-group"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "footer-nav-heading"
  }, "Product"), /* @__PURE__ */ React.createElement("div", {
    className: "footer-nav-link-group"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "footer-nav-link"
  }, "Overview"), /* @__PURE__ */ React.createElement("div", {
    className: "footer-nav-link"
  }, "Features"), /* @__PURE__ */ React.createElement("div", {
    className: "footer-nav-link"
  }, "Integrations"), /* @__PURE__ */ React.createElement("div", {
    className: "footer-nav-link"
  }, "For Marketers"), /* @__PURE__ */ React.createElement("div", {
    className: "footer-nav-link"
  }, "For Product Managers"), /* @__PURE__ */ React.createElement("div", {
    className: "footer-nav-link"
  }, "For Engineers"), /* @__PURE__ */ React.createElement("div", {
    className: "footer-nav-link"
  }, "For Privacy Teams"))), /* @__PURE__ */ React.createElement("div", {
    className: "footer-nav-group"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "footer-nav-heading"
  }, "Docs"), /* @__PURE__ */ React.createElement("div", {
    className: "footer-nav-link-group"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "footer-nav-link"
  }, "Web"), /* @__PURE__ */ React.createElement("div", {
    className: "footer-nav-link"
  }, "iOS"), /* @__PURE__ */ React.createElement("div", {
    className: "footer-nav-link"
  }, "Android"), /* @__PURE__ */ React.createElement("div", {
    className: "footer-nav-link"
  }, "Rust / C++"))), /* @__PURE__ */ React.createElement("div", {
    className: "footer-nav-group"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "footer-nav-heading"
  }, "Resources"), /* @__PURE__ */ React.createElement("div", {
    className: "footer-nav-link-group"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "footer-nav-link"
  }, "Case Studies"), /* @__PURE__ */ React.createElement("div", {
    className: "footer-nav-link"
  }, "Blog"), /* @__PURE__ */ React.createElement("div", {
    className: "footer-nav-link"
  }, "Slack Community"))), /* @__PURE__ */ React.createElement("div", {
    className: "footer-nav-group"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "footer-nav-heading"
  }, "Company"), /* @__PURE__ */ React.createElement("div", {
    className: "footer-nav-link-group"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "footer-nav-link"
  }, "About"), /* @__PURE__ */ React.createElement("div", {
    className: "footer-nav-link"
  }, "Careers"), /* @__PURE__ */ React.createElement("div", {
    className: "footer-nav-link"
  }, "Contact"))))));
};

// app/styles/main.css
var main_default = "/build/_assets/main-ZUKRJJAJ.css";

// route-module:/Users/yashghelani/Documents/Work/blotout/blotout-website-new/app/root.jsx
function links() {
  return [{rel: "stylesheet", href: main_default}];
}
function loader() {
  return {date: new Date()};
}
function Document({children}) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "icon",
    href: "/favicon.png",
    type: "image/png"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), process.env.NODE_ENV === "development" && /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}
function App() {
  let data = (0, import_remix2.useRouteData)();
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null), /* @__PURE__ */ React.createElement(Footer, null));
}
function ErrorBoundary({error}) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement("h1", null, "App Error"), /* @__PURE__ */ React.createElement("pre", null, error.message), /* @__PURE__ */ React.createElement("p", null, "Replace this UI with what you want users to see when your app throws uncaught errors."));
}

// route-module:/Users/yashghelani/Documents/Work/blotout/blotout-website-new/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links2,
  meta: () => meta
});

// app/styles/index.css
var styles_default = "/build/_assets/index-S5TLTC5M.css";

// route-module:/Users/yashghelani/Documents/Work/blotout/blotout-website-new/app/routes/index.jsx
function meta() {
  return {
    title: "Blotout",
    description: ""
  };
}
function links2() {
  return [
    {
      rel: "stylesheet",
      href: styles_default
    }
  ];
}
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "home"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "hero",
    className: "home-section"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "hero-content",
    className: "home-section-content"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "hero-title"
  }, "Cloud prem analytics and marketing attribution for the privacy era"), /* @__PURE__ */ React.createElement("div", {
    id: "hero-subtitle"
  }, "Cloud prem analytics and marketing attribution for the privacy era"), /* @__PURE__ */ React.createElement("div", {
    id: "hero-cta-group"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "hero-primary-cta"
  }, "Request a Demo"), /* @__PURE__ */ React.createElement("div", {
    id: "hero-secondary-cta"
  }, "Join our Slack")))), /* @__PURE__ */ React.createElement("div", {
    id: "explainer",
    className: "home-section"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "explainer-content",
    className: "home-section-content"
  })), /* @__PURE__ */ React.createElement("div", {
    id: "marketers",
    className: "home-section"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "marketers-content",
    className: "home-section-content"
  })), /* @__PURE__ */ React.createElement("div", {
    id: "product-managers",
    className: "home-section"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "product-managers-content",
    className: "home-section-content"
  })), /* @__PURE__ */ React.createElement("div", {
    id: "engineers",
    className: "home-section"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "engineers-content",
    className: "home-section-content"
  })), /* @__PURE__ */ React.createElement("div", {
    id: "blog",
    className: "home-section"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "blog-content",
    className: "home-section-content"
  })), /* @__PURE__ */ React.createElement("div", {
    id: "privacy",
    className: "home-section"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "privacy-content",
    className: "home-section-content"
  })));
}

// route-module:/Users/yashghelani/Documents/Work/blotout/blotout-website-new/app/routes/404.jsx
var __exports = {};
__export(__exports, {
  default: () => FourOhFour,
  meta: () => meta2
});
function meta2() {
  return {title: "Ain't nothing here"};
}
function FourOhFour() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "404"));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = {module: entry_server_exports};
var routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "/",
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: "/",
    caseSensitive: false,
    module: routes_exports
  },
  "routes/404": {
    id: "routes/404",
    parentId: "root",
    path: "*",
    caseSensitive: false,
    module: __exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
