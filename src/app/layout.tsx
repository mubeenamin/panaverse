import "./globals.css";
import NavBar from "./component/nav";
import Footer from "./component/footer";

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
      <body className="bg-gradient-to-b from-black to-red-600">
        <NavBar />
        {children}  
        <Footer />
      </body>
    </html>
  );
}
