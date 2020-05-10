const Models = require("../Models/models");

const { Note } = require("../models/");
const Slugify = require("slug");
const Path = require("path")
module.exports = async (request, h) => {
    const result = await Models.Note.findAll({
      order: [["date", "DESC"]]
    });
  
    return {
      data: {
        notes: result
      },
      page: "Home — Notes Board",
      description: "Welcome to my Notes Board"
    };
  };
  