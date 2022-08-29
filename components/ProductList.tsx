import Product, {IProduct} from "./Product";

interface IProductListProps {
    products: IProduct[]
}

const ProductList = (props: IProductListProps) => {
    return (
        <div className="product-list">
            {props.products.map((product, index) => <Product product={product} key={index}/>)}
        </div>
    )
}

export default ProductList
//https://github.com/snipcart/snipcart-nextjs-spa/blob/main/components/Product.tsx