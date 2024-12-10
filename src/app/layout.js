import Headerlayout from "@/components/headerlayout";
import "./globals.css";
import Provider from "./provider";

export const metadata = {
  title: "Nature Tomorrow",
  description: "Your next adventure",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Headerlayout />
          {children}
        </Provider>
      </body>
    </html>
  );
}
