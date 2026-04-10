const getPort = require('get-port');
const { spawn } = require('child_process');

(async () => {
  const port = await getPort({ port: [3000, 3001, 3002, 3003, 3004] });

  console.log(`🚀 Starting app on port ${port}`);

  const child = spawn('npm', ['start-original'], {
    stdio: 'inherit',
    env: { ...process.env, PORT: port },
    shell: true
  });
})();