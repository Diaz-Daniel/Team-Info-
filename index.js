const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

//Library
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//path to the directory
const OUTPUT = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT, "team.html");

const renderTeamHTML = require("./src/generateTeam");

function init() {
  function createManager() {
    //use inquirer to ask prompt for manager
  }
  createManager();
}

init();
