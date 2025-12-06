pipeline {
  agent {
    docker {
      image 'docker:24.0-dind'
      args '--privileged -v /var/lib/docker'
    }
  }

  environment {
    IMAGE = "simple-app"
    TAG = "v${env.BUILD_NUMBER}"
  }

  stages {

    stage('Start Docker Daemon') {
      steps {
        sh """
          dockerd-entrypoint.sh > /dev/null 2>&1 &
          sleep 5
        """
      }
    }

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
