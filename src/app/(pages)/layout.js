import Navbar from "../components/Navbar";

export default function pagesLayout({ children }) {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  );
}
