import styles from '../../styles/ArbeidCard.module.css';
//import { useEffect } from 'react';


function ArbeidCard({ arbeider }) {
  useEffect(() => {
    const linkElement = document.createElement('link');
    linkElement.rel = 'preload';
    linkElement.href = arbeider.featured_media_src_url;
    linkElement.as = 'image';
    document.head.appendChild(linkElement);

    return () => {
      // Cleanup if necessary
      document.head.removeChild(linkElement);
    };
  }, [arbeider.featured_media_src_url]);

  return (
    <div className={styles.arbeidCard}>
      <img src={arbeider.featured_media_src_url} alt="arbeid" loading="lazy" />
      <h2>{arbeider.title && arbeider.title.rendered}</h2>
    </div>
  );
}

export default ArbeidCard;



  

//<img src={arbeid.featured_image} alt={arbeid.title.rendered} />
//<Link to={`/product/${product.id}`}>View product</Link>