import useApi from '../../hooks/useApi';
import ArbeidCard from './ArbeidCard';
import styles from '../../styles/ArbeiderListings.module.css';

function Arbeider() {
    const { data, isLoading, isError } = useApi(
      'https://ahlinnovateur.no/wp-json/wp/v2/arbeider?_embed'
    );

  
    if (isLoading) {
      return <div>Loading</div>;
    }
  
    if (isError) {
      return <div>Error</div>;
    }
  
    return (
      <div className={styles.arbeiderContainer}>
        <h1>Arbeider</h1>
        {data.length === 0 ? (
          <div>Beklager, kunne ikke finne arbeid</div>
        ) : (
          data.map((arbeid) => (
            <ArbeidCard key={arbeid.id} arbeider={arbeid} />
          ))
        )}
      </div>
    );
  }
  
  export default Arbeider;


 