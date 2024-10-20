import Navbar from "@/components/NextBLOG/Navbar/Navbar";
export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="md:w-3/4 lg:w-1/2 m-5 pt-10 md:pt-20 md:m-auto">
        {children}
      </div>
    </>
  );
}
