const router=require('express').Router()
const ContactCtrl=require('../usercontrollers/ContactCtrl')

router.post('/contact',ContactCtrl.Contact)
router.get('/contact',ContactCtrl.getContact)

module.exports=router