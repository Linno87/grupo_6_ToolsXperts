const fs = require("fs").promises;
const path = require("path");
const db = require("../../database/models");

module.exports = async (req, res) => {
  try {
    const user = await db.User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado." });
    }

    const avatarFilename = user.avatar;
    const avatarPath = path.join(
      __dirname,
      "../../uploads/avatars",
      avatarFilename
    );

    // Verifica si el archivo existe antes de intentar eliminarlo
    const fileExists = await fs
      .access(avatarPath)
      .then(() => true)
      .catch(() => false);

    if (fileExists) {
      // Elimina el archivo solo si existe
      await fs.unlink(avatarPath);
    }

    // Actualiza el campo avatar con el nombre de la imagen predeterminada
    await db.User.update(
      { avatar: "defaultUserImg.jpg" },
      { where: { id: req.params.id } }
    );

    return res.redirect("/users/profile");
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error al eliminar el avatar." });
  }
};
