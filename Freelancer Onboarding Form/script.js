var show = true;
  
        function showCheckboxes() {
            var checkboxes = 
                document.getElementById("checkBoxes");
  
            if (show) {
                checkboxes.style.display = "block";
                show = false;
            } else {
                checkboxes.style.display = "none";
                show = true;
            }
        }

document.querySelectorAll('.file-upload__button').forEach(), function (button) {
    const hiddenInput = button.parentElement.querySelector('.file-upload__input');
    const label = button.parentElement.querySelector('.file-upload__label');
    const defaultLabelText = 'No file(s) selected'

    label.textContent = defaultLabelText;
    label.title = defaultLabelText;

    button.addEventListener('click', function(){
        hiddenInput.clicck();
    });
};