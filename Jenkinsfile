pipeline {
    agent any // O el agente que quieras usar
    
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run' // Comando para ejecutar pruebas Cypress
            }
        }
    }
}
