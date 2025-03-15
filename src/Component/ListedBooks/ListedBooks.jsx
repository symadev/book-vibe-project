import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../Utility/toDB';
import Book from '../Book/Book';


//ideally we will  get the read book list from the database

const ListedBooks = () => {


const [readList,setReadList]= useState([]);
    const  allBooks = useLoaderData();

    useEffect(()=>{
const storedReadList = getStoredReadList();
const storedReadListInt = storedReadList.map(id => parseInt(id));

console.log( storedReadList,storedReadListInt,allBooks)



const readBooklist = allBooks.filter(book => storedReadListInt.includes(book.bookId));
setReadList(readBooklist);
    },[])

    // এই কোডটি এমন বইয়ের তালিকা তৈরি করে, যেগুলো আগেই storedReadListInt তালিকায় ছিল,
    //  এবং তারপর সেই ফিল্টার করা বইগুলো setReadList এর মাধ্যমে সংরক্ষণ করে।




    // useLoaderData() দিয়ে allBooks নামের বইয়ের তথ্য লোড করা হচ্ছে।
    // getStoredReadList() ফাংশন থেকে ইউজারের পড়া বইয়ের লিস্ট আনা হচ্ছে।
    // সেই লিস্টের id গুলো সংখ্যায় রূপান্তর করা হচ্ছে।
    // শেষে সব ডাটা কনসোলে দেখানো হচ্ছে।
    // এই কোডের মূল উদ্দেশ্য হলো লোকাল স্টোরেজ থেকে পড়া বইয়ের তালিকা আনা এবং তা সংখ্যায় রূপান্তর করে কনসোলে দেখানো। 



    return (
        <div>
         
            <Tabs>
    <TabList>
      <Tab>Read List </Tab>
      <Tab>Wish LIst</Tab>
    </TabList>
<br />
    <TabPanel>
      <h2 className='text-3xl'>Books i Read:{readList.length}</h2>

      {
   readList.map( book=> <Book book={book} key = {book.bookId}></Book>)
}

    </TabPanel>
    <TabPanel>
      <h2>My Wish List</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ListedBooks;