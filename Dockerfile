#Specify the base image
FROM node:20-alpine

#Create working directory on the container
WORKDIR /usr/src/app

#Copy package.json and package-lock.json files to enable installation of dependencies
COPY package*.json ./

#Install required dependencies
RUN npm install --production

#Copy the rest of the application files into the working directory of the container
COPY . .

#Expose the port on which the app will run
EXPOSE 3000

#Provide command to run the application
CMD ["npm","run", "dev"]