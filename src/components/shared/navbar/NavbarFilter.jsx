import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/shared/NavbarFilter.module.css';
import { HistoryIcon, SearchIcon } from '@/assets/icons/icons';
import autosuggestions from '@/data/filterAutosuggestions.json';

const NavbarFilter = () => {
    const router = useRouter();
    const [isInputActive, setIsInputActive] = useState(false);
    const [searchWord, setSearchWord] = useState("");
    const [suggestions, setSuggestions] = useState(autosuggestions);
    const [searchHistory, setSearchHistory] = useState([]);
    const [filteredHistory, setFilteredHistory] = useState([]);

    useEffect(() => {
        const storedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        setSearchHistory(storedHistory);
        setFilteredHistory(storedHistory);
    }, []);

    const saveSearchToHistory = (searchTerm) => {
        const updatedHistory = [searchTerm, ...searchHistory.filter(item => item !== searchTerm)];

        if (updatedHistory.length > 4) {
            updatedHistory.pop();
        }

        setSearchHistory(updatedHistory);
        localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
    };

    const handleSearchChange = async (event) => {
        event.preventDefault();
        const value = event.target.value;
        setSearchWord(value);

        const filteredSuggestions = autosuggestions.filter((item) =>
            item.toLowerCase().startsWith(value.toLowerCase())
        );

        setSuggestions(filteredSuggestions);

        const filteredHistoryItems = searchHistory.filter((item) =>
            item.toLowerCase().startsWith(value.toLowerCase())
        );

        setFilteredHistory(filteredHistoryItems);

    };

    const handleBlur = () => {
        setTimeout(() => {
            setIsInputActive(false);
        }, 180);
    };

    const onSubmit = (event) => {
        event?.preventDefault();

        if (searchWord) {
            saveSearchToHistory(searchWord);
            router.push({
                pathname: '/search-results',
                query: { searchKey: searchWord },
            });
        }
    }

    const handleSuggestionClick = (suggestion) => {
        setSearchWord(suggestion);
        saveSearchToHistory(suggestion);
        router.push({
            pathname: '/search-results',
            query: { searchKey: suggestion },
        });
    };

    return (
        <div className={styles.filter_area}>
            <form className={styles.filter} onSubmit={onSubmit}>
                <input
                    type="search"
                    value={searchWord}
                    onChange={handleSearchChange}
                    onFocus={() => setIsInputActive(true)}
                    onBlur={handleBlur}
                    placeholder="Search"
                />
                <button type='submit'><SearchIcon size={14} /></button>
            </form>
            {
                isInputActive && (filteredHistory.length > 0 || suggestions.length > 0) && <div className={styles.autosuggestions}>
                    {
                        filteredHistory.map((item) => {
                            return (
                                <button key={item} onClick={() => { handleSuggestionClick(item); }}><HistoryIcon />{item}</button>
                            );
                        })
                    }
                    {
                        suggestions.slice(0, 4).map((item) => {
                            return (
                                <button key={item} onClick={() => { handleSuggestionClick(item); }}><SearchIcon />{item}</button>
                            );
                        })
                    }
                </div>
            }
        </div>
    );
}

export default NavbarFilter;