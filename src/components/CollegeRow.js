import React, { useState, useEffect } from 'react';
import CollegeCard from "./CollegeCard";
import Placement from "./Placement";
import CourseFees from "./CourseFees";
import UserReviews from "./UserReviews";
import Ranking from "./Ranking";
import InfiniteScroll from 'react-infinite-scroll-component';
import SearchBox from './SearchBar';

const CollegeRow = () => {
    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const [sortConfig, setSortConfig] = useState({ key: 'college_name', direction: 'ascending' });
    const [query, setQuery] = useState('');

    const itemsPerPage = 10;

    useEffect(() => {
        fetchInitialData();
    }, []);

    const fetchInitialData = async () => {
        const res = await fetch('/data.json');
        const data = await res.json();
        setItems(data.slice(0, itemsPerPage));
    };

    const fetchMoreData = async () => {
        setTimeout(async () => { 
            const res = await fetch('/data.json');
            const data = await res.json();
            const nextItems = data.slice(page * itemsPerPage, (page + 1) * itemsPerPage);
            setItems([...items, ...nextItems]);
            setPage(page + 1);
            if (nextItems.length < itemsPerPage) {
                setHasMore(false);
            }
        }, 2000);  
    };

    const getNestedValue = (obj, path) => {
        return path.split('.').reduce((acc, key) => acc && acc[key], obj);
    };

    const sortBy = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }

        const sortedArray = [...items].sort((a, b) => {
            const aValue = getNestedValue(a, key);
            const bValue = getNestedValue(b, key);

            if (aValue < bValue) {
                return direction === 'ascending' ? -1 : 1;
            }
            if (aValue > bValue) {
                return direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });

        setItems(sortedArray);
        setSortConfig({ key, direction });
    };

    const getSortIcon = (key) => {
        if (sortConfig.key === key) {
            return sortConfig.direction === 'ascending' ? '↑' : '↓';
        }
        return '';
    };

    const filteredColleges = items.filter(college =>
        college.college_name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <>
            <div className='searchbox'><SearchBox query={query} setQuery={setQuery} /></div>
            <InfiniteScroll
                dataLength={filteredColleges.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={<p>No more data</p>}
            >
                <table>
                    <thead>
                        <tr style={{backgroundColor:"#78bec3",color:"#fff"}}>
                            <th onClick={() => sortBy('cdr')}>CD Rank {getSortIcon('cdr')}</th>
                            <th onClick={() => sortBy('college_name')}>Colleges {getSortIcon('college_name')}</th>
                            <th onClick={() => sortBy('course_fee_details.college_fees')}>College Fees {getSortIcon('course_fee_details.college_fees')}</th>
                            <th onClick={() => sortBy('placement_details.average_package')}> Placement {getSortIcon('placement_details.average_package')}</th>
                            <th onClick={() => sortBy('user_reviews.average_rating')}>User Reviews{getSortIcon('user_reviews.average_rating')}</th>
                            <th onClick={() => sortBy('ranking_details.india_today_rank')}>Ranking {getSortIcon('ranking_details.india_today_rank')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredColleges.map((college, index) => (
                            <tr key={college.cdr} style={{backgroundColor:college.featured?"#fff0e6":"#fff"}}>
                                <td style={{fontWeight:"bold"}}>{`#${college.cdr}`}</td>
                                <td> {college.featured && <div className="featured-tag">Featured</div>}
                                <CollegeCard data={college} /></td>
                                <td><CourseFees data={college} /></td>
                                <td><Placement data={college} /></td>
                                <td><UserReviews data={college} /></td>
                                <td><Ranking data={college} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </InfiniteScroll>
        </>
    );
};

export default CollegeRow;