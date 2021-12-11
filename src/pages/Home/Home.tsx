import useAsync from 'hooks/useAsync';
import ProductService from 'services/ProductService';
import Banner from './Banner/Banner';
import Products from './Products/Products';
 
const Home = () => {
    
    const { data, isLoading } = useAsync(ProductService.getProducts);
    return (
        <>
           <Banner/>
           <Products products={data} isLoading={isLoading}/>
        </>
    );
};

export default Home;