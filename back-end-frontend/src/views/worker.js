self.addEventListener('message', function(e) {
  console.log('Worker received message:', e.data);
  self.postMessage(e.data);
});
self.addEventListener('error', function(e) {
  console.error('Worker error:', e.message, 'at', e.filename, ':', e.lineno);
});