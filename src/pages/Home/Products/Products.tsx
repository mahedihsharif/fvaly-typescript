import { Container, Row } from 'react-bootstrap';
import ProductsSkeleton from 'skeletons/ProductsSkeleton';
import { IProduct } from 'types';
import Product from '../Product/Product';

// This is one system...
interface IProps {
  products: IProduct[];
  isLoading:boolean;
}

const Products = ({ products, isLoading }: IProps) => {
  return (
    <div>
      <Container className="mt-5">
        <h2 className="mb-3">Latest Products</h2>
        {isLoading && <ProductsSkeleton />}
        { !isLoading && <Row>
            {
                products?.map((pd) =><Product key={pd._id} pd={pd}/>)
            }
        </Row>
        }
        
      </Container>
    </div>
  );
};

export default Products;
