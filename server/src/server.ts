import Express from "express";
import helloRoute from "../routes/helloRoute"

const app = Express();

app.use('/', helloRoute);

app.listen(3333, () => {
    console.log('runing')
})