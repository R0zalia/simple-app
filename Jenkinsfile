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
