# APP.JS
    - creates useState output
    - gets info from Form.js
    - transfers info to Display.js
    
## COMPONENTS >
# FORM.JS:
    - gets output state from props
    -> uses a form to change
    - changes input from form to input state
    -> displays input state below form
    - onSubmit checks validity of input
    - sends input by changing output state to input value to App.js

# DISPLAY.JS:
    - gets output state
    - logs props
    - displays submitted input as output state