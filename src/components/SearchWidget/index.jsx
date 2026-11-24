import { useState, useEffect } from 'react';
import ShowList from '../ShowList';
import SearchForm from '../SearchForm';
import FilterShow from '../FilterShow';

export default function SearchWidget() {
    

    return (
        <div className='search-controls'>  
            <SearchForm/>            
            <ShowList/>
        </div>
        
    );
}