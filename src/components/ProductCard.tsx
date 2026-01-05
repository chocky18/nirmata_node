type Props = {
    name: string;
    brand: string;
    price: string;
    image: string;
};

export default function ProductCard({ name, brand, price, image }: Props) {
    return (
        <div className="product-card">
            <img src={image} className="product-image" alt={name} />
            <div>
                <div className="product-name">{name}</div>
                <div className="product-brand">{brand}</div>
                <div className="product-price">{price}</div>
                <div className="product-link">View product →</div>
            </div>
        </div>
    );
}
