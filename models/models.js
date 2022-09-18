const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../sequelize");

const users = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  email_address: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  user_name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

const viewing_apps = sequelize.define("viewing_apps", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

const watched_anime = sequelize.define("watched_animes", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: users,
      key: "id",
    },
  },
  anime_title_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  anime_sub_title_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  anime_sub_title_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  viewing_app_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: viewing_apps,
      key: "id",
    },
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  },
});

const tags = sequelize.define("tags", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  tag: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

const anime_tags = sequelize.define("anime_tags", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  anime_title_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tage_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: tags,
      key: "id",
    },
  },
});

const interested_animes = sequelize.define("interested_animes", {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  anime_title_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

const friends = sequelize.define("friends", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  sender_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  recipient_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.CHAR(11),
    allowNull: false,
  },
});

const messages = sequelize.define("messages", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  sender_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  recipient_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  message: {
    type: DataTypes.CHAR(11),
    allowNull: false,
  },
  date: {
    type: DataTypes.CHAR(11),
    allowNull: false,
  },
});

module.exports = {
  users,
  viewing_apps,
  watched_anime,
  tags,
  anime_tags,
  interested_animes,
  friends,
  messages,
};
