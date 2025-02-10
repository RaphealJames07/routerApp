import { useParams } from "react-router"


const Collection = () => {
  const {product_name} = useParams()
  // console.log(product_name)
  return (
    <div>{product_name}</div>
  )
}

export default Collection