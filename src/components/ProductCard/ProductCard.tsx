import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';
import { ProductCardProps } from './ProductCard.props';

function ProductCard({ ...props }: ProductCardProps) {
  const { rating, price, description, title, image, id } = props;
  return (
    <Link to={`/product/${id}`} className={styles['link']}>
      <div className={styles['card']}>
        <div
          className={styles['header']}
          style={{ backgroundImage: `url('${image}')` }}
        >
          <div className={styles['price']}>
            {price}&nbsp;
            <span className="currency">$</span>
          </div>
          <button className={styles['add-to-cart']}>
            <img src="/add-to-cart-icon.svg" alt="add-to-cart-icon" />
          </button>
          <div className={styles['rating']}>
            {rating}&nbsp;
            <img src="/star.svg" alt="star" />
          </div>
        </div>

        <div className={styles['footer']}>
          <div className={styles['title']}>{title}</div>
          <div className={styles['description']}>{description}</div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
