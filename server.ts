const server = Bun.serve({
  port: 3333,
  async fetch(req) {
    const url = new URL(req.url);
    const pathname = url.pathname;

    // Serve index.html for root path
    if (pathname === '/') {
      return new Response(Bun.file('./dist/index.html'), {
        headers: {
          'Content-Type': 'text/html',
        },
      });
    }

    // Serve static files from dist folder
    const filePath = `./dist${pathname}`;
    const file = Bun.file(filePath);

    // Check if file exists
    if (await file.exists()) {
      return new Response(file);
    }

    // For SPA routing, fallback to index.html
    return new Response(Bun.file('./dist/index.html'), {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  },
});

console.log(`Server running at http://localhost:${server.port}`);
