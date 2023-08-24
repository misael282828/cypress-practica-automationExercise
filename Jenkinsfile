stages {
    stage('Install Dependencies') {
        steps {
            sh 'npm install'
        }
    }
    
    stage('Run Tests') {
        steps {
            sh 'npm run test' // Esta línea ejecutará las pruebas de Cypress
        }
    }
    
    // stage('Generate and Open Allure Report') {
    //     steps {
    //         sh 'npx allure generate --clean'
    //         sh 'npx allure open'
    //     }
    // }
}
