// Simple server test script to isolate issues
const express = require('express');
const app = express();
const PORT = 5001; // Use different port to avoid conflicts

app.use(express.json());

app.get('/test', (req, res) => {
  console.log('📝 Test endpoint hit at:', new Date().toISOString());
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    pid: process.pid
  });
});

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`🧪 Test server running on port ${PORT}`);
  console.log(`📊 Test endpoint: http://localhost:${PORT}/test`);
  console.log(`🔍 PID: ${process.pid}`);
});

// Enhanced signal handling for debugging
process.on('SIGINT', () => {
  console.log('🛑 Test server received SIGINT');
  console.log('📍 PID:', process.pid);
  console.log('⏰ Uptime:', process.uptime(), 'seconds');
  console.log('🔍 Memory usage:', process.memoryUsage());
  
  server.close(() => {
    console.log('✅ Test server closed');
    process.exit(0);
  });
});

process.on('SIGTERM', () => {
  console.log('🛑 Test server received SIGTERM');
  server.close(() => {
    console.log('✅ Test server closed via SIGTERM');
    process.exit(0);
  });
});

// Log any errors
process.on('uncaughtException', (err) => {
  console.error('🚨 Uncaught Exception in test server:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('🚨 Unhandled Rejection in test server:', reason);
});

console.log('🏁 Test server started, waiting for connections...');