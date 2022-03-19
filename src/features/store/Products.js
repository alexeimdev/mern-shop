import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Products.module.scss';
import ProductsList from './ProductsList';
import ProductDetails from './ProductDetails';
import {
    addProduct,
    deleteProduct,
    editProduct,
} from '../store/storeSlide' 


export default function Products() {

    const dispatch = useDispatch();
    const storeState = useSelector(state => state.store);

    function handleAddProduct() {

    }

    function handleDeleteProduct(productId) {
        dispatch(deleteProduct(productId));
    }

    return (
        <div className={styles.container}>
            <div className={styles.productsListWrapper}>
                <ProductsList
                    products={storeState.products}
                    onDeleteProduct={handleDeleteProduct} />
            </div>
            <div className={styles.productDetailsWrapper}>
                <ProductDetails />
            </div>
        </div>
    )
}