const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Mock API Server' });
});

app.get('/api/wallets', (req, res) => {
    res.json([
        { type: 'USD Wallet', balance: 1500 },
        { type: 'ETH Wallet', balance: 2.5 },
    ]);
});

app.get('/api/transactions', (req, res) => {
    res.json([
        { id: 1, date: '2025-01-09', amount: '$500', status: 'Completed' },
        { id: 2, date: '2025-01-08', amount: '0.1 ETH', status: 'Pending' },
    ]);
});

app.post('/api/transactions', (req, res) => {
    const { amount, type } = req.body;
    res.json({ status: 'success', message: `Transaction of ${amount} (${type}) processed.` });
});

app.get('/api/customers', (req, res) => {
    res.json([
        { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    ]);
});

app.listen(PORT, () => {
    console.log(`Mock API server is running on http://localhost:${PORT}`);
});