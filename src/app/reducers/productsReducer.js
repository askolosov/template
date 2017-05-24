import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import * as constants from 'constants/index';

const initialState = {
  products: {
    data: [],
  },
  product: {
    data: {},
  },
  actions: {
    getProducts: {
      message: null,
      status: null,
      isLoading: false,
      createdAt: null,

      /**
       * Filters/Search related meta data
       */
      meta: {
        options: [],
        search: null,
      }
    },
    getProduct: {
      message: null,
      status: null,
      isLoading: false,
      createdAt: null,
    },
    postProduct: {
      message: null,
      status: null,
      isLoading: false,
      createdAt: null,
    },
  },
};

/**
 * Get products
 */
const getProductsRequest = (state, action) => update(state, {
  actions: {
    getProducts: { $setRequestActionLoading: action.payload },
  },
});

const getProductsSuccess = (state, action) => update(state, {
  products: {
    data: { $set: action.payload.data },
  },
  actions: {
    getProducts: { $setRequestActionSuccess: action.payload },
  },
});

const getProductsFailure = (state, action) => update(state, {
  actions: {
    getProducts: { $setRequestActionFailure: action.payload },
  },
});

const getProductsIdle = (state, action) => update(state, {
  products: {
    data: { $set: initialState.products.data },
  },
  actions: {
    getProducts: { $setRequestActionIdle: action.payload },
  },
});


/**
 * Get product
 */
const getProductRequest = (state, action) => update(state, {
  actions: {
    getProduct: { $setRequestActionLoading: action.payload },
  },
});

const getProductSuccess = (state, action) => update(state, {
  product: {
    data: { $set: action.payload.data },
  },
  actions: {
    getProduct: { $setRequestActionSuccess: action.payload },
  },
});

const getProductFailure = (state, action) => update(state, {
  actions: {
    getProduct: { $setRequestActionFailure: action.payload },
  },
});

const getProductIdle = (state, action) => update(state, {
  product: {
    data: { $set: initialState.product.data },
  },
  actions: {
    getProduct: { $setRequestActionIdle: action.payload },
  },
});

/**
 * Post product
 */
const postProductRequest = (state, action) => update(state, {
  actions: {
    postProduct: { $setRequestActionLoading: action.payload },
  },
});

const postProductSuccess = (state, action) => update(state, {
  actions: {
    postProduct: { $setRequestActionSuccess: action.payload },
  },
});

const postProductFailure = (state, action) => update(state, {
  actions: {
    postProduct: { $setRequestActionFailure: action.payload },
  },
});

const postProductIdle = (state, action) => update(state, {
  actions: {
    postProduct: { $setRequestActionIdle: action.payload },
  },
});

export default handleActions({
  [constants.GET_PRODUCTS_REQUEST]: getProductsRequest,
  [constants.GET_PRODUCTS_SUCCESS]: getProductsSuccess,
  [constants.GET_PRODUCTS_FAILURE]: getProductsFailure,
  [constants.GET_PRODUCTS_IDLE]: getProductsIdle,

  [constants.GET_PRODUCT_REQUEST]: getProductRequest,
  [constants.GET_PRODUCT_SUCCESS]: getProductSuccess,
  [constants.GET_PRODUCT_FAILURE]: getProductFailure,
  [constants.GET_PRODUCT_IDLE]: getProductIdle,

  [constants.POST_PRODUCT_REQUEST]: postProductRequest,
  [constants.POST_PRODUCT_SUCCESS]: postProductSuccess,
  [constants.POST_PRODUCT_FAILURE]: postProductFailure,
  [constants.POST_PRODUCT_IDLE]: postProductIdle,
}, initialState);
