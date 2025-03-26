import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative mx-auto">
        <div className="flex justify-center">
          <Navbar />
        </div>
        {children}
        <div className="flex justify-center">
          <Footer/>
        </div>
      </body>
    </html>
  );
}
