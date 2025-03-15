const getStoredReadList = () => {
    const storedlistStr = localStorage.getItem('read-list');
    if (storedlistStr) {
        return JSON.parse(storedlistStr);
    } else {
        return [];
    }
};



const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        console.log(id, 'already exists in the read list');
    } else {
        storedList.push(id);
        localStorage.setItem('read-list', JSON.stringify(storedList));
    }
};



const getStoredWishList = () => {
    const storedlistStr = localStorage.getItem('wish-list');
    if (storedlistStr) {
        return JSON.parse(storedlistStr);
    } else {
        return [];
    }
};



const addToStoredWishList = (id) => {
    const storedList = getStoredWishList();
    if (storedList.includes(id)) {
        console.log(id, 'already exists in the wish list');
    } else {
        storedList.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storedList));
    }
};




export{ addToStoredReadList,addToStoredWishList,getStoredReadList};


//এই ফাইলটি মূলত Local Storage ব্যবহার করে একটি "Read List" সংরক্ষণ ও আপডেট করার জন্য ব্যবহার করা হয়।



//**
// 
//  ডাটা Local Storage-এ সংরক্ষণ করলে পেজ রিফ্রেশ করলেও তথ্য মুছে যায় না।
//  ব্যবহারকারী তার পড়া বইগুলোর তালিকা দেখতে পারে এবং নতুন বই যোগ করতে পারে।
//  আলাদা ফাইলে রাখার ফলে কোড মডুলার হয়, যা পুনঃব্যবহারযোগ্য ও সহজে ব্যবস্থাপনা করা যায়।
// // 
//  */