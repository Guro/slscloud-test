import { api, data } from "@serverless/cloud";

// Create GET route and return users
api.get("/api/users", async (req, res) => {
    // Get users from Serverless Data
    let result = await data.get("user:*", true);
    // Return the results
    res.send({
        users: result.items,
    });
});


api.post("/api/users", async (req, res) => {
    console.log('POST API/USERS')
    await data.set(`user:${req.body.name}`, req.body.data);
    res.send({
        hello:"world",
        body:req.body
    })
});

api.post("/api/users/delete", async (req, res) => {
    console.log('DELETE API/USERS')
    await data.remove(`user:${req.body.name}`);
    res.send({
        name:req.body.name,
        status:200
    })
});

// Catch all for missing API routes
api.get("/api/*", (req, res) => {
    console.log(`404 - api`);
    res.status(404).send({ error: "not found" });
});

// Catch all for React SPA routes
// api.get("/*", (req, res) => {
    // // console.log(`404 - loading index.html`);
    // res.sendFile(`${process.cwd()}/static/index.html`);
// });
