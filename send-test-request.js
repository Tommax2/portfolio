import fetch from 'node-fetch';

const testData = {
    firstname: "Test",
    lastname: "User",
    email: "test@example.com",
    phone: "1234567890",
    message: "This is a test message from the automated script."
};

async function runTest() {
    try {
        console.log("Sending test request to http://localhost:5000/contact...");
        const response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(testData),
        });

        const result = await response.json();
        console.log("Response status:", response.status);
        console.log("Response body:", result);
    } catch (error) {
        console.error("Error during test:", error);
    }
}

runTest();
