import React,{useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import DetailProduct from './DetailProduct'
import Products from './Products'
import Cart from './Cart'
import Categories from '../Categories/Categories'
import Createproduct from '../Categories/Createproduct'
import Notfound from './Notfound'
import Reset from '../login/Reset'
import {GlobalState} from './GlobalState'
import OrderDetails from '../history/OrderDetails'
import FAQs from '../front/FAQs'
import Newpassword from '../login/Newpassword'
import Home from '../front/Home'
import About from '../front/About'
import Contact from '../front/Contact'
import Checkout from '../api/Checkout'
import Success from '../api/Success'
import Failure from '../api/Failure'
import OrderHistory from '../history/OrderHistory'
import Myorders from '../history/Myorders'
import Signup from '../Signup/Signup'
import Cash from '../api/Cash'
import Login from '../login/Login'
 

function Page() {

    const state=useContext(GlobalState)
    const [isLogged]=state.UserAPI.isLogged
    const [isAdmin]=state.UserAPI.isAdmin

    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/detail/:id" exact component={DetailProduct}/>
            <Route path="/Cart" exact component={isLogged ? Cart:Notfound}/>
            <Route path="/create_product" exact component={isAdmin ? Createproduct :Notfound}/>
            <Route path="/edit_product/:id" exact component={isAdmin ? Createproduct : Notfound} />
            <Route path='/category' exact component={Categories}/>
            <Route path='/reset' exact component={Reset}/>
            <Route exact path="/FAQs" component={FAQs}/>
            <Route exact path="/Success" component={isLogged ? Success:Notfound}/>
            <Route exact path="/failure" compnent={isLogged ? Failure:Notfound}/>
            <Route exact path="/cashorder" component={isLogged ? OrderDetails:Notfound}/>
            <Route exact path="/Myorder" component={isLogged? Myorders:Notfound}/>
            <Route exact path='/reset/:token' component={Newpassword}/>
            <Route path='/Menu'exact component={Products}/>
            <Route path='/About'exact component={About}/>
            <Route path='/Contact' exact component={Contact}/>
            <Route exact path="/Checkout" component={isLogged?Checkout:Notfound} />
            <Route exact path="/Signup" exact component={Signup}/>
            <Route exact path="/Login" component={Login}/>
            <Route exact path="/cashondelivery" component={isLogged ? Cash:Notfound}/>

            <Route path="/history" exact component={isLogged ? OrderHistory:Notfound} />
            <Route path="/history/:id" exact component={isLogged ?OrderDetails:Notfound} />
        </Switch>   
    )
}

export default Page
