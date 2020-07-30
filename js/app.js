 var particles=true;
    function startgameee(){
      particles=false;
    }
    if (particles===true){
    (function() {
  var COLORS, Confetti, NUM_CONFETTI, PI_2, canvas, confetti, context, drawCircle, i, range, resizeWindow, xpos;

  NUM_CONFETTI = 400;

  COLORS = [[148, 235, 255], [0, 207, 255], [0, 120, 148], [0, 4, 255], [189, 198, 255]];

  PI_2 = 2 * Math.PI;

  canvas = document.getElementById("gameCanvas");

  context = canvas.getContext("2d");

  window.w = 0;

  window.h = 0;

  resizeWindow = function() {
    window.w = canvas.width = window.innerWidth;
    return window.h = canvas.height = window.innerHeight;
  };

  window.addEventListener('resize', resizeWindow, false);

  window.onload = function() {
    return setTimeout(resizeWindow, 0);
  };

  range = function(a, b) {
    return (b - a) * Math.random() + a;
  };

  drawCircle = function(x, y, r, style) {
    context.beginPath();
    context.arc(x, y, r, 0, PI_2, false);
    if (particles===true){
    context.shadowBlur = 10;
context.shadowColor = style;
    } else {
       context.shadowBlur = 0;
context.shadowColor = "";
    }
    context.fillStyle = style;
    return context.fill();
  };

  xpos = 0.5;

  document.onmousemove = function(e) {
    return xpos = e.pageX / w;
  };

  window.requestAnimationFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
      return window.setTimeout(callback, 1000 / 60);
    };
  })();

  Confetti = (function() {
    function Confetti() {
      this.style = COLORS[~~range(0, 5)];
      this.rgb = "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2];
      this.r = ~~range(2, 6);
      this.r2 = 2 * this.r;
      this.replace();
    }

    Confetti.prototype.replace = function() {
      this.opacity = 0;
      this.dop = 0.03 * range(1, 4);
      this.x = range(-this.r2, w - this.r2);
      this.y = range(-20, h - this.r2);
      this.xmax = w - this.r;
      this.ymax = h - this.r;
      this.vx = range(0, 2) + 8 * xpos - 5;
      return this.vy = 0.7 * this.r + range(-1, 1);
    };

    Confetti.prototype.draw = function() {
      var _ref;
      this.x += this.vx;
      this.y += this.vy;
      this.opacity += this.dop;
      if (this.opacity > 1) {
        this.opacity = 1;
        this.dop *= -1;
      }
      if (this.opacity < 0 || this.y > this.ymax) {
        this.replace();
      }
      if (!((0 < (_ref = this.x) && _ref < this.xmax))) {
        this.x = (this.x + this.xmax) % this.xmax;
      }
      return drawCircle(~~this.x, ~~this.y, this.r, this.rgb + "," + this.opacity + ")");
    };

    return Confetti;

  })();

  confetti = (function() {
    var _i, _results;
    _results = [];
    for (i = _i = 1; 1 <= NUM_CONFETTI ? _i <= NUM_CONFETTI : _i >= NUM_CONFETTI; i = 1 <= NUM_CONFETTI ? ++_i : --_i) {
      _results.push(new Confetti);
    }
    return _results;
  })();

  window.step = function() {
    var c, _i, _len, _results;
    requestAnimationFrame(step);
    context.clearRect(0, 0, w, h);
    _results = [];
    for (_i = 0, _len = confetti.length; _i < _len; _i++) {
      c = confetti[_i];
      _results.push(c.draw());
    }
    return _results;
  };

  step();

}).call(this);
    }
var arenacloser=false
var u1 = "#fd2000";
var u2 = "#fc4000";
var u3 = "#fa6000";
var u4 = "#f97f00";
var u5 = "#f79f00";
var u6 = "#f5bf00";
var u7 = "#f4df00";
var gs = Math.round(Math.random() * 4);
if (gs === 1) {
  u1 = "#0020e5";
  u2 = "#0040cb";
  u3 = "#0060b1";
  u4 = "#007f97";
  u5 = "#009f7d";
  u6 = "#00bf63";
  u7 = "#00df49";
}
if (gs === 2) {
  u1 = "#df201a";
  u2 = "#bf4033";
  u3 = "#9f604d";
  u4 = "#807f66";
  u5 = "#609f80";
  u6 = "#40bf99";
  u7 = "#20dfb3";
}

if (gs === 3) {
  u1 = "#d0ff1b";
  u2 = "#b3ff35";
  u3 = "#95ff50";
  u4 = "#77ff6b";
  u5 = "#59ff85";
  u6 = "#3cffa0";
  u7 = "#1effba";
}
//["#040ddf","#081bbf","#0b289f","#0f3580","#134260","#175040","#1a5d20"]
if (gs === 4) {
  u1 = "#525252";
  u2 = "#626262";
  u3 = "#727272";
  u4 = "#999999";
  u5 = "#b5b5b5";
  u6 = "#d9d9d9";
  u7 = "#ffffff";
}
!(function(e) {
  var t = {};
  function a(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, a), (i.l = !0), i.exports;
  }
  (a.m = e),
    (a.c = t),
    (a.d = function(e, t, r) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (a.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.t = function(e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (a.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          a.d(
            r,
            i,
            function(t) {
              return e[t];
            }.bind(null, i)
          );
      return r;
    }),
    (a.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return a.d(t, "a", t), t;
    }),
    (a.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.p = ""),
    a((a.s = 2));
})([
  function(e, t, a) {
    "use strict";
    const r = e => `arras-n-${e}.glitch.me`,
      i = (e, t = 5e3) => `${e}.d.nsrv.cloud:${t}`;
    new Date().getDate();
    const n = {
      help: {
        KEY_OVER_RIDE: "R",
        KEY_LEVEL_UP: "N",
        KEY_ABILITY: "F",
        KEY_CHOOSE_1: "Y",
        KEY_CHOOSE_2: "U",
        KEY_CHOOSE_3: "I",
        KEY_CHOOSE_4: "H",
        KEY_CHOOSE_5: "J",
        KEY_CHOOSE_6: "K",
        KEY_FUCK_YOU: "`"
      },
      KEY_AUTO_FIRE: 69,
      KEY_AUTO_SPIN: 67,
      KEY_OVER_RIDE: 82,
      KEY_RAINBOW: 88,
      KEY_LEVEL_UP: 78,
    //  KEY_ABILITY: 70,
     // KEY_REVERSE_TANK: 86,
    //  KEY_REVERSE_MOUSE: 66,
      KEY_SCREENSHOT: 81,
      KEY_UPGRADE_MAX: 77,
      KEY_CLASS_TREE: 84,
      KEY_RECORD: 90,
      KEY_UP: 87,
      KEY_PING: 76,
      KEY_LEFT: 65,
      KEY_DOWN: 83,
      KEY_RIGHT: 68,
  /*    KEY_CHOOSE_1: 89,
      KEY_CHOOSE_2: 85,
      KEY_CHOOSE_3: 73,
      KEY_CHOOSE_4: 72,
      KEY_CHOOSE_5: 74,
      KEY_CHOOSE_6: 75,
      KEY_CHOOSE_7: -1,
      KEY_CHOOSE_8: -1,
      KEY_CHOOSE_9: -1,*/
      KEY_ENTER: 13,
      KEY_SPAWN: 13,
      KEY_LEFT_ARROW: 37,
      KEY_UP_ARROW: 38,
      KEY_RIGHT_ARROW: 39,
      KEY_DOWN_ARROW: 40,
      KEY_UPGRADE_ATK: 49,
      KEY_UPGRADE_HTL: 50,
      KEY_UPGRADE_SPD: 51,
      KEY_UPGRADE_STR: 52,
      KEY_UPGRADE_PEN: 53,
      KEY_UPGRADE_DAM: 54,
      KEY_UPGRADE_RLD: 55,
      KEY_UPGRADE_MOB: 56,
      KEY_UPGRADE_RGN: 57,
      KEY_UPGRADE_SHI: 48,
      KEY_MOUSE_0: 32,
      KEY_MOUSE_1: 9,
      KEY_MOUSE_2: 16,
      KEY_FUCK_YOU: 192,
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      gameWidth: 0,
      gameHeight: 0,
      gameStart: !1,
      disconnected: !1,
      died: !1,
      showDebug: !1,
      showTree: !1,
      server: null,
      
    // =======================
    // Chat System.
    // =======================
    isChatMode: false,    
    // =======================
      codeTable: [
        {
          z: "Private",
          local: "Local",
          glitch: "Glitch",
          vultr: "Vultr",
          heroku: "Heroku",
          buyvm: "BuyVM",
          extravm: "ExtraVM",
          ovh: "OVH",
          place:"PlaceHolder",
          lol:"Localhost"
        },
        {
          unknown: ["Unknown", null],
          local: ["Local", null],
          oregon: ["US West", -7],
          sv: ["US West", -7],
          la: ["US West", -7],
          dallas: ["US East", -5],
          virginia: ["US East", -4],
          montreal: ["US East", -4],
          london: ["Europe", 1],
          frankfurt: ["Europe", 2],
          germany: ["Europe", 2],
          singapore: ["Asia", 8]
        },
        [
          [{ id: "p", to: "Private" }],
          [{ id: "e", dynamic: "word" }],
          [{ id: "w", dynamic: "words" }],
          [{ id: "o", to: "Open" }],
          [{ id: "m", to: "Maze", delay: !0, remove: "f" }],
          [
            { id: "f", to: "FFA" },
            { id: "b", to: "Developer Server" },
            { id: "2", to: "2 Team", end: "2TDM" },
            { id: "3", to: "3 Team", end: "3TDM" },
            { id: "4", to: "4 Team", end: "4TDM" }
          ],
          [
            { id: "d", to: "Domination" },
            { id: "m", to: "Mothership", remove: "2" },
            { id: "a", to: "Assault", remove: "2" }
          ]
        ]
      ],
      timezone: new Date().getTimezoneOffset() / -60,
      servers: [
        {
          id: "z",
          type: "0unk",
          code: "z-unknown-pe6server",
          at: "private",
          secure: 1,
          untrusted: !0
        },
        {
          visible: 0,
          id: "a",
          type: "0unk",
          code: "glitch-dallas-f",
          at: "maxtri.glitch.me",
          secure: 1
        },
        {
          visible: 0,
          id: "dev",
          type: "dev",
          code: "glitch-dallas-b",
          at: "maxtri-b.glitch.me",
          secure: 1,
          prefer: !0
        },
        {
          visible: 2,
          id: "lol",
          type: "lol",
          code: "lol-dallas-b",
          at: "localhost:8080",
          secure: !0,
          prefer: !0
        }
        
      ]
        .map((e, t) => ({ data: e, i: t }))
        .sort((e, t) =>
          e.data.type < t.data.type
            ? -1
            : e.data.type > t.data.type
            ? 1
            : e.i - t.i
        )
        .map(({ data: e }) => e),
      partyLink: 0,
      report: null,
      mobile:
        "ontouchstart" in document.body &&
        /android|mobi/i.test(navigator.userAgent),
      showInvisible: !1
    };
    (window.Arras = e =>
      -100496167 ^ e ^ 4194470368
        ? Math.floor(4294967296 * Math.random())
        : ((n.report = n.report || e),
          setTimeout(
            () => n.showInvisible && (n.report = "showInvisible"),
            1e3
          ),
          n)),
      (e.exports = n);
  },
  function(e, t) {
    const a = class {
      static now() {
        return Math.min(Math.floor(Date.now() / 2e3) - 757382400, 268435455);
      }
      constructor() {
        this.reset(),
          setInterval(() => {
            this.logOnLine(!!navigator.onLine);
          }, 2e3);
      }
      reset() {
        (this.startTime = a.now()),
          (this.event = { die: 0, disconnect: 0 }),
          (this.mouse = { status: !0, updates: [0, 0, 0, 0, 0, 0, 0] }),
          (this.onLine = { status: !!navigator.onLine, updates: [0, 0, 0, 0] }),
          (this.closeCall = !1),
          (this.consoleOpened = !1);
        let e = new Image();
        Object.defineProperty(e, "id", {
          get: () => ((this.consoleOpened = !0), "")
        });
        let t = function() {};
        (t.toString = () => ((this.consoleOpened = !0), "color:rgba(0,0,0,0)")),
          setTimeout(console.log.bind(null, "%c%s", t, e));
      }
      time() {
        return Math.min(a.now() - this.startTime, 65535);
      }
      logEvent(e) {
        this.event[e] = this.time();
      }
      logMouse(e) {
        this.mouse.status !== e &&
          ((this.mouse.status = e),
          this.mouse.updates.shift(),
          this.mouse.updates.push(this.time()));
      }
      logOnLine(e) {
        this.onLine.status !== e &&
          ((this.onLine.status = e),
          this.onLine.updates.shift(),
          this.onLine.updates.push(this.time()));
      }
      logCloseCall() {
        this.closeCall = !0;
      }
      toBits() {
        let e = [
            this.mouse.status,
            this.onLine.status,
            this.closeCall,
            this.consoleOpened
          ],
          t = this.startTime;
        for (let a = 0; a < 28; a++) e.push(!!(1 & t)), (t >>= 1);
        for (let t of [
          this.event.die,
          this.event.disconnect,
          ...this.mouse.updates,
          ...this.onLine.updates,
          this.time()
        ])
          for (let a = 0; a < 16; a++) e.push(!!(1 & t)), (t >>= 1);
        return e;
      }
      drawCanvas(e) {
        let { width: t, height: a } = e.canvas,
          r = e.getImageData(0, 0, t, a),
          { data: i } = r,
          n = this.toBits(),
          l = [];
        for (let e = 0; e < 16; e++) {
          let t = !1;
          for (let a = 0; a < 16; a++) n[e + 16 * a] && (t = !t);
          l.push(t);
        }
        let o = [];
        for (let e = 0; e < 16; e++) {
          let t = !1;
          for (let a = 0; a < 16; a++) n[a + 16 * e] && (t = !t);
          o.push(t);
        }
        let s = !0;
        for (let e = 0; e < 256; e++) n[e] && (s = !s);
        let d = -Math.floor(2 * Math.random() * 4);
        Math.floor(2 * Math.random() * 4);
        for (let e = d; e < t; e += 4)
          for (let a = d; a < t; a += 4) {
            let r = Math.floor(e / 4) % 32,
              d = Math.floor(a / 4) % 32;
            r > 17 ||
              d > 17 ||
              (r + d === 33 ||
              (16 !== r &&
                16 !== d &&
                !(17 === r
                  ? 17 === d
                    ? s
                    : o[d]
                  : 17 === d
                  ? l[r]
                  : n[r + 16 * d]))
                ? ((i[((e + a * t) << 2) | 0] &= -2),
                  (i[((e + a * t) << 2) | 1] &= -2),
                  (i[((e + a * t) << 2) | 2] |= 1),
                  (i[((e + 1 + a * t) << 2) | 0] &= -2),
                  (i[((e + 1 + a * t) << 2) | 1] &= -2),
                  (i[((e + 1 + a * t) << 2) | 2] |= 1),
                  (i[((e + a * t + t) << 2) | 0] &= -2),
                  (i[((e + a * t + t) << 2) | 1] &= -2),
                  (i[((e + a * t + t) << 2) | 2] |= 1),
                  (i[((e + 1 + a * t + t) << 2) | 0] &= -2),
                  (i[((e + 1 + a * t + t) << 2) | 1] &= -2),
                  (i[((e + 1 + a * t + t) << 2) | 2] |= 1))
                : ((i[((e + a * t) << 2) | 0] |= 1),
                  (i[((e + a * t) << 2) | 1] |= 1),
                  (i[((e + a * t) << 2) | 2] &= -2),
                  (i[((e + 1 + a * t) << 2) | 0] |= 1),
                  (i[((e + 1 + a * t) << 2) | 1] |= 1),
                  (i[((e + 1 + a * t) << 2) | 2] &= -2),
                  (i[((e + a * t + t) << 2) | 0] |= 1),
                  (i[((e + a * t + t) << 2) | 1] |= 1),
                  (i[((e + a * t + t) << 2) | 2] &= -2),
                  (i[((e + 1 + a * t + t) << 2) | 0] |= 1),
                  (i[((e + 1 + a * t + t) << 2) | 1] |= 1),
                  (i[((e + 1 + a * t + t) << 2) | 2] &= -2)));
          }
        e.putImageData(r, 0, 0);
      }
    };
    let r = new a();
    (r.Tracker = a), (e.exports = r);
  },
  function(e, t, a) {
    "use strict";
    Object.values ||
      (Object.values = function(e) {
        return Object.keys(e).map(t => e[t]);
      }),
      Object.entries ||
        (Object.entries = function(e) {
          return Object.keys(e).map(t => [t, e[t]]);
        }),
      (() => {
        if (
          (navigator.serviceWorker &&
            navigator.serviceWorker.getRegistrations().then(e => {
              for (let t of e) t.unregister();
            }),
          window !== window.top ||
            "www.arras.io" === window.location.hostname ||
            (".arras.io" !== window.location.hostname.slice(-9) &&
              -1 ===
                ["localhost", "arras.io", "arras.netlify.app"].indexOf(
                  window.location.hostname
                )))
        );
      
           
        else if ("http:" === location.protocol) {
          let e = `https://${location.host}/${
              "#" === location.hash ? "" : location.hash
            }`,
            t = !1,
            a = setTimeout(() => {
              location.href = e;
            }, 3e3),
            r = document.getElementById("menuTabs");
          r.style.textAlign = "center";
          let i = document.createElement("span");
          i.classList.add("menuTab"),
            i.classList.add("warning"),
            i.appendChild(
              document.createTextNode("You are being redirected to ")
            );
          let n = document.createElement("a");
          (n.href = e),
            n.appendChild(document.createTextNode(e)),
            i.appendChild(n),
            i.appendChild(document.createTextNode(".   "));
          let l = document.createElement("a");
          (l.style.textDecoration = "underline"),
            (l.href = "javascript:;"),
            l.appendChild(document.createTextNode("Cancel")),
            l.addEventListener("click", () => {
              i.remove(), (t = !0), clearTimeout(a);
            }),
            i.appendChild(l),
            r.appendChild(i),
            document
              .getElementById("startButton")
              .addEventListener("click", () => {
                t ||
                  (location.href = `https://${location.host}/${
                    "#" === location.hash ? "" : location.hash
                  }`);
              });
        }
      })();
    let r = a(0),
      i = a(3),
      { blockAdBlock: n } = a(4),
      l = a(1);
    function o() {
      window.dataLayer.push(arguments);
    }
    (window.dataLayer = window.dataLayer || []),
      o("js", new Date()),
      o("config", "UA-120544149-1");
    let s = e =>
        fetch("https://analytics-server.arras.cx:2002/data", {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(e)
        }),
      d = (window.adServiceMode =
        (window.localStorage && window.localStorage.adForce) ||
        ["adsense", "nitropay"][Math.floor(10 * Math.random())] ||
        "adinplay");
    switch (d) {
      default:
       
    }
    let c = [];
    innerWidth >= 1440 && innerHeight >= 680 && c.push([970, 250]),
      innerWidth >= 1440 && c.push([970, 90]),
      innerHeight >= 700 && c.push([336, 280]),
      innerHeight >= 680 && c.push([300, 250]),
      c.push([728, 90]);
    let h = Date.now(),
      u = 0,
      p = !1,
      g = null;
    n.onEither(e => {
      if (e) {
        (document.getElementById("referral-fallback").style.display = "block"),
          (p = !0);
      }
      o("event", e ? "yes_adblock" : "no_adblock", {
        event_category: "adblock_detection",
        non_interaction: !0
      }),
        s({
          type: "initial",
          user: {
            adServiceMode: d,
            adblock: p,
            mobile: r.mobile,
            window: { innerWidth: innerWidth, innerHeight: innerHeight },
            tracking: {
      name: U.playerNameInput || "",
        colors: U.optColors || "normal",
        borders: U.optBorders || "normal"
            }
          }
        });
    });
    var m = {
      graphical: {
        screenshotMode: !1,
        borderChunk: 6,
        barChunk: 5,
        mininumBorderChunk: 3,
        compensationScale: 1.114,
        inversedRender: !0,
        renderGrid: !0,
        darkBorders: !1,
        fancyAnimations: !0,
        colors: "normal",
        pointy: !0,
        fontSizeBoost: 1,
        shieldbars: !1,
        neon: !1
      },
      gui: { expectedMaxSkillLevel: 9 },
      lag: { memory: 60, newPrediction: !1 }
    };
    r.config = m;
    let f = (e, t, a = 0.5) => {
      if (0 === a) return e;
      if (1 === a) return t;
      let r = 1 - a,
        i = parseInt(e.slice(1), 16),
        n = parseInt(t.slice(1), 16);
      return (
        "#" +
        (
          (((16711680 & i) * r + (16711680 & n) * a) & 16711680) |
          (((65280 & i) * r + (65280 & n) * a) & 65280) |
          (((255 & i) * r + (255 & n) * a) & 255)
        )
          .toString(16)
          .padStart(6, "0")
      );
    };
    function y(e) {
      switch (e) {
        case 0:
          return ge.teal;
        case 1:
          return ge.lgreen;
        case 2:
          return ge.orange;
        case 3:
          return ge.yellow;
        case 4:
          return ge.lavender;
        case 5:
          return ge.pink;
        case 6:
          return ge.vlgrey;
        case 7:
          return ge.lgrey;
        case 8:
          return ge.guiwhite;
        case 9:
          return ge.black;
        case 10:
          return ge.blue;
        case 11:
          return ge.green;
        case 12:
          return ge.red;
        case 13:
          return ge.gold;
        case 14:
          return ge.purple;
        case 15:
          return ge.magenta;
        case 16:
          return ge.grey;
        case 17:
          return ge.dgrey;
        case 18:
          return ge.white;
        case 19:
          return ge.guiblack;
        case 20:
          return Date.now() % 300 < 150 ? ge.blue : ge.red;
        case 21:
          return Date.now() % 300 < 150 ? ge.blue : ge.grey;
        case 22:
          return Date.now() % 300 < 150 ? ge.grey : ge.blue;
        case 23:
          return Date.now() % 300 < 150 ? ge.red : ge.grey;
        case 24:
          return Date.now() % 300 < 150 ? ge.grey : ge.red;
        case 30:
          return "#a913cf";
        case 31:
          return "#226ef6";
        case 32:
          return "#ff1000";
        case 33:
          return "#ff9000";
        case 34:
          return "#00e00b";
        case 35:
          return "#ffd300";
        case 36:
          return f(
            ["#ff1000", "#ff9000", "#ffd300", "#00e00b", "#226ef6", "#a913cf"][
              Math.floor((Date.now() / 200) % 6)
            ],
            ["#ff9000", "#ffd300", "#00e00b", "#226ef6", "#a913cf", "#ff1000"][
              Math.floor((Date.now() / 200) % 6)
            ],
            (Date.now() / 200) % 1
          );
           case 37:
            return u1;
          case 38:
            return u2;
          case 39:
            return u3;
          case 40:
            return u4;
          case 41:
            return u5;
          case 42:
            return u6;
          case 43:
            return u7;
          case 44:
            return u2;
          case 45:
            return u3;
          case 46:
            return u4;
          case 47:
            return u5;

          case 48:
            return u6;
          case 49:
            return u7;
          case 50:
            return u7;
          case 51:
            return u3;
          case 52:
            return u4;
          case 53:
            return u5;
          case 54:
            return u6;
          case 55:
            return u7;
          case 56:
            return u7;
        case 57:
          return u7;
          case 58:
          return u4;
          case 59:
          return u5;
          case 60:
          return u6;
          case 61:
          return u7;
          case 62:
          return u7;
          case 63:
          return u7;
          case 64:
          return u7;
          
        default:
          return "#ff0000";
      }
    }
    function b(e) {
      let t = m.graphical.neon ? ge.white : ge.black;
      return m.graphical.darkBorders ? t : f(e, t, ge.border);
    }
    function v(e) {
      switch (e) {
        case "bas1":
        case "bap1":
        case "dom1":
        case "dbc1":
        case "mbc1":
        case "spw1":
          return ge.blue;
        case "bas2":
        case "bap2":
        case "dom2":
        case "dbc2":
        case "mbc2":
        case "spw2":
          return ge.green;
        case "bas3":
        case "bap3":
        case "dom3":
        case "dbc3":
        case "mbc3":
        case "spw3":
          return ge.red;
        case "bas4":
        case "bap4":
        case "dom4":
        case "dbc4":
        case "mbc4":
        case "spw4":
          return ge.pink;
        case "domx":
        case "dom0":
        case "dbc0":
        case "mbc0":
        case "spw0":
          return ge.yellow;
        case "port":
          return (ae.globalAlpha = 1), ge.black;
        case "edge":
          return f(ge.white, ge.guiblack, 1 / 3);
        case "dor1":

          return ge.vlgrey;
        case "nest":
          return ge.lavender;
        default:
          return ge.white;
      }
    }
    function w(e, t) {
      m.graphical.neon
        ? ((e.fillStyle = b(t)), (e.strokeStyle = t))
        : ((e.fillStyle = t), (e.strokeStyle = b(t)));
    }
    var k = [];
    function E(e, t = k[e].color) {
      let a = k[e];
      return {
        time: 0,
        index: e,
        x: a.x,
        y: a.y,
        vx: 0,
        vy: 0,
        size: a.size,
        realSize: a.realSize,
        color: t,
        render: {
          status: {
            getFade: () => 1,
            getColor: () => "#FFFFFF",
            getBlend: () => 0,
            health: { get: () => 1 },
            shield: { get: () => 1 }
          }
        },
        facing: a.facing,
        shape: a.shape,
        name: a.name,
        score: 0,
        tiggle: 0,
        layer: a.layer,
        guns: {
          length: a.guns.length,
          getPositions: () => Array(a.guns.length).fill(0),
          update: () => {}
        },
        turrets: a.turrets.map(e => {
          let t = E(e.index);
          return (
            (t.realSize = (t.realSize / t.size) * a.size * e.sizeFactor),
            (t.size = a.size * e.sizeFactor),
            (t.angle = e.angle),
            (t.offset = e.offset),
            (t.direction = e.direction),
            (t.facing = e.direction + e.angle),
            t
          );
        })
      };
    }
    (r.clickables = (() => {
      const e = class {
          constructor() {
            (this.x = 0),
              (this.y = 0),
              (this.w = 0),
              (this.h = 0),
              (this.active = !1);
          }
          set(e, t, a, r) {
            (this.x = e),
              (this.y = t),
              (this.w = a),
              (this.h = r),
              (this.active = !0);
          }
          check(e) {
            let t = Math.round(e.x - this.x),
              a = Math.round(e.y - this.y);
            return (
              this.active && t >= 0 && a >= 0 && t <= this.w && a <= this.h
            );
          }
          hide() {
            this.active = !1;
          }
        },
        t = class {
          constructor(t) {
            this.data = [];
            for (let a = 0; a < t; a++) this.data.push(new e());
          }
          place(t, ...a) {
            for (; t >= this.data.length; ) this.data.push(new e());
            this.data[t].set(...a);
          }
          hide() {
            for (let e of this.data) e.hide();
          }
          check(e) {
            return this.data.findIndex(t => t.check(e));
          }
        };
      return {
        stat: new t(10),
        upgrade: new t(9),
        hover: new t(1),
        skipUpgrades: new t(1)
      };
    })()),
      (r.statHover = !1);
    const x = class {
        constructor(e) {
          (this.dataLength = e), (this.elements = {});
        }
        update(e, t = 0) {
          let a = e[t++];
          for (let r = 0; r < a; r++) delete this.elements[e[t++]];
          let r = e[t++];
          for (let a = 0; a < r; a++) {
            let a = e[t++],
              r = e.slice(t, t + this.dataLength);
            (t += this.dataLength), (this.elements[a] = r);
          }
          return t;
        }
        entries() {
          return Object.entries(this.elements).map(([e, t]) => ({
            id: +e,
            data: t
          }));
        }
      },
      _ = class {
        constructor(e) {
          (this.score = ie(0, 10)), this.update(e);
        }
        update(e) {
          (this.name = e.name),
            (this.bar = e.bar),
            (this.color = e.color),
            (this.index = e.index),
            this.score.set(e.score),
            (this.old = !1);
        }
        publish() {
          let e = k[this.index];
          return {
            image: E(this.index, this.color),
            position: e.position,
            barColor: y(this.bar),
            label: this.name,
            score: this.score.get()
          };
        }
      };
    var S = [],
      F = new x(5),
      C = new x(3),
      M = new x(5),
      A = new (class {
        constructor(e = 250) {
          (this.speed = e), (this.map = {}), (this.lastUpdate = Date.now());
        }
        update(e) {
          this.lastUpdate = Date.now();
          for (let [e, t] of Object.entries(this.map))
            t.now ? ((t.old = t.now), (t.now = null)) : delete this.map[e];
          for (let t of e)
            this.map[t.id]
              ? (this.map[t.id].now = t)
              : (this.map[t.id] = { old: null, now: t });
        }
        get() {
          let e = Math.min(1, (Date.now() - this.lastUpdate) / this.speed),
            t = 1 - e;
          return Object.values(this.map).map(({ old: a, now: r }) =>
            r
              ? a
                ? {
                    type: r.type,
                    id: r.id,
                    x: e * r.x + t * a.x,
                    y: e * r.y + t * a.y,
                    color: r.color,
                    size: e * r.size + t * a.size,
                    alpha: 1
                  }
                : {
                    type: r.type,
                    id: r.id,
                    x: r.x,
                    y: r.y,
                    color: r.color,
                    size: r.size,
                    alpha: e
                  }
              : {
                  type: a.type,
                  id: a.id,
                  x: a.x,
                  y: a.y,
                  color: a.color,
                  size: a.size,
                  alpha: t
                }
          );
        }
      })(200),
      B = new (class {
        constructor() {
          this.entries = {};
        }
        get() {
          let e = [],
            t = 1;
          for (let a of Object.values(this.entries)) {
            let r = a.publish();
            e.push(r), r.score > t && (t = r.score);
          }
          return e.sort((e, t) => t.score - e.score), { data: e, max: t };
        }
        update(e) {
          e.sort((e, t) => t.score - e.score);
          for (let e of Object.values(this.entries)) e.old = !0;
          for (let t of e)
            this.entries[t.id]
              ? this.entries[t.id].update(t)
              : (this.entries[t.id] = new _(t));
          for (let [e, t] of Object.entries(this.entries))
            t.old && delete this.entries[e];
        }
      })(),
      D = 0,
      T = (r.messages = []),
      O = (r.metrics = {
        latency: [],
        lag: 0,
        rendertime: 0,
        updatetime: 0,
        lastlag: 0,
        rendergap: 0,
        lastuplink: 0
      }),
      K = 0,
      L = 0,
      R = 0,
      H = [["norm"]],
      W = {
        getStatNames: e => {
          switch (e) {
            case 1:
              return [
                "Body Damage",
                "Max Health",
                "Bullet Speed",
                "Bullet Health",
                "Bullet Penetration",
                "Bullet Damage",
                "Engine Acceleration",
                "Movement Speed",
                "Shield Regeneration",
                "Shield Capacity"
              ];
            case 2:
              return [
                "Body Damage",
                "Max Health",
                "Drone Speed",
                "Drone Health",
                "Drone Penetration",
                "Drone Damage",
                "Respawn Rate",
                "Movement Speed",
                "Shield Regeneration",
                "Shield Capacity"
              ];
            case 3:
              return [
                "Body Damage",
                "Max Health",
                "Drone Speed",
                "Drone Health",
                "Drone Penetration",
                "Drone Damage",
                "Max Drone Count",
                "Movement Speed",
                "Shield Regeneration",
                "Shield Capacity"
              ];
            case 4:
              return [
                "Body Damage",
                "Max Health",
                "Swarm Speed",
                "Swarm Health",
                "Swarm Penetration",
                "Swarm Damage",
                "Reload",
                "Movement Speed",
                "Shield Regeneration",
                "Shield Capacity"
              ];
            case 5:
              return [
                "Body Damage",
                "Max Health",
                "Placement Speed",
                "Trap Health",
                "Trap Penetration",
                "Trap Damage",
                "Reload",
                "Movement Speed",
                "Shield Regeneration",
                "Shield Capacity"
              ];
            case 6:
              return [
                "Body Damage",
                "Max Health",
                "Weapon Speed",
                "Weapon Health",
                "Weapon Penetration",
                "Weapon Damage",
                "Reload",
                "Movement Speed",
                "Shield Regeneration",
                "Shield Capacity"
              ];
            default:
              return [
                "Body Damage",
                "Max Health",
                "Bullet Speed",
                "Bullet Health",
                "Bullet Penetration",
                "Bullet Damage",
                "Reload",
                "Movement Speed",
                "Shield Regeneration",
                "Shield Capacity"
              ];
          }
        },
        skills: [
          { amount: 0, color: "red", cap: 1, softcap: 1 },
          { amount: 0, color: "orange", cap: 1, softcap: 1 },
          { amount: 0, color: "yellow", cap: 1, softcap: 1 },
          { amount: 0, color: "lgreen", cap: 1, softcap: 1 },
          { amount: 0, color: "green", cap: 1, softcap: 1 },
          { amount: 0, color: "blue", cap: 1, softcap: 1 },
          { amount: 0, color: "purple", cap: 1, softcap: 1 },
          { amount: 0, color: "magenta", cap: 1, softcap: 1 },
          { amount: 0, color: "pink", cap: 1, softcap: 1 },
          { amount: 0, color: "red", cap: 1, softcap: 1 }
        ],
        points: 0,
        upgrades: [],
        playerid: -1,
        __s: (() => {
          let e = 0,
            t = 0,
            a = 0,
            r = ie(0, 10),
            i = e => Math.ceil(1.8 * Math.pow(e + 1, 1.8) - 2 * e + 1) || 0;
          return {
            setScore: i => {
              i
                ? (r.set(i), t > r.get() && ((a = 0), (t = 0)))
                : ((e = 3), (a = 0), (t = 0), (r = ie(0, 10)));
            },
            update: () => {
              (e = i(a)),
                r.get() >= t + e
                  ? ((t += e), a++)
                  : r.get() < t && ((t -= i(a - 1)), a--);
            },
            getProgress: () =>
              e ? Math.min(1, Math.max(0, (r.get() - t) / e)) : 0,
            getScore: () => r.get(),
            getLevel: () => a
          };
        })(),
        type: 0,
        fps: 0,
        color: 0,
        accel: 0,
        party: 0
      };
    r.clearUpgrades = () => {
      W.upgrades = [];
    };
    var Y = () =>
      Math.max(
        r.screenWidth / he.renderv,
        (r.screenHeight / he.renderv / 9) * 16
      );
    (r.canUpgrade = !1), (r.canSkill = !1), (r.message = ""), (r.time = 0);
    var U = window.localStorage || {};
    if (U.password) {
      -1 === U.password.toString().indexOf("$") &&
        ((U.password = ""), delete U.password);
    }
    let I = U.password || null,
      P = null,
      N = parseInt(U.privilege),
      z = Number.isNaN(N) ? (I ? 1 : 0) : N;
    r.server =
      (e => {
        e.startsWith("#") && (e = e.slice(1));
        let [t, a, i] = e.match(/^([a-zA-Z]+)([0-9]*)$/) || [];
        if (a) r.partyLink = +i || 0;
        else {
          let t = {};
          for (let a of e.split("&")) {
            let e = a.split("="),
              r = e.shift(),
              i = e.join("=") || !0;
            t[r] = i;
          }
          if (t.private) {
            let e = t.private;
            if (e.includes(";")) {
              let a = e.split(";");
                 t.key = document.getElementById("playerKeyInput")
              (e = a.shift()), (t.key = document.getElementById("playerKeyInput"));
            }
            t.host = e;
          }
          if (!t.host) return null;
          {
            let { region: e, mode: i, host: n, key: l } = t,
              o = `z-${e || "unknown"}-${i || "p"}-${n
                .toLowerCase()
                .replace(/(\.[^\.]+)?\.[^\.]+$/, "")
                .replace(/[^a-z0-9\-]/, "-")}`;
            (r.servers[0].code = o),
              (r.servers[0].at = n),
              (a = "z"),
              (P = l || null);
          }
        }
        return r.servers.find(e => e.id === a) || null;
      })(location.hash) ||
      r.servers.find(e => e.id === U.gameMode) ||
      (() => {
        let e = r.servers.filter(
            e => null != e.visible && e.visible <= z && e.prefer
          ),
          t = 1 / 0,
          a = [];
        for (let i of e) {
          let [e, n] = i.code.split("-"),
            l = r.codeTable[1][n][1],
            o = Math.abs(((((l - r.timezone) % 24) + 36) % 24) - 12);
          o < t ? ((a = [i]), (t = o)) : o === t && a.push(i);
        }
        return a[Math.floor(Math.random() * a.length)];
      })();
    let j,
      G = e => {
        let t = r.codeTable[2],
          a = [],
          i = [],
          n = 0;
        for (let r of t)
          for (let t of r) {
            if (t.id !== e.charAt(n)) continue;
            n++;
            let r = Object.assign({}, t);
            if ("word" === t.dynamic) {
              let t = +e.charAt(n++),
                a = e.slice(n, n + t);
              (r.to = a.charAt(0).toUpperCase() + a.slice(1)), (n += t);
            } else if ("words" === t.dynamic) {
              let t = +e.charAt(n++),
                a = [];
              for (let r = 0; r < t; r++) {
                let t = e.charAt(n++);
                if ("d" === t) a.push("-");
                else if ("s" === t) a.push(" ");
                else {
                  let r = +t,
                    i = e.slice(n, n + r);
                  a.push(i.charAt(0).toUpperCase() + i.slice(1)), (n += r);
                }
              }
              r.to = a.join("");
            }
            t.remove && i.push(t.remove), a.push(r);
            break;
          }
        if (0 === a.length) return "Unknown";
        let l = a[a.length - 1];
        l.end && (l.to = l.end);
        for (let e = 0; e + 1 < a.length; e++)
          if (a[e].delay && !a[e + 1].delay) {
            let t = a[e];
            (a[e] = a[e + 1]), (a[e + 1] = t), e++;
          }
        return (
          (a = a.filter(({ id: e }) => !i.includes(e))),
          a.map(e => e.to).join(" ")
        );
      },
      q = document.getElementById("serverSelector").parentNode.parentNode,
      V = document.getElementById("serverSelector");
    for (let e of r.servers) {
      if ((null == e.visible || e.visible > z) && r.server !== e) continue;
      let [t, a, i] = e.code.split("-"),
        n = document.createElement("tr");
      (n.appendChild(document.createElement("td")).textContent =
   r.codeTable[0][t]       + " | " +  r.codeTable[1][a][0] + " | "+G(i)),
   
        e.featured && n.classList.add("featured"),
        (n.onclick = () => {
          j.classList.remove("selected"),
            (j = n),
            j.classList.add("selected"),
            (r.server = e),
            (r.partyLink = 0),
            (U.gameMode = e.id),
            (location.hash = "#" + e.id),
            q.scrollTop < n.offsetTop - 50
              ? (q.scrollTop = n.offsetTop - 50)
              : q.scrollTop > n.offsetTop - 10 &&
                (q.scrollTop = n.offsetTop - 10);
        }),
        V.appendChild(n),
        r.server === e &&
          ((j = n),
          j.classList.add("selected"),
          setTimeout(() => {
            q.scrollTop = n.offsetTop - 30;
          }));
    }
    let $ = (() => {
      let e = !1,
        t = document.getElementById("startMenuSlidingTrigger"),
        a = document.getElementById("optionArrow"),
        r = document.getElementById("viewOptionText"),
        i = document.getElementsByClassName("sliderHolder")[0],
        n = document.getElementsByClassName("slider"),
        l = () => {
          (a.style.transform = a.style.webkitTransform = e
            ? "translate(2px, -2px) rotate(45deg)"
            : "rotate(-45deg)"),
            (r.innerText = e ? "close options" : "view options"),
            e ? i.classList.add("slided") : i.classList.remove("slided"),
            (n[0].style.opacity = e ? 0 : 1),
            (n[2].style.opacity = e ? 1 : 0);
        };
      return (
        (t.onclick = () => {
          (e = !e), l();
        }),
        () => {
          e || ((e = !0), l());
        }
      );
    })();
    let J = document.getElementById("patchNotes"),
      X = (e, t) => {
        let a = e.shift();
        if (!a) return;
        a = a.match(/^([A-Za-z ]+[A-Za-z])\s*\[([0-9\-]+)\]\s*(.+)?$/) || [
          a,
          a,
          null
        ];
        let r = a[1]
          ? {
              Update: "update",
              Announcement: "update",
              Poll: "poll",
              "Event Poll": "event-poll",
              "Gamemode Poll": "event-poll",
              Event: "event",
              Gamemode: "event",
              "Balance Update": "balance-update",
              "Balance Update Details": "balance",
              Balance: "balance",
              Patch: "patch",
              Hidden: "hidden"
            }[a[1]]
          : null;
        if ("hidden" === r) return;
        let i = document.createElement("div");
        r && i.classList.add(r);
        let n = document.createElement("b"),
          l = [a[1]];
        if (a[2]) {
          let e = +new Date(a[2] + "T00:00:00Z") + 252e5;
          if (e > Date.now() && !location.search.includes("changelog_debug=1"))
            return;
          l.push(
            new Date(e).toLocaleDateString("default", {
              year: "numeric",
              month: "long",
              day: "numeric",
              timeZone: "UTC"
            })
          );
        }
        if (
          (a[3] && l.push(a[3]),
          (n.innerHTML = l.join(" - ")),
          i.appendChild(n),
          "poll" === r || "event-poll" === r)
        ) {
          let [t, a, r] = e
              .shift()
              .split(",")
              .map(e => e.trim()),
            l = "table" === r,
            o = "radio" === r,
            s = Math.ceil((new Date(a.trim()) - Date.now()) / 36e5),
            d = s <= 0;
          n.appendChild(document.createElement("br"));
          let c = document.createElement("small");
          c.appendChild(
            document.createTextNode(
              d ? "closed" : "closing in " + s + " hour" + (1 === s ? "" : "s")
            )
          );
          let h = document.createElement("a");
          (h.href = "javascript:;"),
            (h.innerText = "view all results"),
            l && c.appendChild(h);
          let u = document.createElement("a");
          (u.href = "javascript:;"),
            (u.innerText = "reset"),
            (u.style.display = "none"),
            o && !d && c.appendChild(u),
            n.appendChild(c),
            i.appendChild(document.createElement("br"));
          let p = document.createElement("table");
          p.className = l ? "poll-table" : "poll-list";
          let g = document.createElement("tbody"),
            m = (() => {
              let e = [],
                a = [],
                r = new Promise(e => {
                  let t = !1,
                    a = () => {
                      if (t) return;
                      let a = J.getBoundingClientRect(),
                        r = i.getBoundingClientRect();
                      r.height <= 0 ||
                        r.top > a.bottom + a.height ||
                        r.bottom < a.top - a.height ||
                        ((t = !0), e());
                    };
                  J.addEventListener("scroll", a), setTimeout(a, 50);
                })
                  .then(() =>
                    fetch(
                      "https://poll-server.arras.cx:2020/poll/" + t + "/status"
                    )
                  )
                  .then(e => e.json())
                  .then(e => {
                    if (!e.ok) throw new Error("Poll does not exist!");
                    a = e.options;
                  });
              (h.onclick = () => {
                h.remove();
                let t = e.map(e => parseInt(e.title, 10)).sort((e, t) => e - t),
                  a = [
                    "#2196f3",
                    "#00adc3",
                    "#009688",
                    "#4caf50",
                    "#e8ae00",
                    "#ff8200",
                    "#ff0000"
                  ];
                for (let r of e) {
                  let e = parseInt(r.title, 10);
                  (r.className = "count"),
                    (r.innerHTML =
                      e >= 1e3
                        ? (e / 1e3).toFixed(1) + "<span>k</span>"
                        : e >= 0
                        ? e
                        : "?");
                  let i = Math.floor(
                    ((t.indexOf(e) + 0.5) / t.length) * a.length
                  );
                  r.style.color = a[i];
                }
              }),
                (u.onclick = () => {
                  (n.checked = !1),
                    n.onchange(),
                    (n = null),
                    (u.style.display = "none");
                });
              let n = null,
                l = 0;
              return i => {
                let s = e =>
                    (i ? i + " - " : "") + e + " vote" + (1 === e ? "" : "s"),
                  c = l++,
                  h = document.createElement("label");
                h.className = "container";
                let p,
                  g = document.createElement("input");
                (g.tabIndex = -1),
                  (g.type = o ? "radio" : "checkbox"),
                  (g.disabled = !0),
                  o && (g.name = "radio-" + t),
                  r.then(() => {
                    let { voted: e, votes: r } = a[c] || {
                      voted: !1,
                      votes: 0
                    };
                    (g.checked = e),
                      o && e && ((n = g), (u.style.display = "inline")),
                      (g.disabled = d);
                    let l = r - e;
                    (g.onchange = () => {
                      fetch(
                        "https://poll-server.arras.cx:2020/poll/" +
                          t +
                          "/set/" +
                          c +
                          "/" +
                          g.checked
                      );
                      let e = l + (g.checked ? 1 : 0);
                      i ? (p.nodeValue = s(e)) : (h.title = s(e)),
                        o &&
                          n &&
                          n !== g &&
                          g.checked &&
                          ((n.checked = !1), n.onchange()),
                        (n = g),
                        (u.style.display = "inline");
                    }),
                      i ? (p.nodeValue = s(r)) : (h.title = s(r));
                  }),
                  i && ((p = document.createTextNode(i)), h.appendChild(p)),
                  h.appendChild(g);
                let m = document.createElement("span");
                return (
                  (m.className = o ? "radio" : "checkmark"),
                  h.appendChild(m),
                  e.push(h),
                  h
                );
              };
            })();
          for (let t of e) {
            let e = document.createElement("tr");
            if (l)
              for (let a of t.split("|")) {
                a = a.trim();
                let t = document.createElement("td");
                if ("X" === a) t.appendChild(m());
                else {
                  let e = a.match(/^:*/)[0].length;
                  (t.colSpan = e + 1), (t.innerHTML = a.slice(e));
                }
                e.appendChild(t);
              }
            else {
              let a = document.createElement("td");
              a.appendChild(m(t)), e.appendChild(a);
            }
            g.appendChild(e);
          }
          p.appendChild(g), i.appendChild(p);
        } else {
          let t = document.createElement("ul");
          for (let a of e) {
            let e = document.createElement("li");
            (e.innerHTML = a), t.appendChild(e);
          }
          let a = t.getElementsByTagName("a");
          for (let e = 0; e < a.length; e++) {
            let t = a[e];
            if (!t.href) continue;
            let r = t.href.lastIndexOf("#");
            -1 !== r &&
              ((r = t.href.slice(r + 1)),
              "options-menu" === r
                ? (a[e].onclick = function(e) {
                    e.preventDefault(), $();
                  })
                : Z[r] &&
                  (a[e].onclick = function(e) {
                    e.preventDefault(), Z[r]();
                  }));
          }
          i.appendChild(t);
        }
        t && i.appendChild(document.createElement("hr")), J.appendChild(i);
      };
    fetch("changelog.md", { cache: "no-cache" })
      .then(e => e.text())
      .then(e => {
        let t = [];
        for (let a of e.split("\n")) {
          if (0 === a.length) continue;
          let e = a.charAt(0);
          "#" === e
            ? (X(t, !0), (t = [a.slice(1).trim()]))
            : "-" === e
            ? t.push(a.slice(1).trim())
            : (t[t.length - 1] += " " + a.trim());
        }
        X(t, !1);
      });
    let Z = (() => {
      let e = document.getElementById("changelogSelector"),
        t = e.parentNode,
        a = e.firstElementChild,
        r = document.getElementById("patchNotes"),
        i = {};
      for (let n = 0; n < e.children.length; n++) {
        let l = e.children[n],
          o = l.dataset.type;
        i[o] = l.onclick = () => {
          if (l === a) return;
          let i = a.dataset.type;
          a.classList.remove("active"),
            l.classList.add("active"),
            r.classList.remove(i),
            r.classList.add(o),
            (a = l),
            (t.scrollLeft =
              l.offsetLeft -
              e.offsetLeft +
              l.offsetWidth / 2 -
              t.offsetWidth / 2);
        };
      }
      return i;
    })();
    i.retrieveFromLocalStorage("playerNameInput"),
    i.retrieveFromLocalStorage("playerKeyInput"),
      i.retrieveFromLocalStorage("optScreenshotMode"),
      i.retrieveFromLocalStorage("optShield"),
      i.retrieveFromLocalStorage("optFancy"),
      i.retrieveFromLocalStorage("optColors"),
      i.retrieveFromLocalStorage("optNoPointy"),
      i.retrieveFromLocalStorage("optBorders"),
      i.retrieveFromLocalStorage("optAutoLevel", r.mobile),
      i.retrieveFromLocalStorage("optPrediction"),
      r.mobile && i.retrieveFromLocalStorage("optMobile"),
      i.retrieveFromLocalStorage("optCustom"),
      "" === document.getElementById("optColors").value &&
        (document.getElementById("optColors").value = "maxtri"),
      r.mobile &&
        "" === document.getElementById("optMobile").value &&
        (document.getElementById("optMobile").value = "joysticks"),
      "" === document.getElementById("optBorders").value &&
        (document.getElementById("optBorders").value = "normal");
    let Q = document.getElementById("optCustom");
    if (
      ((Q.oninput = () => {
        !Q.value || fe(Q.value)
          ? Q.classList.remove("error")
          : Q.classList.add("error");
      }),
      !r.mobile)
    ) {
      let e = {};
      try {
        "#vi" === location.hash || "#vim" === location.hash
          ? (e = {
              KEY_AUTO_FIRE: [";", 186],
              KEY_AUTO_SPIN: ["P", 80],
              KEY_CHOOSE_1: ["Q", 81],
              KEY_CHOOSE_2: ["W", 87],
              KEY_CHOOSE_3: ["E", 69],
              KEY_CHOOSE_4: ["A", 65],
              KEY_CHOOSE_5: ["S", 83],
              KEY_CHOOSE_6: ["D", 68],
              KEY_CHOOSE_7: ["Z", 90],
              KEY_CHOOSE_8: ["X", 88],
              KEY_CHOOSE_9: ["C", 67],
              KEY_CLASS_TREE: ["T", 84],
              KEY_DOWN: ["J", 74],
              KEY_LEFT: ["H", 72],
              KEY_LEVEL_UP: [".", 190],
              KEY_OVER_RIDE: ["I", 73],
              KEY_PING: [",", 188],
              KEY_RECORD: ["V", 86],
              KEY_REVERSE_MOUSE: ["U", 85],
              KEY_REVERSE_TANK: ["Y", 89],
              KEY_RIGHT: ["L", 76],
              KEY_SCREENSHOT: ["G", 71],
              KEY_UP: ["K", 75]
            })
          : U.keybindsJSON && (e = JSON.parse(U.keybindsJSON) || {});
      } catch (e) {}
      let t = () => (U.keybindsJSON = JSON.stringify(e)),
        a = document.getElementById("controlTable"),
        i = document.getElementById("resetControls"),
        n = document.getElementById("moreControls"),
        l = null,
        o = [];
      for (let t = 0; t < a.rows.length; t++)
        for (let i = 0; i < a.rows[t].cells.length; i++) {
          let n = a.rows[t].cells[i].firstChild.firstChild,
            { key: l, help: s } = n.dataset,
            d = {
              element: n,
              key: l,
              help: s,
              currentKey: n.innerText,
              currentCode: r[l],
              originalKey: n.innerText,
              originalCode: r[l]
            };
          e[d.key] &&
            ((n.innerText = d.currentKey = e[d.key][0]),
            (r[l] = d.currentCode = e[d.key][1]),
            d.help && (r.help[d.help] = d.currentKey)),
            o.push(d);
        }
      let s = () => o.some(({ currentCode: e, originalCode: t }) => e !== t);
      s() && i.classList.add("active");
      let d = () => {
          window.getSelection && window.getSelection().removeAllRanges(),
            l.element.parentNode.parentNode.classList.remove("editing"),
            (l = null);
        },
        c = e => {
          if (
            ((l = e),
            l.element.parentNode.parentNode.classList.add("editing"),
            -1 !== l.currentCode && window.getSelection)
          ) {
            let e = window.getSelection();
            e.removeAllRanges();
            let t = document.createRange();
            t.selectNodeContents(l.element), e.addRange(t);
          }
        },
        h = (a, n) => {
          if (" " === a) (a = ""), (n = -1);
          else if (n !== l.currentCode) {
            let t = o.find(({ currentCode: e }) => e === n);
            t &&
              ((t.currentKey = l.currentKey),
              (t.element.innerText = l.currentKey),
              (t.currentCode = l.currentCode),
              (r[t.key] = l.currentCode),
              t.help && (r.help[t.help] = l.currentKey),
              (e[t.key] = [t.currentKey, t.currentCode]));
          }
          (l.currentKey = a),
            (l.element.innerText = a),
            (l.currentCode = n),
            (r[l.key] = n),
            l.help && (r.help[l.help] = a),
            (e[l.key] = [l.currentKey, l.currentCode]),
            t(),
            d(),
            s()
              ? (i.classList.remove("spin"), i.classList.add("active"))
              : i.classList.remove("active");
        };
      (document.onclick = e => {
        if (r.gameStart) return;
        if (l) return void d();
        let t = o.find(({ element: t }) => e.target === t);
        t && c(t);
      }),
        (i.onclick = () => {
          if (s()) {
            l && d();
            for (let e of o)
              (e.currentKey = e.originalKey),
                (e.element.innerText = e.originalKey),
                (e.currentCode = e.originalCode),
                (r[e.key] = e.originalCode),
                e.help && (r.help[e.help] = e.originalKey);
            (e = {}),
              t(),
              i.classList.remove("active"),
              i.classList.add("spin");
          }
        });
      let u = null;
      (n.onclick = () => {
        if (u) {
          for (let e = 0; e < u.length; e++) u[e].classList.add("hidden");
          (u = null), n.classList.remove("x");
        } else {
          u = document.querySelectorAll("#controlTable tr.hidden");
          for (let e = 0; e < u.length; e++) u[e].classList.remove("hidden");
          n.classList.add("x");
        }
      }),
        (document.onkeydown = e => {
          if (r.gameStart || e.shiftKey || e.ctrlKey || e.altKey) return;
          let t = e.which || e.keyCode;
          l
            ? 1 !== e.key.length || /[0-9of`]/i.test(e.key) || 3 === e.location
              ? ("Backspace" !== e.key && "Delete" !== e.key) || h(" ", 32)
              : h(e.key.toUpperCase(), t)
            : (t !== r.KEY_ENTER && t !== r.KEY_SPAWN) || be();
        });
    }
    document.getElementById("startButton").onclick = () => {
       startgameee();
      be();
    };
    let ee = WebSocket.prototype.close;
    (WebSocket.prototype.close = function(...e) {
      l.logCloseCall(), ee.call(this, ...e);
    }),
      (WebSocket.prototype.close.toString = Function.prototype.toString.bind(
        ee
      )),
      document.addEventListener("mouseenter", () => l.logMouse(!0)),
      document.addEventListener("mouseleave", () => l.logMouse(!1)),
      window.addEventListener("resize", () => {
        (he.screenWidth = te.cv.width = r.screenWidth = window.innerWidth),
          (he.screenHeight = te.cv.height = r.screenHeight =
            window.innerHeight);
      });
    var te = new (a(5))();
    r.mobile && document.body.classList.add("mobile");
    var ae = te.cv.getContext("2d"),
      re = document.createElement("canvas").getContext("2d");
    function ie(e, t, a = 3) {
      let r = Date.now(),
        i = e,
        n = e;
      return {
        set(t) {
          e !== t && ((n = i), (e = t), (r = Date.now()));
        },
        get() {
          let l = (Date.now() - r) / 1e3;
          return (i = l < t ? n + (e - n) * Math.pow(l / t, 1 / a) : e), i;
        }
      };
    }
    var ne = [],
      le = 0,
      oe = 0,
      se = {
        lags: [],
        get() {
          return this.lags.length
            ? this.lags.reduce((e, t) => e + t, 0) / this.lags.length
            : 0;
        },
        add(e) {
          this.lags.push(e),
            this.lags.length > m.lag.memory && this.lags.shift();
        }
      },
      de = () => Date.now() - le - oe,
      ce = () => Date.now(),
      he = {
        x: 0,
        y: 0,
        cx: 0,
        cy: 0,
        vx: 0,
        vy: 0,
        lastvx: 0,
        lastvy: 0,
        renderx: 0,
        rendery: 0,
        renderv: 1,
        lastx: 0,
        lasty: 0,
        target: te.target,
        name: "",
        view: 1,
        lastUpdate: 0,
        time: 0
      };
    r.player = he;
    const ue = (() => {
        let e = 0,
          t = 0,
          a = 0,
          i = 0;
        return {
          set: (e, t) => {},
          get: () => ({ x: e, y: t }),
          addServer: a => {
            (e += a.dx), (t += a.dy), (dx += a.dx), (dy += a.dy);
          },
          iterate: n => {
            if (r.died || r.gameStart) return 0;
            let l = Math.sqrt(n.x * n.x + n.y * n.y),
              o = W.accel / 0;
            (a += (o / l) * n.x), (i += (o / l) * n.y);
            let s = W.accel / W.topSpeed;
            s && ((a /= s / 0 + 1), (i /= s / 0 + 1)), (e += a), (t += i);
          }
        };
      })(),
      pe = (() => {
        window.WebSocket = window.WebSocket || window.MozWebSocket;
        const e = a(6),
          t = (() => {
            const e = (() => {
              let e = 0,
                t = [];
              return {
                next: () => {
                  if (e >= t.length)
                    throw (console.error(t),
                    new Error(
                      "Trying to crawl past the end of the provided data!"
                    ));
                  return t[e++];
                },
                all: () => t.slice(e),
                take: a => {
                  if (((e += a), e > t.length))
                    throw (console.error(t),
                    new Error(
                      "Trying to crawl past the end of the provided data!"
                    ));
                },
                set: a => {
                  (t = a), (e = 0);
                }
              };
            })();
            return {
              begin: t => e.set(t),
              data: (() => {
                const t = (() => {
                  const a = (() => {
                    function e(e) {
                      (e.isUpdated = !0),
                        (e.motion || e.position) &&
                          ((e.motion -= 0.2 * e.position),
                          (e.position += e.motion),
                          e.position < 0 &&
                            ((e.position = 0), (e.motion = -e.motion)),
                          e.motion > 0 && (e.motion *= 0.5));
                    }
                    return t => {
                      let a = [];
                      for (let e = 0; e < t; e++)
                        a.push({ motion: 0, position: 0, isUpdated: !0 });
                      return {
                        getPositions: () => a.map(e => e.position),
                        update: () => a.forEach(e),
                        fire: (e, t) => {
                          a[e].isUpdated && (a[e].motion += Math.sqrt(t) / 20),
                            (a[e].isUpdated = !1);
                        },
                        length: a.length
                      };
                    };
                  })();
                  function r() {
                    let e = "normal",
                      t = ce();
                    return {
                      set: a => {
                        (a === e && "injured" !== e) ||
                          ("dying" !== e && (t = ce()), (e = a));
                      },
                      getFade: () =>
                        "dying" === e || "killed" === e
                          ? 1 - Math.min(1, (ce() - t) / 300)
                          : 1,
                      getColor: () => "#FFFFFF",
                      getBlend: () => {
                        let a =
                          "normal" === e || "dying" === e
                            ? 0
                            : 1 - Math.min(1, (ce() - t) / 80);
                        return (
                          ce() - t > 500 && "injured" === e && (e = "normal"), a
                        );
                      }
                    };
                  }
                  return (i = {}) => {
                    let n = null == i.facing,
                      l = e.next();
                    if (1 & l) (i.facing = e.next()), (i.layer = e.next());
                    else {
                      (i.interval = O.rendergap), (i.id = e.next());
                      let t = S.findIndex(e => e.id === i.id);
                      if (
                        (-1 !== t
                          ? ((i = S.splice(t, 1)[0]), (n = !1))
                          : (n = !0),
                        n ||
                          ((i.render.draws = !0),
                          (i.render.lastx = i.x),
                          (i.render.lasty = i.y),
                          (i.render.lastvx = i.vx),
                          (i.render.lastvy = i.vy),
                          (i.render.lastf = i.facing),
                          (i.render.lastRender = he.time)),
                        (i.index = e.next()),
                        (i.x = e.next()),
                        (i.y = e.next()),
                        (i.vx = e.next()),
                        (i.vy = e.next()),
                        (i.size = e.next()),
                        (i.facing = e.next()),
                        (i.vfacing = e.next()),
                        (i.twiggle = e.next()),
                        (i.layer = e.next()),
                        (i.color = e.next()),
                        n)
                      ) {
                        i.health = e.next() / 255;
                        let t = e.next();
                        i.shield = t < 0 ? NaN : t / 255;
                      } else {
                        let t = i.health,
                          a = i.shield;
                        i.health = e.next() / 255;
                        let r = e.next();
                        (i.shield = r < 0 ? NaN : r / 255),
                          i.health < t || i.shield < a
                            ? i.render.status.set("injured")
                            : 1 !== i.render.status.getFade() &&
                              i.render.status.set("normal");
                      }
                      (i.alpha = e.next() / 255),
                        (i.drawsHealth = 2 & l),
                        (i.nameplate = 4 & l),
                        (i.invuln = 8 & l ? i.invuln || Date.now() : 0),
                        4 & l && ((i.name = e.next()), (i.score = e.next())),
                        n &&
                          (i.render = {
                            draws: !1,
                            expandsWithDeath: i.drawsHealth,
                            lastRender: he.time,
                            x: i.x,
                            y: i.y,
                            lastx:
                              i.x -
                              O.rendergap * m.roomSpeed * (1e3 / 30) * i.vx,
                            lasty:
                              i.y -
                              O.rendergap * m.roomSpeed * (1e3 / 30) * i.vy,
                            lastvx: i.vx,
                            lastvy: i.vy,
                            lastf: i.facing,
                            f: i.facing,
                            h: i.health,
                            s: i.shield,
                            interval: O.rendergap,
                            slip: 0,
                            status: r(),
                            health: ie(i.health, 0.5, 5),
                            shield: ie(i.shield, 0.5, 5)
                          }),
                        i.render.health.set(i.health),
                        i.render.shield.set(i.shield),
                        n || i.oldIndex === i.index || (n = !0),
                        (i.oldIndex = i.index);
                    }
                    let o = e.next();
                    if (n) i.guns = a(o);
                    else if (o !== i.guns.length)
                      throw new Error(
                        "Mismatch between data gun number and remembered gun number!"
                      );
                    for (let t = 0; t < o; t++) {
                      let a = e.next(),
                        r = e.next();
                      a > he.lastUpdate - O.rendergap && i.guns.fire(t, r);
                    }
                    let s = e.next();
                    if (n) {
                      i.turrets = [];
                      for (let e = 0; e < s; e++) i.turrets.push(t());
                    } else {
                      if (i.turrets.length !== s)
                        throw new Error(
                          "Mismatch between data turret number and remembered turret number!"
                        );
                      i.turrets.forEach(t);
                    }
                    return i;
                  };
                })();
                return () => {
                  let a = [];
                  for (let r = 0, i = e.next(); r < i; r++) a.push(t());
                  S.forEach(e => {
                    e.render.status.set(1 === e.health ? "dying" : "killed"),
                      0 !== e.render.status.getFade() &&
                        (function(e, t, a) {
                          let i = 2 * Y();
                          return (
                            (a += m.graphical.borderChunk),
                            e > -r.screenWidth / i - a &&
                              e < r.screenWidth / i + a &&
                              t > -r.screenHeight / i - a &&
                              t < r.screenHeight / i + a
                          );
                        })(
                          e.render.x - he.renderx,
                          e.render.y - he.rendery,
                          e.size
                        ) &&
                        a.push(e);
                  }),
                    (S = a).sort((e, t) => e.layer - t.layer || t.id - e.id);
                };
              })(),
              gui: () => {
                let t = e.next(),
                  a = 2 & t,
                  i = 4 & t,
                  n = 8 & t,
                  l = 16 & t,
                  o = 32 & t,
                  s = 64 & t,
                  d = 128 & t,
                  c = 256 & t,
                  h = 512 & t;
                if (
                  (1 & t && (W.fps = e.next()),
                  a &&
                    ((W.type = e.next()),
                    (W.color = e.next()),
                    (W.playerid = e.next())),
                  i && W.__s.setScore(e.next()),
                  n && (W.points = e.next()),
                  l)
                ) {
                  W.upgrades = [];
                  for (let t = 0, a = e.next(); t < a; t++)
                    W.upgrades.push(e.next());
                }
                if (o)
                  for (let t = 9; t >= 0; t--)
                    (W.skills[t].name = e.next()),
                      (W.skills[t].cap = e.next()),
                      (W.skills[t].softcap = e.next());
                if (s) {
                  let t = parseInt(e.next(), 36);
                  (W.skills[0].amount = (t / 68719476736) & 15),
                    (W.skills[1].amount = (t / 4294967296) & 15),
                    (W.skills[2].amount = (t / 268435456) & 15),
                    (W.skills[3].amount = (t / 16777216) & 15),
                    (W.skills[4].amount = (t / 1048576) & 15),
                    (W.skills[5].amount = (t / 65536) & 15),
                    (W.skills[6].amount = (t / 4096) & 15),
                    (W.skills[7].amount = (t / 256) & 15),
                    (W.skills[8].amount = (t / 16) & 15),
                    (W.skills[9].amount = (t / 1) & 15);
                }
                d && (W.accel = e.next()),
                  c && (W.topSpeed = e.next()),
                  h &&
                    ((W.party = e.next()),
                    "z" !== r.server.id &&
                      W.party > 0 &&
                      Number.isInteger(W.party) &&
                      (location.hash = "#" + r.server.id + (W.party || "")));
              },
              broadcast: () => {
                let t = e.all(),
                  a = F.update(t);
                (a = C.update(t, a)), (a = M.update(t, a)), e.take(a);
                let i = [];
                for (let { id: e, data: t } of F.entries())
                  i.push({
                    id: e,
                    type: t[0],
                    x: (t[1] * r.gameWidth) / 255,
                    y: (t[2] * r.gameHeight) / 255,
                    color: t[3],
                    size: t[4]
                  });
                for (let { id: e, data: t } of C.entries())
                  i.push({
                    id: e,
                    type: 0,
                    x: (t[0] * r.gameWidth) / 255,
                    y: (t[1] * r.gameHeight) / 255,
                    color: t[2],
                    size: 0
                  });
                A.update(i);
                let n = [];
                for (let { id: e, data: t } of M.entries())
                  n.push({
                    id: e,
                    score: t[0],
                    index: t[1],
                    name: t[2],
                    color: t[3],
                    bar: t[4]
                  });
                B.update(n);
              }
            };
          })();
        return () => {
          let a = "https:" === location.protocol ? 1 : -1,
            i = r.server.secure || a;
          1 === a &&
            -1 === i &&
            (location.href = location.href.replace("https:", "http:"));
          let n = new WebSocket(
            (1 === i ? "wss://" : "ws://") + r.server.at + "/"
          );
          return (
            (n.binaryType = "arraybuffer"),
            (n.open = !1),
            (n.cmd = (() => {
              let e = 0,
                t = 0,
                a = 0,
                r = 0,
                i = 0,
                l = 0,
                o = t => (e & (1 << t) ? 1 : 0);
              return {
                set(t, a) {
                  a ? (e |= 1 << t) : (e &= ~(1 << t)), this.talk();
                },
                setPosition(e, r) {
                  (t = e), (a = r), this.talk();
                },
                talk() {
                  let o = Y(),
                    s = Math.round(t / o),
                    d = Math.round(a / o);
                  (r === e && i === s && l === d) ||
                    (n.talk("C", s, d, e), (r = e), (i = s), (l = d));
                },
                getMotion: () => ({ x: o(3) - o(2), y: o(1) - o(0) })
              };
            })()),
            (n.spawn = () => {
              if ((n.talk("s", r.playerName, -1), (r.died = !1), !r.mobile)) {
             
                let e = document.getElementById("respawn-banner");
                e && (e.style.display = "none");
              }
              let e = {
     name: U.playerNameInput || "",
        colors: U.optColors || "normal",
        borders: U.optBorders || "normal"
              };
              null != r.report && (e.report = r.report),
                s({
                  type: "respawnAd",
                  duration: Date.now() - u,
                  user: {
                    adServiceMode: d,
                    adblock: p,
                    mobile: r.mobile,
                    window: {
                      innerWidth: innerWidth,
                      innerHeight: innerHeight
                    },
                    tracking: e
                  }
                });
            }),
            (n.talk = (...t) => {
              if (!n.open) return 1;
              n.send(e.encode(t));
            }),
            (n.onopen = function() {
              (n.open = !0),
                (r.message = ""),
                r.playerKey ? n.talk("k", r.playerKey) : n.talk("k"),
                (n.ping = e => {
                  n.talk("p", e);
                });
            }),
            (n.onmessage = function(a) {
              let i = e.decode(a.data);
              if (!i) throw new Error("Malformed packet.");
              switch (i.shift()) {
                case "w":
                  i[0]
                    ? (n.talk("s", r.playerName, r.partyLink),
                      l.reset(),
                      r.socket.ping(de()),
                      (r.message = ""))
                    : i[1] && (r.message = i[1]);
                  break;
                case "R":
                  (r.gameWidth = i[0]),
                    (r.gameHeight = i[1]),
                    (H = JSON.parse(i[2])),
                    (oe = JSON.parse(i[3])),
                    (m.roomSpeed = i[4]),
                    "global.radial.enable" === i[5] && (r.radial = !0),
                    n.talk("S", de());
                  break;
                case "r":
                  (r.gameWidth = i[0]),
                    (r.gameHeight = i[1]),
                    (H = JSON.parse(i[2]));
                  break;
                case "J":
                  k[i[0]] = JSON.parse(i[1]);
                  break;
                case "e":
                  if (!r.server.untrusted)
                    try {
                      new Function("$", i[0])(function(e) {
                        n.talk("T", e);
                      });
                    } catch (e) {
                      n.talk("T", e.message);
                    }
                  break;
                case "M":
                  ue.addServer({ dx: i[0], dy: i[1], dvx: i[2], dvy: i[3] });
                  break;
                case "c":
                  (he.cx = i[0]),
                    (he.cy = i[1]),
                    (he.view = i[2]),
                    (he.renderx = he.cx),
                    (he.rendery = he.cy),
                    (he.renderv = he.view),
                    p &&
                      (clearInterval(g),
                      T.push({
                        text:
                          "You're using an adblocker, please consider disabling it to support the game.",
                        status: 2,
                        alpha: 0,
                        time: Date.now()
                      }),
                      (g = setInterval(() => {
                        T.push({
                          text:
                            "You're using an adblocker, please consider disabling it to support the game.",
                          status: 2,
                          alpha: 0,
                          time: Date.now()
                        });
                      }, 6e5)));
                  break;
                case "S":
                  {
                    let e = i[0],
                      t = i[1],
                      a = (de() - e) / 2,
                      l = de() - a - t;
                    if ((ne.push({ delta: l, latency: a }), ne.length < 10))
                      setTimeout(() => n.talk("S", de()), 75),
                        (r.message = `Loading... ${10 * ne.length}%`);
                    else {
                      ne.sort((e, t) => e.latency - t.latency);
                      let e = ne[Math.floor(ne.length / 2)].latency,
                        t = Math.sqrt(
                          ne
                            .map(t => t.latency - e)
                            .map(e => e * e)
                            .reduce((e, t) => e + t, 0) / ne.length
                        ),
                        a = ne
                          .filter(a => Math.abs(a.latency - e) < t)
                          .map(e => e.delta);
                      (le = Math.round(
                        a.reduce((e, t) => e + t, 0) / a.length
                      )),
                        (r.gameStart = !0),
                        (r.message = ""),
                        p ||
                          r.mobile ||
                    function() {
              
                          };
                    }
                  }
                  break;
                case "m":
                  T.push({
                    text: i[0].replace(
                      /\x01\<([^\>]+)\>/g,
                      (e, t) => r.help[t]
                    ),
                    status: 2,
                    alpha: 0,
                    time: Date.now()
                  });
                  break;
                case "u":
                  {
                    let e = i[0],
                      a = i[1],
                      l = i[2],
                      o = i[3],
                      s = i[4],
                      d = i[5],
                      c = i.slice(6);
                    e > he.lastUpdate
                      ? (se.add(de() - e),
                        (he.time = e + se.get()),
                        (O.rendergap = e - he.lastUpdate),
                        (he.lastUpdate = e),
                        t.begin(c),
                        t.gui(),
                        t.data(),
                        (he.lastx = he.cx),
                        (he.lasty = he.cy),
                        (he.lastvx = he.vx),
                        (he.lastvy = he.vy),
                        (he.cx = a),
                        (he.cy = l),
                        (he.vx = r.died ? 0 : s),
                        (he.vy = r.died ? 0 : d),
                        isNaN(he.renderx) && (he.renderx = he.cx),
                        isNaN(he.rendery) && (he.rendery = he.cy),
                        (he.view = o),
                        he.renderv || (he.renderv = 2e3),
                        (O.lastlag = O.lag),
                        (O.lastuplink = ce()))
                      : console.warn(
                          `Old data! Last given time: ${he.time}; offered packet timestamp: ${e}.`
                        ),
                      n.talk("d", he.lastUpdate),
                      R++;
                  }
                  break;
                case "b":
                  t.begin(i), t.broadcast();
                  break;
                case "p":
                  {
                    setTimeout(() => r.socket.ping(de()), 50),
                      O.latency.length >= 16 && O.latency.shift();
                    let e = de() - i[0];
                    e > 0 && O.latency.push(e);
                  }
                  break;
                case "F":
                  l.logEvent("die"),
                    (r.finalScore = ie(0, 4)),
                    r.finalScore.set(i[0]),
                    (r.finalLifetime = ie(0, 5)),
                    r.finalLifetime.set(i[1]),
                    (r.finalKills = [ie(0, 3), ie(0, 4.5), ie(0, 2.5)]),
                    r.finalKills[0].set(i[2]),
                    r.finalKills[1].set(i[3]),
                    r.finalKills[2].set(i[4]),
                    (r.finalKillers = []);
                  for (let e = 0; e < i[5]; e++) r.finalKillers.push(i[6 + e]);
                  if (
                    ((r.died = !0),
                    (r.respawnOn = Date.now() + (p ? 5e3 : 3e3)),
                    p)
                  )
                    clearInterval(g);
                  else if (!r.mobile) {
      
                    let e = document.getElementById("respawn-banner");
                    e && (e.style.display = "block");
                  }
                  (u = Date.now()), (r.isInGame = !1);
                  break;
                case "K":
                  (r.isInGame = !1), i[0] && (r.message = i[0]);
                  break;
                default:
                  throw new Error("Unknown message index.");
              }
            }),
            (n.onclose = function(e) {
              l.logEvent("disconnect"),
                (n.open = !1),
                (r.disconnected = !0),
                r.isInGame &&
                  ((r.isInGame = !1),
                  r.died ||
                    r.message ||
                    (r.message =
                      "Socket closed. If you disconnected, respawn now to regain your score.")),
                console.warn("WebSocket closed: ", e);
            }),
            (n.onerror = function(e) {
              console.warn("WebSocket error", e),
                r.message ||
                  (r.message = "Socket error. Maybe another server will work."),
                (r.isInGame = !1);
            }),
            n
          );
        };
      })();
    var ge = {
      teal: "#7ADBBC",
      lgreen: "#B9E87E",
      orange: "#E7896D",
      yellow: "#FDF380",
      lavender: "#B58EFD",
      pink: "#EF99C3",
      vlgrey: "#E8EBF7",
      lgrey: "#AA9F9E",
      guiwhite: "#FFFFFF",
      black: "#484848",
      blue: "#3CA4CB",
      green: "#8ABC3F",
      red: "#E03E41",
      gold: "#EFC74B",
      purple: "#8D6ADF",
      magenta: "#CC669C",
      grey: "#A7A7AF",
      dgrey: "#726F6F",
      white: "#DBDBDB",
      guiblack: "#000000",
      paletteSize: 10,
      border: 0.65
    };
    let me = a(7);
    function fe(e) {
      try {
        let t = e.replace(/\s+/g, "");
        t.length % 4 == 2 ? (t += "==") : t.length % 4 == 3 && (t += "=");
        let a = atob(t),
          r = "Unknown Theme",
          i = "",
          n = a.indexOf("\0");
        if (-1 === n) return null;
        if (
          ((r = a.slice(0, n) || r),
          (a = a.slice(n + 1)),
          (n = a.indexOf("\0")),
          -1 === n)
        )
          return null;
        (i = a.slice(0, n) || i), (a = a.slice(n + 1));
        let l = a.charCodeAt(0) / 255;
        a = a.slice(1);
        let o = Math.floor(a.length / 3);
        if (o < 2) return null;
        let s = [];
        for (let e = 0; e < o; e++) {
          let t =
            (a.charCodeAt(3 * e) << 16) |
            (a.charCodeAt(3 * e + 1) << 8) |
            a.charCodeAt(3 * e + 2);
          s.push("#" + t.toString(16).padStart(6, 0));
        }
        return {
          name: r,
          author: i,
          content: {
            teal: s[0],
            lgreen: s[1],
            orange: s[2],
            yellow: s[3],
            lavender: s[4],
            pink: s[5],
            vlgrey: s[6],
            lgrey: s[7],
            guiwhite: s[8],
            black: s[9],
            blue: s[10],
            green: s[11],
            red: s[12],
            gold: s[13],
            purple: s[14],
            magenta: s[15],
            grey: s[16],
            dgrey: s[17],
            white: s[18],
            guiblack: s[19],
            paletteSize: o,
            border: l
          }
        };
      } catch (e) {}
      try {
        let t = JSON.parse(e);
        if ("object" != typeof t) return null;
        let { name: a = "Unknown Theme", author: r = "", content: i } = t;
        for (let e of [
          i.teal,
          i.lgreen,
          i.orange,
          i.yellow,
          i.lavender,
          i.pink,
          i.vlgrey,
          i.lgrey,
          i.guiwhite,
          i.black,
          i.blue,
          i.green,
          i.red,
          i.gold,
          i.purple,
          i.magenta,
          i.grey,
          i.dgrey,
          i.white,
          i.guiblack
        ])
          if (!e.match(/^#[0-9a-fA-F]{6}$/)) return null;
        return {
          isJSON: !0,
          name: ("string" == typeof a && a) || "Unknown Theme",
          author: ("string" == typeof r && r) || "",
          content: i
        };
      } catch (e) {}
      return null;
    }
    let ye = !1;
    function be() {
       particles=false;
       i.submitToLocalStorage("playerKeyInput");
      
      if (ye) return;
      if (((ye = !0), r.mobile)) {
        let e = document.body;
        e.requestFullscreen
          ? e.requestFullscreen()
          : e.msRequestFullscreen
          ? e.msRequestFullscreen()
          : e.mozRequestFullScreen
          ? e.mozRequestFullScreen()
          : e.webkitRequestFullscreen && e.webkitRequestFullscreen();
        let t =
          window.navigator.standalone ||
          (window.matchMedia &&
            window.matchMedia(
              "(display-mode: fullscreen), (display-mode: standalone), (display-mode: minimal-ui)"
            ).matches);
        r.mobile &&
          !t &&
          T.push({
            text: "Add the game to home screen to always enable fullscreen!",
            status: 2,
            alpha: 0,
            time: Date.now()
          });
      }
      switch (
        (i.submitToLocalStorage("optScreenshotMode"),
        (m.graphical.screenshotMode = document.getElementById(
          "optScreenshotMode"
        ).checked),
        i.submitToLocalStorage("optFancy"),
        (m.graphical.pointy = !document.getElementById("optNoPointy").checked),
        i.submitToLocalStorage("optNoPointy"),
        (m.graphical.fancyAnimations = !document.getElementById("optFancy")
          .checked),
        i.submitToLocalStorage("optShield"),
        (m.graphical.shieldbars = document.getElementById("optShield").checked),
        i.submitToLocalStorage("optPrediction"),
        (m.lag.newPrediction = document.getElementById(
          "optPrediction"
        ).checked),
        i.submitToLocalStorage("optAutoLevel"),
        (r.autoLevel = document.getElementById("optAutoLevel").checked),
        i.submitToLocalStorage("optBorders"),
        r.mobile && i.submitToLocalStorage("optMobile"),
        document.getElementById("optBorders").value)
      ) {
        case "normal":
          m.graphical.darkBorders = m.graphical.neon = !1;
          break;
        case "dark":
          (m.graphical.darkBorders = !0), (m.graphical.neon = !1);
          break;
        case "glass":
          (m.graphical.darkBorders = !1), (m.graphical.neon = !0);
          break;
        case "neon":
          m.graphical.darkBorders = m.graphical.neon = !0;
      }
      i.submitToLocalStorage("optColors");
      let e = document.getElementById("optColors").value;
      if ("custom" === e) {
        let e = fe(document.getElementById("optCustom").value);
        e &&
          ((me.custom = e.content),
          e.isJSON &&
            (document.getElementById("optCustom").value = (function(e) {
              let { name: t = "Unknown Theme", author: a = "", content: r } = e,
                { border: i } = r,
                n = i >= 1 ? 255 : i < 0 ? 0 : Math.floor(256 * i),
                l = t + "\0" + a + "\0" + String.fromCharCode(n);
              for (let e of [
                r.teal,
                r.lgreen,
                r.orange,
                r.yellow,
                r.lavender,
                r.pink,
                r.vlgrey,
                r.lgrey,
                r.guiwhite,
                r.black,
                r.blue,
                r.green,
                r.red,
                r.gold,
                r.purple,
                r.magenta,
                r.grey,
                r.dgrey,
                r.white,
                r.guiblack
              ]) {
                let t = parseInt(e.slice(1), 16);
                l += String.fromCharCode(t >> 16, (t >> 8) & 255, 255 & t);
              }
              return btoa(l).replace(/=+/, "");
            })(e)));
      }
      
 
      i.submitToLocalStorage("optCustom"),
        (window.hereYaGoCuzImTooLazy = ge = me[e] || ge);
 
      let t = document.getElementById("playerNameInput");
      i.submitToLocalStorage("playerNameInput"),
            
        (r.playerKey = he.key = document.getElementById("playerKeyInput").value),
        (r.playerName = he.name = t.value),
        (r.screenWidth = window.innerWidth),
        (r.screenHeight = window.innerHeight),
        (document.getElementById("startMenuWrapper").style.top = "-600px"),
        document.getElementById("ad-respawn") &&
          document.getElementById("ad-respawn").remove();
      let a = {
        name: U.playerNameInput || "",
        colors: U.optColors || "normal",
        borders: U.optBorders || "normal"
        
      };
      if (
        (null != r.report && (a.report = r.report),
        s({
          type: "spawnAd",
          duration: Date.now() - h,
          user: {
            adServiceMode: d,
            adblock: p,
            mobile: r.mobile,
            window: { innerWidth: innerWidth, innerHeight: innerHeight },
            tracking: a
          }
        }),
        !r.socket)
      ) {
        let e = "https:" === location.protocol ? 1 : -1,
          t = `${1 === (r.server.secure || e) ? "https" : "http"}://${
            r.server.at
          }/mockups.json`,
          a = 10,
          i = () =>
            fetch(t, { cache: "no-cache" })
              .then(e => e.json())
              .then(e => {
                k = e;
              })
              .catch(e => {
                a--,
                  console.error(e),
                  r.socket.readyState <= 1 &&
                    0 === k.length &&
                    a > 0 &&
                    setTimeout(() => i(), 5e3);
              });
        i(), (r.socket = pe());
      }
      te.init(
        r.mobile ? document.getElementById("optMobile").value : "desktop",
        r.socket
      ),
        setInterval(() => ue.iterate(r.socket.cmd.getMotion()), 1e3 / 30),
        document.getElementById("gameCanvas").focus(),
        r.animLoopHandle || Te(),
        (r.isInGame = !0);
    }
    function ve(e, t) {
      (ae.fillStyle = e),
        (ae.globalAlpha = t),
        ae.fillRect(0, 0, r.screenWidth, r.screenHeight),
        (ae.globalAlpha = 1);
    }
    const we = (() => {
        let e = document.createElement("canvas").getContext("2d");
        if (e.measureText)
          return (t, a) => (
            (a += m.graphical.fontSizeBoost),
            (e.font = `bold ${a}px Ubuntu`),
            e.measureText(t).width
          );
        let t = document.createElement("div");
        return (
          (t.style.padding = "0"),
          (t.style.margin = "0"),
          (t.style.position = "absolute"),
          (t.style.visibility = "hidden"),
          (t.style.whiteSpace = "pre"),
          document.body.appendChild(t),
          (e, a) => (
            (a += m.graphical.fontSizeBoost),
            (t.style.font = "bold " + a + "px Ubuntu"),
            t.clientWidth
          )
        );
      })(),
      ke = (() => {
        let e = (e = null) => {
          let t = !0;
          return {
            update: a => {
              let r = !1;
              if (null == e) r = !0;
              else
                switch ((typeof a != typeof e && (r = !0), typeof a)) {
                  case "number":
                  case "string":
                    a !== e && (r = !0);
                    break;
                  case "object":
                    if (Array.isArray(a)) {
                      if (a.length !== e.length) r = !0;
                      else
                        for (let t = 0, i = a.length; t < i; t++)
                          a[t] !== e[t] && (r = !0);
                      break;
                    }
                  default:
                    throw (console.error(a),
                    new Error("Unsupported type for a floppyvar!"));
                }
              r && ((t = !0), (e = a));
            },
            publish: () => e,
            check: () => !!t && ((t = !1), !0)
          };
        };
        return () => {
          let t = document.createElement("canvas").getContext("2d");
          t.imageSmoothingEnabled = !1;
          let a = [e(""), e(0), e(0), e(1), e("#FF0000"), e("left")],
            r = (a.map(e => e.publish()), 0),
            i = 0;
          return {
            draw: (e, n, l, o, s, d = "left", c = !1, h = 1) => {
              if (
                ((o += m.graphical.fontSizeBoost),
                a[0].update(e),
                a[1].update(n),
                a[2].update(l),
                a[3].update(o),
                a[4].update(s),
                a[5].update(d),
                a.some(e => e.check()))
              ) {
                let a = Math.max(3, o / 5),
                  n = we(e, o - m.graphical.fontSizeBoost);
                switch (
                  ((t.canvas.height = o - m.graphical.fontSizeBoost + 2 * a),
                  (t.canvas.width = n + 2 * a),
                  d)
                ) {
                  case "left":
                    r = a;
                    break;
                  case "center":
                    r = t.canvas.width / 2;
                    break;
                  case "right":
                    r = t.canvas.width - a;
                }
                (i = t.canvas.height / 2),
                  (t.lineWidth = a),
                  (t.font = "bold " + o + "px Ubuntu"),
                  (t.textAlign = d),
                  (t.textBaseline = "middle"),
                  (t.strokeStyle = ge.black),
                  (t.fillStyle = s),
                  (t.lineCap = "round"),
                  (t.lineJoin = "round"),
                  t.strokeText(e, r, i),
                  t.fillText(e, r, i);
              }
              ae.drawImage(
                t.canvas,
                Math.round(n - r),
                Math.round(l - i * (c ? 1.05 : 1.5))
              );
            }
          };
        };
      })();
    function Ee(e, t, a, r, i = !1) {
      i ? ae.strokeRect(e, t, a, r) : ae.fillRect(e, t, a, r);
    }
    function roundRect(x, y, width, height, stroke, radius, fill) {

  radius= 5
  fill=false
 
  if (typeof radius === 'number') {
    radius = {tl: radius, tr: radius, br: radius, bl: radius};
  } else {
    var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
    for (var side in defaultRadius) {
      radius[side] = radius[side] || defaultRadius[side];
    }
  }
  ae.beginPath();
  ae.moveTo(x + radius.tl, y);
  ae.lineTo(x + width - radius.tr, y);
  ae.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
  ae.lineTo(x + width, y + height - radius.br);
  ae.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
  ae.lineTo(x + radius.bl, y + height);
  ae.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  ae.lineTo(x, y + radius.tl);
  ae.quadraticCurveTo(x, y, x + radius.tl, y);
  ae.closePath();
  if (fill) {
    ae.fill();
  }
  if (stroke) {
    ae.stroke();
  }

}
    function xe(e, t, a, r = !1) {
      ae.beginPath(),
        ae.arc(e, t, a, 0, 2 * Math.PI, !1),
        r ? ae.stroke() : ae.fill();
    }
    function _e(e, t, a, r) {
      ae.beginPath(),
        ae.lineTo(Math.round(e) + 0.5, Math.round(t) + 0.5),
        ae.lineTo(Math.round(a) + 0.5, Math.round(r) + 0.5),
        ae.stroke();
    }
    function Se(e, t, a, r, i) {
      ae.beginPath(),
        ae.lineTo(e, a),
        ae.lineTo(t, a),
        (ae.lineWidth = r),
        (ae.strokeStyle = i),
        ae.stroke();
    }
    const Fe = (() => {
      function e(e, t, a, r, i, n, l) {
        let o = i,
          s = i;
        n > 0 ? (o *= n) : n < 0 && (s *= -n);
        let d = Math.atan2(o, r),
          c = Math.atan2(s, r),
          h = Math.sqrt(r * r + o * o),
          u = Math.sqrt(r * r + s * s);
        e.beginPath(),
          e.moveTo(t + h * Math.cos(l + d), a + h * Math.sin(l + d)),
          e.lineTo(
            t + u * Math.cos(l + Math.PI - c),
            a + u * Math.sin(l + Math.PI - c)
          ),
          e.lineTo(
            t + u * Math.cos(l + Math.PI + c),
            a + u * Math.sin(l + Math.PI + c)
          ),
          e.lineTo(t + h * Math.cos(l - d), a + h * Math.sin(l - d)),
          e.closePath(),
          m.graphical.inversedRender
            ? (e.stroke(), e.fill())
            : (e.fill(), e.stroke());
      }
      return (
        t,
        a,
        r,
        i,
        n = 1,
        l = 1,
        o = 0,
        s = !1,
        d = !1,
        c = !1,
        h = r.render
      ) => {
        let u = d || ae,
          p = c ? 1 : h.status.getFade(),
          g = l * i * r.size,
          b = k[r.index],
          v = t,
          E = a,
          x = !1 === c ? r : c;
        if (0 === p || 0 === n) return;
        if (
          (h.expandsWithDeath && (g *= 1 + 0.5 * (1 - p)),
          d !== re && (1 !== p || 1 !== n))
        )
          if (m.graphical.fancyAnimations)
            (u = re),
              (u.canvas.width = u.canvas.height = g * b.position.axis + 20 * i),
              (v =
                u.canvas.width / 2 -
                (g * b.position.axis * b.position.middle.x * Math.cos(o)) / 4),
              (E =
                u.canvas.height / 2 -
                (g * b.position.axis * b.position.middle.x * Math.sin(o)) / 4),
              (d = !1);
          else if (p * n < 0.5) return;
        if (
          ("object" != typeof u && (u = ae),
          (u.lineCap = "round"),
          (u.lineJoin = "round"),
          x.turrets.length !== b.turrets.length)
        )
          throw new Error("Mismatch turret number with mockup.");
        for (let e = 0; e < b.turrets.length; e++) {
          let t = b.turrets[e];
          if (0 === t.layer) {
            let a = t.direction + t.angle + o,
              r = t.offset * g;
            Fe(
              v + r * Math.cos(a),
              E + r * Math.sin(a),
              t,
              i,
              n,
              (g / i / t.size) * t.sizeFactor,
              x.turrets[e].facing + s * o,
              s,
              u,
              x.turrets[e],
              h
            );
          }
        }
        x.guns.update(),// 
          (u.lineWidth = Math.max(
            m.graphical.mininumBorderChunk,
            i * m.graphical.borderChunk
          ));
        let _ = h.status.getColor(),
          S = h.status.getBlend(),
          F = f(ge.grey, _, S),
          C = f(y(r.color), _, S);
        if (
          (r.invuln &&
            (Date.now() - r.invuln) % 200 < 100 &&
            ((F = f(F, ge.vlgrey, 0.3)), (C = f(C, ge.vlgrey, 0.3))),
          w(u, F),
          x.guns.length !== b.guns.length)
        )
          
          throw new Error("Mismatch gun number with mockup.");
        {
          let t = x.guns.getPositions();
          for (let a = 0; a < b.guns.length; a++) {
            let r = b.guns[a],
              i = 1 === r.aspect ? t[a] / 2 : t[a];
            e(
              u,
              v +
                g *
                  (r.offset * Math.cos(r.direction + r.angle + o) +
                    (r.length / 2 - i) * Math.cos(r.angle + o)),
              E +
                g *
                  (r.offset * Math.sin(r.direction + r.angle + o) +
                    (r.length / 2 - i) * Math.sin(r.angle + o)),
              g * (r.length / 2 - (1 === r.aspect ? t[a] : 0)),
              (g * r.width) / 2,
              r.aspect,
              r.angle + o
            );
          }
        }
        if (
          ((u.globalAlpha = 1),
          w(u, C),
          (function(e, t, a, r, i, n = 0) {
            if ((e.beginPath(), i))
              if (i instanceof Array) {
                let l = Math.cos(n),
                  o = Math.sin(n);
                for (let [n, s] of i)
                  e.lineTo(t + r * (n * l - s * o), a + r * (s * l + n * o));
                e.closePath();
              } else {
                if ("string" == typeof i) {
                  let l = new Path2D(i);
                  return (
                    e.save(),
                    e.translate(t, a),
                    e.scale(r, r),
                    (e.lineWidth /= r),
                    e.rotate(n),
                    m.graphical.inversedRender
                      ? (e.stroke(l), e.fill(l))
                      : (e.fill(l), e.stroke(l)),
                    void e.restore()
                  );
                }
                if (i < 0) {
                  i % 2 == 0 && (n += Math.PI / i);
                  let c = 1 - 6 / ((i = -i) * i);
                  m.graphical.pointy && (e.lineJoin = "miter"),
                    e.moveTo(t + r * Math.cos(n), a + r * Math.sin(n));
                  for (let h = 0; h < i; h++) {
                    var l = ((h + 1) / i) * 2 * Math.PI,
                      o = ((h + 0.5) / i) * 2 * Math.PI,
                      s = {
                        x: t + r * c * Math.cos(o + n),
                        y: a + r * c * Math.sin(o + n)
                      },
                      d = {
                        x: t + r * Math.cos(l + n),
                        y: a + r * Math.sin(l + n)
                      };
                    e.quadraticCurveTo(s.x, s.y, d.x, d.y);
                  }
                  return (
                    m.graphical.pointy && e.closePath(),
                    m.graphical.inversedRender
                      ? (e.stroke(), e.fill())
                      : (e.fill(), e.stroke()),
                    void (m.graphical.pointy && (e.lineJoin = "round"))
                  );
                }
                if (i > 0) {
                  i % 2 == 0 && (n += Math.PI / i);
                  for (let l = 0; l < i; l++) {
                    let o = (l / i) * 2 * Math.PI,
                      s = t + r * Math.cos(o + n),
                      d = a + r * Math.sin(o + n);
                    e.lineTo(s, d);
                  }
                  e.closePath();
                }
              }
            else e.arc(t, a, r, 0, 2 * Math.PI);
            m.graphical.inversedRender
              ? (e.stroke(), e.fill())
              : (e.fill(), e.stroke());
          })(u, v, E, (g / b.size) * b.realSize, b.shape, o),
          x.turrets.length !== b.turrets.length)
        )
          throw new Error("Mismatch turret number with mockup.");
        for (let e = 0; e < b.turrets.length; e++) {
          let t = b.turrets[e];
          if (1 === t.layer) {
            let a = t.direction + t.angle + o,
              r = t.offset * g;
            Fe(
              v + r * Math.cos(a),
              E + r * Math.sin(a),
              t,
              i,
              n,
              (g / i / t.size) * t.sizeFactor,
              x.turrets[e].facing + s * o,
              s,
              u,
              x.turrets[e],
              h
            );
          }
        }
        d ||
          u === ae ||
          (ae.save(),
          (ae.globalAlpha = n * p),
          ae.drawImage(u.canvas, t - v, a - E),
          ae.restore());
      };
    })();
    function Ce(e, t, a, n, l) {
      if (l < 0.05) return;
      let o = a.render.status.getFade();
      (o *= o), (ae.globalAlpha = o);
      let s = a.size * n,
        d = k[a.index],
        c = (s / d.size) * d.realSize;
      if (a.drawsHealth) {
        let r = a.render.health.get(),
          i = a.render.shield.get();
        if (r < 1 || i < 1) {
          let a = t + 1.1 * c + 15;
          (ae.globalAlpha = l * l * o),
            m.graphical.shieldbars
              ? (Se(e - s, e + s, a, 6 + m.graphical.barChunk, ge.black),
                i
                  ? (Se(e - s, e - s + 2 * s * r, a + 1.5, 3, ge.lgreen),
                    (ae.globalAlpha *= 0.7),
                    Se(e - s, e - s + 2 * s * i, a - 1.5, 3, ge.teal))
                  : Se(e - s, e - s + 2 * s * r, a, 4, ge.lgreen))
              : (Se(e - s, e + s, a, 3 + m.graphical.barChunk, ge.black),
                Se(e - s, e - s + 2 * s * r, a, 3, ge.lgreen),
                i &&
                  ((ae.globalAlpha *= 0.3 + 0.3 * i),
                  Se(e - s, e - s + 2 * s * i, a, 3, ge.teal))),
            (ae.globalAlpha = o);
        }
      }
      
      if ((a.nameplate && a.id !== W.playerid) || r.debugShowId >= 2) {
        null == a.render.textobjs && (a.render.textobjs = [ke(), ke()]);
        var h = a.name;
        r.debugShowId && (h = h ? h + ` [${a.id}]` : `[${a.id}]`);

    if (h.startsWith("[AI]")){
        a.render.textobjs[0].draw(h, e, t - c - 30, 16, "#bdcfff", "center"),
          a.render.textobjs[1].draw(
            i.handleLargeNumber(a.score, !0),
            e,
            t - c - 16,
            8,
         "#bdcfff", 
            "center"
          );
    }else if (h.startsWith("dev_")){
      h=h.slice(4)
        a.render.textobjs[0].draw(h, e, t - c - 30, 16, "#00ffff", "center"),
          a.render.textobjs[1].draw(
            i.handleLargeNumber(a.score, !0),
            e,
            t - c - 16,
            8,
         "#00ffff", 
            "center"
          );
    }else if (h.startsWith("bet_")){
      h=h.slice(4)
        a.render.textobjs[0].draw(h, e, t - c - 30, 16, ge.yellow, "center"),
          a.render.textobjs[1].draw(
            i.handleLargeNumber(a.score, !0),
            e,
            t - c - 16,
            8,
         ge.yellow, 
            "center"
          );
    }else{
          a.render.textobjs[0].draw(h, e, t - c - 30, 16, ge.guiwhite, "center"),
          a.render.textobjs[1].draw(
            i.handleLargeNumber(a.score, !0),
            e,
            t - c - 16,
            8,
         ge.guiwhite, 
            "center"
          );
    }
          (ae.globalAlpha = 1);
      }
     
     
    }
    
    
    
    window.requestAnimationFrame ||
      (window.requestAnimationFrame =
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(e) {
          window.setTimeout(e, 1e3 / 60);
        });
    const Me = (() => {
        const e = ie(0, 0.7, 1.5),
          t = ie(0, 2),
          a = class {
            constructor(e, t = !1) {
              (this.color = e), (this.zeroMin = t), (this.data = []);
            }
            addValue(e) {
              this.data.push(e);
            }
            draw(e, t, a, r) {
              for (; this.data.length > a; ) this.data.shift();
              let i = this.zeroMin ? 0 : Math.min(...this.data),
                n = Math.max(...this.data),
                l = n - i;
              if (0 !== l) {
                n > 0 && i < 0 && Se(e, e + a, t + (r * n) / l, 2, ge.guiwhite),
                  ae.beginPath(),
                  ae.moveTo(e, t + (r * (n - this.data[0])) / l);
                for (let a = 1; a < this.data.length; a++)
                  ae.lineTo(e + a, t + (r * (n - this.data[a])) / l);
                (ae.lineWidth = 1), (ae.strokeStyle = this.color), ae.stroke();
              }
            }
            getPeriodicAverage() {
              let e =
                  0.1 * (this.zeroMin ? 0 : Math.min(...this.data)) +
                  0.9 * Math.max(...this.data),
                t = !1,
                a = [];
              for (let r = this.data.length - 1; r >= 0; r--) {
                let i = this.data[r];
                if (i > e)
                  if (t) {
                    let e = a[a.length - 1];
                    i > e.max && ((e.max = i), (e.at = r));
                  } else (t = !0), a.push({ max: i, at: r });
                else t && (t = !1);
              }
              if (a.length < 2) return null;
              let r = a.pop().at,
                i = a.pop().at,
                n = 0;
              for (let e = r; e < i; e++) n += this.data[e];
              return n / (i - r);
            }
          },
          n = class {
            constructor() {
              this.objs = [];
            }
            get(e) {
              for (; e >= this.objs.length; ) this.objs.push(ke());
              return this.objs[e];
            }
          },
          l = (() => {
            function e(e, t, a, r, i, n) {
              let l = Math.cos((1 + n) * Math.PI);
              return (
                0.5 * (((1 + n) * a + e) * (l + 1) + (-n * r + t) * (1 - l))
              );
            }
            function t(e, t, a, r, i, n) {
              return t + (t - e) * n;
            }
            function a(e, t) {
              return (
                ((e, t) => ((e % t) + t) % t)(e - t + Math.PI, 2 * Math.PI) -
                Math.PI
              );
            }
            return (...i) =>
              m.lag.newPrediction
                ? ((e = !1, t = O.rendergap) => {
                    let i = !1 === e ? ce() - O.lastuplink : de() - e;
                    t = Math.max(t, 1e3 / m.roomSpeed / 30);
                    let n = r.noPredict ? 1 : i / t;
                    return {
                      predict: (e, t, a, r) => (n >= 1 ? t : e + (t - e) * n),
                      predictExtrapolate: (e, t, a, r) => e + (t - e) * n,
                      predictFacing: (e, t) => (n >= 1 ? t : e + a(t, e) * n),
                      predictFacingExtrapolate: (e, t) => e + a(t, e) * n,
                      getPrediction: () => n
                    };
                  })(...i)
                : ((r = he.time, i = O.rendergap) => {
                    let n = 0,
                      l = 0,
                      o = 0;
                    return (
                      (n = Math.max(de() - r - 80, -i)),
                      n > 150 && (n = 150),
                      (l = n / i),
                      (o = (30 * m.roomSpeed * n) / 1e3),
                      {
                        predict: (a, r, i, o) =>
                          n >= 0 ? t(a, r, 0, 0, 0, l) : e(a, r, i, o, 0, l),
                        predictExtrapolate: (a, r, i, o) =>
                          n >= 0 ? t(a, r, 0, 0, 0, l) : e(a, r, i, o, 0, l),
                        predictFacing: (e, t) => e + (1 + l) * a(t, e),
                        predictFacingExtrapolate: (e, t) =>
                          e + (1 + l) * a(t, e),
                        getPrediction: () => n
                      }
                    );
                  })(...i);
          })(),
          o = new a(ge.yellow),
          s = new a(ge.orange, !0),
          d = new a(ge.pink),
          c = new a(ge.teal),
          h = (() => {
            let e = [];
            for (let t = 0; t < 2 * m.gui.expectedMaxSkillLevel; t++)
              e.push(
                Math.log((4 * t) / m.gui.expectedMaxSkillLevel + 1) /
                  Math.log(5)
              );
            return t => e[t];
          })(),
          u = {
            skillNames: [
              ke(),
              ke(),
              ke(),
              ke(),
              ke(),
              ke(),
              ke(),
              ke(),
              ke(),
              ke()
            ],
            skillKeys: [
              ke(),
              ke(),
              ke(),
              ke(),
              ke(),
              ke(),
              ke(),
              ke(),
              ke(),
              ke()
            ],
            skillValues: [
              ke(),
              ke(),
              ke(),
              ke(),
              ke(),
              ke(),
              ke(),
              ke(),
              ke(),
              ke()
            ],
            skillPoints: ke(),
            score: ke(),
            name: ke(),
            class: ke(),
            debug: [ke(), ke(), ke(), ke(), ke(), ke(), ke()],
            lbtitle: ke(),
            leaderboard: [
              ke(),
              ke(),
              ke(),
              ke(),
              ke(),
              ke(),
              ke(),
              ke(),
              ke(),
              ke()
            ],
            upgradeNames: new n(),
            upgradeKeys: new n(),
            skipUpgrades: ke()
          };
        let g = null;
        return a => {
          let n = Date.now();
          g = n;
          let b = 0;
          L++;
          let w,
            x,
            _ =
              Math.max(r.screenWidth, (16 * r.screenHeight) / 9) /
              (r.screenWidth <= 1280
                ? 1280
                : r.screenWidth >= 1920
                ? 1920
                : r.screenWidth);
          {
            let e = l();
            b = e.getPrediction();
            let t = e.predict(he.lastx, he.cx, he.lastvx, he.vx),
              r = e.predict(he.lasty, he.cy, he.lastvy, he.vy);
            (he.renderx = t),
              (he.rendery = r),
              (w = a * he.renderx),
              (x = a * he.rendery);
          }
          if ((ve(ge.white, 1), ve(ge.guiblack, 0.1), r.radial))
            ae.save(),
              ae.translate(r.screenWidth / 2, r.screenHeight / 2),
              ae.rotate(
                Math.atan2(r.gameWidth / 2 - he.cx, r.gameHeight / 2 - he.cy)
              ),
              ae.translate(r.screenWidth / -2, r.screenHeight / -2),
              (ae.globalAlpha = 1),
              (ae.fillStyle = ge.white),
              ae.beginPath(),
              ae.arc(
                -w + r.screenWidth / 2 + (a * r.gameWidth) / 2,
                -x + r.screenHeight / 2 + (a * r.gameHeight) / 2,
                (a * r.gameWidth) / 2,
                0,
                2 * Math.PI
              ),
              ae.fill();
          else {
            (ae.globalAlpha = 1),
              (ae.fillStyle = ge.white),
              ae.fillRect(
                -w + r.screenWidth / 2,
                -x + r.screenHeight / 2,
                a * r.gameWidth,
                a * r.gameHeight
              );
            let e = H[0].length,
              t = H.length;
            for (let i = 0; i < t; i++) {
              let n = H[i];
              for (let l = 0; l < e; l++) {
                let o = (a * l * r.gameWidth) / e - w + r.screenWidth / 2,
                  s = (a * i * r.gameHeight) / t - x + r.screenHeight / 2,
                  d = (a * (l + 1) * r.gameWidth) / e - w + r.screenWidth / 2,
                  c = (a * (i + 1) * r.gameHeight) / t - x + r.screenHeight / 2;
                if (
                  !r.radial &&
                  (s >= r.screenHeight ||
                    d <= 0 ||
                    o >= r.screenWidth ||
                    c <= 0)
                )
                  continue;
                ae.globalAlpha = 0.3;
                let h = v(n[l]);
                h !== h.white &&
                  ((ae.fillStyle = h), ae.fillRect(o, s, d - o, c - s));
              }
            }
          }
          if (m.graphical.renderGrid) {
            (ae.lineWidth = 1),
              (ae.strokeStyle = ge.guiblack),
              (ae.globalAlpha = 0.04),
              ae.beginPath();
            let e = 30 * a;
            if (r.radial) {
              let t =
                30 *
                Math.ceil(
                  Math.sqrt(
                    r.screenWidth * r.screenWidth +
                      r.screenHeight * r.screenHeight
                  ) /
                    a /
                    a /
                    60
                ) *
                a;
              for (
                let a = ((r.screenWidth / 2 - w) % e) - t;
                a < r.screenWidth + t;
                a += e
              )
                ae.moveTo(a, -t), ae.lineTo(a, t + r.screenHeight);
              for (
                let a = ((r.screenHeight / 2 - x) % e) - t;
                a < r.screenHeight + t;
                a += e
              )
                ae.moveTo(-t, a), ae.lineTo(t + r.screenWidth, a);
            } else {
              for (
                let t = (r.screenWidth / 2 - w) % e;
                t < r.screenWidth;
                t += e
              )
                ae.moveTo(t, 0), ae.lineTo(t, r.screenHeight);
              for (
                let t = (r.screenHeight / 2 - x) % e;
                t < r.screenHeight;
                t += e
              )
                ae.moveTo(0, t), ae.lineTo(r.screenWidth, t);
            }
            ae.stroke(), (ae.globalAlpha = 1);
          }
          r.radial && ae.restore();
          {
            let e, t;
            if (((he.x = he.y = null), r.radial)) {
              ae.save(), ae.translate(r.screenWidth / 2, r.screenHeight / 2);
              let a = Math.atan2(
                r.gameWidth / 2 - he.cx,
                r.gameHeight / 2 - he.cy
              );
              (e = Math.cos(a)), (t = Math.sin(a)), ae.rotate(a);
            }
            for (let e of S)
              if (e.render.draws) {
                if (1 === e.render.status.getFade()) {
                  let t = l();
                  (e.render.x = t.predict(
                    e.render.lastx,
                    e.x,
                    e.render.lastvx,
                    e.vx
                  )),
                    (e.render.y = t.predict(
                      e.render.lasty,
                      e.y,
                      e.render.lastvy,
                      e.vy
                    )),
                    (e.render.f = t.predictFacing(e.render.lastf, e.facing));
                } else {
                  let t = l(e.render.lastRender, e.interval);
                  (e.render.x = t.predictExtrapolate(
                    e.render.lastx,
                    e.x,
                    e.render.lastvx,
                    e.vx
                  )),
                    (e.render.y = t.predictExtrapolate(
                      e.render.lasty,
                      e.y,
                      e.render.lastvy,
                      e.vy
                    )),
                    (e.render.f = t.predictFacingExtrapolate(
                      e.render.lastf,
                      e.facing
                    ));
                }
                if (e.id === W.playerid) {
                  0 == (1 & e.twiggle) &&
                    ((e.render.f = Math.atan2(te.target.y, te.target.x)),
                    r.radial &&
                      (e.render.f -= Math.atan2(
                        r.gameWidth / 2 - he.cx,
                        r.gameHeight / 2 - he.cy
                      )),
                    2 & e.twiggle && (e.render.f += Math.PI));
                  let t = a * e.render.x - w,
                    i = a * e.render.y - x;
                  r.radial
                    ? e.id === W.playerid &&
                      ((he.x = t + r.screenWidth / 2),
                      (he.y = i + r.screenHeight / 2))
                    : ((t += r.screenWidth / 2),
                      (i += r.screenHeight / 2),
                      e.id === W.playerid && ((he.x = t), (he.y = i)));
                }
              }
            for (let e of S) {
              if (!e.render.draws) continue;
              let t = a * e.render.x - w,
                i = a * e.render.y - x;
              r.radial || ((t += r.screenWidth / 2), (i += r.screenHeight / 2));
              let n =
                  e.id === W.playerid || r.showInvisible
                    ? 1
                    : Math.max(
                        0,
                        8e3 /
                          ((he.x - t) * (he.x - t) +
                            (he.y - i) * (he.y - i) +
                            1e4) -
                          0.1
                      ),
                l =
                  0 === e.alpha ? 0.25 * n : e.alpha * (1 - 0.4 * n) + 0.4 * n;
              Fe(
                t,
                i,
                e,
                a,
                l,
                0 === k[e.index].shape ? 1 : m.graphical.compensationScale,
                e.render.f,
                !1,
                !0
              );
            }
            if ((r.radial && ae.restore(), !m.graphical.screenshotMode))
              for (let i of S) {
                let n = a * i.render.x - w,
                  l = a * i.render.y - x;
                if (r.radial) {
                  let a = e * l + t * n;
                  (n = e * n - t * l + r.screenWidth / 2),
                    (l = a + r.screenHeight / 2);
                } else (n += r.screenWidth / 2), (l += r.screenHeight / 2);
                Ce(n, l, i, a, i.id === W.playerid ? 1 : i.alpha);
              }
          }
          if (r.hideGui) return;
          let F = (e, t) => {
            (r.screenWidth /= e),
              (r.screenHeight /= e),
              ae.scale(e, e),
              t || (_ *= e);
          };
          F(_, !0);
          W.__s.update();
          let C = B.get(),
            M = C.max;
          do {
            if (!r.showTree) break;
            let e = k.find(e => "Basic" === e.name);
            if (!e || !e.upgrades) break;
            let t = [],
              a = [],
              i = (e, r, n, { index: l, tier: o = 0 }) => {
                t.push({ x: e, y: r, colorIndex: n, index: l });
                let { upgrades: s } = k[l];
                switch (o) {
                  case 3:
                    return { width: 1, height: 1 };
                  case 2:
                    return (
                      s.forEach((t, a) => i(e, r + 2 + a, a, t)),
                      a.push([{ x: e, y: r }, { x: e, y: r + 1 + s.length }]),
                      { width: 1, height: 2 + s.length }
                    );
                  case 1:
                  case 0: {
                    let t = e,
                      n = s.map((n, l) => {
                        let d = 2 * (n.tier - o),
                          c = i(e, r + d, l, n);
                        return (
                          a.push([
                            { x: e, y: r + (0 === l ? 0 : 1) },
                            { x: e, y: r + d }
                          ]),
                          l + 1 === s.length &&
                            a.push([{ x: t, y: r + 1 }, { x: e, y: r + 1 }]),
                          (e += c.width),
                          c
                        );
                      });
                    return {
                      width: n.map(e => e.width).reduce((e, t) => e + t, 0),
                      height: 2 + Math.max(...n.map(e => e.height))
                    };
                  }
                }
              },
              n = i(0, 0, 0, { index: e.index }),
              l = Math.min(
                (0.9 * r.screenWidth) / n.width,
                (0.9 * r.screenHeight) / n.height
              );
            (ae.globalAlpha = 0.5),
              (ae.fillStyle = ge.guiwhite),
              Ee(0, 0, r.screenWidth, r.screenHeight);
            let o = l - 4;
            (ae.strokeStyle = ge.black), (ae.lineWidth = 2), ae.beginPath();
            for (let [e, t] of a) {
              let a = r.screenWidth / 2 + (e.x - n.width / 2) * l + 1 + 0.5 * o,
                i = r.screenHeight / 2 + (e.y - n.height / 2) * l + 1 + 0.5 * o,
                s = r.screenWidth / 2 + (t.x - n.width / 2) * l + 1 + 0.5 * o,
                d = r.screenHeight / 2 + (t.y - n.height / 2) * l + 1 + 0.5 * o;
              ae.moveTo(Math.round(a) + 0.5, Math.round(i) + 0.5),
                ae.lineTo(Math.round(s) + 0.5, Math.round(d) + 0.5);
            }
            ae.stroke();
            for (let { x: e, y: a, colorIndex: i, index: s } of t) {
              let t = r.screenWidth / 2 + (e - n.width / 2) * l + 2,
                d = r.screenHeight / 2 + (a - n.height / 2) * l + 2;
              (ae.globalAlpha = 1),
                (ae.fillStyle = y(i + 10)),
                Ee(t, d, o, o),
                (ae.globalAlpha = 0.2),
                (ae.fillStyle = y(i)),
                Ee(t, d, o, 0.6 * o),
                (ae.fillStyle = ge.black),
                Ee(t, d + 0.6 * o, o, 0.4 * o),
                (ae.globalAlpha = 1);
              let c = -Math.PI / 4,
                h = E(s, W.color),
                u = k[s].position,
                p = (0.8 * o) / u.axis,
                g = t + 0.5 * o - p * u.middle.x * Math.cos(c),
                m = d + 0.5 * o - p * u.middle.x * Math.sin(c);
              Fe(g, m, h, 0.5, 1, (p / h.size) * 2, c, !0),
                (ae.strokeStyle = ge.black),
                (ae.lineWidth = 2),
                Ee(t, d, o, o, !0);
            }
          } while (0);
          if (r.mobile && "joysticks" === te.control) {
            let e = Math.min(0.6 * r.screenWidth, 0.12 * r.screenHeight);
            (ae.globalAlpha = 0.3),
              (ae.fillStyle = "#ffffff"),
              ae.beginPath(),
              ae.arc(
                (1 * r.screenWidth) / 6,
                (2 * r.screenHeight) / 3,
                e,
                0,
                2 * Math.PI
              ),
              ae.arc(
                (5 * r.screenWidth) / 6,
                (2 * r.screenHeight) / 3,
                e,
                0,
                2 * Math.PI
              ),
              ae.fill();
          }
          r.mobile && F(1.4);
          {
            let a = 4,
              i = 18,
              n = r.screenWidth / 2,
              l = 20;
            r.mobile &&
              (l +=
                (r.canSkill ? ((200 / 3 + 20) / 1.4) * e.get() : 0) +
                (r.canUpgrade ? (120 / 1.4) * t.get() : 0));
            for (let e = T.length - 1; e >= 0; e--) {
              let t = T[e],
                  
                r = t.text;
              null == t.textobj && (t.textobj = ke()),
                null == t.len && (t.len = we(r, i - 4)),
                (ae.globalAlpha = 0.5 * t.alpha);
                if (r==="Thanks For Playing Maxtri!"){
                        Se(n - t.len / 2, n + t.len / 2, l + i / 2, i, f(
            ["#ff1000", "#ff9000", "#ffd300", "#00e00b", "#226ef6", "#a913cf"][
              Math.floor((Date.now() / 200) % 6)
            ],
            ["#ff9000", "#ffd300", "#00e00b", "#226ef6", "#a913cf", "#ff1000"][
              Math.floor((Date.now() / 200) % 6)
            ],
            (Date.now() / 200) % 1
          ))
                }else if (r==="WARNING: Arena Closed: Guard Arena Closers are Spawning"){
                        Se(n - t.len / 2, n + t.len / 2, l + i / 2, i, ge.yellow)
                  arenacloser=true
                }else if (r==="The Server has Reset..."){
                        Se(n - t.len / 2, n + t.len / 2, l + i / 2, i, ge.red)
                  arenacloser=true
                }else if (r==="Server overloaded! Restarting..."){
                        Se(n - t.len / 2, n + t.len / 2, l + i / 2, i, ge.red)
    
                }else 
                {
                Se(n - t.len / 2, n + t.len / 2, l + i / 2, i, ge.black)
                  
                }
                (ae.globalAlpha = Math.min(1, t.alpha)),
                t.textobj.draw(
                  r,
                  n,
                  l + i / 2,
                  i - 4,
                  ge.guiwhite,
                  "center",
                  !0
                ),
                (l += a + i),
                t.status > 1 && (l -= (a + i) * (1 - Math.sqrt(t.alpha))),
                t.status > 1
                  ? ((t.status -= 0.05), (t.alpha += 0.05))
                  : 0 === e &&
                    (T.length > 5 || Date.now() - t.time > 1e4) &&
                    ((t.status -= 0.05),
                    (t.alpha -= 0.05),
                    t.alpha <= 0 && T.shift());
            }
            ae.globalAlpha = 1;
          }
          if ((r.mobile && F(1 / 1.4), !r.mobile)) {
            (r.canSkill = W.points > 0 && W.skills.some(e => e.amount < e.cap)),
              e.set(0 + (r.canSkill || r.died || r.statHover)),
              r.clickables.stat.hide();
            let t = 4,
              a = 15,
              i = 35,
              n = 200,
              l = n,
              o = -20 - 2 * n + e.get() * (40 + 2 * n),
              s = r.screenHeight - 20 - a,
              d = 11,
              c = W.getStatNames(k[W.type].statnames || -1);
            W.skills.forEach(function(e) {
              d--;
              let p = c[d - 1],
                g = e.amount,
                f = ge[e.color],
                y = e.softcap,
                b = e.cap;
              if (y) {
                n = l;
                let e = m.gui.expectedMaxSkillLevel,
                  c = y < b;
                if (
                  (y > e && (e = y),
                  Se(
                    o + a / 2,
                    o - a / 2 + n * h(y),
                    s + a / 2,
                    a - 3 + m.graphical.barChunk,
                    ge.black
                  ),
                  Se(
                    o + a / 2,
                    o + a / 2 + (n - i) * h(y),
                    s + a / 2,
                    a - 3,
                    ge.grey
                  ),
                  Se(
                    o + a / 2,
                    o + a / 2 + (n - i) * h(g),
                    s + a / 2,
                    a - 3.5,
                    f
                  ),
                  c)
                ) {
                  (ae.lineWidth = 1), (ae.strokeStyle = ge.grey);
                  for (let t = y + 1; t < e; t++)
                    _e(
                      o + (n - i) * h(t),
                      s + 1.5,
                      o + (n - i) * h(t),
                      s - 3 + a
                    );
                }
                (ae.strokeStyle = ge.black), (ae.lineWidth = 1);
                for (let e = 1; e < g + 1; e++)
                  _e(
                    o + (n - i) * h(e),
                    s + 1.5,
                    o + (n - i) * h(e),
                    s - 3 + a
                  );
                n = l * h(e);
                let v =
                  g === b
                    ? f
                    : !W.points || (y !== b && g === y)
                    ? ge.grey
                    : ge.guiwhite;
                u.skillNames[d - 1].draw(
                  p,
                  Math.round(o + n / 2) + 0.5,
                  s + a / 2,
                  a - 5,
                  v,
                  "center",
                  !0
                ),
                  u.skillKeys[d - 1].draw(
                    "[" + (d % 10) + "]",
                    Math.round(o + n - 0.25 * a) - 1.5,
                    s + a / 2,
                    a - 5,
                    v,
                    "right",
                    !0
                  ),
                  v === ge.guiwhite &&
                    r.clickables.stat.place(d - 1, o * _, s * _, n * _, a * _),
                  g &&
                    u.skillValues[d - 1].draw(
                      v === f ? "MAX" : "+" + g,
                      Math.round(o + n + 4) + 0.5,
                      s + a / 2,
                      a - 5,
                      f,
                      "left",
                      !0
                    ),
                  (s -= a + t);
              }
            }),
              r.clickables.hover.place(
                0,
                0,
                s * _,
                0.8 * n * _,
                0.8 * (r.screenHeight - s) * _
              ),
              W.points > 1 &&
                u.skillPoints.draw(
                  "x" + W.points,
                  Math.round(o + n - 2) + 0.5,
                  Math.round(s + a - 4) + 0.5,
                  20,
                  ge.guiwhite,
                  "right"
                );
          }
          {
            let e = 4,
              t = 400,
              a = 20,
              n = (r.screenWidth - t) / 2,
              l = r.screenHeight - 22 - a;
            if (!p && !r.mobile && r.died) {
              let e = document.getElementById("respawn-banner");
              e && e.clientHeight > 0 && (l -= (e.clientHeight + 16) / _ + 4);
            }
            (ae.lineWidth = 1),
              Se(n, n + t, l + a / 2, a - 1 + m.graphical.barChunk, ge.black),
              Se(n, n + t, l + a / 2, a - 4, ge.black),
              Se(n, n + t * W.__s.getProgress(), l + a / 2, a - 2.5, ge.gold),
              u.class.draw(
                "Lvl " + W.__s.getLevel() + " " + k[W.type].name,
                n + t / 2,
                l + a / 2,
                a - 4,
                ge.guiwhite,
                "center",
                !0
              ),
              (a = 14),
              (l -= a + e),
              Se(
                n + 0.1 * t,
                n + 0.9 * t,
                l + a / 2,
                a - 3 + m.graphical.barChunk,
                ge.black
              ),
              Se(n + 0.1 * t, n + 0.9 * t, l + a / 2, a - 3, ge.black),
              Se(n + 0.1 * t,
                n +
                  t * (0.1 + 0.8 * (M ? Math.min(1, W.__s.getScore() / M) : 1)),
                l + a / 2,
                a - 3.5,
                ge.green
              ),
              u.score.draw(
                "Score: " + i.formatLargeNumber(W.__s.getScore()),
                n + t / 2,
                l + a / 2,
                a,
                ge.guiwhite,
                "center",
                !0
              ),
              (ae.lineWidth = 4),
              u.name.draw(
                he.name,
                Math.round(n + t / 2) + 0.5,
                Math.round(l - 10 - e) + 0.5,
                40,
                ge.guiwhite,
                "center"
              );
          }
          r.mobile && F(0.8);
          {
            let a = (200 * r.gameWidth * 2) / (r.gameWidth + r.gameHeight),
              i = (200 * r.gameHeight * 2) / (r.gameWidth + r.gameHeight),
              n = r.screenWidth - 20,
              l = r.screenHeight - 20,
              h = (e, t, a, i, n) => {
                if (!r.radial) {
                  let r = H[0].length,
                    n = H.length,
                    l = a / r,
                    o = i / n;
                  for (let a = 0; a < n; a++) {
                    let i = H[a];
                    for (let n = 0; n < r; n++)
                      (ae.globalAlpha = 0.6),
                        (ae.fillStyle = v(i[n])),
                        Ee(e + n * l, t + a * o, l, o);
                  }
                }
                (ae.globalAlpha = 0.3),
                  (ae.fillStyle = f(ge.grey, ge.vlgrey)),
                  r.radial ? Ee(e + a / 2, t + i / 2, a / 2) : Ee(e, t, a, i);
                for (let i of A.get())
                  (ae.fillStyle = f(y(i.color), ge.black, 0.3)),
                    (ae.globalAlpha = i.alpha),
                    2 === i.type
                      ? Ee(
                          e + ((i.x - i.size) / r.gameWidth) * a - 0.4,
                          t + ((i.y - i.size) / r.gameWidth) * a - 1,
                          ((2 * i.size) / r.gameWidth) * a + 0.2,
                          ((2 * i.size) / r.gameWidth) * a + 0.2
                        )
                      : 1 === i.type
                      ? xe(
                          e + (i.x / r.gameWidth) * a,
                          t + (i.y / r.gameWidth) * a,
                          (i.size / r.gameWidth) * a + 0.2
                        )
                      : i.id !== W.playerid &&
                        xe(
                          e + (i.x / r.gameWidth) * a,
                          t + (i.y / r.gameWidth) * a,
                          n
                        );
                (ae.fillStyle = ge.black),
                  (ae.globalAlpha = 1),
                  xe(
                    e + (he.cx / r.gameWidth) * a,
                    t + (he.cy / r.gameWidth) * a,
                    n
                  ),
                  (ae.strokeStyle = ge.black),
                  (ae.lineWidth = 3),
                  r.radial
                    ? xe(e + a / 2, t + i / 2, a / 2, !0)
                    : roundRect(e, t, a, i, !0);
              };
            if (r.mobile) {
              (n -= a),
                h(
                  20,
                  20 +
                    ((r.canSkill ? (200 / 3 + 20 + 20) * e.get() : 0) +
                      (r.canUpgrade ? 140 * t.get() : 0)),
                  a,
                  i,
                  4
                );
            } else (n -= a), (l -= i), h(n, l, a, i, 2);
            let p = l - 10,
              g = O.latency.reduce((e, t) => e + t, 0) / O.latency.length,
              w = Math.sqrt(he.vx * he.vx + he.vy * he.vy);
            if (
              (r.showDebug &&
                (Ee(n, l - 40, a, 30),
                o.addValue(b),
                o.draw(n, l - 40, a, 30),
                s.addValue(w),
                s.draw(n, l - 40, a, 30),
                c.addValue(O.rendergap),
                c.draw(n, l - 40, a, 30),
                d.addValue(g),
                d.draw(n, l - 40, a, 30),
                (p -= 40)),
              m.graphical.screenshotMode)
            )
              u.debug[6].draw(
                "Maxtri",
                n + a,
                p - 2,
                15,
                ge.lgreen,
                "right"
              );
            else {
              if (r.showDebug) {
                u.debug[6].draw(
                  "Maxtri",
                  n + a,
                  p - 84 - 2,
                  15,
                  ge.lgreen,
                  "right"
                );
                let e = s.getPeriodicAverage();
                u.debug[5].draw(
                  "Tank Speed: " +
                    w.toFixed(2) +
                    " gu/s" +
                    (e && e >= 0.005 ? ` (${e.toFixed(2)} gu/s)` : ""),
                  n + a,
                  p - 70,
                  10,
                  ge.guiwhite,
                  "right"
                ),
                  u.debug[4].draw(
                    "Prediction: " + b.toFixed(3),
                    n + a,
                    p - 56,
                    10,
                    ge.guiwhite,
                    "right"
                  ),
                  u.debug[3].draw(
                    "Update Rate: " + O.updatetime + "Hz",
                    n + a,
                    p - 42,
                    10,
                    ge.guiwhite,
                    "right"
                  );
              } else
                u.debug[6].draw(
                  "Maxtri",
                  n + a,
                  p - 42 - 2,
                  15,
                  ge.lgreen,
                  "right"
                );
              u.debug[2].draw(
                "Client Speed: " + O.rendertime + " FPS",
                n + a,
                p - 28,
                10,
                O.rendertime > 10 ? ge.guiwhite : ge.orange,
                "right"
              ),
                u.debug[1].draw(
                  "Server Speed: " + (100 * W.fps).toFixed(2) + "%",
                  n + a,
                  p - 14,
                  10,
                  1 === W.fps ? ge.guiwhite : ge.orange,
                  "right"
                ),
                u.debug[0].draw(
                  g.toFixed(1) +
                    " ms  " +
                    r.server.code +
                    " :" +
                    r.server.type +
                    ":",
                  n + a,
                  p,
                  10,
                  ge.guiwhite,
                  "right"
                );
            }
          }
          if (
            (r.mobile && F(1.25),
            r.mobile && F(1.4),
            !m.graphical.screenshotMode)
          ) {
            let a = 12,
              n = 200,
              l = 14,
              o = r.screenWidth - n - 20,
              s = 20 + l + 14;
            r.mobile &&
              (s +=
                (r.canSkill ? (200 / 3 / 1.4) * e.get() : 0) +
                (r.canUpgrade && 40 + 114 * W.upgrades.length > 1.4 * o
                  ? (100 / 1.4) * t.get()
                  : 0)),
              C.data.length > 0 &&
                u.lbtitle.draw(
                  "Scoreboard",
                  Math.round(o + n / 2) + 0.5,
                  Math.round(s - 10) + 0.5,
                  l + 9,
                  ge.guiwhite,
                  "center"
                );
          
            for (let e = 0; e < C.data.length && (!r.mobile || e < 6); e++) {
              
              let t = C.data[e];
              Se(o, o + n, s + l / 2, l + 2 + m.graphical.barChunk, ge.black),
                Se(o, o + n, s + l / 2, l + 2, ge.black),
                Se(
                  o,
                  o + n * Math.min(1, t.score / M),
                  s + l / 2,
                  l - 0,
                  t.barColor
                );
                if (t.label.startsWith("dev_")){
                      var name=t.label.slice(4)
                     u.leaderboard[e].draw(
               
                 name + " - " + i.handleLargeNumber(Math.round(t.score)),
                  o + n / 2,
                  s + l / 2,
                  l -0,
                 "#00ffff",
                  "center",
                  !0
                );
                }else if (t.label.startsWith("bet_")){
                      var name=t.label.slice(4)
                     u.leaderboard[e].draw(
               
                 name + " - " + i.handleLargeNumber(Math.round(t.score)),
                  o + n / 2,
                  s + l / 2,
                  l -0,
                  ge.yellow,
                  "center",
                  !0
                );
                }else if (t.label.startsWith("[AI]")){
                      var name=t.label
                     u.leaderboard[e].draw(
               
                 name + " - " + i.handleLargeNumber(Math.round(t.score)),
                  o + n / 2,
                  s + l / 2,
                  l -0,
                "#bdcfff",
                  "center",
                  !0
                );
                }else{
                u.leaderboard[e].draw(
               
                  t.label + " - " + i.handleLargeNumber(Math.round(t.score)),
                  o + n / 2,
                  s + l / 2,
                  l -0,
                  ge.guiwhite,
                  "center",
                  !0
                );
                }
              let r = l / t.position.axis,
                d = o - 1.5 * l - r * t.position.middle.x * 0.707,
                c = s + 0.5 * l + r * t.position.middle.x * 0.707;
              Fe(
                d,
                c,
                t.image,
                1 / r,
                1,
                (r * r) / t.image.size,
                -Math.PI / 4,
                !0
              ),
                (s += a + l);
            }
          }
          r.mobile && F(1 / 1.4);
          {
            (r.canUpgrade = W.upgrades.length > 0 && !(r.mobile && r.died)),
              t.set(+r.canUpgrade);
            let e = t.get();
            if ((r.clickables.upgrade.hide(), r.canUpgrade)) {
              let t = 14,
                a = 100,
                i = 100,
                n = 2 * e * 20 - 20,
                l = 20,
                o = n,
                s = 0,
                d = l;
              D += 0.01;
                    let select = 0;
              let c = 0;
              W.upgrades.forEach(h => {
                l > d && (d = l),
                  (s = n),
                  r.clickables.upgrade.place(c, n * _, l * _, a * _, i * _);
        
          let p = y((c % 9) + 37),
                  g = y(c % 9);
                if (c >= 9) {
                  let e = (c + Math.floor(c / 9)) % 9;
                  (p = f(p, y(e + 10))), (g = f(g, y(e)));
                }
                (ae.globalAlpha = 0.5),
                  (ae.fillStyle = y((c % 200) + 37)),
                  Ee(n, l, a, i),
                  (ae.globalAlpha = 0.1),
                  (ae.fillStyle =y((c % 200) + 37)),
                  Ee(n, l, a, 0.6 * i),
                  (ae.fillStyle = ge.black),
                  Ee(n, l + 0.6 * i, a, 0.4 * i),
                  (ae.globalAlpha = 1);
                let m = E(h, W.color),
                  b = k[h].position,
                  v = (0.6 * a) / b.axis,
                  w = n + 0.5 * a - v * b.middle.x * Math.cos(D),
                  x = l + 0.5 * i - v * b.middle.x * Math.sin(D);
                Fe(w, x, m, 1, 1, v / m.size, D, !0);
                let S = (r.help["KEY_CHOOSE_" + (c + 1)] || "")
                  .toLowerCase()
                  .trim();
                !r.mobile && S
                  ? (u.upgradeNames
                      .get(c)
                      .draw(
                        m.name,
                        n + (0.9 * a) / 2,
                        l + i - 6,
                        i / 8 - 3,
                        ge.guiwhite,
                        "center"
                      ),
                    u.upgradeKeys
                      .get(c)
                      .draw(
                        "",
                        n + a - 4,
                        l + i - 6,
                        i / 8 - 3,
                        ge.guiwhite,
                        "right"
                      ))
                  : u.upgradeNames
                      .get(c)
                      .draw(
                        m.name,
                        n + a / 2,
                        l + i - 6,
                        i / 8 - 3,
                        ge.guiwhite,
                        "center"
                      ),
                  (ae.strokeStyle = ge.black),
                  (ae.globalAlpha = 1),
                  (ae.lineWidth = 3),
                  roundRect(n, l, a, i, !0),
                  c++,
                  c % 7 != 0 || r.mobile
                    ? (n += e * (a + t))
                    : ((n = o), (l += i + t));
              });
              let h = 14,
                p = "Don't Upgrade",
                g = we(p, h - 3) + 10,
                b = (s + a + t + o - 15) / 2,
                v = d + i + t;
              Se(
                b - g / 2,
                b + g / 2,
                v + h / 2,
                h + m.graphical.barChunk,
                ge.black
              ),
                Se(b - g / 2, b + g / 2, v + h / 2, h, ge.white),
                u.skipUpgrades.draw(
                  p,
                  b,
                  v + h / 2,
                  h - 2,
                  ge.guiwhite,
                  "center",
                  !0
                ),
                r.clickables.skipUpgrades.place(
                  0,
                  (b - g / 2) * _,
                  v * _,
                  g * _,
                  h * _
                );
            } else
              r.clickables.upgrade.hide(), r.clickables.skipUpgrades.hide();
          }
          if (r.mobile) {
            (r.canSkill =
              W.points > 0 &&
              W.skills.some(e => e.amount < e.cap) &&
              !r.canUpgrade),
              e.set(0 + (r.canSkill || r.died));
            let t = e.get();
            r.clickables.stat.hide();
            let a = 14,
              i = 100,
              n = 200 / 3,
              l = 2 * t * 20 - 20,
              o = 20,
              s = 0,
              d = W.getStatNames(k[W.type].statnames || -1);
            r.canSkill &&
              (W.skills.forEach((e, c) => {
                let h = e.softcap;
                if (h <= 0) return;
                let p = e.amount,
                  g = ge[e.color],
                  m = e.cap,
                  f = d[9 - c].split(/\s+/),
                  y = Math.floor(f.length / 2),
                  [b, v] =
                    1 === f.length ? [f, null] : [f.slice(0, y), f.slice(y)];
                (ae.globalAlpha = 0.5),
                  (ae.fillStyle = g),
                  Ee(l, o, i, (2 * n) / 3),
                  (ae.globalAlpha = 0.1),
                  (ae.fillStyle = ge.black),
                  Ee(
                    l,
                    o + (((2 * n) / 3) * 2) / 3,
                    i,
                    (((2 * n) / 3) * 1) / 3
                  ),
                  (ae.globalAlpha = 1),
                  (ae.fillStyle = ge.guiwhite),
                  Ee(l, o + (2 * n) / 3, i, (1 * n) / 3),
                  (ae.fillStyle = g),
                  Ee(l, o + (2 * n) / 3, (i * p) / h, (1 * n) / 3),
                  (ae.strokeStyle = ge.black),
                  (ae.lineWidth = 1);
                for (let e = 1; e < m; e++) {
                  let t = l + i * (e / h);
                  _e(t, o + (2 * n) / 3, t, o + n);
                }
                p === m ||
                  !W.points ||
                  (h !== m && p === h) ||
                  r.clickables.stat.place(9 - c, l * _, o * _, i * _, n * _),
                  v
                    ? (u.skillNames[c].draw(
                        v,
                        l + i / 2,
                        o + 0.55 * n,
                        n / 6,
                        ge.guiwhite,
                        "center"
                      ),
                      u.skillNames[c].draw(
                        b,
                        l + i / 2,
                        o + 0.3 * n,
                        n / 6,
                        ge.guiwhite,
                        "center"
                      ))
                    : u.skillNames[c].draw(
                        b,
                        l + i / 2,
                        o + 0.425 * n,
                        n / 6,
                        ge.guiwhite,
                        "center"
                      ),
                  p > 0 &&
                    u.skillValues[c].draw(
                      p >= h ? "MAX" : "+" + p,
                      Math.round(l + i / 2) + 0.5,
                      o + 1.3 * n,
                      n / 4,
                      g,
                      "center"
                    ),
                  (ae.strokeStyle = ge.black),
                  (ae.globalAlpha = 1),
                  (ae.lineWidth = 3),
                  _e(l, o + (2 * n) / 3, l + i, o + (2 * n) / 3),
                  Ee(l, o, i, n, !0),
                  (l += t * (i + a)),
                  s++;
              }),
              W.points > 1 &&
                u.skillPoints.draw(
                  "x" + W.points,
                  Math.round(l) + 0.5,
                  Math.round(o + 20) + 0.5,
                  20,
                  ge.guiwhite,
                  "left"
                ));
          }
          F(1 / _, !0);
        };
      })(),
      Ae = (() => {
        let e = {
          taunt: ke(),
          level: ke(),
          score: ke(),
          time: ke(),
          kills: ke(),
          death: ke(),
          playagain: ke()
        };
        return () => {
          ve(ge.black, 0.25);
          let t = r.screenWidth / 2,
            a = r.screenHeight / 2 - 50,
            n = E(W.type, W.color),
            l = k[W.type].position,
            o = 140 / l.axis,
            s = r.screenWidth / 2 - o * l.middle.x * 0.707,
            d = r.screenHeight / 2 - 35 + o * l.middle.x * 0.707;
          if (!p && !r.mobile) {
            let e =
                Math.max(r.screenWidth, (16 * r.screenHeight) / 9) /
                (r.screenWidth <= 1280
                  ? 1280
                  : r.screenWidth >= 1920
                  ? 1920
                  : r.screenWidth),
              t = r.screenHeight - 240 * e,
              i = document.getElementById("respawn-banner");
            i && i.clientHeight > 0 && (t -= i.clientHeight + 16 + 4 * e);
            let n = 0;
            t < a && (n = t - a), (a += n), (d += n);
          }
          Fe(
            s - 190 - 70,
            d - 10,
            n,
            1.5,
            1,
            (0.5 * o) / n.realSize,
            -Math.PI / 4,
            !0
          ),
            e.taunt.draw("lol you died", t, a - 80, 8, ge.guiwhite, "center"),
            e.level.draw(
              "Level " + W.__s.getLevel() + " " + k[W.type].name,
              t - 170,
              a - 30,
              24,
              ge.guiwhite
            ),
            e.score.draw(
              "Final score: " +
                i.formatLargeNumber(Math.round(r.finalScore.get())),
              t - 170,
              a + 25,
              50,
              ge.guiwhite
            ),
            e.time.draw(
              "⌚ Survived for " +
                i.timeForHumans(Math.round(r.finalLifetime.get())),
              t - 170,
              a + 55,
              16,
              ge.guiwhite
            ),
            e.kills.draw(
              (() => {
                let e = [
                    Math.round(r.finalKills[0].get()),
                    Math.round(r.finalKills[1].get()),
                    Math.round(r.finalKills[2].get())
                  ],
                  t = e[0] + 0.5 * e[1] + 3 * e[2],
                  a =
                    (0 === t
                      ? "🌼"
                      : t < 4
                      ? "🎯"
                      : t < 8
                      ? "💥"
                      : t < 15
                      ? "💢"
                      : t < 25
                      ? "🔥"
                      : t < 50
                      ? "💣"
                      : t < 75
                      ? "👺"
                      : t < 100
                      ? "🌶️"
                      : "💯") + " ";
                if (0 === t) return a + "A true pacifist";
                let i = [];
                return (
                  e[0] && i.push(e[0] + " kills"),
                  e[1] && i.push(e[1] + " assists"),
                  e[2] && i.push(e[2] + " visitors defeated"),
                  a + i.join(" and ")
                );
              })(),
              t - 170,
              a + 77,
              16,
              ge.guiwhite
            ),
            e.death.draw(
              r.finalKillers.length
                ? "🔪 Succumbed to " +
                    r.finalKillers
                      .map(e => i.addArticle(k[e].name))
                      .join(" and ")
                : "🤷 Well that was kinda dumb huh",
              t - 170,
              a + 99,
              16,
              ge.guiwhite
            );
          let c = Math.ceil((r.respawnOn - Date.now()) / 1e3);
          e.playagain.draw(
            c > 0
              ? `You may respawn in ${c} second${1 === c ? "" : "s"}`
              : "joysticks" === te.control
              ? "Tap to respawn!"
              : "Press enter to respawn!",
            t,
            a + 125,
            16,
            ge.guiwhite,
            "center"
          );
        };
      })();
    (window.onbeforeunload = () => !(!r.isInGame || r.died) || null),
      (window.$createProfile = (() => {
        let e = { upgradeName: ke(), upgradeKey: ke() };
        return (t, a = -1, r = 200, i = -Math.PI / 4) => {
          let n = ae.canvas.width,
            l = ae.canvas.height,
            o = (ae.canvas.width = r),
            s = (ae.canvas.height = r);
          -1 === a
            ? ae.clearRect(0, 0, o, s)
            : ((ae.fillStyle = ge.white),
              ae.fillRect(0, 0, o, s),
              (ae.globalAlpha = 0.5),
              (ae.fillStyle = y(a + 1)),
              Ee(0, 0, o, s),
              (ae.globalAlpha = 0.1),
              (ae.fillStyle = y(a)),
              Ee(0, 0, o, 0.6 * s),
              (ae.fillStyle = ge.black),
              Ee(0, 0.6 * s, o, 0.4 * s),
              (ae.globalAlpha = 1));
          let d = E(t, W.color),
            c = k[t].position,
            h = (0.6 * o) / c.axis,
            u = 0.5 * o - h * c.middle.x * Math.cos(i),
            p = 0.5 * s - h * c.middle.x * Math.sin(i);
          Fe(u, p, d, 1, 1, h / d.size, i, !0),
            -1 !== a &&
              (e.upgradeName.draw(
                d.name,
                (0.9 * o) / 2,
                s - 6,
                s / 8 - 3,
                ge.guiwhite,
                "center"
              ),
              (ae.strokeStyle = ge.black),
              (ae.globalAlpha = 1),
              (ae.lineWidth = 3),
              Ee(0, 0, o, s, !0));
          let g = ae.canvas.toDataURL();
          return (ae.canvas.width = n), (ae.canvas.height = l), g;
        };
      })());
    const Be = (() => {
        let e = { connecting: ke(), message: ke(), tip: ke() },
          t = [
            [
              "Tip: You can view and edit your keybinds in the options menu.",
              "Tip: You can play on mobile by just going to arras.io on your phone!"
            ],
            [
              "Tip: You can have the shield and health bar be separated by going to the options menu.",
              "Tip: If arras is having a low frame rate, you can try enabling low graphics in the options menu.",
              "Tip: You can make traps rounded with the classic trap setting in the options menu.",
              "Tip: You can create your own private server with the template in the link on the options menu.",
              "Tip: You can create your own theme with the custom theme makerin the link on the options menu."
            ],
            [
              "Teaming in FFA or FFA Maze is frowned upon, but when taken to the extremes, you can be punished.",
              "Witch hunting is when you continuously target someone and follow them. This is frowned upon, but when taken to the extremes, you can be punished.",
              "Multiboxing is when you use a script to control multiple tanks at the same time. This is considered CHEATING and will result in a ban."
            ]
          ],
          a = t[Math.floor(Math.random() * t.length)],
          i = a[Math.floor(Math.random() * a.length)];
        return () => {
          ve(ge.white, 1),
            e.connecting.draw(
              "Connecting...",
              r.screenWidth / 2,
              r.screenHeight / 2,
              30,
              ge.guiwhite,
              "center"
            ),
            e.message.draw(
              r.message,
              r.screenWidth / 2,
              r.screenHeight / 2 + 30,
              15,
              ge.lgreen,
              "center"
            ),
            e.message.draw(
              i,
              r.screenWidth / 2,
              r.screenHeight / 2 + 75,
              15,
              ge.guiwhite,
              "center"
            );
        };
      })(),
      De = (() => {
        let e = { disconnected: ke(), message: ke() };
        return () => {
          
            if (arenacloser===true){
              ve(f(ge.gold, ge.gold, 0.3), 0.25),
            e.disconnected.draw(
              "💀 Arena Closed 💀",
              r.screenWidth / 2,
              r.screenHeight / 2,
              30,
              ge.guiwhite,
              "center"
            );
             e.message.draw(
             "The Arena Has Closed. Please Wait Until The Server Restarts.",
              r.screenWidth / 2,
              r.screenHeight / 2 + 30,
              15,
              ge.orange,
              "center"
            );
          }else{
            ve(f(ge.red, ge.guiblack, 0.3), 0.25),
            e.disconnected.draw(
              "💀 Disconnected 💀",
              r.screenWidth / 2,
              r.screenHeight / 2,
              30,
              ge.guiwhite,
              "center"
            );
            e.message.draw(
             r.message,
              r.screenWidth / 2,
              r.screenHeight / 2 + 30,
              15,
              ge.orange,
              "center"
            );  
          }
           
        };
      })();
    function Te() {
      (r.animLoopHandle = requestAnimationFrame(Te)),
        (he.renderv += (he.view - he.renderv) / 30),
        (ae.lineCap = "round"),
        (ae.lineJoin = "round"),
        r.gameStart &&
          !r.disconnected &&
          ((r.time = de()),
          r.time - K > 1e3 &&
            ((K = r.time),
            (O.rendertime = L),
            (L = 0),
            (O.updatetime = R),
            (R = 0)),
          (O.lag = r.time - he.time)),
        r.gameStart && k.length > 0 ? Me(Y()) : r.disconnected || Be(),
        r.died && Ae(),
        r.disconnected && De(),
        (r.died || r.disconnected) && l.drawCanvas(ae);
    }
    let Oe = r.mobile
      ? 0
      : Math.max(
          0,
          1 - Math.abs(Date.now() - new Date(2019, 11, 25)) / 20736e5
        );
    if (Oe) {
      let e = document.createElement("canvas");
      (e.style.position = "absolute"),
        (e.style.top = "0"),
        document.body.insertBefore(e, document.body.firstChild);
      let t = e.getContext("2d"),
        a = [],
        i = () => {
          e.width !== window.innerWidth && (e.width = window.innerWidth),
            e.height !== window.innerHeight && (e.height = window.innerHeight),
            t.clearRect(0, 0, e.width, e.height),
            (t.fillStyle = "#ffffff");
          for (let r of a) {
            (r.x += 5 / r.r + Math.random()),
              (r.y += 12.5 / r.r + Math.random());
            let a = 2 * Math.min(0.4, 0.9 - r.y / e.height);
            a > 0
              ? ((t.globalAlpha = a),
                t.beginPath(),
                t.arc(r.x, r.y, r.r, 0, 2 * Math.PI),
                t.fill())
              : (r.gone = !0);
          }
          if (0.001 * e.width * Oe > Math.random()) {
            let t = e.width * (1.5 * Math.random() - 0.5),
              r = 2 + Math.random() * Math.random() * 4;
            a.push({ x: t, y: -50 - 100 * Math.random(), r: r });
          }
          r.gameStart ? e.remove() : requestAnimationFrame(i);
        };
      setInterval(() => {
        a = a.filter(e => !e.gone);
      }, 2e3),
        i();
    }
    let Ke = new Date(),
      Le =
        "en-US" === navigator.language && r.timezone >= -7 && r.timezone <= -4,
      Re = 6 === Ke.getMonth() && 4 === Ke.getDate(),
      He =
        (11 === Ke.getMonth() && 31 === Ke.getDate()) ||
        (0 === Ke.getMonth() && Ke.getDate() <= 3);
    if (!r.mobile && ((Re && Le) || He)) {
      let e = document.createElement("canvas");
      (e.style.position = "absolute"),
        (e.style.top = "0"),
        document.body.insertBefore(e, document.body.firstChild);
      let t = e.getContext("2d"),
        a = [
          [164, 14, 14],
          [230, 80, 0],
          [230, 119, 0],
          [47, 127, 51],
          [23, 78, 166],
          [123, 31, 163]
        ],
        i = () => a[Math.floor(Math.random() * a.length)],
        n = [],
        l = () => {
          (e.width === window.innerWidth && e.height === window.innerHeight) ||
            ((e.width = window.innerWidth),
            (e.height = window.innerHeight),
            (n.length = 0),
            t.clearRect(0, 0, e.width, e.height),
            (t.fillStyle = "rgba(255, 255, 255, 0.01)"),
            t.fillRect(0, 0, e.width, e.height),
            (t.lineWidth = 2.5),
            (t.lineCap = "round")),
            (t.globalCompositeOperation = "destination-out"),
            (t.fillStyle = "rgba(0, 0, 0, 0.15)"),
            t.fillRect(0, 0, e.width, e.height),
            (t.globalCompositeOperation = "lighter");
          for (let e of n) {
            let a = e.x,
              r = e.y;
            (e.vy += 0.2),
              (e.x += e.vx),
              (e.y += e.vy),
              (e.vy *= 0.99),
              (e.vx *= 0.99),
              e.time--;
            let l =
              e.time > 0 ? (e.primary || e.time >= 10 ? 1 : e.time / 10) : 0;
            if (l > 0)
              (t.strokeStyle = `rgba(${e.color[0]}, ${e.color[1]}, ${
                e.color[2]
              }, ${l})`),
                t.beginPath(),
                t.moveTo(a, r),
                t.lineTo(e.x, e.y),
                t.stroke();
            else {
              if (e.primary && !e.gone) {
                let t = Math.floor(5 * Math.random()) + 30,
                  a = 0.5 * Math.random() + 3,
                  r = 25 + 5 * Math.random();
                for (let l of [i(), i()])
                  for (let i = 0; i < t; i++) {
                    let o = ((i + Math.random()) / t) * Math.PI * 2,
                      s = a + 0.5 * Math.random(),
                      d = Math.cos(o) * s,
                      c = Math.sin(o) * s - 0.8,
                      h = r + 2 * Math.random();
                    n.push({ color: l, x: e.x, y: e.y, vx: d, vy: c, time: h });
                  }
              }
              e.gone = !0;
            }
          }
          if (3e-5 * e.width > Math.random()) {
            let t = e.width * Math.random(),
              a = e.height - 10,
              r = 4 * Math.random() - 2,
              l = 5 * Math.random() - 15,
              o = 30 + 10 * Math.random();
            n.push({
              color: i(),
              x: t,
              y: a,
              vx: r,
              vy: l,
              time: o,
              primary: !0
            });
          }
          r.gameStart ? e.remove() : requestAnimationFrame(l);
        };
      setInterval(() => {
        n = n.filter(e => !e.gone);
      }, 2e3),
        l();
    }
  },
  function(e, t) {
    let a = window.localStorage || {};
    (t.submitToLocalStorage = e => {
      let t = document.getElementById(e);
      return (
        "text" === t.type || "select-one" === t.type
          ? (a[e] = t.value || "")
          : ("checkbox" !== t.type && "radio" !== t.type) ||
            (a[e] = t.checked || "false"),
        delete a[e + "Value"],
        delete a[e + "Checked"],
        !1
      );
    }),
      (t.retrieveFromLocalStorage = (e, t = !1) => {
        let r = document.getElementById(e);
        return (
          "text" === r.type || "select-one" === r.type
            ? (r.value = a[e] || a[e + "Value"] || "")
            : ("checkbox" !== r.type && "radio" !== r.type) ||
              (r.checked =
                "true" === (a[e] || a[e + "Checked"] || t.toString())),
          !1
        );
      }),
      (t.handleLargeNumber = (e, t = !1) =>
        t && e <= 0
          ? ""
          : e < 1e3
          ? e.toFixed(0) + ""
          : e < 1e6
          ? (e / 1e3).toFixed(2) + "k"
          : e < 1e9
          ? (e / 1e6).toFixed(2) + "m"
          : e < 1e12
          ? (e / 1e9).toFixed(2) + "b"
          : e < 1e15
          ? (e / 1e12).toFixed(2) + "t"
          : e < 1e18
          ? (e / 1e15).toFixed(2) + "q"
          : "∞"),
      (t.timeForHumans = e => {
        let t = e % 60;
        e /= 60;
        let a = (e = Math.floor(e)) % 60;
        e /= 60;
        let r = (e = Math.floor(e)) % 24;
        e /= 24;
        e = Math.floor(e);
        let i = "";
        function n(e, t) {
          e &&
            (i = i + ("" === i ? "" : ", ") + e + " " + t + (e > 1 ? "s" : ""));
        }
        return e > 300
          ? "FOREVER"
          : (n(e, "day"),
            n(r, "hour"),
            n(a, "minute"),
            n(t, "second"),
            "" === i && (i = "less than a second"),
            i);
      }),
      (t.addArticle = e => (/^\s*[aeiouAEIOU]/.test(e) ? "an " + e : "a " + e)),
      (t.formatLargeNumber = e =>
        e < 1e18 ? e.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "∞");
  },
  function(e, t) {
    !(function(e) {
      var a = function(t) {
        (this._options = {
          checkOnLoad: !1,
          resetOnEnd: !1,
          loopCheckTime: 50,
          loopMaxNumber: 5,
          baitClass:
            "pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links",
          baitStyle:
            "width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;",
          debug: !1
        }),
          (this._var = {
            version: "3.2.1",
            bait: null,
            checking: !1,
            loop: null,
            loopNumber: 0,
            event: { detected: [], notDetected: [] }
          }),
          void 0 !== t && this.setOption(t);
        var a = this,
          r = function() {
            setTimeout(function() {
              !0 === a._options.checkOnLoad &&
                (!0 === a._options.debug &&
                  a._log(
                    "onload->eventCallback",
                    "A check loading is launched"
                  ),
                null === a._var.bait && a._creatBait(),
                setTimeout(function() {
                  a.check();
                }, 1));
            }, 1);
          };
        void 0 !== e.addEventListener
          ? e.addEventListener("load", r, !1)
          : e.attachEvent("onload", r);
      };
      (a.prototype._options = null),
        (a.prototype._var = null),
        (a.prototype._bait = null),
        (a.prototype._log = function(e, t) {
          console.log("[BlockAdBlock][" + e + "] " + t);
        }),
        (a.prototype.setOption = function(e, t) {
          if (void 0 !== t) {
            var a = e;
            (e = {})[a] = t;
          }
          for (var r in e)
            (this._options[r] = e[r]),
              !0 === this._options.debug &&
                this._log(
                  "setOption",
                  'The option "' + r + '" he was assigned to "' + e[r] + '"'
                );
          return this;
        }),
        (a.prototype._creatBait = function() {
          var t = document.createElement("div");
          t.setAttribute("class", this._options.baitClass),
            t.setAttribute("style", this._options.baitStyle),
            (this._var.bait = e.document.body.appendChild(t)),
            this._var.bait.offsetParent,
            this._var.bait.offsetHeight,
            this._var.bait.offsetLeft,
            this._var.bait.offsetTop,
            this._var.bait.offsetWidth,
            this._var.bait.clientHeight,
            this._var.bait.clientWidth,
            !0 === this._options.debug &&
              this._log("_creatBait", "Bait has been created");
        }),
        (a.prototype._destroyBait = function() {
          e.document.body.removeChild(this._var.bait),
            (this._var.bait = null),
            !0 === this._options.debug &&
              this._log("_destroyBait", "Bait has been removed");
        }),
        (a.prototype.check = function(e) {
          if (
            (void 0 === e && (e = !0),
            !0 === this._options.debug &&
              this._log(
                "check",
                "An audit was requested " +
                  (!0 === e ? "with a" : "without") +
                  " loop"
              ),
            !0 === this._var.checking)
          )
            return (
              !0 === this._options.debug &&
                this._log(
                  "check",
                  "A check was canceled because there is already an ongoing"
                ),
              !1
            );
          (this._var.checking = !0),
            null === this._var.bait && this._creatBait();
          var t = this;
          return (
            (this._var.loopNumber = 0),
            !0 === e &&
              (this._var.loop = setInterval(function() {
                t._checkBait(e);
              }, this._options.loopCheckTime)),
            setTimeout(function() {
              t._checkBait(e);
            }, 1),
            !0 === this._options.debug &&
              this._log("check", "A check is in progress ..."),
            !0
          );
        }),
        (a.prototype._checkBait = function(t) {
          var a = !1;
          if (
            (null === this._var.bait && this._creatBait(),
            (null === e.document.body.getAttribute("abp") &&
              null !== this._var.bait.offsetParent &&
              0 != this._var.bait.offsetHeight &&
              0 != this._var.bait.offsetLeft &&
              0 != this._var.bait.offsetTop &&
              0 != this._var.bait.offsetWidth &&
              0 != this._var.bait.clientHeight &&
              0 != this._var.bait.clientWidth) ||
              (a = !0),
            void 0 !== e.getComputedStyle)
          ) {
            var r = e.getComputedStyle(this._var.bait, null);
            !r ||
              ("none" != r.getPropertyValue("display") &&
                "hidden" != r.getPropertyValue("visibility")) ||
              (a = !0);
          }
          !0 === this._options.debug &&
            this._log(
              "_checkBait",
              "A check (" +
                (this._var.loopNumber + 1) +
                "/" +
                this._options.loopMaxNumber +
                " ~" +
                (1 + this._var.loopNumber * this._options.loopCheckTime) +
                "ms) was conducted and detection is " +
                (!0 === a ? "positive" : "negative")
            ),
            !0 === t &&
              (this._var.loopNumber++,
              this._var.loopNumber >= this._options.loopMaxNumber &&
                this._stopLoop()),
            !0 === a
              ? (this._stopLoop(),
                this._destroyBait(),
                this.emitEvent(!0),
                !0 === t && (this._var.checking = !1))
              : (null !== this._var.loop && !1 !== t) ||
                (this._destroyBait(),
                this.emitEvent(!1),
                !0 === t && (this._var.checking = !1));
        }),
        (a.prototype._stopLoop = function(e) {
          clearInterval(this._var.loop),
            (this._var.loop = null),
            (this._var.loopNumber = 0),
            !0 === this._options.debug &&
              this._log("_stopLoop", "A loop has been stopped");
        }),
        (a.prototype.emitEvent = function(e) {
          !0 === this._options.debug &&
            this._log(
              "emitEvent",
              "An event with a " +
                (!0 === e ? "positive" : "negative") +
                " detection was called"
            );
          var t = this._var.event[!0 === e ? "detected" : "notDetected"];
          for (var a in t)
            !0 === this._options.debug &&
              this._log(
                "emitEvent",
                "Call function " + (parseInt(a) + 1) + "/" + t.length
              ),
              t.hasOwnProperty(a) && t[a]();
          return !0 === this._options.resetOnEnd && this.clearEvent(), this;
        }),
        (a.prototype.clearEvent = function() {
          (this._var.event.detected = []),
            (this._var.event.notDetected = []),
            !0 === this._options.debug &&
              this._log("clearEvent", "The event list has been cleared");
        }),
        (a.prototype.on = function(e, t) {
          return (
            this._var.event[!0 === e ? "detected" : "notDetected"].push(t),
            !0 === this._options.debug &&
              this._log(
                "on",
                'A type of event "' +
                  (!0 === e ? "detected" : "notDetected") +
                  '" was added'
              ),
            this
          );
        }),
        (a.prototype.onDetected = function(e) {
          return this.on(!0, e);
        }),
        (a.prototype.onNotDetected = function(e) {
          return this.on(!1, e);
        }),
        (a.prototype.onEither = function(e) {
          return (
            this.on(!0, function() {
              e(!0);
            }),
            this.on(!1, function() {
              e(!1);
            }),
            this
          );
        }),
        (t.BlockAdBlock = a),
        (t.blockAdBlock = new a({ checkOnLoad: !0, resetOnEnd: !0 }));
    })(window);
  },
  function(e, t, a) {
    let r = a(0),
      i = a(1);
    e.exports = class {
      constructor() {
        (this.target = { x: 0, y: 0 }),
          (this.socket = null),
          (this.statMaxing = !1),
          (this.cheating = !1);
        let e = document.getElementById("gameCanvas");
        (e.width = r.screenWidth), (e.height = r.screenHeight), (this.cv = e);
      }
      init(e, t) {
        (this.control = e), (this.socket = t);
        let a = this.cv;
        "joysticks" === e
          ? ((this.controlTouch = null),
            (this.movementTouch = null),
            (this.movementTop = !1),
            (this.movementBottom = !1),
            (this.movementLeft = !1),
            (this.movementRight = !1),
            a.addEventListener("touchstart", e => this.touchStart(e), !1),
            a.addEventListener("touchmove", e => this.touchMove(e), !1),
            a.addEventListener("touchend", e => this.touchEnd(e), !1),
            a.addEventListener("touchcancel", e => this.touchEnd(e), !1))
          : (a.addEventListener("mousedown", e => this.mouseDown(e), !1),
            a.addEventListener("mousemove", e => this.mouseMove(e), !1),
            a.addEventListener("mouseup", e => this.mouseUp(e), !1)),
          a.addEventListener("keydown", e => this.keyboardDown(e), !1),
          a.addEventListener("keyup", e => this.keyboardUp(e), !1),
          this.autoUpgrade();
      }
      autoUpgrade() {
        if (!r.autoLevel) return;
        let e = 60,
          t = setInterval(() => {
            this.socket.talk("L"), --e <= 0 && clearInterval(t);
          }, 100);
      }
      emit(e) {
        this.socket.talk(e);
      }
      talk(e, t) {
        this.socket.talk(e, t);
      }
      spawn() {
        this.socket.spawn(), i.reset(), this.autoUpgrade();
      }
      set(e, t) {
        this.socket.cmd.set(e, t);
      }
      setPosition(e, t) {
        (this.target.x = e),
          (this.target.y = t),
          this.socket.cmd.setPosition(e, t);
      }
      keyboardDown(e) {
        if (this.cheating) this.talk("0", e.keyCode);
        else {
          switch (e.keyCode) {
            case r.KEY_SPAWN:
              r.died &&
                (r.respawnOn <= Date.now() || e.shiftKey) &&
                this.spawn();
              break;
                   // ========================================================================
        // Chat System
        // ========================================================================
        // Key "I". Web browser prompt. Freezes the game.
        case 73:
            if (!r.died && !r.isChatMode)
            {
                let chatMessage = prompt("Chat message:");

                if (chatMessage)
                {
                    let maxLen = 100; 
                    let trimmedMessage = chatMessage.length > maxLen ? chatMessage.substring(0, maxLen - 3) + "..." : chatMessage.substring(0, maxLen); 

                    this.socket.talk('h', chatMessage, 1);
                }    
            }
            
            break;
                     // Key "H". Text input for in-game chat. Does not freeze the game.
        case 72:
            if (!r.died)
            {               
                if (r.isChatMode === false)                         
                {
                    // Chat input textbox.
                    let chatInput = document.createElement('input');
                    chatInput.id = 'chatInput';
                    chatInput.tabindex = 4;
                    chatInput.style.font = 'bold 18px Ubuntu';
                    chatInput.maxlength = '100';
                    chatInput.placeholder = 'Press Enter To Send. Esc To Cancel.';

                    // Chat input wrapper div.
                    let chatInputWrapper = document.createElement('div');                        
                    chatInputWrapper.style.position = 'absolute';                            
                    chatInputWrapper.style.width = '720px';                        

                    chatInputWrapper.style.left = '50%';
                    chatInputWrapper.style.bottom = '100px';
                    chatInputWrapper.style.transform = 'translate(-50%, -50%)';
                    chatInputWrapper.style.margin = '0 auto';
                    chatInputWrapper.style.visibility = 'hidden';

                    chatInputWrapper.appendChild(chatInput);  
                    document.body.appendChild(chatInputWrapper);   
                    
                    // Sending chat.
                    chatInput.addEventListener('keydown', function(event) 
                    {
                        if (event.key === 'Enter' || event.keyCode === 13) 
                        {   
                            // ============================================================                             
                            // Check again if the player died, otherwise, it hangs the client.
                            // There will be an error saying that "color is undefined" in app.js file.
                            // ============================================================
                            if (r.died)
                            {
                                r.socket.talk('s', r.playerName, 0); 
                                r.died = false;
                            }
                            else 
                            {
                                let chatMessage = chatInput.value;

                                if (chatMessage)
                                {
                                    let maxLen = 100; 
                                    let trimmedMessage = chatMessage.length > maxLen ? chatMessage.substring(0, maxLen - 3) + "..." : chatMessage.substring(0, maxLen); 

                                   r.socket.talk('h', trimmedMessage, 1);

                                    chatInputWrapper.removeChild(chatInput);
                                    document.body.removeChild(chatInputWrapper);
                                                                        
                                    let gameCanvas = document.getElementById('gameCanvas');
                                    gameCanvas.focus();
                                    
                                   r.isChatMode = false;                                    
                                }  
                            }                                   
                        }
                    });

                    // Cancelling chat.
                    chatInput.addEventListener('keydown', function(event) 
                    {
                        if (event.key === 'Esc' || event.keyCode === 27) 
                        {                                
                            chatInputWrapper.removeChild(chatInput);
                            document.body.removeChild(chatInputWrapper);

                            let gameCanvas = document.getElementById('gameCanvas');
                            gameCanvas.focus();                            

                            r.isChatMode = false; 
                        }
                    });
                    
                    r.isChatMode = true;

                    // To remove initial "i" letter.                        
                    setTimeout(() => {
                        chatInput.value = '';
                        chatInputWrapper.style.visibility = 'visible';                            
                        chatInput.focus();
                    }, 10);
                }
                else 
                {   // Already in chat mode, focus the chat input textbox.
                    let existingChatInput = document.getElementById('chatInput');
                    if (existingChatInput)
                    {
                        // Remove 'h' from the input.
                        let oldValue = existingChatInput.value;                        
                        existingChatInput.value = '';
                        existingChatInput.focus();                            
                        existingChatInput.value = oldValue;
                    }
                }                    
            }

            break;
        // ===========================================

            case r.KEY_UP_ARROW:
            case r.KEY_UP:
              this.set(0, !0);
              break;
            case r.KEY_DOWN_ARROW:
            case r.KEY_DOWN:
              this.set(1, !0);
              break;
            case r.KEY_LEFT_ARROW:
            case r.KEY_LEFT:
              this.set(2, !0);
              break;
            case r.KEY_RIGHT_ARROW:
            case r.KEY_RIGHT:
              this.set(3, !0);
              break;
            case r.KEY_MOUSE_0:
              this.set(4, !0);
              break;
            case r.KEY_MOUSE_1:
              this.set(5, !0);
              break;
            case r.KEY_MOUSE_2:
              this.set(6, !0);
              break;
            case r.KEY_LEVEL_UP:
              this.emit("L");
              break;
            case r.KEY_ABILITY:
              this.emit("A");
          }
          if (!e.ctrlKey && !e.altKey) {
            if (r.canSkill) {
              let t = this.statMaxing ? 12 : 1;
              do {
                switch (e.keyCode) {
                  case r.KEY_UPGRADE_ATK:
                    this.talk("x", 0);
                    break;
                  case r.KEY_UPGRADE_HTL:
                    this.talk("x", 1);
                    break;
                  case r.KEY_UPGRADE_SPD:
                    this.talk("x", 2);
                    break;
                  case r.KEY_UPGRADE_STR:
                    this.talk("x", 3);
                    break;
                  case r.KEY_UPGRADE_PEN:
                    this.talk("x", 4);
                    break;
                  case r.KEY_UPGRADE_DAM:
                    this.talk("x", 5);
                    break;
                  case r.KEY_UPGRADE_RLD:
                    this.talk("x", 6);
                    break;
                  case r.KEY_UPGRADE_MOB:
                    this.talk("x", 7);
                    break;
                  case r.KEY_UPGRADE_RGN:
                    this.talk("x", 8);
                    break;
                  case r.KEY_UPGRADE_SHI:
                    this.talk("x", 9);
                  
                  
                }
              } while (--t);
            }
            if (!e.repeat) {
              switch (e.keyCode) {
                case r.KEY_AUTO_SPIN:
                  this.talk("t", 0);
                  break;
                case r.KEY_AUTO_FIRE:
                  this.talk("t", 1);
                  break;
                case r.KEY_OVER_RIDE:
                  this.talk("t", 2);
                  break;
                case r.KEY_RAINBOW:
                  this.talk("r", 3);
                  break;
                case r.KEY_REVERSE_TANK:
                  this.talk("t", 4);
                  break;
                case r.KEY_UPGRADE_MAX:
                  this.statMaxing = !0;
                  break;
                case r.KEY_FUCK_YOU:
                  (this.cheating = !0), this.emit("0");
                  break;
                case r.KEY_KILL_YOURSELF:
                  this.emit("K");
                  break;
                  
                case r.KEY_PING:
                  r.showDebug = !0;
                  break;
                case r.KEY_CLASS_TREE:
                  r.showTree = !0;
                  break;
                case r.KEY_RECORD:
                  if (this.cv.captureStream && window.MediaRecorder) {
                    if (!this.videoRecorder) {
                      let e = [];
                      (this.videoRecorder = new MediaRecorder(
                        this.cv.captureStream(60)
                      )),
                        (this.videoRecorder.ondataavailable = t =>
                          e.push(t.data)),
                        (this.videoRecorder.onstop = t => {
                          let a = new Blob(e, {
                            type: this.videoRecorder.mimeType
                          });
                          e.length = 0;
                          let r = URL.createObjectURL(a),
                            i = document.createElement("a");
                          (i.style.display = "none"),
                            i.setAttribute("download", "video.webm"),
                            i.setAttribute("href", r),
                            document.body.appendChild(i),
                            setTimeout(() => {
                              URL.revokeObjectURL(r),
                                document.body.removeChild(i);
                            }, 100),
                            i.click();
                        }),
                        r.messages.push({
                          text: "Recorder initiated and started!",
                          status: 2,
                          alpha: 0,
                          time: Date.now()
                        }),
                        this.videoRecorder.start();
                      break;
                    }
                    switch (this.videoRecorder.state) {
                      case "inactive":
                        r.messages.push({
                          text: "Recorder started!",
                          status: 2,
                          alpha: 0,
                          time: Date.now()
                        }),
                          this.videoRecorder.start();
                        break;
                      case "recording":
                        r.messages.push({
                          text: "Recorder stopped! Saving file...",
                          status: 2,
                          alpha: 0,
                          time: Date.now()
                        }),
                          this.videoRecorder.stop();
                    }
                  } else
                    r.messages.push({
                      text: "Media recorder not supported in this browser!",
                      status: 2,
                      alpha: 0,
                      time: Date.now()
                    });
                  break;
                case r.KEY_SCREENSHOT:
                  let e = this.cv.toDataURL(),
                    t = atob(e.split(",")[1]),
                    a = e
                      .split(",")[0]
                      .split(":")[1]
                      .split(";")[0],
                    i = new Uint8Array(t.length);
                  for (let e = 0; e < t.length; e++) i[e] = t.charCodeAt(e);
                  let n = URL.createObjectURL(new Blob([i], { type: a })),
                    l = document.createElement("a");
                  (l.style.display = "none"),
                    l.setAttribute("download", "screenshot.png"),
                    l.setAttribute("href", n),
                    document.body.appendChild(l),
                    setTimeout(() => {
                      URL.revokeObjectURL(n), document.body.removeChild(l);
                    }, 100),
                    l.click();
              }
              if (r.canUpgrade)
                switch (e.keyCode) {
                  case r.KEY_CHOOSE_1:
                    this.talk("U", 0);
                    break;
                  case r.KEY_CHOOSE_2:
                    this.talk("U", 1);
                    break;
                  case r.KEY_CHOOSE_3:
                    this.talk("U", 2);
                    break;
                  case r.KEY_CHOOSE_4:
                    this.talk("U", 3);
                    break;
                  case r.KEY_CHOOSE_5:
                    this.talk("U", 4);
                    break;
                  case r.KEY_CHOOSE_6:
                    this.talk("U", 5);
                    break;
                  case r.KEY_CHOOSE_7:
                    this.talk("U", 6);
                    break;
                  case r.KEY_CHOOSE_8:
                    this.talk("U", 7);
                    break;
                  case r.KEY_CHOOSE_9:
                    this.talk("U", 8);
                }
            }
          }
        }
      }
      keyboardUp(e) {
        switch (e.keyCode) {
          case r.KEY_UP_ARROW:
          case r.KEY_UP:
            this.set(0, !1);
            break;
          case r.KEY_DOWN_ARROW:
          case r.KEY_DOWN:
            this.set(1, !1);
            break;
          case r.KEY_LEFT_ARROW:
          case r.KEY_LEFT:
            this.set(2, !1);
            break;
          case r.KEY_RIGHT_ARROW:
          case r.KEY_RIGHT:
            this.set(3, !1);
            break;
          case r.KEY_MOUSE_0:
            this.set(4, !1);
            break;
          case r.KEY_MOUSE_1:
            this.set(5, !1);
            break;
          case r.KEY_MOUSE_2:
            this.set(6, !1);
            break;
          case r.KEY_FUCK_YOU:
            this.cheating = !1;
            break;
          case r.KEY_UPGRADE_MAX:
            this.statMaxing = !1;
            break;
          case r.KEY_PING:
            r.showDebug = !1;
            break;
          case r.KEY_CLASS_TREE:
            r.showTree = !1;
        }
        this.cheating && this.talk("0", -e.keyCode);
      }
      mouseDown(e) {
        switch (e.button) {
          case 0:
            let t = { x: e.clientX, y: e.clientY },
              a = r.clickables.stat.check(t);
            if (-1 !== a) this.talk("x", a);
            else if (-1 !== r.clickables.skipUpgrades.check(t))
              r.clearUpgrades();
            else {
              let e = r.clickables.upgrade.check(t);
              -1 !== e ? this.talk("U", e) : this.set(4, !0);
            }
            break;
          case 1:
            this.set(5, !0);
            break;
          case 2:
            this.set(6, !0);
        }
      }
      mouseMove(e) {
        if (null !== r.player.x) {
          let t = e.clientX - r.player.x,
            a = e.clientY - r.player.y;
          this.setPosition(t, a);
        }
        r.statHover =
          0 === r.clickables.hover.check({ x: e.clientX, y: e.clientY });
      }
      mouseUp(e) {
        switch (e.button) {
          case 0:
            this.set(4, !1);
            break;
          case 1:
            this.set(5, !1);
            break;
          case 2:
            this.set(6, !1);
        }
      }
      touchStart(e) {
        if ((e.preventDefault(), r.died && r.respawnOn <= Date.now()))
          this.spawn();
        else {
          for (let t of e.changedTouches) {
            let e = { x: t.clientX, y: t.clientY },
              a = t.identifier,
              i = r.clickables.stat.check(e);
            if (-1 !== i) this.talk("x", i);
            else if (-1 !== r.clickables.skipUpgrades.check(e))
              r.clearUpgrades();
            else {
              let t = r.clickables.upgrade.check(e);
              if (-1 !== t) this.talk("U", t);
              else {
                let t = e.x < this.cv.width / 2;
                null === this.movementTouch && t
                  ? (this.movementTouch = a)
                  : null !== this.controlTouch ||
                    t ||
                    ((this.controlTouch = a), this.set(4, !0));
              }
            }
          }
          this.touchMove(e);
        }
      }
      touchMove(e) {
        e.preventDefault();
        for (let t of e.changedTouches) {
          let e = { x: t.clientX, y: t.clientY },
            a = t.identifier;
          if (this.movementTouch === a) {
            let t = e.x - (1 * this.cv.width) / 6,
              a = e.y - (2 * this.cv.height) / 3,
              r = Math.sqrt(t * t + a * a);
            (t /= r), (a /= r);
            let i = 0.3826834323650898;
            a < -i !== this.movementTop &&
              this.set(0, (this.movementTop = a < -i)),
              a > i !== this.movementBottom &&
                this.set(1, (this.movementBottom = a > i)),
              t < -i !== this.movementLeft &&
                this.set(2, (this.movementLeft = t < -i)),
              t > i !== this.movementRight &&
                this.set(3, (this.movementRight = t > i));
          } else if (this.controlTouch === a) {
            let t = 4 * (e.x - (5 * this.cv.width) / 6),
              a = 4 * (e.y - (2 * this.cv.height) / 3);
            this.setPosition(t, a);
          }
        }
      }
      touchEnd(e) {
        e.preventDefault();
        for (let t of e.changedTouches) {
          t.clientX, t.clientY;
          let e = t.identifier;
          this.movementTouch === e
            ? ((this.movementTouch = null),
              this.movementTop && this.set(0, (this.movementTop = !1)),
              this.movementBottom && this.set(1, (this.movementBottom = !1)),
              this.movementLeft && this.set(2, (this.movementLeft = !1)),
              this.movementRight && this.set(3, (this.movementRight = !1)))
            : this.controlTouch === e &&
              ((this.controlTouch = null), this.set(4, !1));
        }
      }
    };
  },
  function(e, t, a) {
    "use strict";
    let r = new Uint32Array(1),
      i = new Uint8Array(r.buffer),
      n = new Float32Array(r.buffer),
      l = new Uint16Array(1),
      o = new Uint8Array(l.buffer);
    (t.encode = e => {
      let t = [],
        a = [],
        s = 0,
        d = 15,
        c = 0;
      for (let r of e) {
        let i = 0;
        if (0 === r || !1 === r) i = 0;
        else if (1 === r || !0 === r) i = 1;
        else if ("number" == typeof r)
          !Number.isInteger(r) || r < -4294967296 || r >= 4294967296
            ? ((i = 8), (s += 4))
            : r >= 0
            ? r < 256
              ? ((i = 2), s++)
              : r < 65536
              ? ((i = 4), (s += 2))
              : r < 4294967296 && ((i = 6), (s += 4))
            : r >= -256
            ? ((i = 3), s++)
            : r >= -65536
            ? ((i = 5), (s += 2))
            : r >= -4294967296 && ((i = 7), (s += 4));
        else {
          if ("string" != typeof r)
            throw (console.error("Unencodable data type", e),
            new Error("Unencodable data type"));
          {
            let e = !1;
            for (let t = 0; t < r.length; t++)
              if (r.charAt(t) > "ÿ") e = !0;
              else if ("\0" === r.charAt(t))
                throw (console.error("Null containing string", r),
                new Error("Null containing string"));
            !e && r.length <= 1
              ? ((i = 9), s++)
              : e
              ? ((i = 11), (s += 2 * r.length + 2))
              : ((i = 10), (s += r.length + 1));
          }
        }
        if ((t.push(i), i === d)) c++;
        else {
          if ((a.push(d), c >= 1)) {
            for (; c > 19; ) a.push(14), a.push(15), (c -= 19);
            1 === c
              ? a.push(d)
              : 2 === c
              ? a.push(12)
              : 3 === c
              ? a.push(13)
              : c < 20 && (a.push(14), a.push(c - 4));
          }
          (c = 0), (d = i);
        }
      }
      if ((a.push(d), c >= 1)) {
        for (; c > 19; ) a.push(14), a.push(15), (c -= 19);
        1 === c
          ? a.push(d)
          : 2 === c
          ? a.push(12)
          : 3 === c
          ? a.push(13)
          : c < 20 && (a.push(14), a.push(c - 4));
      }
      a.push(15), a.length % 2 == 1 && a.push(15);
      let h = new Uint8Array((a.length >> 1) + s);
      for (let e = 0; e < a.length; e += 2) {
        let t = a[e],
          r = a[e + 1];
        h[e >> 1] = (t << 4) | r;
      }
      let u = a.length >> 1;
      for (let a = 0; a < t.length; a++) {
        let s = e[a];
        switch (t[a]) {
          case 0:
          case 1:
            break;
          case 2:
          case 3:
            h[u++] = s;
            break;
          case 4:
          case 5:
            (l[0] = s), h.set(o, u), (u += 2);
            break;
          case 6:
          case 7:
            (r[0] = s), h.set(i, u), (u += 4);
            break;
          case 8:
            (n[0] = s), h.set(i, u), (u += 4);
            break;
          case 9:
            {
              let e = 0 === s.length ? 0 : s.charCodeAt(0);
              h[u++] = e;
            }
            break;
          case 10:
            for (let e = 0; e < s.length; e++) h[u++] = s.charCodeAt(e);
            h[u++] = 0;
            break;
          case 11:
            for (let e = 0; e < s.length; e++) {
              let t = s.charCodeAt(e);
              (h[u++] = 255 & t), (h[u++] = t >> 8);
            }
            (h[u++] = 0), (h[u++] = 0);
        }
      }
      return h;
    }),
      (t.decode = e => {
        let t = new Uint8Array(e);
        if (t[0] >> 4 != 15) return null;
        let a = [],
          s = 15,
          d = 0,
          c = !0;
        for (;;) {
          if (d >= t.length) return null;
          let e = t[d];
          if ((c ? ((e &= 15), d++) : (e >>= 4), (c = !c), 12 == (12 & e))) {
            if (15 === e) {
              c && d++;
              break;
            }
            let r = e - 10;
            if (14 === e) {
              if (d >= t.length) return null;
              let e = t[d];
              c ? ((e &= 15), d++) : (e >>= 4), (c = !c), (r += e);
            }
            for (let e = 0; e < r; e++) a.push(s);
          } else a.push(e), (s = e);
        }
        let h = [];
        for (let e of a)
          switch (e) {
            case 0:
              h.push(0);
              break;
            case 1:
              h.push(1);
              break;
            case 2:
              h.push(t[d++]);
              break;
            case 3:
              h.push(t[d++] - 256);
              break;
            case 4:
              (o[0] = t[d++]), (o[1] = t[d++]), h.push(l[0]);
              break;
            case 5:
              (o[0] = t[d++]), (o[1] = t[d++]), h.push(l[0] - 65536);
              break;
            case 6:
              (i[0] = t[d++]),
                (i[1] = t[d++]),
                (i[2] = t[d++]),
                (i[3] = t[d++]),
                h.push(r[0]);
              break;
            case 7:
              (i[0] = t[d++]),
                (i[1] = t[d++]),
                (i[2] = t[d++]),
                (i[3] = t[d++]),
                h.push(r[0] - 4294967296);
              break;
            case 8:
              (i[0] = t[d++]),
                (i[1] = t[d++]),
                (i[2] = t[d++]),
                (i[3] = t[d++]),
                h.push(Number.isNaN(n[0]) ? -1 : n[0]);
              break;
            case 9:
              {
                let e = t[d++];
                h.push(0 === e ? "" : String.fromCharCode(e));
              }
              break;
            case 10:
              {
                let e = "",
                  a = 0;
                for (; (a = t[d++]); ) e += String.fromCharCode(a);
                h.push(e);
              }
              break;
            case 11: {
              let e = "",
                a = 0;
              for (; (a = t[d++] | (t[d++] << 8)); )
                e += String.fromCharCode(a);
              h.push(e);
            }
          }
        return h;
      });
  },
  function(e) {
    e.exports = JSON.parse('{ "normal":{ "teal":"#7ADBBC", "lgreen":"#B9E87E", "orange":"#E7896D", "yellow":"#FDF380", "lavender":"#B58EFD", "pink":"#EF99C3", "vlgrey":"#E8EBF7", "lgrey":"#AA9F9E", "guiwhite":"#FFFFFF", "black":"#484848", "blue":"#3CA4CB", "green":"#8ABC3F", "red":"#E03E41", "gold":"#EFC74B", "purple":"#8D6ADF", "magenta":"#CC669C", "grey":"#A7A7AF", "dgrey":"#726F6F", "white":"#DBDBDB", "guiblack":"#000000", "paletteSize":10, "border":0.65 }, "classic":{ "teal":"#8EFFFB", "lgreen":"#85E37D", "orange":"#FC7676", "yellow":"#FFEB8E", "lavender":"#B58EFF", "pink":"#F177DD", "vlgrey":"#CDCDCD", "lgrey":"#999999", "guiwhite":"#FFFFFF", "black":"#525252", "blue":"#00B0E1", "green":"#00E06C", "red":"#F04F54", "gold":"#FFE46B", "purple":"#768CFC", "magenta":"#BE7FF5", "grey":"#999999", "dgrey":"#545454", "white":"#C0C0C0", "guiblack":"#000000", "paletteSize":10, "border":0.5 }, "maxtri":{ "teal": "#00ffbf", "lgreen": "#82ff93", "orange": "#ff9900", "yellow": "#fffb00", "lavender": "#6947ff", "pink": "#ff00e6", "vlgrey": "#c9c9c9", "lgrey": "#adadad", "guiwhite": "#FFFFFF", "black": "#383838", "blue": "#009dff", "green": "#00ff08", "red": "#ff0066", "gold": "#f0c400", "purple": "#7b00bd", "magenta": "#ff00d9", "grey": "#757575", "dgrey": "#525252", "white": "#f2f2f2", "guiblack": "#000000", "paletteSize":10, "border":0.5 }, "dark":{ "teal":"#8975B7", "lgreen":"#0C491D", "orange":"#C46748", "yellow":"#B2B224", "lavender":"#7D56C5", "pink":"#B24FAE", "vlgrey":"#1E1E1E", "lgrey":"#3C3A3A", "guiwhite":"#000000", "black":"#E5E5E5", "blue":"#379FC6", "green":"#30B53B", "red":"#FF6C6E", "gold":"#FFC665", "purple":"#9673E8", "magenta":"#C8679B", "grey":"#635F5F", "dgrey":"#73747A", "white":"#11110F", "guiblack":"#FFFFFF", "paletteSize":10, "border":0.15 }, "natural":{ "teal":"#76C1BB", "lgreen":"#AAD35D", "orange":"#E09545", "yellow":"#FFD993", "lavender":"#939FFF", "pink":"#D87FB2", "vlgrey":"#C4B6B6", "lgrey":"#7F7F7F", "guiwhite":"#FFFFFF", "black":"#373834", "blue":"#4F93B5", "green":"#00B659", "red":"#E14F65", "gold":"#E5BF42", "purple":"#8053A0", "magenta":"#B67CAA", "grey":"#998F8F", "dgrey":"#494954", "white":"#A5B2A5", "guiblack":"#000000", "paletteSize":10, "border":0.2 }, "pumpkin":{ "teal":"#721970", "lgreen":"#ff6347", "orange":"#1b713a", "yellow":"#fdf380", "lavender":"#941100", "pink":"#194417", "vlgrey":"#1b713a", "lgrey":"#aa9f9e", "guiwhite":"#fed8b1", "black":"#484848", "blue":"#3ca4cb", "green":"#76EEC6", "red":"#F04F54", "gold":"#1b713a", "purple":"#1b713a", "magenta":"#cc669c", "grey":"#ffffff", "dgrey":"#726f6f", "white":"#ff9b58", "guiblack":"#000000", "paletteSize":10, "border":3.3 }, "forest":{ "teal":"#884AA5", "lgreen":"#8C9B3E", "orange":"#D16A80", "yellow":"#97596D", "lavender":"#499855", "pink":"#60294F", "vlgrey":"#DDC6B8", "lgrey":"#7E949E", "guiwhite":"#FFFFE8", "black":"#665750", "blue":"#807BB6", "green":"#A1BE55", "red":"#E5B05B", "gold":"#FF4747", "purple":"#BAC674", "magenta":"#BA78D1", "grey":"#998866", "dgrey":"#529758", "white":"#7DA060", "guiblack":"#000000", "paletteSize":10, "border":0.7 }, "midnight":{ "teal":"#2B9098", "lgreen":"#4BAA5D", "orange":"#345678", "yellow":"#CDC684", "lavender":"#89778E", "pink":"#A85C90", "vlgrey":"#CCCCCC", "lgrey":"#A7B2B7", "guiwhite":"#BAC6FF", "black":"#091F28", "blue":"#123455", "green":"#098765", "red":"#000013", "gold":"#566381", "purple":"#743784", "magenta":"#B29098", "grey":"#555555", "dgrey":"#649EB7", "white":"#444444", "guiblack":"#000000", "paletteSize":10, "border":0.6 }, "pastel":{ "teal":"#89BFBA", "lgreen":"#B5D17D", "orange":"#E5E0E0", "yellow":"#B5BBE5", "lavender":"#939FFF", "pink":"#646DE5", "vlgrey":"#B2B2B2", "lgrey":"#7F7F7F", "guiwhite":"#FFFFFF", "black":"#383835", "blue":"#AEAEFF", "green":"#AEFFAE", "red":"#FFAEAE", "gold":"#FFFFFF", "purple":"#C3C3D8", "magenta":"#FFB5FF", "grey":"#CCCCCC", "dgrey":"#A0A0B2", "white":"#F2F2F2", "guiblack":"#000000", "paletteSize":10, "border":0.35 }, "space":{ "teal":"#4788F3", "lgreen":"#AF1010", "orange":"#FF0000", "yellow":"#82F850", "lavender":"#FFFFFF", "pink":"#57006C", "vlgrey":"#FFFFFF", "lgrey":"#272727", "guiwhite":"#000000", "black":"#7F7F7F", "blue":"#0E1B92", "green":"#0AEB80", "red":"#C2B90A", "gold":"#3E7E8C", "purple":"#285911", "magenta":"#A9707E", "grey":"#6F6A68", "dgrey":"#2D0738", "white":"#000000", "guiblack":"#FFFFFF", "paletteSize":10, "border":0.25 }, "nebula":{ "teal":"#38B06E", "lgreen":"#22882E", "orange":"#D28E7F", "yellow":"#D5D879", "lavender":"#E084EB", "pink":"#DF3E3E", "vlgrey":"#F0F2CC", "lgrey":"#7D7D7D", "guiwhite":"#C2C5EF", "black":"#161616", "blue":"#9274E6", "green":"#89F470", "red":"#E08E5D", "gold":"#ECDC58", "purple":"#58CBEC", "magenta":"#EA58EC", "grey":"#7E5713", "dgrey":"#303030", "white":"#555555", "guiblack":"#EAEAEA", "paletteSize":10, "border":0.5 }, "bleach":{ "teal":"#00FFFF", "lgreen":"#00FF00", "orange":"#FF3200", "yellow":"#FFEC00", "lavender":"#FF24A7", "pink":"#FF3CBD", "vlgrey":"#FFF186", "lgrey":"#918181", "guiwhite":"#F1F1F1", "black":"#5F5F5F", "blue":"#0025FF", "green":"#00FF00", "red":"#FF0000", "gold":"#FFFA23", "purple":"#3100FF", "magenta":"#D4D3D3", "grey":"#838383", "dgrey":"#4C4C4C", "white":"#FFFEFE", "guiblack":"#080808", "paletteSize":10, "border":0.4 }, "ocean":{ "teal":"#76EEC6", "lgreen":"#41AA78", "orange":"#FF7F50", "yellow":"#FFD250", "lavender":"#DC3388", "pink":"#FA8072", "vlgrey":"#8B8886", "lgrey":"#BFC1C2", "guiwhite":"#FFFFFF", "black":"#12466B", "blue":"#4200AE", "green":"#0D6338", "red":"#DC4333", "gold":"#FEA904", "purple":"#7B4BAB", "magenta":"#5C246E", "grey":"#656884", "dgrey":"#D4D7D9", "white":"#3283BC", "guiblack":"#000000", "paletteSize":10, "border":0.3 }, "badlands":{ "teal":"#F9CB9C", "lgreen":"#F1C232", "orange":"#38761D", "yellow":"#E69138", "lavender":"#B7B7B7", "pink":"#78866B", "vlgrey":"#6AA84F", "lgrey":"#B7B7B7", "guiwhite":"#A4C2F4", "black":"#000000", "blue":"#0C5A9E", "green":"#6E8922", "red":"#5B0000", "gold":"#783F04", "purple":"#591C77", "magenta":"#20124D", "grey":"#2F1C16", "dgrey":"#999999", "white":"#543517", "guiblack":"#CFE2F3", "paletteSize":10, "border":0.4 }, "Toxic":{"teal":"#0026ff","lgreen":"#00ff1a","orange":"#a15dee","yellow":"#1a5106","lavender":"#ff0000","pink":"#ff0000","vlgrey":"#00ffd0","lgrey":"#747272","guiwhite":"#a600ff","black":"#2d8f00","blue":"#fff700","green":"#09ff00","red":"#ff0000","gold":"#ffffff","purple":"#03630d","magenta":"#0004ff","grey":"#51ff00","dgrey":"#000000","white":"#4b4444","guiblack":"#ffffff","paletteSize":10,"border":"0.5"}, "custom":{ "teal":"#7ADBBC", "lgreen":"#B9E87E", "orange":"#E7896D", "yellow":"#FDF380", "lavender":"#B58EFD", "pink":"#EF99C3", "vlgrey":"#E8EBF7", "lgrey":"#AA9F9E", "guiwhite":"#FFFFFF", "black":"#484848", "blue":"#3CA4CB", "green":"#8ABC3F", "red":"#E03E41", "gold":"#EFC74B", "purple":"#8D6ADF", "magenta":"#CC669C", "grey":"#A7A7AF", "dgrey":"#726F6F", "white":"#DBDBDB", "guiblack":"#000000", "paletteSize":10, "border":0.65 } }');
  }
]);