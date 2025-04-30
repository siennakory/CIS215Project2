<!DOCTYPE html>
<html>
    <head>
        <title>Survey: PHP Questions</title>
        <script src="bgcolors.js" defer></script>
        <script src="format_changer.js" defer></script>
        <script src="email.js"></script>
                <!--leave href empty-->
        <link rel="stylesheet" href="none.css">
    </head>
    <body>
        
        <h1>Survey: PHP Questions</h1>
        <!-- Big takeaways: required keyword, make sure value is in there, feel free to use other attributes! -->

        <form action="project1submit.php" method="post" class="survey">

            <div>
                <label for="color-input">Change your background color!</label>
                <input type="color" id="color-input" name="color-name">
                <button type="button" name="color-button-name" id="color-button">Select Color</button>
            </div>
            <div>
                <label for="format_select">Change format</label>
                <select name="format_changer" id="format_select">
                    <option value="none">none</option>
                    <option value="night">night</option>
                    <option value="forset">forest</option>
                    <option value="hacker">hacker</option>
                    <option value="why">why?</option>
                </select>
                <button type="button" name="format_button_name" id="format_button">select format</button>
            </div>
            <fieldset>
                <legend>Personal Information:</legend>

                <!-- THIS IS THE NEW QUESTION -Sienna -->
                <label>Enter your name: </label>
                <input type="text" name="name" id="name-id" required>

                <label>Enter your email: </label>
                <input type="email" name="email-name" id="email-id" required>
                <span></span>

                <label>Enter your password: </label>
                <input type="password" name="pw-name" id="pw-id" required>

            </fieldset>

            <fieldset>
                <legend>Demographic Information:</legend>

                <div>
                    <label for="age">What age are you?</label>

                    <div>
                        <label> <input type="radio" name="age" id="age-0" value="0" required>
                        0-12 </label>
                    </div>

                    <?php

                        for($i=13;$i<65;$i=$i + 5){
                            $j = $i + 4;
                            print("<div><label><input type='radio' name='age' id='age-$i'value='$i'>
                            $i-$j </label></div>");
                        }

                    ?>

                    <div>
                        <label> <input type="radio" name="age" id="age-68" value="68">
                        68+ </label>
                    </div>
                    </div>

                <div>
                    <label for="gender">What is your gender?</label>
                    <select name="gender" id="gender">
                        <option value="">--Please select your gender--</option>
                        <option value="ma">Male</option>
                        <option value="fe">Female</option>
                        <option value="nb">Nonbinary</option>
                        <option value="gf">Genderfluid</option>
                        <option value="ag">Agender</option>
                        <option value="ot">Choose not to say/Other</option>
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <legend>PHP Questions:</legend>

                <div>
                    <label> What version of PHP do you use? (only include the main version number) <input type="number" name="version" id="version" min="1", max="9" required> </label>
                </div>

                <div>
                    <div>
                        <p>Please answer in 120 characters or fewer.</p>
                    </div>
                    <label for="favorite"> What is your favorite part of PHP?</label>  
                    <div>
                        <textarea name="favorite" id="favorite" rows="4" cols="40" minlength="1" maxlength="120" required></textarea>
                    </div>
                </div>
            </fieldset>

            <button type="submit" name="button-submit-form" id = "button-submit-form-id">Submit</button>

        </form>

        <div><a href='project1data.php'>View data page here</a></div>

    </body>
</html>