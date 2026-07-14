// // Fonts
// import { Geist, Geist_Mono } from "next/font/google";

// // Global Components
// import Navbar from "./components/navbar/navbar";

// // CSS
// import "./globals.css";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Eisha's",
//   description: "Traditional Eastern Wear For Women For Every Occasion",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
//       <body>
//         <Navbar />
//         <main className="main">{children}</main>
//         </body>
//     </html>
//   );
// }

import Announcement from "./components/announcement bar/announcement";
import Navbar from "./components/navbar/navbar.jsx";
import Footer from "./components/footer/footer";

import "./globals.css"; // Your global defaults reset layout sheet

export const metadata = {
  title: "Eisha's | Elegant Women Eastern Wear",
  description: "Pakistan's Most Beautiful Brand.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Global Header Injection */}
        
        <Announcement />
        <Navbar />
        {/* Main Workspace Frame container with offset padding */}
        <main style={{ maxWidth: "1200px", margin: 0 auto;}}> 
          {children}
        </main>
        <Footer />
    
      </body>
    </html>
  );
}
