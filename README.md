
# BackEnd Code For Desktop app

In order for our forms desktop app to work properly we first need our backend server up and running.


## Run Locally

Clone the project
- Clone it using the url of the repo 
- or you can download the zip file also 
- The folder containing the code would be 'formsBackend-main'
```bash
  git clone https://github.com/yourselfthere/formsBackend.git
```

Go to the project directory:
-Go to the project directory according to your relative or absolute path

```bash
  cd formsBackend-main
```

Install dependencies

```bash
  npm install
```

Starting the server: After installing the proper dependencies run the
code in order to open the src directory 

```bash
  cd src
```

Start the Server: 

```bash
  ts-node server.ts
```


This will get the backend server running.

We have a 'db.json' file already in the 'src' directory containing 
some data in order viewSubmissions.
Delete , Edit , Search by email functionalities were added.
