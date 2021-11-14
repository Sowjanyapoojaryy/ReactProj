import React, {useContext, useEffect,useState} from 'react'
import {GlobalState} from '../components/GlobalState'
import axios from 'axios'
import './history.css'

function OrderHistory() {
    const state = useContext(GlobalState)
    const [history, setHistory] =useState([])
    const [isAdmin] = state.UserAPI.isAdmin
    const [token] = state.token
    

    useEffect(() => {
        if(token){
            const getHistory = async() =>{
                if(isAdmin){
                    const res = await axios.get('/api/payment', {
                        headers: {Authorization: token}
                    })
                    setHistory(res.data)
                }else{
                    const res = await axios.get('/user/history', {
                        headers: {Authorization: token}
                    })
                    setHistory(res.data)
                }
            }
            getHistory()
        }
    },[token, isAdmin, setHistory])

    return (
        <div className="history-page">
            <h2>History</h2>

            <h4>You have {history.length} order</h4>

            <table>
                <thead>
                    <tr>
                        <th>orderID</th>
                        <th>Date of Purchased</th>
                        <th>name</th>
                        <th>email</th>
                        <th>phoneNo</th>
                        <th>amount</th>
                        <th>seatno</th>
                        <th>theaterName</th>
                        <th>showtime</th>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        history.map(order => (
                            <tr key={order._id}>
                                <td>{order.OrderID}</td>
                                <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                                <td>{order.customerId}</td>
                                <td>{order.customerEmail}</td>
                                <td>{order.customerPhone}</td>
                                <td>{order.amount}</td>
                                <td>{order.seatNo}</td>
                                <td>{order.theaterName}</td>
                                <td>{order.showtime}</td>
                                <td>{order.Status}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default OrderHistory