const BlogController=require('../controllers/BlogController')
const QuoteController=require('../controllers/QuoteController')
const UserController=require('../controllers/UserController')

const express=require('express')
const router=express.Router()


//Blog Api
router.get('/blog',BlogController.ShowBlogList)
router.post('/saveBlog/:blogID',BlogController.UpdateBlogList)
router.post('/createBlog',BlogController.CreateBlogList)
router.get('/deleteBlog/:blogID',BlogController.DeleteBlogList)
router.get('/readBlog/:blogID',BlogController.ReadSingleBlog)
router.get('/readBlogBySimilarities/:ID',BlogController.ReadBlogBySimilarities)


//Quote Api
router.get('/quote',QuoteController.ShowQuoteList)
router.post('/createQuote',QuoteController.CreateQuoteList)


//Login
router.post('/login',UserController.VerifyUserLogin)
router.get('/logout',UserController.UserLogout)


module.exports=router;