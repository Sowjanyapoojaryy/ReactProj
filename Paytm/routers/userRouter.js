const router=require('express').Router()
const userCtrl=require('../usercontrollers/userCtrl')
const auth=require('../middleware/auth')

router.post('/register',userCtrl.register)
router.get('/refresh_token',userCtrl.refreshToken)  
router.post('/login',userCtrl.login)
router.put('/new-password',userCtrl.forgotPassword)
router.post('/reset',userCtrl.resetPassword)
router.post('activation',userCtrl.activateEmail)
router.get('/infor',auth,userCtrl.getUserInfor)
router.get('/logout',userCtrl.logout)
router.patch('/addCart',auth,userCtrl.addCart)
router.patch('/update',auth,userCtrl.updateUser)
router.delete('/delete',userCtrl.deleteUser)
router.get('/history',auth,userCtrl.history)
router.get('/cashhistory',auth,userCtrl.cashhistory)

module.exports=router