# Quiz Show
## Project Description
<p> This project is a multiple choice quiz that is for people of all ages designed to test their trivia knowledge. The idea was based on the show from the 80s, Who Wants To Be a Millionaire. It focuses on general knowledge and contains questions that were asked in the show that scale with difficulty as the player gets through each question. This might encourage people to go back and look at the show to see how it became so well known.
</p>

# Features
## Question Container
* This section shows the questions being asked to the user.
(Add image here)

## Game Area
* This area is for the placement of the answers. 
* The user can select an answer to the question being asked in the question container.
(Add image here)

## Score Board
* This section shows the user the number of answers that they have gotten correct.
* This will change as more types of farms are displayed on social media.
(Add image here)

## Logo
* A logo pertaining to the show that the site was meant to be based on.

# Features left to Implement
## Results page
* This would open a new page that would tell the user what their score was and the amount of money they won.
## Animated header
* This would flash at the user to how the game show Who Wants To Be a Millionaire Logo did.
## Randomised Questions
* This would've made it so different questions are asked on each attempt. This would be limited to 3 attempts.
## Halting Progress
* The user would have to restart from the beginning when they got a question wrong. This would've made the game more difficult to play through.

# Testing
## Validator Testing
### HTML
* No errors were found through W3C validator. There is one warning pertaining to line 37 because it doesn't have a header but this isn't needed because this section contains the hero image.
### CSS
* No errors were found through the W3C CSS validator and I was given the code for this icon to prove this.
<p>
    <a href="http://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="http://jigsaw.w3.org/css-validator/images/vcss"
            alt="Valid CSS!"/>
    </a>
</p>

## Accessibilty Testing (Edit this as it is required. Probably just change screenshot)
This is a screenshot taken from my first time doing an accessibilty test on Developer Tools Lighthouse.


## Manual Testing (Edit this as it is required.)
I tested the media queries by manually adjusting the screen size from roughly 500-1000px to make sure the correct changes were taking place above or below each specific screen size.

At 500px and below all text and images are displayed vertically because it fits this screen size well.
For media queries 768px and 1000px and above, the text and images in the about and why its cool sections are displayed horizontally. The community section images are displayed side by side in pairs.

## Unfixed Bugs
Questions display - The choices for each question after question 1 show up below the previous question which is off-putting. This wasn't fixed due to time and lack of resources. I tried for several hours across multiple days to get help from online tutorials, friends, mentors, Slack and student support tutors who unfortunately weren't able to give me enough help to fix this problem. The code javascript code was written 3 different times which can be seen by going through the commits and all of them ended up with problems I didn't have the knowledge to solve.

# Deployment
For all of the below steps you must head to Github.
* Log into Github
* Load up the required repository.
* Go to Settings and scroll down to Github pages (this will open up a new webpage).
* Click on the dropdown menu called "None" and then select "Master Branch".
* A second dropdown menu should appear that says "/root" and a button that says Save.
* Click Save and now the link for the website has been made.

## Forking
* Log into Github
* Load up the required repository.
* In the top right of the screen below the profile icon there is a fork button, click this.
* The repository should now be copied onto your Github account.

## Cloning
* Log into Github and choose a repository.
* Click on the green code button.
* You will be given three ways to clone the code. If you're using https, click “Clone with https” and copy the link.
* Open the terminal and type in the command "git clone" followed by a space and the copied url.
* The repository will now be cloned onto the computer.

# Acknowledgements

## Credits
* My mentor Brian Macharia who supported me and provided me with both feedback and solutions to problems I faced while creating the website.
* My lecturer Simen Daehlin who helped me to better write my code and solve a couple problems I had run into.
* The people from slack room who answered my questions when I needed it.
* Code institute for the classes, sources and tutors that they provided me.
* The people at student support who tried to help me for several hours.
* Bootstrap for the media query sizes that I used: https://getbootstrap.com/docs/4.1/layout/overview/

## Content
* The questions were taken from https://inews.co.uk/light-relief/quizzes/who-wants-to-be-a-millionaire-questions-quiz-jackpot-441100

## Media
* Logo image came from https://www.google.com/url?sa=i&url=https%3A%2F%2Fstore.steampowered.com%2Fapp%2F1356240%2FWho_Wants_To_Be_A_Millionaire%2F&psig=AOvVaw2253bvTyPXLqaWtEODyEyK&ust=1640120680651000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJig1Oej8_QCFQAAAAAdAAAAABA2