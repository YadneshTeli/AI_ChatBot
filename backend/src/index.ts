import { error } from "console";
import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

//connections and listeners
const PORT=process.env.PORT
connectToDatabase()
  .then(() => {
    app.listen(PORT, () =>
      console.log("Server open & Connected To Database👍")
    );
  })
  .catch((err) => console.log(err));

