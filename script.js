
var form = document.getElementById('resumeForm');
var previewName = document.getElementById('previewName');
var previewEmail = document.getElementById('previewEmail');
var previewPhone = document.getElementById('previewPhone');
var previewEducation = document.getElementById('previewEducation');
var previewWorkExperience = document.getElementById('previewWorkExperience');
var previewSkills = document.getElementById('previewSkills');

form.addEventListener('submit', function (event) {
    event.preventDefault();
 
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('workExperience').value;
    var skills = document.getElementById('skills').value;

    previewName.innerText = name;
    previewEmail.innerText = email;
    previewPhone.innerText = phone;
    previewEducation.innerText = education;
    previewWorkExperience.innerText = workExperience;
    previewSkills.innerText = skills.split(',').map(function (skill) { return skill.trim(); }).join(', ');
});
