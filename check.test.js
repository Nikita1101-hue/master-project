const fs = require('fs');
test('Verify project file exists', () => {
    const dashboardExists = fs.existsSync('index.html');
    expect(dashboardExists).toBe(true);
});
