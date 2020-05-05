'use strict';

{
  const invisibleNode = document.getElementById('invisible');
  invisibleNode.style.display = "none";
  
  document.querySelector('button').addEventListener('click', () => {
    if (invisibleNode.style.display === "none") {
      invisibleNode.style.display = "block";
    } else {
      invisibleNode.style.display = "none";
    }
  });
}