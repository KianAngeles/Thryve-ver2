
require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to database
connectDB(MONGO_URI);

// Start server
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🔍 Status endpoint: http://localhost:${PORT}/api/status`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});

// Handle server errors
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is already in use`);
    process.exit(1);
  } else {
    console.error('❌ Server error:', err);
  }
});

// Enhanced error handling
process.on('uncaughtException', (err) => {
  console.error('🚨 Uncaught Exception:', err);
  console.error('Stack:', err.stack);
  // Don't exit immediately, log the error first
  setTimeout(() => process.exit(1), 1000);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('🚨 Unhandled Rejection at:', promise, 'reason:', reason);
  // Don't exit, just log the error
});

// Log when various signals are received
process.on('SIGTERM', () => {
  console.log('🛑 SIGTERM received (external termination request), shutting down gracefully');
  server.close(() => {
    console.log('✅ Process terminated via SIGTERM');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('🛑 SIGINT received (Ctrl+C or external interrupt), shutting down gracefully');
  console.log('📍 PID:', process.pid);
  console.log('⏰ Uptime:', process.uptime(), 'seconds');
  server.close(() => {
    console.log('✅ Process terminated via SIGINT');
    process.exit(0);
  });
});

// Log process info for debugging
console.log('🔍 Process PID:', process.pid);
console.log('🔍 Node version:', process.version);
console.log('🔍 Platform:', process.platform);
