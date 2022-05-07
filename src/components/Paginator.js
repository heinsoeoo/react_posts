import React, { useState } from 'react';

const Paginator = (data, itemsPerPage) => {
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(data.length/itemsPerPage);

    function currentData() {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return data.slice(start, end);
    }

    const next = () => {
        setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
    }

    const prev = () => {
        setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
    }

    const jump = (page) => {
        const pageNum = Math.max(1, page);
        setCurrentPage(currentPage => Math.min(pageNum, maxPage));
    }

    return { currentPage, maxPage, currentData, next, prev, jump };
}

export default Paginator;