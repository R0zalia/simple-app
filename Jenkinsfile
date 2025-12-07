pipeline {
  agent any

  environment {
    IMAGE = "simple-app"
    TAG = "v${env.BUILD_NUMBER}"
  }

  stages {

    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build Docker Image') {
      steps {
        sh """
          docker build -t ${IMAGE}:${TAG} .
        """
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        sh """
          # Install kubectl inside the Jenkins runtime container
          echo "Installing kubectl..."
          apt-get update -y && apt-get install -y curl

          curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
          chmod +x kubectl
          mv kubectl /usr/local/bin/kubectl

          echo "Kubectl installed. Deploying..."

          kubectl set image deployment/simple-app simple-app=${IMAGE}:${TAG} --record
        """
      }
    }
  }

  post {
    success {
      echo "Pipeline executed successfully!"
    }
  }
}
