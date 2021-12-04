import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProducts } from "../../store/product/actions";
import DashboardLayout from "../../components/dashboardLayout";

const Dashboard = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {        
        dispatch(getProducts());
    }, [dispatch])
    
    return (
        <DashboardLayout>
            <Outlet />
        </DashboardLayout>
    )
}

export default Dashboard;