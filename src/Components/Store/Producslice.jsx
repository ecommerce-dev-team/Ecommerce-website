import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const getproducts = createAsyncThunk('products/getproducts',async (_,thunkAPI)=>{
  const {rejectWithValue}=thunkAPI;
  try{
         let response = await fetch('https://ecommerce.routemisr.com/api/v1/products');
       if (!response.ok) {
     
          const errorData = await response.json();
          return rejectWithValue(errorData.message || "Something went wrong");
        }

        const data = await response.json();
        return data;
        }
        catch(error){
        return rejectWithValue(error.message) ;
    }
       

})



 const productSlice = createSlice({
  name:'products' ,
  initialState:{products:null,isloading:false,error:null},
  extraReducers:(builder)=>{
        builder.addCase(getproducts.pending,(state)=>{
            state.isloading = true;
            state.error = null;
         
          
        })
          builder.addCase(getproducts.fulfilled,(state,action)=>{
            state.isloading = false;
            state.products = action.payload.data;
            state.error = null;
         

        })
         builder.addCase(getproducts.rejected,(state,action)=>{
          state.isloading=false;
          state.error = action.payload || action.error.message;

         

        })
      }
})




export default productSlice.reducer;