function calculateTax(income, expenses) {
    if(income < 0 || expenses < 0 || income < expenses ){
      return "Invalid Input"
    }
    return ( income - expenses ) * .20 ;
  }


  function sendNotification(email) {
    const isEmail = email.includes('@');
   if(typeof email !== 'string' || (isEmail === false)){
      return "Invalid Input" ;
   }
   const userName = email.split('@').splice(0 , 1);
   const domainName = email.split('@').splice(1);
   const mgs = userName.concat("sent you an email from").concat(domainName);
   return mgs.join(' ') ;
}
