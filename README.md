DevOps Capstone: Automated Deployment & Infrastructure Monitoring
Project Overview:
This project demonstrates a complete End-to-End DevOps Lifecycle. It automates the process of taking application source code, containerizing it with Docker, deploying it to AWS via a Jenkins CI/CD pipeline, and monitoring the infrastructure's health in real-time using Prometheus and Grafana.

Tech Stack:
Source Control: GitHub

CI/CD: Jenkins

Containerization: Docker & Docker Hub

Cloud: AWS EC2

Monitoring: Prometheus & Grafana

Automation: Bash Scripting & Cron Jobs

CI/CD Pipeline Flow:
Code Push: Developer pushes code to the main branch.

Jenkins Trigger: Jenkins detects the push and starts the pipeline.

Build: Jenkins creates a Docker image using the Dockerfile.

Push: The image is pushed to Docker Hub (harishdockeremc/devops-capstone).

Deploy: Jenkins SSHs into the AWS App Server and runs the new container.

Monitor: Prometheus scrapes hardware metrics, visualized via Grafana.

Infrastructure Monitoring:
The project monitors two nodes using Node Exporter:

Jenkins Server: 43.204.29.238:9100

App Server: 172.31.43.55:9100

You can view live CPU, RAM, and Disk metrics by switching between instances in the Grafana dashboard.

Setup & Run Instructions:
1. Prerequisites
AWS EC2 instances (Ubuntu).

Docker and Jenkins installed on the host.

Node Exporter running on port 9100 for all targets.

2. Local Build
To build and run the application locally:

docker build -t devops-capstone .
docker run -d -p 80:80 devops-capstone

3. Maintenance Automation
A scheduled task runs daily to clean up logs and backup the application:

# Run manually to test
./maintenance.sh

The backup is saved as app_backup_YYYY-MM-DD.tar.gz in the home directory.

Project Final Verification
Docker Hub Repository: harishdockeremc/devops-capstone

Monitoring Status: 2/2 Targets UP
