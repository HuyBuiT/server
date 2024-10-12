import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { createCollection, getBalance, getCollection, mintToken } from './service/index.js';

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(compression());
app.use(cookieParser());
app.use(cors());

// Routes
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, world!');
});

// Define the /api/balance endpoint
app.get('/api/balance', async (req: Request, res: any) => {
    const address = req.query.address as string;

    if (!address) {
        return res.status(400).json({ error: 'Address is required' });
    }

    try {
        const balance = await getBalance(address);
        return res.json({ address, balance });
    } catch (error) {
        console.error('Error fetching balance:', error);
        return res.status(500).json({ error: 'Failed to fetch balance' });
    }
});

app.get('/api/create-collection', async (req: Request, res: any) => {
    const address = req.query.address as string;
    const collectionId = req.query.collectionId;
    if (collectionId) {
        const collection = await getCollection(address,Number(collectionId));
        return res.json({collection});
    }
    if (!address) {
        return res.status(400).json({ error: 'Address is required' });
    }

    try {
        const collection = await createCollection(address);
        return res.json({ address, collection });
    } catch (error) {
        console.error('Error create collection:', error);
        return res.status(500).json({ error: 'Failed to create collection' });
    }
});

app.get('/api/mint-token', async (req: Request, res: any) => {
    const address = req.query.address as string;
    const collectionId = req.query.collectionId;
    if (!address) {
        return res.status(400).json({ error: 'Address is required' });
    }

    try {
        const collection = await mintToken(address,Number(collectionId));
        return res.json({ address, collection });
    } catch (error) {
        console.error('Error mint token:', error);
        return res.status(500).json({ error: 'Failed to mint token' });
    }
});
// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
