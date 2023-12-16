# Use an official Python runtime as a parent image
FROM python:3.8-slim AS env

# Set the working directory to /colourgrab
WORKDIR /colourgrab

# Copy the .env file to the image
COPY .env .env

# Define environment variables from .env
ARG PORT
ARG DEVELOPMENT
ENV PORT=$PORT
ENV DEVELOPMENT=$DEVELOPMENT

# Use a separate stage for the final image
FROM python:3.8-slim

# Set the working directory to /colourgrab
WORKDIR /colourgrab

# Copy only the necessary files from the env stage
COPY --from=env /colourgrab/.env .env

# Copy the current directory contents into the container at /colourgrab
COPY . /colourgrab

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Make the specified port available to the world outside this container
EXPOSE $PORT

# Run app.py when the container launches
CMD ["python", "app.py"]
