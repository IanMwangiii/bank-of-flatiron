import React, { useState } from 'react';

const TransactionFilter = ({ onChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onChange(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search transactions"
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default TransactionFilter;