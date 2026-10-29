/* Part 2 B3. Frontend Test


4. Create an HTML table that can search student names, with columns for Name, Department, and GPA. */

const searchInput = document.getElementById('studentSearch');
const tableRows = document.querySelectorAll('#studentTable tbody tr');

searchInput.addEventListener('input', function() {
    const filterText = searchInput.value.toLowerCase();

    tableRows.forEach(function(row) {
        const nameCell = row.querySelector('.student-name');
        const nameText = nameCell.textContent.toLowerCase();

        if (nameText.includes(filterText)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
});
