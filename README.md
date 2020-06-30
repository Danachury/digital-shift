# Digital Shift Introduction
Web Software that can provide Digital shifts.

Developed in NodeJs, this project contains an example to describe how works  Continue Integration.

# Start in dev mode
We Assume that [NodeJs](https://nodejs.org) is installed in your machine.

Install dependencies:
```
npm install
```

Start server:
```
npm start
```

Start server in DEV mode (this command restart server when detect any change on source code):
```
npm run start-dev
```

To stop server you should use ``CTRL+C`` command

# Unit Tests
```
npm test
```

# Docker
Run application with Docker if you need <b>Simulate or Build an image for Production Environment</b>.

<b>Note:</b> Please run next commands in the project route. 

## Build Image
```
docker build -t digital-shift .
```

## Run built Image container
```
docker run -d --name digital-shift -p 3000:3000 digital-shift
```

## View logs
```
docker logs -f digital-shift
```

## Delete built Image
```
docker rm -f digital-shift;
docker rmi -f digital-shift
```

## Run Jenkins
```
sh ./run-jenkins.sh
```
