
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: Get an element with a specific id using getElementById, get multiple elements of the same class using getElementsByClassName, or use querySelector and querySelectorAll to get the first or all matching elements using CSS selectors.


2. How do you create and insert a new element into the DOM?
ans:To create a new element in DOM, at first it is required to create the element using document.createElement(), then if required set the content using innerText or innerHTML and at last add it inside parent element using appendChild() or append().

3. What is Event Bubbling? And how does it work?
ans:Event bubbling is a process where, when an event (like click) is triggered on an element, it first occurs directly on that element, and then gradually 'bubbles' up to its parent elements step by step.

4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is where an event handler is set on the parent element instead of the child elements, and that parent element "handles" the event and sees which child element the event occurred on.

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() stops the browser's default behavior (like page reload), while 
stopPropagation()prevents the event from bubbling up to parent elements.