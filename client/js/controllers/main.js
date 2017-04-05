angular
    .module('app')

    // .controller('AllUsers', ['$scope', 'applicant', function($scope , applicant){
    //     $scope.Users = applicant.find();
    // }])

    .controller('allUsers', [ '$scope' ,'Applicant',function($scope, Applicant){
        //  $scope.allUsersName = ["123", "345", "678"];

        $scope.Users = Applicant.find();  
        // $scope.Users.id
        // $scope.ApplicantSkills = Applicant.findById({id: 1})


        // $scope.ApplicantSkills = $scope.Users;
        // console.log($scope.Users);
        // $scope.WORKPLZ = function (value) {
        //     var a =  Applicant.findById({id: value});
        //     return a;
        // };
       
 
    }])
    .controller("Name", ['$scope', function($scope){
        $scope.Name = ["Vadim", "Yurii", "Petro"];
    }])

    .controller('GreetingController', ['$scope', function($scope) {
        $scope.greeting = 'Hola!';
    }])

// {"include": { "relation": "employmentSkills"}}
// {"where":{ "applicantId": "2"}}
    .controller('UserInfo', [ '$scope' ,'Applicant', '$stateParams',function($scope, Applicant,$stateParams){    
        console.log($stateParams.id );   

        $scope.ApplicantInfo = Applicant.find({
             filter: {
                where: {
                    id: $stateParams.id
                },
                 include: [ { relation: 'education' } , { relation: 'employments'} ] 
             }
         }
        );
    }])  
                //  scope: {
                //     include: { relation: 'employments'}
                //  }
                    //  include: { relation: 'employments' }
                    //  include: { relation: 'education' ,scope: { where: { applicantId: $stateParams.id } } }
    .controller('topTenSkills', [ '$scope' ,'Applicant',function($scope, Applicant){       
        $scope.Skills =  Applicant.topTenSkills();
    }]);

