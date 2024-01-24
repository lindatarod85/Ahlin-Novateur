import styles from '../../styles/ArbeidCard.module.css';

function ArbeidCard({ arbeider }) {

    return (
      <div className={styles.arbeidCard}>
        <img src={arbeider.featured_media_src_url}  />
        <h2>{arbeider.title && arbeider.title.rendered}</h2>
      </div>
    );
  }
  
  export default ArbeidCard;
  

//<img src={arbeid.featured_image} alt={arbeid.title.rendered} />
//<Link to={`/product/${product.id}`}>View product</Link>