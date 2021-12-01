var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var materialIcons = "";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics = function(d2, b2) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
    d3.__proto__ = b3;
  } || function(d3, b3) {
    for (var p2 in b3)
      if (Object.prototype.hasOwnProperty.call(b3, p2))
        d3[p2] = b3[p2];
  };
  return extendStatics(d2, b2);
};
function __extends(d2, b2) {
  if (typeof b2 !== "function" && b2 !== null)
    throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
  extendStatics(d2, b2);
  function __() {
    this.constructor = d2;
  }
  d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2))
          t2[p2] = s2[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function __decorate(decorators, target, key, desc) {
  var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r2 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i2 = decorators.length - 1; i2 >= 0; i2--)
      if (d2 = decorators[i2])
        r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
  return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
}
function __values(o2) {
  var s2 = typeof Symbol === "function" && Symbol.iterator, m2 = s2 && o2[s2], i2 = 0;
  if (m2)
    return m2.call(o2);
  if (o2 && typeof o2.length === "number")
    return {
      next: function() {
        if (o2 && i2 >= o2.length)
          o2 = void 0;
        return { value: o2 && o2[i2++], done: !o2 };
      }
    };
  throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3 = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, e$7 = Symbol(), n$5 = new Map();
class s$3 {
  constructor(t2, n2) {
    if (this._$cssResult$ = true, n2 !== e$7)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t2;
  }
  get styleSheet() {
    let e2 = n$5.get(this.cssText);
    return t$3 && e2 === void 0 && (n$5.set(this.cssText, e2 = new CSSStyleSheet()), e2.replaceSync(this.cssText)), e2;
  }
  toString() {
    return this.cssText;
  }
}
const o$7 = (t2) => new s$3(typeof t2 == "string" ? t2 : t2 + "", e$7), r$4 = (t2, ...n2) => {
  const o2 = t2.length === 1 ? t2[0] : n2.reduce((e2, n3, s2) => e2 + ((t3) => {
    if (t3._$cssResult$ === true)
      return t3.cssText;
    if (typeof t3 == "number")
      return t3;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t3 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n3) + t2[s2 + 1], t2[0]);
  return new s$3(o2, e$7);
}, i$5 = (e2, n2) => {
  t$3 ? e2.adoptedStyleSheets = n2.map((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet) : n2.forEach((t2) => {
    const n3 = document.createElement("style"), s2 = window.litNonce;
    s2 !== void 0 && n3.setAttribute("nonce", s2), n3.textContent = t2.cssText, e2.appendChild(n3);
  });
}, S$1 = t$3 ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
  let e2 = "";
  for (const n2 of t3.cssRules)
    e2 += n2.cssText;
  return o$7(e2);
})(t2) : t2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var s$2;
const e$6 = window.trustedTypes, r$3 = e$6 ? e$6.emptyScript : "", h$2 = window.reactiveElementPolyfillSupport, o$6 = { toAttribute(t2, i2) {
  switch (i2) {
    case Boolean:
      t2 = t2 ? r$3 : null;
      break;
    case Object:
    case Array:
      t2 = t2 == null ? t2 : JSON.stringify(t2);
  }
  return t2;
}, fromAttribute(t2, i2) {
  let s2 = t2;
  switch (i2) {
    case Boolean:
      s2 = t2 !== null;
      break;
    case Number:
      s2 = t2 === null ? null : Number(t2);
      break;
    case Object:
    case Array:
      try {
        s2 = JSON.parse(t2);
      } catch (t3) {
        s2 = null;
      }
  }
  return s2;
} }, n$4 = (t2, i2) => i2 !== t2 && (i2 == i2 || t2 == t2), l$4 = { attribute: true, type: String, converter: o$6, reflect: false, hasChanged: n$4 };
class a$1 extends HTMLElement {
  constructor() {
    super(), this._$Et = new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$Ei = null, this.o();
  }
  static addInitializer(t2) {
    var i2;
    (i2 = this.l) !== null && i2 !== void 0 || (this.l = []), this.l.push(t2);
  }
  static get observedAttributes() {
    this.finalize();
    const t2 = [];
    return this.elementProperties.forEach((i2, s2) => {
      const e2 = this._$Eh(s2, i2);
      e2 !== void 0 && (this._$Eu.set(e2, s2), t2.push(e2));
    }), t2;
  }
  static createProperty(t2, i2 = l$4) {
    if (i2.state && (i2.attribute = false), this.finalize(), this.elementProperties.set(t2, i2), !i2.noAccessor && !this.prototype.hasOwnProperty(t2)) {
      const s2 = typeof t2 == "symbol" ? Symbol() : "__" + t2, e2 = this.getPropertyDescriptor(t2, s2, i2);
      e2 !== void 0 && Object.defineProperty(this.prototype, t2, e2);
    }
  }
  static getPropertyDescriptor(t2, i2, s2) {
    return { get() {
      return this[i2];
    }, set(e2) {
      const r2 = this[t2];
      this[i2] = e2, this.requestUpdate(t2, r2, s2);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t2) {
    return this.elementProperties.get(t2) || l$4;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized"))
      return false;
    this.finalized = true;
    const t2 = Object.getPrototypeOf(this);
    if (t2.finalize(), this.elementProperties = new Map(t2.elementProperties), this._$Eu = new Map(), this.hasOwnProperty("properties")) {
      const t3 = this.properties, i2 = [...Object.getOwnPropertyNames(t3), ...Object.getOwnPropertySymbols(t3)];
      for (const s2 of i2)
        this.createProperty(s2, t3[s2]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), true;
  }
  static finalizeStyles(i2) {
    const s2 = [];
    if (Array.isArray(i2)) {
      const e2 = new Set(i2.flat(1 / 0).reverse());
      for (const i3 of e2)
        s2.unshift(S$1(i3));
    } else
      i2 !== void 0 && s2.push(S$1(i2));
    return s2;
  }
  static _$Eh(t2, i2) {
    const s2 = i2.attribute;
    return s2 === false ? void 0 : typeof s2 == "string" ? s2 : typeof t2 == "string" ? t2.toLowerCase() : void 0;
  }
  o() {
    var t2;
    this._$Ep = new Promise((t3) => this.enableUpdating = t3), this._$AL = new Map(), this._$Em(), this.requestUpdate(), (t2 = this.constructor.l) === null || t2 === void 0 || t2.forEach((t3) => t3(this));
  }
  addController(t2) {
    var i2, s2;
    ((i2 = this._$Eg) !== null && i2 !== void 0 ? i2 : this._$Eg = []).push(t2), this.renderRoot !== void 0 && this.isConnected && ((s2 = t2.hostConnected) === null || s2 === void 0 || s2.call(t2));
  }
  removeController(t2) {
    var i2;
    (i2 = this._$Eg) === null || i2 === void 0 || i2.splice(this._$Eg.indexOf(t2) >>> 0, 1);
  }
  _$Em() {
    this.constructor.elementProperties.forEach((t2, i2) => {
      this.hasOwnProperty(i2) && (this._$Et.set(i2, this[i2]), delete this[i2]);
    });
  }
  createRenderRoot() {
    var t2;
    const s2 = (t2 = this.shadowRoot) !== null && t2 !== void 0 ? t2 : this.attachShadow(this.constructor.shadowRootOptions);
    return i$5(s2, this.constructor.elementStyles), s2;
  }
  connectedCallback() {
    var t2;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t2 = this._$Eg) === null || t2 === void 0 || t2.forEach((t3) => {
      var i2;
      return (i2 = t3.hostConnected) === null || i2 === void 0 ? void 0 : i2.call(t3);
    });
  }
  enableUpdating(t2) {
  }
  disconnectedCallback() {
    var t2;
    (t2 = this._$Eg) === null || t2 === void 0 || t2.forEach((t3) => {
      var i2;
      return (i2 = t3.hostDisconnected) === null || i2 === void 0 ? void 0 : i2.call(t3);
    });
  }
  attributeChangedCallback(t2, i2, s2) {
    this._$AK(t2, s2);
  }
  _$ES(t2, i2, s2 = l$4) {
    var e2, r2;
    const h2 = this.constructor._$Eh(t2, s2);
    if (h2 !== void 0 && s2.reflect === true) {
      const n2 = ((r2 = (e2 = s2.converter) === null || e2 === void 0 ? void 0 : e2.toAttribute) !== null && r2 !== void 0 ? r2 : o$6.toAttribute)(i2, s2.type);
      this._$Ei = t2, n2 == null ? this.removeAttribute(h2) : this.setAttribute(h2, n2), this._$Ei = null;
    }
  }
  _$AK(t2, i2) {
    var s2, e2, r2;
    const h2 = this.constructor, n2 = h2._$Eu.get(t2);
    if (n2 !== void 0 && this._$Ei !== n2) {
      const t3 = h2.getPropertyOptions(n2), l2 = t3.converter, a2 = (r2 = (e2 = (s2 = l2) === null || s2 === void 0 ? void 0 : s2.fromAttribute) !== null && e2 !== void 0 ? e2 : typeof l2 == "function" ? l2 : null) !== null && r2 !== void 0 ? r2 : o$6.fromAttribute;
      this._$Ei = n2, this[n2] = a2(i2, t3.type), this._$Ei = null;
    }
  }
  requestUpdate(t2, i2, s2) {
    let e2 = true;
    t2 !== void 0 && (((s2 = s2 || this.constructor.getPropertyOptions(t2)).hasChanged || n$4)(this[t2], i2) ? (this._$AL.has(t2) || this._$AL.set(t2, i2), s2.reflect === true && this._$Ei !== t2 && (this._$E_ === void 0 && (this._$E_ = new Map()), this._$E_.set(t2, s2))) : e2 = false), !this.isUpdatePending && e2 && (this._$Ep = this._$EC());
  }
  async _$EC() {
    this.isUpdatePending = true;
    try {
      await this._$Ep;
    } catch (t3) {
      Promise.reject(t3);
    }
    const t2 = this.scheduleUpdate();
    return t2 != null && await t2, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t2;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Et && (this._$Et.forEach((t3, i3) => this[i3] = t3), this._$Et = void 0);
    let i2 = false;
    const s2 = this._$AL;
    try {
      i2 = this.shouldUpdate(s2), i2 ? (this.willUpdate(s2), (t2 = this._$Eg) === null || t2 === void 0 || t2.forEach((t3) => {
        var i3;
        return (i3 = t3.hostUpdate) === null || i3 === void 0 ? void 0 : i3.call(t3);
      }), this.update(s2)) : this._$EU();
    } catch (t3) {
      throw i2 = false, this._$EU(), t3;
    }
    i2 && this._$AE(s2);
  }
  willUpdate(t2) {
  }
  _$AE(t2) {
    var i2;
    (i2 = this._$Eg) === null || i2 === void 0 || i2.forEach((t3) => {
      var i3;
      return (i3 = t3.hostUpdated) === null || i3 === void 0 ? void 0 : i3.call(t3);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
  }
  _$EU() {
    this._$AL = new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$Ep;
  }
  shouldUpdate(t2) {
    return true;
  }
  update(t2) {
    this._$E_ !== void 0 && (this._$E_.forEach((t3, i2) => this._$ES(i2, this[i2], t3)), this._$E_ = void 0), this._$EU();
  }
  updated(t2) {
  }
  firstUpdated(t2) {
  }
}
a$1.finalized = true, a$1.elementProperties = new Map(), a$1.elementStyles = [], a$1.shadowRootOptions = { mode: "open" }, h$2 == null || h$2({ ReactiveElement: a$1 }), ((s$2 = globalThis.reactiveElementVersions) !== null && s$2 !== void 0 ? s$2 : globalThis.reactiveElementVersions = []).push("1.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$2;
const i$4 = globalThis.trustedTypes, s$1 = i$4 ? i$4.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0, e$5 = `lit$${(Math.random() + "").slice(9)}$`, o$5 = "?" + e$5, n$3 = `<${o$5}>`, l$3 = document, h$1 = (t2 = "") => l$3.createComment(t2), r$2 = (t2) => t2 === null || typeof t2 != "object" && typeof t2 != "function", d$1 = Array.isArray, u = (t2) => {
  var i2;
  return d$1(t2) || typeof ((i2 = t2) === null || i2 === void 0 ? void 0 : i2[Symbol.iterator]) == "function";
}, c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v = /-->/g, a = />/g, f = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g, _ = /'/g, m = /"/g, g = /^(?:script|style|textarea)$/i, $ = (t2) => (i2, ...s2) => ({ _$litType$: t2, strings: i2, values: s2 }), p = $(1), b = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), x = new WeakMap(), w = (t2, i2, s2) => {
  var e2, o2;
  const n2 = (e2 = s2 == null ? void 0 : s2.renderBefore) !== null && e2 !== void 0 ? e2 : i2;
  let l2 = n2._$litPart$;
  if (l2 === void 0) {
    const t3 = (o2 = s2 == null ? void 0 : s2.renderBefore) !== null && o2 !== void 0 ? o2 : null;
    n2._$litPart$ = l2 = new N(i2.insertBefore(h$1(), t3), t3, void 0, s2 != null ? s2 : {});
  }
  return l2._$AI(t2), l2;
}, A = l$3.createTreeWalker(l$3, 129, null, false), C = (t2, i2) => {
  const o2 = t2.length - 1, l2 = [];
  let h2, r2 = i2 === 2 ? "<svg>" : "", d2 = c;
  for (let i3 = 0; i3 < o2; i3++) {
    const s2 = t2[i3];
    let o3, u3, $2 = -1, p2 = 0;
    for (; p2 < s2.length && (d2.lastIndex = p2, u3 = d2.exec(s2), u3 !== null); )
      p2 = d2.lastIndex, d2 === c ? u3[1] === "!--" ? d2 = v : u3[1] !== void 0 ? d2 = a : u3[2] !== void 0 ? (g.test(u3[2]) && (h2 = RegExp("</" + u3[2], "g")), d2 = f) : u3[3] !== void 0 && (d2 = f) : d2 === f ? u3[0] === ">" ? (d2 = h2 != null ? h2 : c, $2 = -1) : u3[1] === void 0 ? $2 = -2 : ($2 = d2.lastIndex - u3[2].length, o3 = u3[1], d2 = u3[3] === void 0 ? f : u3[3] === '"' ? m : _) : d2 === m || d2 === _ ? d2 = f : d2 === v || d2 === a ? d2 = c : (d2 = f, h2 = void 0);
    const y = d2 === f && t2[i3 + 1].startsWith("/>") ? " " : "";
    r2 += d2 === c ? s2 + n$3 : $2 >= 0 ? (l2.push(o3), s2.slice(0, $2) + "$lit$" + s2.slice($2) + e$5 + y) : s2 + e$5 + ($2 === -2 ? (l2.push(void 0), i3) : y);
  }
  const u2 = r2 + (t2[o2] || "<?>") + (i2 === 2 ? "</svg>" : "");
  return [s$1 !== void 0 ? s$1.createHTML(u2) : u2, l2];
};
class P {
  constructor({ strings: t2, _$litType$: s2 }, n2) {
    let l2;
    this.parts = [];
    let r2 = 0, d2 = 0;
    const u2 = t2.length - 1, c2 = this.parts, [v2, a2] = C(t2, s2);
    if (this.el = P.createElement(v2, n2), A.currentNode = this.el.content, s2 === 2) {
      const t3 = this.el.content, i2 = t3.firstChild;
      i2.remove(), t3.append(...i2.childNodes);
    }
    for (; (l2 = A.nextNode()) !== null && c2.length < u2; ) {
      if (l2.nodeType === 1) {
        if (l2.hasAttributes()) {
          const t3 = [];
          for (const i2 of l2.getAttributeNames())
            if (i2.endsWith("$lit$") || i2.startsWith(e$5)) {
              const s3 = a2[d2++];
              if (t3.push(i2), s3 !== void 0) {
                const t4 = l2.getAttribute(s3.toLowerCase() + "$lit$").split(e$5), i3 = /([.?@])?(.*)/.exec(s3);
                c2.push({ type: 1, index: r2, name: i3[2], strings: t4, ctor: i3[1] === "." ? M : i3[1] === "?" ? H : i3[1] === "@" ? I : S });
              } else
                c2.push({ type: 6, index: r2 });
            }
          for (const i2 of t3)
            l2.removeAttribute(i2);
        }
        if (g.test(l2.tagName)) {
          const t3 = l2.textContent.split(e$5), s3 = t3.length - 1;
          if (s3 > 0) {
            l2.textContent = i$4 ? i$4.emptyScript : "";
            for (let i2 = 0; i2 < s3; i2++)
              l2.append(t3[i2], h$1()), A.nextNode(), c2.push({ type: 2, index: ++r2 });
            l2.append(t3[s3], h$1());
          }
        }
      } else if (l2.nodeType === 8)
        if (l2.data === o$5)
          c2.push({ type: 2, index: r2 });
        else {
          let t3 = -1;
          for (; (t3 = l2.data.indexOf(e$5, t3 + 1)) !== -1; )
            c2.push({ type: 7, index: r2 }), t3 += e$5.length - 1;
        }
      r2++;
    }
  }
  static createElement(t2, i2) {
    const s2 = l$3.createElement("template");
    return s2.innerHTML = t2, s2;
  }
}
function V(t2, i2, s2 = t2, e2) {
  var o2, n2, l2, h2;
  if (i2 === b)
    return i2;
  let d2 = e2 !== void 0 ? (o2 = s2._$Cl) === null || o2 === void 0 ? void 0 : o2[e2] : s2._$Cu;
  const u2 = r$2(i2) ? void 0 : i2._$litDirective$;
  return (d2 == null ? void 0 : d2.constructor) !== u2 && ((n2 = d2 == null ? void 0 : d2._$AO) === null || n2 === void 0 || n2.call(d2, false), u2 === void 0 ? d2 = void 0 : (d2 = new u2(t2), d2._$AT(t2, s2, e2)), e2 !== void 0 ? ((l2 = (h2 = s2)._$Cl) !== null && l2 !== void 0 ? l2 : h2._$Cl = [])[e2] = d2 : s2._$Cu = d2), d2 !== void 0 && (i2 = V(t2, d2._$AS(t2, i2.values), d2, e2)), i2;
}
class E {
  constructor(t2, i2) {
    this.v = [], this._$AN = void 0, this._$AD = t2, this._$AM = i2;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  p(t2) {
    var i2;
    const { el: { content: s2 }, parts: e2 } = this._$AD, o2 = ((i2 = t2 == null ? void 0 : t2.creationScope) !== null && i2 !== void 0 ? i2 : l$3).importNode(s2, true);
    A.currentNode = o2;
    let n2 = A.nextNode(), h2 = 0, r2 = 0, d2 = e2[0];
    for (; d2 !== void 0; ) {
      if (h2 === d2.index) {
        let i3;
        d2.type === 2 ? i3 = new N(n2, n2.nextSibling, this, t2) : d2.type === 1 ? i3 = new d2.ctor(n2, d2.name, d2.strings, this, t2) : d2.type === 6 && (i3 = new L(n2, this, t2)), this.v.push(i3), d2 = e2[++r2];
      }
      h2 !== (d2 == null ? void 0 : d2.index) && (n2 = A.nextNode(), h2++);
    }
    return o2;
  }
  m(t2) {
    let i2 = 0;
    for (const s2 of this.v)
      s2 !== void 0 && (s2.strings !== void 0 ? (s2._$AI(t2, s2, i2), i2 += s2.strings.length - 2) : s2._$AI(t2[i2])), i2++;
  }
}
class N {
  constructor(t2, i2, s2, e2) {
    var o2;
    this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = t2, this._$AB = i2, this._$AM = s2, this.options = e2, this._$Cg = (o2 = e2 == null ? void 0 : e2.isConnected) === null || o2 === void 0 || o2;
  }
  get _$AU() {
    var t2, i2;
    return (i2 = (t2 = this._$AM) === null || t2 === void 0 ? void 0 : t2._$AU) !== null && i2 !== void 0 ? i2 : this._$Cg;
  }
  get parentNode() {
    let t2 = this._$AA.parentNode;
    const i2 = this._$AM;
    return i2 !== void 0 && t2.nodeType === 11 && (t2 = i2.parentNode), t2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t2, i2 = this) {
    t2 = V(this, t2, i2), r$2(t2) ? t2 === T || t2 == null || t2 === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : t2 !== this._$AH && t2 !== b && this.$(t2) : t2._$litType$ !== void 0 ? this.T(t2) : t2.nodeType !== void 0 ? this.S(t2) : u(t2) ? this.M(t2) : this.$(t2);
  }
  A(t2, i2 = this._$AB) {
    return this._$AA.parentNode.insertBefore(t2, i2);
  }
  S(t2) {
    this._$AH !== t2 && (this._$AR(), this._$AH = this.A(t2));
  }
  $(t2) {
    this._$AH !== T && r$2(this._$AH) ? this._$AA.nextSibling.data = t2 : this.S(l$3.createTextNode(t2)), this._$AH = t2;
  }
  T(t2) {
    var i2;
    const { values: s2, _$litType$: e2 } = t2, o2 = typeof e2 == "number" ? this._$AC(t2) : (e2.el === void 0 && (e2.el = P.createElement(e2.h, this.options)), e2);
    if (((i2 = this._$AH) === null || i2 === void 0 ? void 0 : i2._$AD) === o2)
      this._$AH.m(s2);
    else {
      const t3 = new E(o2, this), i3 = t3.p(this.options);
      t3.m(s2), this.S(i3), this._$AH = t3;
    }
  }
  _$AC(t2) {
    let i2 = x.get(t2.strings);
    return i2 === void 0 && x.set(t2.strings, i2 = new P(t2)), i2;
  }
  M(t2) {
    d$1(this._$AH) || (this._$AH = [], this._$AR());
    const i2 = this._$AH;
    let s2, e2 = 0;
    for (const o2 of t2)
      e2 === i2.length ? i2.push(s2 = new N(this.A(h$1()), this.A(h$1()), this, this.options)) : s2 = i2[e2], s2._$AI(o2), e2++;
    e2 < i2.length && (this._$AR(s2 && s2._$AB.nextSibling, e2), i2.length = e2);
  }
  _$AR(t2 = this._$AA.nextSibling, i2) {
    var s2;
    for ((s2 = this._$AP) === null || s2 === void 0 || s2.call(this, false, true, i2); t2 && t2 !== this._$AB; ) {
      const i3 = t2.nextSibling;
      t2.remove(), t2 = i3;
    }
  }
  setConnected(t2) {
    var i2;
    this._$AM === void 0 && (this._$Cg = t2, (i2 = this._$AP) === null || i2 === void 0 || i2.call(this, t2));
  }
}
class S {
  constructor(t2, i2, s2, e2, o2) {
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = t2, this.name = i2, this._$AM = e2, this.options = o2, s2.length > 2 || s2[0] !== "" || s2[1] !== "" ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = T;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2, i2 = this, s2, e2) {
    const o2 = this.strings;
    let n2 = false;
    if (o2 === void 0)
      t2 = V(this, t2, i2, 0), n2 = !r$2(t2) || t2 !== this._$AH && t2 !== b, n2 && (this._$AH = t2);
    else {
      const e3 = t2;
      let l2, h2;
      for (t2 = o2[0], l2 = 0; l2 < o2.length - 1; l2++)
        h2 = V(this, e3[s2 + l2], i2, l2), h2 === b && (h2 = this._$AH[l2]), n2 || (n2 = !r$2(h2) || h2 !== this._$AH[l2]), h2 === T ? t2 = T : t2 !== T && (t2 += (h2 != null ? h2 : "") + o2[l2 + 1]), this._$AH[l2] = h2;
    }
    n2 && !e2 && this.k(t2);
  }
  k(t2) {
    t2 === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 != null ? t2 : "");
  }
}
class M extends S {
  constructor() {
    super(...arguments), this.type = 3;
  }
  k(t2) {
    this.element[this.name] = t2 === T ? void 0 : t2;
  }
}
const k = i$4 ? i$4.emptyScript : "";
class H extends S {
  constructor() {
    super(...arguments), this.type = 4;
  }
  k(t2) {
    t2 && t2 !== T ? this.element.setAttribute(this.name, k) : this.element.removeAttribute(this.name);
  }
}
class I extends S {
  constructor(t2, i2, s2, e2, o2) {
    super(t2, i2, s2, e2, o2), this.type = 5;
  }
  _$AI(t2, i2 = this) {
    var s2;
    if ((t2 = (s2 = V(this, t2, i2, 0)) !== null && s2 !== void 0 ? s2 : T) === b)
      return;
    const e2 = this._$AH, o2 = t2 === T && e2 !== T || t2.capture !== e2.capture || t2.once !== e2.once || t2.passive !== e2.passive, n2 = t2 !== T && (e2 === T || o2);
    o2 && this.element.removeEventListener(this.name, this, e2), n2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
  }
  handleEvent(t2) {
    var i2, s2;
    typeof this._$AH == "function" ? this._$AH.call((s2 = (i2 = this.options) === null || i2 === void 0 ? void 0 : i2.host) !== null && s2 !== void 0 ? s2 : this.element, t2) : this._$AH.handleEvent(t2);
  }
}
class L {
  constructor(t2, i2, s2) {
    this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i2, this.options = s2;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2) {
    V(this, t2);
  }
}
const z = window.litHtmlPolyfillSupport;
z == null || z(P, N), ((t$2 = globalThis.litHtmlVersions) !== null && t$2 !== void 0 ? t$2 : globalThis.litHtmlVersions = []).push("2.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var l$2, o$4;
class s extends a$1 {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Dt = void 0;
  }
  createRenderRoot() {
    var t2, e2;
    const i2 = super.createRenderRoot();
    return (t2 = (e2 = this.renderOptions).renderBefore) !== null && t2 !== void 0 || (e2.renderBefore = i2.firstChild), i2;
  }
  update(t2) {
    const i2 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Dt = w(i2, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t2;
    super.connectedCallback(), (t2 = this._$Dt) === null || t2 === void 0 || t2.setConnected(true);
  }
  disconnectedCallback() {
    var t2;
    super.disconnectedCallback(), (t2 = this._$Dt) === null || t2 === void 0 || t2.setConnected(false);
  }
  render() {
    return b;
  }
}
s.finalized = true, s._$litElement$ = true, (l$2 = globalThis.litElementHydrateSupport) === null || l$2 === void 0 || l$2.call(globalThis, { LitElement: s });
const n$2 = globalThis.litElementPolyfillSupport;
n$2 == null || n$2({ LitElement: s });
((o$4 = globalThis.litElementVersions) !== null && o$4 !== void 0 ? o$4 : globalThis.litElementVersions = []).push("3.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n$1 = (n2) => (e2) => typeof e2 == "function" ? ((n3, e3) => (window.customElements.define(n3, e3), e3))(n2, e2) : ((n3, e3) => {
  const { kind: t2, elements: i2 } = e3;
  return { kind: t2, elements: i2, finisher(e4) {
    window.customElements.define(n3, e4);
  } };
})(n2, e2);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$3 = (i2, e2) => e2.kind === "method" && e2.descriptor && !("value" in e2.descriptor) ? __spreadProps(__spreadValues({}, e2), { finisher(n2) {
  n2.createProperty(e2.key, i2);
} }) : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e2.key, initializer() {
  typeof e2.initializer == "function" && (this[e2.key] = e2.initializer.call(this));
}, finisher(n2) {
  n2.createProperty(e2.key, i2);
} };
function e$4(e2) {
  return (n2, t2) => t2 !== void 0 ? ((i2, e3, n3) => {
    e3.constructor.createProperty(n3, i2);
  })(e2, n2, t2) : i$3(e2, n2);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function t$1(t2) {
  return e$4(__spreadProps(__spreadValues({}, t2), { state: true }));
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o$3 = ({ finisher: e2, descriptor: t2 }) => (o2, n2) => {
  var r2;
  if (n2 === void 0) {
    const n3 = (r2 = o2.originalKey) !== null && r2 !== void 0 ? r2 : o2.key, i2 = t2 != null ? { kind: "method", placement: "prototype", key: n3, descriptor: t2(o2.key) } : __spreadProps(__spreadValues({}, o2), { key: n3 });
    return e2 != null && (i2.finisher = function(t3) {
      e2(t3, n3);
    }), i2;
  }
  {
    const r3 = o2.constructor;
    t2 !== void 0 && Object.defineProperty(o2, n2, t2(n2)), e2 == null || e2(r3, n2);
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e$3(e2) {
  return o$3({ finisher: (r2, t2) => {
    Object.assign(r2.prototype[t2], e2);
  } });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function i$2(i2, n2) {
  return o$3({ descriptor: (o2) => {
    const t2 = { get() {
      var o3, n3;
      return (n3 = (o3 = this.renderRoot) === null || o3 === void 0 ? void 0 : o3.querySelector(i2)) !== null && n3 !== void 0 ? n3 : null;
    }, enumerable: true, configurable: true };
    if (n2) {
      const n3 = typeof o2 == "symbol" ? Symbol() : "__" + o2;
      t2.get = function() {
        var o3, t3;
        return this[n3] === void 0 && (this[n3] = (t3 = (o3 = this.renderRoot) === null || o3 === void 0 ? void 0 : o3.querySelector(i2)) !== null && t3 !== void 0 ? t3 : null), this[n3];
      };
    }
    return t2;
  } });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e$2(e2) {
  return o$3({ descriptor: (r2) => ({ async get() {
    var r3;
    return await this.updateComplete, (r3 = this.renderRoot) === null || r3 === void 0 ? void 0 : r3.querySelector(e2);
  }, enumerable: true, configurable: true }) });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function o$2(o2 = "", n2 = false, t2 = "") {
  return o$3({ descriptor: (e2) => ({ get() {
    var e3, r2, l2;
    const i2 = "slot" + (o2 ? `[name=${o2}]` : ":not([name])");
    let u2 = (l2 = (r2 = (e3 = this.renderRoot) === null || e3 === void 0 ? void 0 : e3.querySelector(i2)) === null || r2 === void 0 ? void 0 : r2.assignedNodes({ flatten: n2 })) !== null && l2 !== void 0 ? l2 : [];
    return t2 && (u2 = u2.filter((e4) => e4.nodeType === Node.ELEMENT_NODE && e4.matches(t2))), u2;
  }, enumerable: true, configurable: true }) });
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$8 = r$4`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Icon = class Icon2 extends s {
  render() {
    return p`<span><slot></slot></span>`;
  }
};
Icon.styles = [styles$8];
Icon = __decorate([
  n$1("mwc-icon")
], Icon);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function matches(element, selector) {
  var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
  return nativeMatches.call(element, selector);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const isNodeElement = (node) => {
  return node.nodeType === Node.ELEMENT_NODE;
};
function addHasRemoveClass(element) {
  return {
    addClass: (className) => {
      element.classList.add(className);
    },
    removeClass: (className) => {
      element.classList.remove(className);
    },
    hasClass: (className) => element.classList.contains(className)
  };
}
const fn = () => {
};
const optionsBlock = {
  get passive() {
    return false;
  }
};
document.addEventListener("x", fn, optionsBlock);
document.removeEventListener("x", fn);
const deepActiveElementPath = (doc = window.document) => {
  let activeElement = doc.activeElement;
  const path = [];
  if (!activeElement) {
    return path;
  }
  while (activeElement) {
    path.push(activeElement);
    if (activeElement.shadowRoot) {
      activeElement = activeElement.shadowRoot.activeElement;
    } else {
      break;
    }
  }
  return path;
};
const doesElementContainFocus = (element) => {
  const activePath = deepActiveElementPath();
  if (!activePath.length) {
    return false;
  }
  const deepActiveElement = activePath[activePath.length - 1];
  const focusEv = new Event("check-if-focused", { bubbles: true, composed: true });
  let composedPath = [];
  const listener = (ev) => {
    composedPath = ev.composedPath();
  };
  document.body.addEventListener("check-if-focused", listener);
  deepActiveElement.dispatchEvent(focusEv);
  document.body.removeEventListener("check-if-focused", listener);
  return composedPath.indexOf(element) !== -1;
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class BaseElement extends s {
  click() {
    if (this.mdcRoot) {
      this.mdcRoot.focus();
      this.mdcRoot.click();
      return;
    }
    super.click();
  }
  createFoundation() {
    if (this.mdcFoundation !== void 0) {
      this.mdcFoundation.destroy();
    }
    if (this.mdcFoundationClass) {
      this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter());
      this.mdcFoundation.init();
    }
  }
  firstUpdated() {
    this.createFoundation();
  }
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = function() {
  function MDCFoundation2(adapter) {
    if (adapter === void 0) {
      adapter = {};
    }
    this.adapter = adapter;
  }
  Object.defineProperty(MDCFoundation2, "cssClasses", {
    get: function() {
      return {};
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFoundation2, "strings", {
    get: function() {
      return {};
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFoundation2, "numbers", {
    get: function() {
      return {};
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFoundation2, "defaultAdapter", {
    get: function() {
      return {};
    },
    enumerable: false,
    configurable: true
  });
  MDCFoundation2.prototype.init = function() {
  };
  MDCFoundation2.prototype.destroy = function() {
  };
  return MDCFoundation2;
}();
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$4 = {
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
};
var strings$4 = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
};
var numbers$4 = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
};
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
  if (!evt) {
    return { x: 0, y: 0 };
  }
  var x2 = pageOffset.x, y = pageOffset.y;
  var documentX = x2 + clientRect.left;
  var documentY = y + clientRect.top;
  var normalizedX;
  var normalizedY;
  if (evt.type === "touchstart") {
    var touchEvent = evt;
    normalizedX = touchEvent.changedTouches[0].pageX - documentX;
    normalizedY = touchEvent.changedTouches[0].pageY - documentY;
  } else {
    var mouseEvent = evt;
    normalizedX = mouseEvent.pageX - documentX;
    normalizedY = mouseEvent.pageY - documentY;
  }
  return { x: normalizedX, y: normalizedY };
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ACTIVATION_EVENT_TYPES = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
];
var POINTER_DEACTIVATION_EVENT_TYPES = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
];
var activatedTargets = [];
var MDCRippleFoundation = function(_super) {
  __extends(MDCRippleFoundation2, _super);
  function MDCRippleFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCRippleFoundation2.defaultAdapter), adapter)) || this;
    _this.activationAnimationHasEnded = false;
    _this.activationTimer = 0;
    _this.fgDeactivationRemovalTimer = 0;
    _this.fgScale = "0";
    _this.frame = { width: 0, height: 0 };
    _this.initialSize = 0;
    _this.layoutFrame = 0;
    _this.maxRadius = 0;
    _this.unboundedCoords = { left: 0, top: 0 };
    _this.activationState = _this.defaultActivationState();
    _this.activationTimerCallback = function() {
      _this.activationAnimationHasEnded = true;
      _this.runDeactivationUXLogicIfReady();
    };
    _this.activateHandler = function(e2) {
      _this.activateImpl(e2);
    };
    _this.deactivateHandler = function() {
      _this.deactivateImpl();
    };
    _this.focusHandler = function() {
      _this.handleFocus();
    };
    _this.blurHandler = function() {
      _this.handleBlur();
    };
    _this.resizeHandler = function() {
      _this.layout();
    };
    return _this;
  }
  Object.defineProperty(MDCRippleFoundation2, "cssClasses", {
    get: function() {
      return cssClasses$4;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation2, "strings", {
    get: function() {
      return strings$4;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation2, "numbers", {
    get: function() {
      return numbers$4;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        browserSupportsCssVars: function() {
          return true;
        },
        computeBoundingRect: function() {
          return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
        },
        containsEventTarget: function() {
          return true;
        },
        deregisterDocumentInteractionHandler: function() {
          return void 0;
        },
        deregisterInteractionHandler: function() {
          return void 0;
        },
        deregisterResizeHandler: function() {
          return void 0;
        },
        getWindowPageOffset: function() {
          return { x: 0, y: 0 };
        },
        isSurfaceActive: function() {
          return true;
        },
        isSurfaceDisabled: function() {
          return true;
        },
        isUnbounded: function() {
          return true;
        },
        registerDocumentInteractionHandler: function() {
          return void 0;
        },
        registerInteractionHandler: function() {
          return void 0;
        },
        registerResizeHandler: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        updateCssVariable: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCRippleFoundation2.prototype.init = function() {
    var _this = this;
    var supportsPressRipple = this.supportsPressRipple();
    this.registerRootHandlers(supportsPressRipple);
    if (supportsPressRipple) {
      var _a2 = MDCRippleFoundation2.cssClasses, ROOT_1 = _a2.ROOT, UNBOUNDED_1 = _a2.UNBOUNDED;
      requestAnimationFrame(function() {
        _this.adapter.addClass(ROOT_1);
        if (_this.adapter.isUnbounded()) {
          _this.adapter.addClass(UNBOUNDED_1);
          _this.layoutInternal();
        }
      });
    }
  };
  MDCRippleFoundation2.prototype.destroy = function() {
    var _this = this;
    if (this.supportsPressRipple()) {
      if (this.activationTimer) {
        clearTimeout(this.activationTimer);
        this.activationTimer = 0;
        this.adapter.removeClass(MDCRippleFoundation2.cssClasses.FG_ACTIVATION);
      }
      if (this.fgDeactivationRemovalTimer) {
        clearTimeout(this.fgDeactivationRemovalTimer);
        this.fgDeactivationRemovalTimer = 0;
        this.adapter.removeClass(MDCRippleFoundation2.cssClasses.FG_DEACTIVATION);
      }
      var _a2 = MDCRippleFoundation2.cssClasses, ROOT_2 = _a2.ROOT, UNBOUNDED_2 = _a2.UNBOUNDED;
      requestAnimationFrame(function() {
        _this.adapter.removeClass(ROOT_2);
        _this.adapter.removeClass(UNBOUNDED_2);
        _this.removeCssVars();
      });
    }
    this.deregisterRootHandlers();
    this.deregisterDeactivationHandlers();
  };
  MDCRippleFoundation2.prototype.activate = function(evt) {
    this.activateImpl(evt);
  };
  MDCRippleFoundation2.prototype.deactivate = function() {
    this.deactivateImpl();
  };
  MDCRippleFoundation2.prototype.layout = function() {
    var _this = this;
    if (this.layoutFrame) {
      cancelAnimationFrame(this.layoutFrame);
    }
    this.layoutFrame = requestAnimationFrame(function() {
      _this.layoutInternal();
      _this.layoutFrame = 0;
    });
  };
  MDCRippleFoundation2.prototype.setUnbounded = function(unbounded) {
    var UNBOUNDED = MDCRippleFoundation2.cssClasses.UNBOUNDED;
    if (unbounded) {
      this.adapter.addClass(UNBOUNDED);
    } else {
      this.adapter.removeClass(UNBOUNDED);
    }
  };
  MDCRippleFoundation2.prototype.handleFocus = function() {
    var _this = this;
    requestAnimationFrame(function() {
      return _this.adapter.addClass(MDCRippleFoundation2.cssClasses.BG_FOCUSED);
    });
  };
  MDCRippleFoundation2.prototype.handleBlur = function() {
    var _this = this;
    requestAnimationFrame(function() {
      return _this.adapter.removeClass(MDCRippleFoundation2.cssClasses.BG_FOCUSED);
    });
  };
  MDCRippleFoundation2.prototype.supportsPressRipple = function() {
    return this.adapter.browserSupportsCssVars();
  };
  MDCRippleFoundation2.prototype.defaultActivationState = function() {
    return {
      activationEvent: void 0,
      hasDeactivationUXRun: false,
      isActivated: false,
      isProgrammatic: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false
    };
  };
  MDCRippleFoundation2.prototype.registerRootHandlers = function(supportsPressRipple) {
    var e_1, _a2;
    if (supportsPressRipple) {
      try {
        for (var ACTIVATION_EVENT_TYPES_1 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next(); !ACTIVATION_EVENT_TYPES_1_1.done; ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next()) {
          var evtType = ACTIVATION_EVENT_TYPES_1_1.value;
          this.adapter.registerInteractionHandler(evtType, this.activateHandler);
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (ACTIVATION_EVENT_TYPES_1_1 && !ACTIVATION_EVENT_TYPES_1_1.done && (_a2 = ACTIVATION_EVENT_TYPES_1.return))
            _a2.call(ACTIVATION_EVENT_TYPES_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      if (this.adapter.isUnbounded()) {
        this.adapter.registerResizeHandler(this.resizeHandler);
      }
    }
    this.adapter.registerInteractionHandler("focus", this.focusHandler);
    this.adapter.registerInteractionHandler("blur", this.blurHandler);
  };
  MDCRippleFoundation2.prototype.registerDeactivationHandlers = function(evt) {
    var e_2, _a2;
    if (evt.type === "keydown") {
      this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
    } else {
      try {
        for (var POINTER_DEACTIVATION_EVENT_TYPES_1 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next(); !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done; POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next()) {
          var evtType = POINTER_DEACTIVATION_EVENT_TYPES_1_1.value;
          this.adapter.registerDocumentInteractionHandler(evtType, this.deactivateHandler);
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          if (POINTER_DEACTIVATION_EVENT_TYPES_1_1 && !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done && (_a2 = POINTER_DEACTIVATION_EVENT_TYPES_1.return))
            _a2.call(POINTER_DEACTIVATION_EVENT_TYPES_1);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
    }
  };
  MDCRippleFoundation2.prototype.deregisterRootHandlers = function() {
    var e_3, _a2;
    try {
      for (var ACTIVATION_EVENT_TYPES_2 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next(); !ACTIVATION_EVENT_TYPES_2_1.done; ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next()) {
        var evtType = ACTIVATION_EVENT_TYPES_2_1.value;
        this.adapter.deregisterInteractionHandler(evtType, this.activateHandler);
      }
    } catch (e_3_1) {
      e_3 = { error: e_3_1 };
    } finally {
      try {
        if (ACTIVATION_EVENT_TYPES_2_1 && !ACTIVATION_EVENT_TYPES_2_1.done && (_a2 = ACTIVATION_EVENT_TYPES_2.return))
          _a2.call(ACTIVATION_EVENT_TYPES_2);
      } finally {
        if (e_3)
          throw e_3.error;
      }
    }
    this.adapter.deregisterInteractionHandler("focus", this.focusHandler);
    this.adapter.deregisterInteractionHandler("blur", this.blurHandler);
    if (this.adapter.isUnbounded()) {
      this.adapter.deregisterResizeHandler(this.resizeHandler);
    }
  };
  MDCRippleFoundation2.prototype.deregisterDeactivationHandlers = function() {
    var e_4, _a2;
    this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
    try {
      for (var POINTER_DEACTIVATION_EVENT_TYPES_2 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next(); !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done; POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next()) {
        var evtType = POINTER_DEACTIVATION_EVENT_TYPES_2_1.value;
        this.adapter.deregisterDocumentInteractionHandler(evtType, this.deactivateHandler);
      }
    } catch (e_4_1) {
      e_4 = { error: e_4_1 };
    } finally {
      try {
        if (POINTER_DEACTIVATION_EVENT_TYPES_2_1 && !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done && (_a2 = POINTER_DEACTIVATION_EVENT_TYPES_2.return))
          _a2.call(POINTER_DEACTIVATION_EVENT_TYPES_2);
      } finally {
        if (e_4)
          throw e_4.error;
      }
    }
  };
  MDCRippleFoundation2.prototype.removeCssVars = function() {
    var _this = this;
    var rippleStrings = MDCRippleFoundation2.strings;
    var keys = Object.keys(rippleStrings);
    keys.forEach(function(key) {
      if (key.indexOf("VAR_") === 0) {
        _this.adapter.updateCssVariable(rippleStrings[key], null);
      }
    });
  };
  MDCRippleFoundation2.prototype.activateImpl = function(evt) {
    var _this = this;
    if (this.adapter.isSurfaceDisabled()) {
      return;
    }
    var activationState = this.activationState;
    if (activationState.isActivated) {
      return;
    }
    var previousActivationEvent = this.previousActivationEvent;
    var isSameInteraction = previousActivationEvent && evt !== void 0 && previousActivationEvent.type !== evt.type;
    if (isSameInteraction) {
      return;
    }
    activationState.isActivated = true;
    activationState.isProgrammatic = evt === void 0;
    activationState.activationEvent = evt;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== void 0 && (evt.type === "mousedown" || evt.type === "touchstart" || evt.type === "pointerdown");
    var hasActivatedChild = evt !== void 0 && activatedTargets.length > 0 && activatedTargets.some(function(target) {
      return _this.adapter.containsEventTarget(target);
    });
    if (hasActivatedChild) {
      this.resetActivationState();
      return;
    }
    if (evt !== void 0) {
      activatedTargets.push(evt.target);
      this.registerDeactivationHandlers(evt);
    }
    activationState.wasElementMadeActive = this.checkElementMadeActive(evt);
    if (activationState.wasElementMadeActive) {
      this.animateActivation();
    }
    requestAnimationFrame(function() {
      activatedTargets = [];
      if (!activationState.wasElementMadeActive && evt !== void 0 && (evt.key === " " || evt.keyCode === 32)) {
        activationState.wasElementMadeActive = _this.checkElementMadeActive(evt);
        if (activationState.wasElementMadeActive) {
          _this.animateActivation();
        }
      }
      if (!activationState.wasElementMadeActive) {
        _this.activationState = _this.defaultActivationState();
      }
    });
  };
  MDCRippleFoundation2.prototype.checkElementMadeActive = function(evt) {
    return evt !== void 0 && evt.type === "keydown" ? this.adapter.isSurfaceActive() : true;
  };
  MDCRippleFoundation2.prototype.animateActivation = function() {
    var _this = this;
    var _a2 = MDCRippleFoundation2.strings, VAR_FG_TRANSLATE_START = _a2.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a2.VAR_FG_TRANSLATE_END;
    var _b2 = MDCRippleFoundation2.cssClasses, FG_DEACTIVATION = _b2.FG_DEACTIVATION, FG_ACTIVATION = _b2.FG_ACTIVATION;
    var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation2.numbers.DEACTIVATION_TIMEOUT_MS;
    this.layoutInternal();
    var translateStart = "";
    var translateEnd = "";
    if (!this.adapter.isUnbounded()) {
      var _c = this.getFgTranslationCoordinates(), startPoint = _c.startPoint, endPoint = _c.endPoint;
      translateStart = startPoint.x + "px, " + startPoint.y + "px";
      translateEnd = endPoint.x + "px, " + endPoint.y + "px";
    }
    this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
    this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
    clearTimeout(this.activationTimer);
    clearTimeout(this.fgDeactivationRemovalTimer);
    this.rmBoundedActivationClasses();
    this.adapter.removeClass(FG_DEACTIVATION);
    this.adapter.computeBoundingRect();
    this.adapter.addClass(FG_ACTIVATION);
    this.activationTimer = setTimeout(function() {
      _this.activationTimerCallback();
    }, DEACTIVATION_TIMEOUT_MS);
  };
  MDCRippleFoundation2.prototype.getFgTranslationCoordinates = function() {
    var _a2 = this.activationState, activationEvent = _a2.activationEvent, wasActivatedByPointer = _a2.wasActivatedByPointer;
    var startPoint;
    if (wasActivatedByPointer) {
      startPoint = getNormalizedEventCoords(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
    } else {
      startPoint = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      };
    }
    startPoint = {
      x: startPoint.x - this.initialSize / 2,
      y: startPoint.y - this.initialSize / 2
    };
    var endPoint = {
      x: this.frame.width / 2 - this.initialSize / 2,
      y: this.frame.height / 2 - this.initialSize / 2
    };
    return { startPoint, endPoint };
  };
  MDCRippleFoundation2.prototype.runDeactivationUXLogicIfReady = function() {
    var _this = this;
    var FG_DEACTIVATION = MDCRippleFoundation2.cssClasses.FG_DEACTIVATION;
    var _a2 = this.activationState, hasDeactivationUXRun = _a2.hasDeactivationUXRun, isActivated = _a2.isActivated;
    var activationHasEnded = hasDeactivationUXRun || !isActivated;
    if (activationHasEnded && this.activationAnimationHasEnded) {
      this.rmBoundedActivationClasses();
      this.adapter.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer = setTimeout(function() {
        _this.adapter.removeClass(FG_DEACTIVATION);
      }, numbers$4.FG_DEACTIVATION_MS);
    }
  };
  MDCRippleFoundation2.prototype.rmBoundedActivationClasses = function() {
    var FG_ACTIVATION = MDCRippleFoundation2.cssClasses.FG_ACTIVATION;
    this.adapter.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded = false;
    this.adapter.computeBoundingRect();
  };
  MDCRippleFoundation2.prototype.resetActivationState = function() {
    var _this = this;
    this.previousActivationEvent = this.activationState.activationEvent;
    this.activationState = this.defaultActivationState();
    setTimeout(function() {
      return _this.previousActivationEvent = void 0;
    }, MDCRippleFoundation2.numbers.TAP_DELAY_MS);
  };
  MDCRippleFoundation2.prototype.deactivateImpl = function() {
    var _this = this;
    var activationState = this.activationState;
    if (!activationState.isActivated) {
      return;
    }
    var state = __assign({}, activationState);
    if (activationState.isProgrammatic) {
      requestAnimationFrame(function() {
        _this.animateDeactivation(state);
      });
      this.resetActivationState();
    } else {
      this.deregisterDeactivationHandlers();
      requestAnimationFrame(function() {
        _this.activationState.hasDeactivationUXRun = true;
        _this.animateDeactivation(state);
        _this.resetActivationState();
      });
    }
  };
  MDCRippleFoundation2.prototype.animateDeactivation = function(_a2) {
    var wasActivatedByPointer = _a2.wasActivatedByPointer, wasElementMadeActive = _a2.wasElementMadeActive;
    if (wasActivatedByPointer || wasElementMadeActive) {
      this.runDeactivationUXLogicIfReady();
    }
  };
  MDCRippleFoundation2.prototype.layoutInternal = function() {
    var _this = this;
    this.frame = this.adapter.computeBoundingRect();
    var maxDim = Math.max(this.frame.height, this.frame.width);
    var getBoundedRadius = function() {
      var hypotenuse = Math.sqrt(Math.pow(_this.frame.width, 2) + Math.pow(_this.frame.height, 2));
      return hypotenuse + MDCRippleFoundation2.numbers.PADDING;
    };
    this.maxRadius = this.adapter.isUnbounded() ? maxDim : getBoundedRadius();
    var initialSize = Math.floor(maxDim * MDCRippleFoundation2.numbers.INITIAL_ORIGIN_SCALE);
    if (this.adapter.isUnbounded() && initialSize % 2 !== 0) {
      this.initialSize = initialSize - 1;
    } else {
      this.initialSize = initialSize;
    }
    this.fgScale = "" + this.maxRadius / this.initialSize;
    this.updateLayoutCssVars();
  };
  MDCRippleFoundation2.prototype.updateLayoutCssVars = function() {
    var _a2 = MDCRippleFoundation2.strings, VAR_FG_SIZE = _a2.VAR_FG_SIZE, VAR_LEFT = _a2.VAR_LEFT, VAR_TOP = _a2.VAR_TOP, VAR_FG_SCALE = _a2.VAR_FG_SCALE;
    this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize + "px");
    this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale);
    if (this.adapter.isUnbounded()) {
      this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      };
      this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords.left + "px");
      this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords.top + "px");
    }
  };
  return MDCRippleFoundation2;
}(MDCFoundation);
var MDCRippleFoundation$1 = MDCRippleFoundation;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, e$1 = (t2) => (...e2) => ({ _$litDirective$: t2, values: e2 });
class i$1 {
  constructor(t2) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t2, e2, i2) {
    this._$Ct = t2, this._$AM = e2, this._$Ci = i2;
  }
  _$AS(t2, e2) {
    return this.update(t2, e2);
  }
  update(t2, e2) {
    return this.render(...e2);
  }
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o$1 = e$1(class extends i$1 {
  constructor(t$12) {
    var i2;
    if (super(t$12), t$12.type !== t.ATTRIBUTE || t$12.name !== "class" || ((i2 = t$12.strings) === null || i2 === void 0 ? void 0 : i2.length) > 2)
      throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(t2) {
    return " " + Object.keys(t2).filter((i2) => t2[i2]).join(" ") + " ";
  }
  update(i2, [s2]) {
    var r2, o2;
    if (this.st === void 0) {
      this.st = new Set(), i2.strings !== void 0 && (this.et = new Set(i2.strings.join(" ").split(/\s/).filter((t2) => t2 !== "")));
      for (const t2 in s2)
        s2[t2] && !((r2 = this.et) === null || r2 === void 0 ? void 0 : r2.has(t2)) && this.st.add(t2);
      return this.render(s2);
    }
    const e2 = i2.element.classList;
    this.st.forEach((t2) => {
      t2 in s2 || (e2.remove(t2), this.st.delete(t2));
    });
    for (const t2 in s2) {
      const i3 = !!s2[t2];
      i3 === this.st.has(t2) || ((o2 = this.et) === null || o2 === void 0 ? void 0 : o2.has(t2)) || (i3 ? (e2.add(t2), this.st.add(t2)) : (e2.remove(t2), this.st.delete(t2)));
    }
    return b;
  }
});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i = e$1(class extends i$1 {
  constructor(t$12) {
    var e2;
    if (super(t$12), t$12.type !== t.ATTRIBUTE || t$12.name !== "style" || ((e2 = t$12.strings) === null || e2 === void 0 ? void 0 : e2.length) > 2)
      throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(t2) {
    return Object.keys(t2).reduce((e2, r2) => {
      const s2 = t2[r2];
      return s2 == null ? e2 : e2 + `${r2 = r2.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s2};`;
    }, "");
  }
  update(e2, [r2]) {
    const { style: s2 } = e2.element;
    if (this.ut === void 0) {
      this.ut = new Set();
      for (const t2 in r2)
        this.ut.add(t2);
      return this.render(r2);
    }
    this.ut.forEach((t2) => {
      r2[t2] == null && (this.ut.delete(t2), t2.includes("-") ? s2.removeProperty(t2) : s2[t2] = "");
    });
    for (const t2 in r2) {
      const e3 = r2[t2];
      e3 != null && (this.ut.add(t2), t2.includes("-") ? s2.setProperty(t2, e3) : s2[t2] = e3);
    }
    return b;
  }
});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class RippleBase extends BaseElement {
  constructor() {
    super(...arguments);
    this.primary = false;
    this.accent = false;
    this.unbounded = false;
    this.disabled = false;
    this.activated = false;
    this.selected = false;
    this.internalUseStateLayerCustomProperties = false;
    this.hovering = false;
    this.bgFocused = false;
    this.fgActivation = false;
    this.fgDeactivation = false;
    this.fgScale = "";
    this.fgSize = "";
    this.translateStart = "";
    this.translateEnd = "";
    this.leftPos = "";
    this.topPos = "";
    this.mdcFoundationClass = MDCRippleFoundation$1;
  }
  get isActive() {
    return matches(this.parentElement || this, ":active");
  }
  createAdapter() {
    return {
      browserSupportsCssVars: () => true,
      isUnbounded: () => this.unbounded,
      isSurfaceActive: () => this.isActive,
      isSurfaceDisabled: () => this.disabled,
      addClass: (className) => {
        switch (className) {
          case "mdc-ripple-upgraded--background-focused":
            this.bgFocused = true;
            break;
          case "mdc-ripple-upgraded--foreground-activation":
            this.fgActivation = true;
            break;
          case "mdc-ripple-upgraded--foreground-deactivation":
            this.fgDeactivation = true;
            break;
        }
      },
      removeClass: (className) => {
        switch (className) {
          case "mdc-ripple-upgraded--background-focused":
            this.bgFocused = false;
            break;
          case "mdc-ripple-upgraded--foreground-activation":
            this.fgActivation = false;
            break;
          case "mdc-ripple-upgraded--foreground-deactivation":
            this.fgDeactivation = false;
            break;
        }
      },
      containsEventTarget: () => true,
      registerInteractionHandler: () => void 0,
      deregisterInteractionHandler: () => void 0,
      registerDocumentInteractionHandler: () => void 0,
      deregisterDocumentInteractionHandler: () => void 0,
      registerResizeHandler: () => void 0,
      deregisterResizeHandler: () => void 0,
      updateCssVariable: (varName, value) => {
        switch (varName) {
          case "--mdc-ripple-fg-scale":
            this.fgScale = value;
            break;
          case "--mdc-ripple-fg-size":
            this.fgSize = value;
            break;
          case "--mdc-ripple-fg-translate-end":
            this.translateEnd = value;
            break;
          case "--mdc-ripple-fg-translate-start":
            this.translateStart = value;
            break;
          case "--mdc-ripple-left":
            this.leftPos = value;
            break;
          case "--mdc-ripple-top":
            this.topPos = value;
            break;
        }
      },
      computeBoundingRect: () => (this.parentElement || this).getBoundingClientRect(),
      getWindowPageOffset: () => ({ x: window.pageXOffset, y: window.pageYOffset })
    };
  }
  startPress(ev) {
    this.waitForFoundation(() => {
      this.mdcFoundation.activate(ev);
    });
  }
  endPress() {
    this.waitForFoundation(() => {
      this.mdcFoundation.deactivate();
    });
  }
  startFocus() {
    this.waitForFoundation(() => {
      this.mdcFoundation.handleFocus();
    });
  }
  endFocus() {
    this.waitForFoundation(() => {
      this.mdcFoundation.handleBlur();
    });
  }
  startHover() {
    this.hovering = true;
  }
  endHover() {
    this.hovering = false;
  }
  waitForFoundation(fn2) {
    if (this.mdcFoundation) {
      fn2();
    } else {
      this.updateComplete.then(fn2);
    }
  }
  update(changedProperties) {
    if (changedProperties.has("disabled")) {
      if (this.disabled) {
        this.endHover();
      }
    }
    super.update(changedProperties);
  }
  render() {
    const shouldActivateInPrimary = this.activated && (this.primary || !this.accent);
    const shouldSelectInPrimary = this.selected && (this.primary || !this.accent);
    const classes = {
      "mdc-ripple-surface--accent": this.accent,
      "mdc-ripple-surface--primary--activated": shouldActivateInPrimary,
      "mdc-ripple-surface--accent--activated": this.accent && this.activated,
      "mdc-ripple-surface--primary--selected": shouldSelectInPrimary,
      "mdc-ripple-surface--accent--selected": this.accent && this.selected,
      "mdc-ripple-surface--disabled": this.disabled,
      "mdc-ripple-surface--hover": this.hovering,
      "mdc-ripple-surface--primary": this.primary,
      "mdc-ripple-surface--selected": this.selected,
      "mdc-ripple-upgraded--background-focused": this.bgFocused,
      "mdc-ripple-upgraded--foreground-activation": this.fgActivation,
      "mdc-ripple-upgraded--foreground-deactivation": this.fgDeactivation,
      "mdc-ripple-upgraded--unbounded": this.unbounded,
      "mdc-ripple-surface--internal-use-state-layer-custom-properties": this.internalUseStateLayerCustomProperties
    };
    return p`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${o$1(classes)}"
          style="${i({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
}
__decorate([
  i$2(".mdc-ripple-surface")
], RippleBase.prototype, "mdcRoot", void 0);
__decorate([
  e$4({ type: Boolean })
], RippleBase.prototype, "primary", void 0);
__decorate([
  e$4({ type: Boolean })
], RippleBase.prototype, "accent", void 0);
__decorate([
  e$4({ type: Boolean })
], RippleBase.prototype, "unbounded", void 0);
__decorate([
  e$4({ type: Boolean })
], RippleBase.prototype, "disabled", void 0);
__decorate([
  e$4({ type: Boolean })
], RippleBase.prototype, "activated", void 0);
__decorate([
  e$4({ type: Boolean })
], RippleBase.prototype, "selected", void 0);
__decorate([
  e$4({ type: Boolean })
], RippleBase.prototype, "internalUseStateLayerCustomProperties", void 0);
__decorate([
  t$1()
], RippleBase.prototype, "hovering", void 0);
__decorate([
  t$1()
], RippleBase.prototype, "bgFocused", void 0);
__decorate([
  t$1()
], RippleBase.prototype, "fgActivation", void 0);
__decorate([
  t$1()
], RippleBase.prototype, "fgDeactivation", void 0);
__decorate([
  t$1()
], RippleBase.prototype, "fgScale", void 0);
__decorate([
  t$1()
], RippleBase.prototype, "fgSize", void 0);
__decorate([
  t$1()
], RippleBase.prototype, "translateStart", void 0);
__decorate([
  t$1()
], RippleBase.prototype, "translateEnd", void 0);
__decorate([
  t$1()
], RippleBase.prototype, "leftPos", void 0);
__decorate([
  t$1()
], RippleBase.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$7 = r$4`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Ripple = class Ripple2 extends RippleBase {
};
Ripple.styles = [styles$7];
Ripple = __decorate([
  n$1("mwc-ripple")
], Ripple);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function tsDecorator(prototype, name, descriptor) {
  const constructor = prototype.constructor;
  if (!descriptor) {
    const litInternalPropertyKey = `__${name}`;
    descriptor = constructor.getPropertyDescriptor(name, litInternalPropertyKey);
    if (!descriptor) {
      throw new Error("@ariaProperty must be used after a @property decorator");
    }
  }
  const propDescriptor = descriptor;
  let attribute = "";
  if (!propDescriptor.set) {
    throw new Error(`@ariaProperty requires a setter for ${name}`);
  }
  if (prototype.dispatchWizEvent) {
    return descriptor;
  }
  const wrappedDescriptor = {
    configurable: true,
    enumerable: true,
    set(value) {
      if (attribute === "") {
        const options = constructor.getPropertyOptions(name);
        attribute = typeof options.attribute === "string" ? options.attribute : name;
      }
      if (this.hasAttribute(attribute)) {
        this.removeAttribute(attribute);
      }
      propDescriptor.set.call(this, value);
    }
  };
  if (propDescriptor.get) {
    wrappedDescriptor.get = function() {
      return propDescriptor.get.call(this);
    };
  }
  return wrappedDescriptor;
}
function ariaProperty(protoOrDescriptor, name, descriptor) {
  if (name !== void 0) {
    return tsDecorator(protoOrDescriptor, name, descriptor);
  } else {
    throw new Error("@ariaProperty only supports TypeScript Decorators");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class RippleHandlers {
  constructor(rippleFn) {
    this.startPress = (ev) => {
      rippleFn().then((r2) => {
        r2 && r2.startPress(ev);
      });
    };
    this.endPress = () => {
      rippleFn().then((r2) => {
        r2 && r2.endPress();
      });
    };
    this.startFocus = () => {
      rippleFn().then((r2) => {
        r2 && r2.startFocus();
      });
    };
    this.endFocus = () => {
      rippleFn().then((r2) => {
        r2 && r2.endFocus();
      });
    };
    this.startHover = () => {
      rippleFn().then((r2) => {
        r2 && r2.startHover();
      });
    };
    this.endHover = () => {
      rippleFn().then((r2) => {
        r2 && r2.endHover();
      });
    };
  }
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const l$1 = (l2) => l2 != null ? l2 : T;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ButtonBase extends s {
  constructor() {
    super(...arguments);
    this.raised = false;
    this.unelevated = false;
    this.outlined = false;
    this.dense = false;
    this.disabled = false;
    this.trailingIcon = false;
    this.fullwidth = false;
    this.icon = "";
    this.label = "";
    this.expandContent = false;
    this.shouldRenderRipple = false;
    this.rippleHandlers = new RippleHandlers(() => {
      this.shouldRenderRipple = true;
      return this.ripple;
    });
  }
  renderOverlay() {
    return p``;
  }
  renderRipple() {
    const filled = this.raised || this.unelevated;
    return this.shouldRenderRipple ? p`<mwc-ripple class="ripple" .primary="${!filled}" .disabled="${this.disabled}"></mwc-ripple>` : "";
  }
  focus() {
    const buttonElement = this.buttonElement;
    if (buttonElement) {
      this.rippleHandlers.startFocus();
      buttonElement.focus();
    }
  }
  blur() {
    const buttonElement = this.buttonElement;
    if (buttonElement) {
      this.rippleHandlers.endFocus();
      buttonElement.blur();
    }
  }
  getRenderClasses() {
    return {
      "mdc-button--raised": this.raised,
      "mdc-button--unelevated": this.unelevated,
      "mdc-button--outlined": this.outlined,
      "mdc-button--dense": this.dense
    };
  }
  render() {
    return p`
      <button
          id="button"
          class="mdc-button ${o$1(this.getRenderClasses())}"
          ?disabled="${this.disabled}"
          aria-label="${this.label || this.icon}"
          aria-haspopup="${l$1(this.ariaHasPopup)}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleActivate}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleActivate}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        ${this.renderOverlay()}
        ${this.renderRipple()}
        <span class="leading-icon">
          <slot name="icon">
            ${this.icon && !this.trailingIcon ? this.renderIcon() : ""}
          </slot>
        </span>
        <span class="mdc-button__label">${this.label}</span>
        <span class="slot-container ${o$1({
      flex: this.expandContent
    })}">
          <slot></slot>
        </span>
        <span class="trailing-icon">
          <slot name="trailingIcon">
            ${this.icon && this.trailingIcon ? this.renderIcon() : ""}
          </slot>
        </span>
      </button>`;
  }
  renderIcon() {
    return p`
    <mwc-icon class="mdc-button__icon">
      ${this.icon}
    </mwc-icon>`;
  }
  handleRippleActivate(evt) {
    const onUp = () => {
      window.removeEventListener("mouseup", onUp);
      this.handleRippleDeactivate();
    };
    window.addEventListener("mouseup", onUp);
    this.rippleHandlers.startPress(evt);
  }
  handleRippleDeactivate() {
    this.rippleHandlers.endPress();
  }
  handleRippleMouseEnter() {
    this.rippleHandlers.startHover();
  }
  handleRippleMouseLeave() {
    this.rippleHandlers.endHover();
  }
  handleRippleFocus() {
    this.rippleHandlers.startFocus();
  }
  handleRippleBlur() {
    this.rippleHandlers.endFocus();
  }
}
ButtonBase.shadowRootOptions = { mode: "open", delegatesFocus: true };
__decorate([
  ariaProperty,
  e$4({ type: String, attribute: "aria-haspopup" })
], ButtonBase.prototype, "ariaHasPopup", void 0);
__decorate([
  e$4({ type: Boolean, reflect: true })
], ButtonBase.prototype, "raised", void 0);
__decorate([
  e$4({ type: Boolean, reflect: true })
], ButtonBase.prototype, "unelevated", void 0);
__decorate([
  e$4({ type: Boolean, reflect: true })
], ButtonBase.prototype, "outlined", void 0);
__decorate([
  e$4({ type: Boolean })
], ButtonBase.prototype, "dense", void 0);
__decorate([
  e$4({ type: Boolean, reflect: true })
], ButtonBase.prototype, "disabled", void 0);
__decorate([
  e$4({ type: Boolean, attribute: "trailingicon" })
], ButtonBase.prototype, "trailingIcon", void 0);
__decorate([
  e$4({ type: Boolean, reflect: true })
], ButtonBase.prototype, "fullwidth", void 0);
__decorate([
  e$4({ type: String })
], ButtonBase.prototype, "icon", void 0);
__decorate([
  e$4({ type: String })
], ButtonBase.prototype, "label", void 0);
__decorate([
  e$4({ type: Boolean })
], ButtonBase.prototype, "expandContent", void 0);
__decorate([
  i$2("#button")
], ButtonBase.prototype, "buttonElement", void 0);
__decorate([
  e$2("mwc-ripple")
], ButtonBase.prototype, "ripple", void 0);
__decorate([
  t$1()
], ButtonBase.prototype, "shouldRenderRipple", void 0);
__decorate([
  e$3({ passive: true })
], ButtonBase.prototype, "handleRippleActivate", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$6 = r$4`.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase)}.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:transparent}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:transparent}.mdc-button{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised,.mdc-button--unelevated{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--raised .mdc-button__ripple,.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 15px 0 15px;border-width:1px}.mdc-button--outlined:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button--outlined:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--outlined .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined.mdc-button--icon-trailing{padding:0 11px 0 15px}.mdc-button--outlined.mdc-button--icon-leading{padding:0 15px 0 11px}.mdc-button--outlined .mdc-button__ripple{top:calc(-1 * 1px);left:calc(-1 * 1px);border-width:1px}.mdc-button--outlined .mdc-button__touch{left:calc(-1 * 1px);width:calc(100% + 2 * 1px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color:#fff;--mdc-ripple-focus-opacity:0.24;--mdc-ripple-hover-opacity:0.08;--mdc-ripple-press-opacity:0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,[dir=rtl] .leading-icon ::slotted(*),[dir=rtl] .leading-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl],.leading-icon ::slotted(*[dir=rtl]),.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-focus, var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined .ripple,.mdc-button--outlined .ripple[dir=rtl]{left:initial;left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{height:100%}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}`;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Button = class Button2 extends ButtonBase {
};
Button.styles = [styles$6];
Button = __decorate([
  n$1("mwc-button")
], Button);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class FabBase extends s {
  constructor() {
    super(...arguments);
    this.mini = false;
    this.exited = false;
    this.disabled = false;
    this.extended = false;
    this.showIconAtEnd = false;
    this.reducedTouchTarget = false;
    this.icon = "";
    this.label = "";
    this.shouldRenderRipple = false;
    this.useStateLayerCustomProperties = false;
    this.rippleHandlers = new RippleHandlers(() => {
      this.shouldRenderRipple = true;
      return this.ripple;
    });
  }
  render() {
    const hasTouchTarget = this.mini && !this.reducedTouchTarget;
    const classes = {
      "mdc-fab--mini": this.mini,
      "mdc-fab--touch": hasTouchTarget,
      "mdc-fab--exited": this.exited,
      "mdc-fab--extended": this.extended,
      "icon-end": this.showIconAtEnd
    };
    const ariaLabel = this.label ? this.label : this.icon;
    return p`<button
          class="mdc-fab ${o$1(classes)}"
          ?disabled="${this.disabled}"
          aria-label="${ariaLabel}"
          @mouseenter=${this.handleRippleMouseEnter}
          @mouseleave=${this.handleRippleMouseLeave}
          @focus=${this.handleRippleFocus}
          @blur=${this.handleRippleBlur}
          @mousedown=${this.handleRippleActivate}
          @touchstart=${this.handleRippleStartPress}
          @touchend=${this.handleRippleDeactivate}
          @touchcancel=${this.handleRippleDeactivate}><!--
        -->${this.renderBeforeRipple()}<!--
        -->${this.renderRipple()}<!--
        -->${this.showIconAtEnd ? this.renderLabel() : ""}<!--
        --><span class="material-icons mdc-fab__icon"><!--
          --><slot name="icon">${this.icon}</slot><!--
       --></span><!--
        -->${!this.showIconAtEnd ? this.renderLabel() : ""}<!--
        -->${this.renderTouchTarget()}<!--
      --></button>`;
  }
  renderIcon() {
    return p``;
  }
  renderTouchTarget() {
    const hasTouchTarget = this.mini && !this.reducedTouchTarget;
    return p`${hasTouchTarget ? p`<div class="mdc-fab__touch"></div>` : ""}`;
  }
  renderLabel() {
    const showLabel = this.label !== "" && this.extended;
    return p`${showLabel ? p`<span class="mdc-fab__label">${this.label}</span>` : ""}`;
  }
  renderBeforeRipple() {
    return p``;
  }
  renderRipple() {
    return this.shouldRenderRipple ? p`<mwc-ripple class="ripple"
        .internalUseStateLayerCustomProperties="${this.useStateLayerCustomProperties}"
         ></mwc-ripple>` : "";
  }
  handleRippleActivate(event) {
    const onUp = () => {
      window.removeEventListener("mouseup", onUp);
      this.handleRippleDeactivate();
    };
    window.addEventListener("mouseup", onUp);
    this.handleRippleStartPress(event);
  }
  handleRippleStartPress(event) {
    this.rippleHandlers.startPress(event);
  }
  handleRippleDeactivate() {
    this.rippleHandlers.endPress();
  }
  handleRippleMouseEnter() {
    this.rippleHandlers.startHover();
  }
  handleRippleMouseLeave() {
    this.rippleHandlers.endHover();
  }
  handleRippleFocus() {
    this.rippleHandlers.startFocus();
  }
  handleRippleBlur() {
    this.rippleHandlers.endFocus();
  }
}
FabBase.shadowRootOptions = { mode: "open", delegatesFocus: true };
__decorate([
  e$2("mwc-ripple")
], FabBase.prototype, "ripple", void 0);
__decorate([
  e$4({ type: Boolean })
], FabBase.prototype, "mini", void 0);
__decorate([
  e$4({ type: Boolean })
], FabBase.prototype, "exited", void 0);
__decorate([
  e$4({ type: Boolean })
], FabBase.prototype, "disabled", void 0);
__decorate([
  e$4({ type: Boolean })
], FabBase.prototype, "extended", void 0);
__decorate([
  e$4({ type: Boolean })
], FabBase.prototype, "showIconAtEnd", void 0);
__decorate([
  e$4({ type: Boolean })
], FabBase.prototype, "reducedTouchTarget", void 0);
__decorate([
  e$4()
], FabBase.prototype, "icon", void 0);
__decorate([
  e$4()
], FabBase.prototype, "label", void 0);
__decorate([
  t$1()
], FabBase.prototype, "shouldRenderRipple", void 0);
__decorate([
  t$1()
], FabBase.prototype, "useStateLayerCustomProperties", void 0);
__decorate([
  e$3({ passive: true })
], FabBase.prototype, "handleRippleStartPress", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$5 = r$4`:host .mdc-fab .material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{outline:none;--mdc-ripple-color: currentcolor;user-select:none;-webkit-tap-highlight-color:transparent;display:inline-flex;-webkit-tap-highlight-color:transparent;display:inline-flex;outline:none;user-select:none}:host .mdc-touch-target-wrapper{display:inline}:host .mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}:host .mdc-fab{position:relative;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;user-select:none;-moz-appearance:none;-webkit-appearance:none;overflow:visible;transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1)}:host .mdc-fab .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}:host .mdc-fab::-moz-focus-inner{padding:0;border:0}:host .mdc-fab:hover{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}:host .mdc-fab.mdc-ripple-upgraded--background-focused,:host .mdc-fab:not(.mdc-ripple-upgraded):focus{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}:host .mdc-fab:active,:host .mdc-fab:focus:active{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0,0,0,.12)}:host .mdc-fab:active,:host .mdc-fab:focus{outline:none}:host .mdc-fab:hover{cursor:pointer}:host .mdc-fab>svg{width:100%}:host .mdc-fab--mini{width:40px;height:40px}:host .mdc-fab--extended{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);border-radius:24px;padding-left:20px;padding-right:20px;width:auto;max-width:100%;height:48px;line-height:normal}:host .mdc-fab--extended .mdc-fab__ripple{border-radius:24px}:host .mdc-fab--extended .mdc-fab__icon{margin-left:calc(12px - 20px);margin-right:12px}[dir=rtl] :host .mdc-fab--extended .mdc-fab__icon,:host .mdc-fab--extended .mdc-fab__icon[dir=rtl]{margin-left:12px;margin-right:calc(12px - 20px)}:host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon{margin-left:12px;margin-right:calc(12px - 20px)}[dir=rtl] :host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,:host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon[dir=rtl]{margin-left:calc(12px - 20px);margin-right:12px}:host .mdc-fab--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}:host .mdc-fab--touch .mdc-fab__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}:host .mdc-fab::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}:host .mdc-fab__label{justify-content:flex-start;text-overflow:ellipsis;white-space:nowrap;overflow-x:hidden;overflow-y:visible}:host .mdc-fab__icon{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}:host .mdc-fab .mdc-fab__icon{display:inline-flex;align-items:center;justify-content:center}:host .mdc-fab--exited{transform:scale(0);opacity:0;transition:opacity 15ms linear 150ms,transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1)}:host .mdc-fab--exited .mdc-fab__icon{transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}:host .mdc-fab{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}:host .mdc-fab .mdc-fab__icon{width:24px;height:24px;font-size:24px}:host .mdc-fab,:host .mdc-fab:not(:disabled) .mdc-fab__icon,:host .mdc-fab:not(:disabled) .mdc-fab__label,:host .mdc-fab:disabled .mdc-fab__icon,:host .mdc-fab:disabled .mdc-fab__label{color:#fff;color:var(--mdc-theme-on-secondary, #fff)}:host .mdc-fab:not(.mdc-fab--extended){border-radius:50%}:host .mdc-fab:not(.mdc-fab--extended) .mdc-fab__ripple{border-radius:50%}:host .mdc-fab{position:relative;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;user-select:none;-moz-appearance:none;-webkit-appearance:none;overflow:visible;transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1)}:host .mdc-fab .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}:host .mdc-fab::-moz-focus-inner{padding:0;border:0}:host .mdc-fab:hover{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}:host .mdc-fab.mdc-ripple-upgraded--background-focused,:host .mdc-fab:not(.mdc-ripple-upgraded):focus{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}:host .mdc-fab:active,:host .mdc-fab:focus:active{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0,0,0,.12)}:host .mdc-fab:active,:host .mdc-fab:focus{outline:none}:host .mdc-fab:hover{cursor:pointer}:host .mdc-fab>svg{width:100%}:host .mdc-fab--mini{width:40px;height:40px}:host .mdc-fab--extended{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);border-radius:24px;padding-left:20px;padding-right:20px;width:auto;max-width:100%;height:48px;line-height:normal}:host .mdc-fab--extended .mdc-fab__ripple{border-radius:24px}:host .mdc-fab--extended .mdc-fab__icon{margin-left:calc(12px - 20px);margin-right:12px}[dir=rtl] :host .mdc-fab--extended .mdc-fab__icon,:host .mdc-fab--extended .mdc-fab__icon[dir=rtl]{margin-left:12px;margin-right:calc(12px - 20px)}:host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon{margin-left:12px;margin-right:calc(12px - 20px)}[dir=rtl] :host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,:host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon[dir=rtl]{margin-left:calc(12px - 20px);margin-right:12px}:host .mdc-fab--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}:host .mdc-fab--touch .mdc-fab__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}:host .mdc-fab::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}:host .mdc-fab__label{justify-content:flex-start;text-overflow:ellipsis;white-space:nowrap;overflow-x:hidden;overflow-y:visible}:host .mdc-fab__icon{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}:host .mdc-fab .mdc-fab__icon{display:inline-flex;align-items:center;justify-content:center}:host .mdc-fab--exited{transform:scale(0);opacity:0;transition:opacity 15ms linear 150ms,transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1)}:host .mdc-fab--exited .mdc-fab__icon{transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}:host .mdc-fab .ripple{overflow:hidden}:host .mdc-fab:not(.mdc-fab--extended) .ripple{border-radius:50%}:host .mdc-fab.mdc-fab--extended .ripple{border-radius:24px}:host .mdc-fab .mdc-fab__label{z-index:0}:host .mdc-fab .mdc-fab__icon ::slotted(*){width:inherit;height:inherit;font-size:inherit}:host .mdc-fab--extended.mdc-fab--exited .mdc-fab__icon ::slotted(*){transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}:host .mdc-fab{padding-top:0px;padding-top:max(0px, var(--mdc-fab-focus-outline-width, 0px));padding-right:0px;padding-right:max(0px, var(--mdc-fab-focus-outline-width, 0px));padding-bottom:0px;padding-bottom:max(0px, var(--mdc-fab-focus-outline-width, 0px));padding-left:0px;padding-left:max(0px, var(--mdc-fab-focus-outline-width, 0px));box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-fab-box-shadow, 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12))}:host .mdc-fab:not(:disabled).mdc-ripple-upgraded--background-focused,:host .mdc-fab:not(:disabled):not(.mdc-ripple-upgraded):focus{border-color:initial;border-color:var(--mdc-fab-focus-outline-color, initial)}:host .mdc-fab:not(:disabled).mdc-ripple-upgraded--background-focused,:host .mdc-fab:not(:disabled):not(.mdc-ripple-upgraded):focus{border-style:solid;border-width:var(--mdc-fab-focus-outline-width, 0px);padding-top:0px;padding-top:max(calc(0px - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(0px - var(--mdc-fab-focus-outline-width, 0px)) * -1));padding-right:0px;padding-right:max(calc(0px - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(0px - var(--mdc-fab-focus-outline-width, 0px)) * -1));padding-bottom:0px;padding-bottom:max(calc(0px - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(0px - var(--mdc-fab-focus-outline-width, 0px)) * -1));padding-left:0px;padding-left:max(calc(0px - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(0px - var(--mdc-fab-focus-outline-width, 0px)) * -1))}:host .mdc-fab:hover,:host .mdc-fab:focus{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-fab-box-shadow, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}:host .mdc-fab:active{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-fab-box-shadow, 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12))}:host .mdc-fab .ripple{overflow:hidden}:host .mdc-fab .mdc-fab__label{z-index:0}:host .mdc-fab:not(.mdc-fab--extended) .ripple{border-radius:50%}:host .mdc-fab.mdc-fab--extended .ripple{border-radius:24px}:host .mdc-fab .mdc-fab__icon{width:24px;width:var(--mdc-icon-size, 24px);height:24px;height:var(--mdc-icon-size, 24px);font-size:24px;font-size:var(--mdc-icon-size, 24px);transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform;display:inline-flex;align-items:center;justify-content:center}:host .mdc-fab.mdc-fab--extended{padding-top:0px;padding-top:max(0px, var(--mdc-fab-focus-outline-width, 0px));padding-right:20px;padding-right:max(var(--mdc-fab-extended-label-padding, 20px), var(--mdc-fab-focus-outline-width, 0px));padding-bottom:0px;padding-bottom:max(0px, var(--mdc-fab-focus-outline-width, 0px));padding-left:20px;padding-left:max(var(--mdc-fab-extended-label-padding, 20px), var(--mdc-fab-focus-outline-width, 0px))}:host .mdc-fab.mdc-fab--extended:not(:disabled).mdc-ripple-upgraded--background-focused,:host .mdc-fab.mdc-fab--extended:not(:disabled):not(.mdc-ripple-upgraded):focus{border-style:solid;border-width:var(--mdc-fab-focus-outline-width, 0px);padding-top:0px;padding-top:max(calc(0px - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(0px - var(--mdc-fab-focus-outline-width, 0px)) * -1));padding-right:20px;padding-right:max(calc(var(--mdc-fab-extended-label-padding, 20px) - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(var(--mdc-fab-extended-label-padding, 20px) - var(--mdc-fab-focus-outline-width, 0px)) * -1));padding-bottom:0px;padding-bottom:max(calc(0px - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(0px - var(--mdc-fab-focus-outline-width, 0px)) * -1));padding-left:20px;padding-left:max(calc(var(--mdc-fab-extended-label-padding, 20px) - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(var(--mdc-fab-extended-label-padding, 20px) - var(--mdc-fab-focus-outline-width, 0px)) * -1))}:host .mdc-fab.mdc-fab--extended.icon-end .mdc-fab__icon{margin-left:12px;margin-left:var(--mdc-fab-extended-icon-padding, 12px);margin-right:calc(12px - 20px);margin-right:calc(var(--mdc-fab-extended-icon-padding, 12px) - var(--mdc-fab-extended-label-padding, 20px))}[dir=rtl] :host .mdc-fab.mdc-fab--extended.icon-end .mdc-fab__icon,:host .mdc-fab.mdc-fab--extended.icon-end .mdc-fab__icon[dir=rtl]{margin-left:calc(12px - 20px);margin-left:calc(var(--mdc-fab-extended-icon-padding, 12px) - var(--mdc-fab-extended-label-padding, 20px));margin-right:12px;margin-right:var(--mdc-fab-extended-icon-padding, 12px)}`;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Fab = class Fab2 extends FabBase {
};
Fab.styles = [styles$5];
Fab = __decorate([
  n$1("mwc-fab")
], Fab);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const observer = (observer2) => (proto, propName) => {
  if (!proto.constructor._observers) {
    proto.constructor._observers = new Map();
    const userUpdated = proto.updated;
    proto.updated = function(changedProperties) {
      userUpdated.call(this, changedProperties);
      changedProperties.forEach((v2, k2) => {
        const observers = this.constructor._observers;
        const observer3 = observers.get(k2);
        if (observer3 !== void 0) {
          observer3.call(this, this[k2], v2);
        }
      });
    };
  } else if (!proto.constructor.hasOwnProperty("_observers")) {
    const observers = proto.constructor._observers;
    proto.constructor._observers = new Map();
    observers.forEach((v2, k2) => proto.constructor._observers.set(k2, v2));
  }
  proto.constructor._observers.set(propName, observer2);
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ListItemBase extends s {
  constructor() {
    super(...arguments);
    this.value = "";
    this.group = null;
    this.tabindex = -1;
    this.disabled = false;
    this.twoline = false;
    this.activated = false;
    this.graphic = null;
    this.multipleGraphics = false;
    this.hasMeta = false;
    this.noninteractive = false;
    this.selected = false;
    this.shouldRenderRipple = false;
    this._managingList = null;
    this.boundOnClick = this.onClick.bind(this);
    this._firstChanged = true;
    this._skipPropRequest = false;
    this.rippleHandlers = new RippleHandlers(() => {
      this.shouldRenderRipple = true;
      return this.ripple;
    });
    this.listeners = [
      {
        target: this,
        eventNames: ["click"],
        cb: () => {
          this.onClick();
        }
      },
      {
        target: this,
        eventNames: ["mouseenter"],
        cb: this.rippleHandlers.startHover
      },
      {
        target: this,
        eventNames: ["mouseleave"],
        cb: this.rippleHandlers.endHover
      },
      {
        target: this,
        eventNames: ["focus"],
        cb: this.rippleHandlers.startFocus
      },
      {
        target: this,
        eventNames: ["blur"],
        cb: this.rippleHandlers.endFocus
      },
      {
        target: this,
        eventNames: ["mousedown", "touchstart"],
        cb: (e2) => {
          const name = e2.type;
          this.onDown(name === "mousedown" ? "mouseup" : "touchend", e2);
        }
      }
    ];
  }
  get text() {
    const textContent = this.textContent;
    return textContent ? textContent.trim() : "";
  }
  render() {
    const text = this.renderText();
    const graphic = this.graphic ? this.renderGraphic() : p``;
    const meta = this.hasMeta ? this.renderMeta() : p``;
    return p`
      ${this.renderRipple()}
      ${graphic}
      ${text}
      ${meta}`;
  }
  renderRipple() {
    if (this.shouldRenderRipple) {
      return p`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>`;
    } else if (this.activated) {
      return p`<div class="fake-activated-ripple"></div>`;
    } else {
      return "";
    }
  }
  renderGraphic() {
    const graphicClasses = {
      multi: this.multipleGraphics
    };
    return p`
      <span class="mdc-deprecated-list-item__graphic material-icons ${o$1(graphicClasses)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return p`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const inner = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return p`
      <span class="mdc-deprecated-list-item__text">
        ${inner}
      </span>`;
  }
  renderSingleLine() {
    return p`<slot></slot>`;
  }
  renderTwoline() {
    return p`
      <span class="mdc-deprecated-list-item__primary-text">
        <slot></slot>
      </span>
      <span class="mdc-deprecated-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    `;
  }
  onClick() {
    this.fireRequestSelected(!this.selected, "interaction");
  }
  onDown(upName, evt) {
    const onUp = () => {
      window.removeEventListener(upName, onUp);
      this.rippleHandlers.endPress();
    };
    window.addEventListener(upName, onUp);
    this.rippleHandlers.startPress(evt);
  }
  fireRequestSelected(selected, source) {
    if (this.noninteractive) {
      return;
    }
    const customEv = new CustomEvent("request-selected", { bubbles: true, composed: true, detail: { source, selected } });
    this.dispatchEvent(customEv);
  }
  connectedCallback() {
    super.connectedCallback();
    if (!this.noninteractive) {
      this.setAttribute("mwc-list-item", "");
    }
    for (const listener of this.listeners) {
      for (const eventName of listener.eventNames) {
        listener.target.addEventListener(eventName, listener.cb, { passive: true });
      }
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    for (const listener of this.listeners) {
      for (const eventName of listener.eventNames) {
        listener.target.removeEventListener(eventName, listener.cb);
      }
    }
    if (this._managingList) {
      this._managingList.debouncedLayout ? this._managingList.debouncedLayout(true) : this._managingList.layout(true);
    }
  }
  firstUpdated() {
    const ev = new Event("list-item-rendered", { bubbles: true, composed: true });
    this.dispatchEvent(ev);
  }
}
__decorate([
  i$2("slot")
], ListItemBase.prototype, "slotElement", void 0);
__decorate([
  e$2("mwc-ripple")
], ListItemBase.prototype, "ripple", void 0);
__decorate([
  e$4({ type: String })
], ListItemBase.prototype, "value", void 0);
__decorate([
  e$4({ type: String, reflect: true })
], ListItemBase.prototype, "group", void 0);
__decorate([
  e$4({ type: Number, reflect: true })
], ListItemBase.prototype, "tabindex", void 0);
__decorate([
  e$4({ type: Boolean, reflect: true }),
  observer(function(value) {
    if (value) {
      this.setAttribute("aria-disabled", "true");
    } else {
      this.setAttribute("aria-disabled", "false");
    }
  })
], ListItemBase.prototype, "disabled", void 0);
__decorate([
  e$4({ type: Boolean, reflect: true })
], ListItemBase.prototype, "twoline", void 0);
__decorate([
  e$4({ type: Boolean, reflect: true })
], ListItemBase.prototype, "activated", void 0);
__decorate([
  e$4({ type: String, reflect: true })
], ListItemBase.prototype, "graphic", void 0);
__decorate([
  e$4({ type: Boolean })
], ListItemBase.prototype, "multipleGraphics", void 0);
__decorate([
  e$4({ type: Boolean })
], ListItemBase.prototype, "hasMeta", void 0);
__decorate([
  e$4({ type: Boolean, reflect: true }),
  observer(function(value) {
    if (value) {
      this.removeAttribute("aria-checked");
      this.removeAttribute("mwc-list-item");
      this.selected = false;
      this.activated = false;
      this.tabIndex = -1;
    } else {
      this.setAttribute("mwc-list-item", "");
    }
  })
], ListItemBase.prototype, "noninteractive", void 0);
__decorate([
  e$4({ type: Boolean, reflect: true }),
  observer(function(value) {
    const role = this.getAttribute("role");
    const isAriaSelectable = role === "gridcell" || role === "option" || role === "row" || role === "tab";
    if (isAriaSelectable && value) {
      this.setAttribute("aria-selected", "true");
    } else if (isAriaSelectable) {
      this.setAttribute("aria-selected", "false");
    }
    if (this._firstChanged) {
      this._firstChanged = false;
      return;
    }
    if (this._skipPropRequest) {
      return;
    }
    this.fireRequestSelected(value, "property");
  })
], ListItemBase.prototype, "selected", void 0);
__decorate([
  t$1()
], ListItemBase.prototype, "shouldRenderRipple", void 0);
__decorate([
  t$1()
], ListItemBase.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$4 = r$4`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let ListItem = class ListItem2 extends ListItemBase {
};
ListItem.styles = [styles$4];
ListItem = __decorate([
  n$1("mwc-list-item")
], ListItem);
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var KEY = {
  UNKNOWN: "Unknown",
  BACKSPACE: "Backspace",
  ENTER: "Enter",
  SPACEBAR: "Spacebar",
  PAGE_UP: "PageUp",
  PAGE_DOWN: "PageDown",
  END: "End",
  HOME: "Home",
  ARROW_LEFT: "ArrowLeft",
  ARROW_UP: "ArrowUp",
  ARROW_RIGHT: "ArrowRight",
  ARROW_DOWN: "ArrowDown",
  DELETE: "Delete",
  ESCAPE: "Escape",
  TAB: "Tab"
};
var normalizedKeys = new Set();
normalizedKeys.add(KEY.BACKSPACE);
normalizedKeys.add(KEY.ENTER);
normalizedKeys.add(KEY.SPACEBAR);
normalizedKeys.add(KEY.PAGE_UP);
normalizedKeys.add(KEY.PAGE_DOWN);
normalizedKeys.add(KEY.END);
normalizedKeys.add(KEY.HOME);
normalizedKeys.add(KEY.ARROW_LEFT);
normalizedKeys.add(KEY.ARROW_UP);
normalizedKeys.add(KEY.ARROW_RIGHT);
normalizedKeys.add(KEY.ARROW_DOWN);
normalizedKeys.add(KEY.DELETE);
normalizedKeys.add(KEY.ESCAPE);
normalizedKeys.add(KEY.TAB);
var KEY_CODE = {
  BACKSPACE: 8,
  ENTER: 13,
  SPACEBAR: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46,
  ESCAPE: 27,
  TAB: 9
};
var mappedKeyCodes = new Map();
mappedKeyCodes.set(KEY_CODE.BACKSPACE, KEY.BACKSPACE);
mappedKeyCodes.set(KEY_CODE.ENTER, KEY.ENTER);
mappedKeyCodes.set(KEY_CODE.SPACEBAR, KEY.SPACEBAR);
mappedKeyCodes.set(KEY_CODE.PAGE_UP, KEY.PAGE_UP);
mappedKeyCodes.set(KEY_CODE.PAGE_DOWN, KEY.PAGE_DOWN);
mappedKeyCodes.set(KEY_CODE.END, KEY.END);
mappedKeyCodes.set(KEY_CODE.HOME, KEY.HOME);
mappedKeyCodes.set(KEY_CODE.ARROW_LEFT, KEY.ARROW_LEFT);
mappedKeyCodes.set(KEY_CODE.ARROW_UP, KEY.ARROW_UP);
mappedKeyCodes.set(KEY_CODE.ARROW_RIGHT, KEY.ARROW_RIGHT);
mappedKeyCodes.set(KEY_CODE.ARROW_DOWN, KEY.ARROW_DOWN);
mappedKeyCodes.set(KEY_CODE.DELETE, KEY.DELETE);
mappedKeyCodes.set(KEY_CODE.ESCAPE, KEY.ESCAPE);
mappedKeyCodes.set(KEY_CODE.TAB, KEY.TAB);
var navigationKeys = new Set();
navigationKeys.add(KEY.PAGE_UP);
navigationKeys.add(KEY.PAGE_DOWN);
navigationKeys.add(KEY.END);
navigationKeys.add(KEY.HOME);
navigationKeys.add(KEY.ARROW_LEFT);
navigationKeys.add(KEY.ARROW_UP);
navigationKeys.add(KEY.ARROW_RIGHT);
navigationKeys.add(KEY.ARROW_DOWN);
function normalizeKey(evt) {
  var key = evt.key;
  if (normalizedKeys.has(key)) {
    return key;
  }
  var mappedKey = mappedKeyCodes.get(evt.keyCode);
  if (mappedKey) {
    return mappedKey;
  }
  return KEY.UNKNOWN;
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var _a, _b;
var cssClasses$3 = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
_a = {}, _a["" + cssClasses$3.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", _a["" + cssClasses$3.LIST_ITEM_CLASS] = "mdc-list-item", _a["" + cssClasses$3.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", _a["" + cssClasses$3.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", _a["" + cssClasses$3.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", _a["" + cssClasses$3.ROOT] = "mdc-list", _a;
var deprecatedClassNameMap = (_b = {}, _b["" + cssClasses$3.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", _b["" + cssClasses$3.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", _b["" + cssClasses$3.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", _b["" + cssClasses$3.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", _b["" + cssClasses$3.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", _b["" + cssClasses$3.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", _b["" + cssClasses$3.ROOT] = "mdc-deprecated-list", _b);
var strings$3 = {
  ACTION_EVENT: "MDCList:action",
  ARIA_CHECKED: "aria-checked",
  ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
  ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
  ARIA_CURRENT: "aria-current",
  ARIA_DISABLED: "aria-disabled",
  ARIA_ORIENTATION: "aria-orientation",
  ARIA_ORIENTATION_HORIZONTAL: "horizontal",
  ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
  ARIA_SELECTED: "aria-selected",
  ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
  ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
  CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses$3.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses$3.LIST_ITEM_CLASS + " a,\n    ." + deprecatedClassNameMap[cssClasses$3.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses$3.LIST_ITEM_CLASS] + " a\n  ",
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses$3.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses$3.LIST_ITEM_CLASS + " a,\n    ." + cssClasses$3.LIST_ITEM_CLASS + ' input[type="radio"]:not(:disabled),\n    .' + cssClasses$3.LIST_ITEM_CLASS + ' input[type="checkbox"]:not(:disabled),\n    .' + deprecatedClassNameMap[cssClasses$3.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses$3.LIST_ITEM_CLASS] + " a,\n    ." + deprecatedClassNameMap[cssClasses$3.LIST_ITEM_CLASS] + ' input[type="radio"]:not(:disabled),\n    .' + deprecatedClassNameMap[cssClasses$3.LIST_ITEM_CLASS] + ' input[type="checkbox"]:not(:disabled)\n  ',
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
};
var numbers$3 = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const integerSort = (a2, b2) => {
  return a2 - b2;
};
const findIndexDiff = (oldSet, newSet) => {
  const oldArr = Array.from(oldSet);
  const newArr = Array.from(newSet);
  const diff = { added: [], removed: [] };
  const oldSorted = oldArr.sort(integerSort);
  const newSorted = newArr.sort(integerSort);
  let i2 = 0;
  let j = 0;
  while (i2 < oldSorted.length || j < newSorted.length) {
    const oldVal = oldSorted[i2];
    const newVal = newSorted[j];
    if (oldVal === newVal) {
      i2++;
      j++;
      continue;
    }
    if (oldVal !== void 0 && (newVal === void 0 || oldVal < newVal)) {
      diff.removed.push(oldVal);
      i2++;
      continue;
    }
    if (newVal !== void 0 && (oldVal === void 0 || newVal < oldVal)) {
      diff.added.push(newVal);
      j++;
      continue;
    }
  }
  return diff;
};
const ELEMENTS_KEY_ALLOWED_IN = ["input", "button", "textarea", "select"];
function isIndexSet(selectedIndex) {
  return selectedIndex instanceof Set;
}
const createSetFromIndex = (index) => {
  const entry = index === numbers$3.UNSET_INDEX ? new Set() : index;
  return isIndexSet(entry) ? new Set(entry) : new Set([entry]);
};
class MDCListFoundation extends MDCFoundation {
  constructor(adapter) {
    super(Object.assign(Object.assign({}, MDCListFoundation.defaultAdapter), adapter));
    this.isMulti_ = false;
    this.wrapFocus_ = false;
    this.isVertical_ = true;
    this.selectedIndex_ = numbers$3.UNSET_INDEX;
    this.focusedItemIndex_ = numbers$3.UNSET_INDEX;
    this.useActivatedClass_ = false;
    this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return strings$3;
  }
  static get numbers() {
    return numbers$3;
  }
  static get defaultAdapter() {
    return {
      focusItemAtIndex: () => void 0,
      getFocusedElementIndex: () => 0,
      getListItemCount: () => 0,
      isFocusInsideList: () => false,
      isRootFocused: () => false,
      notifyAction: () => void 0,
      notifySelected: () => void 0,
      getSelectedStateForElementIndex: () => false,
      setDisabledStateForElementIndex: () => void 0,
      getDisabledStateForElementIndex: () => false,
      setSelectedStateForElementIndex: () => void 0,
      setActivatedStateForElementIndex: () => void 0,
      setTabIndexForElementIndex: () => void 0,
      setAttributeForElementIndex: () => void 0,
      getAttributeForElementIndex: () => null
    };
  }
  setWrapFocus(value) {
    this.wrapFocus_ = value;
  }
  setMulti(value) {
    this.isMulti_ = value;
    const currentIndex = this.selectedIndex_;
    if (value) {
      if (!isIndexSet(currentIndex)) {
        const isUnset = currentIndex === numbers$3.UNSET_INDEX;
        this.selectedIndex_ = isUnset ? new Set() : new Set([currentIndex]);
      }
    } else {
      if (isIndexSet(currentIndex)) {
        if (currentIndex.size) {
          const vals = Array.from(currentIndex).sort(integerSort);
          this.selectedIndex_ = vals[0];
        } else {
          this.selectedIndex_ = numbers$3.UNSET_INDEX;
        }
      }
    }
  }
  setVerticalOrientation(value) {
    this.isVertical_ = value;
  }
  setUseActivatedClass(useActivated) {
    this.useActivatedClass_ = useActivated;
  }
  getSelectedIndex() {
    return this.selectedIndex_;
  }
  setSelectedIndex(index) {
    if (!this.isIndexValid_(index)) {
      return;
    }
    if (this.isMulti_) {
      this.setMultiSelectionAtIndex_(createSetFromIndex(index));
    } else {
      this.setSingleSelectionAtIndex_(index);
    }
  }
  handleFocusIn(_2, listItemIndex) {
    if (listItemIndex >= 0) {
      this.adapter.setTabIndexForElementIndex(listItemIndex, 0);
    }
  }
  handleFocusOut(_2, listItemIndex) {
    if (listItemIndex >= 0) {
      this.adapter.setTabIndexForElementIndex(listItemIndex, -1);
    }
    setTimeout(() => {
      if (!this.adapter.isFocusInsideList()) {
        this.setTabindexToFirstSelectedItem_();
      }
    }, 0);
  }
  handleKeydown(event, isRootListItem, listItemIndex) {
    const isArrowLeft = normalizeKey(event) === "ArrowLeft";
    const isArrowUp = normalizeKey(event) === "ArrowUp";
    const isArrowRight = normalizeKey(event) === "ArrowRight";
    const isArrowDown = normalizeKey(event) === "ArrowDown";
    const isHome = normalizeKey(event) === "Home";
    const isEnd = normalizeKey(event) === "End";
    const isEnter = normalizeKey(event) === "Enter";
    const isSpace = normalizeKey(event) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      if (isArrowUp || isEnd) {
        event.preventDefault();
        this.focusLastElement();
      } else if (isArrowDown || isHome) {
        event.preventDefault();
        this.focusFirstElement();
      }
      return;
    }
    let currentIndex = this.adapter.getFocusedElementIndex();
    if (currentIndex === -1) {
      currentIndex = listItemIndex;
      if (currentIndex < 0) {
        return;
      }
    }
    let nextIndex;
    if (this.isVertical_ && isArrowDown || !this.isVertical_ && isArrowRight) {
      this.preventDefaultEvent(event);
      nextIndex = this.focusNextElement(currentIndex);
    } else if (this.isVertical_ && isArrowUp || !this.isVertical_ && isArrowLeft) {
      this.preventDefaultEvent(event);
      nextIndex = this.focusPrevElement(currentIndex);
    } else if (isHome) {
      this.preventDefaultEvent(event);
      nextIndex = this.focusFirstElement();
    } else if (isEnd) {
      this.preventDefaultEvent(event);
      nextIndex = this.focusLastElement();
    } else if (isEnter || isSpace) {
      if (isRootListItem) {
        const target = event.target;
        if (target && target.tagName === "A" && isEnter) {
          return;
        }
        this.preventDefaultEvent(event);
        this.setSelectedIndexOnAction_(currentIndex, true);
      }
    }
    this.focusedItemIndex_ = currentIndex;
    if (nextIndex !== void 0) {
      this.setTabindexAtIndex_(nextIndex);
      this.focusedItemIndex_ = nextIndex;
    }
  }
  handleSingleSelection(index, isInteraction, force) {
    if (index === numbers$3.UNSET_INDEX) {
      return;
    }
    this.setSelectedIndexOnAction_(index, isInteraction, force);
    this.setTabindexAtIndex_(index);
    this.focusedItemIndex_ = index;
  }
  focusNextElement(index) {
    const count = this.adapter.getListItemCount();
    let nextIndex = index + 1;
    if (nextIndex >= count) {
      if (this.wrapFocus_) {
        nextIndex = 0;
      } else {
        return index;
      }
    }
    this.adapter.focusItemAtIndex(nextIndex);
    return nextIndex;
  }
  focusPrevElement(index) {
    let prevIndex = index - 1;
    if (prevIndex < 0) {
      if (this.wrapFocus_) {
        prevIndex = this.adapter.getListItemCount() - 1;
      } else {
        return index;
      }
    }
    this.adapter.focusItemAtIndex(prevIndex);
    return prevIndex;
  }
  focusFirstElement() {
    this.adapter.focusItemAtIndex(0);
    return 0;
  }
  focusLastElement() {
    const lastIndex = this.adapter.getListItemCount() - 1;
    this.adapter.focusItemAtIndex(lastIndex);
    return lastIndex;
  }
  setEnabled(itemIndex, isEnabled) {
    if (!this.isIndexValid_(itemIndex)) {
      return;
    }
    this.adapter.setDisabledStateForElementIndex(itemIndex, !isEnabled);
  }
  preventDefaultEvent(evt) {
    const target = evt.target;
    const tagName = `${target.tagName}`.toLowerCase();
    if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
      evt.preventDefault();
    }
  }
  setSingleSelectionAtIndex_(index, isInteraction = true) {
    if (this.selectedIndex_ === index) {
      return;
    }
    if (this.selectedIndex_ !== numbers$3.UNSET_INDEX) {
      this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, false);
      if (this.useActivatedClass_) {
        this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, false);
      }
    }
    if (isInteraction) {
      this.adapter.setSelectedStateForElementIndex(index, true);
    }
    if (this.useActivatedClass_) {
      this.adapter.setActivatedStateForElementIndex(index, true);
    }
    this.setAriaForSingleSelectionAtIndex_(index);
    this.selectedIndex_ = index;
    this.adapter.notifySelected(index);
  }
  setMultiSelectionAtIndex_(newIndex, isInteraction = true) {
    const oldIndex = createSetFromIndex(this.selectedIndex_);
    const diff = findIndexDiff(oldIndex, newIndex);
    if (!diff.removed.length && !diff.added.length) {
      return;
    }
    for (const removed of diff.removed) {
      if (isInteraction) {
        this.adapter.setSelectedStateForElementIndex(removed, false);
      }
      if (this.useActivatedClass_) {
        this.adapter.setActivatedStateForElementIndex(removed, false);
      }
    }
    for (const added of diff.added) {
      if (isInteraction) {
        this.adapter.setSelectedStateForElementIndex(added, true);
      }
      if (this.useActivatedClass_) {
        this.adapter.setActivatedStateForElementIndex(added, true);
      }
    }
    this.selectedIndex_ = newIndex;
    this.adapter.notifySelected(newIndex, diff);
  }
  setAriaForSingleSelectionAtIndex_(index) {
    if (this.selectedIndex_ === numbers$3.UNSET_INDEX) {
      this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(index, strings$3.ARIA_CURRENT);
    }
    const isAriaCurrent = this.ariaCurrentAttrValue_ !== null;
    const ariaAttribute = isAriaCurrent ? strings$3.ARIA_CURRENT : strings$3.ARIA_SELECTED;
    if (this.selectedIndex_ !== numbers$3.UNSET_INDEX) {
      this.adapter.setAttributeForElementIndex(this.selectedIndex_, ariaAttribute, "false");
    }
    const ariaAttributeValue = isAriaCurrent ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(index, ariaAttribute, ariaAttributeValue);
  }
  setTabindexAtIndex_(index) {
    if (this.focusedItemIndex_ === numbers$3.UNSET_INDEX && index !== 0) {
      this.adapter.setTabIndexForElementIndex(0, -1);
    } else if (this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== index) {
      this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1);
    }
    this.adapter.setTabIndexForElementIndex(index, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let targetIndex = 0;
    if (typeof this.selectedIndex_ === "number" && this.selectedIndex_ !== numbers$3.UNSET_INDEX) {
      targetIndex = this.selectedIndex_;
    } else if (isIndexSet(this.selectedIndex_) && this.selectedIndex_.size > 0) {
      targetIndex = Math.min(...this.selectedIndex_);
    }
    this.setTabindexAtIndex_(targetIndex);
  }
  isIndexValid_(index) {
    if (index instanceof Set) {
      if (!this.isMulti_) {
        throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
      }
      if (index.size === 0) {
        return true;
      } else {
        let isOneInRange = false;
        for (const entry of index) {
          isOneInRange = this.isIndexInRange_(entry);
          if (isOneInRange) {
            break;
          }
        }
        return isOneInRange;
      }
    } else if (typeof index === "number") {
      if (this.isMulti_) {
        throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + index);
      }
      return index === numbers$3.UNSET_INDEX || this.isIndexInRange_(index);
    } else {
      return false;
    }
  }
  isIndexInRange_(index) {
    const listSize = this.adapter.getListItemCount();
    return index >= 0 && index < listSize;
  }
  setSelectedIndexOnAction_(index, isInteraction, force) {
    if (this.adapter.getDisabledStateForElementIndex(index)) {
      return;
    }
    let checkedIndex = index;
    if (this.isMulti_) {
      checkedIndex = new Set([index]);
    }
    if (!this.isIndexValid_(checkedIndex)) {
      return;
    }
    if (this.isMulti_) {
      this.toggleMultiAtIndex(index, force, isInteraction);
    } else {
      if (isInteraction || force) {
        this.setSingleSelectionAtIndex_(index, isInteraction);
      } else {
        const isDeselection = this.selectedIndex_ === index;
        if (isDeselection) {
          this.setSingleSelectionAtIndex_(numbers$3.UNSET_INDEX);
        }
      }
    }
    if (isInteraction) {
      this.adapter.notifyAction(index);
    }
  }
  toggleMultiAtIndex(index, force, isInteraction = true) {
    let newSelectionValue = false;
    if (force === void 0) {
      newSelectionValue = !this.adapter.getSelectedStateForElementIndex(index);
    } else {
      newSelectionValue = force;
    }
    const newSet = createSetFromIndex(this.selectedIndex_);
    if (newSelectionValue) {
      newSet.add(index);
    } else {
      newSet.delete(index);
    }
    this.setMultiSelectionAtIndex_(newSet, isInteraction);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function debounceLayout(callback, waitInMS = 50) {
  let timeoutId;
  return function(updateItems = true) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(updateItems);
    }, waitInMS);
  };
}
const isListItem = (element) => {
  return element.hasAttribute("mwc-list-item");
};
function clearAndCreateItemsReadyPromise() {
  const oldResolver = this.itemsReadyResolver;
  this.itemsReady = new Promise((res) => {
    return this.itemsReadyResolver = res;
  });
  oldResolver();
}
class ListBase extends BaseElement {
  constructor() {
    super();
    this.mdcAdapter = null;
    this.mdcFoundationClass = MDCListFoundation;
    this.activatable = false;
    this.multi = false;
    this.wrapFocus = false;
    this.itemRoles = null;
    this.innerRole = null;
    this.innerAriaLabel = null;
    this.rootTabbable = false;
    this.previousTabindex = null;
    this.noninteractive = false;
    this.itemsReadyResolver = () => {
    };
    this.itemsReady = Promise.resolve([]);
    this.items_ = [];
    const debouncedFunction = debounceLayout(this.layout.bind(this));
    this.debouncedLayout = (updateItems = true) => {
      clearAndCreateItemsReadyPromise.call(this);
      debouncedFunction(updateItems);
    };
  }
  async getUpdateComplete() {
    const result = await super.getUpdateComplete();
    await this.itemsReady;
    return result;
  }
  get items() {
    return this.items_;
  }
  updateItems() {
    var _a2;
    const nodes = (_a2 = this.assignedElements) !== null && _a2 !== void 0 ? _a2 : [];
    const listItems = [];
    for (const node of nodes) {
      if (isListItem(node)) {
        listItems.push(node);
        node._managingList = this;
      }
      if (node.hasAttribute("divider") && !node.hasAttribute("role")) {
        node.setAttribute("role", "separator");
      }
    }
    this.items_ = listItems;
    const selectedIndices = new Set();
    this.items_.forEach((item, index) => {
      if (this.itemRoles) {
        item.setAttribute("role", this.itemRoles);
      } else {
        item.removeAttribute("role");
      }
      if (item.selected) {
        selectedIndices.add(index);
      }
    });
    if (this.multi) {
      this.select(selectedIndices);
    } else {
      const index = selectedIndices.size ? selectedIndices.entries().next().value[1] : -1;
      this.select(index);
    }
    const itemsUpdatedEv = new Event("items-updated", { bubbles: true, composed: true });
    this.dispatchEvent(itemsUpdatedEv);
  }
  get selected() {
    const index = this.index;
    if (!isIndexSet(index)) {
      if (index === -1) {
        return null;
      }
      return this.items[index];
    }
    const selected = [];
    for (const entry of index) {
      selected.push(this.items[entry]);
    }
    return selected;
  }
  get index() {
    if (this.mdcFoundation) {
      return this.mdcFoundation.getSelectedIndex();
    }
    return -1;
  }
  render() {
    const role = this.innerRole === null ? void 0 : this.innerRole;
    const ariaLabel = this.innerAriaLabel === null ? void 0 : this.innerAriaLabel;
    const tabindex = this.rootTabbable ? "0" : "-1";
    return p`
      <!-- @ts-ignore -->
      <ul
          tabindex=${tabindex}
          role="${l$1(role)}"
          aria-label="${l$1(ariaLabel)}"
          class="mdc-deprecated-list"
          @keydown=${this.onKeydown}
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          @request-selected=${this.onRequestSelected}
          @list-item-rendered=${this.onListItemConnected}>
        <slot></slot>
        ${this.renderPlaceholder()}
      </ul>
    `;
  }
  renderPlaceholder() {
    var _a2;
    const nodes = (_a2 = this.assignedElements) !== null && _a2 !== void 0 ? _a2 : [];
    if (this.emptyMessage !== void 0 && nodes.length === 0) {
      return p`
        <mwc-list-item noninteractive>${this.emptyMessage}</mwc-list-item>
      `;
    }
    return null;
  }
  firstUpdated() {
    super.firstUpdated();
    if (!this.items.length) {
      this.mdcFoundation.setMulti(this.multi);
      this.layout();
    }
  }
  onFocusIn(evt) {
    if (this.mdcFoundation && this.mdcRoot) {
      const index = this.getIndexOfTarget(evt);
      this.mdcFoundation.handleFocusIn(evt, index);
    }
  }
  onFocusOut(evt) {
    if (this.mdcFoundation && this.mdcRoot) {
      const index = this.getIndexOfTarget(evt);
      this.mdcFoundation.handleFocusOut(evt, index);
    }
  }
  onKeydown(evt) {
    if (this.mdcFoundation && this.mdcRoot) {
      const index = this.getIndexOfTarget(evt);
      const target = evt.target;
      const isRootListItem = isListItem(target);
      this.mdcFoundation.handleKeydown(evt, isRootListItem, index);
    }
  }
  onRequestSelected(evt) {
    if (this.mdcFoundation) {
      let index = this.getIndexOfTarget(evt);
      if (index === -1) {
        this.layout();
        index = this.getIndexOfTarget(evt);
        if (index === -1) {
          return;
        }
      }
      const element = this.items[index];
      if (element.disabled) {
        return;
      }
      const selected = evt.detail.selected;
      const source = evt.detail.source;
      this.mdcFoundation.handleSingleSelection(index, source === "interaction", selected);
      evt.stopPropagation();
    }
  }
  getIndexOfTarget(evt) {
    const elements = this.items;
    const path = evt.composedPath();
    for (const pathItem of path) {
      let index = -1;
      if (isNodeElement(pathItem) && isListItem(pathItem)) {
        index = elements.indexOf(pathItem);
      }
      if (index !== -1) {
        return index;
      }
    }
    return -1;
  }
  createAdapter() {
    this.mdcAdapter = {
      getListItemCount: () => {
        if (this.mdcRoot) {
          return this.items.length;
        }
        return 0;
      },
      getFocusedElementIndex: this.getFocusedItemIndex,
      getAttributeForElementIndex: (index, attr) => {
        const listElement = this.mdcRoot;
        if (!listElement) {
          return "";
        }
        const element = this.items[index];
        return element ? element.getAttribute(attr) : "";
      },
      setAttributeForElementIndex: (index, attr, val) => {
        if (!this.mdcRoot) {
          return;
        }
        const element = this.items[index];
        if (element) {
          element.setAttribute(attr, val);
        }
      },
      focusItemAtIndex: (index) => {
        const element = this.items[index];
        if (element) {
          element.focus();
        }
      },
      setTabIndexForElementIndex: (index, value) => {
        const item = this.items[index];
        if (item) {
          item.tabindex = value;
        }
      },
      notifyAction: (index) => {
        const init = { bubbles: true, composed: true };
        init.detail = { index };
        const ev = new CustomEvent("action", init);
        this.dispatchEvent(ev);
      },
      notifySelected: (index, diff) => {
        const init = { bubbles: true, composed: true };
        init.detail = { index, diff };
        const ev = new CustomEvent("selected", init);
        this.dispatchEvent(ev);
      },
      isFocusInsideList: () => {
        return doesElementContainFocus(this);
      },
      isRootFocused: () => {
        const mdcRoot = this.mdcRoot;
        const root = mdcRoot.getRootNode();
        return root.activeElement === mdcRoot;
      },
      setDisabledStateForElementIndex: (index, value) => {
        const item = this.items[index];
        if (!item) {
          return;
        }
        item.disabled = value;
      },
      getDisabledStateForElementIndex: (index) => {
        const item = this.items[index];
        if (!item) {
          return false;
        }
        return item.disabled;
      },
      setSelectedStateForElementIndex: (index, value) => {
        const item = this.items[index];
        if (!item) {
          return;
        }
        item.selected = value;
      },
      getSelectedStateForElementIndex: (index) => {
        const item = this.items[index];
        if (!item) {
          return false;
        }
        return item.selected;
      },
      setActivatedStateForElementIndex: (index, value) => {
        const item = this.items[index];
        if (!item) {
          return;
        }
        item.activated = value;
      }
    };
    return this.mdcAdapter;
  }
  selectUi(index, activate = false) {
    const item = this.items[index];
    if (item) {
      item.selected = true;
      item.activated = activate;
    }
  }
  deselectUi(index) {
    const item = this.items[index];
    if (item) {
      item.selected = false;
      item.activated = false;
    }
  }
  select(index) {
    if (!this.mdcFoundation) {
      return;
    }
    this.mdcFoundation.setSelectedIndex(index);
  }
  toggle(index, force) {
    if (this.multi) {
      this.mdcFoundation.toggleMultiAtIndex(index, force);
    }
  }
  onListItemConnected(e2) {
    const target = e2.target;
    this.layout(this.items.indexOf(target) === -1);
  }
  layout(updateItems = true) {
    if (updateItems) {
      this.updateItems();
    }
    const first = this.items[0];
    for (const item of this.items) {
      item.tabindex = -1;
    }
    if (first) {
      if (this.noninteractive) {
        if (!this.previousTabindex) {
          this.previousTabindex = first;
        }
      } else {
        first.tabindex = 0;
      }
    }
    this.itemsReadyResolver();
  }
  getFocusedItemIndex() {
    if (!this.mdcRoot) {
      return -1;
    }
    if (!this.items.length) {
      return -1;
    }
    const activeElementPath = deepActiveElementPath();
    if (!activeElementPath.length) {
      return -1;
    }
    for (let i2 = activeElementPath.length - 1; i2 >= 0; i2--) {
      const activeItem = activeElementPath[i2];
      if (isListItem(activeItem)) {
        return this.items.indexOf(activeItem);
      }
    }
    return -1;
  }
  focusItemAtIndex(index) {
    for (const item of this.items) {
      if (item.tabindex === 0) {
        item.tabindex = -1;
        break;
      }
    }
    this.items[index].tabindex = 0;
    this.items[index].focus();
  }
  focus() {
    const root = this.mdcRoot;
    if (root) {
      root.focus();
    }
  }
  blur() {
    const root = this.mdcRoot;
    if (root) {
      root.blur();
    }
  }
}
__decorate([
  e$4({ type: String })
], ListBase.prototype, "emptyMessage", void 0);
__decorate([
  i$2(".mdc-deprecated-list")
], ListBase.prototype, "mdcRoot", void 0);
__decorate([
  o$2("", true, "*")
], ListBase.prototype, "assignedElements", void 0);
__decorate([
  o$2("", true, '[tabindex="0"]')
], ListBase.prototype, "tabbableElements", void 0);
__decorate([
  e$4({ type: Boolean }),
  observer(function(value) {
    if (this.mdcFoundation) {
      this.mdcFoundation.setUseActivatedClass(value);
    }
  })
], ListBase.prototype, "activatable", void 0);
__decorate([
  e$4({ type: Boolean }),
  observer(function(newValue, oldValue) {
    if (this.mdcFoundation) {
      this.mdcFoundation.setMulti(newValue);
    }
    if (oldValue !== void 0) {
      this.layout();
    }
  })
], ListBase.prototype, "multi", void 0);
__decorate([
  e$4({ type: Boolean }),
  observer(function(value) {
    if (this.mdcFoundation) {
      this.mdcFoundation.setWrapFocus(value);
    }
  })
], ListBase.prototype, "wrapFocus", void 0);
__decorate([
  e$4({ type: String }),
  observer(function(_newValue, oldValue) {
    if (oldValue !== void 0) {
      this.updateItems();
    }
  })
], ListBase.prototype, "itemRoles", void 0);
__decorate([
  e$4({ type: String })
], ListBase.prototype, "innerRole", void 0);
__decorate([
  e$4({ type: String })
], ListBase.prototype, "innerAriaLabel", void 0);
__decorate([
  e$4({ type: Boolean })
], ListBase.prototype, "rootTabbable", void 0);
__decorate([
  e$4({ type: Boolean, reflect: true }),
  observer(function(value) {
    var _a2, _b2;
    if (value) {
      const tabbable = (_b2 = (_a2 = this.tabbableElements) === null || _a2 === void 0 ? void 0 : _a2[0]) !== null && _b2 !== void 0 ? _b2 : null;
      this.previousTabindex = tabbable;
      if (tabbable) {
        tabbable.setAttribute("tabindex", "-1");
      }
    } else if (!value && this.previousTabindex) {
      this.previousTabindex.setAttribute("tabindex", "0");
      this.previousTabindex = null;
    }
  })
], ListBase.prototype, "noninteractive", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$3 = r$4`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-deprecated-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-deprecated-list:focus{outline:none}.mdc-deprecated-list-item{height:48px}.mdc-deprecated-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-deprecated-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-deprecated-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-deprecated-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc( 100% - var(--mdc-list-inset-margin, 72px) )}[dir=rtl] .mdc-deprecated-list ::slotted([divider][inset]),.mdc-deprecated-list ::slotted([divider][inset][dir=rtl]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-deprecated-list ::slotted([divider][inset][padded]){width:calc( 100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px) )}.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-deprecated-list--two-line.mdc-deprecated-list--dense ::slotted([mwc-list-item]),.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let List = class List2 extends ListBase {
};
List.styles = [styles$3];
List = __decorate([
  n$1("mwc-list")
], List);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$2 = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
};
var strings$2 = {
  CLOSED_EVENT: "MDCMenuSurface:closed",
  CLOSING_EVENT: "MDCMenuSurface:closing",
  OPENED_EVENT: "MDCMenuSurface:opened",
  FOCUSABLE_ELEMENTS: [
    "button:not(:disabled)",
    '[href]:not([aria-disabled="true"])',
    "input:not(:disabled)",
    "select:not(:disabled)",
    "textarea:not(:disabled)",
    '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'
  ].join(", ")
};
var numbers$2 = {
  TRANSITION_OPEN_DURATION: 120,
  TRANSITION_CLOSE_DURATION: 75,
  MARGIN_TO_EDGE: 32,
  ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67,
  TOUCH_EVENT_WAIT_MS: 30
};
var CornerBit;
(function(CornerBit2) {
  CornerBit2[CornerBit2["BOTTOM"] = 1] = "BOTTOM";
  CornerBit2[CornerBit2["CENTER"] = 2] = "CENTER";
  CornerBit2[CornerBit2["RIGHT"] = 4] = "RIGHT";
  CornerBit2[CornerBit2["FLIP_RTL"] = 8] = "FLIP_RTL";
})(CornerBit || (CornerBit = {}));
var Corner;
(function(Corner2) {
  Corner2[Corner2["TOP_LEFT"] = 0] = "TOP_LEFT";
  Corner2[Corner2["TOP_RIGHT"] = 4] = "TOP_RIGHT";
  Corner2[Corner2["BOTTOM_LEFT"] = 1] = "BOTTOM_LEFT";
  Corner2[Corner2["BOTTOM_RIGHT"] = 5] = "BOTTOM_RIGHT";
  Corner2[Corner2["TOP_START"] = 8] = "TOP_START";
  Corner2[Corner2["TOP_END"] = 12] = "TOP_END";
  Corner2[Corner2["BOTTOM_START"] = 9] = "BOTTOM_START";
  Corner2[Corner2["BOTTOM_END"] = 13] = "BOTTOM_END";
})(Corner || (Corner = {}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCMenuSurfaceFoundation = function(_super) {
  __extends(MDCMenuSurfaceFoundation2, _super);
  function MDCMenuSurfaceFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCMenuSurfaceFoundation2.defaultAdapter), adapter)) || this;
    _this.isSurfaceOpen = false;
    _this.isQuickOpen = false;
    _this.isHoistedElement = false;
    _this.isFixedPosition = false;
    _this.isHorizontallyCenteredOnViewport = false;
    _this.maxHeight = 0;
    _this.openBottomBias = 0;
    _this.openAnimationEndTimerId = 0;
    _this.closeAnimationEndTimerId = 0;
    _this.animationRequestId = 0;
    _this.anchorCorner = Corner.TOP_START;
    _this.originCorner = Corner.TOP_START;
    _this.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 };
    _this.position = { x: 0, y: 0 };
    return _this;
  }
  Object.defineProperty(MDCMenuSurfaceFoundation2, "cssClasses", {
    get: function() {
      return cssClasses$2;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCMenuSurfaceFoundation2, "strings", {
    get: function() {
      return strings$2;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCMenuSurfaceFoundation2, "numbers", {
    get: function() {
      return numbers$2;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCMenuSurfaceFoundation2, "Corner", {
    get: function() {
      return Corner;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCMenuSurfaceFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        hasClass: function() {
          return false;
        },
        hasAnchor: function() {
          return false;
        },
        isElementInContainer: function() {
          return false;
        },
        isFocused: function() {
          return false;
        },
        isRtl: function() {
          return false;
        },
        getInnerDimensions: function() {
          return { height: 0, width: 0 };
        },
        getAnchorDimensions: function() {
          return null;
        },
        getWindowDimensions: function() {
          return { height: 0, width: 0 };
        },
        getBodyDimensions: function() {
          return { height: 0, width: 0 };
        },
        getWindowScroll: function() {
          return { x: 0, y: 0 };
        },
        setPosition: function() {
          return void 0;
        },
        setMaxHeight: function() {
          return void 0;
        },
        setTransformOrigin: function() {
          return void 0;
        },
        saveFocus: function() {
          return void 0;
        },
        restoreFocus: function() {
          return void 0;
        },
        notifyClose: function() {
          return void 0;
        },
        notifyOpen: function() {
          return void 0;
        },
        notifyClosing: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCMenuSurfaceFoundation2.prototype.init = function() {
    var _a2 = MDCMenuSurfaceFoundation2.cssClasses, ROOT = _a2.ROOT, OPEN2 = _a2.OPEN;
    if (!this.adapter.hasClass(ROOT)) {
      throw new Error(ROOT + " class required in root element.");
    }
    if (this.adapter.hasClass(OPEN2)) {
      this.isSurfaceOpen = true;
    }
  };
  MDCMenuSurfaceFoundation2.prototype.destroy = function() {
    clearTimeout(this.openAnimationEndTimerId);
    clearTimeout(this.closeAnimationEndTimerId);
    cancelAnimationFrame(this.animationRequestId);
  };
  MDCMenuSurfaceFoundation2.prototype.setAnchorCorner = function(corner) {
    this.anchorCorner = corner;
  };
  MDCMenuSurfaceFoundation2.prototype.flipCornerHorizontally = function() {
    this.originCorner = this.originCorner ^ CornerBit.RIGHT;
  };
  MDCMenuSurfaceFoundation2.prototype.setAnchorMargin = function(margin) {
    this.anchorMargin.top = margin.top || 0;
    this.anchorMargin.right = margin.right || 0;
    this.anchorMargin.bottom = margin.bottom || 0;
    this.anchorMargin.left = margin.left || 0;
  };
  MDCMenuSurfaceFoundation2.prototype.setIsHoisted = function(isHoisted) {
    this.isHoistedElement = isHoisted;
  };
  MDCMenuSurfaceFoundation2.prototype.setFixedPosition = function(isFixedPosition) {
    this.isFixedPosition = isFixedPosition;
  };
  MDCMenuSurfaceFoundation2.prototype.isFixed = function() {
    return this.isFixedPosition;
  };
  MDCMenuSurfaceFoundation2.prototype.setAbsolutePosition = function(x2, y) {
    this.position.x = this.isFinite(x2) ? x2 : 0;
    this.position.y = this.isFinite(y) ? y : 0;
  };
  MDCMenuSurfaceFoundation2.prototype.setIsHorizontallyCenteredOnViewport = function(isCentered) {
    this.isHorizontallyCenteredOnViewport = isCentered;
  };
  MDCMenuSurfaceFoundation2.prototype.setQuickOpen = function(quickOpen) {
    this.isQuickOpen = quickOpen;
  };
  MDCMenuSurfaceFoundation2.prototype.setMaxHeight = function(maxHeight) {
    this.maxHeight = maxHeight;
  };
  MDCMenuSurfaceFoundation2.prototype.setOpenBottomBias = function(bias) {
    this.openBottomBias = bias;
  };
  MDCMenuSurfaceFoundation2.prototype.isOpen = function() {
    return this.isSurfaceOpen;
  };
  MDCMenuSurfaceFoundation2.prototype.open = function() {
    var _this = this;
    if (this.isSurfaceOpen) {
      return;
    }
    this.adapter.saveFocus();
    if (this.isQuickOpen) {
      this.isSurfaceOpen = true;
      this.adapter.addClass(MDCMenuSurfaceFoundation2.cssClasses.OPEN);
      this.dimensions = this.adapter.getInnerDimensions();
      this.autoposition();
      this.adapter.notifyOpen();
    } else {
      this.adapter.addClass(MDCMenuSurfaceFoundation2.cssClasses.ANIMATING_OPEN);
      this.animationRequestId = requestAnimationFrame(function() {
        _this.dimensions = _this.adapter.getInnerDimensions();
        _this.autoposition();
        _this.adapter.addClass(MDCMenuSurfaceFoundation2.cssClasses.OPEN);
        _this.openAnimationEndTimerId = setTimeout(function() {
          _this.openAnimationEndTimerId = 0;
          _this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.ANIMATING_OPEN);
          _this.adapter.notifyOpen();
        }, numbers$2.TRANSITION_OPEN_DURATION);
      });
      this.isSurfaceOpen = true;
    }
  };
  MDCMenuSurfaceFoundation2.prototype.close = function(skipRestoreFocus) {
    var _this = this;
    if (skipRestoreFocus === void 0) {
      skipRestoreFocus = false;
    }
    if (!this.isSurfaceOpen) {
      return;
    }
    this.adapter.notifyClosing();
    if (this.isQuickOpen) {
      this.isSurfaceOpen = false;
      if (!skipRestoreFocus) {
        this.maybeRestoreFocus();
      }
      this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.OPEN);
      this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.IS_OPEN_BELOW);
      this.adapter.notifyClose();
      return;
    }
    this.adapter.addClass(MDCMenuSurfaceFoundation2.cssClasses.ANIMATING_CLOSED);
    requestAnimationFrame(function() {
      _this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.OPEN);
      _this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.IS_OPEN_BELOW);
      _this.closeAnimationEndTimerId = setTimeout(function() {
        _this.closeAnimationEndTimerId = 0;
        _this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.ANIMATING_CLOSED);
        _this.adapter.notifyClose();
      }, numbers$2.TRANSITION_CLOSE_DURATION);
    });
    this.isSurfaceOpen = false;
    if (!skipRestoreFocus) {
      this.maybeRestoreFocus();
    }
  };
  MDCMenuSurfaceFoundation2.prototype.handleBodyClick = function(evt) {
    var el = evt.target;
    if (this.adapter.isElementInContainer(el)) {
      return;
    }
    this.close();
  };
  MDCMenuSurfaceFoundation2.prototype.handleKeydown = function(evt) {
    var keyCode = evt.keyCode, key = evt.key;
    var isEscape = key === "Escape" || keyCode === 27;
    if (isEscape) {
      this.close();
    }
  };
  MDCMenuSurfaceFoundation2.prototype.autoposition = function() {
    var _a2;
    this.measurements = this.getAutoLayoutmeasurements();
    var corner = this.getoriginCorner();
    var maxMenuSurfaceHeight = this.getMenuSurfaceMaxHeight(corner);
    var verticalAlignment = this.hasBit(corner, CornerBit.BOTTOM) ? "bottom" : "top";
    var horizontalAlignment = this.hasBit(corner, CornerBit.RIGHT) ? "right" : "left";
    var horizontalOffset = this.getHorizontalOriginOffset(corner);
    var verticalOffset = this.getVerticalOriginOffset(corner);
    var _b2 = this.measurements, anchorSize = _b2.anchorSize, surfaceSize = _b2.surfaceSize;
    var position = (_a2 = {}, _a2[horizontalAlignment] = horizontalOffset, _a2[verticalAlignment] = verticalOffset, _a2);
    if (anchorSize.width / surfaceSize.width > numbers$2.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO) {
      horizontalAlignment = "center";
    }
    if (this.isHoistedElement || this.isFixedPosition) {
      this.adjustPositionForHoistedElement(position);
    }
    this.adapter.setTransformOrigin(horizontalAlignment + " " + verticalAlignment);
    this.adapter.setPosition(position);
    this.adapter.setMaxHeight(maxMenuSurfaceHeight ? maxMenuSurfaceHeight + "px" : "");
    if (!this.hasBit(corner, CornerBit.BOTTOM)) {
      this.adapter.addClass(MDCMenuSurfaceFoundation2.cssClasses.IS_OPEN_BELOW);
    }
  };
  MDCMenuSurfaceFoundation2.prototype.getAutoLayoutmeasurements = function() {
    var anchorRect = this.adapter.getAnchorDimensions();
    var bodySize = this.adapter.getBodyDimensions();
    var viewportSize = this.adapter.getWindowDimensions();
    var windowScroll = this.adapter.getWindowScroll();
    if (!anchorRect) {
      anchorRect = {
        top: this.position.y,
        right: this.position.x,
        bottom: this.position.y,
        left: this.position.x,
        width: 0,
        height: 0
      };
    }
    return {
      anchorSize: anchorRect,
      bodySize,
      surfaceSize: this.dimensions,
      viewportDistance: {
        top: anchorRect.top,
        right: viewportSize.width - anchorRect.right,
        bottom: viewportSize.height - anchorRect.bottom,
        left: anchorRect.left
      },
      viewportSize,
      windowScroll
    };
  };
  MDCMenuSurfaceFoundation2.prototype.getoriginCorner = function() {
    var corner = this.originCorner;
    var _a2 = this.measurements, viewportDistance = _a2.viewportDistance, anchorSize = _a2.anchorSize, surfaceSize = _a2.surfaceSize;
    var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation2.numbers.MARGIN_TO_EDGE;
    var isAnchoredToBottom = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
    var availableTop;
    var availableBottom;
    if (isAnchoredToBottom) {
      availableTop = viewportDistance.top - MARGIN_TO_EDGE + this.anchorMargin.bottom;
      availableBottom = viewportDistance.bottom - MARGIN_TO_EDGE - this.anchorMargin.bottom;
    } else {
      availableTop = viewportDistance.top - MARGIN_TO_EDGE + this.anchorMargin.top;
      availableBottom = viewportDistance.bottom - MARGIN_TO_EDGE + anchorSize.height - this.anchorMargin.top;
    }
    var isAvailableBottom = availableBottom - surfaceSize.height > 0;
    if (!isAvailableBottom && availableTop > availableBottom + this.openBottomBias) {
      corner = this.setBit(corner, CornerBit.BOTTOM);
    }
    var isRtl = this.adapter.isRtl();
    var isFlipRtl = this.hasBit(this.anchorCorner, CornerBit.FLIP_RTL);
    var hasRightBit = this.hasBit(this.anchorCorner, CornerBit.RIGHT) || this.hasBit(corner, CornerBit.RIGHT);
    var isAnchoredToRight = false;
    if (isRtl && isFlipRtl) {
      isAnchoredToRight = !hasRightBit;
    } else {
      isAnchoredToRight = hasRightBit;
    }
    var availableLeft;
    var availableRight;
    if (isAnchoredToRight) {
      availableLeft = viewportDistance.left + anchorSize.width + this.anchorMargin.right;
      availableRight = viewportDistance.right - this.anchorMargin.right;
    } else {
      availableLeft = viewportDistance.left + this.anchorMargin.left;
      availableRight = viewportDistance.right + anchorSize.width - this.anchorMargin.left;
    }
    var isAvailableLeft = availableLeft - surfaceSize.width > 0;
    var isAvailableRight = availableRight - surfaceSize.width > 0;
    var isOriginCornerAlignedToEnd = this.hasBit(corner, CornerBit.FLIP_RTL) && this.hasBit(corner, CornerBit.RIGHT);
    if (isAvailableRight && isOriginCornerAlignedToEnd && isRtl || !isAvailableLeft && isOriginCornerAlignedToEnd) {
      corner = this.unsetBit(corner, CornerBit.RIGHT);
    } else if (isAvailableLeft && isAnchoredToRight && isRtl || isAvailableLeft && !isAnchoredToRight && hasRightBit || !isAvailableRight && availableLeft >= availableRight) {
      corner = this.setBit(corner, CornerBit.RIGHT);
    }
    return corner;
  };
  MDCMenuSurfaceFoundation2.prototype.getMenuSurfaceMaxHeight = function(corner) {
    if (this.maxHeight > 0) {
      return this.maxHeight;
    }
    var viewportDistance = this.measurements.viewportDistance;
    var maxHeight = 0;
    var isBottomAligned = this.hasBit(corner, CornerBit.BOTTOM);
    var isBottomAnchored = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
    var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation2.numbers.MARGIN_TO_EDGE;
    if (isBottomAligned) {
      maxHeight = viewportDistance.top + this.anchorMargin.top - MARGIN_TO_EDGE;
      if (!isBottomAnchored) {
        maxHeight += this.measurements.anchorSize.height;
      }
    } else {
      maxHeight = viewportDistance.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - MARGIN_TO_EDGE;
      if (isBottomAnchored) {
        maxHeight -= this.measurements.anchorSize.height;
      }
    }
    return maxHeight;
  };
  MDCMenuSurfaceFoundation2.prototype.getHorizontalOriginOffset = function(corner) {
    var anchorSize = this.measurements.anchorSize;
    var isRightAligned = this.hasBit(corner, CornerBit.RIGHT);
    var avoidHorizontalOverlap = this.hasBit(this.anchorCorner, CornerBit.RIGHT);
    if (isRightAligned) {
      var rightOffset = avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin.left : this.anchorMargin.right;
      if (this.isHoistedElement || this.isFixedPosition) {
        return rightOffset - (this.measurements.viewportSize.width - this.measurements.bodySize.width);
      }
      return rightOffset;
    }
    return avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin.right : this.anchorMargin.left;
  };
  MDCMenuSurfaceFoundation2.prototype.getVerticalOriginOffset = function(corner) {
    var anchorSize = this.measurements.anchorSize;
    var isBottomAligned = this.hasBit(corner, CornerBit.BOTTOM);
    var avoidVerticalOverlap = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
    var y = 0;
    if (isBottomAligned) {
      y = avoidVerticalOverlap ? anchorSize.height - this.anchorMargin.top : -this.anchorMargin.bottom;
    } else {
      y = avoidVerticalOverlap ? anchorSize.height + this.anchorMargin.bottom : this.anchorMargin.top;
    }
    return y;
  };
  MDCMenuSurfaceFoundation2.prototype.adjustPositionForHoistedElement = function(position) {
    var e_1, _a2;
    var _b2 = this.measurements, windowScroll = _b2.windowScroll, viewportDistance = _b2.viewportDistance, surfaceSize = _b2.surfaceSize, viewportSize = _b2.viewportSize;
    var props = Object.keys(position);
    try {
      for (var props_1 = __values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
        var prop = props_1_1.value;
        var value = position[prop] || 0;
        if (this.isHorizontallyCenteredOnViewport && (prop === "left" || prop === "right")) {
          position[prop] = (viewportSize.width - surfaceSize.width) / 2;
          continue;
        }
        value += viewportDistance[prop];
        if (!this.isFixedPosition) {
          if (prop === "top") {
            value += windowScroll.y;
          } else if (prop === "bottom") {
            value -= windowScroll.y;
          } else if (prop === "left") {
            value += windowScroll.x;
          } else {
            value -= windowScroll.x;
          }
        }
        position[prop] = value;
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (props_1_1 && !props_1_1.done && (_a2 = props_1.return))
          _a2.call(props_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
  };
  MDCMenuSurfaceFoundation2.prototype.maybeRestoreFocus = function() {
    var _this = this;
    var isRootFocused = this.adapter.isFocused();
    var childHasFocus = document.activeElement && this.adapter.isElementInContainer(document.activeElement);
    if (isRootFocused || childHasFocus) {
      setTimeout(function() {
        _this.adapter.restoreFocus();
      }, numbers$2.TOUCH_EVENT_WAIT_MS);
    }
  };
  MDCMenuSurfaceFoundation2.prototype.hasBit = function(corner, bit) {
    return Boolean(corner & bit);
  };
  MDCMenuSurfaceFoundation2.prototype.setBit = function(corner, bit) {
    return corner | bit;
  };
  MDCMenuSurfaceFoundation2.prototype.unsetBit = function(corner, bit) {
    return corner ^ bit;
  };
  MDCMenuSurfaceFoundation2.prototype.isFinite = function(num) {
    return typeof num === "number" && isFinite(num);
  };
  return MDCMenuSurfaceFoundation2;
}(MDCFoundation);
var MDCMenuSurfaceFoundation$1 = MDCMenuSurfaceFoundation;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const stringToCorner = {
  "TOP_LEFT": Corner.TOP_LEFT,
  "TOP_RIGHT": Corner.TOP_RIGHT,
  "BOTTOM_LEFT": Corner.BOTTOM_LEFT,
  "BOTTOM_RIGHT": Corner.BOTTOM_RIGHT,
  "TOP_START": Corner.TOP_START,
  "TOP_END": Corner.TOP_END,
  "BOTTOM_START": Corner.BOTTOM_START,
  "BOTTOM_END": Corner.BOTTOM_END
};
class MenuSurfaceBase extends BaseElement {
  constructor() {
    super(...arguments);
    this.mdcFoundationClass = MDCMenuSurfaceFoundation$1;
    this.absolute = false;
    this.fullwidth = false;
    this.fixed = false;
    this.x = null;
    this.y = null;
    this.quick = false;
    this.open = false;
    this.stayOpenOnBodyClick = false;
    this.bitwiseCorner = Corner.TOP_START;
    this.previousMenuCorner = null;
    this.menuCorner = "START";
    this.corner = "TOP_START";
    this.styleTop = "";
    this.styleLeft = "";
    this.styleRight = "";
    this.styleBottom = "";
    this.styleMaxHeight = "";
    this.styleTransformOrigin = "";
    this.anchor = null;
    this.previouslyFocused = null;
    this.previousAnchor = null;
    this.onBodyClickBound = () => void 0;
  }
  render() {
    const classes = {
      "mdc-menu-surface--fixed": this.fixed,
      "mdc-menu-surface--fullwidth": this.fullwidth
    };
    const styles2 = {
      "top": this.styleTop,
      "left": this.styleLeft,
      "right": this.styleRight,
      "bottom": this.styleBottom,
      "max-height": this.styleMaxHeight,
      "transform-origin": this.styleTransformOrigin
    };
    return p`
      <div
          class="mdc-menu-surface ${o$1(classes)}"
          style="${i(styles2)}"
          @keydown=${this.onKeydown}
          @opened=${this.registerBodyClick}
          @closed=${this.deregisterBodyClick}>
        <slot></slot>
      </div>`;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), { hasAnchor: () => {
      return !!this.anchor;
    }, notifyClose: () => {
      const init = { bubbles: true, composed: true };
      const ev = new CustomEvent("closed", init);
      this.open = false;
      this.mdcRoot.dispatchEvent(ev);
    }, notifyClosing: () => {
      const init = { bubbles: true, composed: true };
      const ev = new CustomEvent("closing", init);
      this.mdcRoot.dispatchEvent(ev);
    }, notifyOpen: () => {
      const init = { bubbles: true, composed: true };
      const ev = new CustomEvent("opened", init);
      this.open = true;
      this.mdcRoot.dispatchEvent(ev);
    }, isElementInContainer: () => false, isRtl: () => {
      if (this.mdcRoot) {
        return getComputedStyle(this.mdcRoot).direction === "rtl";
      }
      return false;
    }, setTransformOrigin: (origin) => {
      const root = this.mdcRoot;
      if (!root) {
        return;
      }
      this.styleTransformOrigin = origin;
    }, isFocused: () => {
      return doesElementContainFocus(this);
    }, saveFocus: () => {
      const activeElementPath = deepActiveElementPath();
      const pathLength = activeElementPath.length;
      if (!pathLength) {
        this.previouslyFocused = null;
      }
      this.previouslyFocused = activeElementPath[pathLength - 1];
    }, restoreFocus: () => {
      if (!this.previouslyFocused) {
        return;
      }
      if ("focus" in this.previouslyFocused) {
        this.previouslyFocused.focus();
      }
    }, getInnerDimensions: () => {
      const mdcRoot = this.mdcRoot;
      if (!mdcRoot) {
        return { width: 0, height: 0 };
      }
      return { width: mdcRoot.offsetWidth, height: mdcRoot.offsetHeight };
    }, getAnchorDimensions: () => {
      const anchorElement = this.anchor;
      return anchorElement ? anchorElement.getBoundingClientRect() : null;
    }, getBodyDimensions: () => {
      return {
        width: document.body.clientWidth,
        height: document.body.clientHeight
      };
    }, getWindowDimensions: () => {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      };
    }, getWindowScroll: () => {
      return {
        x: window.pageXOffset,
        y: window.pageYOffset
      };
    }, setPosition: (position) => {
      const mdcRoot = this.mdcRoot;
      if (!mdcRoot) {
        return;
      }
      this.styleLeft = "left" in position ? `${position.left}px` : "";
      this.styleRight = "right" in position ? `${position.right}px` : "";
      this.styleTop = "top" in position ? `${position.top}px` : "";
      this.styleBottom = "bottom" in position ? `${position.bottom}px` : "";
    }, setMaxHeight: async (height) => {
      const mdcRoot = this.mdcRoot;
      if (!mdcRoot) {
        return;
      }
      this.styleMaxHeight = height;
      await this.updateComplete;
      this.styleMaxHeight = `var(--mdc-menu-max-height, ${height})`;
    } });
  }
  onKeydown(evt) {
    if (this.mdcFoundation) {
      this.mdcFoundation.handleKeydown(evt);
    }
  }
  onBodyClick(evt) {
    if (this.stayOpenOnBodyClick) {
      return;
    }
    const path = evt.composedPath();
    if (path.indexOf(this) === -1) {
      this.close();
    }
  }
  registerBodyClick() {
    this.onBodyClickBound = this.onBodyClick.bind(this);
    document.body.addEventListener("click", this.onBodyClickBound, { passive: true, capture: true });
  }
  deregisterBodyClick() {
    document.body.removeEventListener("click", this.onBodyClickBound, { capture: true });
  }
  close() {
    this.open = false;
  }
  show() {
    this.open = true;
  }
}
__decorate([
  i$2(".mdc-menu-surface")
], MenuSurfaceBase.prototype, "mdcRoot", void 0);
__decorate([
  i$2("slot")
], MenuSurfaceBase.prototype, "slotElement", void 0);
__decorate([
  e$4({ type: Boolean }),
  observer(function(isAbsolute) {
    if (this.mdcFoundation && !this.fixed) {
      this.mdcFoundation.setIsHoisted(isAbsolute);
    }
  })
], MenuSurfaceBase.prototype, "absolute", void 0);
__decorate([
  e$4({ type: Boolean })
], MenuSurfaceBase.prototype, "fullwidth", void 0);
__decorate([
  e$4({ type: Boolean }),
  observer(function(isFixed) {
    if (this.mdcFoundation && !this.absolute) {
      this.mdcFoundation.setFixedPosition(isFixed);
    }
  })
], MenuSurfaceBase.prototype, "fixed", void 0);
__decorate([
  e$4({ type: Number }),
  observer(function(value) {
    if (this.mdcFoundation && this.y !== null && value !== null) {
      this.mdcFoundation.setAbsolutePosition(value, this.y);
      this.mdcFoundation.setAnchorMargin({ left: value, top: this.y, right: -value, bottom: this.y });
    }
  })
], MenuSurfaceBase.prototype, "x", void 0);
__decorate([
  e$4({ type: Number }),
  observer(function(value) {
    if (this.mdcFoundation && this.x !== null && value !== null) {
      this.mdcFoundation.setAbsolutePosition(this.x, value);
      this.mdcFoundation.setAnchorMargin({ left: this.x, top: value, right: -this.x, bottom: value });
    }
  })
], MenuSurfaceBase.prototype, "y", void 0);
__decorate([
  e$4({ type: Boolean }),
  observer(function(value) {
    if (this.mdcFoundation) {
      this.mdcFoundation.setQuickOpen(value);
    }
  })
], MenuSurfaceBase.prototype, "quick", void 0);
__decorate([
  e$4({ type: Boolean, reflect: true }),
  observer(function(isOpen, wasOpen) {
    if (this.mdcFoundation) {
      if (isOpen) {
        this.mdcFoundation.open();
      } else if (wasOpen !== void 0) {
        this.mdcFoundation.close();
      }
    }
  })
], MenuSurfaceBase.prototype, "open", void 0);
__decorate([
  e$4({ type: Boolean })
], MenuSurfaceBase.prototype, "stayOpenOnBodyClick", void 0);
__decorate([
  t$1(),
  observer(function(value) {
    if (this.mdcFoundation) {
      if (value) {
        this.mdcFoundation.setAnchorCorner(value);
      } else {
        this.mdcFoundation.setAnchorCorner(value);
      }
    }
  })
], MenuSurfaceBase.prototype, "bitwiseCorner", void 0);
__decorate([
  e$4({ type: String }),
  observer(function(value) {
    if (this.mdcFoundation) {
      const isValidValue = value === "START" || value === "END";
      const isFirstTimeSet = this.previousMenuCorner === null;
      const cornerChanged = !isFirstTimeSet && value !== this.previousMenuCorner;
      const initiallySetToEnd = isFirstTimeSet && value === "END";
      if (isValidValue && (cornerChanged || initiallySetToEnd)) {
        this.bitwiseCorner = this.bitwiseCorner ^ CornerBit.RIGHT;
        this.mdcFoundation.flipCornerHorizontally();
        this.previousMenuCorner = value;
      }
    }
  })
], MenuSurfaceBase.prototype, "menuCorner", void 0);
__decorate([
  e$4({ type: String }),
  observer(function(value) {
    if (this.mdcFoundation) {
      if (value) {
        let newCorner = stringToCorner[value];
        if (this.menuCorner === "END") {
          newCorner = newCorner ^ CornerBit.RIGHT;
        }
        this.bitwiseCorner = newCorner;
      }
    }
  })
], MenuSurfaceBase.prototype, "corner", void 0);
__decorate([
  t$1()
], MenuSurfaceBase.prototype, "styleTop", void 0);
__decorate([
  t$1()
], MenuSurfaceBase.prototype, "styleLeft", void 0);
__decorate([
  t$1()
], MenuSurfaceBase.prototype, "styleRight", void 0);
__decorate([
  t$1()
], MenuSurfaceBase.prototype, "styleBottom", void 0);
__decorate([
  t$1()
], MenuSurfaceBase.prototype, "styleMaxHeight", void 0);
__decorate([
  t$1()
], MenuSurfaceBase.prototype, "styleTransformOrigin", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$2 = r$4`.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1),height 250ms cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}:host(:not([open])){display:none}.mdc-menu-surface{z-index:8;z-index:var(--mdc-menu-z-index, 8);min-width:112px;min-width:var(--mdc-menu-min-width, 112px)}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let MenuSurface = class MenuSurface2 extends MenuSurfaceBase {
};
MenuSurface.styles = [styles$2];
MenuSurface = __decorate([
  n$1("mwc-menu-surface")
], MenuSurface);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$1 = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
};
var strings$1 = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
};
var numbers$1 = {
  FOCUS_ROOT_INDEX: -1
};
var DefaultFocusState;
(function(DefaultFocusState2) {
  DefaultFocusState2[DefaultFocusState2["NONE"] = 0] = "NONE";
  DefaultFocusState2[DefaultFocusState2["LIST_ROOT"] = 1] = "LIST_ROOT";
  DefaultFocusState2[DefaultFocusState2["FIRST_ITEM"] = 2] = "FIRST_ITEM";
  DefaultFocusState2[DefaultFocusState2["LAST_ITEM"] = 3] = "LAST_ITEM";
})(DefaultFocusState || (DefaultFocusState = {}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCMenuFoundation = function(_super) {
  __extends(MDCMenuFoundation2, _super);
  function MDCMenuFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCMenuFoundation2.defaultAdapter), adapter)) || this;
    _this.closeAnimationEndTimerId = 0;
    _this.defaultFocusState = DefaultFocusState.LIST_ROOT;
    _this.selectedIndex = -1;
    return _this;
  }
  Object.defineProperty(MDCMenuFoundation2, "cssClasses", {
    get: function() {
      return cssClasses$1;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCMenuFoundation2, "strings", {
    get: function() {
      return strings$1;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCMenuFoundation2, "numbers", {
    get: function() {
      return numbers$1;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCMenuFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClassToElementAtIndex: function() {
          return void 0;
        },
        removeClassFromElementAtIndex: function() {
          return void 0;
        },
        addAttributeToElementAtIndex: function() {
          return void 0;
        },
        removeAttributeFromElementAtIndex: function() {
          return void 0;
        },
        getAttributeFromElementAtIndex: function() {
          return null;
        },
        elementContainsClass: function() {
          return false;
        },
        closeSurface: function() {
          return void 0;
        },
        getElementIndex: function() {
          return -1;
        },
        notifySelected: function() {
          return void 0;
        },
        getMenuItemCount: function() {
          return 0;
        },
        focusItemAtIndex: function() {
          return void 0;
        },
        focusListRoot: function() {
          return void 0;
        },
        getSelectedSiblingOfItemAtIndex: function() {
          return -1;
        },
        isSelectableItemAtIndex: function() {
          return false;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCMenuFoundation2.prototype.destroy = function() {
    if (this.closeAnimationEndTimerId) {
      clearTimeout(this.closeAnimationEndTimerId);
    }
    this.adapter.closeSurface();
  };
  MDCMenuFoundation2.prototype.handleKeydown = function(evt) {
    var key = evt.key, keyCode = evt.keyCode;
    var isTab = key === "Tab" || keyCode === 9;
    if (isTab) {
      this.adapter.closeSurface(true);
    }
  };
  MDCMenuFoundation2.prototype.handleItemAction = function(listItem) {
    var _this = this;
    var index = this.adapter.getElementIndex(listItem);
    if (index < 0) {
      return;
    }
    this.adapter.notifySelected({ index });
    var skipRestoreFocus = this.adapter.getAttributeFromElementAtIndex(index, strings$1.SKIP_RESTORE_FOCUS) === "true";
    this.adapter.closeSurface(skipRestoreFocus);
    this.closeAnimationEndTimerId = setTimeout(function() {
      var recomputedIndex = _this.adapter.getElementIndex(listItem);
      if (recomputedIndex >= 0 && _this.adapter.isSelectableItemAtIndex(recomputedIndex)) {
        _this.setSelectedIndex(recomputedIndex);
      }
    }, MDCMenuSurfaceFoundation.numbers.TRANSITION_CLOSE_DURATION);
  };
  MDCMenuFoundation2.prototype.handleMenuSurfaceOpened = function() {
    switch (this.defaultFocusState) {
      case DefaultFocusState.FIRST_ITEM:
        this.adapter.focusItemAtIndex(0);
        break;
      case DefaultFocusState.LAST_ITEM:
        this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
        break;
      case DefaultFocusState.NONE:
        break;
      default:
        this.adapter.focusListRoot();
        break;
    }
  };
  MDCMenuFoundation2.prototype.setDefaultFocusState = function(focusState) {
    this.defaultFocusState = focusState;
  };
  MDCMenuFoundation2.prototype.getSelectedIndex = function() {
    return this.selectedIndex;
  };
  MDCMenuFoundation2.prototype.setSelectedIndex = function(index) {
    this.validatedIndex(index);
    if (!this.adapter.isSelectableItemAtIndex(index)) {
      throw new Error("MDCMenuFoundation: No selection group at specified index.");
    }
    var prevSelectedIndex = this.adapter.getSelectedSiblingOfItemAtIndex(index);
    if (prevSelectedIndex >= 0) {
      this.adapter.removeAttributeFromElementAtIndex(prevSelectedIndex, strings$1.ARIA_CHECKED_ATTR);
      this.adapter.removeClassFromElementAtIndex(prevSelectedIndex, cssClasses$1.MENU_SELECTED_LIST_ITEM);
    }
    this.adapter.addClassToElementAtIndex(index, cssClasses$1.MENU_SELECTED_LIST_ITEM);
    this.adapter.addAttributeToElementAtIndex(index, strings$1.ARIA_CHECKED_ATTR, "true");
    this.selectedIndex = index;
  };
  MDCMenuFoundation2.prototype.setEnabled = function(index, isEnabled) {
    this.validatedIndex(index);
    if (isEnabled) {
      this.adapter.removeClassFromElementAtIndex(index, cssClasses$3.LIST_ITEM_DISABLED_CLASS);
      this.adapter.addAttributeToElementAtIndex(index, strings$1.ARIA_DISABLED_ATTR, "false");
    } else {
      this.adapter.addClassToElementAtIndex(index, cssClasses$3.LIST_ITEM_DISABLED_CLASS);
      this.adapter.addAttributeToElementAtIndex(index, strings$1.ARIA_DISABLED_ATTR, "true");
    }
  };
  MDCMenuFoundation2.prototype.validatedIndex = function(index) {
    var menuSize = this.adapter.getMenuItemCount();
    var isIndexInRange = index >= 0 && index < menuSize;
    if (!isIndexInRange) {
      throw new Error("MDCMenuFoundation: No list item at specified index.");
    }
  };
  return MDCMenuFoundation2;
}(MDCFoundation);
var MDCMenuFoundation$1 = MDCMenuFoundation;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class MenuBase extends BaseElement {
  constructor() {
    super(...arguments);
    this.mdcFoundationClass = MDCMenuFoundation$1;
    this.listElement_ = null;
    this.anchor = null;
    this.open = false;
    this.quick = false;
    this.wrapFocus = false;
    this.innerRole = "menu";
    this.innerAriaLabel = null;
    this.corner = "TOP_START";
    this.x = null;
    this.y = null;
    this.absolute = false;
    this.multi = false;
    this.activatable = false;
    this.fixed = false;
    this.forceGroupSelection = false;
    this.fullwidth = false;
    this.menuCorner = "START";
    this.stayOpenOnBodyClick = false;
    this.defaultFocus = "LIST_ROOT";
    this._listUpdateComplete = null;
  }
  get listElement() {
    if (!this.listElement_) {
      this.listElement_ = this.renderRoot.querySelector("mwc-list");
      return this.listElement_;
    }
    return this.listElement_;
  }
  get items() {
    const listElement = this.listElement;
    if (listElement) {
      return listElement.items;
    }
    return [];
  }
  get index() {
    const listElement = this.listElement;
    if (listElement) {
      return listElement.index;
    }
    return -1;
  }
  get selected() {
    const listElement = this.listElement;
    if (listElement) {
      return listElement.selected;
    }
    return null;
  }
  render() {
    const itemRoles = this.innerRole === "menu" ? "menuitem" : "option";
    return p`
      <mwc-menu-surface
          ?hidden=${!this.open}
          .anchor=${this.anchor}
          .open=${this.open}
          .quick=${this.quick}
          .corner=${this.corner}
          .x=${this.x}
          .y=${this.y}
          .absolute=${this.absolute}
          .fixed=${this.fixed}
          .fullwidth=${this.fullwidth}
          .menuCorner=${this.menuCorner}
          ?stayOpenOnBodyClick=${this.stayOpenOnBodyClick}
          class="mdc-menu mdc-menu-surface"
          @closed=${this.onClosed}
          @opened=${this.onOpened}
          @keydown=${this.onKeydown}>
        <mwc-list
          rootTabbable
          .innerAriaLabel=${this.innerAriaLabel}
          .innerRole=${this.innerRole}
          .multi=${this.multi}
          class="mdc-deprecated-list"
          .itemRoles=${itemRoles}
          .wrapFocus=${this.wrapFocus}
          .activatable=${this.activatable}
          @action=${this.onAction}>
        <slot></slot>
      </mwc-list>
    </mwc-menu-surface>`;
  }
  createAdapter() {
    return {
      addClassToElementAtIndex: (index, className) => {
        const listElement = this.listElement;
        if (!listElement) {
          return;
        }
        const element = listElement.items[index];
        if (!element) {
          return;
        }
        if (className === "mdc-menu-item--selected") {
          if (this.forceGroupSelection && !element.selected) {
            listElement.toggle(index, true);
          }
        } else {
          element.classList.add(className);
        }
      },
      removeClassFromElementAtIndex: (index, className) => {
        const listElement = this.listElement;
        if (!listElement) {
          return;
        }
        const element = listElement.items[index];
        if (!element) {
          return;
        }
        if (className === "mdc-menu-item--selected") {
          if (element.selected) {
            listElement.toggle(index, false);
          }
        } else {
          element.classList.remove(className);
        }
      },
      addAttributeToElementAtIndex: (index, attr, value) => {
        const listElement = this.listElement;
        if (!listElement) {
          return;
        }
        const element = listElement.items[index];
        if (!element) {
          return;
        }
        element.setAttribute(attr, value);
      },
      removeAttributeFromElementAtIndex: (index, attr) => {
        const listElement = this.listElement;
        if (!listElement) {
          return;
        }
        const element = listElement.items[index];
        if (!element) {
          return;
        }
        element.removeAttribute(attr);
      },
      getAttributeFromElementAtIndex: (index, attr) => {
        const listElement = this.listElement;
        if (!listElement) {
          return null;
        }
        const element = listElement.items[index];
        if (!element) {
          return null;
        }
        return element.getAttribute(attr);
      },
      elementContainsClass: (element, className) => element.classList.contains(className),
      closeSurface: () => {
        this.open = false;
      },
      getElementIndex: (element) => {
        const listElement = this.listElement;
        if (listElement) {
          return listElement.items.indexOf(element);
        }
        return -1;
      },
      notifySelected: () => {
      },
      getMenuItemCount: () => {
        const listElement = this.listElement;
        if (!listElement) {
          return 0;
        }
        return listElement.items.length;
      },
      focusItemAtIndex: (index) => {
        const listElement = this.listElement;
        if (!listElement) {
          return;
        }
        const element = listElement.items[index];
        if (element) {
          element.focus();
        }
      },
      focusListRoot: () => {
        if (this.listElement) {
          this.listElement.focus();
        }
      },
      getSelectedSiblingOfItemAtIndex: (index) => {
        const listElement = this.listElement;
        if (!listElement) {
          return -1;
        }
        const elementAtIndex = listElement.items[index];
        if (!elementAtIndex || !elementAtIndex.group) {
          return -1;
        }
        for (let i2 = 0; i2 < listElement.items.length; i2++) {
          if (i2 === index) {
            continue;
          }
          const current = listElement.items[i2];
          if (current.selected && current.group === elementAtIndex.group) {
            return i2;
          }
        }
        return -1;
      },
      isSelectableItemAtIndex: (index) => {
        const listElement = this.listElement;
        if (!listElement) {
          return false;
        }
        const elementAtIndex = listElement.items[index];
        if (!elementAtIndex) {
          return false;
        }
        return elementAtIndex.hasAttribute("group");
      }
    };
  }
  onKeydown(evt) {
    if (this.mdcFoundation) {
      this.mdcFoundation.handleKeydown(evt);
    }
  }
  onAction(evt) {
    const listElement = this.listElement;
    if (this.mdcFoundation && listElement) {
      const index = evt.detail.index;
      const el = listElement.items[index];
      if (el) {
        this.mdcFoundation.handleItemAction(el);
      }
    }
  }
  onOpened() {
    this.open = true;
    if (this.mdcFoundation) {
      this.mdcFoundation.handleMenuSurfaceOpened();
    }
  }
  onClosed() {
    this.open = false;
  }
  async getUpdateComplete() {
    await this._listUpdateComplete;
    const result = await super.getUpdateComplete();
    return result;
  }
  async firstUpdated() {
    super.firstUpdated();
    const listElement = this.listElement;
    if (listElement) {
      this._listUpdateComplete = listElement.updateComplete;
      await this._listUpdateComplete;
    }
  }
  select(index) {
    const listElement = this.listElement;
    if (listElement) {
      listElement.select(index);
    }
  }
  close() {
    this.open = false;
  }
  show() {
    this.open = true;
  }
  getFocusedItemIndex() {
    const listElement = this.listElement;
    if (listElement) {
      return listElement.getFocusedItemIndex();
    }
    return -1;
  }
  focusItemAtIndex(index) {
    const listElement = this.listElement;
    if (listElement) {
      listElement.focusItemAtIndex(index);
    }
  }
  layout(updateItems = true) {
    const listElement = this.listElement;
    if (listElement) {
      listElement.layout(updateItems);
    }
  }
}
__decorate([
  i$2(".mdc-menu")
], MenuBase.prototype, "mdcRoot", void 0);
__decorate([
  i$2("slot")
], MenuBase.prototype, "slotElement", void 0);
__decorate([
  e$4({ type: Object })
], MenuBase.prototype, "anchor", void 0);
__decorate([
  e$4({ type: Boolean, reflect: true })
], MenuBase.prototype, "open", void 0);
__decorate([
  e$4({ type: Boolean })
], MenuBase.prototype, "quick", void 0);
__decorate([
  e$4({ type: Boolean })
], MenuBase.prototype, "wrapFocus", void 0);
__decorate([
  e$4({ type: String })
], MenuBase.prototype, "innerRole", void 0);
__decorate([
  e$4({ type: String })
], MenuBase.prototype, "innerAriaLabel", void 0);
__decorate([
  e$4({ type: String })
], MenuBase.prototype, "corner", void 0);
__decorate([
  e$4({ type: Number })
], MenuBase.prototype, "x", void 0);
__decorate([
  e$4({ type: Number })
], MenuBase.prototype, "y", void 0);
__decorate([
  e$4({ type: Boolean })
], MenuBase.prototype, "absolute", void 0);
__decorate([
  e$4({ type: Boolean })
], MenuBase.prototype, "multi", void 0);
__decorate([
  e$4({ type: Boolean })
], MenuBase.prototype, "activatable", void 0);
__decorate([
  e$4({ type: Boolean })
], MenuBase.prototype, "fixed", void 0);
__decorate([
  e$4({ type: Boolean })
], MenuBase.prototype, "forceGroupSelection", void 0);
__decorate([
  e$4({ type: Boolean })
], MenuBase.prototype, "fullwidth", void 0);
__decorate([
  e$4({ type: String })
], MenuBase.prototype, "menuCorner", void 0);
__decorate([
  e$4({ type: Boolean })
], MenuBase.prototype, "stayOpenOnBodyClick", void 0);
__decorate([
  e$4({ type: String }),
  observer(function(value) {
    if (this.mdcFoundation) {
      this.mdcFoundation.setDefaultFocusState(DefaultFocusState[value]);
    }
  })
], MenuBase.prototype, "defaultFocus", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles$1 = r$4`mwc-list ::slotted([mwc-list-item]:not([twoline])),mwc-list ::slotted([noninteractive]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Menu = class Menu2 extends MenuBase {
};
Menu.styles = [styles$1];
Menu = __decorate([
  n$1("mwc-menu")
], Menu);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  CLOSING: "mdc-snackbar--closing",
  OPEN: "mdc-snackbar--open",
  OPENING: "mdc-snackbar--opening"
};
var strings = {
  ACTION_SELECTOR: ".mdc-snackbar__action",
  ARIA_LIVE_LABEL_TEXT_ATTR: "data-mdc-snackbar-label-text",
  CLOSED_EVENT: "MDCSnackbar:closed",
  CLOSING_EVENT: "MDCSnackbar:closing",
  DISMISS_SELECTOR: ".mdc-snackbar__dismiss",
  LABEL_SELECTOR: ".mdc-snackbar__label",
  OPENED_EVENT: "MDCSnackbar:opened",
  OPENING_EVENT: "MDCSnackbar:opening",
  REASON_ACTION: "action",
  REASON_DISMISS: "dismiss",
  SURFACE_SELECTOR: ".mdc-snackbar__surface"
};
var numbers = {
  DEFAULT_AUTO_DISMISS_TIMEOUT_MS: 5e3,
  INDETERMINATE: -1,
  MAX_AUTO_DISMISS_TIMEOUT_MS: 1e4,
  MIN_AUTO_DISMISS_TIMEOUT_MS: 4e3,
  SNACKBAR_ANIMATION_CLOSE_TIME_MS: 75,
  SNACKBAR_ANIMATION_OPEN_TIME_MS: 150,
  ARIA_LIVE_DELAY_MS: 1e3
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var OPENING = cssClasses.OPENING, OPEN = cssClasses.OPEN, CLOSING = cssClasses.CLOSING;
var REASON_ACTION = strings.REASON_ACTION, REASON_DISMISS = strings.REASON_DISMISS;
var MDCSnackbarFoundation = function(_super) {
  __extends(MDCSnackbarFoundation2, _super);
  function MDCSnackbarFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCSnackbarFoundation2.defaultAdapter), adapter)) || this;
    _this.opened = false;
    _this.animationFrame = 0;
    _this.animationTimer = 0;
    _this.autoDismissTimer = 0;
    _this.autoDismissTimeoutMs = numbers.DEFAULT_AUTO_DISMISS_TIMEOUT_MS;
    _this.closeOnEscape = true;
    return _this;
  }
  Object.defineProperty(MDCSnackbarFoundation2, "cssClasses", {
    get: function() {
      return cssClasses;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCSnackbarFoundation2, "strings", {
    get: function() {
      return strings;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCSnackbarFoundation2, "numbers", {
    get: function() {
      return numbers;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCSnackbarFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        announce: function() {
          return void 0;
        },
        notifyClosed: function() {
          return void 0;
        },
        notifyClosing: function() {
          return void 0;
        },
        notifyOpened: function() {
          return void 0;
        },
        notifyOpening: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCSnackbarFoundation2.prototype.destroy = function() {
    this.clearAutoDismissTimer();
    cancelAnimationFrame(this.animationFrame);
    this.animationFrame = 0;
    clearTimeout(this.animationTimer);
    this.animationTimer = 0;
    this.adapter.removeClass(OPENING);
    this.adapter.removeClass(OPEN);
    this.adapter.removeClass(CLOSING);
  };
  MDCSnackbarFoundation2.prototype.open = function() {
    var _this = this;
    this.clearAutoDismissTimer();
    this.opened = true;
    this.adapter.notifyOpening();
    this.adapter.removeClass(CLOSING);
    this.adapter.addClass(OPENING);
    this.adapter.announce();
    this.runNextAnimationFrame(function() {
      _this.adapter.addClass(OPEN);
      _this.animationTimer = setTimeout(function() {
        var timeoutMs = _this.getTimeoutMs();
        _this.handleAnimationTimerEnd();
        _this.adapter.notifyOpened();
        if (timeoutMs !== numbers.INDETERMINATE) {
          _this.autoDismissTimer = setTimeout(function() {
            _this.close(REASON_DISMISS);
          }, timeoutMs);
        }
      }, numbers.SNACKBAR_ANIMATION_OPEN_TIME_MS);
    });
  };
  MDCSnackbarFoundation2.prototype.close = function(reason) {
    var _this = this;
    if (reason === void 0) {
      reason = "";
    }
    if (!this.opened) {
      return;
    }
    cancelAnimationFrame(this.animationFrame);
    this.animationFrame = 0;
    this.clearAutoDismissTimer();
    this.opened = false;
    this.adapter.notifyClosing(reason);
    this.adapter.addClass(cssClasses.CLOSING);
    this.adapter.removeClass(cssClasses.OPEN);
    this.adapter.removeClass(cssClasses.OPENING);
    clearTimeout(this.animationTimer);
    this.animationTimer = setTimeout(function() {
      _this.handleAnimationTimerEnd();
      _this.adapter.notifyClosed(reason);
    }, numbers.SNACKBAR_ANIMATION_CLOSE_TIME_MS);
  };
  MDCSnackbarFoundation2.prototype.isOpen = function() {
    return this.opened;
  };
  MDCSnackbarFoundation2.prototype.getTimeoutMs = function() {
    return this.autoDismissTimeoutMs;
  };
  MDCSnackbarFoundation2.prototype.setTimeoutMs = function(timeoutMs) {
    var minValue = numbers.MIN_AUTO_DISMISS_TIMEOUT_MS;
    var maxValue = numbers.MAX_AUTO_DISMISS_TIMEOUT_MS;
    var indeterminateValue = numbers.INDETERMINATE;
    if (timeoutMs === numbers.INDETERMINATE || timeoutMs <= maxValue && timeoutMs >= minValue) {
      this.autoDismissTimeoutMs = timeoutMs;
    } else {
      throw new Error("\n        timeoutMs must be an integer in the range " + minValue + "\u2013" + maxValue + "\n        (or " + indeterminateValue + " to disable), but got '" + timeoutMs + "'");
    }
  };
  MDCSnackbarFoundation2.prototype.getCloseOnEscape = function() {
    return this.closeOnEscape;
  };
  MDCSnackbarFoundation2.prototype.setCloseOnEscape = function(closeOnEscape) {
    this.closeOnEscape = closeOnEscape;
  };
  MDCSnackbarFoundation2.prototype.handleKeyDown = function(evt) {
    var isEscapeKey = evt.key === "Escape" || evt.keyCode === 27;
    if (isEscapeKey && this.getCloseOnEscape()) {
      this.close(REASON_DISMISS);
    }
  };
  MDCSnackbarFoundation2.prototype.handleActionButtonClick = function(_evt) {
    this.close(REASON_ACTION);
  };
  MDCSnackbarFoundation2.prototype.handleActionIconClick = function(_evt) {
    this.close(REASON_DISMISS);
  };
  MDCSnackbarFoundation2.prototype.clearAutoDismissTimer = function() {
    clearTimeout(this.autoDismissTimer);
    this.autoDismissTimer = 0;
  };
  MDCSnackbarFoundation2.prototype.handleAnimationTimerEnd = function() {
    this.animationTimer = 0;
    this.adapter.removeClass(cssClasses.OPENING);
    this.adapter.removeClass(cssClasses.CLOSING);
  };
  MDCSnackbarFoundation2.prototype.runNextAnimationFrame = function(callback) {
    var _this = this;
    cancelAnimationFrame(this.animationFrame);
    this.animationFrame = requestAnimationFrame(function() {
      _this.animationFrame = 0;
      clearTimeout(_this.animationTimer);
      _this.animationTimer = setTimeout(callback, 0);
    });
  };
  return MDCSnackbarFoundation2;
}(MDCFoundation);
var MDCSnackbarFoundation$1 = MDCSnackbarFoundation;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const r$1 = (o2) => o2.strings === void 0;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e = (i2, t2) => {
  var s2, o2;
  const n2 = i2._$AN;
  if (n2 === void 0)
    return false;
  for (const i3 of n2)
    (o2 = (s2 = i3)._$AO) === null || o2 === void 0 || o2.call(s2, t2, false), e(i3, t2);
  return true;
}, o = (i2) => {
  let t2, s2;
  do {
    if ((t2 = i2._$AM) === void 0)
      break;
    s2 = t2._$AN, s2.delete(i2), i2 = t2;
  } while ((s2 == null ? void 0 : s2.size) === 0);
}, n = (i2) => {
  for (let t2; t2 = i2._$AM; i2 = t2) {
    let s2 = t2._$AN;
    if (s2 === void 0)
      t2._$AN = s2 = new Set();
    else if (s2.has(i2))
      break;
    s2.add(i2), l(t2);
  }
};
function r(i2) {
  this._$AN !== void 0 ? (o(this), this._$AM = i2, n(this)) : this._$AM = i2;
}
function h(i2, t2 = false, s2 = 0) {
  const n2 = this._$AH, r2 = this._$AN;
  if (r2 !== void 0 && r2.size !== 0)
    if (t2)
      if (Array.isArray(n2))
        for (let i3 = s2; i3 < n2.length; i3++)
          e(n2[i3], false), o(n2[i3]);
      else
        n2 != null && (e(n2, false), o(n2));
    else
      e(this, i2);
}
const l = (i2) => {
  var t$12, e2, o2, n2;
  i2.type == t.CHILD && ((t$12 = (o2 = i2)._$AP) !== null && t$12 !== void 0 || (o2._$AP = h), (e2 = (n2 = i2)._$AQ) !== null && e2 !== void 0 || (n2._$AQ = r));
};
class d extends i$1 {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(i2, t2, s2) {
    super._$AT(i2, t2, s2), n(this), this.isConnected = i2._$AU;
  }
  _$AO(i2, t2 = true) {
    var s2, n2;
    i2 !== this.isConnected && (this.isConnected = i2, i2 ? (s2 = this.reconnected) === null || s2 === void 0 || s2.call(this) : (n2 = this.disconnected) === null || n2 === void 0 || n2.call(this)), t2 && (e(this, i2), o(this));
  }
  setValue(t2) {
    if (r$1(this._$Ct))
      this._$Ct._$AI(t2, this);
    else {
      const i2 = [...this._$Ct._$AH];
      i2[this._$Ci] = t2, this._$Ct._$AI(i2, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const { ARIA_LIVE_DELAY_MS } = MDCSnackbarFoundation$1.numbers;
class AccessibleSnackbarLabel extends d {
  constructor(partInfo) {
    super(partInfo);
    this.labelEl = null;
    this.timerId = null;
    this.previousPart = null;
    if (partInfo.type !== t.CHILD) {
      throw new Error("AccessibleSnackbarLabel only supports child parts.");
    }
  }
  update(part, [labelText, isOpen]) {
    var _a2;
    if (!isOpen) {
      return;
    }
    if (this.labelEl === null) {
      const wrapperEl = document.createElement("div");
      const labelTemplate = p`<div class="mdc-snackbar__label" role="status" aria-live="polite"></div>`;
      w(labelTemplate, wrapperEl);
      const labelEl2 = wrapperEl.firstElementChild;
      labelEl2.textContent = labelText;
      (_a2 = part.endNode) === null || _a2 === void 0 ? void 0 : _a2.parentNode.insertBefore(labelEl2, part.endNode);
      this.labelEl = labelEl2;
      return labelEl2;
    }
    const labelEl = this.labelEl;
    labelEl.setAttribute("aria-live", "off");
    labelEl.textContent = "";
    const spaceSpan = document.createElement("span");
    spaceSpan.style.display = "inline-block";
    spaceSpan.style.width = "0";
    spaceSpan.style.height = "1px";
    spaceSpan.textContent = "\xA0";
    labelEl.appendChild(spaceSpan);
    labelEl.setAttribute("data-mdc-snackbar-label-text", labelText);
    if (this.timerId !== null) {
      clearTimeout(this.timerId);
    }
    this.timerId = window.setTimeout(() => {
      this.timerId = null;
      labelEl.setAttribute("aria-live", "polite");
      labelEl.removeAttribute("data-mdc-snackbar-label-text");
      labelEl.textContent = labelText;
      this.setValue(this.labelEl);
    }, ARIA_LIVE_DELAY_MS);
    return labelEl;
  }
  render(labelText, isOpen) {
    if (!isOpen) {
      return p``;
    }
    return p`
      <div class="mdc-snackbar__label" role="status" aria-live="polite">${labelText}</div>`;
  }
}
const accessibleSnackbarLabel = e$1(AccessibleSnackbarLabel);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const { OPENING_EVENT, OPENED_EVENT, CLOSING_EVENT, CLOSED_EVENT } = MDCSnackbarFoundation$1.strings;
class SnackbarBase extends BaseElement {
  constructor() {
    super(...arguments);
    this.mdcFoundationClass = MDCSnackbarFoundation$1;
    this.open = false;
    this.timeoutMs = 5e3;
    this.closeOnEscape = false;
    this.labelText = "";
    this.stacked = false;
    this.leading = false;
    this.reason = "";
  }
  render() {
    const classes = {
      "mdc-snackbar--stacked": this.stacked,
      "mdc-snackbar--leading": this.leading
    };
    return p`
      <div class="mdc-snackbar ${o$1(classes)}" @keydown="${this._handleKeydown}">
        <div class="mdc-snackbar__surface">
          ${accessibleSnackbarLabel(this.labelText, this.open)}
          <div class="mdc-snackbar__actions">
            <slot name="action" @click="${this._handleActionClick}"></slot>
            <slot name="dismiss" @click="${this._handleDismissClick}"></slot>
          </div>
        </div>
      </div>`;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), { announce: () => {
    }, notifyClosed: (reason) => {
      this.dispatchEvent(new CustomEvent(CLOSED_EVENT, { bubbles: true, cancelable: true, detail: { reason } }));
    }, notifyClosing: (reason) => {
      this.open = false;
      this.dispatchEvent(new CustomEvent(CLOSING_EVENT, { bubbles: true, cancelable: true, detail: { reason } }));
    }, notifyOpened: () => {
      this.dispatchEvent(new CustomEvent(OPENED_EVENT, { bubbles: true, cancelable: true }));
    }, notifyOpening: () => {
      this.open = true;
      this.dispatchEvent(new CustomEvent(OPENING_EVENT, { bubbles: true, cancelable: true }));
    } });
  }
  show() {
    this.open = true;
  }
  close(reason = "") {
    this.reason = reason;
    this.open = false;
  }
  firstUpdated() {
    super.firstUpdated();
    if (this.open) {
      this.mdcFoundation.open();
    }
  }
  _handleKeydown(e2) {
    this.mdcFoundation.handleKeyDown(e2);
  }
  _handleActionClick(e2) {
    this.mdcFoundation.handleActionButtonClick(e2);
  }
  _handleDismissClick(e2) {
    this.mdcFoundation.handleActionIconClick(e2);
  }
}
__decorate([
  i$2(".mdc-snackbar")
], SnackbarBase.prototype, "mdcRoot", void 0);
__decorate([
  i$2(".mdc-snackbar__label")
], SnackbarBase.prototype, "labelElement", void 0);
__decorate([
  e$4({ type: Boolean, reflect: true }),
  observer(function(value) {
    if (this.mdcFoundation) {
      if (value) {
        this.mdcFoundation.open();
      } else {
        this.mdcFoundation.close(this.reason);
        this.reason = "";
      }
    }
  })
], SnackbarBase.prototype, "open", void 0);
__decorate([
  observer(function(value) {
    this.mdcFoundation.setTimeoutMs(value);
  }),
  e$4({ type: Number })
], SnackbarBase.prototype, "timeoutMs", void 0);
__decorate([
  observer(function(value) {
    this.mdcFoundation.setCloseOnEscape(value);
  }),
  e$4({ type: Boolean })
], SnackbarBase.prototype, "closeOnEscape", void 0);
__decorate([
  e$4({ type: String })
], SnackbarBase.prototype, "labelText", void 0);
__decorate([
  e$4({ type: Boolean })
], SnackbarBase.prototype, "stacked", void 0);
__decorate([
  e$4({ type: Boolean })
], SnackbarBase.prototype, "leading", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles = r$4`.mdc-snackbar{z-index:8;margin:8px;display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar__surface{background-color:#333333}.mdc-snackbar__label{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mdc-snackbar__surface{min-width:100%}}.mdc-snackbar__surface{max-width:672px}.mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.mdc-snackbar__surface{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar--leading{justify-content:flex-start}.mdc-snackbar--stacked .mdc-snackbar__label{padding-left:16px;padding-right:8px;padding-bottom:12px}[dir=rtl] .mdc-snackbar--stacked .mdc-snackbar__label,.mdc-snackbar--stacked .mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar--stacked .mdc-snackbar__surface{flex-direction:column;align-items:flex-start}.mdc-snackbar--stacked .mdc-snackbar__actions{align-self:flex-end;margin-bottom:8px}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto;transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1);transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-snackbar__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action:not(:disabled){color:#bb86fc}.mdc-snackbar__action::before,.mdc-snackbar__action::after{background-color:#bb86fc;background-color:var(--mdc-ripple-color, #bb86fc)}.mdc-snackbar__action:hover::before,.mdc-snackbar__action.mdc-ripple-surface--hover::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-snackbar__action.mdc-ripple-upgraded--background-focused::before,.mdc-snackbar__action:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-snackbar__action:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-snackbar__action:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__dismiss .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss .mdc-icon-button__ripple::after{background-color:rgba(255, 255, 255, 0.87);background-color:var(--mdc-ripple-color, rgba(255, 255, 255, 0.87))}.mdc-snackbar__dismiss:hover .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{width:36px;height:36px;padding:6px;font-size:18px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:36px;height:36px;margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss .mdc-icon-button__touch{position:absolute;top:50%;height:36px;left:50%;width:36px;transform:translate(-50%, -50%)}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}slot[name=action]::slotted(mwc-button){--mdc-theme-primary: var( --mdc-snackbar-action-color, #bb86fc )}slot[name=dismiss]::slotted(mwc-icon-button){--mdc-icon-size: 18px;--mdc-icon-button-size: 36px;color:rgba(255, 255, 255, 0.87);margin-left:8px;margin-right:0}[dir=rtl] slot[name=dismiss]::slotted(mwc-icon-button),::slotted(mwc-icon-buttonslot[name=dismiss][dir=rtl]){margin-left:0;margin-right:8px}`;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Snackbar = class Snackbar2 extends SnackbarBase {
};
Snackbar.styles = [styles];
Snackbar = __decorate([
  n$1("mwc-snackbar")
], Snackbar);
class HomeAssistant extends s {
  static get styles() {
    return r$4`
            .link-home {
                padding: 30px;
                padding-top: 100px;
                text-align: center;
            }
            .menu-footer {
                text-align:center;
                display: block;
                padding-top: 20px;
            }
            .item-title:hover{color:#03a9f4;}
            .item-link:hover{color:#ff9800;}
        `;
  }
  constructor() {
    super();
    this.i18n = {
      title: chrome.i18n.getMessage("title"),
      description: chrome.i18n.getMessage("description"),
      link_ha: chrome.i18n.getMessage("link_ha"),
      error_tips: chrome.i18n.getMessage("error_tips"),
      add: chrome.i18n.getMessage("add"),
      cancel: chrome.i18n.getMessage("cancel"),
      delete: chrome.i18n.getMessage("delete")
    };
    try {
      const arr = JSON.parse(localStorage["list"]);
      this.list = Array.isArray(arr) ? arr : [];
    } catch {
      this.list = [];
    }
    this.url = "";
  }
  render() {
    let { logo, url, list } = this;
    if (list.length === 0) {
      return p`<div class="link-home">
                <img src="${logo}" />
                <h1>${this.i18n.link_ha}</h1>
                <mwc-button raised label="${this.i18n.add}" icon="add" @click="${this._addClick}"></mwc-button>
            </div>`;
    }
    if (!url) {
      url = list[list.length - 1].url;
    }
    return p`
    <iframe src="${url}" style="border:none;width:100%;height:100vh;"></iframe>    
    <div id="pos" style="position: fixed; bottom: 10px; right: 10px">
      <mwc-fab id="button" @mousedown="${this._mousedown}" @click="${this._openClick}" mini icon="menu" label="Open Menu"></mwc-fab>
      <mwc-menu id="menu">
        <mwc-list-item graphic="avatar" twoline noninteractive>
          <span>${this.i18n.title}</span>
          <span slot="secondary">${this.i18n.description}</span>
          <img
            src="${logo}"
            slot="graphic"
            style="border: 1px solid #ccc"
          />          
        </mwc-list-item>
        <li divider role="separator"></li>
        ${this.list.map((ele, index) => p`<mwc-list-item twoline hasMeta>
          <span class="item-title" title="${ele.title}" @click="${this._selectClick.bind(this, ele, index)}">${ele.title}</span>
          <a class="item-link" title="${ele.url}" href="${ele.url}" target="_blank" slot="secondary">${ele.url}</a>
          <mwc-icon slot="meta" title="${this.i18n.delete}" @click="${this._removeClick.bind(this, index)}">remove</mwc-icon>
        </mwc-list-item>`)}
            <li divider role="separator"></li>
            <mwc-list-item class="menu-footer">
                <mwc-button outlined label="${this.i18n.cancel}"></mwc-button>
                <mwc-button raised label="${this.i18n.add}"  @click="${this._addClick}"></mwc-button>
            </mwc-list-item>
      </mwc-menu>
    </div>`;
  }
  get _list() {
    return JSON.parse(JSON.stringify(this.list));
  }
  _mousedown() {
    document.onmouseup = () => {
      document.onmousemove = null;
    };
    document.onmousemove = (event) => {
      const pos = this.shadowRoot.querySelector("#pos");
      pos.style.left = `${event.clientX - 20}px`;
      pos.style.top = `${event.clientY - 20}px`;
    };
  }
  _openClick() {
    const menu = this.shadowRoot.querySelector("#menu");
    const button = this.shadowRoot.querySelector("#button");
    menu.anchor = button;
    menu.open = true;
  }
  _addClick() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: () => {
          const ha = document.body.querySelector("home-assistant");
          if (ha) {
            return {
              title: document.title,
              url: location.href
            };
          }
        }
      }).then((res) => {
        const { result } = res[0];
        if (result) {
          const list = this._list;
          if (!list.find((ele) => ele.url === result.url)) {
            this.url = result.url;
            list.push(result);
            this.list = list;
            this._save();
          }
        } else {
          this._showTips(this.i18n.error_tips);
        }
      }).catch(() => {
        this._showTips(this.i18n.error_tips);
      });
    });
  }
  _showTips(text) {
    const snackbar = document.createElement("mwc-snackbar");
    snackbar.labelText = text;
    document.body.appendChild(snackbar);
    snackbar.show();
    setTimeout(() => {
      snackbar.remove();
    }, 3e3);
  }
  _selectClick(data, index) {
    this.url = data.url;
    const list = this._list;
    list[index] = list[list.length - 1];
    list[list.length - 1] = Object.assign({}, data);
    this.list = list;
    this._save();
  }
  _removeClick(index) {
    const list = this._list;
    list.splice(index, 1);
    this.list = list;
    this._save();
  }
  _save() {
    localStorage["list"] = JSON.stringify(this.list);
  }
}
__publicField(HomeAssistant, "properties", {
  list: {},
  logo: {},
  url: {},
  i18n: {}
});
window.customElements.define("home-assistant", HomeAssistant);
export { HomeAssistant };
