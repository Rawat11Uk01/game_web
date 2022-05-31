import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const fetchAsyncData = createAsyncThunk('data/fetchAsyncData', async () => {
    console.log("Triggering.....");
    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiIzZDk5OThkYy1jMDQ5LTQxMDgtYjY2NC1mNmNjODgzZjc3ZTUiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9mZDAyMTYxMS1mZjhjLTQ5ZTItOWE0NS1mMDljMjExMGRkMWUvIiwiaWF0IjoxNjUzOTkwOTQ3LCJuYmYiOjE2NTM5OTA5NDcsImV4cCI6MTY1Mzk5NDg0NywiYWlvIjoiRTJaZ1lEQ3RpK1p6YmZ5dElTU3hZaDNEamJQc0FBPT0iLCJhcHBpZCI6ImRhZjU1NTE2LWE0ZDAtNGU3YS1hOTM4LTdmMjgxNTdkN2MxNiIsImFwcGlkYWNyIjoiMiIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2ZkMDIxNjExLWZmOGMtNDllMi05YTQ1LWYwOWMyMTEwZGQxZS8iLCJyaCI6IjAuQVM4QUVSWUNfWXpfNGttYVJmQ2NJUkRkSHR5WW1UMUp3QWhCdG1UMnpJZ19kLVV2QUFBLiIsInRpZCI6ImZkMDIxNjExLWZmOGMtNDllMi05YTQ1LWYwOWMyMTEwZGQxZSIsInV0aSI6IlNVZVRZV3ZjelVHSHl6azdHeWc3QUEiLCJ2ZXIiOiIxLjAifQ.dno3T0UyFQX2n8gbrKPUxgpePtSC8yU0iUqLB3mtorVrl1UmWac9pQ9HGfpEsjnuld2cO7HD8DVdQvFzgiVaSSYKn7WkeNpLUBGHLdHfQSO1pBiRIdkymyF71TT8aSxgd88J9i2yaH9EWKwU6tacELgR_ED272lha0AJWk8rf9bhghOA0d4bBA454m1eq6hA5EEIbd_373J1aihy-I8m6CerfI02QfYHyKh7MMqe7C90fwJMtrKsOqC7EfDxWAyKWQ9M9dNXurBY2TF0kWxIh3GP2afX_g3gohd65yWMTiENv-2tlpRo1bbWjRqI8CBtvPG4e6IPk6JD3r2uYpPjDQ'

    const apiUrl = '/';
    const authAxios = axios.create({
        baseURL: apiUrl,
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    })
    const response = await authAxios.get(`products?includeMeta=true`);
    console.log('apiData', response.data)
  
    return response.data;
});


export const fetchAsyncProductPrice = createAsyncThunk('data/fetchAsyncProductPrice', async (sku) => {
    console.log("Triggering.....");
    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiIzZDk5OThkYy1jMDQ5LTQxMDgtYjY2NC1mNmNjODgzZjc3ZTUiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9mZDAyMTYxMS1mZjhjLTQ5ZTItOWE0NS1mMDljMjExMGRkMWUvIiwiaWF0IjoxNjUzOTkwOTQ3LCJuYmYiOjE2NTM5OTA5NDcsImV4cCI6MTY1Mzk5NDg0NywiYWlvIjoiRTJaZ1lEQ3RpK1p6YmZ5dElTU3hZaDNEamJQc0FBPT0iLCJhcHBpZCI6ImRhZjU1NTE2LWE0ZDAtNGU3YS1hOTM4LTdmMjgxNTdkN2MxNiIsImFwcGlkYWNyIjoiMiIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2ZkMDIxNjExLWZmOGMtNDllMi05YTQ1LWYwOWMyMTEwZGQxZS8iLCJyaCI6IjAuQVM4QUVSWUNfWXpfNGttYVJmQ2NJUkRkSHR5WW1UMUp3QWhCdG1UMnpJZ19kLVV2QUFBLiIsInRpZCI6ImZkMDIxNjExLWZmOGMtNDllMi05YTQ1LWYwOWMyMTEwZGQxZSIsInV0aSI6IlNVZVRZV3ZjelVHSHl6azdHeWc3QUEiLCJ2ZXIiOiIxLjAifQ.dno3T0UyFQX2n8gbrKPUxgpePtSC8yU0iUqLB3mtorVrl1UmWac9pQ9HGfpEsjnuld2cO7HD8DVdQvFzgiVaSSYKn7WkeNpLUBGHLdHfQSO1pBiRIdkymyF71TT8aSxgd88J9i2yaH9EWKwU6tacELgR_ED272lha0AJWk8rf9bhghOA0d4bBA454m1eq6hA5EEIbd_373J1aihy-I8m6CerfI02QfYHyKh7MMqe7C90fwJMtrKsOqC7EfDxWAyKWQ9M9dNXurBY2TF0kWxIh3GP2afX_g3gohd65yWMTiENv-2tlpRo1bbWjRqI8CBtvPG4e6IPk6JD3r2uYpPjDQ'

    const apiUrl = '/';
    const authAxios = axios.create({
        baseURL: apiUrl,
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    })
    const response = await authAxios.get(`prices?sku=bac1d215-2a39-4bf3-a8c7-9be5ffa69bdf`);
    return response;
});

const initialState = {
    imageData: [],
    products: [],
    sku: [],
    price: [],
}

const apiSlice = createSlice({
    name: 'apiSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [fetchAsyncData.pending]: () => { console.log('Pending') },
        [fetchAsyncData.fulfilled]: (state, { payload }) => {
            console.log('fetched successfully')
            return { ...state, products: payload, imageData: payload.Products.map((imageData)=>imageData.Graphics), sku: payload.Products.map((sku)=> sku.Sku) }
        },
        [fetchAsyncData.rejected]: (state, { payload }) => {
            console.log('rejected')
            return { ...state, products: payload }
        },
        [fetchAsyncProductPrice.pending]: () => { console.log('Pending') },
        [fetchAsyncProductPrice.fulfilled]: (state, { payload }) => {
            console.log('fetched successfully')
            return { ...state, price: payload }
        },
        [fetchAsyncProductPrice.rejected]: (state, { payload }) => {
            console.log('rejected')
            return { ...state, price: payload }
        },
    },

},
)
export const apiSliceAction = apiSlice.actions;
export default apiSlice.reducer;