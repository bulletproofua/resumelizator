'use strict';

module.exports = function(Applicant) {


    Applicant.topTenSkills = function(cb) {
        var filter = {
            include: {
                relation: "applicantSkillLevels"
            }
        };
// {"include": { "relation": "employmentSkills"}}
// {"include": { "relation": "skill"}}
// {"where":{ "id": "1"}}

// {"include": { "relation": "applicantSkillLevels"}}
    Applicant.app.models.Skill.find( filter, function(err, result){
        if(err){
            console.log(err);
        }  
        if(!err){          
            var array = new Array();

            for(var i = 0; i < result.length; i++){
                var skill = result[i].toJSON();
                array.push({ name: skill.name, val: skill.applicantSkillLevels.length } );
            }

            array.sort(function(a,b){
                return b.val - a.val;
            });

            var res = new Array();

            for(var i = 0 ; i < (array.length < 10 ? array.length : 10); i++){
                res[i] = array[i].name;
            }

            cb(null, res); 
        }  
    });
  };

// .prototipe

   Applicant.topThreeSkills = function(id,cb) {
        var filter = {
          include: { 
                    relation: "applicantSkillLevels", 
                        scope: { 
                            include: { 
                            relation: "skill" 
                        } 
                } 
            }
        };


        Applicant.findById(id, filter, function(err, result){
                
                var applicant = result.toJSON();

                var array = new Array();
                var obj = new Object();

                for(var i = 0; i< applicant.applicantSkillLevels.length; i++){
                    if ( applicant.applicantSkillLevels[i].skill.name in obj) {
                        obj[applicant.applicantSkillLevels[i].skill.name] += 1 ;
                    } else {
                        obj[applicant.applicantSkillLevels[i].skill.name] = 1;
                    }
                }
                        var TopSkils = [];
                        for (var val in obj) {
                            TopSkils.push([val, obj[val]]); 
                        }
                        TopSkils.sort(function(a, b) {
                            return b[1] - a[1];
                        });

                    var top3skills = [];
                        for(var j = 0 ; j < (TopSkils.length < 3 ?TopSkils.length : 3); j++){
                               console.log(TopSkils[j][0]);
                            top3skills[j] = TopSkils[j][0];
                        }         
            cb(null, top3skills);
        });
       
   };

  Applicant.remoteMethod('topTenSkills', {
    description: "Return topTenSkills",
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