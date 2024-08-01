import { Teacher } from './Teacher';
import { Cpp, Java, React } from './Subject';

// Create constants for the subjects
const cpp = new Cpp();
const java = new Java();
const react = new React();

// Create a teacher object
const cTeacher: Teacher = {
    experienceTeachingC: 10,
};

// Log information for Cpp
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Log information for Java
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// Log information for React
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
