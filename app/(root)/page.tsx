import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Image src="/CakesBaner.png" alt="banner" width={1000} height={300} className=" w-screen" />
      {/* <Image src='/CakesBaner.png' alt='logo' width={40} height={40} /> */}
      <Collections />
      <ProductList />
    </>
  );
}
