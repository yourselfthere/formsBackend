import express, { Request, Response } from "express";
import * as fs from "fs";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

// Adding body parser
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

// Ping endpoint
app.get("/ping", (req: Request, res: Response) => {
  res.json({ success: true });
});

// Submit endpoint
app.post("/submit", (req: Request, res: Response) => {
  const { name, email, phone, github_link, stopwatch_time } = req.body;
  console.log(name);

  // Validate input
  if (!name || !email || !phone || !github_link || !stopwatch_time) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Create the file if it doesn't exist and append to it without reading the file
  const newSubmission = {
    name,
    email,
    phone,
    github_link,
    stopwatch_time,
  };

  // Check if the file exists
  if (!fs.existsSync("db.json")) {
    // Create the file and write the new submission
    fs.writeFileSync("db.json", JSON.stringify([newSubmission], null, 2));
  } else {
    // Append the new submission to the existing file
    const submissions = JSON.parse(fs.readFileSync("db.json", "utf8"));
    submissions.push(newSubmission);
    fs.writeFileSync("db.json", JSON.stringify(submissions, null, 2));
  }

  res.json({ success: true });
});

// Read endpoint
app.get("/read", (req: Request, res: Response) => {
  const index = parseInt(req.query.index as string); // Get the index parameter from the query string
  fs.readFile("db.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    const submissions = JSON.parse(data); // Parse JSON data from db.json file
    if (!isNaN(index) && index >= 0 && index < submissions.length) {
      res.json(submissions[index]); // Return the submission at the specified index as JSON
    } else {
      res.status(400).json({ error: "Invalid index" }); // Return an error if the index is invalid
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
