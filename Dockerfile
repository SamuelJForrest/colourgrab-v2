# Use an official Python runtime as a parent image
FROM python:3.8-slim

# Set the working directory to /colourgrab
WORKDIR /colourgrab

# Copy the requirements.txt file into the container at /colourgrab
COPY requirements.txt requirements.txt

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the current directory contents into the container at /colourgrab
COPY . /colourgrab

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Run app.py when the container launches
CMD ["flask", "run"]
