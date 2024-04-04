import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main className="">
      <div className="hero min-h-96 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-3xl md:text-5xl font-bold">Mofield Brothers</h1>
            <p className="py-6 text-xl md:text-3xl">Family Owned & Operated Since 1961</p>
            <button className="btn btn-primary">Contact Us</button>
          </div>
        </div>
      </div>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
