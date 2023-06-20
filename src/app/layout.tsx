import "./globals.css";
import NavBar from "./component/nav";
import Footer from "./component/footer";
import {Roboto} from "@next/font/google"
const mate = Roboto({
  subsets:['latin'],
  weight:['400']
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${mate.className} bg-gradient-to-b from-black via-slate-600 to-red-600`}>
        <NavBar />
        {children}  
        <Footer />
      </body>
    </html>
  );
}
