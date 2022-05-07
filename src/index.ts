import { app } from './app'
import { AppDataSource } from './db/data-source';

AppDataSource.initialize().then(() => {
  console.log("MongoDB is working")
}).catch(error => console.log(error))

app.listen(3000, () => console.log("Server is running"));