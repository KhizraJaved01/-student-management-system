#! /usr/bin/env node
import inquirer from "inquirer";

function createStudentManagementSystem(name: string) {
  return {
    name,
    courses: [],
    balance: 0,
    studentID: Math.random().toString(36).substring(2, 7).toUpperCase(),
  };
}

function enroll(student: any, courses: string) {
  student.courses.push(courses);
}

function payTuitionFees(student: any, amount: number) {
  student.balance -= amount;
}

function status(student: any) {
  console.log(`Student Name: ${student.name}`);
  console.log(`Student ID: ${student.studentID}`);
  console.log(`Courses Enrolled ${student.courses.join(",")}`);
  console.log(`Fees: ${student.balance}`);
}

async function promptUser() {
  const answers = await inquirer.prompt([
    {
      name: "name",
      type: "input",
      message: "Enter Your Name: ",
    },
    {
      name: "course1",
      type: "input",
      message: "Enter First Course: ",
    },
    {
      name: "course2",
      type: "input",
      message: "Enter Second Course: ",
    },
    {
      name: "fees",
      type: "input",
      message: "Enter fees amount: ",
    },
  ]);

  const student = createStudentManagementSystem(answers.name);
  enroll(student, answers.course1);
  enroll(student, answers.course2);
  payTuitionFees(student, answers.fees);
  status(student);
}

promptUser();
