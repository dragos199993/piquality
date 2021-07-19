#!/usr/bin/env node

import general from './config/general'
import chalk from 'chalk'

// import jsonFile from './piquality.json'
;(async () => {
  try {
    const piqualityConfig = await import(`${general.appRoot}/.piqualrc.ts`)
    console.log(piqualityConfig)
  } catch (e) {
    console.log(chalk.red(e))
  }
})()
