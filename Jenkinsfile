pipeline {
    agent any

    environment {
        // Replace with your Docker Hub username
        DOCKER_USER = 'your-dockerhub-username'
        IMAGE_NAME = 'devops-capstone-app'
        // This ID must match the Credential ID you create in Jenkins UI
        DOCKERHUB_CRED = 'dockerhub-credentials-id'
    }

    stages {
        stage('Clone Repository') {
            steps {
                checkout scm [cite: 17]
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${DOCKER_USER}/${IMAGE_NAME}:${BUILD_NUMBER} ." [cite: 21]
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: "${DOCKERHUB_CRED}", passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                    sh "echo \$PASS | docker login -u \$USER --password-stdin"
                    sh "docker push ${DOCKER_USER}/${IMAGE_NAME}:${BUILD_NUMBER}" [cite: 21]
                }
            }
        }

        stage('Deploy to AWS') {
            steps {
                echo 'Deploying to App EC2 Server...' [cite: 22]
                // We will add the specific SSH deployment command in Step 2
            }
        }
    }
}