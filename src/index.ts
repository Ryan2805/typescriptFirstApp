import morgan from "morgan";
import express, {Application, Request, Response} from "express" ;

const PORT = process.env.PORT || 3000;

const app: Application = express();


app.get("/ping", async (_req : Request, res: Response) => {
    res.send({
        message: "hello from Ryan",
        });
    });
    
     app.listen(PORT, () => {
        console.log("Server is running on port  --", PORT);
        });

 app.get("/bananas", async (_req : Request, res: Response) => 
    res.send('hello world, this is bananas too'));
 app.get("/water", async (_req : Request, res: Response) => 
    res.send('hello world, have a glass of water'));
 app.use(morgan("tiny"));