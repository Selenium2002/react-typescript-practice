type ListParams = {
  description?:string;
}

const List = (props:ListParams)=> {
  return(
    <h2 className="text-2xl text-gray-600">{props.description}</h2>
  )
}

export default List;