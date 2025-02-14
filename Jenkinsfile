pipeline {
    agent any

    environment {
        IMAGE_NAME = "my-docker-app"
        CONTAINER_NAME = "my-app-container"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/your-username/docker-jenkins-deployment.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true
                docker run -d --name $CONTAINER_NAME -p 8080:80 $IMAGE_NAME
                '''
            }
        }
    }
}
