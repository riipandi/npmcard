#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

import { Chalk } from "chalk"

import boxen from "boxen"

const chalk = new Chalk({ level: 2 })

// Define options for Boxen
const options = {
    padding: 2,
    margin: 1,
    borderStyle: "double",
    dimBorder: true,
}

// Text + chalk definitions
const data = {
    labelName: chalk.white.bold("      Name:"),
    name: chalk.cyan.bold("Aris Ripandi"),
    handle: chalk.cyan.bold("@riipandi"),
    labelWork: chalk.white.bold("      Work:"),
    work: chalk.white.bold("Full-stack developer & educator"),
    labelTwitter: chalk.white.bold("   Twitter:"),
    twitter: chalk.cyan("https://twitter.com/riipandi"),
    labelGitHub: chalk.white.bold("    GitHub:"),
    github: chalk.cyan("https://github.com/riipandi"),
    labelLinkedIn: chalk.white.bold("  LinkedIn:"),
    linkedin: chalk.cyan("https://linkedin.com/in/aris-ripandi"),
    labelWeb: chalk.white.bold("  Homepage:"),
    web: chalk.cyan("https://aris.web.id"),
    labelCard: chalk.white.bold("      Card:"),
    npx: chalk.white("npx riipandi"),
}

// Actual strings we're going to output
const newline = "\n"
const heading = `${data.labelName}  ${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen
// effectively
const output =
    heading +
    newline +
    working +
    newline +
    newline +
    githubing +
    newline +
    twittering +
    newline +
    linkedining +
    newline +
    webing +
    newline +
    newline +
    carding

console.log(chalk.green(boxen(output, options)))
