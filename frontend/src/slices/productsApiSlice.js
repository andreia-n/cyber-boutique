import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./apiSlice";

import { PRODUCTS_URL } from "../constants";

// injecting endpoints into main apiSlice, no need to create another reducer for products that needs to be added to store
export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5, //cached data after last component unsubscribe
    }),

    getProductDetail: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5, //cached data after last component unsubscribe
    }),
  }),
});

export const { useGetProductsQuery, useGetProductDetailQuery } = productsApiSlice;
