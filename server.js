const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql")
var cors = require('cors')
const app = express();

app.use(cors())


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var connection = mysql.createConnection({
  host     : 'localhost', 
  user     : 'root', 
  password : 'your new password', 
  database : 'fruits' 
});


app.get('/api/fruits', function (req, res) {
  connection.query('select * from fruits', function (error, results, fields) {
   if (error) throw error;
   res.send(JSON.stringify(results));
 });
});

app.get('/api/fruits/:id', function (req, res) {
  connection.query('select * from fruits where Id=?', [req.params.id], function (error, results, fields) {
   if (error) throw error;
   res.send(JSON.stringify(results));
 });
});

app.patch('api/fruit', function (req, res) {
  connection.query('UPDATE `fruits` SET `likes`=?,` where `Id`=?', [req.body.likes,req.body.Id], function (error, results, fields) {
   if (error) throw error;
   res.send(JSON.stringify(results));
 });
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});




// CREATE TABLE `fruits` (
// 	`id` SMALLINT NOT NULL,
// 	`name` VARCHAR(40) NOT NULL,
// 	`description` VARCHAR(300) NOT NULL,
// 	`img` VARCHAR(300) NOT NULL,
// 	`likes` MEDIUMINT NOT NULL,
// 	PRIMARY KEY (`id`)
// );


// INSERT INTO `fruits` (`id`, `name`, `description`, `img`,`likes`) VALUES
// (1, 'Mango', 'best served in the phillipines', 'https://images.all-free-download.com/images/graphicthumb/mango_191420.jpg', 0),
// (2, 'Orange', 'a delicious sweet treat', 'https://images.all-free-download.com/images/graphicthumb/orange_highdefinition_picture_167223.jpg', 0),
// (3, 'Apple', 'nice and crisp', 'https://images.all-free-download.com/images/graphicthumb/apple_and_the_hand_of_03_hq_pictures_168094.jpg', 0),
// (4, 'Papaya', 'not for me ', 'https://images.all-free-download.com/images/graphiclarge/papaya_tropical_fruit_pawpaw_274872.jpg', 0),
// (5, 'Lenzones', 'my favorite fruit!', 'https://images.all-free-download.com/images/graphiclarge/fruitsalad_dock_icons_icons_pack_120998.jpg', 0),
// (6, 'Kiwi', 'tart but good', 'https://images.all-free-download.com/images/graphicthumb/kiwi_97858.jpg', 0),
// (7, 'Mangosteen', 'a small but interesting choice', 'https://images.all-free-download.com/images/graphiclarge/freshy_icons_icons_pack_120953.jpg', 0),
// (8, 'Pinapple', 'one of the best', 'https://images.all-free-download.com/images/graphicthumb/fruits_icons_icons_pack_120514.jpg', 0),
// (9, 'Melon', 'depends on the melon', 'https://images.all-free-download.com/images/graphicthumb/water_melon_91704.jpg', 0),
// (10, 'Pear', 'pretty solid fruit', 'https://images.all-free-download.com/images/graphicthumb/pear_97863.jpg', 0);
