import "./globals.css";
import Header from "@/components/header";
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
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
