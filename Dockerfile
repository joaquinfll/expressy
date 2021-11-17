# First stage builds the application
FROM registry.access.redhat.com/ubi8/nodejs-14 as builder
# Add application sources
ADD src/app.js .
ADD src/modules .
ADD src/package*.json .
# Install the dependencies
RUN npm install
# Second stage copies the application to the minimal image
FROM registry.access.redhat.com/ubi8/nodejs-14-minimal
# Copy the application source and build artifacts from the builder image to this one
COPY --from=builder $HOME $HOME
# Run script uses standard ways to run the application
CMD npm run -d start