# First stage builds the application
FROM registry.access.redhat.com/ubi8/nodejs-14 as builder
# Add application sources
ADD src/app.js $HOME/app.js
ADD src/modules $HOME/modules
ADD src/package.json $HOME/package.json
# Install the dependencies
RUN npm install
# Second stage copies the application to the minimal image
FROM registry.access.redhat.com/ubi8/nodejs-14-minimal
# Copy the application source and build artifacts from the builder image to this one
COPY --from=builder $HOME $HOME
# Run script uses standard ways to run the application
CMD npm run -d start
