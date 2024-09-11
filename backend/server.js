import { app } from "./app.js";
import { connectDB } from "./data/database.js";

connectDB();
console.log(process.env.port);
app.listen(4000, () => {
  console.log(`Server is working on port:${process.env.PORT} in ${process.env.NODE_ENV} Mode`);
});
