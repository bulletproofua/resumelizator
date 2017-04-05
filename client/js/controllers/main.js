angular
    .module('app')
    .controller('allUsers', [ '$scope' ,'Applicant',function($scope, Applicant){
        $scope.Users = Applicant.find();  

        // $scope.ApplicantSkills = Applicant.findById({id: 1})
        // $scope.ApplicantSkills = $scope.Users;
        // console.log($scope.Users);
        // $scope.WORKPLZ = function (value) {
        //     var a =  Applicant.findById({id: value});
        //     return a;
        // };      
    }])
    .controller('UserInfo', [ '$scope' ,'Applicant', '$stateParams',function($scope, Applicant,$stateParams){    
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
    .controller('topThreeSkills', [ '$scope' ,'Applicant', '$stateParams',function($scope, Applicant, $stateParams){ 
        $scope.topSkills =  Applicant.topThreeSkills( {id : $stateParams.id});
    }])
    .controller('topTenSkills', [ '$scope' ,'Applicant',function($scope, Applicant){       
        $scope.Skills =  Applicant.topTenSkills();
    }]);

