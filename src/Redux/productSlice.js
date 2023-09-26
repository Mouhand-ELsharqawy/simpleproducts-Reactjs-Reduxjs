import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
const url = "http://localhost:1080/products/products.php"; 

export const getProducts = createAsyncThunk("product/getProducts", async(_,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await fetch(url);
        const data = await res.json();
        return data.data;
    }catch(error){
        return rejectWithValue(error.message);
    }
});


export const createProduct = createAsyncThunk("product/createProduct",async(productdata,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await fetch(url,{
            method:"POST",
            body: JSON.stringify(productdata),
            headers:{
                'Content-type':'application/json;'
            }
        });
        const data = await res.id.json();
        return { data,productdata };
    }catch(error){
        return rejectWithValue(error.message);
    }
});


export const deleteProduct = createAsyncThunk("product/deleteProduct",async(id,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try{
        const res = await fetch(url,{
            method:"DELETE",
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ id: id })
        })
        return id;
    }catch(error){
        return rejectWithValue(error.message);
    }
})

const productSlice = createSlice({
    name:"product",
    initialState:{isLoading:false,error:null,products:[]},
    extraReducers:{
        [getProducts.pending]:(state,action)=>{
            state.isLoading = true;
            state.error = null;
        },
        [getProducts.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.products = action.payload;
        },
        [getProducts.rejected]:(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        },
        [createProduct.pending]:(state,action)=>{
            state.isLoading = true;
            state.error= null;
        },
        [createProduct.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.products.push(action.payload);
        },
        [createProduct.rejected]:(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        },
        [deleteProduct.pending]:(state,action)=>{
            state.isLoading = true;
            state.error = null;
        },
        [deleteProduct.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.products = state.products.filter( el => el.id !== action.payload)
        },
        [deleteProduct.rejected]:(state,action)=>{
            state.isLoading = false;
            state.products = action.payload;
        }
    }
});

export default productSlice.reducer;


