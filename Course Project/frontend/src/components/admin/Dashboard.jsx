import { NavLink } from "react-router-dom";
import {Outlet} from "react-router-dom"
import styled from 'styled-components';
const Dashboard = () => {
    return ( <StyledDashboard>
        <SideNav>
            <h3>Quick Links</h3>
            <NavLink className={({isActive})=>isActive?"link-active" : "link-inactive"} to ="/admin/summary">Product Summary</NavLink>
            <NavLink className={({isActive})=>isActive?"link-active" : "link-inactive"} to ="/admin/summary" to ="/admin/products">Products</NavLink>
        </SideNav>
        <Content>
            <Outlet/>            
        </Content>
    </StyledDashboard> );
}
 
export default Dashboard;

const StyledDashboard=styled.div`
display:flex;
height:100vh;
`;

const SideNav=styled.div`
border-right:1px solid rgb(100,100,30);
height:calc(100vh-70px);
position:fixed;
overflow-y:auto;
width:200px;
display:flex;
flex-direction:column;
padding:2rem;

h3{
    margin:0 0 1rem 0;
    padding:0;
    text-transform: uppercase;
    font-size:17px;
}
a{
    text-decoration:none;
    margin-bottom:1rem;
    font-size:14px;
}
`;

const Content= styled.div`
margin-left:200px;
padding:2rem 2rem;
width:100%;
`