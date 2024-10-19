import Navbar from "@/components/Navbar/Navbar";
export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="w-3/4 m-auto mt-20">{children}</div>
    </>
  );
}
