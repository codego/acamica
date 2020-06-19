import app from "./server/App";
import conn from "./database"

const port = process.env.PORT || 3031

app.listen(port, () => {
    console.log(`StudentAPI is running and ready to receive your magic. http://localhost:${port}`)
});

conn.then(connection => console.log('Success DB Connect.'))
    .catch(err => console.error(err));
