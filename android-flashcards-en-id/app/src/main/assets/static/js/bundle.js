(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var detectionDevice = function () {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    } else if (/android/i.test(userAgent)) {
        return "Android";
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    } else {
        return false;
    }
};

(this["webpackJsonpo'FlashCards"] = this["webpackJsonpo'FlashCards"] || []).push([
    [0], {
        1: function(e) {
            e.exports = words;
        },
        17: function(e, n, a) {
            e.exports = a.p + "static/media/pi-pum.fe26d4de.mp3"
        },
        22: function(e, n, a) {
            e.exports = a(46)
        },
        27: function(e, n, a) {},
        28: function(e, n, a) {},
        29: function(e, n, a) {},
        30: function(e, n, a) {},
        46: function(e, n, a) {
            "use strict";
            a.r(n);
            var l = a(0),
                t = a.n(l),
                o = a(15),
                _ = a.n(o),
                i = (a(27), a(4)),
                p = a(5),
                r = a(7),
                s = a(6),
                c = (a(28), a(29), a(2)),
                d = (a(30), a(21)),
                u = !!document.documentMode,
                w = "d-flex align-items-center justify-content-center flex-column",
                z = detectionDevice(), //z = "object" === typeof cordova && "android" === window.cordova.platformId,
                m = new d.a,
                y = function(e, n) {
                    z ? localStorage.setItem(e, n) : m.set(e, n, {
                        path: "/",
                        maxAge: 29030400
                    })
                },
                h = function(e) {
                    z ? localStorage.removeItem(e) : m.remove(e, {
                        path: "/",
                        maxAge: 29030400
                    })
                },
                k = function(e, n) {
                    return z ? n ? JSON.parse(localStorage.getItem(e)) : localStorage.getItem(e) : "undefined" === typeof m.get(e) ? null : m.get(e)
                },
                g = a(16),
                b = a.n(g),
                f = a(1),
                j = {},
                v = a(20),
                E = a(8),
                C = a.n(E),
                x = a(17),
                N = a.n(x),
                S = function(e) {
                    Object(r.a)(a, e);
                    var n = Object(s.a)(a);

                    function a(e) {
                        var l;
                        return Object(i.a)(this, a), (l = n.call(this, e)).createArrayRandom = function() {
                            l.newArrayId = [], l.newId = 0, f.map((function(e) {
                                e.data.map((function(n, a) {
                                    "function" === typeof e.youDontKnowID.includes && e.youDontKnowID.includes(a) && this.newArrayId.push(this.newId++)
                                }), this)
                            }), Object(c.a)(l)), console.log(l.newArrayId)
                        }, l.showCategory = function() {
                            l.setState({
                                categoryActive: !l.state.categoryActive
                            })
                        }, l.randomItem = function() {
                            l.createArrayRandom();
                            var e, n = l.newArrayId.length,
                                a = !1;
                            do {
                                a = !0, (e = Math.floor(Math.random() * (n - 0)) + 0) === l.lastNumber && n > 1 && (a = !1)
                            } while (!a);
                            l.setState({
                                idRand: e
                            }), l.lastNumber = e
                        }, l.justIKnow = function(e, n) {
                            console.log(f[e].youDontKnowID);
                            var a = l.props.that,
                                t = f[e].youDontKnowID;
                            t.splice(t.indexOf(n), 1), f[e].dontKnowClick--, y("obj_exercise_cookie_you_dont_know_" + e, JSON.stringify(f[e].youDontKnowID)), y("obj_exercise_cookie_dk_click_" + e, f[e].dontKnowClick), l.randomItem(), a.setState({}), console.log(f[e].youDontKnowID)
                        }, l.toggleRepeat = function() {
                            l.setState({
                                toggleRepeat: !l.state.toggleRepeat
                            })
                        }, l.checkOut = function(e) {
                            var n = l.state.selected;
                            if (l.idActive !== e)
                                for (var a = 0; a < l.newArrayId.length; a++) n[a] = !1;
                            l.idActive = e, n[e] = !n[e], l.setState({
                                selected: n
                            })
                        }, l.buttonIKnow = function(e, n, a, t) {
                            l.checkOut(t), e.state.enableAutoVoice && !l.state.toggleRepeat && e.global.soundSeparator.play(), l.voiceEnable = !0, l.justIKnow(n, a)
                        }, l.buttonCheckOut = function(e) {
                            l.voiceEnable = !0, l.checkOut(e)
                        }, l.buttonIDontKnow_1 = function(e, n) {
                            e.state.enableAutoVoice && !l.state.toggleRepeat && e.global.soundSeparator.play(), l.voiceEnable = !0, l.checkOut(n)
                        }, l.buttonIDontKnow_2 = function(e) {
                            e.state.enableAutoVoice && !l.state.toggleRepeat && e.global.soundSeparator.play(), l.voiceEnable = !0, l.randomItem()
                        }, l.componentWillMount = function() {
                            l.createArrayRandom(), l.randomItem(), console.log("count items: " + l.lengthItems)
                        }, l.componentDidMount = function() {
                            l.props.that.global.categoryActive[0] = !l.newArrayId.length
                        }, l.lengthItems = 0, l.state = {
                            categoryActive: !1,
                            idRand: 0,
                            selected: {},
                            toggleRepeat: !1
                        }, l
                    }
                    return Object(p.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                n = this.props.that;
                            return !this.newArrayId.length || t.a.createElement("div", {
                                className: "category-box"
                            }, t.a.createElement("h2", {
                                onClick: function() {
                                    return e.showCategory()
                                },
                                className: "category-tr " + (this.state.categoryActive ? "category-active" : "")
                            }, " ", j.toRepeat, " (", t.a.createElement("strong", null, this.newArrayId.length), ")", t.a.createElement("span", {
                                className: "icon-down-open"
                            })), t.a.createElement("div", {
                                className: "block-to-repeat"
                            }, t.a.createElement("button", {
                                className: "w-100 border-content-bottom",
                                onClick: function() {
                                    return e.toggleRepeat()
                                }
                            }, this.state.toggleRepeat ? j.toggleToRepeatHide : j.toggleToRepeatShow + " (" + this.newArrayId.length + ")"), t.a.createElement("ul", {
                                className: "main-list-exercise-inset list-to-repeat list-unstyled"
                            }, f.map((function(e, a) {
                                return e.data.map((function(l, o) {
                                    var _, i = this;
                                    if (this.t++, "function" === typeof e.youDontKnowID.includes && e.youDontKnowID.includes(o)) return this.ti++, _ = this.ti, (this.ti === this.state.idRand || this.state.toggleRepeat) && t.a.createElement("li", {
                                        className: this.state.selected[_] ? "li-active" : "",
                                        id: "xc-" + o,
                                        key: o
                                    }, n.state.enableAutoVoice && this.voiceEnable && !this.state.toggleRepeat ? "p->e" === n.global.flashCardDirection ? n.translateVoice(this.state.selected[_] ? l._en : l._pl, this.state.selected[_] ? "en" : "pl", n.state.online) : n.translateVoice(this.state.selected[_] ? l._pl : l._en, this.state.selected[_] ? "pl" : "en", n.state.online) : "", this.voiceEnable = !1, t.a.createElement("h4", null, n.state.activePL ? e.category._pl : e.category._en, " / ", n.state.activePL ? e.name._pl : e.name._en), t.a.createElement("span", {
                                        className: "d-none"
                                    }, _, " / ", this.t, " / ", a, " / ", o, " / ", e.youDontKnowID.length), t.a.createElement("div", {
                                        className: "flip-container vertical"
                                    }, t.a.createElement("div", {
                                        className: "flipper"
                                    }, t.a.createElement("div", {
                                        className: "front d-flex align-items-center justify-content-center flex-column"
                                    }, t.a.createElement("span", {
                                        onClick: function() {

                                            return n.translateVoice("e->p" === n.global.flashCardDirection ? l._en : l._pl, "e->p" === n.global.flashCardDirection ? "en" : "pl", n.state.online)

                                        }
                                    }, t.a.createElement("span", {
                                        className: "icon-volume"
                                    }), " ", "e->p" === n.global.flashCardDirection ? l._en : l._pl)), t.a.createElement("div", {
                                        className: "back d-flex align-items-center justify-content-center flex-column"
                                    }, t.a.createElement("span", {
                                        onClick: function() {
                                            return n.translateVoice("e->p" === n.global.flashCardDirection ? l._en : l._pl, "e->p" === n.global.flashCardDirection ? "en" : "pl", n.state.online)
                                        }
                                    }, t.a.createElement("span", {
                                        className: "icon-volume"
                                    }), " ", "e->p" === n.global.flashCardDirection ? l._en : l._pl), t.a.createElement("hr", null), t.a.createElement("span", {
                                        onClick: function() {
                                            return n.translateVoice("e->p" === n.global.flashCardDirection ? l._pl : l._en, "e->p" === n.global.flashCardDirection ? "pl" : "en", n.state.online)
                                        }
                                    }, t.a.createElement("span", {
                                        className: "icon-volume"
                                    }), " ", t.a.createElement("strong", null, "e->p" === n.global.flashCardDirection ? l._pl : l._en))))), t.a.createElement("div", {
                                        className: "buttons-to-repeat nav-buttons"
                                    }, t.a.createElement("button", {
                                        className: "button-check-out",
                                        onClick: function() {
                                            return i.buttonCheckOut(_)
                                        }
                                    }, j.buttonCheckOut), t.a.createElement("button", {
                                        className: "button-i-know",
                                        onClick: function() {
                                            return i.buttonIKnow(n, a, o, _)
                                        }
                                    }, t.a.createElement("span", {
                                        className: "icon-ok"
                                    })), this.state.toggleRepeat ? t.a.createElement("button", {
                                        className: "button-i-dont-know",
                                        onClick: function() {
                                            return i.buttonIDontKnow_1(n, _)
                                        }
                                    }, t.a.createElement("span", {
                                        className: "icon-cancel"
                                    })) : t.a.createElement("button", {
                                        className: "button-i-dont-know",
                                        onClick: function() {
                                            return i.buttonIDontKnow_2(n)
                                        }
                                    }, t.a.createElement("span", {
                                        className: "icon-cancel"
                                    }))))
                                }), this)
                            }), this, this.t = -1, this.ti = -1))))
                        }
                    }]), a
                }(l.Component),
                I = function(e) {
                    Object(r.a)(a, e);
                    var n = Object(s.a)(a);

                    function a() {
                        return Object(i.a)(this, a), n.apply(this, arguments)
                    }
                    return Object(p.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                n = e.that,
                                a = e.ide,
                                l = e.idC,
                                o = f[a];
                            return o.youKnowID.length = o.data.length, t.a.createElement("div", {
                                className: "congratulation-info " + w
                            }, t.a.createElement("h2", null, j.infoCongratulation, t.a.createElement("span", {
                                className: "icon-award"
                            })), t.a.createElement("h3", null, '"', n.state.langNameExercise(o.name), '"'), t.a.createElement("p", {
                                className: "text-center"
                            }, j.textSummary, ":  ", t.a.createElement("span", {
                                className: "icon-up color-5"
                            }, o.youKnowID.length, "/", o.data.length, " = ", Math.ceil(100 * o.youKnowID.length / o.data.length), "%"), " - ", t.a.createElement("span", {
                                className: "icon-down color-17"
                            }, o.youDontKnowID.length, " (", o.dontKnowClick, ")")), t.a.createElement("button", {
                                className: "border-content-bottom",
                                onClick: function() {
                                    n.clearExercise(), n.setState({
                                        classHideNavButtons: ""
                                    })
                                }
                            }, j.buttonInfoCongratulation), t.a.createElement("button", {
                                className: "border-content-bottom",
                                onClick: function(e) {
                                    return n.setExercise(e, a, !1, !1, l, !1, "show-list")
                                }
                            }, j.summary), t.a.createElement("button", {
                                className: "border-content-bottom",
                                onClick: function() {
                                    o.youKnowID = [], o.youDontKnowID = [], o.dontKnowClick = 0, h("obj_exercise_cookie_" + a), h("obj_exercise_cookie_you_dont_know_" + a), h("obj_exercise_cookie_dk_click_" + a), n.clearExercise(), n.setState({
                                        classHideNavButtons: ""
                                    }), n.setExercise(null, a, !1, !1, l)
                                }
                            }, j.buttonInfoCongratulationRestart))
                        }
                    }]), a
                }(l.Component),
                A = function(e) {
                    Object(r.a)(a, e);
                    var n = Object(s.a)(a);

                    function a(e) {
                        var l;
                        return Object(i.a)(this, a), (l = n.call(this, e)).fullItemsList = function(e, n, a) {
                            n.setState({
                                showListActice: !0
                            }), n.setExercise(e, n.state.idExercise, !1, !1, a, !1, !0)
                        }, l.t = {}, l.oneTimeVoice = !0, l.writeAndCheck = function(e, n) {
                            l.setState({
                                checkWriteValue: e.target.value
                            }), clearTimeout(l.writeAndCheck.t), l.writeAndCheck.t = setTimeout((function(e, n, a) {
                                var l = e.toLowerCase().split(/\([^)]+\)/g).join("").split(".").join("").split("/").join("").split(",").join("").split(/\s+/).join(" ").trim(),
                                    t = n.toLowerCase().split(/\([^)]+\)/g).join("").split(".").join("").split("/").join("").split(",").join("").split(/\s+/).join(" ").trim();
                                console.log(l + "===" + t), l === t ? (a.setState({
                                    checkWriteOk: "check-write-ok"
                                }), a.props.that.setState({
                                    buttonWriteOK: "check-write-ok-button"
                                })) : (a.setState({
                                    checkWriteOk: ""
                                }), a.props.that.setState({
                                    buttonWriteOK: ""
                                }))
                            }), 600, e.target.value, n, Object(c.a)(l))
                        }, l.showTranslateForAMoment = function(e) {
                            l.setState({
                                translateForAMoment: e
                            }), l.props.that.setState({
                                translateForAMomentCheck: "translate-for-a-moment-check"
                            }), l.timeoutTranslateForAMoment = setTimeout((function(e) {
                                e.setState({
                                    translateForAMoment: ""
                                })
                            }), 5e3, Object(c.a)(l))
                        }, l.listenTranslate = function(e, n, a) {
                            "p->e" === n ? e.translateVoice(a, "en", !0) : e.translateVoice(a, "pl", !0), e.setState({
                                translateForAMomentCheck: "translate-for-a-moment-check"
                            })
                        }, l.state = {
                            checkWriteOk: "",
                            checkWriteValue: "",
                            translateForAMoment: ""
                        }, l
                    }
                    return Object(p.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                n = e.o,
                                a = e.that,
                                l = e.voice,
                                o = e.idItem,
                                _ = e.checkvoice,
                                i = e.flashCardDirection,
                                p = e.idC,
                                r = this;
                            return n.data.map((function(e, s) {
                                if (s === o) {
                                    var c, d = Math.ceil(100 * n.youKnowID.length / n.data.length),
                                        z = {
                                            background: "linear-gradient(to right, #2c8548 0%,#2c8548 " + d + "%,#974c49 " + d + "%,#974c49 100%)"
                                        };
                                    l && "no-voice" !== _ && r.oneTimeVoice !== o && ("p->e" === i ? a.translateVoice(e._pl, "pl", !0) : a.translateVoice(e._en, "en", !0), r.oneTimeVoice = o), "object" === typeof f[a.state.idExercise].description && (c = "pl" === a.global.lang ? f[a.state.idExercise].description._pl : f[a.state.idExercise].description._en);
                                    return t.a.createElement("div", {
                                        className: "flash-card-inset" + (u ? " ie-fix" : ""),
                                        key: s
                                    }, t.a.createElement("span", {
                                        className: "percent-pro",
                                        style: z
                                    }), t.a.createElement("h2", null, t.a.createElement("span", {
                                        className: "icon-random-card icon-random-card-" + p
                                    }), a.state.langNameExercise(n.category) && a.state.langNameExercise(n.category).split(/\([^)]+\)/g).join("") + " / ", a.state.langNameExercise(n.name)), t.a.createElement("p", null, a.state.online ? "online" : "offline", " | ", t.a.createElement("span", {
                                        className: "icon-up color-5"
                                    }, n.youKnowID.length, "/", n.data.length, " = ", Math.ceil(100 * n.youKnowID.length / n.data.length), "%"), " - ", t.a.createElement("span", {
                                        className: "icon-down color-17"
                                    }, n.youDontKnowID.length, " (", n.dontKnowClick, ")"), t.a.createElement("span", {
                                        className: "icon-right"
                                    }), "\xa0", t.a.createElement("a", {
                                        href: "#full-items-list",
                                        onClick: function(e) {
                                            return r.fullItemsList(e, a, p)
                                        }
                                    }, j.fullItemsList)), t.a.createElement("div", {
                                        className: "d-none"
                                    }, c ? t.a.createElement("p", null, C()(c)) : ""), t.a.createElement("div", {
                                        className: "flip-container"
                                    }, "p->e" === i ? t.a.createElement("div", {
                                        className: "flipper"
                                    }, t.a.createElement("div", {
                                        className: "front " + w
                                    }, t.a.createElement("p", {
                                        className: "paragraph-top",
                                        onClick: function() {
                                            return a.translateVoice(e._pl, "pl", !0)
                                        }
                                    }, t.a.createElement("strong", {
                                        className: "flag-pl"
                                    }, j.polish), t.a.createElement("span", {
                                        className: "icon-volume"
                                    }), t.a.createElement("span", {
                                        className: e._pl.length > 30 ? e._pl.length > 40 ? "small-size" : "normal-size" : "large-size"
                                    }, " ", e._pl)), t.a.createElement("hr", null), t.a.createElement("input", {
                                        type: "text",
                                        className: "write-and-check " + r.state.checkWriteOk,
                                        placeholder: j.TryToWriteATranslate,
                                        value: r.state.checkWriteValue,
                                        onChange: function(n) {
                                            return r.writeAndCheck(n, e._en)
                                        }
                                    }), e._en.indexOf("(") > -1 && e._en.indexOf(")") > -1 ? t.a.createElement("div", {
                                        className: "additional-options"
                                    }, t.a.createElement("p", null, t.a.createElement("span", null, j.totality, ":"), " ", e._en)) : "", r.state.translateForAMoment ? t.a.createElement("p", {
                                        className: "correct-show-answer"
                                    }, r.state.translateForAMoment) : t.a.createElement("button", {
                                        className: "button-show-answer",
                                        onClick: function() {
                                            return r.showTranslateForAMoment(e._en)
                                        }
                                    }, j.showAnswer), t.a.createElement("button", {
                                        className: "button-listen-answer",
                                        onClick: function() {
                                            return r.listenTranslate(a, i, e._en)
                                        }
                                    }, t.a.createElement("span", {
                                        className: "icon-volume " + (a.state.online ? "" : "line-disable")
                                    }), " ", j.listenTranslate), t.a.createElement("div", {
                                        className: "list-extends-links"
                                    }, t.a.createElement("button", {
                                        onClick: function(n) {
                                            return a.openHref(n, "https://translate.google.pl/#view=home&op=translate&sl=pl&tl=en&text=" + e._pl)
                                        },
                                        className: "google-translator",
                                        target: "blank_"
                                    }, t.a.createElement("span", {
                                        className: "icon-gt"
                                    })))), t.a.createElement("div", {
                                        className: "back " + w
                                    }, t.a.createElement("p", {
                                        className: "paragraph-top",
                                        onClick: function() {
                                            return a.translateVoice(e._pl, "pl", !0)
                                        }
                                    }, t.a.createElement("strong", {
                                        className: "flag-pl"
                                    }, j.polish), t.a.createElement("span", {
                                        className: "icon-volume"
                                    }), t.a.createElement("span", {
                                        className: e._pl.length > 30 ? e._pl.length > 40 ? "small-size" : "normal-size" : "large-size"
                                    }, e._pl)), t.a.createElement("hr", null), t.a.createElement("p", {
                                        className: "paragraph-bottom",
                                        onClick: function() {
                                            return a.translateVoice(e._en, "en", !0)
                                        }
                                    }, t.a.createElement("strong", {
                                        className: "flag-en"
                                    }, j.english), t.a.createElement("span", {
                                        className: "icon-volume"
                                    }), t.a.createElement("span", {
                                        className: e._en.length > 30 ? e._en.length > 40 ? "small-size" : "normal-size" : "large-size"
                                    }, t.a.createElement("strong", null, e._en))), t.a.createElement("div", {
                                        className: "list-extends-links"
                                    }, t.a.createElement("button", {
                                        onClick: function(n) {

                                            return a.openHref(n, "https://translate.google.pl/#view=home&op=translate&sl=pl&tl=en&text=" + e._pl)

                                        },
                                        className: "google-translator",
                                        target: "blank_"
                                    }, t.a.createElement("span", {
                                        className: "icon-gt"
                                    }))))) : t.a.createElement("div", {
                                        className: "flipper"
                                    }, t.a.createElement("div", {
                                        className: "front " + w
                                    }, t.a.createElement("p", {
                                        className: "paragraph-top",
                                        onClick: function() {
                                            return a.translateVoice(e._en, "en", !0)
                                        }
                                    }, t.a.createElement("strong", {
                                        className: "flag-en"
                                    }, j.english), t.a.createElement("span", {
                                        className: "icon-volume"
                                    }), t.a.createElement("span", {
                                        className: e._en.length > 30 ? e._en.length > 40 ? "small-size" : "normal-size" : "large-size"
                                    }, e._en)), t.a.createElement("hr", null), t.a.createElement("input", {
                                        type: "text",
                                        className: "write-and-check " + r.state.checkWriteOk,
                                        placeholder: j.TryToWriteATranslate,
                                        value: r.state.checkWriteValue,
                                        onChange: function(n) {
                                            return r.writeAndCheck(n, e._pl)
                                        }
                                    }), e._pl.indexOf("(") > -1 && e._pl.indexOf(")") > -1 ? t.a.createElement("div", {
                                        className: "additional-options"
                                    }, t.a.createElement("p", null, t.a.createElement("span", null, j.totality, ":"), " ", e._pl)) : "", r.state.translateForAMoment ? t.a.createElement("p", {
                                        className: "correct-show-answer"
                                    }, r.state.translateForAMoment) : t.a.createElement("button", {
                                        className: "button-show-answer",
                                        onClick: function() {
                                            return r.showTranslateForAMoment(e._pl)
                                        }
                                    }, j.showAnswer), t.a.createElement("button", {
                                        className: "button-listen-answer",
                                        onClick: function() {
                                            return r.listenTranslate(a, i, e._pl)
                                        }
                                    }, t.a.createElement("span", {
                                        className: "icon-volume " + (a.state.online ? "" : "line-disable")
                                    }), " ", j.listenTranslate), t.a.createElement("div", {
                                        className: "list-extends-links"
                                    }, t.a.createElement("button", {
                                        onClick: function(n) {

                                            return a.openHref(n, "https://translate.google.pl/#view=home&op=translate&sl=en&tl=pl&text=" + e._en)

                                        },
                                        className: "google-translator",
                                        target: "blank_"
                                    }, t.a.createElement("span", {
                                        className: "icon-gt"
                                    })))), t.a.createElement("div", {
                                        className: "back " + w
                                    }, t.a.createElement("p", {
                                        className: "paragraph-top",
                                        onClick: function() {
                                            return a.translateVoice(e._en, "en", !0)
                                        }
                                    }, t.a.createElement("strong", {
                                        className: "flag-en"
                                    }, j.english), t.a.createElement("span", {
                                        className: "icon-volume"
                                    }), t.a.createElement("span", {
                                        className: e._en.length > 30 ? e._en.length > 40 ? "small-size" : "normal-size" : "large-size"
                                    }, e._en)), t.a.createElement("hr", null), t.a.createElement("p", {
                                        className: "paragraph-bottom",
                                        onClick: function() {
                                            return a.translateVoice(e._pl, "pl", !0)
                                        }
                                    }, t.a.createElement("strong", {
                                        className: "flag-pl"
                                    }, j.polish), t.a.createElement("span", {
                                        className: "icon-volume"
                                    }), t.a.createElement("span", {
                                        className: e._pl.length > 30 ? e._pl.length > 40 ? "small-size" : "normal-size" : "large-size"
                                    }, t.a.createElement("strong", null, e._pl))), t.a.createElement("div", {
                                        className: "list-extends-links"
                                    }, t.a.createElement("button", {
                                        onClick: function(n) {

                                            return a.openHref(n, "https://translate.google.pl/#view=home&op=translate&sl=en&tl=pl&text=" + e._en)

                                        },
                                        className: "google-translator",
                                        target: "blank_"
                                    }, t.a.createElement("span", {
                                        className: "icon-gt"
                                    })))))))
                                }
                            }), a)
                        }
                    }]), a
                }(l.Component),
                D = function(e) {
                    Object(r.a)(a, e);
                    var n = Object(s.a)(a);

                    function a() {
                        var e;
                        Object(i.a)(this, a);
                        for (var l = arguments.length, o = new Array(l), _ = 0; _ < l; _++) o[_] = arguments[_];
                        return (e = n.call.apply(n, [this].concat(o))).flashcards = function(e, n, a) {
                            n.setState({
                                showListActice: !1
                            }), n.setExercise(e, n.state.idExercise, !1, !1, a)
                        }, e.items = function(e, n, a, l, o, _) {
                            var i = "p->e" !== _ ? "https://translate.google.pl/#view=home&op=translate&sl=en&tl=pl&text=" + l._en : "https://translate.google.pl/#view=home&op=translate&sl=pl&tl=en&text=" + l._pl;
                            return t.a.createElement("tr", {
                                key: e,
                                className: "list-container " + o
                            }, t.a.createElement("th", null, t.a.createElement("small", null, e + 1), t.a.createElement("button", {
                                onClick: function(e) {
                                    return a.openHref(e, i)
                                },
                                className: "google-translator",
                                target: "blank_"
                            }, t.a.createElement("span", {
                                className: "icon-gt"
                            }))), t.a.createElement("td", {
                                onClick: function() {
                                    return a.translateVoice("p->e" === _ ? l._pl : l._en, "p->e" === _ ? "pl" : "en", a.state.online)
                                }
                            }, t.a.createElement("span", {
                                className: "icon-volume " + (a.state.online ? "" : "line-disable")
                            }), t.a.createElement("span", null, "p->e" === _ ? l._pl : l._en), "check-ok" === o && t.a.createElement("span", {
                                className: "icon-ok"
                            })), t.a.createElement("td", {
                                onClick: function() {
                                    return a.translateVoice("p->e" === _ ? l._en : l._pl, "p->e" === _ ? "en" : "pl", a.state.online)
                                }
                            }, t.a.createElement("span", {
                                className: "icon-volume " + (a.state.online ? "" : "line-disable")
                            }), t.a.createElement("span", null, "p->e" === _ ? l._en : l._pl), "check-ok" === o && t.a.createElement("span", {
                                className: "icon-ok"
                            })))
                        }, e
                    }
                    return Object(p.a)(a, [{
                        key: "render",
                        value: function() {
                            var e, n = this,
                                a = this.props,
                                l = a.o,
                                o = a.that,
                                _ = a.idC,
                                i = a.flashCardDirection,
                                p = this,
                                r = Math.ceil(100 * l.youKnowID.length / l.data.length),
                                s = {
                                    background: "linear-gradient(to right, #2c8548 0%,#2c8548 " + r + "%,#974c49 " + r + "%,#974c49 100%)"
                                };
                            return "object" === typeof f[o.state.idExercise].description && (e = "pl" === o.global.lang ? f[o.state.idExercise].description._pl : f[o.state.idExercise].description._en), "function" !== typeof l.youKnowID.includes && (l.youKnowID.includes = function() {}), "function" !== typeof l.youDontKnowID.includes && (l.youDontKnowID.includes = function() {}), console.log(l.youDontKnowID), t.a.createElement("div", {
                                className: "flash-card-inset"
                            }, t.a.createElement("span", {
                                className: "percent-pro",
                                style: s
                            }), t.a.createElement("h2", null, t.a.createElement("span", {
                                className: "icon-random-card icon-random-card-" + _
                            }), o.state.langNameExercise(l.category) && o.state.langNameExercise(l.category) + " / ", o.state.langNameExercise(l.name), " ", t.a.createElement("span", {
                                className: "icon-right"
                            }), " ", t.a.createElement("a", {
                                href: "#flashcards",
                                onClick: function(e) {
                                    return n.flashcards(e, o, _)
                                }
                            }, j.flashcards)), t.a.createElement("p", null, o.state.online ? "online" : "offline", " | ", t.a.createElement("span", {
                                className: "icon-up color-5"
                            }, l.youKnowID.length, "/", l.data.length, " = ", Math.ceil(100 * l.youKnowID.length / l.data.length), "%"), " - ", t.a.createElement("span", {
                                className: "icon-down color-17"
                            }, l.youDontKnowID.length, " (", l.dontKnowClick, ")")), e ? t.a.createElement("p", null, C()(e)) : "", t.a.createElement("div", {
                                className: "table-wrap"
                            }, t.a.createElement("table", {
                                className: "table-list"
                            }, t.a.createElement("thead", null, t.a.createElement("tr", null, t.a.createElement("th", null, "id"), t.a.createElement("th", null, "p->e" === i ? "pl" : "en"), t.a.createElement("th", null, "p->e" === i ? "en" : "pl"))), t.a.createElement("tbody", null, l.youDontKnowID.length ? t.a.createElement("tr", {
                                className: "tr-header"
                            }, t.a.createElement("th", {
                                colSpan: "3"
                            }, j.sentenceYouDidntKnow)) : null, l.data.map((function(e, n) {
                                return l.youDontKnowID.includes(n) ? p.items(n, l, o, e, "check-you-dont-know", i) : null
                            }), o, p), l.youKnowID.length === l.data.length || l.youDontKnowID.length === l.data.length || l.data.length <= l.youDontKnowID.length + l.youKnowID.length ? null : t.a.createElement("tr", {
                                className: "tr-header"
                            }, t.a.createElement("th", {
                                colSpan: "3"
                            }, j.sentenceNotAnswered)), l.data.map((function(e, n) {
                                return l.youKnowID.includes(n) || l.youDontKnowID.includes(n) ? null : p.items(n, l, o, e, "check-no", i)
                            }), o, p), l.youKnowID.length ? t.a.createElement("tr", {
                                className: "tr-header"
                            }, t.a.createElement("th", {
                                colSpan: "3"
                            }, j.sentenceYouKnew)) : null, l.data.map((function(e, n) {
                                return l.youKnowID.includes(n) ? p.items(n, l, o, e, "check-ok", i) : null
                            }), o, p)))))
                        }
                    }]), a
                }(l.Component),
                P = !u && a(45).Detector,
                O = function(e) {
                    Object(r.a)(a, e);
                    var n = Object(s.a)(a);

                    function a(e) {
                        var l;
                        return Object(i.a)(this, a), (l = n.call(this, e)).startCookiesFlashCardDirection = function() {
                            return null == k("flashcards_cookie") ? (y("flashcards_cookie", "p->e"), "p->e") : "p->e" === k("flashcards_cookie") ? "p->e" : "e->p"
                        }, l.startCookiesLang = function() {
                            if(global.versionLanguage === "english") {
                                return null == k("language_cookie") ? (y("language_cookie", "en"), "en") : "en" === k("language_cookie") ? "en" : "pl"
                            } else {
                                return null == k("language_cookie") ? (y("language_cookie", "pl"), "pl") : "pl" === k("language_cookie") ? "pl" : "en"
                            }

                        }, l.openHref = function(e, n) {
                            if(detectionDevice()){
                                e.preventDefault();
                                jsToJava.openLink(n);
                            } else {
                                window.open(n, "_system"), e.preventDefault()
                            }

                        }, l.arrayUnique = function(e) {
                            return e.filter((function(n, a) {
                                return e.indexOf(n) >= a
                            }))
                        }, l.translateVoice = function(e, n, a) {
                            if (a && ("object" === typeof window.speechSynthesis || detectionDevice())) switch (n) {
                                case "pl":
                                    l.speak(e, "pl-PL");
                                    break;
                                case "en":
                                    l.speak(e, "en-US");
                                    break;
                                default:
                                    l.speak(e, "en-US")
                            }
                        }, l.layer = function(e, n, a, o, _, i, p) {
                            return p ? (l.setState({
                                showListActice: !0
                            }), t.a.createElement(D, {
                                o: e,
                                that: n,
                                idC: a,
                                idItem: _,
                                flashCardDirection: n.global.flashCardDirection,
                                checkvoice: i,
                                voice: n.state.enableAutoVoice
                            })) : e.youKnowID.length === e.data.length ? t.a.createElement(I, {
                                that: n,
                                idC: a,
                                ide: o
                            }) : t.a.createElement(A, {
                                o: e,
                                that: n,
                                idC: a,
                                idItem: _,
                                flashCardDirection: n.global.flashCardDirection,
                                checkvoice: i,
                                voice: n.state.enableAutoVoice,
                                ref: function(e) {
                                    l.childExercises = e
                                }
                            })
                        }, l.adMob = function() {
                            if(detectionDevice() && window.navigator.onLine) {
                                window.jsToJava.showInterstitial();
                            }
                        }, l.setExercise = function(e, n, a, t, o, _, i) {
                            l.speakStop();
                            var p, r = f[n];
                            l.global.idC = o, p = a || l.randomItem(r), l.setState({
                                idExercise: n,
                                idItem: p,
                                classCheckOut: "",
                                classCheckOutMore: "",
                                classHideNavButtons: r.youKnowID.length === r.data.length || i ? "d-none" : "",
                                classHideOrShowMainPartsPage: "hide-flash-cards-show-list-exercise",
                                callObj: l.layer(r, Object(c.a)(l), o, n, p, t, i)
                            }), _ && (l.setState({
                                closeCloude: "show-cloude"
                            }), l.global.timeOutCloseCloud = setTimeout((function(e) {
                                e.setState({
                                    closeCloude: ""
                                })
                            }), 5e3, Object(c.a)(l))), i && window.scrollTo(0, 0), e && e.preventDefault()
                        }, l.clearExercise = function(e) {
                            l.speakStop(), l.setState({
                                idExercise: -1,
                                callObj: "",
                                classHideOrShowMainPartsPage: "show-list-exercise-hide-flash-cards",
                                classHideNavButtons: "",
                                closeCloude: "",
                                showListActice: !1
                            }), clearTimeout(l.global.timeOutCloseCloud), l.child.randomItem(), delete l.lastNumberRandom, e && e.preventDefault()
                        }, l.setLang = function(e, n) {
                            // l.global.lang
                            var body = document.querySelector("body");
                            body.classList.remove("lang-" + l.global.lang);
                            ! function(e) {
                                switch (e) {
                                    case "en":
                                        j = {
                                            lang: "en",
                                            buttonCloseExercise: "Your state will be automatically saved",
                                            infoCongratulation: "Congratultaion!",
                                            buttonInfoCongratulation: "Back to exercises menu",
                                            buttonInfoCongratulationRestart: "Start this exercise all over again",
                                            buttonIKnow: "I knew",
                                            buttonIDontKnow: "I don't knew",
                                            buttonSimpleLotter: "Simple Lottery",
                                            buttonCheckOut: "Check out",
                                            buttonCheckOutToNext: "Next",
                                            textSummary: "Summary",
                                            buttonEnableAutoVoice: "Enable automatically voice",
                                            buttonDisableRotate: "Disable rotate",
                                            buttonRestartProgress: "Restart progress",
                                            buttonCloseApplication: "Close application",
                                            yourPlatform: "Your platform",
                                            polish: "Polish",
                                            english: "English",
                                            pl: "Pl",
                                            en: "En",
                                            abouts: "Autor: semDesign<br />Contact: aleksander.nyczyk@gmail.com<br />Version: ",
                                            gt: "Google Translate",
                                            privacy: "Privacy",
                                            fullItemsList: "Full items list",
                                            flashcards: "Flashcards",
                                            lottery: "Lottery",
                                            noResultSearch: "no result, change the direction of translation: ",
                                            searchOnThisPage: "Search on this page",
                                            changeDirectionLanguage: "you can change the direction of translation: ",
                                            found: "found",
                                            or: "or",
                                            summary: "Summary",
                                            sentenceYouDidntKnow: "You didn't know (at least once)",
                                            sentenceNotAnswered: "You have not answered yet",
                                            sentenceYouKnew: "You knew (or you learned)",
                                            toRepeat: "To repeat",
                                            toggleToRepeatShow: "The whole list to repeat",
                                            toggleToRepeatHide: "Lottery",
                                            TryToWriteATranslate: "Try to write a translate",
                                            infoDescription: "Remember, English and Polish words often have many meanings that can also depend on the context. We chose the most Common words and sometimes less popular alternatives in brackets. If you need more complete translation, you can use the icon with the Google Translate. The icon is at the bottom-right corner of the flashcard. If you have any questions or suggestions, please send an",
                                            totality: "totality",
                                            showAnswer: "Show the correct answer for a moment",
                                            listenTranslate: "Listen to the translation"
                                        };
                                        break;
                                    default:
                                        j = {
                                            lang: "pl",
                                            buttonCloseExercise: "Tw\xf3j stan zostanie automatycznie zapisany",
                                            infoCongratulation: "Gratulacje!",
                                            buttonInfoCongratulation: "Wr\xf3\u0107 do menu \u0107wicze\u0144",
                                            buttonInfoCongratulationRestart: "Zacznij to \u0107wiczenie od nowa",
                                            buttonIKnow: "Wiedzia\u0142em/am",
                                            buttonIDontKnow: "Nie wiedzia\u0142em/am",
                                            buttonSimpleLotter: "Zwyk\u0142e losowanie",
                                            buttonCheckOut: "Sprawd\u017a",
                                            buttonCheckOutToNext: "Nast\u0119pny",
                                            textSummary: "Podsumowanie",
                                            buttonEnableAutoVoice: "W\u0142\u0105czaj automatycznie g\u0142os",
                                            buttonDisableRotate: "Wy\u0142\u0105cz obracanie",
                                            buttonRestartProgress: "Restartuj post\u0119p",
                                            buttonCloseApplication: "Zamknij aplikacje",
                                            yourPlatform: "Twoja platforma",
                                            polish: "Polski",
                                            english: "Angielski",
                                            pl: "Pl",
                                            en: "En",
                                            abouts: "Autor: semDesign<br />Kontakt: aleksander.nyczyk@gmail.com<br />Wersja: ",
                                            gt: "Google Translator",
                                            privacy: "Prywatno\u015b\u0107",
                                            fullItemsList: "Pe\u0142na lista",
                                            flashcards: "Fiszki",
                                            lottery: "Losowanie",
                                            noResultSearch: "bez rezulatatu, zmie\u0144 kierunek: ",
                                            searchOnThisPage: "Szukaj na tej stronie",
                                            changeDirectionLanguage: "mo\u017cesz zmieni\u0107 kierunek t\u0142umaczenia: ",
                                            found: "znaleziono",
                                            or: "albo",
                                            summary: "Podsumowanie",
                                            sentenceYouDidntKnow: "Nie wiedzia\u0142e\u015b (przynajmniej raz)",
                                            sentenceNotAnswered: "Jeszcze nie odpowiada\u0142e\u015b",
                                            sentenceYouKnew: "Wiedzia\u0142e\u015b (lub si\u0119 nauczy\u0142e\u015b)",
                                            toRepeat: "Do powt\xf3rki",
                                            toggleToRepeatShow: "Ca\u0142a lista do powt\xf3rki",
                                            toggleToRepeatHide: "Loteria",
                                            TryToWriteATranslate: "Spr\xf3buj napisa\u0107 t\u0142umaczenie",
                                            infoDescription: "Pami\u0119taj, \u017ce angielskie i polskie s\u0142owa maj\u0105 cz\u0119sto wiele znacze\u0144, tak\u017ce zale\u017cnych od kontekstu. Do aplikacji starano si\u0119 wybra\u0107 najcz\u0119\u015bciej stosowane t\u0142umaczenia oraz ewentualne alternatywy w nawiasach. Je\u015bli potrzebujesz kompletniejszego t\u0142umaczenia, mo\u017cesz u\u017cy\u0107 ikony z Transaltora Google, kt\xf3ra znajduje si\u0119 w prawym dolnym rogu fiszki. Wszelkie pytania i sugestie prosz\u0119 kierowa\u0107 na ",
                                            totality: "Ca\u0142o\u015b\u0107",
                                            showAnswer: "Poka\u017c na chwil\u0119 poprawn\u0105 odpowie\u017a",
                                            listenTranslate: "Wys\u0142uchaj t\u0142umaczenia"
                                        }
                                }
                            }(n), l.global.lang = n, "pl" === n && (y("language_cookie", "pl"), l.setState({
                                activePL: "active-lang",
                                activeEN: ""
                            })), "en" === n && (y("language_cookie", "en"), l.setState({
                                activePL: "",
                                activeEN: "active-lang"
                            })), l.setState({
                                direction: l.global.directionText()
                            }), l.state.idExercise < 0 || !1 === l.state.idItem ? l.setState({
                                callObj: !1 === l.state.idItem && -1 !== l.state.idExercise ? t.a.createElement(I, {
                                    that: Object(c.a)(l),
                                    ide: l.state.idExercise
                                }) : ""
                            }) : l.setExercise(e, l.state.idExercise, l.state.idItem, "no-voice", l.global.idC, !1, l.state.showListActice), null !== l.state.resultsSearch && l.searchChangeMain(), e && e.preventDefault()
                            // l.global.lang
                            //alert("X");
                            body.classList.add("lang-" + l.global.lang);

                        }, l.clearChildExerciseAlias = function() {
                            l.speakStop(), l.childExercises.setState({
                                checkWriteOk: "",
                                checkWriteValue: "",
                                translateForAMoment: ""
                            }), clearTimeout(l.childExercises.timeoutTranslateForAMoment), l.setState({
                                buttonWriteOK: "",
                                translateForAMomentCheck: ""
                            })
                        }, l.changeDirection = function(e) {

                            "p->e" === l.global.flashCardDirection ? (y("flashcards_cookie", "e->p"), l.global.flashCardDirection = "e->p") : (y("flashcards_cookie", "p->e"), l.global.flashCardDirection = "p->e"), l.setState({
                                direction: l.global.directionText()
                            }), l.state.idExercise > -1 && (l.state.showListActice || l.clearChildExerciseAlias(), l.setExercise(e, l.state.idExercise, l.state.idItem, !1, l.global.idC, !1, l.state.showListActice)), null !== l.state.resultsSearch && l.searchChangeMain(), e && e.preventDefault()



                        }, l.randomItem = function(e) {
                            var n, a;
                            "undefined" !== typeof l.lastNumberRandom ? console.log("last number is: " + l.lastNumberRandom) : console.log("Last number not exist"), console.log("count number in random: " + (e.data.length - e.youKnowID.length));
                            do {
                                if (n = !0, a = Math.floor(Math.random() * e.data.length), "object" === typeof e.youKnowID && e.youKnowID.length > 0 && e.youKnowID.length < e.data.length)
                                    for (var t = 0; t < e.youKnowID.length; t++) e.youKnowID[t] === a && (n = !1);
                                a === l.lastNumberRandom && e.data.length - e.youKnowID.length > 1 && (n = !1)
                            } while (!n);
                            return l.lastNumberRandom = a, console.log("current random: " + a), a
                        }, l.timeoutAnim = function(e) {
                            l.state.enableAutoVoice && l.global.soundSeparator.play(), setTimeout((function(n) {
                                n.setExercise(null, e, !1, !1, n.global.idC, !1), n.setState({
                                    classCheckOutMore: ""
                                })
                            }), 300, Object(c.a)(l))
                        }, l.iKnow = function(e) {
                            if (l.clearChildExerciseAlias(), l.state.idExercise > -1) {
                                var n = f;
                                "object" !== typeof n[l.state.idExercise].youKnowID && (n[l.state.idExercise].youKnowID = []), n[l.state.idExercise].youKnowID.length < n[l.state.idExercise].data.length && !1 !== e && (n[l.state.idExercise].youKnowID.push(e), y("obj_exercise_cookie_" + l.state.idExercise, JSON.stringify(n[l.state.idExercise].youKnowID))), l.setState({
                                    classCheckOut: ""
                                }), setTimeout(l.timeoutAnim, l.state.rotateDisable ? 0 : 400, l.state.idExercise), n[l.state.idExercise].youKnowID.length === n[l.state.idExercise].data.length && l.setState({
                                    classHideNavButtons: "d-none"
                                })
                            }
                        }, l.iDontKnow = function(e) {
                            if (l.clearChildExerciseAlias(), l.state.idExercise > -1) {
                                var n = f;
                                "object" !== typeof n[l.state.idExercise].youDontKnowID && (n[l.state.idExercise].youDontKnowID = []), n[l.state.idExercise].youDontKnowID.length < n[l.state.idExercise].data.length && !1 !== e && "function" === typeof n[l.state.idExercise].youDontKnowID.includes && (n[l.state.idExercise].youDontKnowID.includes(e) || (n[l.state.idExercise].youDontKnowID.push(e), y("obj_exercise_cookie_you_dont_know_" + l.state.idExercise, JSON.stringify(n[l.state.idExercise].youDontKnowID)))), n[l.state.idExercise].dontKnowClick += 1, y("obj_exercise_cookie_dk_click_" + l.state.idExercise, n[l.state.idExercise].dontKnowClick), l.setState({
                                    classCheckOut: ""
                                }), setTimeout(l.timeoutAnim, 400, l.state.idExercise)
                            }
                        }, l.simpleLottery = function() {
                            if (l.clearChildExerciseAlias(), l.state.idExercise > -1) {
                                var e = f;
                                l.setState({
                                    classCheckOut: ""
                                }), setTimeout(l.timeoutAnim, l.state.rotateDisable ? 0 : 400, l.state.idExercise), e[l.state.idExercise].youKnowID.length === e[l.state.idExercise].data.length && l.setState({
                                    classHideNavButtons: "d-none"
                                })
                            }
                        }, l.checkOut = function() {
                            l.state.enableAutoVoice && setTimeout((function(e) {
                                "p->e" === e.global.flashCardDirection ? e.translateVoice(f[e.state.idExercise].data[e.state.idItem]._en, "en", !0) : e.translateVoice(f[e.state.idExercise].data[e.state.idItem]._pl, "pl", !0)
                            }), 300, Object(c.a)(l)), l.setState({
                                classCheckOut: "check-out-card",
                                classCheckOutMore: "check-out-card-more"
                            }), l.childExercises.setState({
                                checkWriteOk: ""
                            })
                        }, l.removeCookieExerciseId = function(e, n, a) {
                            h("obj_exercise_cookie_" + n), h("obj_exercise_cookie_you_dont_know_" + n), h("obj_exercise_cookie_dk_click_" + n), "object" === typeof a && (a.youKnowID = [], a.youDontKnowID = [], a.dontKnowClick = 0, l.setState({})), l.child.randomItem(), e && e.preventDefault()
                        }, l.removeCookieExerciseAll = function() {
                            f.map((function(e, n) {
                                h("obj_exercise_cookie_" + n), h("obj_exercise_cookie_you_dont_know_" + n), h("obj_exercise_cookie_dk_click_" + n), e.youKnowID = [], e.youDontKnowID = [], e.dontKnowClick = 0
                            })), l.child.randomItem(), l.setState({})
                        }, l.uniqueCategory = function(e, n) {
                            l.global.uniqueCategoryArray = [], e.map((function(e, n) {
                                this.global.uniqueCategoryArray.push(this.state.langNameExercise(e.category))
                            }), Object(c.a)(l)), l.global.uniqueCategoryArray = l.arrayUnique(l.global.uniqueCategoryArray);
                            var a = l.global.categoryActive;
                            l.global.categoryActive = [];
                            for (var t = 0, o = l.global.uniqueCategoryArray.length; t < o; t++) l.global.categoryActive.push(!n && a[t])
                        }, l.showCategory = function(e) {
                            var n = l.global.categoryActive;
                            n[e] = !n[e], l.setState({
                                categoryActive: n
                            })
                        }, l.disableRotate = function() {
                            l.state.rotateDisable ? h("disable_rotate_cookie") : y("disable_rotate_cookie", !0), l.setState({
                                rotateDisable: l.state.rotateDisable ? "" : "rotate-disable"
                            })
                        }, l.enableAutoVoice = function(e) {
                            l.state.enableAutoVoice ? h("enable_auto_voice_cookie") : y("enable_auto_voice_cookie", !0), l.setState({
                                enableAutoVoice: l.state.enableAutoVoice ? "" : "enable-auto-voice"
                            }), e && e.preventDefault()
                        }, l.preloaderFun = function() {
                            setTimeout((function(e) {
                                e.setState({
                                    preloader: "animate-hide"
                                }), setTimeout((function(e) {
                                    e.setState({
                                        preloader: "delete"
                                    })
                                }), 800, e)
                            }), 4e3, Object(c.a)(l))
                        }, l.closeApplication = function() {
                            z && window.jsToJava.closeApp() //z && navigator.app.exitApp()
                        }, l.checkOnline = function(e, n) {
                            l.searchChangeMain(), l.setState({
                                online: n
                            }), l.state.idExercise > -1 && l.setExercise(e, l.state.idExercise, l.state.idItem, "no-voice", l.global.idC, !1, l.state.showListActice)
                        }, l.navMobileActive = function() {
                            l.setState({
                                navMobileActive: l.state.navMobileActive ? "" : "nav-mobile-active",
                                moveMenu: l.state.navMobileActive ? l.widthMenu.current.offsetWidth : 0
                            })
                        }, l.onSwipeStart = function() {
                            l.state.navMobileActive && (l.global.fSwipe = !0)
                        }, l.moveMenu = function(e, n, a) {
                            "move" === e ? n >= 0 && (n < 100 ? l.setState({
                                moveMenu: n,
                                mainNavInsetTransitionStop: "main-nav-inset-transition-stop"
                            }) : (l.setState({
                                moveMenu: l.widthMenu.current.offsetWidth,
                                mainNavInsetTransitionStop: "",
                                navMobileActive: ""
                            }), l.global.fSwipe = !1)) : "" !== l.state.navMobileActive && l.setState({
                                moveMenu: 0,
                                mainNavInsetTransitionStop: ""
                            })
                        }, l.onSwipeMove = function(e, n) {
                            l.state.navMobileActive && l.global.fSwipe && l.moveMenu("move", e.x, n)
                        }, l.onSwipeEnd = function() {
                            l.state.navMobileActive && l.moveMenu()
                        }, l.onResize = function() {
                            l.setState({
                                moveMenu: l.state.navMobileActive ? 0 : l.widthMenu.current.offsetWidth
                            })
                        }, l.showAbouts = function() {
                            l.setState({
                                showAbouts: l.state.showAbouts ? "" : "abouts-l-active"
                            })
                        }, l.searchBrowser = function() {
                            l.setState({
                                searchBrowser: !l.state.searchBrowser && !0
                            })
                        }, l.searchChange = function(e) {
                            l.setState({
                                searchWords: e.target.value
                            })
                        }, l.searchWordsMainSlideToggle = function() {
                            l.setState({
                                searchWordsMainSlideToggle: l.state.searchWordsMainSlideToggle ? "" : "search-words-main-slide-toggle"
                            })
                        }, l.getClosest = function(e, n) {
                            for (; e.parentElement;) {
                                if ((e = e.parentElement).parentElement.className === n) return !0;
                                if ("root" === e.parentElement.getAttribute("id")) return !1
                            }
                            return !1
                        }, l.searchWordsMainLayoutSlideToggle = function(e) {
                            l.state.searchWordsMainSlideToggle || (l.getClosest(e.target, "direction-lang-and-search") || l.setState({
                                searchWordsMainSlideToggle: "search-words-main-slide-toggle"
                            }))
                        }, l.searchResult = function(e, n, a) {
                            console.log("lang: " + e + " | that: " + n + " | idSearch: " + a), n.setState({
                                resultsSearch: f.map((function(l) {
                                    var o = 0;
                                    return l.data.map((function(_, i) {
                                        var p = "p->e" === e ? _._pl.toLowerCase() : _._en.toLowerCase(),
                                            r = n.state.searchWordsMain.toLowerCase();
                                        return p.indexOf(r) > -1 ? t.a.createElement("li", {
                                            key: i
                                        }, t.a.createElement("span", {
                                            className: "d-none"
                                        }, o++), 1 === o && t.a.createElement("h3", {
                                            className: "row"
                                        }, t.a.createElement("span", {
                                            className: "col"
                                        }, "p->e" === e ? l.category._pl : l.category._en, " - ", "p->e" === e ? l.name._pl : l.name._en)), t.a.createElement("p", {
                                            className: "d-flex id-" + a++
                                        }, t.a.createElement("span", {
                                            className: "col-6 d-flex"
                                        }, t.a.createElement("button", {
                                            onClick: function(a) {
                                                return n.openHref(a, "https://translate.google.pl/#view=home&op=translate&sl=" + ("p->e" === e ? "pl&tl=en&text=" + _._pl : "en&tl=pl&text=" + _._en))
                                            },
                                            className: "icon-gt"
                                        }), t.a.createElement("i", {
                                            className: "icon-volume",
                                            onClick: function() {
                                                return n.translateVoice("p->e" === e ? _._pl : _._en, "p->e" === e ? "pl" : "en", !0)
                                            }
                                        }, "p->e" === e ? _._pl : _._en)), t.a.createElement("span", {
                                            className: "col-6 d-flex"
                                        }, t.a.createElement("button", {
                                            onClick: function(a) {
                                                return n.openHref(a, "https://translate.google.pl/#view=home&op=translate&sl=" + ("p->e" === e ? "en&tl=pl&text=" + _._en : "pl&tl=en&text=" + _._pl))
                                            },
                                            className: "icon-gt"
                                        }), t.a.createElement("i", {
                                            className: "icon-volume",
                                            onClick: function() {
                                                return n.translateVoice("p->e" === e ? _._en : _._pl, "p->e" === e ? "en" : "pl", !0)
                                            }
                                        }, "p->e" === e ? _._en : _._pl)))) : ""
                                    }), n)
                                }), n)
                            }), n.setState({
                                resultsSearchCount: a - 1
                            }), 1 === a && n.setState({
                                resultsSearch: "",
                                resultsSearchCount: 0
                            })
                        }, l.searchChangeMain = function(e) {
                            console.log(l.state.direction), console.log(l.global.flashCardDirection), e && l.setState({
                                searchWordsMain: e.target.value
                            }), clearTimeout(l.global.searchTime.first), clearTimeout(l.global.searchTime.second);
                            l.global.searchTime.second = setTimeout((function(e) {
                                e.state.searchWordsMain.length > 1 ? e.global.searchTime.first = setTimeout((function(e) {
                                    0 === e.state.searchWordsMain.length ? e.setState({
                                        resultsSearch: null
                                    }) : e.searchResult(e.global.flashCardDirection, e, 1)
                                }), 400, e) : e.setState({
                                    resultsSearch: null,
                                    resultsSearchCount: 0
                                })
                            }), 400, Object(c.a)(l))
                        }, l.infoFull = function() {
                            l.state.infoFull ? l.setState({
                                infoFull: ""
                            }) : l.setState({
                                infoFull: "category-active"
                            })
                        }, l.componentDidMount = function() {
                            var e = Object(c.a)(l);
                            window.onscroll = function() {
                                0 === window.pageYOffset ? e.state.headerOnTop && e.setState({
                                    headerOnTop: ""
                                }) : e.state.headerOnTop || e.setState({
                                    headerOnTop: "header-on-none-top"
                                })
                            }
                        }, l.speak = function(e, n) {
                            if (l.speakStop(), e = e.split("/").join(" "), z && detectionDevice()) window.jsToJava.onSpeakTTS(e,n);
                            else {
                                var a = new SpeechSynthesisUtterance(e);
                                a.lang = n, window.speechSynthesis.speak(a)
                            }
                        }, l.speakStop = function() {
                            //window.jsToJava.tts("stopSound","","");
                            window.jsToJava.onStopTTS();
                            if(detectionDevice()) {
                                window.jsToJava.onStopTTS();
                            } else {
                                if(typeof window.speechSynthesis === "object") {
                                    window.speechSynthesis.cancel();
                                }
                            }
                            //"object" === typeof window.speechSynthesis && window.speechSynthesis.cancel(), detectionDevice() && window.jsToJava.tts("stopSound")
                        }, l.widthMenu = t.a.createRef(), l.global = {
                            uniqueCategoryArray: [],
                            categoryActive: [],
                            flashCardDirection: l.startCookiesFlashCardDirection(),
                            lang: l.startCookiesLang(),
                            idC: !1,
                            fSwipe: !1,
                            timeOutCloseCloud: !0,
                            version: global.versionApp,
                            searchTime: {},
                            soundSeparator: new Audio(N.a),
                            directionText: function() {
                                return "e->p" === l.global.flashCardDirection ? j.en + " | " + j.pl : j.pl + " | " + j.en
                            }
                        }, l.state = {
                            callObj: "",
                            idExercise: -1,
                            idItem: !1,
                            langCongratulation: !1,
                            direction: l.global.directionText(),
                            activePL: "pl" === l.global.lang ? "active-lang" : "",
                            activeEN: "en" === l.global.lang ? "active-lang" : "",
                            classCheckOut: "",
                            classCheckOutMore: "",
                            classHideOrShowMainPartsPage: "show-list-exercise-hide-flash-cards",
                            classHideNavButtons: "",
                            navMobileActive: "",
                            rotateDisable: null == k("disable_rotate_cookie") ? "" : "rotate-disable",
                            enableAutoVoice: null == k("enable_auto_voice_cookie") ? "" : "enable-auto-voice",
                            preloader: "",
                            online: !0,
                            moveMenu: "",
                            mainNavInsetTransitionStop: "",
                            closeCloude: "",
                            showAbouts: "",
                            headerOnTop: "",
                            showListActice: !1,
                            searchBrowser: !1,
                            searchWords: "",
                            searchWordsMain: "",
                            searchWordsMainActive: !1,
                            resultsSearch: null,
                            resultsSearchCount: 0,
                            searchWordsMainSlideToggle: "",
                            buttonWriteOK: "",
                            infoFull: "",
                            translateForAMomentCheck: "",
                            langNameExercise: function(e) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.global.lang;
                                switch (n) {
                                    case "en":
                                        return e._en;
                                    default:
                                        return e._pl
                                }
                            }
                        }, l
                    }
                    return Object(p.a)(a, [{
                        key: "componentWillMount",
                        value: function() {
                            var e = this;
                            f.map((function(e, n) {
                                return "undefined" === typeof e.youKnowID && (e.youKnowID = [], e.youDontKnowID = [], e.dontKnowClick = 0), null != k("obj_exercise_cookie_" + n, "array") && (e.youKnowID = k("obj_exercise_cookie_" + n, "array")), null != k("obj_exercise_cookie_you_dont_know_" + n, "array") && (e.youDontKnowID = k("obj_exercise_cookie_you_dont_know_" + n, "array")), null != k("obj_exercise_cookie_dk_click_" + n) && (e.dontKnowClick = parseInt(k("obj_exercise_cookie_dk_click_" + n))), !0
                            })), this.uniqueCategory(f, !0), this.setLang(!1, this.global.lang), this.preloaderFun(), window.document.addEventListener("backbutton", (function() {
                                alert("x");
                                //z && (e.state.idExercise > -1 ? e.clearExercise() : navigator.app.backHistory())
                            }), !1)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                n = this.props.title;
                            this.uniqueCategory(f, !1);
                            var a = this.state.direction.split("|");
                            return t.a.createElement(b.a, {
                                onSwipeStart: this.onSwipeStart,
                                onSwipeMove: this.onSwipeMove,
                                onSwipeEnd: this.onSwipeEnd,
                                ref: function(n) {
                                    return e.container = n
                                }
                            }, t.a.createElement("div", {
                                onClick: function(n) {
                                    return e.searchWordsMainLayoutSlideToggle(n)
                                },
                                className: "module-flash-cards " + this.state.classHideOrShowMainPartsPage + " " + this.state.navMobileActive + " " + this.state.rotateDisable + " " + this.state.enableAutoVoice
                            }, t.a.createElement("div", {
                                className: "bg"
                            }), t.a.createElement("div", {
                                className: "bg bg-1"
                            }), t.a.createElement("div", {
                                className: "bg bg-2"
                            }), t.a.createElement("div", {
                                className: "bg bg-3"
                            }), "delete" !== this.state.preloader && t.a.createElement("div", {
                                className: this.state.preloader + " preloader d-flex justify-content-center align-items-center"
                            }, t.a.createElement("span", {
                                className: "icon-new-logo"
                            })), t.a.createElement("div", {
                                className: "main-header-wrap " + this.state.headerOnTop + " " + this.state.searchWordsMainSlideToggle + (this.state.searchWordsMain || this.state.searchWordsMainActive ? " active-search-words-main" : "")
                            }, t.a.createElement("header", {
                                className: "main-header"
                            }, t.a.createElement("nav", {
                                className: "main-nav"
                            }, t.a.createElement("button", {
                                className: "bg-close d-block d-xl-none" + (this.state.navMobileActive && " bg-close-show"),
                                onClick: function() {
                                    return e.navMobileActive()
                                }
                            }, t.a.createElement("span", {
                                className: "icon-right-open"
                            })), t.a.createElement("button", {
                                onClick: function() {
                                    return e.navMobileActive()
                                },
                                className: "hamburger"
                            }, t.a.createElement("span", null), t.a.createElement("span", null), t.a.createElement("span", null)), t.a.createElement("div", {
                                ref: this.widthMenu,
                                className: "main-nav-inset " + this.state.mainNavInsetTransitionStop,
                                style: {
                                    transform: "translate3d(" + this.state.moveMenu + "px, 0, 0)"
                                }
                            }, t.a.createElement(v.a, {
                                handleWidth: !0,
                                handleHeight: !0,
                                onResize: this.onResize
                            }), t.a.createElement("div", {
                                className: "main-nav-inset-box"
                            }, t.a.createElement("ul", {
                                className: "list-unstyled main-nav-inset-list"
                            }, t.a.createElement("li", {
                                className: "d-flex buttons-language"
                            }, t.a.createElement("button", {
                                className: "border-content-bottom " + this.state.activePL,
                                onClick: function(n) {
                                    return e.setLang(n, "pl")
                                }
                            }, t.a.createElement("span", {
                                className: "icon-ok"
                            }), " PL"), t.a.createElement("button", {
                                className: "border-content-bottom " + this.state.activeEN,
                                onClick: function(n) {
                                    return e.setLang(n, "en")
                                }
                            }, t.a.createElement("span", {
                                className: "icon-ok"
                            }), " EN")), t.a.createElement("li", null, t.a.createElement("button", {
                                className: "border-content-bottom exchange-direction-language",
                                onClick: function(n) {
                                    return e.changeDirection(n)
                                }
                            }, t.a.createElement("span", {
                                className: "icon-exchange"
                            }), " ", a[0], " ", t.a.createElement("span", {
                                className: "icon-right"
                            }), " ", a[1])), t.a.createElement("li", null, t.a.createElement("button", {
                                className: "enable-auto-voice border-content-bottom",
                                onClick: this.enableAutoVoice
                            }, t.a.createElement("span", {
                                className: "icon-volume"
                            }), " ", j.buttonEnableAutoVoice)), t.a.createElement("li", null, t.a.createElement("button", {
                                className: "close-rotate border-content-bottom",
                                onClick: this.disableRotate
                            }, t.a.createElement("span", {
                                className: "icon-ok"
                            }), " ", j.buttonDisableRotate)), t.a.createElement("li", null, t.a.createElement("button", {
                                className: "rest-all border-content-bottom",
                                onClick: function() {
                                    e.removeCookieExerciseAll(), e.clearExercise()
                                }
                            }, t.a.createElement("span", {
                                className: "icon-trash-empty"
                            }), " ", j.buttonRestartProgress)), z && t.a.createElement("li", null, t.a.createElement("button", {
                                className: "close-application",
                                onClick: function() {
                                    return e.closeApplication()
                                }
                            }, t.a.createElement("span", {
                                className: "icon-cancel-circled"
                            }), " ", j.buttonCloseApplication)), t.a.createElement("li", null, t.a.createElement("button", {
                                className: "abouts-l border-content-bottom " + this.state.showAbouts,
                                onClick: function() {
                                    return e.showAbouts()
                                }
                            }, t.a.createElement("span", {
                                className: "icon-new-logo"
                            }), " Abouts ", n), t.a.createElement("div", {
                                className: "abouts-box"
                            }, t.a.createElement("p", null, C()(j.abouts), " ", n, " ", this.global.version)))), t.a.createElement("p", null, j.yourPlatform, ": ", z ? "Android/iOS" : "Browser"), t.a.createElement("span", {
                                className: "logo-menu icon-only-l"
                            })))), t.a.createElement("ul", {
                                className: "top-menu d-flex flex-row list-unstyled"
                            }, this.state.showListActice && "function" === typeof window.find && t.a.createElement("li", {
                                className: "link-search d-flex " + (!this.state.searchBrowser || "link-search-active")
                            }, t.a.createElement("div", {
                                className: "search-on-page d-flex"
                            }, t.a.createElement("button", {
                                onClick: function() {
                                    return window.find(e.state.searchWords)
                                }
                            }, "Search"), t.a.createElement("input", {
                                type: "search",
                                placeholder: j.searchOnThisPage + "...",
                                onChange: this.searchChange,
                                value: this.state.searchWords,
                                onKeyPress: function(n) {
                                    "Enter" === n.key && window.find(e.state.searchWords)
                                }
                            })), t.a.createElement("a", {
                                href: "#search",
                                onClick: function(n) {
                                    return e.searchBrowser(n)
                                }
                            }, t.a.createElement("span", {
                                className: "icon-search"
                            }))), t.a.createElement("li", {
                                className: "link-voice"
                            }, t.a.createElement("a", {
                                href: "#voice",
                                onClick: function(n) {
                                    return e.enableAutoVoice(n)
                                }
                            }, t.a.createElement("span", {
                                className: "icon-volume"
                            }))), t.a.createElement("li", {
                                className: "flag-pl"
                            }, t.a.createElement("a", {
                                href: "#pl",
                                className: this.state.activePL,
                                onClick: function(n) {
                                    return e.setLang(n, "pl")
                                }
                            }, "PL")), t.a.createElement("li", {
                                className: "flag-en"
                            }, t.a.createElement("a", {
                                href: "#en",
                                className: this.state.activeEN,
                                onClick: function(n) {
                                    return e.setLang(n, "en")
                                }
                            }, "EN"))), t.a.createElement("h1", {
                                className: "icon-new-logo"
                            }, t.a.createElement("span", {
                                className: "d-none"
                            }, "F"), "lashCrads"), t.a.createElement("div", {
                                className: "direction-lang-and-search"
                            }, t.a.createElement("div", {
                                className: "d-flex justify-content-center"
                            }, t.a.createElement("button", {
                                className: "direction-lang",
                                onClick: function(n) {
                                    return e.changeDirection(n)
                                }
                            }, a[0], " ", t.a.createElement("span", {
                                className: "icon-exchange"
                            }), " ", a[1]), t.a.createElement("input", {
                                type: "search",
                                value: this.state.searchWordsMain,
                                onChange: this.searchChangeMain,
                                placeholder: "\ue816 ...",
                                onFocus: function() {
                                    e.state.searchWordsMainSlideToggle && e.setState({
                                        searchWordsMainSlideToggle: ""
                                    }), e.setState({
                                        searchWordsMainActive: !0
                                    })
                                },
                                onBlur: function() {
                                    return e.setState({
                                        searchWordsMainActive: !1
                                    })
                                }
                            }), null !== this.state.resultsSearch && t.a.createElement("button", {
                                onClick: function(n) {
                                    return e.searchWordsMainSlideToggle(n)
                                },
                                className: "submit-slide-toggle icon-up-open"
                            })), t.a.createElement("div", {
                                className: "results-search"
                            }, null !== this.state.resultsSearch && t.a.createElement("div", {
                                className: "results-search-inside"
                            }, t.a.createElement("div", {
                                className: "no-result-search"
                            }, t.a.createElement("p", null, t.a.createElement("span", null, t.a.createElement("strong", null, this.state.searchWordsMain), "- ", j.found, ": ", this.state.resultsSearchCount, " | ", this.state.resultsSearch ? j.changeDirectionLanguage : j.noResultSearch, t.a.createElement("a", {
                                href: "#change-direction",
                                onClick: function(n) {
                                    return e.changeDirection(n)
                                }
                            }, a[1], " -> ", a[0]), j.or, " ", t.a.createElement("a", {
                                className: "icon-gt",
                                href: "#gt",
                                onClick: function(n) {
                                    return e.openHref(n, "https://translate.google.pl/#view=home&op=translate&sl=" + ("p->e" === e.global.flashCardDirection ? "pl&tl=en&text=" : "en&tl=pl&text=") + e.state.searchWordsMain)
                                }
                            }, "Google Translate")))), this.state.resultsSearch ? t.a.createElement("ul", {
                                className: "list-unstyled m-0"
                            }, this.state.resultsSearch) : ""))))), t.a.createElement("div", {
                                className: "main-list-exercise"
                            }, t.a.createElement("div", {
                                className: "category-box"
                            }, t.a.createElement("p", {
                                className: "title-style-text category-info " + this.state.infoFull,
                                onClick: function() {
                                    return e.infoFull()
                                }
                            }, this.state.infoFull ? j.infoDescription : j.infoDescription.substr(0, 41) + "...", " ", !this.state.infoFull || t.a.createElement("a", {
                                href: "mailto:aleksander.nyczyk@gmail.com",
                                onClick: function(n) {
                                    return e.openHref(n, "mailto:aleksander.nyczyk@gmail.com")
                                }
                            }, "e-mail"), t.a.createElement("span", {
                                className: "icon-down-open"
                            }))), t.a.createElement(S, {
                                that: this,
                                ref: function(n) {
                                    e.child = n
                                }
                            }), this.global.uniqueCategoryArray.map((function(e, n) {
                                var a = this;
                                return t.a.createElement("div", {
                                    className: "category-box",
                                    key: n
                                }, e && t.a.createElement("h2", {
                                    onClick: function() {
                                        return a.showCategory(n)
                                    },
                                    className: "category-" + n + " " + (this.global.categoryActive[n] ? "category-active" : "")
                                }, e, " ", t.a.createElement("span", {
                                    className: "icon-down-open"
                                })), t.a.createElement("ul", {
                                    className: "main-list-exercise-inset list-unstyled"
                                }, f.map((function(a, l) {
                                    var o = this,
                                        _ = Math.ceil(100 * a.youKnowID.length / a.data.length),
                                        i = {
                                            background: "linear-gradient(to right, #2c8548 0%,#2c8548 " + _ + "%,#974c49 " + _ + "%,#974c49 100%)"
                                        },
                                        p = {
                                            background: "linear-gradient(to right, rgba(44,133,72,.2) 0%,rgba(44,133,72,.2) " + _ + "%,rgba(255,255,255,0) " + _ + "%,rgba(255,255,255,0) 100%), rgba(255,255,255,.8)"
                                        };
                                    if (_ = isNaN(_) ? "blank" : _ + "%", this.state.langNameExercise(a.category) === e && a.data.length && !a.hide) return t.a.createElement("li", {
                                        key: l,
                                        className: "d-flex justify-content-between exercise-item-" + l
                                    }, t.a.createElement("a", {
                                        href: "#flashcard" + l,
                                        style: p,
                                        onClick: function(e) {
                                            o.setExercise(e, l, !1, !1, n, a.youKnowID.length !== a.data.length), o.adMob()
                                        }
                                    }, t.a.createElement("span", {
                                        className: "percent-pro",
                                        style: i
                                    }), t.a.createElement("span", {
                                        className: "icon-random-card icon-random-card-" + n
                                    }), a.youKnowID.length === a.data.length && t.a.createElement("span", {
                                        className: "icon-ok"
                                    }), this.state.langNameExercise(a.name), " ", t.a.createElement("i", null, t.a.createElement("span", {
                                        className: "icon-up color-5"
                                    }, a.youKnowID.length, "/", a.data.length, " = ", _), " - ", t.a.createElement("span", {
                                        className: "icon-down color-17"
                                    }, a.youDontKnowID.length, " (", a.dontKnowClick, ")"))), t.a.createElement("div", {
                                        className: "buttons-option d-flex flex-column"
                                    }, (0 !== a.youKnowID.length || 0 !== a.dontKnowClick || 0 !== a.youDontKnowID.length) && t.a.createElement("button", {
                                        className: "border-content-bottom button-reset ",
                                        title: "Reset"
                                    }, t.a.createElement("span", {
                                        className: "reset-confirm",
                                        onClick: function() {
                                            return o.removeCookieExerciseId(!1, l, a)
                                        }
                                    }, "Reset"), t.a.createElement("span", {
                                        className: "icon-trash-empty"
                                    })), t.a.createElement("button", {
                                        className: "border-content-bottom button-list",
                                        title: "Show list",
                                        onClick: function(e) {
                                            return o.setExercise(e, l, !1, !1, n, !1, "show-list")
                                        }
                                    }, t.a.createElement("span", {
                                        className: "icon-clipboard"
                                    }))))
                                }), this)))
                            }), this)), t.a.createElement("div", {
                                className: "main-flash-cards " + this.state.classCheckOut + " " + this.state.classCheckOutMore
                            }, t.a.createElement("button", {
                                className: "button-close-exercise icon-cancel",
                                onClick: this.clearExercise
                            }, !this.state.showListActice && t.a.createElement("span", {
                                className: this.state.closeCloude
                            }, j.buttonCloseExercise)), t.a.createElement("div", {
                                className: "flash-card"
                            }, this.state.callObj), t.a.createElement("nav", {
                                className: "nav-buttons " + this.state.classHideNavButtons + " " + this.state.translateForAMomentCheck
                            }, this.state.classCheckOutMore ? t.a.createElement("button", {
                                className: "button-check-out"
                            }, j.lottery, "...") : t.a.createElement("button", {
                                className: "button-check-out " + this.state.buttonWriteOK,
                                onClick: function() {
                                    return e.checkOut()
                                }
                            }, j.buttonCheckOut), t.a.createElement("button", {
                                title: j.buttonIKnow,
                                className: "button-i-know",
                                onClick: function() {
                                    return e.iKnow(e.state.idItem)
                                }
                            }, t.a.createElement("span", {
                                className: "icon-ok"
                            }), " " + (this.state.buttonWriteOK && !this.state.translateForAMomentCheck ? j.buttonCheckOutToNext : "")), t.a.createElement("button", {
                                title: j.buttonSimpleLotter,
                                className: "button-simple-lottery",
                                onClick: function() {
                                    return e.simpleLottery()
                                }
                            }, t.a.createElement("span", {
                                className: "icon-arrows-cw"
                            })), t.a.createElement("button", {
                                title: j.buttonIDontKnow,
                                className: "button-i-dont-know",
                                onClick: function() {
                                    return e.iDontKnow(e.state.idItem)
                                }
                            }, t.a.createElement("span", {
                                className: "icon-cancel"
                            })))), t.a.createElement("footer", {
                                className: "main-footer"
                            }, t.a.createElement("p", null, "Copyright \xa9 ", (n + " " + global.versionApp), " | ", t.a.createElement("a", {
                                href: "#",
                                onClick: function(n) {

                                    return e.openHref(n, "http://alexnx.vot.pl/fc/?lang=" + j.lang)

                                }
                            }, j.privacy), " | ", !u && t.a.createElement(P, {
                                onChange: function(n, a) {
                                    return e.checkOnline(a, n)
                                },
                                render: function(e) {
                                    var n = e.online;
                                    return t.a.createElement("span", {
                                        title: n ? "online" : "offline",
                                        className: "icon-globe " + (n ? "" : "icon-globe-disable")
                                    })
                                }
                            })))))
                        }
                    }]), a
                }(l.Component),
                W = function(e) {
                    Object(r.a)(a, e);
                    var n = Object(s.a)(a);

                    function a() {
                        return Object(i.a)(this, a), n.apply(this, arguments)
                    }
                    return Object(p.a)(a, [{
                        key: "render",
                        value: function() {
                            return t.a.createElement("div", {
                                className: "main-conteiner"
                            }, t.a.createElement(O, {
                                title: "Lang'FC | " + global.shortVersionLanguage
                            }))
                        }
                    }]), a
                }(l.Component);
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            _.a.render(t.a.createElement(W, null), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) {
                e.unregister()
            }))
        }
    },
    [
        [22, 1, 2]
    ]
]);





/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
],[[0,1]]]);