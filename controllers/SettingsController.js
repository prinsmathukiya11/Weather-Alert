const otpSchema = require("../models/data");

exports.changeSettings = (req, res) => {
  if (req.body.notification == "false") {
    otpSchema
      .findOne({ email: req.body.email })
      .sort({ createdAt: -1 })
      .limit(1)
      .exec(function (err, data) {
        otpSchema.findByIdAndUpdate(data.id, { notification: "false" }, function (err, data) {
          if (err) {
            console.log(err);
          } else {
            res.send(data);
            console.log("Data updated!");
          }
        });
      });
  }

  let t_days = 0;
  if (req.body.days != "ALL") {
    if (req.body.days == "SUN") {
      t_days = t_days + ",0";
    }
    if (req.body.days == "MON") {
      t_days = t_days + ",1";
    }
    if (req.body.days == "TUE") {
      t_days = t_days + ",2";
    }
    if (req.body.days == "WED") {
      t_days = t_days + ",3";
    }
    if (req.body.days == "THUR") {
      t_days = t_days + ",4";
    }
    if (req.body.days == "FRI") {
      t_days = t_days + ",5";
    }
    if (req.body.days == "SAT") {
      t_days = t_days + ",6";
    }
    otpSchema
      .findOne({ email: req.body.email })
      .sort({ createdAt: -1 })
      .limit(1)
      .exec(function (err, data) {
        otpSchema.findByIdAndUpdate(data.id, { days: t_days }, function (err, data) {
          if (err) {
            console.log(err);
          } else {
            res.send(data);
            console.log("Data updated!");
          }
        });
      });
  }
};
