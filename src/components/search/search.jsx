import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import './search.css';

const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '498c524b90mshda702a61112494cp1ce903jsn62d1b64f5f31',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

const Search = ({onSearchChange, className}) =>{

    const [search, setSearch] = useState(null);

    const loadOptions=(inputValue) => {
        return fetch(`${process.env.REACT_APP_GEO_API_URL}/cities?languageCode=en&minPopulation=200000&namePrefix=${inputValue}`, geoApiOptions)
        .then(response => response.json())
        .then(response => {
            console.log({response})
            return {
                options: response.data.map((city) => {
                    return{
                        value: `${city.latitude} ${city.longitude}`, 
                        label: `${city.name}, ${city.countryCode}`, 
                    };
                }),
            };
        })
        .catch(err => console.error(err));
    }

    const handleOnChange = (searchData) => {
        console.log(searchData)
        setSearch(searchData);
        onSearchChange(searchData);
    }

    console.log("search")
    return(
        <AsyncPaginate
        placeholder = " Search for city"
        debounceTimeout={600}
        value = {search}
        onChange = {handleOnChange}
        loadOptions={loadOptions}
        className={className}
        />
    )
}

export default Search;