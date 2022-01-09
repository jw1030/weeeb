const inputBar = document.querySelector("#comment-input");
const rootDiv = document.querySelector("#comments");
const btn = document.querySelector("#submit");
const mainCommentCount = document.querySelector('#count');

function generateTime(){
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const wDate = date.getDate();
const time = year+'-'+month+'-'+wDate+' '+hour+':'+min+':'+sec; return time; }

