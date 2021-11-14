const router=require('express').Router()
const CashCtrl=require('../usercontrollers/CashCtrl')

router.post('/delivery',CashCtrl.postcash)
router.get('/delivery',CashCtrl.getCash)

module.exports=router