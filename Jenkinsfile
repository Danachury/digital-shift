pipeline {

   agent {
      docker {
         image 'node:12.16-alpine'
      }
   }

   stages {
      stage('Install Dependencies') {
         steps {
            sh 'npm install'
         }
      }

      stage('Start Server') {
         steps {
            sh 'npm start'
         }
      }
   }
}
