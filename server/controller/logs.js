const log = require("../models/log")

exports.list = async (req, res) => {
  try {
    const logs = await log.find({});
    res.render("index", { logs: logs });
  } catch (e) {
    res.status(404).send({ message: "could not list logs" });
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  console.log(req.params.id);
  try {
    await log.findByIdAndRemove(id);
    res.redirect("/index/?message=logs has been deleted");
  } catch (e) {
    res.status(404).send({
      message: `could not delete record ${id}.`,
    });
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const Log = await log.updateOne({
      log_ID: req.body.log_id,
      name: req.body.name,
      price: req.body.price,
      date: req.body.date,
      paymenttype: req.body.paymenttype,
      reasonofpayment: req.body.reasonofpayment,
      paidwith: req.body.paidwith,
    });
    res.redirect('/index/?message=log has been updated');
  } catch (e) {
    res.status(404).send({
      message: `couldn't find log ${id}.`,
    });
  }
};

exports.edit = async (req, res) => {
    const id = req.params.id;
    try{
        const Log = await log.findById(id);
        res.render('updatelogs', { log: Log, id: id});
    } catch (e) {
        console.error(e)
        res.status(404).send({
            message: `could not find log ${id}`
        });
    }
};

exports.create = async (req, res) => {
  console.log(req.body);
  try {
    await log.create({
        log_ID: req.body.log_id,
        name: req.body.name,
        price: req.body.price,
        date: req.body.date,
        paymenttype: req.body.paymenttype,
        reasonofpayment: req.body.reasonofpayment,
        paidwith: req.body.paidwith
    });

    console.log("i a in the try");
    res.redirect("/index?message=New log has been added");
    console.log("log added")
  } catch (e) {
    if (e.errors) {
      console.log(e);
      console.log("iamhere");
      res.render('addlogs', { errors: e.errors })
      return;
    }
    console.log(e);
  }
};