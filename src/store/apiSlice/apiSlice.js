import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const fetchAsyncData = createAsyncThunk('data/fetchAsyncData', async () => {
    console.log("Triggering.....");
    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiIzZDk5OThkYy1jMDQ5LTQxMDgtYjY2NC1mNmNjODgzZjc3ZTUiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9mZDAyMTYxMS1mZjhjLTQ5ZTItOWE0NS1mMDljMjExMGRkMWUvIiwiaWF0IjoxNjUzOTgwNTc4LCJuYmYiOjE2NTM5ODA1NzgsImV4cCI6MTY1Mzk4NDQ3OCwiYWlvIjoiRTJaZ1lPaTV1TW5YdU5iMzVIbmQrdTBQNDJ6TEFBPT0iLCJhcHBpZCI6ImRhZjU1NTE2LWE0ZDAtNGU3YS1hOTM4LTdmMjgxNTdkN2MxNiIsImFwcGlkYWNyIjoiMiIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2ZkMDIxNjExLWZmOGMtNDllMi05YTQ1LWYwOWMyMTEwZGQxZS8iLCJyaCI6IjAuQVM4QUVSWUNfWXpfNGttYVJmQ2NJUkRkSHR5WW1UMUp3QWhCdG1UMnpJZ19kLVV2QUFBLiIsInRpZCI6ImZkMDIxNjExLWZmOGMtNDllMi05YTQ1LWYwOWMyMTEwZGQxZSIsInV0aSI6Im1MRFVVQXEyY2t1RWNPdXJFUWMzQUEiLCJ2ZXIiOiIxLjAifQ.bYKNN57e4uiAzZYkyXUTsGnh4KP7Bqqg_y9TW22xYqKK1kRG-_cpLujM2abB4ndyYa50gPWBeqnUITMp6K-RSoh9jGtR9UyDNyRi5xdufJVLx1vMi3QG2HDZ76c33LLMOcKa6VAQLQ3Ve59LRm3E-UqsfAhNGdtvOT9jugPDveB36yy_EVLoJZjqCxy3EDtXerLvco3DH-c9DOulqQxFVdU4IhjH6W2KGlVw_V2ggBZbGukwU_H4APYZ8QPxXm34Nif9cSR8Bso2NYa76CBy-ZSGugHDDqAo5xjyODzs3byGchEuY7CDkFS-qxnu8NpLVfuELZy7VN_34AoSiP9LRg'

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
    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiIzZDk5OThkYy1jMDQ5LTQxMDgtYjY2NC1mNmNjODgzZjc3ZTUiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9mZDAyMTYxMS1mZjhjLTQ5ZTItOWE0NS1mMDljMjExMGRkMWUvIiwiaWF0IjoxNjUzOTcwNzczLCJuYmYiOjE2NTM5NzA3NzMsImV4cCI6MTY1Mzk3NDY3MywiYWlvIjoiRTJaZ1lDamJaTCs5OUxhK2VkOW5WK1BIbFJiOUFBPT0iLCJhcHBpZCI6ImRhZjU1NTE2LWE0ZDAtNGU3YS1hOTM4LTdmMjgxNTdkN2MxNiIsImFwcGlkYWNyIjoiMiIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2ZkMDIxNjExLWZmOGMtNDllMi05YTQ1LWYwOWMyMTEwZGQxZS8iLCJyaCI6IjAuQVM4QUVSWUNfWXpfNGttYVJmQ2NJUkRkSHR5WW1UMUp3QWhCdG1UMnpJZ19kLVV2QUFBLiIsInRpZCI6ImZkMDIxNjExLWZmOGMtNDllMi05YTQ1LWYwOWMyMTEwZGQxZSIsInV0aSI6IkVFVmQtOWFHcjBXcUtobE13aU0tQUEiLCJ2ZXIiOiIxLjAifQ.mQg1ExUsGT_F0sB2CeOYqmafZ5Oi64-JuSQL0d4Ym3QCopDPjLvG5uWxCVT1rigyVuYtLEnmmLg4fOwikirktxB8yfaYJFYiUvpcHx7RpgeQQ37f_0uv4YFz-eLqbB20Z1_8XObDPMQmz40YeccdxlBYNxRY_aqLIEn4SbwDJi5RAYfil2sJmM4J8enFDEWKLWdnd0FbAOt22SDzUDFHU7qilfBTGACf39W9rbCVkLXZSIyBx97HOYeDWVIoN7TcLUrHDCDWGkpxbfhjZFCi4KeyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiIzZDk5OThkYy1jMDQ5LTQxMDgtYjY2NC1mNmNjODgzZjc3ZTUiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9mZDAyMTYxMS1mZjhjLTQ5ZTItOWE0NS1mMDljMjExMGRkMWUvIiwiaWF0IjoxNjUzOTgwNTc4LCJuYmYiOjE2NTM5ODA1NzgsImV4cCI6MTY1Mzk4NDQ3OCwiYWlvIjoiRTJaZ1lPaTV1TW5YdU5iMzVIbmQrdTBQNDJ6TEFBPT0iLCJhcHBpZCI6ImRhZjU1NTE2LWE0ZDAtNGU3YS1hOTM4LTdmMjgxNTdkN2MxNiIsImFwcGlkYWNyIjoiMiIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2ZkMDIxNjExLWZmOGMtNDllMi05YTQ1LWYwOWMyMTEwZGQxZS8iLCJyaCI6IjAuQVM4QUVSWUNfWXpfNGttYVJmQ2NJUkRkSHR5WW1UMUp3QWhCdG1UMnpJZ19kLVV2QUFBLiIsInRpZCI6ImZkMDIxNjExLWZmOGMtNDllMi05YTQ1LWYwOWMyMTEwZGQxZSIsInV0aSI6Im1MRFVVQXEyY2t1RWNPdXJFUWMzQUEiLCJ2ZXIiOiIxLjAifQ.bYKNN57e4uiAzZYkyXUTsGnh4KP7Bqqg_y9TW22xYqKK1kRG-_cpLujM2abB4ndyYa50gPWBeqnUITMp6K-RSoh9jGtR9UyDNyRi5xdufJVLx1vMi3QG2HDZ76c33LLMOcKa6VAQLQ3Ve59LRm3E-UqsfAhNGdtvOT9jugPDveB36yy_EVLoJZjqCxy3EDtXerLvco3DH-c9DOulqQxFVdU4IhjH6W2KGlVw_V2ggBZbGukwU_H4APYZ8QPxXm34Nif9cSR8Bso2NYa76CBy-ZSGugHDDqAo5xjyODzs3byGchEuY7CDkFS-qxnu8NpLVfuELZy7VN_34AoSiP9LRgLWb9HX_huL5pSE9gZUw8GBaDsxQO8JAcVzJ3gfXhPjywKEqQGJYGjR7TKdPHxxpQ'

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