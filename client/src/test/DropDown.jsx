import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import {Names} from './Names'
import Booktile from './Booktile';
import "./DropDown.css"

const DropDown = () => {

    // const searchNames = [
    //     { value: 'Sydney', label: 'Sydney' },
    //     { value: 'Melbourne', label: 'Melbourne' },
    //     { value: 'Brisbane', label: 'Brisbane' },
    //     { value: 'Adelaide', label: 'Adelaide' },
    //     { value: 'Perth', label: 'Perth' },
    //     { value: 'Hobart', label: 'Hobart' },
    //   ];

    const options = Names.map(name => ({
      value: name.title,
      label: name.title
    }));

    

      const [selectedOption, setSelectedOption] = useState(null);
      const [books, setBooks] = useState()
      // const [bookname, setBookname] = useState([])

      // // const bArray = bookname.split(',');

      // const options = bookname.map(name => ({
      //   value: name.title,
      //   label: name.title
      // }));
    
      const handleSelectName = (selectedOption) => {
        setSelectedOption(selectedOption);
        // setBooks(selectedOption.label)
        console.log('Selected item:', selectedOption.label);
        // console.log(books)
      };

      const sendBook = async (e) => {
        e.preventDefault();
        // const namebook =  selectedOption.label;
        try {
          const res = await axios.post('/predict', {book_name: selectedOption.label})
          // const res = await axios.post('/predict', {books: selectedOption.label},{
          //   withCredentials: true, // Include credentials with the request
          //   headers: {
          //     'Content-Type': 'application/json' // Set the content type header
          //   }
          // })
          console.log("books send")
          // console.log(books)
          console.log(res.data)
          setBooks(res.data)
          // const opt = res.data.map(name => ({
          //   value: name.title,
          //   label: name.title
          // }));
          // setBooks(opt)
          // console.log(books)
        } catch (error) {
          console.log("this doesn't work ")
          console.log(error)
        }
      }

      // const convert = JSON.parse(Names)

      // console.log(Names)

      // useEffect(() => {

      //   const fetchData = async () => {
      //     try {
      //       // axios.get('/books').then((data) => {
      //       //   console.log(data.data)
      //       //   setBooks(data.data)
      //       //   console.log(books)
      //       // });
  
      //       const res = await axios.get('/books');
      //       console.log(res.data)
      //       setBookname(res.data)
      //       // const final = JSON.parse(array)
      //       //   console.log(final)
      //         //  setBooks(searchNames)
      //         // console.log(books)
      //     } catch (error) {
      //       console.log("error occc"+ error)
      //       alert(error)
      //     }

      //   }
      //   fetchData()
        
      // }, []);
    
    return (
      <>
      <form action="" onSubmit={sendBook}>
      <div>
            <Select
        options={options}
        value={selectedOption}
        onChange={handleSelectName}
        placeholder='Search...'
      />
      <h1>Selected Book: {selectedOption ? selectedOption.label : 'None'}</h1>
      <button type='submit'>Show Recommendation</button>
        </div>
        


      </form>

      <div className="tile-section">
        {books && books[0].map((item,index) => <Booktile key={item._id} name={item}  img={books[1][index]} /> )}

          {/* <Booktile/> */}
        </div>
      
      </>
    );
}

export default DropDown;