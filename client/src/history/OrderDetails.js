
import React, {useContext, useEffect,useState} from 'react'
import {GlobalState} from '../components/GlobalState'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './history.css'

function OrderDetails() {
    const state = useContext(GlobalState)
    const [history, setHistory] =useState([])
    const [isAdmin] = state.UserAPI.isAdmin
    const [token] = state.token
    

    useEffect(() => {
        if(token){
            const getHistory = async() =>{
                if(isAdmin){
                    const res = await axios.get('/api/delivery', {
                        headers: {Authorization: token}
                    })
                    setHistory(res.data)
                }else{
                    const res = await axios.get('/user/cashhistory', {
                        headers: {Authorization: token}
                    })
                    setHistory(res.data)
                }
            }
            getHistory()
        }
    },[token, isAdmin, setHistory])

    return (
        <div className="history-pag">
            <h2>History</h2>

            <h4>You have {history.length} order</h4>

            <table>
                <thead>
                    <tr>
                        
                        <th>name</th>
                        <th>email</th>
                        <th>amount</th>
                        <th>Date of purchased</th>
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
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.Total}</td>
                                <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                                <td>{order.seatNo}</td>
                                <td>{order.theaterName}</td>
                                <td>{order.showtime}</td>
                                <td>{order.status}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default OrderDetails