import { useState } from 'react';
import styled from 'styled-components'
import { PrimaryButton } from './CommonStyled';
import {useDispatch} from 'react-redux'
import { productsCreate } from '../../features/productSlice';
const CreateProduct=()=>{
    const [productImg,setProductImg]= useState("");
    const [name,setName]= useState("");
    const [brand,setBrand]= useState("");
    const [price,setPrice]= useState("");
    const [desc,setDesc]= useState("");
    console.log(productImg);
    const handleProductImageUpload=(e)=>{
        const file=e.target.files[0];
        transformFile(file)
    }
    const dispatch=useDispatch();
    const transformFile=(file)=>{
        const reader=new FileReader();        //get the url of the images, base64url
        if(file){
            reader.readAsDataURL(file);
            reader.onloadend=()=>{           //event fired when file reading done
                setProductImg(reader.result)
            };
         } else{
                setProductImg("")
            }              
        
    };
     const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(productsCreate({
            name,
            brand,
            price,
            desc,
            image:productImg
        }))

     }
    return (
        <StyledCreateProduct> 
            <StyledForm onSubmit={handleSubmit}>
                <h3> Create product </h3>
                <input type="file" accept="image/" onChange={handleProductImageUpload} required />
                <select onChange={(e)=>setBrand(e.target.value)} required>
                    <option value="">Select brand</option>
                    <option value="mi">Mi</option>
                    <option value="samsung">Samsung</option>
                    <option value="vivo">Vivo</option>
                    <option value="iphone">iPhone</option>
                    <option value="iqoo">iQoo</option>
                    <option value="realme">Realme</option>
                </select>
                <input type="text" required placeholder="product_name" onChange={(e)=>setName(e.target.value)}/>
                <input type="text" required placeholder="product_price" onChange={(e)=>setPrice(e.target.value)}/>
                <input type="text" required placeholder="product_description" onChange={(e)=>setDesc(e.target.value)}/>
                <PrimaryButton type="submit"> Submit </PrimaryButton>
            </StyledForm>
            <ImagePreview>
                {productImg? <>
                <img src={productImg} alt="img is here"/>
                </>: <p>Img preview here :))))</p>}
            </ImagePreview>
        </StyledCreateProduct>
    )
};
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin-top: 2rem;
  select,
  input {
    padding: 7px;
    min-height: 30px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(182, 182, 182);
    margin: 0.3rem 0;
    &:focus {
      border: 2px solid rgb(0, 208, 255);
    }
  }
  select {
    color: rgb(95, 95, 95);
  }
`;

const StyledCreateProduct = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImagePreview = styled.div`
  margin: 2rem 0 2rem 2rem;
  padding: 2rem;
  border: 1px solid rgb(183, 183, 183);
  max-width: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: rgb(78, 78, 78);
  img {
    max-width: 100%;
  }
`;

export default CreateProduct; 