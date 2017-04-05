module.exports = function(app) {
  app.dataSources.mysqlDS.automigrate('applicant', function(err) {
    if (err) throw err;
      app.models.applicant.create([
        { username: "Vadim", name: "Scherban" },
        { username: "Yura", name: "Sun" },
        { username: "Vadim", name: "Dochka" },
        { username: "Petro", name: "Koliy" }
      ], function(err, applicants) {
      if (err) throw err;
     console.log('applicant created: \n');
        });
  });
    
    app.dataSources.mysqlDS.automigrate('education', function(err) {
    if (err) throw err;
      app.models.education.create([
        { "dateStart": "2012-04-01T19:31:38.918Z", "dateFinish": "2017-04-01T19:31:38.919Z", "place": "VNTU", "speciality": "CS", "applicantId": 1 },
        { "dateStart": "2010-04-01T19:31:38.918Z", "dateFinish": "2012-04-01T19:31:38.919Z", "place": "PTU", "speciality": "Traxtorist", "applicantId": 2 },
        { "dateStart": "2012-04-01T19:31:38.918Z", "dateFinish": "2017-04-01T19:31:38.919Z", "place": "VNTU", "speciality": "PI", "applicantId": 2 },
        { "dateStart": "2012-04-01T19:31:38.918Z", "dateFinish": "2018-06-01T19:31:38.919Z", "place": "KPI", "speciality": "OOP", "applicantId": 3 },
        { "dateStart": "2012-04-01T19:31:38.918Z", "dateFinish": "2017-06-01T19:31:38.919Z", "place": "NAU", "speciality": "OOJ", "applicantId": 4 }
      ], function(err, educations) {
      if (err) throw err;
     console.log('education created: \n');
      });
  });
    
    app.dataSources.mysqlDS.automigrate('employment', function(err) {
    if (err) throw err;
          app.models.employment.create([
              { "company": "ORM",  "dateFinish": "2015-01-01T19:31:39.059Z", "dateStart": "2017-04-01T19:31:39.059Z", "position": "junoir QA", "responsibility": "tratata", "applicantId": 1},
              { "company": "OPK",  "dateFinish": "2014-04-01T19:31:39.059Z", "dateStart": "2017-04-01T19:31:39.059Z", "position": "junoir Front", "responsibility": "tratata", "applicantId": 2},
              { "company": "SDM",  "dateFinish": "2013-04-01T19:31:39.059Z", "dateStart": "2015-04-01T19:31:39.059Z", "position": "tratata", "responsibility": "tratata", "applicantId": 2},
              { "company": "NoSkillSoft",  "dateFinish": "2015-04-01T19:31:39.059Z", "dateStart": "2017-04-01T19:31:39.059Z", "position": "tratata SEO", "responsibility": "tratata", "applicantId": 3},
              { "company": "BadCode",  "dateFinish": "2016-04-01T19:31:39.059Z", "dateStart": "2017-04-01T19:31:39.059Z", "position": "HR", "responsibility": "tratata", "applicantId": 4}
          ], function(err, employment) {
          if (err) throw err;
        console.log('employment created: \n');
      });
  });
    
    app.dataSources.mysqlDS.automigrate('skill', function(err) {
    if (err) throw err;
      app.models.skill.create([
          { "type": "framework", "name": "Express" },
          { "type": "framework", "name": "Bootstrap" },
          { "type": "framework", "name": "Angular" },
          { "type": "language", "name": "С++" },
          { "type": "language", "name": "JS" }
        ], function(err, skills) {
        if (err) throw err;
     console.log('skill created: \n');
      });
  });
    
    app.dataSources.mysqlDS.automigrate('EmploymentSkill', function(err) {
    if (err) throw err;
      app.models.EmploymentSkill.create([
        { "skillId": 1, "employmentId": 1 },
        { "skillId": 1, "employmentId": 4 },
        { "skillId": 2, "employmentId": 2 },
        { "skillId": 3, "employmentId": 3 },
        ], function(err, EmploymentSkills) {
      if (err) throw err;
     console.log('employmentSkill created: \n');
      });
  });
 
    
    app.dataSources.mysqlDS.automigrate('ApplicantSkillLevel', function(err) {
    if (err) throw err;
      app.models.ApplicantSkillLevel.create([
          { "level": 8, "years": 2, "applicantId": 1, "skillId": 1},
          { "level": 10, "years": 2, "applicantId": 1, "skillId": 4},
          { "level": 10, "years": 2, "applicantId": 2, "skillId": 4},
          { "level": 2, "years": 4, "applicantId": 2, "skillId": 2},
          { "level": 9, "years": 1.2, "applicantId": 3, "skillId": 3},
          { "level": 8, "years": 2, "applicantId": 3, "skillId": 1},
          { "level": 8, "years": 2, "applicantId": 3, "skillId": 2},
          { "level": 8, "years": 2, "applicantId": 3, "skillId": 5},
          { "level": 8, "years": 2, "applicantId": 3, "skillId": 5},
        ], function(err, EmploymentSkills) {
      if (err) throw err;
     console.log('ApplicanteSkillLevel created: \n');
      });
  });

};