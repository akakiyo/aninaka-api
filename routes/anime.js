const express = require("express");
const sequelize = require("../sequelize");
const { users } = require("../models/models.js");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    //追加したいフレンドの検索
    await users.sync({ force: true });
    // const { title, storyNum } = req.query;
    // const subTitles = (
    //   await sequelize.query(
    //     `SELECT sub_title FROM personal_anime_infos WHERE title = (?) AND story_number =(?)`,
    //     {
    //       replacements: [title, storyNum],
    //     }
    //   )
    // )[0];

    // const subTitleSet = new Set();
    // subTitles.forEach((subTitle) => {
    //   subTitleSet.add(subTitle.sub_title);
    // });
    // const applicableSubTitles = Array.from(subTitleSet);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
