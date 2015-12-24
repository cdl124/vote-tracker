Cutest Kitten Contest Vote-Tracker Assignment

by Cortney Lane

First, I created the basic HTML layout that would explain what the page is about, and also house the two random images that would eventually be generated.

To generate the images randomly, initially I sought to use what's apparently called the Fisher-Yates array shuffle method, as described in this Stack Overflow Q&A:
http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

But then, I was informed that I might run into problems with using the Fisher-Yates method, since each array element also has vote-tracking data that needs to be updated each time the element is clicked, so I guess that might make it more difficult to find the array element needing updating? I'm not sure why, but it was recommended anyway that I not just copy/paste someone else's code blindly. Good call.

So instead, it was suggested that I "shuffle" the array by picking two random numbers, ensure the two numbers are not the same, and then make those numbers represent the respective indices in the images array. This way, the arrays always stay in order.
(I am also proud of being able to use a do while loop in the shuffle function! I didn't think those had much real-life application, and to my delight, I am incorrect.)

Anyway, the random images generate, and when the user clicks one of the images, the following occurs:
- the pic is highlighted in yellow,
- one vote is added to the kitty image object array,
- the chart refreshes to show the new data,
- and one vote is added to the kitty image key in the user's tracker object.

I thought about dynamically creating objects for each kitty image upon initial click so I wouldn't have to write so much repeating code, but one, that proved to be a little difficult to pull off, and two, I'd like to show if there are 0 votes for a particular kitten in my chart.

After the user selects a kitty image, they may click the "Get two more kitties!" button to generate two more random images. They may see the same images repeatedly, as there *are* only fourteen kitties to choose from.

One thing I haven't been able to do is account for if the user clicks one kitty image, and then changes their mind and clicks the other image before generating two more cats. Currently, it adds one vote to both images. I'd like to subtract a vote from the "unclicked" image if this happens.
