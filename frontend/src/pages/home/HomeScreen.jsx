import { Row, Col } from "react-bootstrap";

import Product from "../../components/product/Product.jsx";
import { Loader } from "../../components/loader/Loader.jsx";
import Message from "../../components/message/Message.jsx";

import { useGetProductsQuery } from "../../slices/productsApiSlice.js";

const HomeScreen = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant='danger'>{isError?.data?.message || isError.error}</Message>
      ) : (
        <>
          <h1> Latest Products</h1>
          <Row>
            {products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;
