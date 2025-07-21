const empModel = require("../model/empModel");

const empShow = async (req, resp) => {
  try {
    const result = await empModel.find();
    resp.render("index", { ss: result });
  } catch (error) {
    console.log(error);
  }
};

const getUpdate = async (req, resp) => {
  try {
    const emp = await empModel.findById(req.params.id);
    resp.render("edit", { emp: emp });
  } catch (error) {
    console.log(error);
  }
};

const empInsert = async (req, resp) => {
  try {
    const data = new empModel({
      name: req.body.name,
      salary: req.body.salary,
    });

    await data.save();
    resp.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

const empUpdate = async (req, resp) => {
  try {
    await empModel.findByIdAndUpdate(req.params.id, req.body);
    resp.redirect("/");
  } catch (error) {}
};

const empDelete = async (req, resp) => {
  try {
    await empModel.findByIdAndDelete(req.params.id);
    resp.redirect("/");
  } catch (error) {}
};

module.exports = { empShow, empInsert, empUpdate, empDelete, getUpdate };
