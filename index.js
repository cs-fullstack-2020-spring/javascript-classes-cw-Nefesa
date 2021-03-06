
// # JavaScript-classes_objects-cw

// // ### Problem 1:
// // Create a GitHubRepository class with properties userName, fileName, descriptionOfRepository, and code. Create a function that prints all properties. Create an object of the class and use the function.

// // declared class
// class GitHubRepository{
//     constructor(userName,fileName,descriptionOfRepository)
//     {
//         this.userName = userName;
//         this.fileName = fileName;
//         this.descriptionOfRepository = descriptionOfRepository;
//     }
//     printGitHubRepository(){ // !! make sure you take full advantage of string templting to format your text
//         console.log(`userName${this.userName}\n fileName${this.fileName}\n descriptionOfRepository${this.descriptionOfRepository}`)
//     }
// }
// let hubRepository = new GitHubRepository ("Nefesa","CodeSchool","CW");
// hubRepository.printGitHubRepository();

// ### Problem 2:
// Create a Movie class with the following properties: movieName, rating, and yearReleased. Create a method to change the rating and another one to change the yearReleased properties using prompt. Create an object of the class and use the two methods you created.

class Movie {
    constructor(movieName, rating, yearReleased) {
        this.movieName = movieName
        this.rating = rating
        this.yearReleased = yearReleased
    }
    changeRating(changedRating) {
        // !! you should be using prompt to get the new rating value
        this.changeRating = changedRating;
    }
    changeyearReleased(changedyrReleased) {
        // !! you should be using prompt to get the new year released value
        this.changeyearReleased = changedyrReleased;
    }
}
let oldRelease = new Movie("Love Jones", "R", "1996");
oldRelease.changeRating();
oldRelease.changeyearReleased();
console.log(`${oldRelease.movieName}\n ${oldRelease.rating}\n${oldRelease.yearReleased}`);

// ### Problem 3:
// Create a Student class with the following properties : studentName, codeSchoolCohort, and grades(grades should be an array of objects and each object should have the properties assignemtName and assignemtnScore). 

// Create a method that accepts a student name and updates the studentName of an instance of your Student Class. 

// Create a method that accepts an assignment name and assignment score and adds a grade object to the grades array. 

// Create two instances of this class with empty grade arrays. Update the name of one instance of the Student Class using the class method. Add one grade object to each instance of the Student Class grade array using the class method.

// HINT : use object literal notation to create a grade object in the grade array for each instance of the Student Class

class Student {
    constructor(studentName, codeSchoolCohort, grades) {
        this.studentName = studentName
        this.codeSchoolCohort = codeSchoolCohort
        this.grades = grades
    }
    acceptStudentName(assignmentName) {
        this.assignmentName.push(assignmentName);
    }
    acceptStudentGrade(assigntmentGrade) {
        this.assigntmentGrade.push(assigntmentGrade);

    }
}
// !! would have liked to see an instance of your class using the method acceptStudentName to test that method

// ### Challenge 1:
// Create a Person class with three properties: name, weight, and height. Create a method that can calculate the BMI of a person using the formula below. Create an object of the class and use the function.

// BMI is  (weight / (height * height)) x 703. Weight is in pounds and height is in inches.

// ### Challenge 2:
// Create a Bank class with the the name and balance properties. Afterwards, create an object of the class and follow the instructions below:
// - Creates an account named "Matt's account" with the balance of 1000
// - Creates an account named "My account" with the balance of 0
// - Withdraws 100.0 from Matt's account
// - Deposits 100.0 to My account
// - Prints both accounts
