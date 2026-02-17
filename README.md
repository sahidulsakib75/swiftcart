1) What is the difference between null and undefined?

null → এটা ইচ্ছাকৃতভাবে (intentionally) সেট করা একটি ভ্যালু, যার মানে হচ্ছে:
“এখানে ভ্যালু থাকার কথা ছিল, কিন্তু আমি নিজে থেকে ফাঁকা করে দিয়েছি।”

undefined → এটা স্বয়ংক্রিয়ভাবে আসে, যখন কোনো ভ্যারিয়েবল ডিকলার করা হয় কিন্তু তাতে কোনো ভ্যালু অ্যাসাইন করা হয় না।

2) What is the use of the map() function in JavaScript? How is it different from forEach()?

map() একটি existing array থেকে নতুন একটি array তৈরি করে, যেখানে প্রতিটি element-এর উপর নির্দিষ্ট transformation প্রয়োগ করা হয়। immutable behavior
forEach() শুধু loop চালায়, কিছু return করে না


3) What is the difference between == and ===?

== → value compare করে
=== → value + type দুটোই compare করে (recommended)

4) What is the significance of async/await in fetching API data?

async/await ব্যবহার করে asynchronous কোড লেখা যায় এমনভাবে, যেন সেটা synchronous কোডের মতো সহজ ও readable হয়।

5) Explain the concept of Scope in JavaScript (Global, Function, Block).

Scope মানে হলো — কোনো variable বা function কোডের কোন অংশ থেকে access করা যাবে।
Global scope-এ ডিকলার করা ভ্যারিয়েবল পুরো প্রোগ্রাম জুড়ে যেকোনো জায়গা থেকে access করা যায়।
ফাংশনের ভেতরে ডিকলার করা ভ্যারিয়েবল শুধুমাত্র সেই ফাংশনের মধ্যেই কাজ করে।
{ } ব্লকের ভেতরে let ও const দিয়ে ডিকলার করা ভ্যারিয়েবল শুধু সেই ব্লকের মধ্যেই valid থাকে।