import Header from "@/components/Header";
import Description from "@/components/Description";

const Home = ()=> {
   const hideDescription = true;
  return (
    
      <main className="bg-indigo-200 text-amber-800 h-screen">
        <h1 className="text-3xl">Home Component</h1>
        <Header text="Header Component" />
        {/* Using the ternary operator in typescript */}
        {/* {hideDescription? <Description /> : null} */}
        {hideDescription && <Description />}
      </main>
  );
}


export default Home;