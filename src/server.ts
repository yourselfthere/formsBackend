// import express, { Request, Response } from "express";
// import * as fs from "fs";
// import bodyParser from "body-parser";

// const app = express();
// const PORT = 3000;

// // Adding body parser
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: false }));

// // Ping endpoint
// app.get("/ping", (req: Request, res: Response) => {
//   res.json({ success: true });
// });

// // Submit endpoint
// app.post("/submit", (req: Request, res: Response) => {
//   const { name, email, phone, github_link, stopwatch_time } = req.body;
//   console.log(name);

//   // Validate input
//   if (!name || !email || !phone || !github_link || !stopwatch_time) {
//     return res.status(400).json({ error: "All fields are required." });
//   }

//   // Create the file if it doesn't exist and append to it without reading the file
//   const newSubmission = {
//     name,
//     email,
//     phone,
//     github_link,
//     stopwatch_time,
//   };

//   // Check if the file exists
//   if (!fs.existsSync("db.json")) {
//     // Create the file and write the new submission
//     fs.writeFileSync("db.json", JSON.stringify([newSubmission], null, 2));
//   } else {
//     // Append the new submission to the existing file
//     const submissions = JSON.parse(fs.readFileSync("db.json", "utf8"));
//     submissions.push(newSubmission);
//     fs.writeFileSync("db.json", JSON.stringify(submissions, null, 2));
//   }

//   res.json({ success: true });
// });

// // Read endpoint
// app.get("/read", (req: Request, res: Response) => {
//   const index = parseInt(req.query.index as string); // Get the index parameter from the query string
//   fs.readFile("db.json", "utf8", (err, data) => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ error: "Internal server error" });
//       return;
//     }
//     const submissions = JSON.parse(data); // Parse JSON data from db.json file
//     if (!isNaN(index) && index >= 0 && index < submissions.length) {
//       res.json(submissions[index]); // Return the submission at the specified index as JSON
//     } else {
//       res.status(400).json({ error: "Invalid index" }); // Return an error if the index is invalid
//     }
//   });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// import express, { Request, Response } from "express";
// import * as fs from "fs";
// import bodyParser from "body-parser";

// const app = express();
// const PORT = 3000;

// // Adding body parser
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: false }));

// // Ping endpoint
// app.get("/ping", (req: Request, res: Response) => {
//   res.json({ success: true });
// });

// // Submit endpoint
// app.post("/submit", (req: Request, res: Response) => {
//   const { name, email, phone, github_link, stopwatch_time } = req.body;
//   console.log(name);

//   // Validate input
//   if (!name || !email || !phone || !github_link || !stopwatch_time) {
//     return res.status(400).json({ error: "All fields are required." });
//   }

//   // Create the file if it doesn't exist and append to it without reading the file
//   const newSubmission = {
//     name,
//     email,
//     phone,
//     github_link,
//     stopwatch_time,
//   };

//   // Check if the file exists
//   if (!fs.existsSync("db.json")) {
//     // Create the file and write the new submission
//     fs.writeFileSync("db.json", JSON.stringify([newSubmission], null, 2));
//   } else {
//     // Append the new submission to the existing file
//     const submissions = JSON.parse(fs.readFileSync("db.json", "utf8"));
//     submissions.push(newSubmission);
//     fs.writeFileSync("db.json", JSON.stringify(submissions, null, 2));
//   }

//   res.json({ success: true });
// });

// // Read endpoint
// app.get("/read", (req: Request, res: Response) => {
//   const index = parseInt(req.query.index as string); // Get the index parameter from the query string
//   fs.readFile("db.json", "utf8", (err, data) => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ error: "Internal server error" });
//       return;
//     }
//     const submissions = JSON.parse(data); // Parse JSON data from db.json file
//     if (!isNaN(index) && index >= 0 && index < submissions.length) {
//       res.json(submissions[index]); // Return the submission at the specified index as JSON
//     } else {
//       res.status(400).json({ error: "Invalid index" }); // Return an error if the index is invalid
//     }
//   });
// });

// // Delete endpoint
// app.delete("/delete", (req: Request, res: Response) => {
//   const index = parseInt(req.query.index as string); // Get the index parameter from the query string
//   if (isNaN(index)) {
//     return res.status(400).json({ error: "Invalid index" });
//   }

//   fs.readFile("db.json", "utf8", (err, data) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ error: "Internal server error" });
//     }
//     const submissions = JSON.parse(data); // Parse JSON data from db.json file

//     if (index < 0 || index >= submissions.length) {
//       return res.status(400).json({ error: "Invalid index" });
//     }

//     // Remove the submission at the specified index
//     submissions.splice(index, 1);

//     // Write the updated submissions back to the JSON file
//     fs.writeFileSync("db.json", JSON.stringify(submissions, null, 2));

//     res.json({ success: true });
//   });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// import express, { Request, Response } from "express";
// import * as fs from "fs";
// import bodyParser from "body-parser";

// const app = express();
// const PORT = 3000;

// // Adding body parser
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: false }));

// // Ping endpoint
// app.get("/ping", (req: Request, res: Response) => {
//   res.json({ success: true });
// });

// // Submit endpoint
// app.post("/submit", (req: Request, res: Response) => {
//   const { name, email, phone, github_link, stopwatch_time } = req.body;
//   console.log(name);

//   // Validate input
//   if (!name || !email || !phone || !github_link || !stopwatch_time) {
//     return res.status(400).json({ error: "All fields are required." });
//   }

//   // Create the file if it doesn't exist and append to it without reading the file
//   const newSubmission = {
//     name,
//     email,
//     phone,
//     github_link,
//     stopwatch_time,
//   };

//   // Check if the file exists
//   if (!fs.existsSync("db.json")) {
//     // Create the file and write the new submission
//     fs.writeFileSync("db.json", JSON.stringify([newSubmission], null, 2));
//   } else {
//     // Append the new submission to the existing file
//     const submissions = JSON.parse(fs.readFileSync("db.json", "utf8"));
//     submissions.push(newSubmission);
//     fs.writeFileSync("db.json", JSON.stringify(submissions, null, 2));
//   }

//   res.json({ success: true });
// });

// // Read endpoint
// app.get("/read", (req: Request, res: Response) => {
//   const index = parseInt(req.query.index as string); // Get the index parameter from the query string
//   fs.readFile("db.json", "utf8", (err, data) => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ error: "Internal server error" });
//       return;
//     }
//     const submissions = JSON.parse(data); // Parse JSON data from db.json file
//     if (!isNaN(index) && index >= 0 && index < submissions.length) {
//       res.json(submissions[index]); // Return the submission at the specified index as JSON
//     } else {
//       res.status(400).json({ error: "Invalid index" }); // Return an error if the index is invalid
//     }
//   });
// });

// // Delete endpoint
// app.delete("/delete", async (req: Request, res: Response) => {
//   const index = parseInt(req.query.index as string);
//   if (isNaN(index) || index < 0) {
//     return res.status(400).json({ error: "Invalid index" });
//   }

//   try {
//     const data = await fs.promises.readFile("db.json", "utf8");
//     const submissions = JSON.parse(data);

//     if (index >= submissions.length) {
//       return res.status(400).json({ error: "Invalid index" });
//     }

//     submissions.splice(index, 1);
//     await fs.promises.writeFile(
//       "db.json",
//       JSON.stringify(submissions, null, 2)
//     );

//     res.json({ success: true });
//   } catch (error) {
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// // Search by email endpoint
// app.get("/search", (req: Request, res: Response) => {
//   const email = req.query.email as string;
//   if (!email) {
//     return res.status(400).json({ error: "Email parameter is required" });
//   }

//   fs.readFile("db.json", "utf8", (err, data) => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ error: "Internal server error" });
//       return;
//     }
//     const submissions = JSON.parse(data); // Parse JSON data from db.json file
//     const result = submissions.find(
//       (submission: any) => submission.email === email
//     );
//     if (result) {
//       res.json(result); // Return the found submission as JSON
//     } else {
//       res.status(404).json({ error: "Submission not found" });
//     }
//   });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

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

// Delete endpoint
app.delete("/delete", async (req: Request, res: Response) => {
  const index = parseInt(req.query.index as string);
  if (isNaN(index) || index < 0) {
    return res.status(400).json({ error: "Invalid index" });
  }

  try {
    const data = await fs.promises.readFile("db.json", "utf8");
    const submissions = JSON.parse(data);

    if (index >= submissions.length) {
      return res.status(400).json({ error: "Invalid index" });
    }

    submissions.splice(index, 1);
    await fs.promises.writeFile(
      "db.json",
      JSON.stringify(submissions, null, 2)
    );

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Search by email endpoint
app.get("/search", (req: Request, res: Response) => {
  const email = req.query.email as string;
  if (!email) {
    return res.status(400).json({ error: "Email parameter is required" });
  }

  fs.readFile("db.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    const submissions = JSON.parse(data); // Parse JSON data from db.json file
    const result = submissions.find(
      (submission: any) => submission.email === email
    );
    if (result) {
      res.json(result); // Return the found submission as JSON
    } else {
      res.status(404).json({ error: "Submission not found" });
    }
  });
});

// Edit submission endpoint
app.put("/edit", async (req: Request, res: Response) => {
  const index = parseInt(req.query.index as string);
  if (isNaN(index) || index < 0) {
    return res.status(400).json({ error: "Invalid index" });
  }

  const { name, email, phone, github_link, stopwatch_time } = req.body;
  if (!name || !email || !phone || !github_link || !stopwatch_time) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const data = await fs.promises.readFile("db.json", "utf8");
    const submissions = JSON.parse(data);

    if (index >= submissions.length) {
      return res.status(400).json({ error: "Invalid index" });
    }

    submissions[index] = { name, email, phone, github_link, stopwatch_time };
    await fs.promises.writeFile(
      "db.json",
      JSON.stringify(submissions, null, 2)
    );

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
