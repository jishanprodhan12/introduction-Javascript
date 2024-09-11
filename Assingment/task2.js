/**
 * Problem 02 : Notification Generator
⚠️ Function Name Must be sendNotification()
তোমরা জানো, একটি ইমেল ২টি অংশ নিয়ে গঠিত হয়, একটি হল `username` অন্যটি `domain name`। যেমন zihad.ph@gmail.com এখানে zihad.ph হলো ইউজার নেইম,  gmail.com হলো ডোমেইন নেইম।  তোমাকে এমন একটি ফাংশন বানাতে হবে যা input হিসেবে একটা email নিবে।  ফাংশনের কাজ হবে, ইমেইলে থাকা `username` ও `domain  name` আংশ গুলো ব্যবহার করে, একটি notification message তৈরি করা।  
ফাংশনটি একটি নতুন string রিটার্ন করবে যেখানে ইমেলে থাকা `username` ও `domain name` অংশ ২টি ব্যবহার করে notification  এর জন্য মেসেজ তৈরি করতে হবে ।  Output কি হবে সেটা নিচে  ভাল করে দেখো।  
Input :  ইনপুট হবে একটি string, যা হবে একটি ইমেইল (যেমন, zihad@gmail.com) 
@ ক্যারেক্টার টি স্ট্রিং এ একবার ই থাকবে। এটা  userName  এবং DomainName  এর মাঝখানে ই থাকবে।  


Output: zihad.ph@gmail.com এই ইমেইলের জন্যে আউটপুট টি হবে ঠিক এরকম। 
zihad.ph sent you an email from gmail.com


Challenge 📢 : যদি ইনপুটটি একটি valid email না হয় অর্থাৎ ইমেইলে @ না থাকে তাহলে একটি এরোর মেসেজ "Invalid Email" রিটার্ন করবে।  


 */


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
// testing and function calling here 

const test = sendNotification('sadia8icloud.com');
console.log(test);
