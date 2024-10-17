const {
    ShowBlogService,
    UpdateBlogService,
    CreateBlogService,
    DeleteBlogService,
    ReadSingleBlogService,
    ReadBlogBySimilaritiesService
} = require("../services/BlogService");

exports.ShowBlogList=async (req,res)=>{
    const data = await ShowBlogService();
    return res.status(200).json(data)
}


exports.UpdateBlogList = async (req, res) => {
    const data = await UpdateBlogService(req);
    return res.status(200).json(data)
}


exports.CreateBlogList = async (req, res) => {
    const data = await CreateBlogService(req);
    return res.status(200).json(data)
}

exports.DeleteBlogList = async (req, res) => {
    const data = await DeleteBlogService(req);
    return res.status(200).json(data)
}

exports.ReadSingleBlog = async (req, res) => {
    const data = await ReadSingleBlogService(req);
    return res.status(200).json(data)
}
exports.ReadBlogBySimilarities = async (req, res) => {
    const data = await ReadBlogBySimilaritiesService(req);
    return res.status(200).json(data)
}