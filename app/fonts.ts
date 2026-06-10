import localFont from "next/font/local";

export const unbounded = localFont({
  src: [
    { path: "../assets/fonts/Unbounded-ExtraLight.ttf", weight: "200" },
    { path: "../assets/fonts/Unbounded-Light.ttf", weight: "300" },
    { path: "../assets/fonts/Unbounded-Regular.ttf", weight: "400" },
    { path: "../assets/fonts/Unbounded-Medium.ttf", weight: "500" },
    { path: "../assets/fonts/Unbounded-SemiBold.ttf", weight: "600" },
    { path: "../assets/fonts/Unbounded-Bold.ttf", weight: "700" },
    { path: "../assets/fonts/Unbounded-ExtraBold.ttf", weight: "800" },
    { path: "../assets/fonts/Unbounded-Black.ttf", weight: "900" },
  ],
  variable: "--font-unbounded",
  display: "swap",
  preload: true,
});

export const jakarta = localFont({
  src: [
    { path: "../assets/fonts/PlusJakartaSans-ExtraLight.ttf", weight: "200" },
    { path: "../assets/fonts/PlusJakartaSans-Light.ttf", weight: "300" },
    { path: "../assets/fonts/PlusJakartaSans-Regular.ttf", weight: "400" },
    { path: "../assets/fonts/PlusJakartaSans-Medium.ttf", weight: "500" },
    { path: "../assets/fonts/PlusJakartaSans-SemiBold.ttf", weight: "600" },
    { path: "../assets/fonts/PlusJakartaSans-Bold.ttf", weight: "700" },
    { path: "../assets/fonts/PlusJakartaSans-ExtraBold.ttf", weight: "800" },
  ],
  variable: "--font-jakarta",
  display: "swap",
  preload: true,
});

export const jost = localFont({
  src: [
    { path: "../assets/fonts/Jost-ExtraLight.ttf", weight: "200" },
    { path: "../assets/fonts/Jost-Light.ttf", weight: "300" },
    { path: "../assets/fonts/Jost-Regular.ttf", weight: "400" },
    { path: "../assets/fonts/Jost-Medium.ttf", weight: "500" },
    { path: "../assets/fonts/Jost-SemiBold.ttf", weight: "600" },
    { path: "../assets/fonts/Jost-Bold.ttf", weight: "700" },
    { path: "../assets/fonts/Jost-ExtraBold.ttf", weight: "800" },
    { path: "../assets/fonts/Jost-Black.ttf", weight: "900" },
  ],
  variable: "--font-jost",
  display: "swap",
  preload: true,
});

export const satoshi = localFont({
  src: "../assets/fonts/Satoshi-Variable.ttf",
  weight: "300 900",
  variable: "--font-satoshi",
  display: "swap",
  preload: true,
});
