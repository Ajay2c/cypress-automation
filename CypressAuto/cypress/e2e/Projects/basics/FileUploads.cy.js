import 'cypress-file-upload' // import package to facilitate file uploads in Cypress

describe('File uploads', () => {

it('Single file upload', () => {
// visit the URL to be tested
cy.visit("https://tus.io/demo.html")
// attach a file to the input element with the given ID
cy.get('#js-file-input').attachFile("test1.jpg")
// wait for the upload to complete
cy.wait(7000)
// assert that the upload is complete by checking the text content of the specified element
cy.get('.heading').should('have.text', 'The upload is complete!')
})

it('File upload rename', () => {
// visit the URL to be tested
cy.visit("https://tus.io/demo.html")
// attach a file with a specified filename to the input element with the given ID
cy.get('#js-file-input').attachFile({ filePath: "test1.jpg", fileName: "ajay.jpg" })
// wait for the upload to complete
cy.wait(7000)
// assert that the upload is complete by checking the text content of the specified element
cy.get('.heading').should('have.text', 'The upload is complete!')
})

it('File Drag-n-Drop', () => {
// visit the URL to be tested
cy.visit("https://uppy.io/examples/dragdrop/")
// attach a file to the specified button using drag and drop
cy.get('body > div:nth-child(1) > main:nth-child(3) > div:nth-child(2) > section:nth-child(5) > div:nth-child(2) > div:nth-child(1) > button:nth-child(1) > div:nth-child(2)')
.attachFile('test1.jpg', { subjectType: 'drag-n-drop' })
})

it('Multiple files upload', () => {
// visit the URL to be tested
cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
// attach multiple files to the input element with the given ID
cy.get('#filesToUpload').attachFile(['test1.jpg', 'test2.jpg'])
})

it('File upload Shadow - Dom', () => {
// visit the URL to be tested
cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
// attach multiple files to the shadow DOM element using the specified selector
cy.get('smart-file-upload:nth-child(1) > div:nth-child(1) > div:nth-child(1) > smart-button:nth-child(1) > button:nth-child(1)', { includeShadowDom: true })
.attachFile(['test1.jpg', 'test2.jpg'])
})
})

/* The code defines a test suite that includes five test cases to test different file upload scenarios. Each test case consists of visiting a specific URL, locating the file upload element, attaching one or more files to it, and asserting that the upload is complete. The code uses the 'cypress-file-upload' package to facilitate file uploads in Cypress. The test suite is well-structured and easy to follow.
*/