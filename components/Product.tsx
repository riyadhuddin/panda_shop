//components//product.tsx
import Image, { StaticImageData } from "next/image";
export interface IProduct {
    id: string;
    name: string;
    price: number;
    image: StaticImageData;
    url: string;
    description: string;
}
interface IProductProps {
    product: IProduct
}
const Product = (props: IProductProps) => {
    return (
        <div className="product">
            <Image src={props.product.image} alt={props.product.name} />
            <h2>{props.product.name}</h2>
            <p>{props.product.description}</p>
            <p>${props.product.price}</p>
        </div>
    );
}
export default Product;