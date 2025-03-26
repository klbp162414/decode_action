//Wed Mar 26 2025 06:53:34 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
/*

群友投稿 微信小程序 欣和厨+

实物或者虚拟卡


export soy_zbkk_data="unionId&openId" 

抓包找带有 https://apimarket.shinho.net.cn/ecs-user/weChat/member/appletCode2Session 
链接,只有重新进小程序才有这链接

多账号用 换行 或 @ 或 #分割

定时忘记一天跑25次好像

*/

const $ = new Env("\u6B23\u548C\u53A8");
const author = "\u4F5C\u8005TG_ID:@ls_soy";
const notify = require("./sendNotify");
// 通知控制,1发送, 0不发送
//const get_msg = 0

var version_ = "jsjiami.com.v7";
const _0x3f288f = _0x41a8;
(function (_0x469574, _0x1978a8, _0x2048a1, _0x512105, _0x282696, _0x2269ae, _0xaddb2f) {
  return _0x469574 = _0x469574 >> 1, _0x2269ae = "hs", _0xaddb2f = "hs", function (_0x3db4ae, _0x52690a, _0x390eec, _0x47f923, _0x665f17) {
    const _0x1a4410 = _0x41a8;
    _0x47f923 = "tfi", _0x2269ae = _0x47f923 + _0x2269ae, _0x665f17 = "up", _0xaddb2f += _0x665f17, _0x2269ae = _0x390eec(_0x2269ae), _0xaddb2f = _0x390eec(_0xaddb2f), _0x390eec = 0;
    const _0x251864 = _0x3db4ae();
    while (true && --_0x512105 + _0x52690a) {
      try {
        _0x47f923 = parseInt(_0x1a4410(601, "mWix")) / 1 * (parseInt(_0x1a4410(465, "1V5i")) / 2) + parseInt(_0x1a4410(927, "Jrb]")) / 3 * (-parseInt(_0x1a4410(765, "$u7#")) / 4) + parseInt(_0x1a4410(1033, "^U85")) / 5 + -parseInt(_0x1a4410(1148, "CDAT")) / 6 * (-parseInt(_0x1a4410(358, "jeMV")) / 7) + parseInt(_0x1a4410(1027, "PwR*")) / 8 * (-parseInt(_0x1a4410(457, "u)Bt")) / 9) + -parseInt(_0x1a4410(664, "Mpt(")) / 10 * (-parseInt(_0x1a4410(861, "xbmF")) / 11) + -parseInt(_0x1a4410(369, "NwdE")) / 12 * (parseInt(_0x1a4410(533, "nkG)")) / 13);
      } catch (_0x160548) {
        _0x47f923 = _0x390eec;
      } finally {
        _0x665f17 = _0x251864[_0x2269ae]();
        if (_0x469574 <= _0x512105) _0x390eec ? _0x282696 ? _0x47f923 = _0x665f17 : _0x282696 = _0x665f17 : _0x390eec = _0x665f17;else {
          if (_0x390eec == _0x282696["replace"](/[KnFVgdGWtQTDxHNChROr=]/g, "")) {
            if (_0x47f923 === _0x52690a) {
              _0x251864["un" + _0x2269ae](_0x665f17);
              break;
            }
            _0x251864[_0xaddb2f](_0x665f17);
          }
        }
      }
    }
  }(_0x2048a1, _0x1978a8, function (_0x15eb3d, _0x421f1a, _0x15cb67, _0x111613, _0x172655, _0x1446f1, _0x5973fe) {
    return _0x421f1a = "split", _0x15eb3d = arguments[0], _0x15eb3d = _0x15eb3d[_0x421f1a](""), _0x15cb67 = "reverse", _0x15eb3d = _0x15eb3d[_0x15cb67]("v"), _0x111613 = "join", 1236179, _0x15eb3d[_0x111613]("");
  });
}(410, 450815, _0x34cb, 207), _0x34cb) && (version_ = _0x34cb);
function _0x41a8(_0x80026d, _0xc3d040) {
  const _0x34cbf6 = _0x34cb();
  return _0x41a8 = function (_0x41a89e, _0x447edd) {
    _0x41a89e = _0x41a89e - 330;
    let _0x53de6b = _0x34cbf6[_0x41a89e];
    if (_0x41a8["bELPjJ"] === undefined) {
      var _0x54d62c = function (_0x4975d7) {
        const _0x42326a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let _0x3c32b0 = "",
          _0x41bf63 = "";
        for (let _0x2a7f4a = 0, _0x57a73d, _0xa076a5, _0x403440 = 0; _0xa076a5 = _0x4975d7["charAt"](_0x403440++); ~_0xa076a5 && (_0x57a73d = _0x2a7f4a % 4 ? _0x57a73d * 64 + _0xa076a5 : _0xa076a5, _0x2a7f4a++ % 4) ? _0x3c32b0 += String["fromCharCode"](255 & _0x57a73d >> (-2 * _0x2a7f4a & 6)) : 0) {
          _0xa076a5 = _0x42326a["indexOf"](_0xa076a5);
        }
        for (let _0x56cfc0 = 0, _0x170e9b = _0x3c32b0["length"]; _0x56cfc0 < _0x170e9b; _0x56cfc0++) {
          _0x41bf63 += "%" + ("00" + _0x3c32b0["charCodeAt"](_0x56cfc0)["toString"](16))["slice"](-2);
        }
        return decodeURIComponent(_0x41bf63);
      };
      const _0x3eabb2 = function (_0x58aee1, _0x576159) {
        let _0xe2ca23 = [],
          _0x28e913 = 0,
          _0xf7c81,
          _0x30a7b4 = "";
        _0x58aee1 = _0x54d62c(_0x58aee1);
        let _0x14a893;
        for (_0x14a893 = 0; _0x14a893 < 256; _0x14a893++) {
          _0xe2ca23[_0x14a893] = _0x14a893;
        }
        for (_0x14a893 = 0; _0x14a893 < 256; _0x14a893++) {
          _0x28e913 = (_0x28e913 + _0xe2ca23[_0x14a893] + _0x576159["charCodeAt"](_0x14a893 % _0x576159["length"])) % 256, _0xf7c81 = _0xe2ca23[_0x14a893], _0xe2ca23[_0x14a893] = _0xe2ca23[_0x28e913], _0xe2ca23[_0x28e913] = _0xf7c81;
        }
        _0x14a893 = 0, _0x28e913 = 0;
        for (let _0x1011e2 = 0; _0x1011e2 < _0x58aee1["length"]; _0x1011e2++) {
          _0x14a893 = (_0x14a893 + 1) % 256, _0x28e913 = (_0x28e913 + _0xe2ca23[_0x14a893]) % 256, _0xf7c81 = _0xe2ca23[_0x14a893], _0xe2ca23[_0x14a893] = _0xe2ca23[_0x28e913], _0xe2ca23[_0x28e913] = _0xf7c81, _0x30a7b4 += String["fromCharCode"](_0x58aee1["charCodeAt"](_0x1011e2) ^ _0xe2ca23[(_0xe2ca23[_0x14a893] + _0xe2ca23[_0x28e913]) % 256]);
        }
        return _0x30a7b4;
      };
      _0x41a8["uNAAVx"] = _0x3eabb2, _0x80026d = arguments, _0x41a8["bELPjJ"] = true;
    }
    const _0x58f795 = _0x34cbf6[0],
      _0x3dd3ad = _0x41a89e + _0x58f795,
      _0x58675e = _0x80026d[_0x3dd3ad];
    return !_0x58675e ? (_0x41a8["yJYiyW"] === undefined && (_0x41a8["yJYiyW"] = true), _0x53de6b = _0x41a8["uNAAVx"](_0x53de6b, _0x447edd), _0x80026d[_0x3dd3ad] = _0x53de6b) : _0x53de6b = _0x58675e, _0x53de6b;
  }, _0x41a8(_0x80026d, _0xc3d040);
}
const variable = "soy_xhc_data";
let app_v = "1.0";
try {
  Crypto_js = require(_0x3f288f(820, "NwdE"));
} catch (_0x47f94f) {
  throw new Error("\n\u627E\u4E0D\u5230\u4F9D\u8D56 crypto-js ,\u8BF7\u81EA\u884C\u5B89\u88C5\n");
}
try {
  CryptoJs = $[_0x3f288f(990, "jeMV")]() ? require("crypto-js") : "";
} catch (_0x21edf3) {
  throw new Error(_0x3f288f(1068, "8cNT"));
}
try {
  fs = $["isNode"]() ? require("fs") : "";
} catch (_0x202dcb) {
  throw new Error("\n\u627E\u4E0D\u5230\u4F9D\u8D56 fs ,\u8BF7\u81EA\u884C\u5B89\u88C5\n");
}
try {
  os = $["isNode"]() ? require("os") : "";
} catch (_0x433a37) {
  throw new Error(_0x3f288f(475, "O@as"));
}
try {
  axios = $[_0x3f288f(1025, "sr2p")]() ? require(_0x3f288f(1106, "wCi1")) : "";
} catch (_0x2b20d7) {
  throw new Error(_0x3f288f(336, "aw!x"));
}
let yyz_vip = false,
  yyz_fen = "",
  subTitle = "",
  user_num = 0,
  execAcList = [],
  user_data = "",
  app_sj = false,
  ql_version = "",
  TG_id = "",
  ql_path = __dirname,
  qlxt = "",
  yyz_token = "",
  up_token = "",
  variable_style = "";
async function main(_0x597eac) {
  await _0x597eac["refreshToke"]();
}
class UserInfo {
  constructor(_0x1d8703, _0x497bce) {
    const _0x438350 = _0x3f288f,
      _0x4d8385 = {
        "GBqTa": _0x438350(917, "Cd@1"),
        "aRcaS": "app_nshow",
        "ahdEv": _0x438350(1208, "1V5i"),
        "jtdag": function (_0x5d916d, _0x17dc67) {
          return _0x5d916d === _0x17dc67;
        },
        "WRdrQ": function (_0x1d30f7, _0x3a9f3e) {
          return _0x1d30f7 + _0x3a9f3e;
        }
      };
    try {
      _0x4d8385[_0x438350(1174, "u)Bt")](_0x438350(999, "RsCB"), _0x438350(1170, "y!1F")) ? (_0x1ddf72[_0x438350(1122, "SYoV")](_0x438350(911, "*X[o") + _0x27f33c + _0x438350(1026, "SYoV") + _0x1efd57[_0x438350(1038, "(DcV")][_0x4d8385[_0x438350(628, "EK0!")]] + _0x438350(334, "$kF4") + _0x13c945[_0x438350(1198, "RsCB")][_0x4d8385["aRcaS"]] + "\n---\u811A\u672C\u5730\u5740:" + _0xd693b6[_0x438350(419, "aW]5")]["app_nurl"]), _0x4b61f4 += _0x438350(424, "Mpt(") + _0x59970d + _0x438350(1088, "fJaX") + _0x54f2d4[_0x438350(1079, "sr2p")][_0x4d8385["GBqTa"]] + _0x438350(891, "Na2D") + _0x44b4a6[_0x438350(774, "$u7#")][_0x4d8385[_0x438350(693, "eDW6")]] + "\n---\u811A\u672C\u5730\u5740:" + _0x1fe53a[_0x438350(944, "nl62")][_0x4d8385[_0x438350(785, "8cNT")]]) : (this[_0x438350(1207, "0Qw%")] = _0x4d8385[_0x438350(989, "zL7@")](_0x1d8703, 1), this[_0x438350(1016, "$kF4")] = _0x497bce[_0x438350(770, "$kF4")]("&")[0], this["openId"] = _0x497bce[_0x438350(450, "OT(A")]("&")[1]);
    } catch (_0x14c0ea) {
      console[_0x438350(623, "$kF4")](_0x14c0ea);
    }
  }
  async [_0x3f288f(687, "nkG)")]() {
    const _0x5b559c = _0x3f288f,
      _0x31fe5c = {
        "KRIRU": function (_0x2496cf, _0xaace69) {
          return _0x2496cf === _0xaace69;
        },
        "hhAtj": _0x5b559c(341, "Y#HU"),
        "lGohz": "YVZgE",
        "mnXXJ": _0x5b559c(480, "OT(A"),
        "pMHzJ": "csCEz",
        "QPnVC": _0x5b559c(958, "0Qw%"),
        "FaZjD": function (_0x2bf6e9, _0x26ac79) {
          return _0x2bf6e9 == _0x26ac79;
        },
        "QtNaP": "dxeyx",
        "jQNEm": "RILkU",
        "CvlDB": function (_0x242043, _0x2169c9, _0x1baea3) {
          return _0x242043(_0x2169c9, _0x1baea3);
        },
        "QxcGY": function (_0x111a42, _0x37ee03) {
          return _0x111a42 !== _0x37ee03;
        },
        "VbLmH": _0x5b559c(1021, "*X[o"),
        "ieDXY": function (_0x428792, _0x1c1134) {
          return _0x428792 !== _0x1c1134;
        },
        "vroaU": _0x5b559c(444, "oB0Q"),
        "HOSds": function (_0x5ba9ec) {
          return _0x5ba9ec();
        },
        "eryPx": _0x5b559c(903, "n7PQ"),
        "QFQEB": function (_0x18f0c5, _0x351e03) {
          return _0x18f0c5 * _0x351e03;
        },
        "PZtCY": function (_0x3bfbe4, _0x12973f) {
          return _0x3bfbe4 !== _0x12973f;
        },
        "YTJva": _0x5b559c(437, "YO5z"),
        "ZSBgS": _0x5b559c(592, "xbmF"),
        "gNxxd": _0x5b559c(847, "CqB$"),
        "XpPJE": _0x5b559c(1218, "^U85"),
        "zZnFW": _0x5b559c(1135, "kpbP"),
        "qNybG": "https://servicewechat.com/wx29cc5b53b37f7ae0/176/page-frame.html",
        "GehtH": function (_0x4ee286, _0x25517d) {
          return _0x4ee286 / _0x25517d;
        }
      };
    await Sleep_time(2, 3);
    let _0x1596df = Math[_0x5b559c(975, "OT(A")](_0x31fe5c["GehtH"](new Date()[_0x5b559c(712, "PwR*")](), 1000))[_0x5b559c(822, "Y#HU")]();
    return new Promise(_0x3c2e92 => {
      const _0x585406 = _0x5b559c,
        _0x117cc8 = {
          "RJqKM": _0x31fe5c["eryPx"],
          "petpX": function (_0x1b609e, _0x511b45) {
            const _0x533398 = _0x41a8;
            return _0x31fe5c[_0x533398(411, "NwdE")](_0x1b609e, _0x511b45);
          }
        };
      if (_0x31fe5c[_0x585406(501, "nkG)")](_0x31fe5c[_0x585406(1049, "(DcV")], _0x585406(537, "ySs9"))) {
        let _0x3c6f8d = {
          "url": _0x585406(410, "OT(A"),
          "headers": {
            "Host": _0x31fe5c[_0x585406(910, "H707")],
            "Connection": "keep-alive",
            "authorization": this[_0x585406(644, "eDW6")],
            "charset": _0x31fe5c[_0x585406(854, "YO5z")],
            "User-Agent": _0x31fe5c[_0x585406(581, "H707")],
            "content-type": _0x585406(432, "O@as"),
            "Accept-Encoding": _0x31fe5c[_0x585406(1047, "xbmF")],
            "Referer": _0x31fe5c["qNybG"]
          }
        };
        $[_0x585406(459, "OFng")](_0x3c6f8d, async (_0x1232db, _0x5ebcac, _0x57c76e) => {
          const _0x2ead8a = _0x585406;
          if (_0x31fe5c["KRIRU"](_0x31fe5c["hhAtj"], _0x2ead8a(536, "YO5z"))) throw new _0xe2ca23(_0x117cc8[_0x2ead8a(745, "(DcV")]);else {
            try {
              if (_0x31fe5c[_0x2ead8a(595, "O@as")] !== _0x31fe5c[_0x2ead8a(853, "1V5i")]) {
                if (_0x1232db) {
                  if (_0x31fe5c[_0x2ead8a(558, "PwR*")](_0x31fe5c[_0x2ead8a(1095, "OT(A")], _0x2ead8a(1004, "Kac6"))) this[_0x2ead8a(703, "sr2p")](_0x2ead8a(354, "CDAT") + this[_0x2ead8a(1022, "OT(A")] + " \u7B7E\u5230\u72B6\u6001:\u8FD4\u56DE " + _0x1232db);else throw new _0x2a7f4a(_0x117cc8[_0x2ead8a(648, "ySs9")]);
                } else {
                  if (_0x31fe5c[_0x2ead8a(389, "*X[o")] !== "QjXtU") this[_0x2ead8a(980, "Y#HU")](_0x2ead8a(787, "kpbP") + this[_0x2ead8a(1133, "Y#HU")] + " \u7B7E\u5230\u72B6\u6001:" + _0x232cc9[_0x2ead8a(503, "Y#HU")]);else {
                    let _0x3083f7 = JSON[_0x2ead8a(527, "^U85")](_0x57c76e);
                    _0x31fe5c[_0x2ead8a(706, "8cNT")](_0x3083f7["code"], 200) ? _0x31fe5c[_0x2ead8a(1063, "6HxV")](_0x31fe5c[_0x2ead8a(1108, "mKi7")], _0x31fe5c["jQNEm"]) ? this[_0x2ead8a(1183, "NwdE")]("\u8D26\u53F7 " + this[_0x2ead8a(877, "Cd@1")] + _0x2ead8a(621, "281s") + _0x41751c) : _0x3083f7[_0x2ead8a(852, "u)Bt")][_0x2ead8a(1120, "RsCB")] == false ? (await _0x31fe5c[_0x2ead8a(791, "jeMV")](Sleep_time, 1, 2), await this[_0x2ead8a(647, "Mpt(")]()) : this[_0x2ead8a(1215, "fJaX")](_0x2ead8a(602, "nkG)") + this[_0x2ead8a(701, "H707")] + _0x2ead8a(509, "^U85")) : _0x31fe5c[_0x2ead8a(597, "PwR*")](_0x31fe5c[_0x2ead8a(796, "0Qw%")], _0x31fe5c[_0x2ead8a(607, "(DcV")]) ? this[_0x2ead8a(1140, "OT(A")]("\u8D26\u53F7 " + this["num"] + " " + _0x551cb9 + ":\u8FD4\u56DE " + _0x1e88cf) : this[_0x2ead8a(483, "PwR*")]("\u8D26\u53F7 " + this[_0x2ead8a(477, "ySs9")] + " \u7B7E\u5230\u72B6\u6001:" + _0x3083f7["msg"]);
                  }
                }
              } else _0xa81664 = "\u70B9\u8D5E";
            } catch (_0x59c47b) {} finally {
              _0x31fe5c[_0x2ead8a(802, "281s")](_0x31fe5c["vroaU"], _0x2ead8a(890, "zL7@")) ? _0x31fe5c[_0x2ead8a(417, "RsCB")](_0x3c2e92) : this[_0x2ead8a(919, "Cd@1")] = _0x250d85[_0x2ead8a(484, "Cd@1")]["records"][_0x58f802[_0x2ead8a(673, "fJaX")](_0x117cc8[_0x2ead8a(760, "$u7#")](_0x435b40[_0x2ead8a(493, "y!1F")](), _0x3d6555[_0x2ead8a(1019, "Kac6")]["records"][_0x2ead8a(346, "aW]5")]))][_0x2ead8a(1173, "PwR*")];
            }
            ;
          }
        });
      } else {
        let _0x30dcf3 = _0x1ff47b[_0x585406(1087, "xbmF")](_0x4f6f62);
        _0x30dcf3[_0x585406(651, "mWix")] == 200 ? this[_0x585406(515, "$RhQ")](_0x585406(799, "PwR*") + this["num"] + _0x585406(700, "wCi1")) : this["cusLog"](_0x585406(603, "*X[o") + this[_0x585406(828, "kpbP")] + _0x585406(1002, "$RhQ") + _0x30dcf3[_0x585406(1123, "$RhQ")]);
      }
    });
  }
  async [_0x3f288f(434, "nkG)")]() {
    const _0x1e2916 = _0x3f288f,
      _0x5c6233 = {
        "IqmiQ": "zxYUM",
        "HgVNb": function (_0x207eec, _0x941b23) {
          return _0x207eec == _0x941b23;
        },
        "eYJHy": function (_0x328fa1) {
          return _0x328fa1();
        },
        "Ussoz": function (_0x2f756e, _0x26c557) {
          return _0x2f756e !== _0x26c557;
        },
        "nvczd": _0x1e2916(966, "$u7#"),
        "ohfTo": _0x1e2916(591, "wCi1"),
        "nRQUk": _0x1e2916(395, "y!1F"),
        "MMBqd": _0x1e2916(932, "n7PQ"),
        "DDlMX": "gzip,compress,br,deflate",
        "jxRCm": "https://servicewechat.com/wx29cc5b53b37f7ae0/176/page-frame.html",
        "KhETu": function (_0x5af6f0, _0x153417) {
          return _0x5af6f0 / _0x153417;
        }
      };
    await Sleep_time(2, 3);
    let _0x49d2d4 = Math[_0x1e2916(681, "CqB$")](_0x5c6233[_0x1e2916(752, "u)Bt")](new Date()[_0x1e2916(955, "Y#HU")](), 1000))[_0x1e2916(519, "SYoV")]();
    return new Promise(_0x29ce04 => {
      const _0x42c3ef = _0x1e2916;
      if (_0x5c6233["Ussoz"](_0x5c6233[_0x42c3ef(381, "mKi7")], _0x5c6233[_0x42c3ef(407, "kpbP")])) {
        let _0x4139a8 = _0x48f688[_0x42c3ef(1177, "Cd@1")](_0x2beb24);
        _0x4139a8[_0x42c3ef(1191, "1V5i")] == 200 ? this[_0x42c3ef(1131, "*X[o")]("\u8D26\u53F7 " + this[_0x42c3ef(1013, "Na2D")] + " " + _0x2350b4 + ":\u6210\u529F") : this["cusLog"](_0x42c3ef(878, "zL7@") + this["num"] + " " + _0x396473 + ":" + _0x4139a8[_0x42c3ef(901, "zL7@")]);
      } else {
        let _0x2df4b0 = {
          "url": "https://apimarket.shinho.net.cn/ecs-user/weChat/dailySignIn/sign",
          "headers": {
            "Host": _0x5c6233[_0x42c3ef(761, "1V5i")],
            "Connection": _0x42c3ef(695, "eDW6"),
            "authorization": this[_0x42c3ef(553, "jeMV")],
            "charset": _0x5c6233[_0x42c3ef(672, "ySs9")],
            "User-Agent": _0x5c6233["MMBqd"],
            "content-type": _0x42c3ef(613, "YO5z"),
            "Accept-Encoding": _0x5c6233["DDlMX"],
            "Referer": _0x5c6233[_0x42c3ef(996, "Jrb]")],
            "Content-Length": "0"
          },
          "body": ""
        };
        $[_0x42c3ef(885, "OT(A")](_0x2df4b0, async (_0x588544, _0x3d2af8, _0x51d05b) => {
          const _0x5b8b1f = _0x42c3ef;
          try {
            if (_0x588544) _0x5c6233[_0x5b8b1f(937, "zL7@")] === _0x5c6233[_0x5b8b1f(937, "zL7@")] ? this[_0x5b8b1f(404, "281s")](_0x5b8b1f(561, "H707") + this["num"] + " \u7B7E\u5230:\u8FD4\u56DE " + _0x588544) : _0x5a9159 = _0x362dc3[_0x5b8b1f(362, "O@as")](/(\S*)TG_ID:@ls_soy/)[1];else {
              let _0x7134b4 = JSON[_0x5b8b1f(783, "(DcV")](_0x51d05b);
              _0x5c6233[_0x5b8b1f(945, "y!1F")](_0x7134b4["code"], 200) ? this[_0x5b8b1f(617, "wCi1")]("\u8D26\u53F7 " + this[_0x5b8b1f(645, "nkG)")] + _0x5b8b1f(946, "(DcV")) : this[_0x5b8b1f(964, "CqB$")](_0x5b8b1f(1199, "Jrb]") + this["num"] + " \u7B7E\u5230:" + _0x7134b4[_0x5b8b1f(928, "y!1F")]);
            }
          } catch (_0x261678) {} finally {
            _0x5c6233[_0x5b8b1f(1056, "Jrb]")](_0x29ce04);
          }
          ;
        });
      }
    });
  }
  async [_0x3f288f(792, "H707")]() {
    const _0x510ec5 = _0x3f288f,
      _0x5517e1 = {
        "aKgzh": function (_0x2730a9, _0x2eae08) {
          return _0x2730a9 + _0x2eae08;
        },
        "GSoFM": function (_0x473313, _0x5bbf19) {
          return _0x473313 < _0x5bbf19;
        },
        "PSYWD": function (_0x51bebf, _0x310276) {
          return _0x51bebf + _0x310276;
        },
        "ZCCLn": _0x510ec5(688, "*X[o"),
        "ptQMK": _0x510ec5(1143, "281s"),
        "nXnRx": function (_0x547bd2, _0x28dcc2) {
          return _0x547bd2 === _0x28dcc2;
        },
        "Gkqhx": _0x510ec5(451, "n7PQ"),
        "Uegmm": _0x510ec5(447, "eDW6"),
        "pLStZ": function (_0x1a37d6, _0x5b73c7) {
          return _0x1a37d6 == _0x5b73c7;
        },
        "QKxbV": _0x510ec5(1214, "Mpt("),
        "vgikW": "zRFVE",
        "bZGiI": _0x510ec5(482, "jeMV"),
        "eXleT": function (_0x4e3d1a, _0x5cbe35) {
          return _0x4e3d1a == _0x5cbe35;
        },
        "ikxPZ": "DISHES_COLLECTION",
        "mRKsU": function (_0x3bc19f, _0x1f35fc) {
          return _0x3bc19f !== _0x1f35fc;
        },
        "NiMgc": _0x510ec5(469, "nkG)"),
        "HGfMv": _0x510ec5(968, "eDW6"),
        "BZvdn": function (_0x3dd7a2) {
          return _0x3dd7a2();
        },
        "WqkSs": _0x510ec5(468, "0Qw%"),
        "qmrQh": _0x510ec5(870, "$RhQ"),
        "IRpjy": _0x510ec5(1124, "Mpt("),
        "Ljwta": "application/json",
        "jTeto": _0x510ec5(857, "Mpt("),
        "KijLD": _0x510ec5(749, "Mpt("),
        "vPDaA": function (_0x236ec0, _0x2741c9, _0x45e667) {
          return _0x236ec0(_0x2741c9, _0x45e667);
        },
        "delHH": function (_0x39702f, _0x9d0574) {
          return _0x39702f / _0x9d0574;
        }
      };
    await _0x5517e1[_0x510ec5(1190, "^U85")](Sleep_time, 2, 3);
    let _0xf09eca = Math[_0x510ec5(818, "jeMV")](_0x5517e1[_0x510ec5(708, "nl62")](new Date()["getTime"](), 1000))[_0x510ec5(811, "$RhQ")]();
    var _0x510635 = _0x510ec5(330, "kpbP");
    return new Promise(_0x4972ab => {
      const _0x30017e = _0x510ec5,
        _0xa4a8a8 = {
          "ldnvc": function (_0xce479c, _0x11ce3a) {
            return _0x5517e1["aKgzh"](_0xce479c, _0x11ce3a);
          },
          "REVPl": function (_0x5f3239, _0x1e3194) {
            return _0x5f3239 < _0x1e3194;
          },
          "cbxXe": function (_0x215cab, _0x32deee) {
            return _0x215cab + _0x32deee;
          },
          "zVUjb": function (_0x3ff491, _0x8255cc) {
            return _0x3ff491 < _0x8255cc;
          },
          "daHsF": function (_0x470b6e, _0xee51d) {
            const _0x515e87 = _0x41a8;
            return _0x5517e1[_0x515e87(1205, "^U85")](_0x470b6e, _0xee51d);
          },
          "ruEPZ": function (_0x2d3329, _0x28276b) {
            const _0x32586a = _0x41a8;
            return _0x5517e1[_0x32586a(762, "PwR*")](_0x2d3329, _0x28276b);
          },
          "AYeBh": function (_0x3bff27, _0x1f6c4f) {
            return _0x3bff27 < _0x1f6c4f;
          },
          "NAdBe": function (_0x239f7c, _0x371d58) {
            return _0x5517e1["aKgzh"](_0x239f7c, _0x371d58);
          },
          "AyHYK": function (_0x156312, _0x495df2) {
            return _0x5517e1["PSYWD"](_0x156312, _0x495df2);
          },
          "RxDpS": _0x5517e1[_0x30017e(446, "$u7#")],
          "HHUrR": _0x5517e1[_0x30017e(1115, "YO5z")],
          "cDzyz": function (_0x8a6113, _0x18792b) {
            return _0x8a6113 !== _0x18792b;
          },
          "MSYXB": _0x30017e(670, "$RhQ"),
          "RVAzI": function (_0x3dcca2, _0xb43a5d) {
            const _0x32f6c2 = _0x30017e;
            return _0x5517e1[_0x32f6c2(436, "OFng")](_0x3dcca2, _0xb43a5d);
          },
          "VzpAu": _0x5517e1[_0x30017e(583, "sr2p")],
          "pigon": _0x5517e1[_0x30017e(957, "(DcV")],
          "veoxw": function (_0x45ed23, _0x1ff3ff) {
            const _0x5ee656 = _0x30017e;
            return _0x5517e1[_0x5ee656(795, "zL7@")](_0x45ed23, _0x1ff3ff);
          },
          "FoYPF": _0x30017e(349, "PwR*"),
          "HkPBL": _0x5517e1[_0x30017e(529, "*X[o")],
          "ncVUR": _0x5517e1[_0x30017e(589, "6HxV")],
          "nRmsx": _0x5517e1[_0x30017e(631, "nkG)")],
          "Hgqgv": function (_0xa954eb, _0x42f284) {
            const _0x4cf761 = _0x30017e;
            return _0x5517e1[_0x4cf761(370, "jeMV")](_0xa954eb, _0x42f284);
          },
          "CwdKo": _0x5517e1[_0x30017e(1071, "mWix")],
          "oydeJ": function (_0x5f199f, _0x3d68a0) {
            return _0x5f199f == _0x3d68a0;
          },
          "vNaeL": _0x30017e(556, "H707"),
          "yaOZY": function (_0x59eca7, _0x500358) {
            const _0x258a64 = _0x30017e;
            return _0x5517e1[_0x258a64(463, "mKi7")](_0x59eca7, _0x500358);
          },
          "NAaff": _0x5517e1["NiMgc"],
          "zWrnF": function (_0x4a9705, _0x3f7961) {
            return _0x4a9705 !== _0x3f7961;
          },
          "jlsiP": _0x5517e1[_0x30017e(384, "sr2p")],
          "OTDWF": function (_0x4745b7) {
            return _0x5517e1["BZvdn"](_0x4745b7);
          }
        };
      let _0x42624c = {
        "url": _0x30017e(871, "jeMV"),
        "headers": {
          "Host": _0x5517e1[_0x30017e(428, "^U85")],
          "Connection": _0x5517e1["qmrQh"],
          "authorization": this[_0x30017e(689, "u)Bt")],
          "charset": _0x30017e(512, "Mpt("),
          "User-Agent": _0x5517e1["IRpjy"],
          "Content-Type": _0x5517e1[_0x30017e(660, "Y#HU")],
          "Accept-Encoding": _0x5517e1[_0x30017e(1001, "Jrb]")],
          "Referer": _0x5517e1[_0x30017e(764, "(DcV")],
          "Content-Length": _0x510635["length"]
        },
        "body": _0x510635
      };
      $[_0x30017e(812, "oB0Q")](_0x42624c, async (_0x1d3295, _0x465dbc, _0x62268c) => {
        const _0x319bbe = _0x30017e,
          _0x3e3bb6 = {
            "iOqmo": function (_0x8ac2a2, _0x5b9ed6) {
              return _0xa4a8a8["AyHYK"](_0x8ac2a2, _0x5b9ed6);
            },
            "gSJlb": _0xa4a8a8["RxDpS"],
            "IQsoL": "utf-8",
            "ZMpet": function (_0x2431ff, _0x809c51) {
              const _0x57d2a8 = _0x41a8;
              return _0xa4a8a8[_0x57d2a8(899, "$RhQ")](_0x2431ff, _0x809c51);
            }
          };
        try {
          if (_0xa4a8a8[_0x319bbe(611, "RsCB")] === _0xa4a8a8["HHUrR"]) {
            if (_0x1d3295) _0xa4a8a8["cDzyz"]("dJlot", _0xa4a8a8[_0x319bbe(1195, "Y#HU")]) ? this[_0x319bbe(804, "0Qw%")]("\u8D26\u53F7 " + this[_0x319bbe(1006, "281s")] + _0x319bbe(801, "$u7#") + _0x257512[_0x319bbe(889, "n7PQ")]) : this[_0x319bbe(876, "Jrb]")]("\u8D26\u53F7 " + this[_0x319bbe(1040, "mWix")] + _0x319bbe(534, "fJaX") + _0x1d3295);else {
              if (_0xa4a8a8[_0x319bbe(351, "fJaX")](_0xa4a8a8[_0x319bbe(1119, "$6#n")], _0xa4a8a8[_0x319bbe(420, "(DcV")])) throw new _0x2be32c("\n\u627E\u4E0D\u5230\u4F9D\u8D56 OS ,\u8BF7\u81EA\u884C\u5B89\u88C5\n");else {
                let _0x3b25b0 = JSON["parse"](_0x62268c);
                if (_0xa4a8a8["veoxw"](_0x3b25b0[_0x319bbe(485, "J)kY")], 200)) {
                  if (_0xa4a8a8[_0x319bbe(541, "eDW6")](_0xa4a8a8["FoYPF"], _0x319bbe(972, "Y#HU"))) _0x5dc7b6 = true;else for (let _0x3c36f5 in _0x3b25b0["data"][_0x319bbe(883, "8cNT")]) {
                    if (_0xa4a8a8[_0x319bbe(376, "$kF4")] !== _0xa4a8a8["ncVUR"]) {
                      if (_0xa4a8a8[_0x319bbe(1162, "wCi1")](_0x3b25b0[_0x319bbe(662, "Y#HU")][_0x319bbe(838, "H707")][_0x3c36f5][_0x319bbe(1074, "ySs9")], _0x319bbe(499, "Kac6"))) {
                        if (_0xa4a8a8[_0x319bbe(699, "zL7@")] !== _0xa4a8a8[_0x319bbe(627, "281s")]) {
                          _0x251d01 = _0x77a7ab[_0x319bbe(921, "oB0Q")](_0x3e3bb6["iOqmo"](_0x2cf2f2["match"](/(\S*)scripts/)[1], _0x3e3bb6["gSJlb"]), {
                            "flag": "r",
                            "encoding": _0x3e3bb6[_0x319bbe(642, "*X[o")]
                          });
                          var _0x448da8 = _0xb86686[_0x319bbe(936, "H707")](_0x5b26d7);
                          _0x488be5 = _0x1087af[_0x319bbe(513, "PwR*")](_0x3e3bb6["iOqmo"](_0x3e3bb6[_0x319bbe(443, "xbmF")](_0x448da8["username"] + _0x37940a, _0x310086["hostname"]()), _0x1defb6))[_0x319bbe(1053, "CDAT")]();
                        } else await this[_0x319bbe(984, "CDAT")]("\u6D4F\u89C8");
                      } else {
                        if (_0xa4a8a8["Hgqgv"](_0x3b25b0[_0x319bbe(756, "$kF4")][_0x319bbe(526, "nkG)")][_0x3c36f5][_0x319bbe(550, "YO5z")], _0x319bbe(1010, "Na2D"))) await this[_0x319bbe(385, "NwdE")]("\u70B9\u8D5E");else {
                          if (_0xa4a8a8[_0x319bbe(915, "^U85")](_0x3b25b0[_0x319bbe(1219, "J)kY")]["records"][_0x3c36f5][_0x319bbe(753, "SYoV")], _0xa4a8a8[_0x319bbe(1046, "mKi7")])) await this[_0x319bbe(1015, "*X[o")]("\u6536\u85CF");else {
                            if (_0xa4a8a8[_0x319bbe(633, "(DcV")](_0x3b25b0[_0x319bbe(874, "281s")]["records"][_0x3c36f5][_0x319bbe(969, "8cNT")], _0xa4a8a8[_0x319bbe(679, "8cNT")])) await this[_0x319bbe(855, "fJaX")]("\u8BC4\u8BBA");else _0xa4a8a8[_0x319bbe(813, "mWix")](_0x3b25b0[_0x319bbe(702, "n7PQ")]["records"][_0x3c36f5][_0x319bbe(731, "kpbP")], _0x319bbe(547, "n7PQ")) && (_0xa4a8a8[_0x319bbe(888, "Y#HU")](_0xa4a8a8[_0x319bbe(864, "OFng")], _0xa4a8a8[_0x319bbe(677, "y!1F")]) ? _0x4932d0 = _0x9f127f[_0x319bbe(800, "8cNT")]["version"] : await this[_0x319bbe(1065, "281s")]("\u5206\u4EAB"));
                          }
                        }
                      }
                    } else {
                      var _0x6ea365 = _0x475c34["enc"][_0x319bbe(1211, "fJaX")][_0x319bbe(1220, "jeMV")](_0xeb4a16),
                        _0x37f0f0 = _0xad4751["enc"][_0x319bbe(823, "OFng")][_0x319bbe(873, "OT(A")]("6Gt5J8nY"),
                        _0xf1ca3d = _0x196b35["enc"][_0x319bbe(742, "$kF4")][_0x319bbe(723, "wCi1")](12345678);
                      return _0x30fb08[_0x319bbe(397, "wCi1")][_0x319bbe(638, "wCi1")](_0x6ea365, _0x37f0f0, {
                        "iv": _0xf1ca3d,
                        "mode": _0x17aeb9[_0x319bbe(963, "fJaX")][_0x319bbe(460, "fJaX")],
                        "padding": _0x142bdb[_0x319bbe(757, "wCi1")][_0x319bbe(904, "Kac6")]
                      })[_0x319bbe(498, "mKi7")][_0x319bbe(886, "n7PQ")](_0x41081a[_0x319bbe(659, "$kF4")]["Base64"]);
                    }
                  }
                } else {
                  if (_0xa4a8a8["zWrnF"](_0x319bbe(634, "YO5z"), _0xa4a8a8[_0x319bbe(1104, "CqB$")])) this[_0x319bbe(1215, "fJaX")](_0x319bbe(530, "mWix") + this[_0x319bbe(462, "OFng")] + " \u4EFB\u52A1\u72B6\u6001:" + _0x3b25b0["msg"]);else return _0xfde474["log"]("\n\u3010" + _0x408697 + _0x319bbe(1189, "sr2p")), true;
                }
              }
            }
          } else {
            var _0x9350e5 = new _0x50c0d4(new _0x4615f0()[_0x319bbe(396, "oB0Q")]()),
              _0x2e3e44 = _0x9350e5[_0x319bbe(985, "PwR*")]() + "-",
              _0x5dd02e = _0xa4a8a8[_0x319bbe(394, "OT(A")](_0xa4a8a8[_0x319bbe(1073, "8cNT")](_0x9350e5[_0x319bbe(516, "NwdE")]() + 1, 10) ? "0" + (_0x9350e5[_0x319bbe(993, "EK0!")]() + 1) : _0xa4a8a8[_0x319bbe(810, "6HxV")](_0x9350e5["getMonth"](), 1), "-"),
              _0x4cf369 = _0xa4a8a8[_0x319bbe(956, "kpbP")](_0xa4a8a8["zVUjb"](_0x9350e5["getDate"](), 10) ? _0xa4a8a8[_0x319bbe(896, "NwdE")]("0", _0x9350e5[_0x319bbe(973, "nkG)")]()) : _0x9350e5[_0x319bbe(1103, "eDW6")](), " "),
              _0x5c3aed = (_0xa4a8a8[_0x319bbe(478, "Kac6")](_0x9350e5["getHours"](), 10) ? _0xa4a8a8["cbxXe"]("0", _0x9350e5[_0x319bbe(1080, "8cNT")]()) : _0x9350e5[_0x319bbe(722, "nl62")]()) + ":",
              _0x488fd6 = _0xa4a8a8[_0x319bbe(896, "NwdE")](_0xa4a8a8[_0x319bbe(1184, "PwR*")](_0x9350e5[_0x319bbe(680, "281s")](), 10) ? _0xa4a8a8[_0x319bbe(1210, "OT(A")]("0", _0x9350e5["getMinutes"]()) : _0x9350e5[_0x319bbe(793, "aW]5")](), ":"),
              _0x5a716b = _0xa4a8a8[_0x319bbe(518, "$6#n")](_0x9350e5[_0x319bbe(682, "CDAT")](), 10) ? _0xa4a8a8["cbxXe"]("0", _0x9350e5[_0x319bbe(735, "xbmF")]()) : _0x9350e5[_0x319bbe(401, "u)Bt")]();
            let _0x4d4a67 = _0xa4a8a8[_0x319bbe(454, "1V5i")](_0xa4a8a8["ldnvc"](_0xa4a8a8[_0x319bbe(983, "y!1F")](_0x2e3e44 + _0x5dd02e, _0x4cf369), _0x5c3aed) + _0x488fd6, _0x5a716b);
            return _0x4d4a67;
          }
        } catch (_0x55e7df) {} finally {
          _0xa4a8a8[_0x319bbe(348, "xbmF")](_0x4972ab);
        }
        ;
      });
    });
  }
  async [_0x3f288f(984, "CDAT")](_0x3e0ab4) {
    const _0x394a59 = _0x3f288f,
      _0x2cf82b = {
        "mcRzc": function (_0x3e3e48, _0xfb2ee6) {
          return _0x3e3e48 === _0xfb2ee6;
        },
        "XYcPu": _0x394a59(665, "n7PQ"),
        "PQOHn": "aDlhz",
        "YZUrN": function (_0x585a2b, _0x5aeebd) {
          return _0x585a2b == _0x5aeebd;
        },
        "PUpku": function (_0x1dde61, _0x3be005) {
          return _0x1dde61 == _0x3be005;
        },
        "JPifj": function (_0x185be3, _0x39791e) {
          return _0x185be3 !== _0x39791e;
        },
        "mCGFq": _0x394a59(1192, "sr2p"),
        "eHiFF": _0x394a59(1150, "eDW6"),
        "fRAPl": "app_bb",
        "RuEel": _0x394a59(997, "(DcV"),
        "kjOli": _0x394a59(834, "n7PQ"),
        "oTsPT": _0x394a59(1099, "wCi1"),
        "OyOAa": _0x394a59(418, "xbmF"),
        "sJtRq": _0x394a59(798, "fJaX"),
        "tkVXa": _0x394a59(391, "SYoV"),
        "MjDhA": function (_0x770f41, _0x58530c, _0x2a3eb5) {
          return _0x770f41(_0x58530c, _0x2a3eb5);
        },
        "AsUeI": function (_0x383585, _0x22ce3a) {
          return _0x383585 * _0x22ce3a;
        }
      };
    await _0x2cf82b[_0x394a59(916, "CqB$")](Sleep_time, 2, 3);
    var _0x46fa03 = _0x394a59(656, "ySs9") + Format_time() + _0x394a59(850, "0Qw%") + Math["round"](_0x2cf82b[_0x394a59(456, "y!1F")](Math[_0x394a59(1008, "OT(A")](), 9)) + "}";
    return new Promise(_0x49c994 => {
      const _0x4dbd38 = _0x394a59,
        _0x377f59 = {
          "kRAha": _0x2cf82b[_0x4dbd38(440, "mKi7")]
        };
      if (_0x2cf82b[_0x4dbd38(711, "CDAT")](_0x2cf82b[_0x4dbd38(772, "mWix")], _0x4dbd38(769, "Kac6"))) {
        let _0x2e9664 = {
          "url": _0x4dbd38(744, "fJaX"),
          "headers": {
            "Host": _0x2cf82b[_0x4dbd38(340, "SYoV")],
            "Connection": _0x2cf82b[_0x4dbd38(461, "aw!x")],
            "authorization": this[_0x4dbd38(848, "aW]5")],
            "charset": _0x4dbd38(734, "281s"),
            "User-Agent": _0x2cf82b[_0x4dbd38(1034, "wCi1")],
            "Content-Type": _0x2cf82b[_0x4dbd38(383, "J)kY")],
            "Accept-Encoding": _0x4dbd38(1213, "nl62"),
            "Referer": _0x2cf82b[_0x4dbd38(778, "CDAT")],
            "Content-Length": _0x46fa03[_0x4dbd38(594, "fJaX")]
          },
          "body": _0x46fa03
        };
        $["post"](_0x2e9664, async (_0x2aa6d4, _0x3a55ac, _0x1614ba) => {
          const _0x42766a = _0x4dbd38;
          if (_0x2cf82b[_0x42766a(377, "^U85")](_0x42766a(539, "y!1F"), _0x2cf82b[_0x42766a(1109, "YO5z")])) {
            try {
              if (_0x2aa6d4) "OPwYM" === _0x2cf82b["PQOHn"] ? _0x4eea43[_0x42766a(684, "Y#HU")]("\n---\u66F4\u65B0\u63D0\u793A:\u5F53\u524D\u811A\u672C\u7248\u672C:" + _0x326d95 + _0x42766a(1032, "O@as") + _0x3caa55[_0x42766a(1216, "nkG)")][_0x377f59[_0x42766a(413, "y!1F")]]) : this[_0x42766a(415, "J)kY")]("\u8D26\u53F7 " + this[_0x42766a(1037, "1V5i")] + " \u6587\u7AE0\u5217\u8868:\u8FD4\u56DE " + _0x2aa6d4);else {
                let _0x30bae5 = JSON[_0x42766a(930, "281s")](_0x1614ba);
                if (_0x2cf82b[_0x42766a(422, "sr2p")](_0x30bae5["code"], 200)) {
                  let _0x3eded9 = Math[_0x42766a(894, "(DcV")](Math["random"]() * _0x30bae5[_0x42766a(347, "Na2D")]["records"]["length"]);
                  this[_0x42766a(1117, "OFng")] = _0x30bae5[_0x42766a(713, "$RhQ")][_0x42766a(816, "^U85")][_0x3eded9]["id"], this["dishesName"] = _0x30bae5[_0x42766a(905, "^U85")][_0x42766a(1086, "$kF4")][_0x3eded9][_0x42766a(471, "CDAT")];
                  if (_0x3e0ab4 == "\u6D4F\u89C8") this[_0x42766a(675, "$RhQ")] = _0x42766a(943, "u)Bt"), this[_0x42766a(1171, "CDAT")] = _0x42766a(1009, "$RhQ") + this[_0x42766a(1180, "jeMV")] + _0x42766a(378, "CDAT"), await this["get_task"](_0x2e9664, _0x46fa03);else {
                    if (_0x2cf82b[_0x42766a(1158, "fJaX")](_0x3e0ab4, "\u70B9\u8D5E")) this["url"] = "memberLike/thumbsUp", this[_0x42766a(616, "mKi7")] = _0x42766a(1064, "u)Bt") + this["task_id"] + _0x42766a(546, "SYoV"), await this[_0x42766a(426, "nkG)")](_0x2e9664, _0x46fa03);else {
                      if (_0x2cf82b[_0x42766a(782, "0Qw%")](_0x3e0ab4, "\u6536\u85CF")) this[_0x42766a(698, "(DcV")] = _0x42766a(1185, "Cd@1"), this[_0x42766a(525, "J)kY")] = _0x42766a(333, "kpbP") + this[_0x42766a(833, "(DcV")] + _0x42766a(826, "oB0Q"), await this[_0x42766a(386, "wCi1")](_0x2e9664, _0x46fa03);else {
                        if (_0x2cf82b[_0x42766a(1050, "281s")](_0x3e0ab4, "\u8BC4\u8BBA")) await this[_0x42766a(565, "aw!x")]();else _0x2cf82b[_0x42766a(720, "fJaX")](_0x3e0ab4, "\u5206\u4EAB") && (await this["doIntegral"]());
                      }
                    }
                  }
                } else _0x2cf82b["JPifj"](_0x42766a(548, "J)kY"), _0x2cf82b[_0x42766a(724, "Cd@1")]) ? this[_0x42766a(630, "mWix")](_0x42766a(1186, "$RhQ") + this["num"] + _0x42766a(608, "Kac6") + _0x4c9a56) : this[_0x42766a(771, "eDW6")](_0x42766a(970, "ySs9") + this[_0x42766a(372, "CqB$")] + _0x42766a(655, "ySs9") + _0x30bae5[_0x42766a(1222, "Kac6")]);
              }
            } catch (_0xc7707) {} finally {
              _0x49c994();
            }
            ;
          } else this[_0x42766a(431, "aw!x")](_0x42766a(1187, "^U85") + this["num"] + _0x42766a(1181, "PwR*"));
        });
      } else {
        const _0x4dae87 = _0x2cf82b[_0x4dbd38(879, "Jrb]")]["split"]("|");
        let _0x39a48f = 0;
        while (true) {
          switch (_0x4dae87[_0x39a48f++]) {
            case "0":
              _0x61c5a4 = _0x5c67f4["split"]("&")[2];
              continue;
            case "1":
              var _0x5c67f4 = _0xedac17[_0x4dbd38(504, "ySs9")][_0x4dbd38(657, "wCi1")];
              continue;
            case "2":
              _0x3ed2d9 = _0x5c67f4[_0x4dbd38(1132, "mWix")]("&")[3];
              continue;
            case "3":
              _0x49f198 = _0x5c67f4[_0x4dbd38(1145, "n7PQ")]("&")[0];
              continue;
            case "4":
              _0x109fba = _0x5c67f4[_0x4dbd38(947, "aw!x")]("&")[1];
              continue;
          }
          break;
        }
      }
    });
  }
  async [_0x3f288f(842, "Y#HU")]() {
    const _0xf65f5a = _0x3f288f,
      _0x1dca2f = {
        "kQsVT": function (_0x53bfdf, _0x43c5a1) {
          return _0x53bfdf(_0x43c5a1);
        },
        "jNUaI": function (_0x3f668f, _0x4b1bd0) {
          return _0x3f668f + _0x4b1bd0;
        },
        "smqyX": _0xf65f5a(567, "$RhQ"),
        "Iebhv": _0xf65f5a(847, "CqB$"),
        "rnjdg": function (_0x38c66a, _0x17e8f5) {
          return _0x38c66a + _0x17e8f5;
        },
        "kCkat": "\n\u6CA1\u6709\u627E\u5230\u914D\u7F6E,\u622A\u56FE\u8054\u7CFB\u4F5C\u8005 : ",
        "hzziI": _0xf65f5a(954, "Kac6"),
        "qNhsl": function (_0x4e0202, _0x2d51a7) {
          return _0x4e0202 !== _0x2d51a7;
        },
        "dEQrK": "JEtfu",
        "OQNSF": _0xf65f5a(535, "SYoV"),
        "iDsvP": "dvWVa",
        "QHZhO": function (_0x45ae3d) {
          return _0x45ae3d();
        },
        "ZhEXA": _0xf65f5a(1165, "mKi7"),
        "pbCWc": _0xf65f5a(1094, "Na2D"),
        "cqhXR": "keep-alive",
        "jnvBO": "application/json",
        "FbXAb": "gzip,compress,br,deflate",
        "uuGMG": _0xf65f5a(618, "EK0!"),
        "tUfbT": _0xf65f5a(615, "mKi7"),
        "GsCzM": function (_0x148178, _0x164d96) {
          return _0x148178 === _0x164d96;
        },
        "IiJZl": "Whgdb",
        "WPxuT": _0xf65f5a(433, "fJaX"),
        "SXjyJ": function (_0x14858b, _0x10f023) {
          return _0x14858b == _0x10f023;
        },
        "TfSLf": _0xf65f5a(732, "$kF4"),
        "iIUQp": function (_0x1f1235, _0x39ad41) {
          return _0x1f1235 === _0x39ad41;
        },
        "LaLvf": _0xf65f5a(845, "aw!x"),
        "bSNZR": _0xf65f5a(994, "8cNT")
      };
    await Sleep_time(2, 3);
    let _0x2de6f1 = "";
    if (this[_0xf65f5a(564, "PwR*")] == _0x1dca2f["tUfbT"]) _0x1dca2f[_0xf65f5a(788, "mWix")](_0x1dca2f[_0xf65f5a(486, "Na2D")], _0x1dca2f[_0xf65f5a(920, "$kF4")]) ? _0x2de6f1 = _0x1dca2f[_0xf65f5a(830, "Na2D")] : _0x45cde6 = _0x3b0b94["isNode"]() ? _0x1dca2f[_0xf65f5a(551, "NwdE")](_0x5f5d09, "os") : "";else {
      if (_0x1dca2f["SXjyJ"](this[_0xf65f5a(1112, "wCi1")], _0xf65f5a(1090, "Na2D"))) _0x2de6f1 = "\u70B9\u8D5E";else {
        if (_0x1dca2f[_0xf65f5a(1154, "RsCB")](this["url"], _0x1dca2f["TfSLf"])) {
          if (_0x1dca2f["iIUQp"](_0x1dca2f["LaLvf"], _0x1dca2f[_0xf65f5a(773, "$kF4")])) _0x2de6f1 = "\u8BC4\u8BBA";else try {
            _0x41ad2f = _0x5c4209[_0xf65f5a(388, "eDW6")](_0x1dca2f[_0xf65f5a(835, "eDW6")](_0x60d016["match"](/(\S*)scripts/)[1], _0x1dca2f[_0xf65f5a(846, "OFng")]), {
              "flag": "r",
              "encoding": _0x1dca2f[_0xf65f5a(430, "aw!x")]
            });
            var _0x2614c0 = _0x35ba32[_0xf65f5a(337, "RsCB")](_0x4e26b5);
            _0x3222c4 = _0x4ed372[_0xf65f5a(1059, "281s")](_0x1dca2f["rnjdg"](_0x1dca2f["rnjdg"](_0x1dca2f[_0xf65f5a(435, "NwdE")](_0x2614c0[_0xf65f5a(1044, "eDW6")], _0x13d99d), _0x2e70a1[_0xf65f5a(881, "Y#HU")]()), _0x376a6b))[_0xf65f5a(344, "281s")]();
          } catch (_0x5861ed) {
            _0x39cf90["log"](_0x1dca2f[_0xf65f5a(926, "jeMV")] + _0x4ab231);
          }
        } else _0x1dca2f[_0xf65f5a(521, "YO5z")](this[_0xf65f5a(986, "J)kY")], _0x1dca2f[_0xf65f5a(576, "Jrb]")]) && (_0x2de6f1 = "\u6536\u85CF");
      }
    }
    return new Promise(_0x32f760 => {
      const _0x4d0fbe = _0xf65f5a;
      if (_0x1dca2f["ZhEXA"] === _0x4d0fbe(467, "mKi7")) _0x1cd24d = "\u8BC4\u8BBA";else {
        let _0x5c84c6 = {
          "url": _0x4d0fbe(840, "mWix") + this["url"],
          "headers": {
            "Host": _0x1dca2f["pbCWc"],
            "Connection": _0x1dca2f["cqhXR"],
            "authorization": this[_0x4d0fbe(423, "OT(A")],
            "charset": "utf-8",
            "User-Agent": _0x4d0fbe(575, "$6#n"),
            "Content-Type": _0x1dca2f["jnvBO"],
            "Accept-Encoding": _0x1dca2f["FbXAb"],
            "Referer": _0x1dca2f[_0x4d0fbe(836, "$RhQ")],
            "Content-Length": this[_0x4d0fbe(775, "281s")]["length"]
          },
          "body": this[_0x4d0fbe(1030, "xbmF")]
        };
        $[_0x4d0fbe(1054, "$6#n")](_0x5c84c6, async (_0x8b27e7, _0x3e31e1, _0x3dd746) => {
          const _0x3f3149 = _0x4d0fbe,
            _0x51eeca = {
              "jUhSB": function (_0x300d1b, _0x1767b8) {
                return _0x300d1b + _0x1767b8;
              },
              "PVmcM": _0x1dca2f[_0x3f3149(715, "6HxV")]
            };
          try {
            if (_0x8b27e7) {
              if (_0x3f3149(1155, "OT(A") !== "BMiAk") this[_0x3f3149(887, "SYoV")](_0x3f3149(590, "Cd@1") + this[_0x3f3149(372, "CqB$")] + " " + _0x2de6f1 + _0x3f3149(464, "oB0Q") + _0x8b27e7);else {
                let _0x3e9992 = new _0x3f6ecd(_0x491eb1, _0x3c6ca9);
                return _0x3e9992;
              }
            } else {
              let _0x8db80f = JSON[_0x3f3149(930, "281s")](_0x3dd746);
              if (_0x8db80f["code"] == 200) this[_0x3f3149(1183, "NwdE")](_0x3f3149(880, "n7PQ") + this[_0x3f3149(912, "^U85")] + " " + _0x2de6f1 + _0x3f3149(366, "$u7#"));else {
                if (_0x1dca2f["qNhsl"](_0x1dca2f["dEQrK"], _0x1dca2f[_0x3f3149(554, "ySs9")])) this[_0x3f3149(400, "Cd@1")](_0x3f3149(1110, "NwdE") + this[_0x3f3149(1055, "J)kY")] + " " + _0x2de6f1 + ":" + _0x8db80f[_0x3f3149(814, "1V5i")]);else throw new _0x5bc475(_0x3f3149(942, "aW]5"));
              }
            }
          } catch (_0x104c46) {} finally {
            _0x3f3149(1091, "y!1F") === _0x1dca2f["iDsvP"] ? _0x292928["log"](_0x51eeca["jUhSB"](_0x51eeca[_0x3f3149(739, "aW]5")], _0x375616)) : _0x1dca2f[_0x3f3149(982, "nl62")](_0x32f760);
          }
          ;
        });
      }
    });
  }
  async [_0x3f288f(1212, "nl62")]() {
    const _0xb0d060 = _0x3f288f,
      _0x553e19 = {
        "XMHjS": function (_0x1eba30, _0x46a36d) {
          return _0x1eba30 === _0x46a36d;
        },
        "Dixju": _0xb0d060(479, "Y#HU"),
        "TwCuc": function (_0x4d8d04, _0x38afc1) {
          return _0x4d8d04 !== _0x38afc1;
        },
        "aduhO": _0xb0d060(367, "Mpt("),
        "Lxdtk": _0xb0d060(808, "J)kY"),
        "kVgoB": function (_0x363e38, _0x3e4355) {
          return _0x363e38 == _0x3e4355;
        },
        "eLlqe": _0xb0d060(1221, "OT(A"),
        "AxdHu": _0xb0d060(1204, "Kac6"),
        "YoysF": _0xb0d060(629, "$kF4"),
        "WQuAn": function (_0xda588e, _0x103452) {
          return _0xda588e * _0x103452;
        },
        "pTFpk": _0xb0d060(1193, "jeMV"),
        "tmSpr": function (_0x8f2efd, _0x13c6e4) {
          return _0x8f2efd === _0x13c6e4;
        },
        "ZSGns": _0xb0d060(1121, "xbmF"),
        "pqEFZ": function (_0xf2421b) {
          return _0xf2421b();
        },
        "QPVRQ": function (_0xf3caed, _0x537485) {
          return _0xf3caed + _0x537485;
        },
        "acDej": "\n\u6CA1\u6709\u627E\u5230\u914D\u7F6E,\u622A\u56FE\u8054\u7CFB\u4F5C\u8005 : ",
        "LsjRp": _0xb0d060(375, "Mpt("),
        "KoNBe": _0xb0d060(637, "zL7@"),
        "SQfQr": _0xb0d060(692, "OFng"),
        "Kxaan": _0xb0d060(747, "YO5z"),
        "EQmPv": _0xb0d060(882, "CDAT"),
        "CtYXL": "https://servicewechat.com/wx29cc5b53b37f7ae0/176/page-frame.html",
        "RDxDM": function (_0x1a1b4b, _0x388d51, _0x4bb92d) {
          return _0x1a1b4b(_0x388d51, _0x4bb92d);
        }
      };
    await _0x553e19["RDxDM"](Sleep_time, 2, 3);
    var _0x139f8d = _0xb0d060(538, "6HxV") + this["task_id"] + _0xb0d060(759, "Cd@1");
    return new Promise(_0x23a031 => {
      const _0x195f54 = _0xb0d060,
        _0x3a537b = {
          "QHovL": function (_0x561027, _0x3039f3) {
            const _0x497443 = _0x41a8;
            return _0x553e19[_0x497443(727, "Cd@1")](_0x561027, _0x3039f3);
          },
          "sNzCO": _0x553e19["acDej"]
        };
      if (_0x553e19[_0x195f54(392, "O@as")] === _0x553e19[_0x195f54(940, "EK0!")]) {
        let _0x2f160b = {
          "url": _0x195f54(1029, "mKi7"),
          "headers": {
            "Host": "apimarket.shinho.net.cn",
            "Connection": _0x553e19["KoNBe"],
            "authorization": this["token"],
            "charset": _0x553e19[_0x195f54(907, "n7PQ")],
            "User-Agent": _0x553e19[_0x195f54(1039, "fJaX")],
            "Content-Type": _0x553e19["EQmPv"],
            "Accept-Encoding": "gzip,compress,br,deflate",
            "Referer": _0x553e19[_0x195f54(625, "sr2p")],
            "Content-Length": _0x139f8d[_0x195f54(1182, "CDAT")]
          },
          "body": _0x139f8d
        };
        $[_0x195f54(1151, "$kF4")](_0x2f160b, async (_0x259be1, _0x430431, _0x3c06cf) => {
          const _0x38fd47 = _0x195f54;
          if (_0x553e19["XMHjS"](_0x553e19[_0x38fd47(427, "SYoV")], _0x553e19[_0x38fd47(1178, "xbmF")])) {
            try {
              if (_0x259be1) {
                if (_0x553e19[_0x38fd47(458, "6HxV")](_0x553e19[_0x38fd47(935, "^U85")], "HNQWl")) this[_0x38fd47(630, "mWix")](_0x38fd47(455, "YO5z") + this["num"] + _0x38fd47(726, "RsCB") + _0x259be1);else {
                  let _0x5eaa7b = _0x416b83[_0x38fd47(1093, "u)Bt")](_0x410d11);
                  _0x5eaa7b["code"] == 200 ? this[_0x38fd47(624, "n7PQ")]("\u8D26\u53F7 " + this[_0x38fd47(1055, "J)kY")] + " \u7B7E\u5230:\u6210\u529F") : this[_0x38fd47(514, "1V5i")]("\u8D26\u53F7 " + this["num"] + _0x38fd47(1075, "xbmF") + _0x5eaa7b["msg"]);
                }
              } else {
                if (_0x553e19["Lxdtk"] === _0x553e19["Lxdtk"]) {
                  let _0x4f60cb = JSON[_0x38fd47(849, "SYoV")](_0x3c06cf);
                  _0x553e19[_0x38fd47(390, "Jrb]")](_0x4f60cb[_0x38fd47(974, "CqB$")], 200) ? _0x553e19["eLlqe"] === _0x38fd47(449, "wCi1") ? (_0x4f60cb["data"][_0x38fd47(949, "nl62")]["length"] > 0 ? _0x553e19[_0x38fd47(453, "RsCB")](_0x553e19[_0x38fd47(1160, "CqB$")], _0x553e19[_0x38fd47(865, "CqB$")]) ? this[_0x38fd47(515, "$RhQ")](_0x38fd47(962, "aW]5") + this["num"] + " " + _0x581edc + ":\u6210\u529F") : this[_0x38fd47(1067, "PwR*")] = _0x4f60cb[_0x38fd47(1219, "J)kY")]["records"][Math[_0x38fd47(545, "Jrb]")](_0x553e19[_0x38fd47(837, "eDW6")](Math[_0x38fd47(1147, "J)kY")](), _0x4f60cb["data"][_0x38fd47(636, "0Qw%")][_0x38fd47(924, "SYoV")]))][_0x38fd47(805, "nkG)")] : this["Content"] = _0x553e19["pTFpk"], this[_0x38fd47(743, "NwdE")] = _0x38fd47(1078, "(DcV"), this[_0x38fd47(775, "281s")] = "{\"commentContent\":\"" + this[_0x38fd47(331, "oB0Q")] + _0x38fd47(342, "Mpt(") + this[_0x38fd47(667, "aW]5")] + _0x38fd47(606, "H707") + this[_0x38fd47(1045, "PwR*")] + "\"}", await this[_0x38fd47(587, "EK0!")](_0x2f160b, _0x139f8d)) : _0xb12ba["log"]("\n\u3010" + _0x1e591d + _0x38fd47(1017, "PwR*") + _0x20bd39["message"]) : this["cusLog"]("\u8D26\u53F7 " + this["num"] + _0x38fd47(801, "$u7#") + _0x4f60cb["msg"]);
                } else _0x176bb7[_0x38fd47(612, "YO5z")](_0x3a537b[_0x38fd47(1028, "nkG)")](_0x3a537b["sNzCO"], _0x321b6d));
              }
            } catch (_0x5c5b28) {} finally {
              _0x553e19[_0x38fd47(967, "oB0Q")](_0x553e19[_0x38fd47(776, "8cNT")], "PvqRI") ? _0x553e19[_0x38fd47(718, "SYoV")](_0x23a031) : _0x45f779 = _0x1c177f[_0x38fd47(666, "YO5z")](/作者TG_ID:(\S*)/)[1][_0x38fd47(981, "Cd@1")](/_/g, "><");
            }
            ;
          } else this["cusLog"]("\u8D26\u53F7 " + this[_0x38fd47(500, "Kac6")] + _0x38fd47(934, "u)Bt") + _0x96948[_0x38fd47(746, "kpbP")]);
        });
      } else this[_0x195f54(831, "Jrb]")] = _0x553e19[_0x195f54(599, "jeMV")](_0x518bec, 1), this[_0x195f54(614, "mWix")] = _0x2e416a["split"]("&")[0], this["openId"] = _0x2e3e66[_0x195f54(697, "fJaX")]("&")[1];
    });
  }
  async ["doIntegral"]() {
    const _0x1d7808 = _0x3f288f,
      _0x5efec8 = {
        "zEPuM": _0x1d7808(335, "6HxV"),
        "ywTwt": function (_0xf8fbed, _0x44d27e) {
          return _0xf8fbed == _0x44d27e;
        },
        "zhtCC": function (_0x49786b, _0x254f70) {
          return _0x49786b !== _0x254f70;
        },
        "WawIs": function (_0x104cb3) {
          return _0x104cb3();
        },
        "SmueR": "wSZwd",
        "hhJxo": _0x1d7808(686, "8cNT"),
        "GSXvE": "keep-alive",
        "glVjK": _0x1d7808(658, "J)kY"),
        "iFeAv": "https://servicewechat.com/wx29cc5b53b37f7ae0/176/page-frame.html",
        "gVQco": function (_0x489672, _0x3b90e1, _0x23c5bd) {
          return _0x489672(_0x3b90e1, _0x23c5bd);
        },
        "rhRkc": function (_0x5de5f0, _0x1739db) {
          return _0x5de5f0 / _0x1739db;
        }
      };
    await _0x5efec8["gVQco"](Sleep_time, 2, 3);
    let _0x1acbb3 = Math[_0x1d7808(1100, "y!1F")](_0x5efec8[_0x1d7808(750, "$RhQ")](new Date()[_0x1d7808(955, "Y#HU")](), 1000))[_0x1d7808(661, "6HxV")]();
    return new Promise(_0x2f8dd0 => {
      const _0x5f29c2 = _0x1d7808;
      if (_0x5efec8[_0x5f29c2(1128, "6HxV")] === _0x5f29c2(939, "zL7@")) _0x1eae87();else {
        let _0x11dfa9 = {
          "url": _0x5f29c2(1118, "O@as"),
          "headers": {
            "Host": _0x5efec8["hhJxo"],
            "Connection": _0x5efec8["GSXvE"],
            "authorization": this[_0x5f29c2(571, "$kF4")],
            "charset": _0x5f29c2(470, "(DcV"),
            "User-Agent": _0x5f29c2(1152, "NwdE"),
            "content-type": "application/json",
            "Accept-Encoding": _0x5efec8["glVjK"],
            "Referer": _0x5efec8["iFeAv"]
          }
        };
        $[_0x5f29c2(730, "nkG)")](_0x11dfa9, async (_0x42e765, _0x2157bd, _0xb95e72) => {
          const _0x474209 = _0x5f29c2;
          try {
            if (_0x42e765) _0x5efec8["zEPuM"] === _0x5efec8["zEPuM"] ? this[_0x474209(876, "Jrb]")]("\u8D26\u53F7 " + this["num"] + " \u5206\u4EAB:\u8FD4\u56DE " + _0x42e765) : (_0x5c2e03["log"]("" + _0x5c5a05), _0x3eb9af += "\n" + _0x179972);else {
              let _0x2b0936 = JSON[_0x474209(1177, "Cd@1")](_0xb95e72);
              _0x5efec8[_0x474209(825, "$kF4")](_0x2b0936[_0x474209(1191, "1V5i")], 200) ? this["cusLog"]("\u8D26\u53F7 " + this["num"] + _0x474209(716, "8cNT")) : _0x5efec8["zhtCC"](_0x474209(619, "mKi7"), _0x474209(588, "$u7#")) ? this[_0x474209(579, "mKi7")](_0x474209(382, "CqB$") + this["num"] + _0x474209(635, "6HxV") + _0x2b0936[_0x474209(751, "Jrb]")]) : _0x23d057[_0x474209(909, "jeMV")](_0xac80ca(_0x59f09b));
            }
          } catch (_0x5d1fdd) {} finally {
            _0x5efec8[_0x474209(819, "$6#n")](_0x2f8dd0);
          }
          ;
        });
      }
    });
  }
  async [_0x3f288f(365, "OT(A")]() {
    const _0x5cacb5 = _0x3f288f,
      _0x3bcaaf = {
        "DyCFn": function (_0x313d44) {
          return _0x313d44();
        },
        "PYMNi": function (_0x37b9fe, _0xeab819) {
          return _0x37b9fe === _0xeab819;
        },
        "SLSKi": "CXUJy",
        "MzvQa": function (_0x3bdf03, _0x401aed) {
          return _0x3bdf03 == _0x401aed;
        },
        "lFnnE": function (_0x204388, _0x36e55b) {
          return _0x204388 !== _0x36e55b;
        },
        "dkpXa": "WzhFG",
        "CPeIV": function (_0x64f4cf) {
          return _0x64f4cf();
        },
        "LXgKD": "apimarket.shinho.net.cn",
        "Asfqp": _0x5cacb5(998, "(DcV"),
        "HadZt": _0x5cacb5(737, "$RhQ"),
        "SSwDU": _0x5cacb5(908, "$kF4"),
        "PqKIK": "application/json",
        "TXFyN": "https//servicewechat.com/wx29cc5b53b37f7ae0/182/page-frame.html",
        "VERrE": function (_0x2e9b69, _0x4653ea, _0xf4eba7) {
          return _0x2e9b69(_0x4653ea, _0xf4eba7);
        },
        "fFKyM": function (_0x3be69b, _0xb68430) {
          return _0x3be69b / _0xb68430;
        },
        "sUHGA": function (_0x1b98bb, _0xaf683c) {
          return _0x1b98bb(_0xaf683c);
        },
        "XHowm": function (_0x235ce0, _0x5426f5) {
          return _0x235ce0(_0x5426f5);
        }
      };
    await _0x3bcaaf[_0x5cacb5(1072, "kpbP")](Sleep_time, 2, 3);
    let _0x31d21d = Math[_0x5cacb5(767, "EK0!")](_0x3bcaaf[_0x5cacb5(1176, "$kF4")](new Date()[_0x5cacb5(396, "oB0Q")](), 1000))[_0x5cacb5(931, "O@as")](),
      _0x570f91 = this[_0x5cacb5(1016, "$kF4")] + "," + this[_0x5cacb5(1172, "kpbP")] + "," + new Date()["getTime"](),
      _0x1c7eb4 = _0x3bcaaf[_0x5cacb5(1089, "H707")](encodeURIComponent, _0x3bcaaf[_0x5cacb5(929, "jeMV")](encrypt, _0x570f91));
    return new Promise(_0x47ea97 => {
      const _0x2d81b7 = _0x5cacb5;
      let _0x2f0450 = {
        "url": _0x2d81b7(1084, "RsCB") + _0x1c7eb4,
        "headers": {
          "Host": _0x3bcaaf[_0x2d81b7(678, "8cNT")],
          "Connection": _0x3bcaaf[_0x2d81b7(360, "1V5i")],
          "authorization": "",
          "charset": _0x3bcaaf[_0x2d81b7(784, "CDAT")],
          "User-Agent": _0x3bcaaf[_0x2d81b7(1107, "$kF4")],
          "content-type": _0x3bcaaf[_0x2d81b7(343, "nkG)")],
          "Accept-Encoding": "gzip,compress,br,deflate",
          "Referer": _0x3bcaaf["TXFyN"]
        }
      };
      $[_0x2d81b7(1020, "eDW6")](_0x2f0450, async (_0x5a6ad7, _0x3c44c7, _0x3db1ab) => {
        const _0x543414 = _0x2d81b7,
          _0x80df9c = {
            "MGkIa": function (_0x5762b7) {
              const _0x4dea6b = _0x41a8;
              return _0x3bcaaf[_0x4dea6b(906, "$6#n")](_0x5762b7);
            }
          };
        try {
          if (_0x5a6ad7) _0x3bcaaf[_0x543414(339, "281s")](_0x3bcaaf["SLSKi"], _0x3bcaaf[_0x543414(676, "NwdE")]) ? this[_0x543414(1183, "NwdE")](_0x543414(476, "OT(A") + this["num"] + _0x543414(925, "kpbP") + _0x5a6ad7) : _0x4a2cd9 = true;else {
            var _0x175c5b = JSON[_0x543414(841, "Y#HU")](_0x3db1ab);
            if (_0x3bcaaf[_0x543414(359, "eDW6")](_0x175c5b[_0x543414(485, "J)kY")], 200)) {
              const _0x38a16b = _0x543414(961, "mWix")["split"]("|");
              let _0x5dcc4a = 0;
              while (true) {
                switch (_0x38a16b[_0x5dcc4a++]) {
                  case "0":
                    await this[_0x543414(487, "ySs9")]();
                    continue;
                  case "1":
                    await this["weChatQuery"]();
                    continue;
                  case "2":
                    this[_0x543414(736, "$u7#")] = _0x175c5b[0];
                    continue;
                  case "3":
                    await Sleep_time(1, 2);
                    continue;
                  case "4":
                    var _0x175c5b = JSON[_0x543414(1036, "1V5i")](_0x175c5b[_0x543414(696, "(DcV")]);
                    continue;
                }
                break;
              }
            } else this["cusLog"]("\u8D26\u53F7 " + this["num"] + _0x543414(719, "Na2D") + _0x175c5b["msg"]);
          }
        } catch (_0xc552fa) {} finally {
          _0x3bcaaf[_0x543414(473, "$6#n")]("EHefb", _0x3bcaaf[_0x543414(858, "YO5z")]) ? _0x3bcaaf["CPeIV"](_0x47ea97) : _0x80df9c[_0x543414(1031, "$kF4")](_0x2ae7fe);
        }
        ;
      });
    });
  }
  [_0x3f288f(600, "YO5z")](_0x372198) {
    console["log"]("" + _0x372198), msg += "\n" + _0x372198;
  }
}
!(async () => {
  const _0x5f11fa = _0x3f288f,
    _0x51c46e = {
      "wnOsX": function (_0x420d9f) {
        return _0x420d9f();
      },
      "WQjdg": function (_0x33a3ae, _0x22d827) {
        return _0x33a3ae !== _0x22d827;
      },
      "cvMny": _0x5f11fa(441, "J)kY"),
      "aDzSK": function (_0x17c4ce, _0x39ef8e) {
        return _0x17c4ce(_0x39ef8e);
      },
      "hRYDQ": function (_0x301c54, _0x474834, _0x429389) {
        return _0x301c54(_0x474834, _0x429389);
      },
      "FnAHF": function (_0x544eec, _0x54dfb7) {
        return _0x544eec == _0x54dfb7;
      }
    };
  console[_0x5f11fa(1005, "(DcV")](_0x5f11fa(950, "YO5z"));
  let _0x5c5e97 = await _0x51c46e[_0x5f11fa(867, "Jrb]")](getUsers, variable, async (_0x398cce, _0x445e16) => {
    const _0x5b6a68 = _0x5f11fa;
    if (_0x51c46e[_0x5b6a68(338, "Na2D")]("kCkcr", _0x51c46e[_0x5b6a68(780, "eDW6")])) _0x51c46e["wnOsX"](_0x55bdac);else {
      let _0x5b5055 = new UserInfo(_0x398cce, _0x445e16);
      return _0x5b5055;
    }
  });
  if (_0x51c46e["FnAHF"](yyz_vip, false)) return;
  list = [], _0x5c5e97["forEach"](async _0x2a6c92 => {
    const _0x45892e = _0x5f11fa;
    list[_0x45892e(1024, "(DcV")](_0x51c46e["aDzSK"](main, _0x2a6c92));
  }), await Promise[_0x5f11fa(725, "J)kY")](list);
})()["catch"](_0x135692 => console[_0x3f288f(496, "jeMV")](_0x135692))["finally"](() => $["done"]());
async function getUsers(_0x1de9f7, _0x64c906) {
  const _0x43427e = _0x3f288f,
    _0x5055ba = {
      "ycmYu": function (_0x5194fd, _0x1d85fc) {
        return _0x5194fd(_0x1d85fc);
      },
      "lQUji": function (_0x9ed6b, _0x45ddbf) {
        return _0x9ed6b(_0x45ddbf);
      },
      "XzSmG": _0x43427e(1175, "xbmF"),
      "jaGta": function (_0x4c6f55) {
        return _0x4c6f55();
      },
      "SCqic": function (_0x473f41, _0x122187) {
        return _0x473f41 === _0x122187;
      },
      "sXUhZ": _0x43427e(766, "kpbP"),
      "ZbnnV": function (_0x28d0a5, _0xd93e2f) {
        return _0x28d0a5 !== _0xd93e2f;
      },
      "LKwCG": _0x43427e(610, "$6#n"),
      "wtnnc": _0x43427e(1011, "OT(A"),
      "GlhCA": function (_0x4abcee, _0xd62f32) {
        return _0x4abcee < _0xd62f32;
      },
      "FWgBX": function (_0x30f768, _0x456bcd) {
        return _0x30f768 === _0x456bcd;
      },
      "vIkqn": "fAfEm",
      "FgODi": _0x43427e(1139, "CDAT"),
      "cQdMs": "\u672A\u627E\u5230CK",
      "cUexp": function (_0x19e87e, _0x334c90) {
        return _0x19e87e + _0x334c90;
      },
      "fKXgd": function (_0x4bb523, _0x3f2192) {
        return _0x4bb523 * _0x3f2192;
      },
      "ahgjh": function (_0x445081, _0x382eb0) {
        return _0x445081 * _0x382eb0;
      },
      "ESwFL": function (_0x3a1634, _0x426182) {
        return _0x3a1634 * _0x426182;
      },
      "WfIFe": function (_0x47fb5e, _0x709c23) {
        return _0x47fb5e === _0x709c23;
      },
      "UqAlb": _0x43427e(1167, "aW]5"),
      "ngXDE": _0x43427e(1114, "nkG)"),
      "MCwjL": function (_0x3f633d, _0xee6990) {
        return _0x3f633d === _0xee6990;
      },
      "VMnLO": _0x43427e(892, "YO5z"),
      "Tltdv": _0x43427e(1200, "Jrb]"),
      "ZCErM": function (_0x41e8ed) {
        return _0x41e8ed();
      },
      "vpdJY": _0x43427e(559, "8cNT"),
      "ZSpWy": function (_0x22317f) {
        return _0x22317f();
      }
    };
  let _0xccaa4b = [],
    _0x50da61 = process[_0x43427e(1097, "nkG)")][_0x1de9f7],
    _0x17bf93 = ["@", "\n", "#"];
  if (_0x50da61) {
    if (_0x5055ba[_0x43427e(654, "aw!x")](_0x5055ba[_0x43427e(714, "Na2D")], _0x5055ba[_0x43427e(1153, "mWix")])) {
      let _0x3a4487 = _0x17bf93[0];
      for (let _0x1f2751 of _0x17bf93) if (_0x50da61["indexOf"](_0x1f2751) > -1) {
        if (_0x5055ba["ZbnnV"](_0x5055ba["LKwCG"], _0x5055ba[_0x43427e(573, "eDW6")])) {
          _0x3a4487 = _0x1f2751;
          break;
        } else _0x14a893 = _0x1011e2[_0x43427e(1101, "YO5z")]() ? _0x5055ba[_0x43427e(586, "Cd@1")](_0x3d31f2, "fs") : "";
      }
      let _0x2b1149 = _0x50da61[_0x43427e(345, "jeMV")](_0x3a4487);
      for (let _0x2630ae = 0; _0x5055ba["GlhCA"](_0x2630ae, _0x2b1149["length"]); _0x2630ae++) {
        const _0x23bdb1 = _0x2b1149[_0x2630ae];
        _0x23bdb1 && _0xccaa4b[_0x43427e(445, "SYoV")](await _0x64c906(_0x2630ae, _0x23bdb1));
      }
      user_num = _0xccaa4b[_0x43427e(965, "eDW6")];
    } else _0x7bba5d = _0x5eb299[_0x43427e(1058, "nl62")]() ? _0x5055ba[_0x43427e(399, "y!1F")](_0x522dd0, _0x5055ba[_0x43427e(1144, "sr2p")]) : "";
  } else _0x5055ba[_0x43427e(563, "O@as")](_0x5055ba["vIkqn"], _0x5055ba[_0x43427e(1096, "zL7@")]) ? _0x4a2a13[_0x43427e(1000, "O@as")]("\n\u3010" + _0x6f6326 + "\u63D0\u793A---\u7EE7\u627F\u767B\u5F55\u3011: " + _0x5bd49b["msg"] + _0x43427e(532, "aw!x")) : console[_0x43427e(361, "aw!x")](_0x5055ba[_0x43427e(585, "YO5z")]);
  console[_0x43427e(1085, "OFng")](_0x43427e(1051, "Na2D") + new Date(_0x5055ba[_0x43427e(807, "PwR*")](_0x5055ba[_0x43427e(452, "mWix")](new Date()[_0x43427e(605, "Mpt(")](), _0x5055ba[_0x43427e(1043, "mKi7")](new Date()[_0x43427e(941, "OT(A")](), 60) * 1000), _0x5055ba[_0x43427e(948, "NwdE")](_0x5055ba[_0x43427e(898, "$u7#")](8, 60), 60) * 1000))[_0x43427e(740, "SYoV")]() + _0x43427e(1168, "n7PQ")), console["log"](_0x43427e(768, "H707") + user_num + _0x43427e(510, "Kac6")), true;
  try {
    Tips = author["match"](/(\S*)TG_ID:@ls_soy/)[1];
  } catch (_0xe77d83) {
    if (_0x5055ba[_0x43427e(827, "kpbP")](_0x43427e(409, "aw!x"), _0x5055ba[_0x43427e(641, "mKi7")])) throw new Error(_0x43427e(380, "xbmF"));else _0x5055ba[_0x43427e(1041, "kpbP")](_0x359bd1);
  }
  try {
    _0x5055ba["ngXDE"] === _0x43427e(405, "fJaX") ? this[_0x43427e(514, "1V5i")](_0x43427e(754, "y!1F") + this[_0x43427e(492, "$kF4")] + _0x43427e(439, "eDW6") + _0x105e5d) : YZ = author["match"](/作者TG_ID:(\S*)/)[1][_0x43427e(488, "nl62")](/_/g, "><");
  } catch (_0x2f1032) {
    throw new Error(_0x43427e(691, "eDW6"));
  }
  if (!process["env"][_0x43427e(1083, "6HxV")]) {
    if (_0x5055ba[_0x43427e(425, "CDAT")](_0x43427e(1156, "sr2p"), _0x5055ba[_0x43427e(971, "281s")])) return console[_0x43427e(355, "sr2p")](_0x43427e(1018, "ySs9")), true;else return;
  } else {
    const _0x29c51c = _0x5055ba[_0x43427e(552, "Mpt(")][_0x43427e(697, "fJaX")]("|");
    let _0x5443c9 = 0;
    while (true) {
      switch (_0x29c51c[_0x5443c9++]) {
        case "0":
          ql_id = _0x553db8["split"]("&")[1];
          continue;
        case "1":
          ql_ip = _0x553db8[_0x43427e(609, "PwR*")]("&")[0];
          continue;
        case "2":
          TG_id = _0x553db8[_0x43427e(414, "Jrb]")]("&")[3];
          continue;
        case "3":
          var _0x553db8 = process[_0x43427e(398, "OFng")][_0x43427e(574, "O@as")];
          continue;
        case "4":
          ql_secret = _0x553db8[_0x43427e(809, "nkG)")]("&")[2];
          continue;
      }
      break;
    }
  }
  return await _0x5055ba[_0x43427e(1161, "RsCB")](get_version), await ql_config(ql_ip, ql_id, ql_secret), ql_version && (_0x5055ba[_0x43427e(893, "6HxV")] === _0x43427e(1052, "xbmF") ? _0x110e09["log"]("\n\u3010" + _0x5b6332 + _0x43427e(978, "6HxV") + _0x823135 + _0x43427e(1113, "Y#HU") + _0x23c889[_0x43427e(987, "NwdE")]) : await _0x5055ba["ZSpWy"](soy_yyz)), _0xccaa4b;
}
function encrypt(_0x1b112f) {
  const _0x2b52bc = _0x3f288f,
    _0x432ed8 = {
      "WRVvU": _0x2b52bc(508, "$6#n")
    };
  var _0x52d310 = Crypto_js["enc"][_0x2b52bc(913, "$RhQ")]["parse"](_0x1b112f),
    _0x58ab8e = Crypto_js["enc"][_0x2b52bc(755, "CDAT")][_0x2b52bc(1023, "$RhQ")](_0x432ed8[_0x2b52bc(652, "0Qw%")]),
    _0x3ea3cd = Crypto_js[_0x2b52bc(403, "^U85")][_0x2b52bc(1062, "0Qw%")]["parse"](12345678);
  return Crypto_js[_0x2b52bc(895, "OFng")]["encrypt"](_0x52d310, _0x58ab8e, {
    "iv": _0x3ea3cd,
    "mode": Crypto_js[_0x2b52bc(332, "$RhQ")]["CBC"],
    "padding": Crypto_js["pad"][_0x2b52bc(904, "Kac6")]
  })[_0x2b52bc(560, "xbmF")][_0x2b52bc(918, "1V5i")](Crypto_js[_0x2b52bc(1003, "eDW6")]["Base64"]);
}
;
function _0x34cb() {
  const _0x55cd39 = function () {
    return [version_, "GVHOjRsNjnDiKdaCmQir.OTcgomrFx.WRvNn7hgt==", "ESo6WOldQ8kxWOG", "WOmaWPldUCkJ", "jmk1rJe8", "u8olWO7dOCkg", "WR9FWRNdJmkmW41+z8oSaba", "6lAL5yY/Dq", "W6DEqSoggW", "W6jxW4i4Fa", "WQy0cCoet8kIW7W", "W7pdH8kreW", "WQVcImo1juq", "WQCOp1VcMLdcR8kQ", "W7/dTsGsra", "5O6R56symGJcKq", "WOlcP389WONcQWhcSCkAWQG", "W5jmW7KqrhG", "C2pdPMb+dqe", "EWBdJuVcTG", "W5/dKZyDBq", "W6ldMSoYW53cQmopWPhcM8oKkmkvdmoS", "W5JdP8kSWQHbW69EWRJdHxD2", "jgzb", "W4ddRYe", "rSk6WO3dPcGoW7VcVq", "nLddMmkOW4S", "EmoaWPhcMInq", "W4ZdQSkGW58A", "W5ddRCklW6KQWRxdICkQ", "W41onL3cTCo0WRzs", "WR1kWRhdNmkiW4Tyxmo5hbaObmoeW5pdHSkKrSoofvyQcq", "WPWfBenOuaDi", "paeNWQFcTW", "uuhdSCkflq", "yK7dN8kfs317W4S1WRq", "W6WMWQTsW58", "aSk6qa", "pc0qWPdcTq", "eowiJEs7NKi", "C8oXWO8", "W4FdSCkBW5GI", "zutdNq", "W59Mqq", "W7S0WPXPW58", "WQVcHSoUl09F", "sYKChfNdS8kNl8omWQC", "W5NdQr8AgSkOW5tdLLCUW5a", "WOZcNCoulgy", "sZWDF8oZW6ddLa", "W7pdLse", "e3fmWRrzWPxcLa", "W5RcLb57W4r0WQnoWQtdQCkQdSkv", "WPdcRgibWOlcGqO", "5O2V56A4W7xdGXNPN5hPVQVKVidMG4/JGiC+yW", "WONJG5JKViNOGltMJOVNPQNJGOhVV7FMSiRMNiFMIklLIz/PN5ZOPQlNMz3LJkZPHluVmY7dI8kqW6JdGCkbWPLLW7JcN8o5WPW", "W4ddO8kSW7W", "CCo6WPG", "W6lcMIfaW4u", "WRFcKSoT", "qgOhc3i", "Ev7dICkD", "W4pcPSkRxCoakW", "foADKUwlJUwzVUElI+AEUmkD", "WONcUSoUW50cWRyeWOpdJgvnch0", "WPazeSo2yG", "W5FdKKtcNCoAWPdcQ1BdHXzLW6OSg8oFBYjcWRyaW5yLWRFdJJ0VWQu4WPNdISk1bg1UWQ/dHHLWWOLYwZTbW4JcHLBcOqZdQclcLuldGCkYW4mtqCkHWPxcJIDqWRKRDW/dGgxdKCorqfTg", "uIf1WPm", "WQJcHwaNWO0", "qUAFMowkHUwAKoEkPoAFIgy", "W6fSyX7dHWFdT8kvFI4lW5m9", "WRiFqg18", "pmk3CG", "W4dcISoKWPNdMa", "W57cNSo7", "zfJdNq", "BZzPWPil", "qmkGWPm", "dCkSAJ5H", "fmoXWQTKeKxcVCoiW6rQjmkX", "W5NdRwJcISon", "y8oSWONdVSknWOhdJmkT", "W5VdQ8kRWOzrW7b8WOddJxm", "W7ZdKvtcPSog", "sHr/WQZcRa", "yw/dO8k3lG", "uh/dSmkdbW", "W6fgxmoHiq", "WPFcNxfVF+IhOEAEP+AlVEIHKKxcUmkX5y2Z5lMA5PsL6zsx772q", "uYj0WRlcTG", "W7RdNmosW53cImodWPZcKW", "tr1lW7i", "p2fa", "mYa/WQZcOW", "kSkDuIy0", "qZ3dMuZcNsu", "W7Xxgq", "W7ddKYS", "W5XGsW", "iqvOWQC", "mhbwD8oP", "WRFcTxqYeSoEWRpdKWZdOZVcUXNdSK7cL3RdQGJcLI4kEwRdOSk1zCkMj8klW6zQrmkClmkQha", "W516x8o+bSkmoCo4WONdKN4Mga", "lM/dHSk3W78", "W7ZdRCk2WPPrW61g", "W5RMIzhKU5hLIO7KVBdOT687umoNcqu/h8ogW53dMSohbEITLEIgK+IHV+wVGoIIUmkj", "amkOwq", "nMBdKmksW5i", "r8k+WOBdGbW", "mCkiFZHf", "WOjQWORdRSkb", "W6ZcUdbdoSoNW7xcUCosFJK", "eoESSowiOCoq", "W7BdRMhcHSoV", "B07dLa", "ze7dL8kxa25uW40UWRWrbbRdV8olWP/dGSozW54BW78ExW", "W4FcPSkc", "WRDkWQJdTSkcW4XPqa", "W4rTdKdcIa", "WP58xmoVoSogo8oIWPddLZq8eZCTWQfMAYlcSdmUeIBdH8o1ja", "ce1MESonWQlcMf1pW4yLWO88", "W4KQWQ1RW5VcOI7dKxrUiCoanvS1W7VcJ2uCWRRcN2NcIrhdU8k6aCo7WPFcG8oFhmksWODtWR3dQdH7W7JcLSkrcWabW5ninSoVFhVdVmkHAmobW7HtW7FdQSkiwCkVWQ/dM8oOsKBdJmk/AHRdKSkAiSkaW4/cN3vNyCoh", "FqNcNW", "WPFcP2GbWP7cRb0", "qc9JWPNcNG", "coADG+wkQEwAM+EiREAFLCkW", "eCkRW4pdSsq", "W6/dGsi5nSkvW6ZcTwWeW7VdUG3cMmk0WReUWP3dIG", "W7ddTt0XCa", "W6eEW6ZcISoCWOKJy8oxaWu/na", "WRZdTMOOha", "W7ZdKcu/pSkjW6ddV2PlW6BdUq3cMmk7WOXKWPRdNmkaW6FdJt4", "WQNcQSoimwO", "j2xdS8kEW7m", "WQq/cW", "mmo8WOddPCkgWO7dLCkxCdSPqfNdHmoT", "WPydALWWxX8CW6Gn", "W47dNJSRBa", "d8oNWOrVmeK", "W5hcUCogWRRdKW", "CCo6WPJdImkcWPtdHa", "W7RdHmkgh2W", "W4tdHIddTSoj", "WPWEzKnU", "WRBcKxWQWRK", "W67dKN7cJmo5", "pSonWQLqiq", "6lAl5y2RzG", "zCoCWOZcGtvCW7f+", "WOGuyW", "5Rgz5yA144kBzGS", "WPC3eCoKFG", "fSoGWPTnhW", "W6BdTSoeW43cRW", "zqFcI8kpW4GDWRK", "bSkHu8kiWP/dNNpcSSkPW4hdMSozWOXGhCoKWRqUg8okErPoqCoxmCk3W64PvYTpzKS0vIxdISk7b0hdGuWsW6NdKCk6W55AW7LGW61qW47dKmkcW55Oc8kNDxbUWP7dRvFdVNhcNSkbWQlcGSk2WP99FadcHIzyedxcQW/cGrZcG8obe07cI8kQWOJdJSo6W6aNWPRdPGqTfwddRCkdD1yVs0pcG8kcWOq", "AWHiW4D/", "W5uXWR16W5hdI2JcMxTxjG", "ydHGWRJcSG", "vdai", "xxGs", "WQKwW7WVsSkKWRpcHuNdGxRdHSkEFWhcVSo0WQSpmx7cVfRcJhzKWO/dPq0HWP8ZzcnNW5VdNmouWQ0ZymopWQ43qSkYW4ynjYrieJHVuNL7jIT1wSkxBmogmCkMhWBcPMG4WOq3WOPaWRddSw5cW7PbWOKhW68+WPpdTSk0fCoAW5RdRYxdKSkgqqyMWPaYW6pdImkeWOhdQCkTg8kux8oKW7TVtwhdMKZcNmo7WQhdJhpcM8kvW4TAeYbIW6FcKmoNW6pcQSk7WPtdTSoKpCoQW4PNWPJdG2ewW6KVW44cW6uYWRrvlCoWWOddG8k0W5lcRSoeW4fryxpcTLFdQGNdGs1osmo1cSk4Bmo7iIhcKSksW5JdIwP3W5ldRSkPzCodxmkUF8oOgbpdRCkGkxJcOMNcKwmpW5FcHSkmx8oPA8kZWQVdKtRcJqCafN9nCtWDzmoqWOpcMvlcO08cuSoXW4NcSCkrtwNdKwRdTXdcM1hcQ1LRWOlcMg0zWQLImmoIlmo7W47dJCkbySoXyGXTAcrfW5K2WQ9ccujcWOiOW5jaWORdVZFdJ8k7WQfcEmobW5NdGXX8WQtcMapdHh9RWPpcT8oBCZhdGmoTDIeGWQigeG", "mNjco+IgMEAEUowEL+wFQqa", "W43cSmkrzSoni8ks", "5O2656srBZ3dTW", "ke9QqmoU", "tJODzCoQW7VdIq", "uZTIWQBcLmoL", "W5xcIb5dW7L2", "xCkLWPldUti", "W59mW6C", "W7FdJCkbo1mfWQfg", "amk3rdOSWR3dMcioeujEW4OxFaVcImoOwSonW48Fm2S", "ur1F", "W4NcQqbdhG", "uNOnphG", "W7ZdI8oWW4VcSG", "WRRcKSoZb09v", "BsKPBSos", "nNfzWPvzWOtdM8kNW6FdTW", "W5b4ASoLda", "W7lcR8k2x8oJ", "asCMWOldLG", "W6/dNhRcH8oh", "i3vdWQjtWOO", "WRJdHmoXW5NcLmo9WRq", "W6rglutcOa", "j8oJW5/dSmoxWPZcKCk0mq", "WPxcRxGA", "W6ddSZZdKCoVWQz6WRzPW7KjW6q2W7z8W6ddMmk7W53dKdewjCo5kCoDF0CYW5TsW79cFYvUkCoYW7qiW6/dPwlcU8kXWQ/dGgldPLRcHY/dHmkcCs7dQCotWRawW5q+WOOdzmkwW6VcKJKLuCkoWPTRWQpdVmopgmkfm8kVc8kknSk0mWtcJH/cHM4Pz3FdJ8oMWQr0WRZdNa1SDSkNsmo/kvmVBZDSCCosWODprCk4khVdRr3cHaRcNmoYmWpcL8o/DCo0eSo0WQ3cHtH7CIjjW4KCWRXUbJZcI8kNW7/dM8kgWQSnWOSobhpdGfvwmeBdTmoFnSk/EJxcQSoXlamaWPekWRVcL0JcKqL2WRjlBYlcG3VdRSkouhXbWOxcQ8ktW7ynW7jDWPKWW6WiWOldHSkblmoOx8o9W7KoW6TLWRiaW7pdVSo6WR3cQCkcW73dRxdcSq9/tmk6hwpdGX4GWRHDbmkef8kypW7dKMaXW5xdTmofW45pW5OVqeLBW47dQxddHXOHWRuKW7yTvmoyW7pcVHZdHfFdUColW57dHmkjWQ0ahSo6WQFcICoQd8oNW6KFdKhcRmk1bmkRhCoXW5zNWQlcVL/cVwxdS8ketCo4mSkjWOWd", "xCknWQVdUbW", "W7igWRnIW6i", "WQRcISoNpwG", "W5pcSmkuvmox", "WP3dO8ojWReq", "FrrDWOeR", "W4FdP8kzhwy", "W5hdKmkrpKK", "W7SDWPXPW6u", "WOSdyfrQ", "WONdUSo2WOKb", "fYG7WQxcLa", "W77dQ17cV8o7", "zCo4WRBdHmkq", "t8kjWQmQrW", "uMP3W5y", "W6/cPZi", "W7hdPGiTxW", "W6ZdNmoLW5a", "cmk9scrjWRO", "W5ZdRCk1WOnrW61gWQldJ3HWjNRcSq", "WQBdO3W6hG", "utz4WOxcIa", "WOpcHeaxWQe", "CwFdPh96", "DcDPWOdcJG", "W7RdVMJcVmoo", "zCosWQZcNHHCW7S", "WP/NR7ZLI6JdLoAiPowiNa", "W6ldLSoVW47cJSoc", "W47dQtxdTmoSWQ0", "W5VdO8kqWP1Y", "BgpdU256hcClW7NcQJ5GWPvNW68UW4yajMOGW7/cMW", "6lsw5y+8vq", "6lE05y6SEG", "WP/cHmoMWO/dK8oGDuuehJ13", "5O2656EVW4GFWONPNjZPVA7NMRNLVy/JGklcTcifo8oudJlcPc53C8k/WOZdG1hLJi7PH6ZKU7pLIjNdT+s4OEwoJUAwOUs5ToIaUEs5JEEPJa", "WQqlhKJcTq", "W5pcHmoYWO8", "W4lcMmkVwmol", "5lIC6zAQ5lUs6zES", "DgOreue", "W7XQW5meAq", "W47dPsFdJSo0", "W6NdIaiaua", "W4WTWR4", "6lwW5y6ovq", "zqveWPJdQSkupmoGpG", "WQK9WRm", "WRddJ8oLWPbniCoo", "W5H2DWtMMidMLOhMJjlNP7uO5BYE5yIu6iAW5P2A54IC5PYfW6K", "W4VdJmkDW40P", "WPuinw/cUq", "EqHoW6HT", "gGrJ", "W5hcM8oMWRxdK8k6Dfa", "W57cUSk2rSowj8kzWQu", "WQVcKSofg3O", "CtPUW4S", "tcFdUuFcQseJW5mjW5JcLG", "tttdVLpdLsm+W5SxW57cGa/cRCohqCk7c1jHW6NdV8k9A8ow", "WPuiW78dtq", "rZT7WR8kWP4", "WQWIgG", "WR3dSSo3WROv", "WP80iedcMf3cO8oGj2nPWOPEgedcVCk6W6WAW5/dGSkPsSoqW6TKxSkVW4DyWOW5WOnZDwKGW7OsW4ZcICo5WQ0csmkPEXDhhWa+y8khW4hcP8knsM1nW4hdLer1wIpdHM1wW6bZWOvMimoSAqJdGX7dH8oHW7XkxSoDx8kRCMVdTSoKWOKcWONdPmkwWOxdQ8kqeWxcGmkxW4HbWO/dIZxdG8k2WOVcVsTykcvRb17dP2PJWRThW49gaSoaW6emWOOllXFcO8ksWQiNi0P7FbVdM2FdJg3cGCoDWQODWQmVWOJdR8opDSoUvSonWOJdRezHWR3dNwFcQ8ohwCk5yu8mlSoNWPKUWQpcLYWYW7JcK8kDWQhcS8oGWORdUCkBfSoEACk0m1yTACoaASk/WPBdQmoOvSkgW5VcHhPogmocWQSjWQXZWOewxHVcJHLhjJSGa8oLW6ddPbFcNmkbW6zQxGTXwSoyoIuoE8kbDSk6gtbdB1xcTmo2WRNcQg7cOansW5FcNmoJcSoravVcV3pdLvBdUCoqAbddRsldShNdKCouW5JcVCkFWQj5FwVdNSoaW4eEWR7dQSorWP/cVcNdPsyTWOpcK8kWuHqOWP9MW5xdVmoz", "nxvzWQC", "yCosWQ3cHIi", "WRdcImo1m3a", "W4NdSCk/", "hmoVtIvUWRJdNIGQgLDiWPSbpdddQSoyESoSW7e/cYZcTZTJWOriW5KjndNdPtpcRtddJIX0WOVcLCk0WRWrW5SzWQP9zgm", "e8k3EZuRc8kq", "xwqrhq", "hmoVtIvSWRldKIWklfDiW4TAAHZcHSk2s8ozW5yBAYZdUhz/WOLkW58UdYBdS37dONdcNwuFWP/dLSoP", "W6/dRYzd5PIy5Pw45yER5A2MW4q", "nhTXFCou", "W5lMI4xKUPZLI5dKV6ROTzJdGupdOfXZrMWY6kYX6is/6kc45A2l6kgooa", "W5e/WQTOW40", "W4RdSsy2oa", "W6fkyCoepq", "uZuGESoQ", "W5rSW5Guxq", "W4zvWQq0q8k7WR3dNW7cJc/cR8osevi", "WPeGnSojzq", "W4v8F8o+jSkanmoW", "ySodWRpcNdm", "zmkzWOGRxCkY", "W7NdGtGZ", "FXPvWR3cVq", "W6ZdRmkqWOPJ", "xcHbWQpcRq", "DHHjWOKS", "EhPNW4BOHRJMNkJLNQZLN7mC", "5O+b56wCW5xdICk657Qt5OQI55MB5B2544kWoIK", "6lAO5y2eWQe", "W4BcUSkc", "WP5iWPddMSkJ", "WRL1WRRdSmkN", "iSkdW67dH34bW5nVWPK3kZm", "w8oLWPRdNCkc", "W7hcMmoWWPVdJq", "WRtdLmo2", "a8k0u8kBWOq", "W5hcMbLcW79/WRvvWQZdTW", "WRdNR5BLI4xNI4dMGl1r5lIF5PEl5BwI56215yIi", "WQVcGSoMouvbq29OW4hcMG", "W7RMIBxLIAS", "WPilW4CRBq", "WOlcP386WOxcPqS"].concat(function () {
      return ["WPZcRxBcJmkYW7OJW4KEWQrjWRbA", "DmoRWRpcKbm", "5O6Y56EeWQBcM0G", "W77dNCky", "WRFcHg4IWQ8", "W67dHXyAla", "WOynW64rCW", "WQ3cQvSSWQa", "WR84cfpcLW", "WQlcKCoUW5NcN8oyWPpcGmoGkSkEnSoXuCkUWO5CnSktW5JcMCooWQfGtmolBNn2W6CHcc1RWQNdQIqdgmk1", "5O2H56sdWQDXbUMDJEM+RoEzH+w/G+oaIsX4", "oUobNUs9JEIdR+AmQ+EMUoodVo+/MEMQNEIUIUIhIUADTqNdI2hLPidOTRVdLEIUVowlHUs8HoAxR+IgN+ACGUs5JEs7PoAhOowfHEwVRH8", "W5hdKfpcL8on", "6lA25y2FW5u", "iL5zWPrn", "W6lcKSkdF8os", "W4hdTtxdJmorWQ94W7yXWRPCWQP6", "WPOdE3nPxWaE", "W7ZdPmoKW5/cUa", "zmo6WO3dQmkLWONdJCkTucCKuq", "W6FcRqnzW5u", "ps8sWOVcMa", "ucSBzSoWWQ7cImkgsCohW57dKuOhWQjczSoivhpcImoWCCoGFmotlGyhW6BdKL1pWQ/cRmoZWPvqBH98W5qQj1xdMsDpW7xcMvldS1P3WPWhWRhcG8kewSkauSk6WP0", "iSkMtCkQWPW", "o8olW597gSoSyrSVkwGpmW", "WRxcG8oUpum", "W4NdHsHOma", "n8k9yruNcmkb", "WRKJxa", "DaJcJG", "W5ddObSVyq", "yNpdPubWcq", "WQVdSMWihmoyWPpdJq3dOG", "6lsW5y2OW4W", "WRC1oq", "W5jMx8ogo8ko", "yaXoWP0T", "WQldNvWvfq", "cCk7tJbK", "W4xdSq7dLmol", "WP/dJSouWOyz", "WRhcK8o0o1mibbrMW5RcLG4PWO4IW4WeWP8oW47cOqRcMw94b8kweSktx8kGWOdcSviMw0RcJfv/eCobW6ZdMc7dOfJdLervyCoYW5VcUmoIFsvnydOUkCoVW7NcMZddUwNdThn6", "W7ZdMHFdVCob", "5lMr6lse5y+O", "W5FdOW8TAq", "jqKzWO3cRG", "mMfEWOPtWOa", "W5RcKGO", "W6KrWOP/W5S", "FsfRWOpcL8oUWOZdRcrLW6b5CSopsv/dQ8kbCbNcQ8k4W6fCd3BcI8oGzIucWQZcMSkChhtdN8kcW7VdT8kpwGhcHSoKr3ucn31FaSkJWRZdSu4+WRhdTJ9rzWRcOYr2WPJdT8kuWP4mW682zN/cMmkuWOzmWPxdLCo/W4/dOH3dTKeYoGJdTI/dShSzWRmJWQGXgHKcF8oiubBcRdSGW5pdOSonW7NdIvLmer1dW7pcUtWaEmoYrWHQWRBdK8otWQ3dVwTkW4KRW4FdHtRcOr50WRldT8oHWPZcT8oorrBcJmo2q8oYW7RcUHtdMZqAW6NcImoAwCo3wCo8WRRcSWnCWRJcHmkxWQn7u8kLvSkabCkZW43cHmk8W78sW7TAE0yBBdv3sunJWOFcPa4ynSknBSo7lmk0WRNdKCo0WQRdQ8klWRRdMSkomq/dRSoSwSohCfjaW5uiW4/dPCkEmstdTYy2W5KscsqGquRdUCocmZRdISoKFCoSW79rWRlcGw3cTfD4EhPWW4ldQ8o0gqCwrCo3C8kjD0RdHSoTeSoEW7WhW77cPgxcSCo2W5/dSZldIYhdVmkIWPquW51zexKXEmkxd8kWWRizW7tdSdRdNCkCWQZdNq", "zCkpWOe", "EuldNCkAca", "ewpdJSkPW78", "W7pcJ8kWqmoQ", "WQ3cImoRlK4", "W65uWQTR5PUs5Pw45OYc56AqrUw+VowiH+IhVoAEMUEjU+ADHmoQ", "W4pdSmo2W4pcTG", "WQy0cCoFwSk3W6RdGW", "FdyxFmo2", "WOuQmxRcHW", "xmkEWQiPBW", "WPhdNSoZWOGb", "WRVdJSoIWQWyAq", "d8kLv8kuWOxcHZ3dQCkHW57dNCkBWODHgCoV", "5RwR6kAg5PAp56It", "WPi4gSoUz8k4", "W4FdKHpdMCok", "FZ7cLSk2W68", "hSo3WQ1xoG", "W7xcOsu", "nUwkQoAvNmk26lY35zI+WOe", "W5NdThhcVCof", "oLDgWQvo", "W5BdRCkTW7m8", "AGnHWO/cJW", "cmkrvaml", "scOCFG", "WPOMWRFdRCkA", "C8oCWOJdImkc", "mSo2WO5LeG", "WPqjELrn", "WQRcL8oSiLq", "bbSnWOZdKG", "tCkaWPVdQdy", "W7KtWPfXW7S", "W77cQSoYWQJdMa", "6lwa5y2JW6O", "W73dGHSGqq", "W7xdNuGWfCoPWPS", "l1vCumoF", "DGpcJa", "zWXl", "WRFdR8oIWRaJ", "FXpcLq", "W5ldThVcNSo8", "AUI8JowBI2e", "WOBdK8kLW5/cICk+teuejd4", "WRxcR8o1W4pMM4dMLlpMJ6lNP5VcMUw9HEwjIEIfMEACUoEkJEACPSkF", "W5FdQxtcLCo6", "fqfNW7jRB8oxW5tcK8oVW53dQHJdOHFdGmo1WRG5W4JcKSkyWPm", "WPG2kCopBW", "Ff/dNmoyxG", "W6RdMSoYW4hcN8ozWRZcLCoKia", "WPBcImoWW5/cJSo3zfOuwMSQW6NcV8kdW742sCoBFCkEWRVdSbOJW41qo3bIiSkVW7S", "utrwW6Hp", "W57dLKdcSSolW4G", "zoAkQ+s4QUwlIos9SEI2SNZdKSkBWPhcN+ITG+IeH+IHNUwVV+IHHmok", "6lE/5yYqWQa", "W63cVtG", "W57dLmknW7C6", "W4jUW6msuW", "WRxcOSohiKy", "wSkbsmkbWPRcVtq", "ySoAWQBcHXm", "W5ZdT8kRWQjBW6q", "zwFdOM0", "mNTjWQm", "W5tdIqyimW", "W7dcOtjFcCo2W7pcGSozAI8", "wcVdP0/cMcm0", "WPqiA0LLCru", "uWDv", "ptOWWOBdHW", "WOVcT2y", "W47dKcaHz8kb", "WR86lKRcNa", "sr1RW7j4WRBcLCkN", "FCoCWRG", "W6NdJYC3mq", "W5ZdJ0dcHComW5JdSbZdNHi", "W6ddI8klW5uDWO/dUmkplcGRDHD9qa", "W4RdT8k1", "WPelcCodDW", "cCkpW7ZdLay", "W5XkW60", "W6BcPIm", "FutdKCkqca", "bCkBW7/dUWZdVNpcL0/dOW", "55ID5B+b44oBoNq", "cZvmWRnaW6FcLCkz", "W7lNRkxLIARNIP/MG7ul5lIi5PsQ5BEG56YZ5yMP", "WOtKUQJOT77LJARJGyNdOCkAW7a", "fKDSvSoDWQNcHq", "WPenW6bRhG", "W7ldHSoT", "W5pcNSoLWQBdKSkO", "u34gnhJdTq", "W4RdUtldTCoSWQrVW7e", "rK0wm0u", "FcTDW4rI", "tda8ySoXW73dICoo", "WR1CWRS", "nComWQb5hG", "WOxdV3Wwga", "c8kIsG", "WQdMI7/LMjVOGABNSz/KVjlOG7ldOIat", "m3TjWR8", "WRm0hSoVxmkYW6O", "WQi6kfRcKq", "AmkFWRFdGZy", "W6FcTHvTW4a", "6lsi5yYIW54", "WRHBWQJdJSoxWPy0sSoScLS4h8ksW47dNmkjb8owfKnMhmoZi03dOmk/WPfEwmo+W7OWW6hcOb7dP1DwWO86W5mlWPCRntHGe3dcJa", "W7tORyZKUP/MN5RLMj/KURtLRjJLKkZLHjxOR6a", "W7nNomo5q8k7W6hdJa", "bos6TEwkQEEjHEAbPmod6l2E5zQ4W4e", "vcyRvmoS", "l8oaWQzibG", "W6xcRb1Zoq", "aabTqmopWQhcLvTZW4CnWP9/W7O", "W5ddPZCTwa", "W7GxWPfzW5S", "DCoBWPBdTCkz", "W7zFWR3dJCkEW450qCoXtqyKcCksW4ldH8obrmodc1GQeSoNl14", "CaxcM8klW6iAWQKD", "W5pdTGGzmG", "mbuAWOVcQa", "fh0dF8oOW7hdTComsConW5NdLuabWPnmC8oohIJdNSkAw8oCwCoEja", "nH4zWQpdP1FdG8oGBSoyjbxcLCos", "ovLNWQXt", "hav6W68WmSktW4JcNSk7WOddSr7dTqBdMSk1W7GOW5pdJmouWPZcMcCrWRayeCoFCCkrWPWcW4RdVSkeWOhdVZBdGaeff8o9h8oqA2rWWR1oW5PA", "cCoKWQ9YnvJcTmo5W45JlW", "W4BdJtxdRSox", "WRavW7iIua", "zCoCWRtcKcK", "W4ZcMrTIhq", "BhxdSq", "jSk3W5JdVIddG1NcSw/dHNTBW74", "CCoyWRRdUSkP", "W7tdKmkrWRXH", "WQLmWO3dKSkJ", "uYDHWOlcNSoWWPNcPMK/", "6lwe5yYjWQS", "W5pdRCk/", "kmkcqmk6WRq", "W4RdSmk0", "WR7dKSo/WOqNB8ktr8o2qw8", "W4LejNu", "u2qBhN7dTCoLk8kBW6NdQ8oQE8kRWRBdOa", "W4NdLCoNW6JcKq", "WQNdSMOqlW", "W4lcMrTWfq", "WPhcRwalWOi", "W5FcJr1JW79YWQfvWQddQ8kHt8kBuMyz", "yCoRWOldOSka", "hCk6xSkNWP3cIctdQCkxW5xdKSoaWOW", "Cb1cW69MWRpcMSoVW6DdrwhdOMnviCk8p8okk2tdRmoMcCocoYP5W5VdGtarW79QW6DpWQD2WQvyW6m9W7S4s8o1ASkvn8kGrLGApKRdJqxdQxNcPCoGBSkbWQddImo5WOJcR8kCoJ/dN8oSaIibW4NdKmkSruFcVCowwCoxWPGIWQ15W5GaW6DXsvzUWQRcIv58W6CyWPCGWRTaW7ZcKCkcW7CHmCo5WRNcJCkEycxcPuRcLSk4W77cUSk6e8k4W6JdNYWlWP7cOmoKjmklWPaibu0YW5NcV8kHiIldOtVdIuVcQmkEAaRdJuNdNmknWP9hW63dKY3cSgjmvmoVkmodW5pcIxK2W5LVENpdO8kdW4KCcfD7erySsbxcQ3SBWRC+WQaiiCoTAqqja29dW7ePwmoBWQJdQSoPW6bQuSo6W61RgslcQCkKWQOOWRLNAuRcId7cImo5bx88W7/dM8o4etZcT8k8WOSkWR/dPGbnW57cRmoum8kODGpdT8kYrSo3cSkTW6tdTmo7W4y+dsn6ESkwWPBcOmkAdmkBWOGtWOXjrSorW4a0cLBcLCo7u8kqBufXW77cQmoxiSkdhCkhDf8hW7bcW57dO0nmu3JcIH4", "ncO7WR7cIa", "W5RdN0BcRSo9", "6lsw5y65mq", "W5ZdK0pcOCogW40", "WPKhE00", "oSkoW5VdVca", "heDRyCoDWRRcHq", "W63cVSkuwSoC", "W6tcUbDHiG", "bCofWQ5njW", "EgxdU1vQ", "W41onK/cRSo7WRfr", "WROlWOBdG8kv", "duv2tSoR", "6lsN5y+XWRy", "WPWwzKf8tbGqW6PgW7NcJCo5W7a2AeDDW68NWRKhWRK", "ut54WOFcMSoWWOBcPMvLWQmXm8oTsf7cSmkxlK3dHmk1W6S", "WOCwW6iJ", "scTMWPqrWPe", "aSkssmkqWPy", "5O2a56AsW5HBeq", "W67dUSk7WQLT", "WPBdPg4Yea", "qmoJWONcPXy", "bCoHWRLmo0S", "gSknWO3dGWWeW7W", "6lEN5y6Mxq", "6lAq5yYktq", "W6NdHSoT", "WOmCW7ist8kLWRC", "tSoCW7NdKXBdV3pcKuNdTwzNW5NdG8kglf8dl8oedNxcSmkuaWzcWONdLZGGa8ocW6yJW55GzCk+WPRdRhNcMtZdHuieW5f8nSkagqHYxe0uW61KDuBcOwfIWPNdSZFdRahdIrtcO8kiwwPDWR0L", "x0NdTSkylG", "WOtMLixNQlJLIOROOlddPUI9S+wyK14", "W4ZdSSk0WODa", "AGTuW55L", "W6KwWOXPW7O", "cSo7WQ0", "b8oKWRPSpu/cSmozW558jmo9ggmcWRG", "w8k7WPFdVYGMW7i", "W43dH17cHSoaW4tdO1BdLaDIW6WKb8otwdifWRy", "W53dIvtcLa", "WP4tFgbYwq", "W4jFnMdcQCkGW60vFvjeW5RcTaJdUmkYrSoPW5z0f0SpzsaSrIFcMmoTWOWvW7JdSCk4DWpcLuLQb8k2imkGWPy7WR7cL8k/WO4jW5fiW63cHSkHWPNdMCoOWQdcLHVcOxq", "W7ddNKFcLCop", "W4ZdN1NcR8o4", "WPhNRA3LIjZcSoI+GowyT3O", "fti+", "WONcRwW", "esi5WQFdJwm", "W6NcOCk8ASoO", "xYv5WP7cJ8oYW4ldSd96W6f3AG", "W59bqCo5la", "W61Pm0tcUW", "WRtcHwOyWOm", "tCkGWO3dNcKi", "WQmloSoPzW", "i8kaysqf", "zLldNSkqla", "hmogWQjNhW", "w+wiPos6Tb8", "bHrTW7b4ECop", "cMFdMCkQWRFdUG02eSok", "WPGiBf5KtGC", "W5FcJSoIWR7dLmkIyW", "W4hcQCorWQJdRq", "W6RdL3hcGCol", "W7/cRb5GW5O", "woADVowkR+wBT+EjGUACSCkg", "ySoWWOFdQCkn", "WQ8Kea", "W6RdKSo1W4G", "WRCqW6eOB8kM", "W5hcGIr6fG", "EmoDWRNcMG", "a8kMqa", "tCk6WPRdTq", "iYnyW6LF", "jCk5qtb6", "WOVdUmoGWOKu", "WQpMLy/NQRxLIkBOOlpcQq", "W7JdQJLqkmoNW5/cN8opAY5nW6ytW7xdLSkwBJm1W73cVCo9W4JcI8kGx8oXWPZdQmkpkCkGpfZcQCoHn8kdWP3dJ8kVceGTWQfnpCoTW5XVW7ipWQDay8oqCSkarSoSFSo0W41HWRSFWQxdNKpcMvddUmk2W5W5fYH4W6r+W6NdUCkWWQHmWPDPW7fDW7f4rqRcUHBdOhBcLSoDbKZdUdy7rmkFW7VdG1hdR8kQlW", "WO4jDNnSuGSbW4emW6VcKCoX", "nM5eWRyqWOtdM8kKW7pdTH/dKsHQW5qGW5mqFCo8W5SlW58B", "WOdcRgG", "W71tW70OsG", "d01muCooWQFcJK4", "W5vyW749", "WRykfxpcTG", "W5fjW4uxySkeWOVdIW", "hGeZWOpdSG", "c8o1WR5Jpa", "FmkDWPuNDSkZma"].concat(function () {
        return ["pXCtWOS", "WOGwW6e", "veezf2m", "W7S9WPbOW6S", "W63cMGrKma", "qIjNWPWx", "WRazdu7cNG", "rxKz", "W77dKbxdS8oQ", "W7ldSc8JBG", "WPX3WRVdTCkP", "WQzHWR3dM8kH", "W5z2wmohpCkhl8oJWOhdJa", "W6ldH8kagfG", "W6NdLSo1W7RcN8ojWP3cMSoTnG", "W5j8smoV", "W51wW60", "W67cUZi", "WRfFWRxdK8kmW4TWvSoHxGyJgCkfW5/dHSojr8ohdr0QeW", "WRi4gSoUFmkZW7RdH2lcU30", "W5xcKGnPW792W69aWRZdSmkNtSkBuMyz", "WRJdUhm+fW", "W5jYW4WXuG", "hoocJ+s+SoIcIEAmS+ENMUocSo+/KUMQJ+IUN+IfKoACNM/dUmkr5AwL6lAtW6BOR7FLIzhKVPBMLydOHB/MN5VKUR7KUlVMHR3LHy/LR47dHq", "zblcNSojWQ8", "D8onWO/dRCkW", "W4bsnwBcUa", "FCo6WONdVmooWOhdJCkHDtS", "BuRdJSku", "vZ5KWPOr", "FfNdLG", "d1ddKCkPW6i", "W53LIAdKUQqw5OIn5yQH", "dmklW6y", "fJy+WOO", "W4NcOmkwFSolkq", "W6BdVGJdQmoo", "5O6356E3agCT6z6m6BYU5l6U5Ocr44gYhq0", "WPzoWOBdLmkP", "oHys", "tIVdU2VcSq", "W5zCW74urgPhtW", "zgpdPeDj", "W6pdKmotW5pcMq", "W5JdP8kSWRPDW65x", "vgObgq", "W67dUbK6bq", "e1HLtmo1", "W7dLIkNKUBFcHoAlVEwiPG", "o2JdUCkOW60", "sc4Qumoz", "WR3LIPFML7XO", "DbT4WPGq", "pSkmAGfb", "tsVdO2VcLJuJW4u", "WO0hFv94", "BexdKuPU", "mhHb", "WOhORPRORApLIiZOO4dcOUI/LEwyOdu", "ufBdGf5o", "W4xLI7xMLRTu", "W5OcW7hcK+AyMEAuIEwgNUwUISkV", "WQy0cq", "cmk9sdHHWQRdKHShe0i", "WOJcP2ymWONcUI3cSmktWRBdL8oops9UW4pcQCk1cSkFWQKOW4W", "imkNW5RcV8ovW5xcL8kQBY0dEvu", "W4rNsSkNBa", "vYTLWRNcNSoHWOlcRxu4", "WRqkWP/dHmkA", "rx8tvs8", "bNldVSkkW6m", "wmkQWOSVza", "tdaJECoGW7xdI8omACowW57dJK0d", "WQy0cv3cHLJcRmkO", "WRdcTM1w", "W5JdRIO", "tdP8WOmwW4pcPuNcGfGYW6jkk8ktmSk4CCk/CCk/W5ddTmkSvv7cK8khqmkCW7fpWOBdUIGWFfOYW7pdVCocW48XW40AW4ZcQmkwW5hcLGvrsGVcTYlcOmkUbCojWQDMsNBcS8kAc8kncvVdT1/cPSo3WOnUWR4", "w2hdI8k+kW", "cSk+sG", "k8o7WRbPoedcSmkcWOi9ESoYwLWeWRJcJ8oXW40FWP0mW7NcSqldP1ZcLM8RW53cI8kSW5ZcISo+WRq8DCkFWRmeWQxcLXG2WQRdSxBdVCkmW5dcOSkOB8kacSoxW7uDWQjeW7vzW4pdOqVdIs1TW6LdjxNdTenJW5GxAMBdRvxdKmobrZBcU8orsw7dNtZcTNZcUaBcUmolW5JdM8khvqXbW6rWW4NdMCkQW4lcNSkvWPRcS3hcSqZdIxBcSCkVrLRcJmk+W5NdSa7cLgrGACoXW4P5WPOoW50grSk9W5pcSHPEs8kacYvbhKldLmoqxmkiW6JcRfPrwWTKgLVcM0tcNZ42tNrTW5VcLmkqu8kKWQadhhRcVHNcVWxdJIdcRb8OW43dRSkuWPtcQ2xdV8kkWPdcG8kxW4VdVYnHvdFdH2utW6xcI8onWPtcUSo6nW91v03dM8oZsHNdRd/cQ8o9lCoYqvH2uSo7W7xdRSkdW6Dju1fyW4pcJf7dNSkSWOZdJrvXf8o0hmk8WQjrvdhdVSkqWPJcUI/dNGtdVY/dVGJcQ1NdMCkJmmkHW7G9WQm3WO3dN8ofWOaaEXCGWPJcJ8k8WQddVeCsBYBcPfhcOCoqpu7cSSogp8oQfwi", "q2DZW5VcKd3dQSosvCo6dG4", "WOWnW7i2vCoYW73cHq/cIJJcKmoFua3cP8oKWRbCCeVdVf3cKxqIWPZcVq4OW4DWeZq7WOtdMSoiW4SEbSkFW6u2vmkYW4elmhOzrwX5fhXSyM4AqSktBCop", "qMmNe3q", "oWOs", "WOFdV10pda", "vY8kzmoIW6ddGSo9q8osW4K", "6lAA5y2gBG", "W5VdH8oNWPe", "WOhcO38p", "WO0hAW", "hmkYW4hcOEAyL+AvKowePowTStK", "lstdPgLSarewW7BcOW96WPeTWQL7WQCRa1unWR7dG8ooEbTGW5zsAMRcTmotCbdcJfVdLIxcICkPcIGgzCkGWPdcUSoVEwxcLW4EWOOuW6NdMCopm0VdRmkttqFcUeVdTa", "WRaaWOddKCkS", "W5/cG8oWWR7dKG", "W57dICk/WPrC", "WPpMNQVLIPhLMOxNI6hMNOBcVG", "qKldKmk5iG", "W7qXWPVdMmkcW6VdSG", "kSkUxWvW", "W5Hen37cVG", "AmodWRBcI+obTEwhOsy", "W7ZdQmktW60t", "WPBcSMChWPG", "DCoQWP/dGmkmWOC", "FmkGWRVdTsO", "WQNcO0CyWOO", "WQ0wWPm", "W5n8smoZ", "WOP8WPVdKmkE", "cmoHWQC", "W7RdMmoxW7hcMW", "W7xdJCkhpwO", "DCoPWQhdOSkA", "WP5aWRxdI8kh", "lsTBW61e", "EuRdImkgaW", "W4BdKSoLW7pcJG", "WRfhWRJdU8kB", "W5TVW7SZrG", "6lwb5yY6dq", "ACkMWR3dQGS", "WPCPWQLRW4BdJ0C", "gIm+WPVcMcVcSW", "uSofWRpcSqu", "fCkBW4JdNGtdPfFcLK/dOKS", "B8kzWPibqmk0ituMoq", "CCo6WPJdMmkkWO3dHa", "eu7dR8kUW4a", "iHncW7jc", "keRdRCkXW5W", "rt54WP8mWPRdQXlcIeC1WQbbkSkxoq", "6lAz5y21W7G", "WRroWQJdNW", "W6dORQhORy7LIRBOOPZcIa", "W5H2Amosdq", "smkLrSklWP/cKZpdR8kSWOZdGmoBWPrRa8oVW6zTcCoqEXDjsSkCyG", "fWr9W5nLEG", "WQi+emoTs8k4W63dQ3/cSxODWP7dHW", "W5L8axtcVa", "W5ZdL8k9WPze", "kxLgWOHD", "WRiHeCoPwG", "gebNFCoz", "rgqMdgxdU8kKlq", "imk3zJu", "wmkWWPhdQde", "W53cMmoX", "W51jneBcNa", "WQa+ouBcHLxcSq", "WRZdMSoLWOe", "y8oCWQRcMYm", "AHnpW495", "W47dRJ/dImo3WQu2W7mV", "W4VcH8k1ySok", "W4vwW5KOwxzBwW", "rblcNSoC", "WO0xW6aP", "WPZcTv8zWPG", "Fmo6DI4IcCkbCJ9kW7tcQCkbDmkIWQ3cVCocu8oCwmoIzZLtdCk7xwOn", "mmkRzaXL", "cCk4qa", "tmkxWQNdTYW", "W4RdSdqNcW", "oaWy", "CaOCWOpcTmov", "FuRdICkEoxvZ", "eYCJWOBdG3BdT8owuSk3bttcSSo7W6JdGSkRy2hdMCk+W6mG", "FmorWRNdRCkQ", "rx4Ynva", "qCooWPNdJCkn", "emkBW6JdMrFdThu", "qZ5kWQmC", "rSkHWORdOdvvWRNdT1PBmNeZW7uYrHPeW75PfLlcM8o+gmkZWQNcOmkKW6OayCoqWQvOWQnwW7PGWPPqgqfArslcO2O", "W4fyW7GVtG", "W5zCW74dx35gvW", "WQxcUZXwnCkU", "W5jwW645", "WRtdN8olWPiL", "yGVcICkDW48", "W6xdNmktwWq", "FmktWO0PrW", "sd4DzCoM", "vL0SW61RC8oyW57cISksW4VdPXxcRKu", "W6DMsCoIf8oHW7VdIxhdRdHiWPxcGLddUqWakmo4wIpcMLpcNZhcGCkNWPLEWOtdISoj", "WQJdTMW6", "W53cHCooWRldTW", "aCoAWRj4ma", "scD7WOC3WPZdQqNcJeu+W6fp", "q8kMWPK", "WOmdW682cSkRWR3dHWZcNs/cLCofhWRcOSkTWRDrD1pcS0RcMW", "aSo/WRPynq", "l8kuymkFWPS", "WPGDpNhcOG", "axWOW53dG8kYW5/cU2aXWQmAmW", "5RoH5yAN44kRW49g", "qmoKWQTZj1VcVSoFW5mUoCk9c2KyWRJdNmoKWPDnWRCbW7lcPWJcSW", "xYFcMCkcW7e", "W4NdH8kmbxO", "WRxdImo2", "pISSWQdcIW", "hmkBrIih", "W4Dyjq", "w24qcdRdS8kMi8kyW7G", "ECohWQVcHtqpWRa2WP4aiYJdMCopESkCW5rQWP/cICoBxmoeWRhcOICxus/cTrtcI8oFWQPEW6lcGSoYW5egW64/W5RcPCkIW5NdJGRdVSkPbxRcJw3dGmk9AmoGWQjTW5uNW6tdGmkdsXiNW5BdQCkrWQJdRZdcSCk2WPJcMG", "txpdGxPP", "WQNcHSoYoeu", "W5vYwmoR", "DWRcL8klW6u", "nqWgWQJcTCkp", "B3pdUW", "6lwh5y+1WPW", "mZeCWQlcNa", "6lwu5y6GAG", "W5LwW7KOrx5ywq", "W6/dG8oXW4xcK8ojWPpcGmoGkSkEtCoIuSkKW4i", "WQjkWR/dKCkFW51O", "W5SBWP58W5i", "WQNcImoZpW", "bJGzWP/dKg3dSSou", "wYOCwSoSW7m", "W4HyW4ugCG", "hYqT", "g2ddSmkiW4i", "WPFcJwf/5PQR5Pwl5yso5AYJja", "h8oXWRTMjW", "dvj7B8oL", "B0FdLCkAfa", "vspcQW", "W4hdUcJdJSoG", "j3lcQW", "WOu2WOpdP8k4", "FKOroNi", "DqFcJmkf", "dhhdMW", "W73cR8kJ", "EoAiQEs5H+wlM+s8V+I1KSk8W5buW6agkmk0WRJdQSoEWQuH6k+Z6iwh6koC5AYj6kklka", "W7tdQCk7W65V", "WRy6lKG", "EqT7W4bK", "iqySWRRdKa", "WQJcRxehWOdcPa/dSmolW7xcGSkayuXZW4lcN8kIxmosWO0OW5ZdI38wxry0z0bdW4neW77cLYqsW6fnWO5db8olW6BdP8k1svjEWORdNGxdPH87faxdIKFcHMCMWRHKW69bWOWoDgldMCkxW6zMWP3dKhXMya7cL2CaWRNdN1xdVcWbWP9XDsldGIqhWRpdSCocWRhdIwO2vCo0qCouf8kri1pcNLldVGGJfxbVimovWQT4WPCqh8oHqJtdSmoWW6LSeSkkmmktcZ7dL8kBW5BdRcq/W6ffWRCfWOdcTmkgdCoeW6aUnaZdO8kQWQFdNaJcPSkmcXNcRSoEvCozWQtdHMLmWQTLW6Chs8kTocxdUmkhW6NcOCo+WR/cTmkOnrddNaxdImkTz8o+W77dI8kExCoVWQNdM8orWRJcUSowWRS0WQSvw8ovWQyccNZdQsxdPSkGg8kTWRpcN1hcUfJdHSojtG1WEWq8WRBdPISPW78QWQb/ityfW57cMfiJW4OvW5lcSMGqyZ95nmokW4BcPhC9WPvsWRjMW54PFelcQCkCWRxcJrm9y8kkWP8tWPfhW68GiCoudxtdU8o2oN08v2RdHSkKxGCyWRFcVSkZW4O7W6RdHs3cPmkgt8oL", "yCogWQZcNq", "omkTW4NdKty", "WRZdKeaI5PMI5PAH5OYq56sBW7pLV5FLIOlOHBRMN53NIANMNkvn", "WRWUnW", "zx8tqa", "W6tcRsf1oSoNW7u", "WPO8k07cGG", "W53dGSkXhN0", "yhBdPLn9da", "W4tcHmofWP7dJ8kMAfS", "qMNdUhH6aba", "WQZcQ0e0WOa", "iSk9DcuidmkiDbHHW7/cUq", "W5xcKGLQ", "mrWbWQZcTCkDESoV", "vdObCCo3W7W", "r+wlUUAwNxdOV5tLMidcLW", "ESoWWRtcLdm", "z0LmW5tdQmorFSo9F8oFpg4", "W5hdGIK", "sCo7WRdcGIO", "W4fYxSo5mq", "gSk6DmkmWP7cJtldUG", "pZGWWOldJMJdVCkCe8k3rNZdS8ozW6NdG8oWDt/cJCorW64QucJdUM0eW5tdTcBcNHNcJfBcHmo0m8oOW6fuh1L2WRKxASoWW43dOxFdNJqmW5xdMSotn8k8psrAW7ZdVISxW5KBWOjEtSouwfHhrvj8WRlcU8o+sX3dPCkqju8biSkOwCoCW6JcRHeNaCoGWRpdPmoha13dGHGPxhVdMSozimo2bSovWPxcR8oAWOxdVCoRW5L/W6tdKK8KW5hcMCkZWRyYWP09W73dNCojf0WVWOFdNfXeWRxdU8kpp8oCAmkzW4ezBCkqWQJdVmorW5zjhvKtaqCBWOpdQSkXWRKmW6dcSSohi3ayW7CTWQSRW7tcHCkNWO5sW5XFW7WLWPH/W5DPsCo1W73dUr3cG8keW4dcMmoFzaX9eZldO1NdImkeWPbmWOpcOKtdP3FcQwtdL8kpDmkmWP7cPmoVA8oIamkvW45vrmoXW4ZcN1umeZzri8k8WOZdS8ocW4dcM8k0W7pdMSomlNJdGWpcNmopWOldRSkIW47cOXi6W7bfsXlcTrDHW4yYeSkTW4xcNSkAA34+t8kYWQPZuxxdISkvEvnLa2hcH8knWPpcOdNcGCoAC1X4uxZcKaGQWOm", "DUIUVEIVJ+wlS+IISSos6l+C5zMcla", "W6ZLIPhKURnH", "WRm/l0hcUW", "eSkFW7NdHqa", "khpdKCkZW4S", "h8oNW4FcP35FWQtcOePrkf87", "jgpdQmk0W50", "W6zykelcQG", "WR7cGSo0h0LFtKfOW4tcMIWUWPO6W4We", "aUodRos+UUIbIEApUEENOoobHE+9M+MRJ+IUI+IeOoADMIS6WRJLP7FOTONdHEITNowiHEs9R+AwV+IgNoAENos7N+s5LoAeQUwfUEwUJSkN", "WR7dTNyWemovWPVcJbVdSdtcPbxcVHpcSwZdTH4", "rZ3dSa", "W7tdLHGlAG", "kEETLEwkISop5OM25yQd", "WQVdI8o9WOKd", "W4ZdTchdKSoR", "wcVdTeZcIYqI", "BoocHmk5BY3OHlBMN73MLkRKUyhLHz7OTANLOklMMBZJGihVVBFdNoodQUAVREIhRoACK+AvM+s6Los5MoExQ+s7O+A3HEIVREwqUUwSUos5U++/QUs/LoExHUA3OUISTUIgIoAFVoIHN+s4NUwEK+AFQ+wWTownVoMHQoMzIooaHEs6L+IaVos+K+ISKUwhIUwtQoAXHUAcToobJUweSEEGKUAdMEodLowVKoAwPUAaK+wqLEACTEAxNoAcO++9PEs/NUIbGEACTEs5VowUJ+s7REs8M+IhGoADNoMwU+MHOoAMVEs4RoI0SEI2MU+8LowoMEAiGEs8OEs5L+MAGUs4ToEuNEs6TEs/J+IfG+AFUEMuJUISUowVK+IfRoEyMEs5HUs/VoAoQ+wKJEAjTEAnSowTUoobHUodTSoJ44kA5P6T6iES5P+l5PwY5lIO77Yy5y205PY05z+r5lYD6ikAW4SV6Ao+6yoS44kpWRNcMEE+M+s5HEwoN+s6K+w6T+wkMos4G++8Nos4UoADGEwFLEweO+s7SEwFQ+AuI+wlHUs7Mo+9VEwnU+AjN+s9UUs4HUMyOUs6PUs6MEs/MEwhQ+s8JUwmVEodHUISO+wCSEobP+E/IUs9Uos7JowoNEs7T+s+I+w9Pow/G+EBVUI8KEI8NoobH+woJow7QU++Q+s5M+s8SUs4RUITOUwlNowXL+IeREAFHEAxM+s4I+EvPos4HowmIUAjT+s9Ros4NoMAPos5GowwN+s7P+odIEMDIEAXHEEyQEEzSEExQUIeL+ILJEwTL+ESJEIHIos4No+8LowtMEwjKUwqREADL+IfKUI3P+ocQW", "DdrcWPKl", "BK7dJSkHd3fY", "bMFdImksW7xdRHmS", "WQ7MIQJLMkBOG4NNSQpKVOdOGQldRurh", "W5zCW74iqNjq", "c8kPqZXJ", "xe7dNCkycW", "jrTwW6TF", "zSoGjNr6fmkUAdHwW7C", "WQagBZ3MMk7MLkRMJjlNPia05B2K5yM76iA25P+X54IJ5P6XW78", "gSkPW4ZdRhytWQxcPaO", "6lsU5yYlW4y", "ssfSWPy", "W7pdNCkgoLmm"];
      }());
    }());
  }();
  _0x34cb = function () {
    return _0x55cd39;
  };
  return _0x34cb();
}
;
async function ql_config(_0x4ef125, _0x2b9062, _0x273f79) {
  const _0x2b7908 = _0x3f288f,
    _0x4427c1 = {
      "sWCdf": function (_0x1b00b2, _0x445a92) {
        return _0x1b00b2 || _0x445a92;
      },
      "PzJjn": function (_0x5cbdf1, _0x568672) {
        return _0x5cbdf1(_0x568672);
      },
      "gdbKA": _0x2b7908(622, "n7PQ"),
      "IhdMa": function (_0x40b2e3, _0x35cacb) {
        return _0x40b2e3 == _0x35cacb;
      },
      "DtDKH": function (_0x2e4d44, _0x365bca) {
        return _0x2e4d44 !== _0x365bca;
      },
      "UvFxQ": _0x2b7908(653, "kpbP"),
      "WdlHH": "rlkmG",
      "JFdXV": "MfPad",
      "FJISp": "ssAKt"
    };
  let _0x3bc312 = "",
    _0x411e36 = "";
  if (_0x4427c1[_0x2b7908(806, "EK0!")](!_0x4ef125, !_0x2b9062) || !_0x273f79) return console[_0x2b7908(523, "kpbP")]("\n\u3010" + Tips + "\u63D0\u793A---\u9752\u9F99\u767B\u5F55\u3011: soy_qlxt_data\u53D8\u91CF\u4E2D\u524D3\u4E2A\u53C2\u6570\u4E0D\u80FD\u4E3A\u7A7A"), true;
  var _0x27c2d1 = await _0x4427c1[_0x2b7908(951, "fJaX")](axios, {
      "method": _0x4427c1["gdbKA"],
      "url": _0x2b7908(790, "n7PQ") + _0x4ef125 + _0x2b7908(1082, "281s") + _0x2b9062 + _0x2b7908(1098, "eDW6") + _0x273f79
    }),
    _0x295c41 = _0x27c2d1["data"];
  _0x4427c1[_0x2b7908(522, "u)Bt")](_0x295c41["code"], 200) ? _0x4427c1["DtDKH"](_0x4427c1[_0x2b7908(1141, "SYoV")], _0x4427c1[_0x2b7908(1070, "zL7@")]) ? ql_token = _0x295c41[_0x2b7908(646, "CDAT")][_0x2b7908(497, "Na2D")] : this[_0x2b7908(1130, "xbmF")]("\u8D26\u53F7 " + this["num"] + _0x2b7908(933, "Jrb]") + _0x1690d8) : _0x4427c1["JFdXV"] !== _0x4427c1[_0x2b7908(860, "^U85")] ? _0x5b4136[_0x2b7908(523, "kpbP")]("\n\u3010" + _0xff8824 + _0x2b7908(371, "H707") + _0x223bdb + _0x2b7908(507, "YO5z") + _0x2dba86[_0x2b7908(520, "8cNT")]) : console[_0x2b7908(562, "PwR*")]("\n\u3010" + Tips + _0x2b7908(379, "Y#HU") + _0x295c41[_0x2b7908(511, "6HxV")]);
  if (ql_token) {
    if (_0x4427c1["DtDKH"]("OeCfT", "OeCfT")) this["cusLog"](_0x2b7908(402, "eDW6") + this["num"] + " \u6587\u7AE0\u5217\u8868:" + _0xf78460[_0x2b7908(869, "EK0!")]);else {
      var _0x27c2d1 = await _0x4427c1[_0x2b7908(1146, "mKi7")](axios, {
          "method": _0x4427c1["gdbKA"],
          "url": _0x2b7908(1202, "aw!x") + _0x4ef125 + _0x2b7908(1188, "1V5i"),
          "headers": {
            "Content-Type": _0x2b7908(572, "*X[o"),
            "Authorization": _0x2b7908(1014, "J)kY") + ql_token
          }
        }),
        _0x295c41 = _0x27c2d1[_0x2b7908(580, "wCi1")];
      if (_0x295c41["code"] == 200) {
        if (_0x2b7908(786, "Y#HU") !== _0x4427c1[_0x2b7908(528, "mWix")]) ql_version = _0x295c41[_0x2b7908(817, "aw!x")][_0x2b7908(1129, "SYoV")];else return new _0x531c06(_0x291539 => _0xd08e67(_0x291539, _0x5614da));
      } else console[_0x2b7908(669, "Mpt(")]("\n\u3010" + Tips + _0x2b7908(705, "kpbP") + _0x295c41["message"]);
    }
  }
}
async function soy_yyz() {
  const _0x4a407b = _0x3f288f,
    _0x1900c5 = {
      "eerKV": function (_0x2ab150) {
        return _0x2ab150();
      },
      "aRPPn": function (_0x1e6d4f, _0x529fdd) {
        return _0x1e6d4f / _0x529fdd;
      },
      "EXXQg": function (_0x25fd21, _0x4471aa) {
        return _0x25fd21 + _0x4471aa;
      },
      "bBWgj": _0x4a407b(851, "nkG)"),
      "TbDeF": _0x4a407b(832, "Jrb]"),
      "sXteK": function (_0x36ffcd, _0x514f37) {
        return _0x36ffcd(_0x514f37);
      },
      "rWevB": "post",
      "sgZHs": "okhttp/3.11.0",
      "AQNAN": function (_0x5a631b, _0x3316d6) {
        return _0x5a631b == _0x3316d6;
      },
      "hhxBB": function (_0x52600c, _0x6152f8) {
        return _0x52600c == _0x6152f8;
      },
      "ZjErw": function (_0x4e4a45, _0x349f17) {
        return _0x4e4a45 === _0x349f17;
      },
      "wbvVF": _0x4a407b(1081, "EK0!"),
      "kqwbc": _0x4a407b(472, "1V5i"),
      "NmoTz": function (_0x25246b, _0x58f0e2) {
        return _0x25246b(_0x58f0e2);
      },
      "gGVvJ": _0x4a407b(781, "8cNT"),
      "JaUrE": function (_0x5a0b19) {
        return _0x5a0b19();
      },
      "XfcGL": function (_0x53b399, _0x16bdeb) {
        return _0x53b399 !== _0x16bdeb;
      },
      "cyavw": _0x4a407b(1116, "CDAT"),
      "WOlkZ": function (_0x2b2333, _0x257b9f) {
        return _0x2b2333 / _0x257b9f;
      },
      "gpBPy": function (_0x296da2, _0x1a7530) {
        return _0x296da2 + _0x1a7530;
      },
      "UyLEX": function (_0xad98ed, _0x590462) {
        return _0xad98ed !== _0x590462;
      },
      "syiBQ": _0x4a407b(694, "EK0!"),
      "McbHS": _0x4a407b(1012, "SYoV"),
      "qBGBP": _0x4a407b(671, "RsCB"),
      "eyvCT": "UNmTx",
      "LCScI": function (_0x164a7c, _0x4d70ca) {
        return _0x164a7c + _0x4d70ca;
      },
      "nJDNl": function (_0x1f35fa, _0x12e948) {
        return _0x1f35fa + _0x12e948;
      },
      "Zsvii": function (_0x24d7d5, _0x164b67) {
        return _0x24d7d5 + _0x164b67;
      },
      "vFcKR": function (_0x2f0473, _0x28e470) {
        return _0x2f0473 + _0x28e470;
      },
      "NVDKm": function (_0x54eb43, _0x5e0c66) {
        return _0x54eb43 + _0x5e0c66;
      },
      "vXaie": _0x4a407b(524, "sr2p"),
      "lfPIV": function (_0x15011e) {
        return _0x15011e();
      }
    };
  if (!TG_id) return console[_0x4a407b(1136, "$6#n")]("\n\u3010" + Tips + "\u63D0\u793A---" + TG_id + "\u767B\u5F55\u3011: soy_qlxt_data\u53D8\u91CF\u4E2D\u53C2\u65704(TG\u9891\u9053\u7684\u7528\u6237id)\u4E0D\u80FD\u4E3A\u7A7A"), true;
  let _0x2925cd = "";
  if (ql_path[_0x4a407b(489, "wCi1")](_0x1900c5["McbHS"]) > -1 && ql_version) {
    if (_0x1900c5[_0x4a407b(1007, "RsCB")](_0x1900c5[_0x4a407b(640, "1V5i")], _0x1900c5[_0x4a407b(577, "mKi7")])) _0x1900c5["eerKV"](_0x4e0486);else try {
      _0x2925cd = fs[_0x4a407b(1042, "YO5z")](_0x1900c5[_0x4a407b(868, "oB0Q")](ql_path[_0x4a407b(494, "^U85")](/(\S*)scripts/)[1], "config/auth.json"), {
        "flag": "r",
        "encoding": _0x4a407b(512, "Mpt(")
      });
      var _0x2aca80 = JSON[_0x4a407b(421, "zL7@")](_0x2925cd);
      qlxt = CryptoJs[_0x4a407b(604, "Kac6")](_0x1900c5[_0x4a407b(406, "u)Bt")](_0x1900c5[_0x4a407b(598, "u)Bt")](_0x1900c5[_0x4a407b(584, "ySs9")](_0x2aca80[_0x4a407b(976, "^U85")], TG_id), os[_0x4a407b(988, "mWix")]()), author))[_0x4a407b(992, "Kac6")]();
    } catch (_0x4e8a3f) {
      console[_0x4a407b(1035, "oB0Q")](_0x1900c5[_0x4a407b(517, "$RhQ")]("\n\u6CA1\u6709\u627E\u5230\u914D\u7F6E,\u622A\u56FE\u8054\u7CFB\u4F5C\u8005 : ", __dirname));
    }
  } else console[_0x4a407b(355, "sr2p")](_0x1900c5[_0x4a407b(544, "Na2D")](_0x1900c5["vXaie"], __dirname));
  qlxt && (await _0x1900c5[_0x4a407b(350, "xbmF")](_0x1f8c0a));
  async function _0x1f8c0a() {
    const _0x1353f1 = _0x4a407b;
    var _0x4466d9 = Math[_0x1353f1(975, "OT(A")](_0x1900c5[_0x1353f1(821, "sr2p")](new Date()[_0x1353f1(1126, "sr2p")](), 1000))[_0x1353f1(1209, "sr2p")](),
      _0x3f09a4 = _0x1353f1(995, "wCi1") + TG_id + _0x1353f1(863, "YO5z") + qlxt + "&t=" + _0x4466d9,
      _0x24bf60 = CryptoJs[_0x1353f1(902, "1V5i")](_0x1900c5["EXXQg"](_0x3f09a4, _0x1900c5[_0x1353f1(829, "mWix")]))[_0x1353f1(1111, "jeMV")](),
      _0x3f09a4 = _0x1900c5[_0x1353f1(1157, "aw!x")](_0x3f09a4, _0x1900c5[_0x1353f1(448, "YO5z")]) + _0x24bf60,
      _0x27e626 = await _0x1900c5[_0x1353f1(632, "oB0Q")](axios, {
        "method": _0x1900c5["rWevB"],
        "url": _0x1353f1(549, "0Qw%"),
        "headers": {
          "user-agent": _0x1900c5[_0x1353f1(1166, "eDW6")]
        },
        "data": _0x3f09a4
      }),
      _0x5592cb = _0x27e626[_0x1353f1(900, "OFng")];
    if (_0x1900c5[_0x1353f1(1164, "Jrb]")](_0x5592cb[_0x1353f1(566, "EK0!")], 200)) yyz_token = _0x5592cb[_0x1353f1(856, "mWix")][_0x1353f1(505, "(DcV")], yyz_fen = _0x5592cb[_0x1353f1(650, "O@as")][_0x1353f1(824, "Mpt(")][_0x1353f1(1077, "(DcV")], _0x5592cb[_0x1353f1(1198, "RsCB")][_0x1353f1(668, "Jrb]")]["vip"] == 0 ? await _0x1900c5[_0x1353f1(569, "u)Bt")](_0x41965a) : yyz_vip = true;else _0x1900c5[_0x1353f1(991, "Kac6")](_0x5592cb[_0x1353f1(922, "*X[o")], 113) ? _0x1900c5["ZjErw"](_0x1900c5[_0x1353f1(815, "EK0!")], _0x1900c5["wbvVF"]) ? await _0x1900c5[_0x1353f1(710, "Cd@1")](_0x2d8a1e) : _0x5cbb33 = "\u6536\u85CF" : console[_0x1353f1(707, "Jrb]")]("\n\u3010" + Tips + _0x1353f1(371, "H707") + TG_id + "\u767B\u5F55\u3011: " + _0x5592cb[_0x1353f1(1060, "Na2D")]);
  }
  async function _0x41965a() {
    const _0x425215 = _0x4a407b;
    var _0x1dccc7 = Math[_0x425215(818, "jeMV")](new Date()[_0x425215(368, "$kF4")]() / 1000)[_0x425215(741, "^U85")](),
      _0x275571 = _0x425215(543, "OFng") + TG_id + _0x425215(542, "8cNT") + qlxt + _0x425215(897, "Cd@1") + _0x1dccc7,
      _0x4d93df = CryptoJs["MD5"](_0x275571 + _0x1900c5[_0x425215(502, "H707")])["toString"](),
      _0x275571 = _0x1900c5[_0x425215(1179, "mKi7")](_0x275571, _0x425215(843, "ySs9")) + _0x4d93df,
      _0x4a6f0c = await _0x1900c5[_0x425215(1149, "EK0!")](axios, {
        "method": _0x1900c5[_0x425215(387, "CDAT")],
        "url": "http://yyz.soyyun.top/api.php?app=10010&act=user_logon",
        "headers": {
          "user-agent": _0x1900c5[_0x425215(374, "Na2D")]
        },
        "data": _0x275571
      }),
      _0x4135d0 = _0x4a6f0c[_0x425215(817, "aw!x")];
    if (_0x4135d0[_0x425215(593, "Mpt(")] == 200) {
      if (_0x1900c5["hhxBB"](_0x4135d0["msg"][_0x425215(649, "jeMV")][_0x425215(438, "ySs9")], 0)) {
        if (user_num > Math[_0x425215(875, "OFng")](_0x1900c5[_0x425215(1102, "1V5i")](yyz_fen, 10))) return console[_0x425215(1169, "ySs9")]("\n\u3010" + Tips + _0x425215(596, "CqB$") + TG_id + "\u9A8C\u8BC1\u3011: \u975EVIP\u7528\u6237\u53EA\u80FD\u8DD1" + Math["floor"](_0x1900c5["aRPPn"](yyz_fen, 10)) + _0x425215(412, "6HxV")), true;else yyz_vip = true;
      } else yyz_vip = true;
    } else _0x1900c5[_0x425215(557, "eDW6")] !== _0x425215(356, "8cNT") ? console[_0x425215(562, "PwR*")]("\n\u3010" + Tips + _0x425215(353, "OFng") + _0x4135d0[_0x425215(746, "kpbP")] + ",\u8BF7\u4E0E\u673A\u5668\u4EBA\u5BF9\u540E\u518D\u8BD5") : _0x1900c5[_0x425215(779, "CqB$")](_0x54347a);
  }
  async function _0x2d8a1e() {
    const _0x45df27 = _0x4a407b,
      _0x448731 = {
        "DadiV": function (_0x14d57e) {
          const _0x455cb9 = _0x41a8;
          return _0x1900c5[_0x455cb9(1137, "ySs9")](_0x14d57e);
        }
      };
    if (_0x1900c5["XfcGL"]("hEEdU", _0x1900c5[_0x45df27(1196, "NwdE")])) this["cusLog"](_0x45df27(578, "xbmF") + this[_0x45df27(777, "YO5z")] + _0x45df27(364, "CqB$"));else {
      var _0x4a033a = Math["round"](_0x1900c5[_0x45df27(1159, "CqB$")](new Date()[_0x45df27(952, "(DcV")](), 1000))[_0x45df27(344, "281s")](),
        _0x42d933 = "user=" + TG_id + _0x45df27(803, "O@as") + qlxt + "&t=" + _0x4a033a,
        _0x1a3d37 = CryptoJs[_0x45df27(1201, "Mpt(")](_0x1900c5[_0x45df27(738, "zL7@")](_0x42d933, _0x1900c5[_0x45df27(674, "^U85")]))["toString"](),
        _0x42d933 = _0x1900c5[_0x45df27(839, "fJaX")](_0x42d933, _0x1900c5[_0x45df27(429, "aW]5")]) + _0x1a3d37,
        _0x1e90a5 = await axios({
          "method": _0x1900c5["rWevB"],
          "url": _0x45df27(531, "8cNT"),
          "headers": {
            "user-agent": _0x1900c5["sgZHs"]
          },
          "data": _0x42d933
        }),
        _0x11df46 = _0x1e90a5["data"];
      if (_0x1900c5[_0x45df27(570, "ySs9")](_0x11df46[_0x45df27(683, "281s")], 200)) await _0x1f8c0a();else _0x11df46[_0x45df27(844, "Y#HU")] == 115 ? _0x1900c5[_0x45df27(1197, "y!1F")]("SopiV", _0x45df27(721, "kpbP")) ? console[_0x45df27(416, "*X[o")]("\n\u3010" + Tips + _0x45df27(1127, "EK0!") + TG_id + _0x45df27(862, "(DcV") + _0x11df46[_0x45df27(1061, "281s")]) : this[_0x45df27(431, "aw!x")]("\u8D26\u53F7 " + this["num"] + " " + _0x5a902f + ":" + _0x31bc0e[_0x45df27(1061, "281s")]) : _0x1900c5[_0x45df27(717, "zL7@")](_0x45df27(1138, "$RhQ"), _0x1900c5[_0x45df27(620, "mKi7")]) ? _0x448731[_0x45df27(1194, "$RhQ")](_0x32a75d) : console[_0x45df27(355, "sr2p")]("\n\u3010" + Tips + "\u63D0\u793A---" + TG_id + "\u6CE8\u518C\u3011: " + _0x11df46["msg"]);
    }
  }
}
async function get_version() {
  const _0xc044fb = _0x3f288f,
    _0x28937c = {
      "cKFmy": function (_0x39f083, _0x2d44ad) {
        return _0x39f083 / _0x2d44ad;
      },
      "YIHBs": function (_0x3db9c0, _0x49479d) {
        return _0x3db9c0(_0x49479d);
      },
      "Gffac": function (_0x4f3e46, _0x2ee0cc) {
        return _0x4f3e46 == _0x2ee0cc;
      },
      "dQOZB": function (_0x4a8a7d, _0x456994) {
        return _0x4a8a7d !== _0x456994;
      },
      "iZfNJ": "bsJqi",
      "hmHlH": function (_0x40a5c8, _0x482e83) {
        return _0x40a5c8 == _0x482e83;
      },
      "YkTmA": "app_bb",
      "CDfWL": _0xc044fb(1048, "(DcV"),
      "PKfLP": "app_nshow",
      "AAGgw": "app_nurl"
    };
  var _0x323228 = Math[_0xc044fb(442, "Kac6")](_0x28937c[_0xc044fb(690, "Y#HU")](new Date()[_0xc044fb(794, "eDW6")](), 1000))[_0xc044fb(495, "$6#n")](),
    _0x408ae4 = await _0x28937c[_0xc044fb(540, "RsCB")](axios, {
      "method": _0xc044fb(1069, "kpbP"),
      "url": "http://yyz.soyyun.top/api.php?app=10020&act=ini",
      "headers": {
        "user-agent": _0xc044fb(626, "xbmF")
      }
    }),
    _0x32d859 = _0x408ae4["data"];
  _0x28937c["Gffac"](_0x32d859["code"], 200) && (_0x28937c[_0xc044fb(663, "^U85")](_0x28937c[_0xc044fb(357, "8cNT")], _0x28937c[_0xc044fb(1105, "NwdE")]) ? this["cusLog"]("\u8D26\u53F7 " + this[_0xc044fb(490, "$6#n")] + " \u5206\u4EAB:\u8FD4\u56DE " + _0x2b25e0) : _0x28937c[_0xc044fb(408, "NwdE")](_0x32d859[_0xc044fb(928, "y!1F")][_0x28937c["YkTmA"]], app_v) ? console["log"](_0xc044fb(1203, "^U85") + app_v + ",\u670D\u52A1\u5668\u7248\u672C:" + _0x32d859["msg"][_0x28937c["YkTmA"]]) : _0x28937c["CDfWL"] === _0x28937c[_0xc044fb(977, "y!1F")] ? (console["log"](_0xc044fb(466, "PwR*") + app_v + _0xc044fb(763, "mKi7") + _0x32d859["msg"][_0x28937c["YkTmA"]] + _0xc044fb(758, "eDW6") + _0x32d859[_0xc044fb(866, "aw!x")][_0x28937c["PKfLP"]] + _0xc044fb(352, "n7PQ") + _0x32d859[_0xc044fb(685, "ySs9")][_0x28937c[_0xc044fb(859, "O@as")]]), subTitle += _0xc044fb(960, "EK0!") + app_v + _0xc044fb(643, "0Qw%") + _0x32d859[_0xc044fb(555, "Cd@1")][_0xc044fb(474, "mKi7")] + _0xc044fb(729, "8cNT") + _0x32d859[_0xc044fb(1216, "nkG)")][_0x28937c["PKfLP"]] + _0xc044fb(1125, "SYoV") + _0x32d859[_0xc044fb(1198, "RsCB")]["app_nurl"]) : this[_0xc044fb(400, "Cd@1")](_0xc044fb(970, "ySs9") + this["num"] + _0xc044fb(728, "$kF4") + _0x41c193["msg"]));
}
async function Sleep_time(_0xc1118c, _0x2d657) {
  const _0x367464 = _0x3f288f,
    _0x2e55f6 = {
      "eIfZb": function (_0x45919b, _0x20305d) {
        return _0x45919b(_0x20305d);
      },
      "Omzme": function (_0x11c0f3, _0x168085) {
        return _0x11c0f3 + _0x168085;
      },
      "zEGgz": function (_0x3c9c68, _0x5279e1) {
        return _0x3c9c68 * _0x5279e1;
      },
      "ZNONU": function (_0x17280e, _0x47cb89) {
        return _0x17280e - _0x47cb89;
      }
    };
  await _0x2e55f6[_0x367464(1217, "aw!x")](wait, _0x2e55f6[_0x367464(491, "n7PQ")](Math["floor"](_0x2e55f6[_0x367464(1057, "oB0Q")](Math["random"](), _0x2e55f6[_0x367464(1066, "zL7@")](_0x2e55f6["ZNONU"](_0x2d657 * 1000, _0x2e55f6[_0x367464(884, "RsCB")](_0xc1118c, 1000)), 1))), _0x2e55f6["zEGgz"](_0xc1118c, 1000)));
}
async function wait(_0x55d781) {
  return new Promise(_0x1ebe93 => setTimeout(_0x1ebe93, _0x55d781));
}
function Format_time() {
  const _0xa2b7fc = _0x3f288f,
    _0x437346 = {
      "IHQkF": function (_0x1d6690, _0x29cb8c) {
        return _0x1d6690 + _0x29cb8c;
      },
      "qiHye": function (_0x1d4353, _0x141361) {
        return _0x1d4353 < _0x141361;
      },
      "RFeLC": function (_0x4dead5, _0x43f080) {
        return _0x4dead5 + _0x43f080;
      },
      "QAgiv": function (_0x5ec260, _0x4b1d8e) {
        return _0x5ec260 + _0x4b1d8e;
      },
      "jerZf": function (_0x443f68, _0x5b3124) {
        return _0x443f68 + _0x5b3124;
      },
      "Dzvng": function (_0x59ca8b, _0x6c8d86) {
        return _0x59ca8b + _0x6c8d86;
      },
      "GffAk": function (_0x52a9b0, _0x47c910) {
        return _0x52a9b0 < _0x47c910;
      },
      "GOeZQ": function (_0x1de667, _0x30a474) {
        return _0x1de667 + _0x30a474;
      },
      "JUpee": function (_0x536069, _0x38a65c) {
        return _0x536069 + _0x38a65c;
      },
      "LuWvv": function (_0x3f4b63, _0x4f2252) {
        return _0x3f4b63 + _0x4f2252;
      },
      "KbNPM": function (_0x3165d6, _0x2b10c5) {
        return _0x3165d6 + _0x2b10c5;
      }
    };
  var _0x4d76a5 = new Date(new Date()[_0xa2b7fc(639, "1V5i")]()),
    _0x329db5 = _0x437346[_0xa2b7fc(797, "zL7@")](_0x4d76a5["getFullYear"](), "-"),
    _0x26e7e0 = (_0x437346["qiHye"](_0x4d76a5["getMonth"]() + 1, 10) ? _0x437346[_0xa2b7fc(373, "$kF4")]("0", _0x4d76a5["getMonth"]() + 1) : _0x437346[_0xa2b7fc(1076, "mKi7")](_0x4d76a5[_0xa2b7fc(1134, "CqB$")](), 1)) + "-",
    _0x1df178 = (_0x4d76a5[_0xa2b7fc(914, "ySs9")]() < 10 ? _0x437346[_0xa2b7fc(1163, "aw!x")]("0", _0x4d76a5[_0xa2b7fc(582, "6HxV")]()) : _0x4d76a5[_0xa2b7fc(582, "6HxV")]()) + " ",
    _0x3d95ce = _0x437346["jerZf"](_0x4d76a5[_0xa2b7fc(709, "Y#HU")]() < 10 ? _0x437346["Dzvng"]("0", _0x4d76a5[_0xa2b7fc(953, "zL7@")]()) : _0x4d76a5[_0xa2b7fc(923, "Jrb]")](), ":"),
    _0x2abdb9 = (_0x4d76a5[_0xa2b7fc(506, "H707")]() < 10 ? "0" + _0x4d76a5["getMinutes"]() : _0x4d76a5[_0xa2b7fc(363, "*X[o")]()) + ":",
    _0x41c7c7 = _0x437346[_0xa2b7fc(568, "CDAT")](_0x4d76a5[_0xa2b7fc(401, "u)Bt")](), 10) ? _0x437346[_0xa2b7fc(1206, "$6#n")]("0", _0x4d76a5[_0xa2b7fc(1142, "J)kY")]()) : _0x4d76a5[_0xa2b7fc(979, "$kF4")]();
  let _0x3101fa = _0x437346["GOeZQ"](_0x437346["JUpee"](_0x437346[_0xa2b7fc(872, "Cd@1")](_0x437346[_0xa2b7fc(704, "NwdE")](_0x329db5, _0x26e7e0), _0x1df178), _0x3d95ce), _0x2abdb9) + _0x41c7c7;
  return _0x3101fa;
}
var version_ = "jsjiami.com.v7";
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = false, this.isNeedRewrite = false, this.logSeparator = "\n", this.startTime = new Date().getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          a = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(a, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], undefined === r) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), true) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: false
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      });else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: false
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t));else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body);
        });
      }
    }
    time(t) {
      let e = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "H+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : undefined;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
      let h = ["", "==============\uD83D\uDCE3\u7CFB\u7EDF\u901A\u77E5\uD83D\uDCE3=============="];
      h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h);
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}