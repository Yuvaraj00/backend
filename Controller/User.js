const mod = require('../Model/model')

const getData= async(req,res)=>{
    let data;
    try{
        data = await mod.find()
    }
    catch(err){
    console.log(err)
    }
    if(!data){
        return res.status(404).json({message:"no datas are found"})
    }
    else 
    return res.status(200).json({data})
    } 
    const addData = async(req,res)=>{
        const {name} = req.body
        let data;
        try{
            data = new mod({
                name 
            })
        }
        catch(err){
            console.log(err)
        }
        if(!data){
            return res.status(404).json({message:"no datas are found"})
        }
        else 
        return res.status(200).json({data})

    }
    exports.getData=getData;
    exports.addData=addData;
