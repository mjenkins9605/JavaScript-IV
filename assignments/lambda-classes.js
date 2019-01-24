// CODE here for your Lambda Classes
  
class Person {
    constructor(baseClass) {
        this.name = baseClass.name;
        this.age = baseClass.age;
        this.location = baseClass.location;
        this.gender = baseClass.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}


class Instructor extends Person {
    constructor(teacher) {
        super(teacher)
        this.specialty = teacher.specialty;
        this.favLanguage = teacher.favLanguage;
        this.catchPhrase = teacher.catchPhrase;

    }
    demo() {
        return `Today we are learning about ${this.subject}`;
    }
    grade() {
        return `${student.name} receives a perfect score on ${this.subject}`;
    }
}

class Student extends Person {
    constructor(learner) {
        super(learner)
        this.previousBackground = learner.previousBackground;
        this.className = learner.className;
        this.favSubjects = learner.favSubjects;
    }
    listsSubjects() {
        return `Here are their favorite subjects: ${this.favSubjects}`;
    }
    PRAssignment() {
        return `${student.name} has submitted a PR for ${this.subject}`;
    }
    sprintChallenge() {
        return `${student.name} has begun sprint challenge on ${this.subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(PM) {
        super(PM) 
        this.gradeClassName = PM.gradeClassName;
        this.favInstructor = PM.favInstructor;
    }
    standUp() {
        return `${this.name} announces to ${this.channel}, @channel standy times!`;
    }
    debugsCode() {
        return `${this.name} debugs ${student.name}'s code on ${this.subject}`;
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Yabba Dabba Doo`
  });

  const george = new Instructor({
    name: 'George',
    location: 'Orbit City',
    age: 39,
    gender: 'male',
    favLanguage: 'HTML/CSS',
    specialty: 'Front-end',
    catchPhrase: `Jane! Stop this crazy thing!`
  });

  const yogi = new Student({
    name: 'Yogi Bear',
    location: 'Yellowstone National Park',
    age: 5,
    gender: 'male',
    favLanguage: 'HTML/CSS',
    specialty: 'pic-a-nic baskets',
    catchPhrase: `I'm smarter than the av-er-age bear!`
  });

  const george = new Instructor({
    name: 'George',
    location: 'Orbit City',
    age: 39,
    gender: 'male',
    favLanguage: 'HTML/CSS',
    specialty: 'Front-end',
    catchPhrase: `Jane! Stop this crazy thing!`
  });

  const olive = new ProjectManager({
    name: 'Olive Oyl',
    location: 'Orbit City',
    age: 39,
    gender: 'male',
    favLanguage: 'HTML/CSS',
    specialty: 'Front-end',
    catchPhrase: `Jane! Stop this crazy thing!`
  });

  const george = new Instructor({
    name: 'George',
    location: 'Orbit City',
    age: 39,
    gender: 'male',
    favLanguage: 'HTML/CSS',
    specialty: 'Front-end',
    catchPhrase: `Jane! Stop this crazy thing!`
  });