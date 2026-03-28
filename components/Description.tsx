import List from "./List";

const Description = ()=> {
  return(
    // React Fragments are working as a container or a holder for multiple elements
    <>
      <h2 className="text-2xl text-gray-300">Description Component</h2>
      <List description="List Component"/>
    </>
  )
}

export default Description;