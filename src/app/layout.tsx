
import "./globals.css";
import Navbar from "./components/navbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="grid grid-cols-7">
        <div className="col-span-5 col-start-2">   
          <Navbar />       
          {children}
        </div>
      </body>
    </html>
  );
}
