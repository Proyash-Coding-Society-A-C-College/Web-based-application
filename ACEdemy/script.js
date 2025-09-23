document.addEventListener('DOMContentLoaded', () => {

    // Get all the main elements
    const mainMenu = document.getElementById('main-menu');
    const universitySection = document.getElementById('university-section');
    const collegeSection = document.getElementById('college-section');
    const modelSection = document.getElementById('model-section');

    // Get all the buttons that trigger section changes
    const btnUniversity = document.getElementById('btn-university');
    const btnCollege = document.getElementById('btn-college');
    const btnModel = document.getElementById('btn-model');
    const btnNotes = document.getElementById('btn-notes');

    // Get all the 'back' buttons
    const backButtons = document.querySelectorAll('.btn-back');

    // Function to hide all sections
    const hideAllSections = () => {
        mainMenu.classList.add('hidden');
        universitySection.classList.add('hidden');
        collegeSection.classList.add('hidden');
        modelSection.classList.add('hidden');
    };

    // --- Event Listeners for Main Menu Buttons ---

    // Show University Section
    btnUniversity.addEventListener('click', () => {
        hideAllSections();
        universitySection.classList.remove('hidden');
    });

    // Show College Section
    btnCollege.addEventListener('click', () => {
        hideAllSections();
        collegeSection.classList.remove('hidden');
    });

    // Show Model Test Section
    btnModel.addEventListener('click', () => {
        hideAllSections();
        modelSection.classList.remove('hidden');
    });

    // Handle Notes button click (for now, just an alert)
    btnNotes.addEventListener('click', () => {
        alert('Notes section is coming soon!');
    });

    // --- Event Listener for Back Buttons ---
    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            hideAllSections();
            mainMenu.classList.remove('hidden');
        });
    });

});