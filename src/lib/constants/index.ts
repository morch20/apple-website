// import {
//     blackImg,
//     blueImg,
//     highlightFirstVideo,
//     highlightFourthVideo,
//     highlightSecondVideo,
//     highlightThirdVideo,
//     whiteImg,
//     yellowImg,
// } from "../utils/imports";
// import blueImg from "../../../public/assets/images/blue.jpg";
// import blackImg from "../../../public/assets/images/black.jpg";
// import whiteImg from "../../../public/assets/images/white.jpg";
// import yellowImg from "../../../public/assets/images/yellow.jpg";

const blueImg = "/assets/images/blue.jpg";
const blackImg = "/assets/images/black.jpg";
const whiteImg = "/assets/images/white.jpg";
const yellowImg = "/assets/images/yellow.jpg";

export const navLists = ["Store", "Mac", "iPhone", "Support"];

export const hightlightsSlides = [
    {
        id: 1,
        textLists: [
            "Enter A17 Pro.",
            "Game‑changing chip.",
            "Groundbreaking performance.",
        ],
        video: "/assets/videos/highlight-first.mp4",
        videoDuration: 4,
    },
    {
        id: 2,
        textLists: ["Titanium.", "So strong. So light. So Pro."],
        video: "/assets/videos/hightlight-sec.mp4",
        videoDuration: 2,
    },
    {
        id: 3,
        textLists: [
            "iPhone 15 Pro Max has the",
            "longest optical zoom in",
            "iPhone ever. Far out.",
        ],
        video: "/assets/videos/hightlight-third.mp4",
        videoDuration: 5,
    },
    {
        id: 4,
        textLists: ["All-new Action button.", "What will yours do?."],
        video: "/assets/videos/hightlight-fourth.mp4",
        videoDuration: 3,
    },
];

export const models = [
    {
        id: 1,
        title: "iPhone 15 Pro in Natural Titanium",
        color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
        img: yellowImg,
    },
    {
        id: 2,
        title: "iPhone 15 Pro in Blue Titanium",
        color: ["#53596E", "#6395ff", "#21242e"],
        img: blueImg,
    },
    {
        id: 3,
        title: "iPhone 15 Pro in White Titanium",
        color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
        img: whiteImg,
    },
    {
        id: 4,
        title: "iPhone 15 Pro in Black Titanium",
        color: ["#454749", "#3b3b3b", "#181819"],
        img: blackImg,
    },
];

export const sizes = [
    { label: '6.1"', value: "small" },
    { label: '6.7"', value: "large" },
];

export const footerLinks = [
    "Privacy Policy",
    "Terms of Use",
    "Sales Policy",
    "Legal",
    "Site Map",
];
