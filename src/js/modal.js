
setTimeout(function () { 
  modalwin = document.getElementById("modal");
  modalwin.style.display="block"; 
  document.getElementById("close-btn").addEventListener("click", function(){
      modalwin.style.display="none";            
  });
}, 10000);
document.getElementById("send-btn").addEventListener("click", function(){
  modalwin.style.display="none";            
});