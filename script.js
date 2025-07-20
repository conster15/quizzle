//<![CDATA[
/* js/external.js */
let get,
  post,
  doc,
  htm,
  bod,
  nav,
  M,
  I,
  mobile,
  beacon,
  S,
  Q,
  hC,
  aC,
  rC,
  tC,
  inArray,
  shuffle,
  isNum,
  isInt,
  rand; // for reuse on other loads
addEventListener("load", () => {
  get = (url, func, responseType = "json", context = null) => {
    const x = new XMLHttpRequest();
    const c = context || x;
    x.open("GET", url);
    x.responseType = responseType;
    x.onload = () => {
      if (func) func.call(c, x.response);
    };
    x.onerror = (e) => {
      if (func) func.call(c, { xhrErrorEvent: e });
    };
    x.send();
    return x;
  };
  post = (url, send, func, responseType = "json", context = null) => {
    const x = new XMLHttpRequest();
    if (typeof send === "object" && send && !(send instanceof Array)) {
      const c = context || x;
      x.open("POST", url);
      x.responseType = responseType;
      x.onload = () => {
        if (func) func.call(c, x.response);
      };
      x.onerror = (e) => {
        if (func) func.call(c, { xhrErrorEvent: e });
      };
      let d;
      if (send instanceof FormData) {
        d = send;
      } else {
        let s;
        d = new FormData();
        for (let k in send) {
          s = send[k];
          if (typeof s === "object" && s) s = JSON.stringify(s);
          d.append(k, s);
        }
      }
      x.send(d);
    } else {
      throw new Error("send argument must be an Object");
    }
    return x;
  };
  doc = document;
  htm = doc.documentElement;
  bod = doc.body;
  nav = navigator;
  M = (tag) => doc.createElement(tag);
  I = (id) => doc.getElementById(id);
  mobile = nav.userAgent.match(/Mobi/i) ? true : false;
  beacon = (url, send) => {
    let r = false;
    if (typeof send === "object" && send && !(send instanceof Array)) {
      let d;
      if (send instanceof FormData) {
        d = send;
      } else {
        let s;
        d = new FormData();
        for (let k in send) {
          s = send[k];
          if (typeof s === "object" && s) s = JSON.stringify(s);
          d.append(k, s);
        }
      }
      r = nav.sendBeacon(url, d);
    } else {
      throw new Error("send argument must be an Object");
    }
    return r;
  };
  S = (selector, within) => {
    var w = within || doc;
    return w.querySelector(selector);
  };
  Q = (selector, within) => {
    var w = within || doc;
    return w.querySelectorAll(selector);
  };
  hC = (node, className) => {
    return node.classList.contains(className);
  };
  aC = function () {
    const a = [...arguments];
    a.shift().classList.add(...a);
    return aC;
  };
  rC = function () {
    const a = [...arguments];
    a.shift().classList.remove(...a);
    return rC;
  };
  tC = function () {
    const a = [...arguments];
    a.shift().classList.toggle(...a);
    return tC;
  };
  inArray = (mixed, array) => {
    if (array.indexOf(mixed) === -1) {
      return false;
    }
    return true;
  };
  shuffle = (array) => {
    let a = array.slice(),
      i = a.length,
      n,
      h;
    while (i) {
      n = Math.floor(Math.random() * i--);
      h = a[i];
      a[i] = a[n];
      a[n] = h;
    }
    return a;
  };
  isNum = (mixed) => typeof mixed === "number" && !isNaN(mixed);
  isInt = (mixed) => Number.isInteger(mixed);
  rand = (min, max) => {
    let mn = min,
      mx = max;
    if (mx === undefined) {
      mx = mn;
      mn = 0;
    }
    return mn + Math.floor(Math.random() * (mx - mn + 1));
  };
  // magic under here - can put on load on another page except end load
  const test = I("test"),
    one = I("one"),
    two = I("two");
  const presto = () => {
    tC(one, "out");
    tC(two, "out");
  };
  if (mobile) {
    test.ontouchstart = test.ontouchend = presto;
  } else {
    test.onmouseenter = test.onmouseleave = presto;
  }
}); // end load
//]]>
