let express = require("express");
let app = express();
let path = require("path");
let method_override = require("method-override");

let rutas_generales = require("./src/rutas/rutas_generales");

app.use(express.static(path.resolve(__dirname,"./public")));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(method_override("_method"));

app.use("/",rutas_generales);
app.set("view engine","ejs");

app.listen(process.env.PORT || 3000,()=> {console.log("servidor corriendo")});
