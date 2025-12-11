Simple App – Full CI/CD Pipeline with Jenkins, Docker & Kubernetes

This project implements a complete CI/CD pipeline using Jenkins (running on port 8083), Docker, and Kubernetes.
The automated pipeline performs:

Checkout from GitHub

Build Docker image (simple-app:v21)

Deploy updated version to Kubernetes

Trigger rolling update

Verify new pod rollout

📁 Project Structure
project/
├── app/
├── docker-compose.yml
├── kubernetes/
├── Jenkinsfile
└── README.md

🛠️ Technologies Used

Node.js

Docker

Docker Compose

Kubernetes (kubectl)

Jenkins Pipeline (port 8083)

YAML Deployment Manifests

Docker Instructions
Build Image

You built your Docker image locally using:

docker build -t simple-app:v21 .

Run Using Docker Compose

(Used for local testing)

docker-compose up -d

☸ Kubernetes Deployment
Apply Kubernetes Manifests
kubectl apply -f kubernetes/deployment.yaml
kubectl apply -f kubernetes/service.yaml

Check Running Pods
kubectl get pods


Expected output example:

simple-app-6d7fbd7cc7-xyz12   1/1   Running   0     5s

Update Deployment (Jenkins uses this)

Your Jenkins pipeline uses:

kubectl set image deployment/simple-app simple-app=simple-app:v21 --record

🚀 Jenkins CI/CD Pipeline
Access Jenkins
http://localhost:8083

Jenkins Pipeline Performs

Clone code from GitHub

Build Docker image

Use the local Docker socket

Deploy to Kubernetes using kubectl

Verify pod rollout

Commands Executed Inside Jenkins Pipeline
docker build -t simple-app:v21 .
kubectl set image deployment/simple-app simple-app=simple-app:v21 --record
kubectl get pods



Verification

After each commit:

Jenkins auto-builds a new Docker image (new tag like v21).

Deployment is updated via Kubernetes.

A new pod is created with the updated image.

Run the following to verify the rollout:

kubectl get pods -o wide


A new pod with STATUS: Running confirms success.
