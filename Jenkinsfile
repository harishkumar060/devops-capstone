pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDS = 'docker-hub-credentials'
        APP_SERVER_SSH = 'app-server-ssh'
        DOCKER_IMAGE = 'harishdockeremc/devops-capstone'
        APP_SERVER_IP = '13.201.48.204'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
    steps {
        // We use the absolute path /usr/bin/docker to bypass "Command Not Found"
        sh "/usr/bin/docker build -t ${DOCKER_IMAGE}:${BUILD_NUMBER} ."
        sh "/usr/bin/docker tag ${DOCKER_IMAGE}:${BUILD_NUMBER} ${DOCKER_IMAGE}:latest"
    }
}

stage('Push to Docker Hub') {
    steps {
        withCredentials([usernamePassword(credentialsId: "${DOCKER_HUB_CREDS}", passwordVariable: 'PASS', usernameVariable: 'USER')]) {
            // Pointing directly to the binary here as well
            sh "echo ${PASS} | /usr/bin/docker login -u ${USER} --password-stdin"
            sh "/usr/bin/docker push ${DOCKER_IMAGE}:${BUILD_NUMBER}"
            sh "/usr/bin/docker push ${DOCKER_IMAGE}:latest"
        }
    }
}

        stage('Deploy to App Server') {
            steps {
                sshagent([ "${APP_SERVER_SSH}" ]) {
                    sh "ssh -o StrictHostKeyChecking=no ubuntu@${APP_SERVER_IP} 'docker pull ${DOCKER_IMAGE}:latest'"
                    sh "ssh -o StrictHostKeyChecking=no ubuntu@${APP_SERVER_IP} 'docker stop capstone-app || true'"
                    sh "ssh -o StrictHostKeyChecking=no ubuntu@${APP_SERVER_IP} 'docker rm capstone-app || true'"
                    sh "ssh -o StrictHostKeyChecking=no ubuntu@${APP_SERVER_IP} 'docker run -d --name capstone-app -p 3000:3000 ${DOCKER_IMAGE}:latest'"
                }
            }
        }
    }
}
