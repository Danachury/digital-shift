pipeline {

   agent {
      docker {
         image 'node:12.16-alpine'
      }
   }

   stages {
      stage('Build') {
         steps {
            sh 'npm install'
         }
      }
   }

   stages {
      stage('Build') {
         steps {
            sh 'npm start'
         }
      }
   }
}
