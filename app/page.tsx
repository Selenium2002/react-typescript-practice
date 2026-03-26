
const Header = ()=> {
  return(
    <h2 className="text-2xl text-gray-600">Header Component</h2>
  )
}

const List = ()=> {
  return(
    <h2 className="text-2xl text-gray-600">List Component</h2>
  )
}

const Description = ()=> {
  return(
    // React Fragments are working as a container or a holder for multiple elements
    <>
      <h2 className="text-2xl text-gray-600">Description Component</h2>
      <List />
  
    </>
  )
}

const Home = ()=> {
  return (
    
      <main className="bg-indigo-200 text-amber-800 h-screen">
        <h1 className="text-3xl">Home Component</h1>
        <Header />
        <Description />

      </main>
  );
}


export default Home;