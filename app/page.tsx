import Header from "@/components/Header";
import Description from "@/components/Description";
import Counter from "@/components/Counter";
import Link from "next/link";

const Home = ()=> {
   const hideDescription = true;
  return (
    
      <main className="bg-gray-900 text-amber-800 h-max w-screen">
        <div className="mb-5">
          <h1 className="text-3xl text-teal-200">Home Page</h1>
          <Header text="Header Component" />
          {/* Using the ternary operator in typescript */}
          {/* {hideDescription? <Description /> : null} */}
          {hideDescription && <Description />}
          <Counter />
        </div>
        
        <div className="mb-5">
          <Link href="/about" className="text-blue-500 text-xl">Go To About</Link>
        </div>

        <div>
          <Link href="/buttons" className="text-blue-500 text-xl mb-5">Go To Buttons</Link>
        </div>
      </main>
  );
}


export default Home;