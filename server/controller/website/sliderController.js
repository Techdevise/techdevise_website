
const { Sliders, Quality } = require("../../models");


module.exports = {


   
    listing_React: async (req, res) => {

        try {
            const native = await Sliders.findAll({
                where: { status: 1, type: 1 }
            })

            return res.status(200).json({
                success: true,
                message: "Get all React Native  successfully",
                data: native,
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
    listing_Ai_Integrated: async (req, res) => {

        try {
            const ai = await Sliders.findAll({
                where: { status: 1, type: 2 }
            })

            return res.status(200).json({
                success: true,
                message: "Get all Ai Integrated  successfully",
                data: ai,
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


    listing_Blockchain: async (req, res) => {

        try {
            const blockchain = await Sliders.findAll({
                where: { status: 1, type: 3 }
            })

            return res.status(200).json({
                success: true,
                message: "Get all Blockchain   successfully",
                data: blockchain,
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

    listing_Seamless: async (req, res) => {

        try {
            const sem = await Sliders.findAll({
                where: { status: 1, type: 4 }
            })

            return res.status(200).json({
                success: true,
                message: "Get all Seamless Vision successfully",
                data: sem,
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

     listing_Blockchain_Consulting: async (req, res) => {

        try {
            const sem = await Sliders.findAll({
                where: { status: 1, type: 5 }
            })

            return res.status(200).json({
                success: true,
                message: "Get all Blockchain Consulting Vision successfully",
                data: sem,
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
     listing_Ai_Service: async (req, res) => {

        try {
            const sem = await Sliders.findAll({
                where: { status: 1, type: 6 }
            })

            return res.status(200).json({
                success: true,
                message: "Get all Ai Service Vision successfully",
                data: sem,
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
















       listing_Assurance: async (req, res) => {

        try {
            const dig = await Quality.findAll({
                where: { status: 1, type: 1 }
            })

            return res.status(200).json({
                success: true,
                message: "Get all Digital Assurance  successfully",
                data: dig,
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
    listing_Engineering: async (req, res) => {

        try {
            const dig = await Quality.findAll({
                where: { status: 1, type: 2 }
            })

            return res.status(200).json({
                success: true,
                message: "Get all Digital Engineering  successfully",
                data: dig,
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
