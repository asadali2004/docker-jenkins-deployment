pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/asadali2004/docker-jenkins-deployment.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t my-app:latest .'
            }
        }
        stage('Run Docker Container') {
    steps {
        script {
            // Stop and remove the existing container (ignore errors if not found)
            sh 'docker stop my-app-container || true'
            sh 'docker rm my-app-container || true'

            // Run the new container
            sh 'docker run -d -p 3000:3000 --name my-app-container my-app:latest'
        }
    }
}

    }
}

