import Express from "express";
import createUser from "../routes/createUser"
import searchUser from "../routes/searchUser"

const app = Express();

app.use('/user', createUser);

app.use('/user', searchUser);

app.listen(3333, () => {
    console.log('runing')
})