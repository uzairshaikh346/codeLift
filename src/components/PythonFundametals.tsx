import Link from 'next/link'
import React from 'react'
// Ensure React is imported for JSX transformation

const PythonFundametals = () => {
    const items = [
        {   
            step:1,
            title:'Introduction To Python',
            text:'To start coding in Python on your local machine, the first step is to install Python. After that, you can set up a virtual environment for better project management.here the link of Python Installation video by Chai aur Code : ',word:' Python Installation',
            link:'https://youtu.be/0e2e2KcoQm4?si=okt-ALr8r1Zu9erp'},
        {
            step: 2,
            title: 'Inner Working Of Python',
            text: 'In this Code to Design tutorial, you will gain a deeper understanding of how Python works under the hood.You will explore how Python executes code, manages memory, and handles variables behind the scenes.By the end, you will have a clearer picture of what happens internally when you run a Python program.',
            word: ' Inner Working Of Python',
            link: 'https://youtu.be/ac2gQlYq_rY?si=vpx0LfeoAEbE93nL'
          },
        {
            step: 3,
            title: 'Data Types In Python',
            text: 'In this Chai aur Code lecture, you will explore various data types in Python.You will learn how to use them effectively in real-world coding scenarios.This session is perfect for beginners aiming to strengthen their Python fundamentals.',
            word: ' Data Types In Python',
            link: 'https://youtu.be/v8veitfmmDo?si=x2q9wj7UvfLUDEyV'
          },
        {
            step: 4,
            title: 'String in Depth',
            text: 'In this Chai aur Code lecture, you’ll dive deep into strings in Python.You will explore string methods, formatting, slicing, and much more.This session is ideal for mastering one of Python’s most powerful data types.',
            word: ' String in depth',
            link: 'https://youtu.be/ekrgx893sig?si=4Vrv2NSAdqF-O3iD'
          },
        {
            step: 5,
            title: 'Numbers in Depth',
            text: 'In this Chai aur Code lecture, you’ll learn numbers in depth in Python.You will explore integers, floats, complex numbers, and related operations.Perfect for building a solid foundation in Python’s numeric data types.',
            word: ' Numbers in depth',
            link: 'https://youtu.be/E4GNbP4SbKM?si=pCUj789RX8-ka7hh'
          },
        
          

    ]
    
  return (
    <>
     <div className='w-full bg-blue-100'>
        {items.map((item,index:number) => (
        
            <div key={index} className='w-[50%] text-xl p-5'>
                <h1>Python #{item.step}</h1>
                <p className='mt-3'>{item.text}<Link href={item.link}><span className='text-blue-500 hover:text-purple-700'>{item.word}</span></Link></p>
            </div>
        ))}
     </div>
    </>
  )
}

export default PythonFundametals