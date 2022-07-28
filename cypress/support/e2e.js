// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-ntlm-auth/dist/commands'
import 'cypress-xpath'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', (err, runnable) => {

    if (err.message.includes('Quick Edit could not associate the rendered entity field markup')) {
      return false
    }

  })

  Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('$(...).once(...).spinner is not a function')) {
      return false
    }
})
