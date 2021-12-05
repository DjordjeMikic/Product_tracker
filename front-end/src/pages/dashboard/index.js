import { useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProducts } from "../../store/product/actions";
import DashboardLayout from "../../components/dashboardLayout";
import { useAuth } from '../../hooks/useAuth';

const Dashboard = () => {
    const { login } = useAuth();
    const dispatch = useDispatch();
    
    useEffect(() => {        
        dispatch(getProducts());
    }, [dispatch])
    
    return (
        <DashboardLayout>
            {login ? <Outlet /> : <Navigate to="/" />}
        </DashboardLayout>
    )
}

export default Dashboard;