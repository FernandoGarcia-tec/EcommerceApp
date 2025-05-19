import express from 'express';
import App from './Services/ExpressApp';
import DbCon from './Services/Database';
import { PORT } from './config';

const StarServer = async () => {
    const app = express();
    await DbCon();
    await App(app);

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

StarServer();