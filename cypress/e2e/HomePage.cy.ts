import {carousel} from '../../cypress/support/homePage/carousel'
import {programme} from '../../cypress/support/homePage/programmes'

describe('BBC Home Page', () => {
    
    beforeEach(()=> {
        cy.visit('https://www.bbc.co.uk/iplayer')
    })

    it.skip('TC01: Navigates to BBCiPlayer and check url', () => {
        // Scenario 1 - Navigating to BBCiPlayer
        // Given that I have navaigated to BBC via a link 
        // Then the url should be displayed as 'https://www.bbc.co.uk/iplayer
        cy.url().should('eq', 'https://www.bbc.co.uk/iplayer')
    })


    it.skip('TC02: Ensure that home page contains navigation menu', () => {
        // Scenario 2 - Player Navigation menu
        // Given that I am on the Home 
        // Then I should be able to see the Navigation Menu
        cy.get('[data-bbc-container="primary-nav"]')
        .should('contain', 'Channels')
        .should('contain', 'Categories')
        .should('contain', 'A-Z')
        .should('contain', 'TV Guide')
        .should('contain', 'Watchlist')        

    })
 
    it.skip('TC03: Ensure that there is 4 programs on the carousel', () => {
        // Scenario 3 - Carousel
        // Given that I am on home page
        // Then I should be abel to see the carousel
        // And there are at least 4 programme items on the carousel

        // option 1: grab all carousel that is active and index it
        // option 2: mock data using list and index it
    
        for (let i = 0; i < carousel.length; i++) {
            cy.get(carousel[i].url).invoke('index').should('eq', carousel[i].index)
        }

    })

    // Done
    it.only('TC04: Ensure that programme section has 4 items', () => {
        // Scenario 4 - Programmes
        // Given that I am on the home page 
        // Then I should be able to see Programme section
        // And there should display at least 4 items
        // option 1: grab all carousel that is active and index it
        // option 2: mock data using list and index it
 
        for (let i = 0; i < programme.length; i++) {
            cy.get(programme[i].url).invoke('index').should('eq', programme[i].index)
        }

    })

    // Done
    it.skip('TC05: Clicking on carousel to view next item', () => {
        // Scenario 5 - Navigating Carousel
        // Given that I am on the home page
        // And the Carousel is displayed
        // When I click on the arrow within the Carousel
        // Then I should be able to Navigate to the next item down

        // option 1: grab all carousel that is active and index it
        // option 2: mock data using list and index it
        cy.get(carousel[3].url)
        .invoke('index')
        .should('eq', carousel[3].url)
        cy.get('[data-bbc-content-label="forward"]').click()
        cy.get('*[href="/iplayer/episodes/m0004p7f/forensics-the-real-csi"]')
        .invoke('index')
        .should('eq',4)
    })
 
    it.skip('TC06: Ensure that clicking on a series thumbnail will take me to the first episode',() => {
        // Scenario 6 - Playback
        // Given that I am on the home page
        // When I click on an item
        // Then I should be able to see the first episode of that item

        // option 1: mock data using list and index it
        cy.get(carousel[0].url)
        .click()
        .then(()=>{
            cy.url().should('eq', 'https://www.bbc.co.uk/iplayer/episodes/b0991bqd/snowfall?seriesId=b0991bqh')
            cy.get('*[class="tleo-list__contextual-cta__title typo--bold typo--canary"]')
            .should('contain', 'Series 1: 1. Pilot (55 mins)')
        })
    })
})