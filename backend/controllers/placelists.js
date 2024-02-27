const con = require("../config");

exports.getPlaces = (req, res, next) => {
    const command = "SELECT * FROM placedetail";
  con.query(command, function (err, data, fields) {
    if (err) return next(console.error());
    res.status(200).json({
      status: "success",
      length: data?.length,
      data: data,
    });
  });
};

exports.getPlacebyId = (req, res, next) => {
    const state = 'SELECT * FROM placedetail where placeid=';
    const command = state +  [req.params.id];
    //  console.log(command);
    if(!req.params.id){
        return next(console.error());
    }
    con.query(command, function (err, data, fields) {
        if (err) return next(console.error());
        res.status(200).json({
          status: "success",
          length: data?.length,
          data: data,
        });
      });
};

exports.createResevation = (req, res, next) =>{
  const reserved_id = req.body.reserved_id;
  const reserved_name = req.body.reserved_name;
  const reserved_num = req.body.reserved_num;
  const reserved_date = req.body.reserved_date;
  const reserved_zone = req.body.reserved_zone;
  const reserved_placeid = req.body.placeid;

  // const command = "INSERT INTO reserve (reserved_name, reserve_num, reserved_date, reserved_zone, reserved_placeid) VALUES(?,?,?,?,?), [reserved_name, reserved_num, reserved_date, reserved_zone, reserved_placeid]";

  con.query('INSERT INTO reserve ( reserved_id, reserved_name, reserved_num, reserved_date, reserved_zone, reserved_placeid) VALUES(?,?,?,?,?,?)', [ reserved_id, reserved_name, reserved_num, reserved_date, reserved_zone, reserved_placeid],
   function (err, data, fields) {
    console.log(data);
    if (err) return next(console.log(err));
    res.status(201).json({
      message: 'Add new reservation',
      data: data,
      post: { reserved_id: reserved_id, reserved_name: reserved_name, reserved_num: reserved_num, reserved_date: reserved_date, reserved_zone: reserved_zone, reserved_placeid: reserved_placeid }
    });
  });
};

exports.getReservation = (req, res, next) => {
  const command = "SELECT * FROM reserve INNER JOIN placedetail ON  reserve.reserved_placeid = placedetail.placeid ";
con.query(command, function (err, data, fields) {
  if (err) return next(console.error());
  res.status(200).json({
    status: "success",
    length: data?.length,
    data: data,
  });
});
};
