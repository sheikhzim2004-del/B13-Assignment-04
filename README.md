# This is Milestone 04 Job Applicant Tracker Project README File.

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   
Ans:
* getElimntById is a one element selector uese only one id. 
* getElementsByClassName is a multy element selector usew only class.
* querySelector and querySelectorAll diffrent betwen querySelector select first matching element only but querySelectorAll select all matching element select by id, class, tag all.
   

## 3. How do you create and insert a new element into the DOM?

Ans:
* Use document.creatElement(p/h1/h2/p/div...+) to make a new element into the dom. But it is not showing in this page as long as i dont apply appendChild() in a parend div.


## 4. What is Event Bubbling? And how does it work?
Ans:
* Even Bubbling is moves up to parant continiue.
* When i click a element then even start the target element and bubbles up to parent then grantparent then up to html and documents.


## 5. What is Event Delegation in JavaScript? Why is it useful?
Ans:
* Even Delegation mean like attach a single even litchener in the parent (no need use the even in the chiled again and again) and i checked like even.target and its very helpfull for us couse here work bubbling up child to parant.


## 6. What is the difference between preventDefault() and stopPropagation() methods?
Ans:
* preventDefault() stop the defult bahavior like when i click <a> link then not working the link and not relode the page.
* stopPropagation() stop the bubbling like when i want the even work only chiled element. when i use stopPropagation() then bubbling not up to parent.


## Repository Link
https://github.com/sheikhzim2004-del/B13-Assignment-04

## Live Link
https://sheikhzim2004-del.github.io/B13-Assignment-04/
