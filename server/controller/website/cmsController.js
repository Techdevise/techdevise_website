const { Cms } = require("../../models");


module.exports={
      listingCms: async (req, res) => {
            try {
                let cmss = await Cms.findAll({
                  
                });
                 return res.status(200).json({
                        success: true,
                        message: "Get all Cms  successfully",
                        data: cmss,
                    });
            } catch (error) {
              console.log(error);
                    return res.status(500).json({
                        success: false,
                        message: "Something went wrong",
                        error: error.message,
                    });
            }
        },
           
}