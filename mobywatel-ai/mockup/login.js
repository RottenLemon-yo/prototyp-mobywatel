/* Dane demonstracyjne — to wyłącznie prototyp, bez prawdziwego uwierzytelniania */
const DEMO={email:'demo@obywatel.test',main:'Demo123!',alarm:'Alarm123!'};
const $=s=>document.querySelector(s);

$('#togglePassword').addEventListener('click',()=>{
  const f=$('#password');f.type=f.type==='password'?'text':'password';
});

$('#demoForm').addEventListener('submit',e=>{
  e.preventDefault();
  const mail=$('#email').value.trim().toLowerCase(),pass=$('#password').value,err=$('#err');
  if(mail===DEMO.email&&(pass===DEMO.main||pass===DEMO.alarm)){
    const alarm=pass===DEMO.alarm;
    // hasło alarmowe: ta sama osoba, ale inne dane (PESEL, numery dokumentów itd.), patrz osoby.js i persony.py
    try{
      sessionStorage.setItem('mobLogin',alarm?'alarm':'main');
      if(alarm)localStorage.setItem('mobAlarm','1');else localStorage.removeItem('mobAlarm');
    }catch(x){}
    location.href='index.html';
    return;
  }
  err.textContent='Nieprawidłowy e-mail lub hasło.';err.hidden=false;
  $('#password').classList.add('bad');
});

$('#password').addEventListener('input',()=>{$('#err').hidden=true;$('#password').classList.remove('bad')});

$('#forgot').addEventListener('click',e=>{
  e.preventDefault();
  alert('Prototyp demonstracyjny — odzyskiwanie hasła nie jest aktywne.');
});
