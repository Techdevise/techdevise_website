const { ItRole, HireingRole } = require("../../models");


module.exports = {



  itroleListing: async (req, res) => {
    try {
      const Role = await HireingRole.findAll({
        include: [
          {
            model: ItRole,
            as: 'It_Role',
          }
        ],
        order: [['id', 'DESC']]
      });

      res.render("pages/it_Roles/roleListing", {
        role: Role,
        title: "Role_Listing"
      });

    } catch (error) {
      console.log(error);

      const errorMessage = error.message || 'Something went wrong, please try again later.';
      req.flash("error", errorMessage);
      return res.redirect("/admin/dashboard");
    }
  },
  viewRoles: async (req, res) => {
    try {
      const { id } = req.params;
      const Role = await HireingRole.findOne({
        include: [
          {
            model: ItRole,
            as: 'It_Role',
          }
        ],
        where: {
          id: id,
        },
      })
      res.render("pages/it_Roles/rolesView", {
        role: Role,
        title: "Role_Listing"
      })
    } catch (error) {
      const errorMessage = error.message || 'Something went wrong, please try again later.';
      req.flash("error", errorMessage);
      return res.redirect("/admin/dashboard");
    }
  },

  deleteRole: async (req, res) => {
    try {
      const { id } = req.params;

      const role = await HireingRole.findOne({ where: { id } });
      if (!role) {
        req.flash("error", "Role not found.");
        return res.redirect("/admin/role-listing");
      }

      await HireingRole.destroy({ where: { id } });

      req.flash("success", "Role deleted successfully.");
        res.json({ success: true, message: 'Role deleted successfully' });

        } catch (error) {
            console.log(error);
            const errorMessage = error.message || 'Failed to delete role.';
            req.flash("error", errorMessage);
            res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
        }
  },



}