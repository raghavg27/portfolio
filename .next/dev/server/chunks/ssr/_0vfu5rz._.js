module.exports = [
"[project]/components/Motion.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Motion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function Motion() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const bar = document.getElementById("progress");
        const onScroll = ()=>{
            if (!bar) return;
            const h = document.documentElement;
            const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
            bar.style.width = p * 100 + "%";
        };
        document.addEventListener("scroll", onScroll, {
            passive: true
        });
        onScroll();
        const io = new IntersectionObserver((entries)=>{
            entries.forEach((e)=>{
                if (e.isIntersecting) {
                    e.target.classList.add("in");
                    io.unobserve(e.target);
                }
            });
        }, {
            threshold: 0.14,
            rootMargin: "0px 0px -8% 0px"
        });
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const revealables = document.querySelectorAll(".reveal, .stagger, .ruled");
        if (reduced) {
            revealables.forEach((el)=>el.classList.add("in"));
        } else {
            revealables.forEach((el)=>io.observe(el));
        }
        const onNavClick = (ev)=>{
            const a = ev.currentTarget;
            const id = a.getAttribute("href");
            if (id && id.startsWith("#")) {
                const t = document.querySelector(id);
                if (t) {
                    ev.preventDefault();
                    const y = t.getBoundingClientRect().top + window.scrollY - 24;
                    window.scrollTo({
                        top: y,
                        behavior: reduced ? "auto" : "smooth"
                    });
                }
            }
        };
        const navLinks = document.querySelectorAll('nav.main a, .nowline a[href^="#"]');
        navLinks.forEach((a)=>a.addEventListener("click", onNavClick));
        return ()=>{
            document.removeEventListener("scroll", onScroll);
            io.disconnect();
            navLinks.forEach((a)=>a.removeEventListener("click", onNavClick));
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "progress"
    }, void 0, false, {
        fileName: "[project]/components/Motion.jsx",
        lineNumber: 65,
        columnNumber: 10
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=_0vfu5rz._.js.map