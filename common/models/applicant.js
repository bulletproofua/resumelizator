'use strict';

// var SkillM = require("./skill");
module.exports = function(Applicant) {


    Applicant.topTenSkills = function(cb) {
        var filter = {
            include: {
                relation: "applicants"
            }
        };
// {"include": { "relation": "employmentSkills"}}
// {"where":{ "id": "1"}}
    Applicant.app.models.Skill.find( filter, function(err, result){
        if(err){
            console.log(err);
        }  
        if(!err){          
            var array = new Array();

            for(var i = 0; i < result.length; i++){
                var skill = result[i].toJSON();
                array.push({ name: skill.name, val: skill.applicants.length } );
            }

            array.sort(function(a,b){
                return b.val - a.val;
            });

            var res = new Array();

            for(var i = 0 ; i < (array.length < 10 ? array.length : 10); i++){
                res[i] = array[i].name;
            }

            cb(null, res); //5
        }  
    });
    // Applicant.app.module.ApplicantSkillLevel.find(filter, function(err, result){
    //     if(err){
    //         console.log("we have error");
    //     }      
    //     cb(null, [result]);
    // });
  };

// .prototipe
   Applicant.topThreeSkills = function(id,cb) {
        var filter = {
            include: {
                relation: "skills",                
            }
        };

        Applicant.findById(id, filter, function(err, result){
                var applicant = result.toJSON();

                var array = new Array();

                for(var i = 0; i< applicant.length; i++){
                    
                }

            cb(null, result);
        });
       
   };

  Applicant.remoteMethod('topTenSkills', {
    description: "Return topTenSkills",
        // accepts:{
        //    arg: "id",
        //    type:"number",
        //    required:true 
        // },
      http: {
        path: '/topTenSkills',
        verb: 'get'
      },
      returns: {
        arg: 'skills',
        type: 'array'
      }
    });

  Applicant.remoteMethod('topThreeSkills', {
    description: "Return topThreeSkills",
    // isStatic: false,
        accepts:{
           arg: "id",
           type:"number",
           required:true 
        },
      http: {
        path: '/:id/topThreeSkills',
        verb: 'get'
      },
      returns: {
        arg: 'top3skills',
        type: 'array'
      }
    });

}