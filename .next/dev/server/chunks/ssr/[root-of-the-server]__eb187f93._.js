module.exports = [
"[project]/src/components/Layout/Layout.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>Layout
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$Header$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Layout/Header.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$Footer$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Layout/Footer.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import, [project]/node_modules/framer-motion)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$Header$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$Header$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const pageVariants = {
    initial: {
        opacity: 0,
        y: 20
    },
    animate: {
        opacity: 1,
        y: 0
    },
    exit: {
        opacity: 0,
        y: -20
    }
};
function Layout({ children }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["AnimatePresence"], {
            mode: "wait",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].main, {
                initial: "initial",
                animate: "animate",
                exit: "exit",
                variants: pageVariants,
                transition: {
                    duration: 0.6,
                    ease: [
                        0.33,
                        1,
                        0.68,
                        1
                    ]
                },
                className: "flex-grow",
                children: children
            }, router.asPath, false, {
                fileName: "[project]/src/components/Layout/Layout.jsx",
                lineNumber: 18,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Layout/Layout.jsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/data/images.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "imageData",
    ()=>imageData
]);
const imageData = {
    profile: {
        src: '/images/profile/maya-profile.webp',
        alt: '문혜정 Maya',
        width: 800,
        height: 800
    },
    hero: {
        bg: '/images/flowers/hero-bg.webp',
        alt: 'Maya Flor Hero Background'
    },
    books: [
        {
            id: 'tarot-cafe',
            title: '타로카드 읽는 카페',
            cover: '/images/books/tarot-cafe.webp',
            thumbnail: '/images/books/tarot-cafe.webp',
            alt: '타로카드 읽는 카페 표지'
        },
        {
            id: 'eco-flower-recipe',
            title: '에코 플라워 레시피',
            cover: '/images/books/eco-flower-book.webp',
            thumbnail: '/images/books/eco-flower-book.webp',
            alt: '에코 플라워 레시피 표지'
        }
    ],
    flowers: {
        gallery: [
            {
                id: 'gallery-1',
                src: '/images/flowers/gallery/flower-1.webp',
                category: 'arrangement',
                alt: 'Elegant floral arrangement'
            }
        ],
        monthly: [
            {
                id: 'flora-jan-2026',
                src: '/images/flowers/flora-jan-2026.webp',
                alt: '2026 January Monthly Flora'
            }
        ]
    },
    media: {
        featured: {
            src: '/images/media/featured-article.webp',
            alt: 'Featured Media Interview'
        }
    }
};
}),
"[project]/src/data/flowers.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "flowerWorks",
    ()=>flowerWorks,
    "monthlyFloraArchive",
    ()=>monthlyFloraArchive,
    "onlineClasses",
    ()=>onlineClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/images.js [ssr] (ecmascript)");
;
const flowerWorks = [
    {
        id: 1,
        title: "Spring Bouquet",
        category: "Bouquet",
        image: "/images/flowers/spring-bouquet.webp",
        description: "튤립과 라넌큘러스의 봄 부케"
    },
    {
        id: 2,
        title: "Autumn Table",
        category: "Table Setting",
        image: "/images/flowers/autumn-table.webp",
        description: "가을 정취를 담은 테이블 세팅"
    },
    {
        id: 3,
        title: "Winter Wreath",
        category: "Wreath",
        image: "/images/flowers/winter-wreath.webp",
        description: "포근한 겨울 리스"
    },
    {
        id: 4,
        title: "Summer Box",
        category: "Arrangement",
        image: "/images/flowers/summer-box.webp",
        description: "청량한 여름 플라워 박스"
    },
    {
        id: 5,
        title: "Garden Party",
        category: "Table Setting",
        image: "/images/flowers/garden-party.webp",
        description: "야외 정원 파티 스타일링"
    },
    {
        id: 6,
        title: "Pastel Dream",
        category: "Bouquet",
        image: "/images/flowers/pastel-dream.webp",
        description: "파스텔톤의 로맨틱 부케"
    },
    // ... extra mock data for masonry
    {
        id: 7,
        title: "Wild Flower",
        category: "Arrangement",
        image: "/images/flowers/wild-flower.webp",
        description: "들꽃의 자연스러운 멋"
    },
    {
        id: 8,
        title: "Eucalyptus Wreath",
        category: "Wreath",
        image: "/images/flowers/eucalyptus.webp",
        description: "유칼립투스 향 가득한 리스"
    }
];
const monthlyFloraArchive = [
    {
        id: 1,
        year: 2026,
        month: 1,
        title: "새해를 맞이하는 에코 리스",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["imageData"].flowers.monthly[0].src,
        summary: "재활용 소재로 만드는 새해 리스 레시피",
        link: "https://floragreen.shop.blogpay.co.kr/"
    },
    {
        id: 2,
        year: 2025,
        month: 12,
        title: "크리스마스 테이블 센터피스",
        image: "/images/flowers/flora-dec-2025.webp",
        summary: "침엽수와 빨간 열매로 만드는 테이블 장식",
        link: "https://floragreen.shop.blogpay.co.kr/"
    }
];
const onlineClasses = [
    {
        id: 1,
        level: "Basic",
        title: "Eco Flower Basic Class",
        description: "기본기를 다지는 기초 클래스",
        lectures: 26,
        duration: "4시간",
        materials: [
            "비법노트",
            "도구 키트 별도 구매 가능"
        ],
        platforms: [
            {
                name: "BEAR-U",
                url: "https://bear-u.com/course/?courseId=38"
            },
            {
                name: "LiveKlass",
                url: "https://liveklass.com/ch/mayaflor"
            }
        ],
        thumbnail: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["imageData"].flowers.gallery[0].src
    },
    {
        id: 2,
        level: "Advanced",
        title: "Eco Flower Advanced Class",
        description: "심화 과정: 부케 & 어레인지먼트",
        parts: [
            {
                name: "Part 1: Bouquet",
                lectures: 13
            },
            {
                name: "Part 2: Arrangement",
                lectures: 25
            }
        ],
        materials: [
            "PDF 섹션 8개"
        ],
        platforms: [
            {
                name: "LiveKlass",
                url: "https://liveklass.com/ch/mayaflor"
            }
        ],
        thumbnail: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$images$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["imageData"].flowers.gallery[0].src
    }
];
}),
"[project]/src/components/Flowers/FlowerGallery.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>FlowerGallery
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$masonry$2d$css__$5b$external$5d$__$28$react$2d$masonry$2d$css$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$react$2d$masonry$2d$css$29$__ = __turbopack_context__.i("[externals]/react-masonry-css [external] (react-masonry-css, cjs, [project]/node_modules/react-masonry-css)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import, [project]/node_modules/framer-motion)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$image$2d$lightbox__$5b$external$5d$__$28$react$2d$image$2d$lightbox$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$react$2d$image$2d$lightbox$29$__ = __turbopack_context__.i("[externals]/react-image-lightbox [external] (react-image-lightbox, cjs, [project]/node_modules/react-image-lightbox)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$flowers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/flowers.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
const categories = [
    'All',
    'Bouquet',
    'Arrangement',
    'Wreath',
    'Table Setting'
];
function FlowerGallery() {
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('All');
    const [photoIndex, setPhotoIndex] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const filteredWorks = filter === 'All' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$flowers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["flowerWorks"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$flowers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["flowerWorks"].filter((work)=>work.category === filter);
    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "section-container !pt-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-center gap-4 mb-12",
                children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>setFilter(cat),
                        "data-cursor": "pointer",
                        className: `px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === cat ? 'bg-accent-sage text-white shadow-md' : 'bg-background-linen text-text-warm/60 hover:bg-background-beige'}`,
                        children: cat
                    }, cat, false, {
                        fileName: "[project]/src/components/Flowers/FlowerGallery.jsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Flowers/FlowerGallery.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$masonry$2d$css__$5b$external$5d$__$28$react$2d$masonry$2d$css$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$react$2d$masonry$2d$css$29$__["default"], {
                breakpointCols: breakpointColumnsObj,
                className: "flex -ml-8 w-auto",
                columnClassName: "pl-8 bg-clip-padding",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["AnimatePresence"], {
                    mode: "popLayout",
                    children: filteredWorks.map((work, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                            layout: true,
                            initial: {
                                opacity: 0,
                                scale: 0.9
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                scale: 0.9
                            },
                            transition: {
                                duration: 0.5
                            },
                            "data-cursor": "pointer",
                            className: "mb-8 relative group cursor-pointer overflow-hidden rounded-organic shadow-soft",
                            onClick: ()=>{
                                setPhotoIndex(idx);
                                setIsOpen(true);
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "relative aspect-[4/5] md:aspect-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: work.image,
                                        alt: work.title,
                                        width: 600,
                                        height: 800,
                                        className: "object-cover w-full h-auto transition-transform duration-700 group-hover:scale-110"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Flowers/FlowerGallery.jsx",
                                        lineNumber: 69,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                                className: "text-white text-lg font-serif mb-1",
                                                children: work.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Flowers/FlowerGallery.jsx",
                                                lineNumber: 77,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "text-white/80 text-xs tracking-widest uppercase",
                                                children: work.category
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Flowers/FlowerGallery.jsx",
                                                lineNumber: 78,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Flowers/FlowerGallery.jsx",
                                        lineNumber: 76,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Flowers/FlowerGallery.jsx",
                                lineNumber: 68,
                                columnNumber: 15
                            }, this)
                        }, work.id, false, {
                            fileName: "[project]/src/components/Flowers/FlowerGallery.jsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/Flowers/FlowerGallery.jsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Flowers/FlowerGallery.jsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$image$2d$lightbox__$5b$external$5d$__$28$react$2d$image$2d$lightbox$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$react$2d$image$2d$lightbox$29$__["default"], {
                mainSrc: filteredWorks[photoIndex].image,
                nextSrc: filteredWorks[(photoIndex + 1) % filteredWorks.length].image,
                prevSrc: filteredWorks[(photoIndex + filteredWorks.length - 1) % filteredWorks.length].image,
                onCloseRequest: ()=>setIsOpen(false),
                onMovePrevRequest: ()=>setPhotoIndex((photoIndex + filteredWorks.length - 1) % filteredWorks.length),
                onMoveNextRequest: ()=>setPhotoIndex((photoIndex + 1) % filteredWorks.length),
                imageTitle: filteredWorks[photoIndex].title,
                imageCaption: filteredWorks[photoIndex].description
            }, void 0, false, {
                fileName: "[project]/src/components/Flowers/FlowerGallery.jsx",
                lineNumber: 88,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Flowers/FlowerGallery.jsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/Flowers/MonthlyFlora.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>MonthlyFlora
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import, [project]/node_modules/framer-motion)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$flowers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/flowers.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
function MonthlyFlora() {
    const [isSortedDesc, setIsSortedDesc] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const sortedArchive = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$flowers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["monthlyFloraArchive"]
    ].sort((a, b)=>{
        const valA = a.year * 100 + a.month;
        const valB = b.year * 100 + b.month;
        return isSortedDesc ? valB - valA : valA - valB;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "section-container !pt-0 max-w-4xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex justify-end mb-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                    onClick: ()=>setIsSortedDesc(!isSortedDesc),
                    className: "text-xs uppercase tracking-widest font-bold text-accent-sage flex items-center gap-2 hover:text-accent-terracotta transition-colors",
                    children: [
                        isSortedDesc ? "Newest First" : "Oldest First",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: "text-lg",
                            children: "⇅"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Flowers/MonthlyFlora.jsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Flowers/MonthlyFlora.jsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Flowers/MonthlyFlora.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "relative border-l border-background-beige ml-4 md:ml-24 pl-8 md:pl-16 space-y-16 py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["AnimatePresence"], {
                    mode: "popLayout",
                    children: sortedArchive.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: 20
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.6,
                                delay: idx * 0.1
                            },
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "absolute -left-[45px] md:-left-[108px] top-0 flex items-center justify-center w-[34px] h-[34px] md:w-[60px] md:h-[60px] rounded-full bg-accent-sage text-white text-[10px] md:text-sm font-bold shadow-soft",
                                    children: [
                                        item.month,
                                        "월"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Flowers/MonthlyFlora.jsx",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "absolute -left-[48px] md:-left-[111px] top-[40px] md:top-[70px] text-[10px] md:text-xs text-text-warm/40 font-bold uppercase rotate-90 origin-left",
                                    children: item.year
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Flowers/MonthlyFlora.jsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-organic shadow-soft overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-shadow duration-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "relative w-full md:w-48 aspect-square shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: item.image,
                                                alt: item.title,
                                                fill: true,
                                                className: "object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Flowers/MonthlyFlora.jsx",
                                                lineNumber: 51,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Flowers/MonthlyFlora.jsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "p-6 md:p-8 flex flex-col justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] uppercase tracking-widest text-accent-sage font-bold mb-2",
                                                    children: [
                                                        item.year,
                                                        "년 ",
                                                        item.month,
                                                        "월호"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Flowers/MonthlyFlora.jsx",
                                                    lineNumber: 59,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl md:text-2xl font-serif text-text-warm mb-3",
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Flowers/MonthlyFlora.jsx",
                                                    lineNumber: 62,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-text-warm/70 leading-relaxed mb-6",
                                                    children: item.summary
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Flowers/MonthlyFlora.jsx",
                                                    lineNumber: 63,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                    href: item.link,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "text-xs uppercase tracking-widest font-bold text-accent-rose hover:underline",
                                                    children: "Read More →"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Flowers/MonthlyFlora.jsx",
                                                    lineNumber: 66,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Flowers/MonthlyFlora.jsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Flowers/MonthlyFlora.jsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/src/components/Flowers/MonthlyFlora.jsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/Flowers/MonthlyFlora.jsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Flowers/MonthlyFlora.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Flowers/MonthlyFlora.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/Flowers/OnlineClasses.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>OnlineClasses
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import, [project]/node_modules/framer-motion)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$flowers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/flowers.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
function OnlineClasses() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "section-container !pt-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$flowers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["onlineClasses"].map((cls, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.8,
                        delay: idx * 0.2
                    },
                    className: "bg-white rounded-organic shadow-soft overflow-hidden hover:shadow-xl transition-all duration-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "relative aspect-[16/9] w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: cls.thumbnail,
                                    alt: cls.title,
                                    fill: true,
                                    className: "object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Flowers/OnlineClasses.jsx",
                                    lineNumber: 20,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "absolute top-6 left-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "px-4 py-1 bg-accent-rose text-white text-[10px] uppercase tracking-widest font-bold rounded-full shadow-md",
                                        children: [
                                            cls.level,
                                            " Class"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Flowers/OnlineClasses.jsx",
                                        lineNumber: 27,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Flowers/OnlineClasses.jsx",
                                    lineNumber: 26,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Flowers/OnlineClasses.jsx",
                            lineNumber: 19,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "p-8 md:p-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl md:text-3xl font-display text-text-warm mb-4",
                                    children: cls.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Flowers/OnlineClasses.jsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-text-warm/70 mb-8 leading-relaxed italic border-l-2 border-background-beige pl-4",
                                    children: [
                                        '"',
                                        cls.description,
                                        '"'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Flowers/OnlineClasses.jsx",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-4 mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "text-center p-4 bg-background-linen rounded-xl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] uppercase font-bold text-accent-sage block mb-1",
                                                    children: "Lectures"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Flowers/OnlineClasses.jsx",
                                                    lineNumber: 43,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "text-lg font-serif",
                                                    children: cls.lectures || cls.parts?.[0].lectures + cls.parts?.[1].lectures
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Flowers/OnlineClasses.jsx",
                                                    lineNumber: 44,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Flowers/OnlineClasses.jsx",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "text-center p-4 bg-background-linen rounded-xl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] uppercase font-bold text-accent-sage block mb-1",
                                                    children: "Duration"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Flowers/OnlineClasses.jsx",
                                                    lineNumber: 47,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "text-lg font-serif",
                                                    children: cls.duration || "Self-paced"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Flowers/OnlineClasses.jsx",
                                                    lineNumber: 48,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Flowers/OnlineClasses.jsx",
                                            lineNumber: 46,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "text-center p-4 bg-background-linen rounded-xl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] uppercase font-bold text-accent-sage block mb-1",
                                                    children: "Resource"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Flowers/OnlineClasses.jsx",
                                                    lineNumber: 51,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "text-lg font-serif text-[10px] truncate",
                                                    children: cls.materials[0]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Flowers/OnlineClasses.jsx",
                                                    lineNumber: 52,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Flowers/OnlineClasses.jsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Flowers/OnlineClasses.jsx",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] uppercase tracking-widest font-bold text-text-warm/40 block mb-2",
                                            children: "Available on:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Flowers/OnlineClasses.jsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-4",
                                            children: cls.platforms.map((platform)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                    href: platform.url,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "flex-1 min-w-[140px] px-6 py-3 border border-accent-sage text-accent-sage rounded-full text-center text-sm font-bold hover:bg-accent-sage hover:text-white transition-all shadow-sm",
                                                    children: [
                                                        "Enroll on ",
                                                        platform.name
                                                    ]
                                                }, platform.name, true, {
                                                    fileName: "[project]/src/components/Flowers/OnlineClasses.jsx",
                                                    lineNumber: 61,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Flowers/OnlineClasses.jsx",
                                            lineNumber: 59,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Flowers/OnlineClasses.jsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Flowers/OnlineClasses.jsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this)
                    ]
                }, cls.id, true, {
                    fileName: "[project]/src/components/Flowers/OnlineClasses.jsx",
                    lineNumber: 10,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/Flowers/OnlineClasses.jsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Flowers/OnlineClasses.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/pages/flowers/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>Flowers,
    "getStaticProps",
    ()=>getStaticProps
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$i18next$2f$serverSideTranslations$2e$js__$5b$external$5d$__$28$next$2d$i18next$2f$serverSideTranslations$2e$js$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$next$2d$i18next$29$__ = __turbopack_context__.i("[externals]/next-i18next/serverSideTranslations.js [external] (next-i18next/serverSideTranslations.js, cjs, [project]/node_modules/next-i18next)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$i18next__$5b$external$5d$__$28$next$2d$i18next$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$next$2d$i18next$29$__ = __turbopack_context__.i("[externals]/next-i18next [external] (next-i18next, cjs, [project]/node_modules/next-i18next)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$Layout$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Layout/Layout.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import, [project]/node_modules/framer-motion)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Flowers$2f$FlowerGallery$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Flowers/FlowerGallery.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Flowers$2f$MonthlyFlora$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Flowers/MonthlyFlora.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Flowers$2f$OnlineClasses$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Flowers/OnlineClasses.jsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$Layout$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Flowers$2f$FlowerGallery$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Flowers$2f$MonthlyFlora$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Flowers$2f$OnlineClasses$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$Layout$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Flowers$2f$FlowerGallery$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Flowers$2f$MonthlyFlora$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Flowers$2f$OnlineClasses$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
const TABS = [
    {
        id: 'gallery',
        label: 'Gallery'
    },
    {
        id: 'monthly',
        label: 'Monthly Flora'
    },
    {
        id: 'classes',
        label: 'Online Classes'
    }
];
function Flowers() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$i18next__$5b$external$5d$__$28$next$2d$i18next$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$next$2d$i18next$29$__["useTranslation"])('common');
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('gallery');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$Layout$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: `Flowers | Maya Flor`
                    }, void 0, false, {
                        fileName: "[project]/src/pages/flowers/index.js",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Eco-friendly flower styling and monthly recipes by Maya"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/flowers/index.js",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/flowers/index.js",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "pt-[120px] min-h-screen",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "text-center mb-16 px-mobile",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "text-xs uppercase tracking-[0.4em] text-accent-sage font-bold mb-4 block",
                                children: "Nature & Harmony"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/flowers/index.js",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                className: "text-5xl md:text-6xl text-text-warm",
                                children: "Flowers"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/flowers/index.js",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "mt-12 flex justify-center border-b border-background-beige max-w-2xl mx-auto",
                                children: TABS.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveTab(tab.id),
                                        className: `relative px-6 md:px-10 py-4 text-xs md:text-sm font-bold tracking-widest uppercase transition-colors ${activeTab === tab.id ? 'text-accent-sage' : 'text-text-warm/40 hover:text-text-warm/60'}`,
                                        children: [
                                            tab.label,
                                            activeTab === tab.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                                                layoutId: "activeTab",
                                                className: "absolute bottom-0 left-0 right-0 h-0.5 bg-accent-sage",
                                                transition: {
                                                    type: "spring",
                                                    stiffness: 380,
                                                    damping: 30
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/flowers/index.js",
                                                lineNumber: 48,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, tab.id, true, {
                                        fileName: "[project]/src/pages/flowers/index.js",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/pages/flowers/index.js",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/flowers/index.js",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["AnimatePresence"], {
                        mode: "wait",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: -10
                            },
                            transition: {
                                duration: 0.4,
                                ease: "easeInOut"
                            },
                            children: [
                                activeTab === 'gallery' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Flowers$2f$FlowerGallery$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/pages/flowers/index.js",
                                    lineNumber: 68,
                                    columnNumber: 41
                                }, this),
                                activeTab === 'monthly' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Flowers$2f$MonthlyFlora$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/pages/flowers/index.js",
                                    lineNumber: 69,
                                    columnNumber: 41
                                }, this),
                                activeTab === 'classes' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Flowers$2f$OnlineClasses$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/pages/flowers/index.js",
                                    lineNumber: 70,
                                    columnNumber: 41
                                }, this)
                            ]
                        }, activeTab, true, {
                            fileName: "[project]/src/pages/flowers/index.js",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/pages/flowers/index.js",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/flowers/index.js",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/flowers/index.js",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
async function getStaticProps({ locale }) {
    return {
        props: {
            ...await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$i18next$2f$serverSideTranslations$2e$js__$5b$external$5d$__$28$next$2d$i18next$2f$serverSideTranslations$2e$js$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$next$2d$i18next$29$__["serverSideTranslations"])(locale, [
                'common'
            ])
        }
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__eb187f93._.js.map